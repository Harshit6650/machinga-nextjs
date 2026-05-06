import { MetadataRoute } from 'next'
export const dynamic = 'force-static';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://studiomachinga.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://studiomachinga.com/hamleys',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://studiomachinga.com/aava',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://studiomachinga.com/contraband',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://studiomachinga.com/appreciate',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
