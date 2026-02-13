import type { Metadata } from 'next';
import DeskewPdfClient from './DeskewPdfClient';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Deskew PDF Online Free – Straighten & Fix Crooked PDF Instantly | UsePDF',
    description: 'Deskew PDF online and straighten scanned PDF pages instantly. Fix crooked or tilted documents in seconds. 100% Free & Secure.',
    alternates: {
        canonical: 'https://www.usepdf.in/tools/deskew-pdf',
    },
    openGraph: {
        title: 'Deskew PDF Online Free – Straighten & Fix Crooked PDF Instantly | UsePDF',
        description: 'Deskew PDF online and straighten scanned PDF pages instantly. Fix crooked or tilted documents in seconds. 100% Free & Secure.',
        url: 'https://www.usepdf.in/tools/deskew-pdf',
        type: 'website',
        images: ['/og-image.jpg']
    }
};

export default function DeskewPdfPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'How can I deskew PDF online for free?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can deskew PDF online for free using UsePDF. Simply upload your crooked or tilted PDF, and our tool will automatically straighten the pages in seconds. No signup required.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do I straighten a skewed PDF?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'To straighten a skewed PDF, upload it to our Deskew PDF tool. The AI-powered engine detects the tilt angle and corrects it automatically, giving you a perfectly aligned document.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is the difference between rotate and deskew PDF?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Rotate PDF turns pages by 90-degree increments (90°, 180°, 270°), while Deskew PDF fixes small tilt angles (e.g., 5° or 10°) often found in scanned documents to make the text horizontal.',
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Deskew PDF Online Free – Straighten & Fix Crooked PDF Instantly
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Deskew PDF online and straighten scanned PDF pages instantly. Fix crooked or tilted documents in seconds.
                    </p>
                </div>

                {/* Tool Client */}
                <DeskewPdfClient />

                {/* SEO Content */}
                <div className="mt-16 prose prose-invert max-w-none">
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Deskew PDF Online in Seconds</h2>
                        <p className="text-gray-300 mb-4">
                            Scanned documents often end up tilted or crooked, making them hard to read and unprofessional.
                            With our <strong>deskew PDF online free</strong> tool, you can automatically fix these alignment issues without installing heavy software.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Whether you need to <strong>straighten PDF</strong> pages that were scanned at an angle or
                            <strong> fix skewed PDF document</strong> files from a mobile scanner app, our tool handles it all.
                            We use advanced processing to <strong>correct tilted scanned PDF</strong> files, ensuring your text lines are perfectly horizontal.
                        </p>
                        <p className="text-gray-300">
                            Don't let a bad scan ruin your document quality. <strong>Adjust PDF tilt angle</strong> precisely and improve OCR accuracy with just one click.
                        </p>
                    </section>

                    <section className="mb-12 bg-slate-800 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-6">Deskew PDF vs Rotate PDF: Difference?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-blue-400">Rotate PDF</h3>
                                <p className="text-gray-300">
                                    Rotation is for pages that are sideways or upside down. It turns pages in fixed 90-degree increments (90°, 180°, 270°).
                                    If your PDF is completely on its side, you need to <Link href="/tools/rotate-pdf" className="text-blue-400 hover:underline">rotate PDF</Link>.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-green-400">Deskew PDF</h3>
                                <p className="text-gray-300">
                                    Deskewing is for <strong>straightening PDF</strong> pages that are slightly tilted (e.g., 5° or 12°).
                                    This acts as a "fine-tune" alignment to making text horizontal. If your scan looks crooked, you need to deskew it.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-gray-400">
                                Need to clean up your scanned files further? You might also want to <Link href="/tools/scan-to-pdf" className="text-blue-400 hover:underline">fix PDF alignment</Link> and convert scans to crisp PDFs.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">How can I deskew PDF online for free?</h3>
                                <p className="text-gray-300">
                                    You can deskew PDF online for free using UsePDF. Simply upload your crooked or tilted PDF, and our tool will automatically straighten the pages in seconds. No signup required.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">How do I straighten a skewed PDF?</h3>
                                <p className="text-gray-300">
                                    To straighten a skewed PDF, upload it to our Deskew PDF tool. The AI-powered engine detects the tilt angle and corrects it automatically, giving you a perfectly aligned document.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">What is the difference between rotate and deskew PDF?</h3>
                                <p className="text-gray-300">
                                    Rotate PDF turns pages by 90-degree increments (90°, 180°, 270°), while Deskew PDF fixes small tilt angles (e.g., 5° or 10°) often found in scanned documents to make the text horizontal.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
