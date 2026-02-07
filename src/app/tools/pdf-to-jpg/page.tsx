/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import PdfToJpgClient from './PdfToJpgClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to JPG Converter Online | Convert PDF to JPG Free',
    description: 'Convert PDF to JPG online for free. Extract images from PDF without watermark. Fast, secure, and high-quality conversion to JPG format.',
    keywords: [
        'pdf to jpg',
        'pdf to jpg converter',
        'convert pdf to jpg',
        'pdf to jpg online free',
        'pdf to jpg without watermark'
    ],
    alternates: {
        canonical: '/tools/pdf-to-jpg',
    },
    openGraph: {
        title: 'PDF to JPG Converter Online | Convert PDF to JPG Free',
        description: 'Convert PDF to JPG online for free. Extract images from PDF without watermark. Fast, secure, and high-quality conversion to JPG format.',
        url: '/tools/pdf-to-jpg',
        type: 'website',
    }
};

export default function PdfToJpgPage() {
    const faqs = [
        {
            name: "How to convert PDF to JPG?",
            acceptedAnswer: {
                text: "Upload your PDF file to the tool. We will automatically convert each page into a high-quality JPG image that you can download instantly."
            }
        },
        {
            name: "Is this converter free?",
            acceptedAnswer: {
                text: "Yes, our PDF to JPG converter is 100% free with no hidden charges, subscriptions, or watermarks on your images."
            }
        },
        {
            name: "Will it affect image quality?",
            acceptedAnswer: {
                text: "No, our tool maintains the original resolution. You get high-quality JPGs that look exactly like the original PDF pages."
            }
        },
        {
            name: "Is it safe to use?",
            acceptedAnswer: {
                text: "Your security is guaranteed. We use SSL encryption for all transfers and automatically delete your files from our servers after one hour."
            }
        },
        {
            name: "Can I use it on mobile?",
            acceptedAnswer: {
                text: "Yes, our tool works perfectly on all mobile devices. You can convert PDFs to images directly on your smartphone or tablet."
            }
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "PDF to JPG Converter",
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
                        "Convert PDF pages to JPG",
                        "High-quality image output",
                        "Fast and secure process",
                        "No software installation",
                        "Free for all users"
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
                    Need to <strong>convert pdf pages to images</strong> for easy sharing or editing? Our <strong>pdf to image converter</strong> makes it simple. Just upload your document, and we will transforme every page into a separate image file ready for download.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We ensure you get <strong>high quality jpg images</strong> every time. Whether you want to <strong>extract images from pdf</strong> documents or save an entire presentation as pictures, our <strong>secure pdf to jpg conversion</strong> process guarantees privacy and precision.
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
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Split PDF
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <PdfToJpgClient seoContent={seoContent} />
    );
}
