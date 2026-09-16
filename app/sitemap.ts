import type { MetadataRoute } from 'next';
import { getNewsPosts } from '@/lib/content/news';

const staticRoutes = [
  { path: '', priority: 1 },
  { path: '/about', priority: 0.9 },
  { path: '/programs', priority: 0.9 },
  { path: '/impact', priority: 0.9 },
  { path: '/news', priority: 0.85 },
  { path: '/get-involved', priority: 0.85 },
  { path: '/contact', priority: 0.85 },
  { path: '/donate', priority: 0.85 },
  { path: '/impact/report', priority: 0.75 },
  { path: '/mentorship', priority: 0.75 },
  { path: '/team', priority: 0.7 },
];

const programRoutes = [
  '/programs/maternal-reproductive-health',
  '/programs/mental-health-trauma-support',
  '/programs/community-health-education',
  '/programs/healthcare-systems-strengthening',
  '/programs/school-community-outreach-programme',
  '/programs/mentorship',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://acholiwomeninhealth.org';
  const newsPosts = await getNewsPosts();
  const routes = [
    ...staticRoutes,
    ...programRoutes.map((path) => ({ path, priority: 0.72 })),
    ...newsPosts.map((post) => ({ path: `/news/${post.slug}`, priority: 0.65 })),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.path === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route.priority,
  }));
}
