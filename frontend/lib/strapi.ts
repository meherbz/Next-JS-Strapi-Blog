export function getStrapiMedia(url: string): string {
  if (!url) return "";

  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  const strapiUrl =
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
  return `${strapiUrl}${url}`;
}
