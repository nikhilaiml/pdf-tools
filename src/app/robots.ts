import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/admin/', '/_next/', '/temp/', '/uploads/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/', '/admin/', '/temp/', '/uploads/'],
            },
        ],
        sitemap: 'https://www.usepdf.in/sitemap.xml',
        host: 'https://www.usepdf.in',
    };
}
