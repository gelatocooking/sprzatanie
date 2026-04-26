const FALLBACK_SITE_URL = "https://www.uslugisprzataniawroclaw.pl/";

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}
