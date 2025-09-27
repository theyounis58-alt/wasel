import { NextRequest } from 'next/server';

const BASE_URL = 'https://waselalsabreen.com';

const routes = [
  '',
  '/about',
  '/services',
  '/fleet',
  '/clients',
  '/contact'
];

const locales = ['en', 'ar'];

export async function GET(request: NextRequest) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${locales.map(locale => 
    routes.map(route => `
      <url>
        <loc>${BASE_URL}/${locale}${route}</loc>
        <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>${route === '' ? '1.0' : '0.8'}</priority>
        ${locales.map(altLocale => 
          altLocale !== locale 
            ? `<xhtml:link rel="alternate" hreflang="${altLocale}" href="${BASE_URL}/${altLocale}${route}" />`
            : ''
        ).join('')}
      </url>
    `).join('')
  ).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}