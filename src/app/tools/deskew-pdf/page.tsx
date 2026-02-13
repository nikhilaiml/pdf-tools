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
                    text: 'You can deskew PDF online for free using UsePDF. Simply upload your crooked or tilted PDF, and our tool uses advanced algorithms to automatically straighten the pages in seconds. We require no signup, payment, or installation.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do I straighten a skewed PDF?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'To straighten a skewed PDF, upload it to our Deskew PDF tool. The AI engine detects the skew angle (e.g., 5 degrees) and corrects it. You can also manually adjust the tilt using our precision slider for perfect alignment.',
                },
            },
            {
                '@type': 'Question',
                name: 'Can I fix a PDF scanned upside down?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'If the PDF is upside down (180 degrees), you should use our Rotate PDF tool. If it is just slightly tilted, use this Deskew tool to straighten it.',
                },
            },
            {
                '@type': 'Question',
                name: 'Is my document safe?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We use standard encryption for file transfer. Your files are processed on our secure servers and representatively deleted after one hour. We do not look at, store, or share your documents.',
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
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Deskew PDF Online in Seconds: The Ultimate Fix for Scanned Documents</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Scanned documents often suffer from alignment issues, appearing tilted or crooked. This not only looks unprofessional but also hinders readability and Optical Character Recognition (OCR) accuracy.
                            Our <strong>Deskew PDF Online Free</strong> tool is designed to solve this problem instantly. Whether you used a flatbed scanner or a mobile app like CamScanner, our AI-powered engine detects the skew angle and straightens your PDF pages automatically.
                            Say goodbye to manually rotating images in complex editing software. With UsePDF, you can <strong>fix crooked PDF</strong> files directly in your browser, securely and without cost.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold mb-3 text-blue-400">AI-Powered Correction</h3>
                                <p className="text-gray-400">
                                    Our smart algorithm analyzes text lines and document borders to calculate the precise rotation angle needed to <strong>straighten PDF</strong> pages perfectly.
                                </p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold mb-3 text-green-400">No Watermarks</h3>
                                <p className="text-gray-400">
                                    Professional results without the branding. Your deskewed documents remain clean and professional, with absolutely <strong>no watermarks</strong> added.
                                </p>
                            </div>
                            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                                <h3 className="text-xl font-bold mb-3 text-purple-400">Secure & Private</h3>
                                <p className="text-gray-400">
                                    We prioritize your privacy. All files are processed securely and automatically deleted from our servers after one hour. No one else sees your documents.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">How to Straighten Scanned PDF Pages Step-by-Step</h2>
                        <ol className="list-decimal pl-6 space-y-4 text-gray-300 marker:text-blue-500 marker:font-bold">
                            <li>
                                <strong>Upload Your Skewed PDF:</strong> Click the "Upload" button or drag and drop your file into the tool area. We support PDF files of various sizes.
                            </li>
                            <li>
                                <strong>Automatic Skew Detection:</strong> Once uploaded, our tool will display a preview. You can use the slider to manually <strong>adjust PDF tilt angle</strong> if you want to fine-tune the result beyond the auto-detection.
                            </li>
                            <li>
                                <strong>Preview the Correction:</strong> Watch as the page aligns in real-time. Our interactive preview ensures you get the exact <strong>straighten PDF</strong> result you need before saving.
                            </li>
                            <li>
                                <strong>Download the Fixed File:</strong> Click "Save & Download" to process the entire document. The correction will be applied to all pages, and your new, straight PDF will be ready instantly.
                            </li>
                        </ol>
                        <p className="mt-6 text-gray-400 bg-slate-800 p-4 rounded-lg border-l-4 border-blue-500">
                            <strong>Pro Tip:</strong> Deskewing is crucial before running OCR. A straight document significantly improves text recognition accuracy!
                        </p>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-8">UsePDF vs. Other Online PDF Tools</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-700 text-gray-400">
                                        <th className="py-4 px-4">Feature</th>
                                        <th className="py-4 px-4 text-blue-400 font-bold">UsePDF</th>
                                        <th className="py-4 px-4">Competitors (iLovePDF, Smallpdf)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-gray-800 bg-slate-800/50">
                                        <td className="py-4 px-4 font-medium">Cost</td>
                                        <td className="py-4 px-4 text-green-400 font-bold">100% Free</td>
                                        <td className="py-4 px-4">Limited Free / Paid</td>
                                    </tr>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-4 px-4 font-medium">Watermarks</td>
                                        <td className="py-4 px-4 text-green-400 font-bold">None</td>
                                        <td className="py-4 px-4">Sometimes on Free Plan</td>
                                    </tr>
                                    <tr className="border-b border-gray-800 bg-slate-800/50">
                                        <td className="py-4 px-4 font-medium">Signup Required</td>
                                        <td className="py-4 px-4 text-green-400 font-bold">No</td>
                                        <td className="py-4 px-4">Often Required for Tasks</td>
                                    </tr>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-4 px-4 font-medium">Custom Tilt Adjustment</td>
                                        <td className="py-4 px-4 text-green-400 font-bold">Yes (Slider)</td>
                                        <td className="py-4 px-4">Usually Auto-Only</td>
                                    </tr>
                                    <tr className="border-b border-gray-800 bg-slate-800/50">
                                        <td className="py-4 px-4 font-medium">Security</td>
                                        <td className="py-4 px-4 font-bold">Auto-Delete (1 Hour)</td>
                                        <td className="py-4 px-4">Varies</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Common Issues with Scanned PDFs</h2>
                        <p className="text-gray-300 mb-4">
                            Why do PDFs need deskewing in the first place? Here are the most common culprits:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                            <li><strong>Feeder Misalignment:</strong> Automatic Document Feeders (ADF) can slip, causing pages to pull through at a slight angle.</li>
                            <li><strong>Manual Scanning:</strong> Placing a book or paper slightly off-center on a flatbed scanner results in rotated images.</li>
                            <li><strong>Mobile Photography:</strong> Taking a photo of a document with a phone almost always introduces perspective skew and rotation.</li>
                        </ul>
                        <p className="text-gray-300">
                            Our tool is specifically engineered to handle these scenarios. Unlike basic rotation tools which only turn 90 degrees, UsePDF corrects those tricky 2-degree or 15-degree tilts that make documents look messy.
                        </p>
                    </section>

                    <section className="mb-16 bg-slate-800 p-8 rounded-2xl">
                        <h2 className="text-3xl font-bold mb-6">Deskew PDF vs Rotate PDF: What's the Difference?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-blue-400">Rotate PDF</h3>
                                <p className="text-gray-300 mb-4">
                                    Rotation corrects orientation in fixed 90-degree steps. Use this when a page is completely sideways (landscape instead of portrait) or upside down.
                                </p>
                                <Link href="/tools/rotate-pdf" className="text-blue-400 hover:text-blue-300 font-medium hover:underline inline-flex items-center">
                                    Go to Rotate PDF Tool &rarr;
                                </Link>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-green-400">Deskew PDF</h3>
                                <p className="text-gray-300 mb-4">
                                    Deskewing fixes textual alignment. It rotates pages by small, precise amounts (e.g., 3.5°) to ensure lines of text are horizontal. Use this for scanned papers that look "crooked".
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold mb-2">How can I deskew PDF online for free?</h3>
                                <p className="text-gray-300">
                                    You can deskew PDF online for free using UsePDF. Simply upload your crooked or tilted PDF, and our tool uses advanced algorithms to automatically straighten the pages in seconds. We require no signup, payment, or installation.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">How do I straighten a skewed PDF?</h3>
                                <p className="text-gray-300">
                                    To straighten a skewed PDF, upload it to our Deskew PDF tool. The AI engine detects the skew angle (e.g., 5 degrees) and corrects it. You can also manually adjust the tilt using our precision slider for perfect alignment.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Can I fix a PDF scanned upside down?</h3>
                                <p className="text-gray-300">
                                    If the PDF is upside down (180 degrees), you should use our <Link href="/tools/rotate-pdf" className="text-blue-400 hover:underline">Rotate PDF</Link> tool. If it is just slightly tilted, use this Deskew tool to straighten it.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Is my document safe?</h3>
                                <p className="text-gray-300">
                                    Yes. We use standard encryption for file transfer. Your files are processed on our secure servers and representatively deleted after one hour. We do not look at, store, or share your documents.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center pt-8 border-t border-gray-800">
                        <p className="text-gray-400 mb-4">Looking for other tools? Try our <Link href="/tools/scan-to-pdf" className="text-blue-400 hover:underline">Scan to PDF</Link> converter or <Link href="/tools/compress-pdf" className="text-blue-400 hover:underline">Compress PDF</Link> to reduce file size.</p>
                    </section>
                </div>
            </div>
        </>
    );
}
