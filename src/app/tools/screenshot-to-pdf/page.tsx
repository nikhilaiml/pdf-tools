import type { Metadata } from 'next';
import ScreenshotToPdfClient from './ScreenshotToPdfClient';

export const metadata: Metadata = {
    title: 'Screenshot to PDF – Convert Screenshots to PDF | UsePDF',
    description: 'Convert screenshots (PNG, JPG) to PDF. Combine multiple screenshots into one PDF file. Free and easy tool.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/screenshot-to-pdf',
    },
    openGraph: {
        title: 'Screenshot to PDF – Convert Screenshots to PDF | UsePDF',
        description: 'Convert screenshots (PNG, JPG) to PDF. Combine multiple screenshots into one PDF file. Free and easy tool.',
        url: 'https://www.usepdf.in/tools/screenshot-to-pdf',
    }
};

export default function ScreenshotToPdfPage() {
    return <ScreenshotToPdfClient />;
}
