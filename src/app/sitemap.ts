import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://usepdf.in';

export default function sitemap(): MetadataRoute.Sitemap {
    // Dynamically get all tool directories
    const toolsDirectory = path.join(process.cwd(), 'src/app/tools');
    let tools: string[] = [];

    try {
        const folders = fs.readdirSync(toolsDirectory);
        tools = folders.filter(folder => {
            const folderPath = path.join(toolsDirectory, folder);
            return fs.statSync(folderPath).isDirectory();
        });
    } catch (error) {
        console.error("Error generating sitemap:", error);
        // Fallback to manual list if FS fails (e.g. some edge environments)
        tools = [
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
    }

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
