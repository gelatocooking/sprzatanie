import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const ignoredFields = new Set(["website", "_sourcePath"]);

function env(name: string) {
  return process.env[name]?.trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeValue(value: FormDataEntryValue) {
  if (typeof value === "string") {
    return value.trim();
  }

  return value.size > 0 ? `${value.name} (${Math.round(value.size / 1024)} KB)` : "";
}

function getAllFields(formData: FormData) {
  const fields = new Map<string, string[]>();

  for (const [key, value] of formData.entries()) {
    if (ignoredFields.has(key)) {
      continue;
    }

    const normalized = normalizeValue(value);

    if (!normalized) {
      continue;
    }

    const values = fields.get(key) || [];
    values.push(normalized);
    fields.set(key, values);
  }

  return fields;
}

function pickReplyTo(fields: Map<string, string[]>) {
  const candidates = ["email", "e-mail", "mail"];

  for (const key of candidates) {
    const value = fields.get(key)?.[0];

    if (value && value.includes("@")) {
      return value;
    }
  }

  return undefined;
}

function renderText(fields: Map<string, string[]>, sourcePath: string) {
  const lines = [`Nowe zgloszenie ze strony: ${sourcePath}`, ""];

  for (const [key, values] of fields.entries()) {
    lines.push(`${key}: ${values.join(", ")}`);
  }

  return lines.join("\n");
}

function renderHtml(fields: Map<string, string[]>, sourcePath: string) {
  const rows = Array.from(fields.entries())
    .map(([key, values]) => {
      return `
        <tr>
          <th align="left" style="padding:8px 12px;border-bottom:1px solid #e5e5e5;">${escapeHtml(key)}</th>
          <td style="padding:8px 12px;border-bottom:1px solid #e5e5e5;">${escapeHtml(values.join(", "))}</td>
        </tr>`;
    })
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1b1814;">
      <h2>Nowe zgloszenie ze strony</h2>
      <p><strong>Podstrona:</strong> ${escapeHtml(sourcePath)}</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:720px;">
        ${rows}
      </table>
    </div>`;
}

export async function POST(request: Request) {
  const formData = await request.formData();

  if (formData.get("website")) {
    return NextResponse.json({ message: "Dzieki, zgloszenie zostalo wyslane." });
  }

  const fields = getAllFields(formData);
  const sourcePath = String(formData.get("_sourcePath") || request.headers.get("referer") || "/");

  if (!fields.size) {
    return NextResponse.json({ message: "Formularz jest pusty." }, { status: 400 });
  }

  const host = env("SMTP_HOST");
  const user = env("SMTP_USER");
  const pass = env("SMTP_PASS");
  const to = env("CONTACT_EMAIL_TO");
  const from = env("SMTP_FROM") || user;
  const port = Number(env("SMTP_PORT") || 587);
  const secure = env("SMTP_SECURE") === "true" || port === 465;

  if (!host || !user || !pass || !to || !from) {
    return NextResponse.json(
      { message: "Brakuje konfiguracji SMTP na serwerze." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: pickReplyTo(fields),
    subject: `Nowe zgloszenie ze strony ${sourcePath}`,
    text: renderText(fields, sourcePath),
    html: renderHtml(fields, sourcePath),
  });

  return NextResponse.json({ message: "Dzieki, zgloszenie zostalo wyslane." });
}
