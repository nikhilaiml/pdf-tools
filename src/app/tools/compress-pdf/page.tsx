
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
    // FAQs
    const faqs = [
        {
            name: "How can I compress PDF online?",
            acceptedAnswer: {
                text: "To compress a PDF, upload your file to our tool. We will automatically reduce the file size. Then, just download your smaller, optimized PDF document."
            }
        },
        {
            name: "Is this PDF compressor free?",
            acceptedAnswer: {
                text: "Yes, our PDF compressor is 100% free. You can compress as many files as you need without any hidden fees, subscriptions, or watermarks."
            }
        },
        {
            name: "Will it reduce PDF quality?",
            acceptedAnswer: {
                text: "Our tool ensures high quality PDF compression. It intelligently reduces file size by optimizing images and fonts while keeping the document readable and clear."
            }
        },
        {
            name: "Is it safe to upload files?",
            acceptedAnswer: {
                text: "Absolutely. We use secure SSL encryption for all transfers. Your files are processed automatically and deleted permanently from our servers after one hour."
            }
        },
        {
            name: "Can I use this on mobile?",
            acceptedAnswer: {
                text: "Yes, this tool is mobile-friendly. You can compress PDF files easily on your iPhone, Android, tablet, or desktop computer directly in your browser."
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
                        "Reduce file size significantly",
                        "Maintain high visual quality",
                        "Secure SSL encryption",
                        "No software installation",
                        "Works on all devices"
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
                <p className="text-slate-600 leading-relaxed mb-6">
                    Need to <strong>reduce pdf file size</strong> for an application or email? Our tool helps you <strong>compress large pdf files</strong> quickly and efficiently. We use advanced compression techniques to minimize file size without compromising the integrity of your document.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Whether you need to <strong>optimize pdf for email</strong> or simply save storage space, our tool lets you <strong>shrink pdf size online</strong> instantly. We prioritize your privacy, allowing you to <strong>compress pdf securely</strong> with <strong>high quality pdf compression</strong> results every time.
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
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Split PDF
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Word
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <CompressPdfClient seoContent={seoContent} />
    );
}
