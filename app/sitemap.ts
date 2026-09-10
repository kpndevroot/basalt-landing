import type { MetadataRoute } from 'next';

import { SITE } from './site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE}/privacy/`, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
