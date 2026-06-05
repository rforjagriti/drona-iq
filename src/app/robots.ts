import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/student/', '/parent-dashboard/', '/tutor/dashboard/', '/assistant/'],
    },
    sitemap: 'https://doondefenceexam.com/sitemap.xml',
    host: 'https://doondefenceexam.com',
  }
}
