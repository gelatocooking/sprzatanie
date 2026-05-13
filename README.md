# SprzataniePro

Next.js landing pages for cleaning service lead generation.

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Contact Form

Lead forms submit to `/api/contact` and send email through SMTP. Configure these environment variables locally and on hosting:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=bednarkacp1506@gmail.com
SMTP_PASS=quhb eeon iocp ukhs
SMTP_FROM="Sprzatanie website"
CONTACT_EMAIL_TO=bednarkacp1506@gmail.com
```

## Design System

The shared design system is documented in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

Core files:

- `src/app/tokens.css`
- `src/app/primitives.css`
- `src/app/components.css`
- `src/components/ui`
