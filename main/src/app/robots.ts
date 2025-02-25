import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/privacy-policy',
    },
    sitemap: 'https://grei-s-dental-clinic-g3la.vercel.app/sitemap.xml',
  };
}