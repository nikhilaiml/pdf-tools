'use server'

// NOTE: We use dynamic imports for ALL puppeteer related packages to ensure
// compatibility across Vercel (serverless) and Local environments.
// Do NOT add top-level imports for puppeteer, puppeteer-core, or @sparticuz/chromium.

export async function convertUrlToPdf(url: string) {
    let browser;
    try {
        // Validate URL
        new URL(url); // Will throw if invalid

        // Vercel / Production Check
        if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_VERSION) {
            console.log("Running in Vercel/Production mode");
            // @ts-ignore
            const chromium = await import('@sparticuz/chromium').then(mod => mod.default);
            // @ts-ignore
            const puppeteerCore = await import('puppeteer-core').then(mod => mod.default);

            // @ts-ignore
            browser = await puppeteerCore.launch({
                args: chromium.args,
                defaultViewport: chromium.defaultViewport,
                executablePath: await chromium.executablePath(),
                headless: chromium.headless as any,
                ignoreHTTPSErrors: true,
            } as any);
        } else {
            console.log("Running in Local mode");
            // Local Development - Dynamic import to avoid build-time hard dependency if unused
            // @ts-ignore
            const puppeteer = await import('puppeteer').then(mod => mod.default);
            browser = await puppeteer.launch({
                headless: true, // Use boolean for standard puppeteer
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
        }

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
