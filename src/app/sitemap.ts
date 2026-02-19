import { MetadataRoute } from 'next'
import { tools } from './tools/tools'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.usepdf.in'
    const currentDate = new Date()

    const routes = [
        { route: '', lastModified: currentDate, priority: 1 },
        { route: '/tools', lastModified: currentDate, priority: 0.9 },
        { route: '/about', lastModified: currentDate, priority: 0.7 },
        { route: '/blog', lastModified: currentDate, priority: 0.8 },
        { route: '/contact', lastModified: currentDate, priority: 0.6 },
        { route: '/legal', lastModified: currentDate, priority: 0.5 },
        { route: '/terms', lastModified: currentDate, priority: 0.5 },
        { route: '/privacy', lastModified: currentDate, priority: 0.5 },
        { route: '/security', lastModified: currentDate, priority: 0.5 },
        { route: '/gdpr', lastModified: currentDate, priority: 0.5 },
        { route: '/cookies', lastModified: currentDate, priority: 0.5 },
    ].map(({ route, lastModified, priority }) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === '' || route === '/tools' ? 'weekly' as const : 'monthly' as const,
        priority,
    }))

    const toolRoutes = tools.map((tool) => ({
        url: `${baseUrl}/tools/${tool.id}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    return [...routes, ...toolRoutes]
}
