
import type { Metadata } from 'next';
import Link from 'next/link';
import PdfToPptClient from './PdfToPptClient';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to PPT Converter | Convert PDF to PowerPoint Free',
    description: 'Convert PDF to PPT online for free. Fast, secure, and easy to use PDF to PowerPoint converter. No watermark, no signup required.',
    keywords: [
        'pdf to ppt',
        'pdf to ppt converter',
        'convert pdf to powerpoint',
        'pdf to ppt online free',
        'pdf to ppt without watermark'
    ],
    alternates: {
        canonical: '/tools/pdf-to-ppt',
    },
    openGraph: {
        title: 'PDF to PPT Converter | Convert PDF to PowerPoint Free',
        description: 'Convert PDF to PPT online for free. Fast, secure, and easy to use PDF to PowerPoint converter. No watermark, no signup required.',
        url: '/tools/pdf-to-ppt',
        type: 'website',
    }
};

export default function PdfToPptPage() {
    const faqs = [
        {
            name: "How to convert PDF to PPT?",
            acceptedAnswer: {
                text: "Upload your PDF file, wait for the conversion to process, and download your PowerPoint file instantly."
            }
        },
        {
            name: "Is this PDF to PPT converter free?",
            acceptedAnswer: {
                text: "Yes, it is completely free to use. There are no limits and no hidden costs."
            }
        },
        {
            name: "Does it convert PDF to PPT without watermark?",
            acceptedAnswer: {
                text: "Yes, our tool converts your files without adding any watermarks to your presentation."
            }
        },
        {
            name: "Is my data safe?",
            acceptedAnswer: {
                text: "Your files are processed securely and deleted from our servers automatically after one hour."
            }
        },
        {
            name: "Can I use this on mobile?",
            acceptedAnswer: {
                text: "Yes, this tool works perfectly on all mobile devices and tablets."
            }
        }
    ];

    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "PDF to PPT Converter",
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
                        "Free PDF to PPT conversion",
                        "No watermark on slides",
                        "High-quality output",
                        "Secure and private",
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Fast PDF to PowerPoint Converter</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                    Our <strong>PDF to PPT converter</strong> allows you to turn your PDF documents into editable PowerPoint presentations in seconds. Whether you are a student or a professional, this tool ensures your slides look great and retain the original layout.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We prioritize your privacy and convenience. You can <strong>convert PDF to PowerPoint</strong> securely without installing any software. All files are handled with strict security protocols and deleted after processing.
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
                    <Link href="/tools/pdf-to-excel" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Excel
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <PdfToPptClient seoContent={seoContent} />
    );
}
