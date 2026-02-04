import type { Metadata } from 'next';
import JpgToPdfClient from './JpgToPdfClient';

export const metadata: Metadata = {
    title: 'JPG to PDF Converter - Convert Images to PDF for Free',
    description: 'Convert JPG, PNG, and other image files to PDF online for free. Fast, secure, and easy to use. No installation required.',
    keywords: ['jpg to pdf', 'png to pdf', 'image to pdf', 'convert jpg to pdf', 'free pdf tools', 'online pdf converter'],
    alternates: {
        canonical: '/tools/jpg-to-pdf',
    },
};

export default function JpgToPdfPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'JPG to PDF Converter',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        description: 'Convert JPG, PNG, and other image files to PDF online for free.',
        url: 'https://usepdf.in/tools/jpg-to-pdf',
        author: {
            '@type': 'Organization',
            name: 'UsePDF',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <JpgToPdfClient />
        </>
    );
}
