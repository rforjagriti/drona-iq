
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dronaiq.com'
  
  const areas = [
    "Rajpur Road", "Sahastradhara Road", "Jakhan", "Canal Road", "Old Rajpur", "Dalanwala", 
    "Vasant Vihar", "Indira Nagar", "Balliwala", "Ballupur", "Prem Nagar", "Clement Town", 
    "Patel Nagar", "GMS Road", "Chakrata Road", "Kaulagarh", "Kishan Nagar", "Nehru Colony",
    "Race Course", "Vikas Nagar", "Selaqui", "Doon IT Park", "Aman Vihar", "Majra"
  ];

  const areaRoutes = areas.map((area) => ({
    url: `${baseUrl}/tuition-in/${area.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const staticRoutes = [
    '',
    '/admissions',
    '/classes',
    '/home-tuition',
    '/results',
    '/about',
    '/contact',
    '/academic-health-check',
    '/career-guidance',
    '/revision-generator',
    '/blog'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.9,
  }));

  return [...staticRoutes, ...areaRoutes];
}
