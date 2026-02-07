
import type { Metadata } from 'next';
import Link from 'next/link';
import SplitPdfClient from './SplitPdfClient';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online | Split PDF Pages Free',
    description: 'Split PDF online for free. Extract pages from PDF documents instantly. Fast, secure, and no watermark.',
    keywords: [
        'split pdf online',
        'split pdf file',
        'split pdf pages',
        'pdf splitter free',
        'split pdf without watermark'
    ],
    alternates: {
        canonical: '/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF Online | Split PDF Pages Free',
        description: 'Split PDF online for free. Extract pages from PDF documents instantly. Fast, secure, and no watermark.',
        url: '/tools/split-pdf',
        type: 'website',
    }
};

export default function SplitPdfPage() {
    const faqs = [
        {
            name: "How do I split a PDF file?",
            acceptedAnswer: {
                text: "Upload your PDF, enter the page numbers or range you want to extract, and click 'Split PDF' to finish."
            }
        },
        {
            name: "Is this PDF splitter free?",
            acceptedAnswer: {
                text: "Yes, our tool is 100% free. You can split PDF pages online without paying or signing up."
            }
        },
        {
            name: "Does it add a watermark?",
            acceptedAnswer: {
                text: "No, we do not add any watermarks. Your separated PDF pages remain clean and professional."
            }
        },
        {
            name: "Is my data secure?",
            acceptedAnswer: {
                text: "Yes, your files are encrypted and automatically deleted from our servers after one hour."
            }
        },
        {
            name: "Can I use it on mobile?",
            acceptedAnswer: {
                text: "Absolutely. Our split PDF tool works perfectly on all mobile devices and tablets."
            }
        }
    ];

    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Split PDF Online",
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
                        "Free PDF splitter",
                        "Extract pages instantly",
                        "No watermark added",
                        "Secure file processing",
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Secure & Fast PDF Splitter</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    <strong>Split PDF online</strong> to better manage your documents. Whether you need to <strong>extract pages from PDF</strong> reports or <strong>separate PDF pages</strong> for a specific assignment, our tool allows you to isolate page ranges quickly.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our <strong>pdf splitter secure</strong> process ensures that when you <strong>split large pdf file</strong> documents, your data remains private. We use browser-based processing where possible, ensuring your files are safe and deleted after use.
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
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF
                    </Link>
                    <Link href="/tools/rearrange-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Organize PDF
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <SplitPdfClient seoContent={seoContent} />
    );
}
