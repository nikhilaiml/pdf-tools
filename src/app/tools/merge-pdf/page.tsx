
import type { Metadata } from 'next';
import Link from 'next/link';
import MergePdfClient from './MergePdfClient';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Merge PDF Online | Combine PDF Files Free',
    description: 'Merge PDF online free. Combine multiple PDF files into one document instantly. Fast, secure, and no installation required.',
    keywords: [
        'merge pdf online',
        'merge pdf files',
        'combine pdf files',
        'pdf merger free',
        'merge pdf without watermark'
    ],
    alternates: {
        canonical: '/tools/merge-pdf',
    },
    openGraph: {
        title: 'Merge PDF Online | Combine PDF Files Free',
        description: 'Merge PDF online free. Combine multiple PDF files into one document instantly. Fast, secure, and no installation required.',
        url: '/tools/merge-pdf',
        type: 'website',
    }
};

export default function MergePdfPage() {
    const faqs = [
        {
            name: "How do I merge PDF files?",
            acceptedAnswer: {
                text: "Upload your PDFs, arrange them in your desired order, and click 'Merge PDF' to combine them."
            }
        },
        {
            name: "Is this PDF merger free?",
            acceptedAnswer: {
                text: "Yes, you can merge multiple PDF files for free without any hidden costs or watermarks."
            }
        },
        {
            name: "Is it safe to use?",
            acceptedAnswer: {
                text: "Absolutely. We use secure processing and automatically delete your files after one hour."
            }
        },
        {
            name: "Can I use it on mobile?",
            acceptedAnswer: {
                text: "Yes, our tool works perfectly on all mobile devices, tablets, and desktops."
            }
        },
        {
            name: "Do I need to install software?",
            acceptedAnswer: {
                text: "No, everything happens in your browser. No downloads or sign-ups are required."
            }
        }
    ];

    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Merge PDF Online",
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
                        "100% free PDF merger",
                        "Combine unlimited files",
                        "Secure file processing",
                        "No watermarks added",
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fast & Secure PDF Merger</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    <strong>Merge PDF online</strong> to keep your documents organized. Whether you need to combine invoices, reports, or study materials, our tool makes it simple to join multiple files into one.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our <strong>free PDF merger</strong> prioritizes your privacy. All files are encrypted during the process and deleted permanently after one hour, so you can combine documents with total confidence.
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
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Word
                    </Link>
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to JPG
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <MergePdfClient seoContent={seoContent} />
    );
}
