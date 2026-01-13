import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tcms.example.com';

  const routes = ['', '/features', '/benefits', '/industries', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = locale === 'bg' ? `${baseUrl}${route}` : `${baseUrl}/${locale}${route}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
        alternates: {
          languages: {
            bg: locale === 'bg' ? url : `${baseUrl}${route}`,
            en: locale === 'en' ? url : `${baseUrl}/en${route}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
