import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://globaldigitalexperts.info'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/work-positions', '/sitemap.xml', '/sitemap-index.xml'],
        disallow: ['/_next/', '/admin/', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap-index.xml`,
    host: baseUrl,
  }
}
