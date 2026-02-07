
import type { Metadata } from 'next';
import Link from 'next/link';
import CompressPdfClient from './CompressPdfClient';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF Online | Reduce PDF File Size Free',
    description: 'Compress PDF online free. Reduce PDF file size without losing quality. Mobile-friendly, secure, and fast PDF compressor.',
    keywords: [
        'compress pdf online',
        'reduce pdf size',
        'pdf compressor free',
        'compress pdf without losing quality',
        'compress pdf online free'
    ],
    alternates: {
        canonical: '/tools/compress-pdf',
    },
    openGraph: {
        title: 'Compress PDF Online | Reduce PDF File Size Free',
        description: 'Compress PDF online free. Reduce PDF file size without losing quality. Mobile-friendly, secure, and fast PDF compressor.',
        url: '/tools/compress-pdf',
        type: 'website',
    }
};

export default function CompressPdfPage() {
    const faqs = [
        {
            name: "How to compress PDF online?",
            acceptedAnswer: {
                text: "Upload your file, click compress, and download the smaller PDF instantly."
            }
        },
        {
            name: "Is this PDF compressor free?",
            acceptedAnswer: {
                text: "Yes, it is 100% free to compress PDF files securely with no limits."
            }
        },
        {
            name: "Does it reduce quality?",
            acceptedAnswer: {
                text: "Our tool optimizes file size while maintaining the best possible visual quality."
            }
        },
        {
            name: "Is my data secure?",
            acceptedAnswer: {
                text: "Yes, all files are encrypted and automatically deleted after one hour."
            }
        },
        {
            name: "Can I use it on mobile?",
            acceptedAnswer: {
                text: "Yes, this tool works perfectly on all smartphones and tablets."
            }
        }
    ];

    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Compress PDF Online",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.name,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.acceptedAnswer.text
                    }
                }))
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Key Benefits */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Free online PDF compression",
                        "Maintains document quality",
                        "Secure and private",
                        "No registration needed",
                        "Fast processing speed"
                    ].map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                            <span className="text-slate-700">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* SEO Content Section */}
            <section className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Best Free PDF Compressor</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Our <strong>compress PDF online</strong> tool makes it easy to <strong>reduce PDF size</strong> for email attachments or web uploads. We use advanced algorithms to ensure your files are optimized without sacrificing readability or image clarity.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    You can <strong>compress PDF online free</strong> with total peace of mind. Your documents are processed on secure servers and deleted automatically to protect your privacy. No software installation is required.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-4">
                            <h3 className="font-semibold text-slate-900 mb-2">{faq.name}</h3>
                            <p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Word
                    </Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF
                    </Link>
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to JPG
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <CompressPdfClient seoContent={seoContent} />
    );
}
