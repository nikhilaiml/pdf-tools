
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
                text: "Upload your PDF files, drag and drop to reorder them, and click 'Merge PDF' to combine them into a single document."
            }
        },
        {
            name: "Is this PDF merger free?",
            acceptedAnswer: {
                text: "Yes, our tool is 100% free. You can combine unlimited files without any hidden costs or subscriptions."
            }
        },
        {
            name: "Is it safe to merge PDF documents online?",
            acceptedAnswer: {
                text: "Absolutely. We use SSL encryption and automatically delete all uploaded files after one hour to ensure your privacy."
            }
        },
        {
            name: "Can I merge large PDF files?",
            acceptedAnswer: {
                text: "Yes, our optimizer allows you to process documents of various sizes efficiently."
            }
        },
        {
            name: "How do I merge PDF in order?",
            acceptedAnswer: {
                text: "Simply drag and drop the thumbnails to rearrange them. This lets you merge pdf in order exactly as you need."
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
                        "Merge PDF files instantly",
                        "100% free and secure",
                        "No watermarks added",
                        "Works on mobile & desktop",
                        "Delete files automatically"
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
                    Easily <strong>merge pdf documents online</strong> with our intuitive tool. Whether you need to <strong>join pdf files</strong> for personal use or professional reports, our platform handles it all in seconds.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our <strong>pdf file merger secure</strong> process ensures your data stays private. You can even <strong>merge large pdf files</strong> without compromising speed or quality.
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
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Split PDF
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Word
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <MergePdfClient seoContent={seoContent} />
    );
}
