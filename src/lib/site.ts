const FALLBACK_SITE_URL = "https://uslugisprzataniawroclaw.pl/";

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;
  const normalizedSiteUrl = siteUrl.replace("://www.", "://");

  return normalizedSiteUrl.endsWith("/") ? normalizedSiteUrl.slice(0, -1) : normalizedSiteUrl;
}
