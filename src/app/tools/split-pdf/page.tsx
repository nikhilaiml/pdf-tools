import type { Metadata } from 'next';
import Link from 'next/link';
import SplitPdfClient from './SplitPdfClient';
import { CheckCircle, HelpCircle, Merge, Minimize2, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online Free | UsePDF',
    description: 'Split PDF files online for free with UsePDF. Secure PDF splitter to extract pages quickly with no signup required.',
    alternates: {
        canonical: 'https://usepdf.in/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF Online – Free & Secure PDF Splitter',
        description: 'Split PDF files online for free with UsePDF. Secure PDF splitter to extract pages quickly with no signup required.',
        url: 'https://usepdf.in/tools/split-pdf',
        type: 'website',
    }
};

export default function SplitPdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF Split Tool",
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
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Split PDF free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Split PDF tool is completely free. You can split documents and extract pages without any fees."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are my PDF files safe?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We use secure encryption for file transfers, and all uploaded files are automatically deleted from our servers after 1 hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I split specific pages only?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can specify exact page ranges (e.g., 1-5) to extract only the parts of the document you need."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to install any software?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. UsePDF works directly in your web browser. No download or installation is required."
                        }
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Split PDF Files",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Upload File",
                        "text": "Upload the PDF file you want to split."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Choose Range",
                        "text": "Choose pages or ranges to extract."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Split & Download",
                        "text": "Click split and download the new PDF files."
                    }
                ]
            }
        ]
    };

    const seoContent = (
        <div className="space-y-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Why Use Section */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use UsePDF to Split PDFs?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        "100% free PDF splitter",
                        "No registration or login required",
                        "Secure file handling",
                        "Works on mobile, tablet, and desktop",
                        "Fast splitting with no watermark"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {[
                        { q: "Is Split PDF free to use?", a: "Yes, our Split PDF tool is completely free. You can split documents and extract pages without any fees." },
                        { q: "Are my PDF files safe?", a: "Absolutely. We use secure encryption for file transfers, and all uploaded files are automatically deleted from our servers after 1 hour." },
                        { q: "Can I split specific pages only?", a: "Yes, you can specify exact page ranges (e.g., 1-5) to extract only the parts of the document you need." },
                        { q: "Do I need to install any software?", a: "No. UsePDF works directly in your web browser. No download or installation is required." }
                    ].map((faq, i) => (
                        <div key={i} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                            <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Tools */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Related Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link href="/tools/merge-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                                <Merge className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 text-lg">Merge PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Combine multiple PDF files into one single document.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/tools/compress-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                                <Minimize2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 text-lg">Compress PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Reduce PDF file size without losing quality.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/tools/pdf-to-word" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 text-lg">PDF to Word</h3>
                            <p className="text-slate-500 text-sm mb-4">Convert PDF files to editable Word documents effortlessly.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <SplitPdfClient seoContent={seoContent} />
    );
}
