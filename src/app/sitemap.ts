import { Metadata, Route } from 'next';

const baseUrl = 'https://usepdf.in';

export default function sitemap(): Metadata extends { sitemap?: infer S } ? S : any {
    // Manual list of tools based on the folders seen in exploration
    const tools = [
        'merge-pdf', 'split-pdf', 'compress-pdf', 'pdf-to-word', 'word-to-pdf',
        'excel-to-pdf', 'pdf-to-excel', 'pdf-to-ppt', 'ppt-to-pdf',
        'pdf-to-jpg', 'jpg-to-pdf', 'html-to-pdf', 'delete-pages',
        'rotate-pdf', 'add-page-numbers', 'add-watermark', 'unlock-pdf',
        'protect-pdf', 'flatten-pdf', 'deskew-pdf', 'repair-corrupted-pdf',
        'share-pdf', 'reorder-pages', 'compare-pdfs', 'scan-to-pdf',
        'pdf-translator', 'redact-pdf', 'remove-metadata', 'view-metadata',
        'pdf-to-text', 'pdf-to-audio', 'chat-with-pdf', 'batch-processing',
        'screenshot-to-pdf'
    ];

    const routes = [
        '',
        ...tools.map(tool => `/tools/${tool}`)
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
