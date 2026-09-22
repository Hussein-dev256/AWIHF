import type { MetadataRoute } from 'next';
import { organizationProfile } from '@/lib/config/organization';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || organizationProfile.url;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
