import { MetadataRoute } from 'next'
import { tools } from './tools/tools'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.usepdf.in'

    // Static routes
    const routes = [
        '',
        '/contact',
        '/legal',
        '/terms',
        '/gdpr',
        '/cookies',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic tool routes
    const toolRoutes = tools.map((tool) => ({
        url: `${baseUrl}/tools/${tool.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...toolRoutes]
}
