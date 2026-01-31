'use server'

import puppeteer from 'puppeteer';

export async function convertUrlToPdf(url: string) {
    let browser;
    try {
        // Validate URL
        new URL(url); // Will throw if invalid

        browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();

        // Set viewport to standard desktop size for better rendering
        await page.setViewport({ width: 1280, height: 1024 });

        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: {
                top: '1cm',
                bottom: '1cm',
                left: '1cm',
                right: '1cm',
            },
        });

        // Convert Buffer to Base64 to send back to client
        return {
            success: true,
            data: Buffer.from(pdfBuffer).toString('base64'),
        };

    } catch (error) {
        console.error('Puppeteer Error:', error);
        return {
            success: false,
            error: (error as Error).message || 'Failed to convert URL to PDF',
        };
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}
