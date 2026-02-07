import { MetadataRoute } from 'next';
import { practiceAreas } from '@/data/practiceAreas';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://henning-law.com';

    // Static pages
    const staticPages = [
        '',
        '/attorney-bio',
        '/practice-areas',
        '/contact',
        '/testimonials',
        '/faqs',
        '/blog',
        '/privacy',
        '/terms',
        '/accessibility',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: (route === '' ? 'weekly' : 'monthly') as MetadataRoute.Sitemap[0]['changeFrequency'],
        priority: route === '' ? 1 : route === '/practice-areas' ? 0.9 : 0.8,
    }));

    // Dynamic practice area pages
    const practiceAreaPages = practiceAreas.map((area) => ({
        url: `${baseUrl}/practice-areas/${area.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...practiceAreaPages];
}
