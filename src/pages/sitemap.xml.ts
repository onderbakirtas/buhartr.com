import type { APIRoute } from "astro";

const getSitemapXML = (siteURL: URL) =>
`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${siteURL.href}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
`;

export const GET: APIRoute = ({ site }) => {
  const siteURL = new URL("/", site);
  return new Response(getSitemapXML(siteURL), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
