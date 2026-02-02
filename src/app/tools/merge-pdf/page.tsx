import type { Metadata } from 'next';
import Link from 'next/link';
import MergePdfClient from './MergePdfClient';
import { CheckCircle, HelpCircle, FileText, Minimize2, Split, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Merge PDF Online Free | UsePDF',
    description: 'Merge multiple PDF files online for free with UsePDF. Fast, secure, no signup, and no watermark PDF merger.',
    alternates: {
        canonical: 'https://usepdf.in/tools/merge-pdf',
    },
    openGraph: {
        title: 'Merge PDF - Combine PDF Files Online for Free',
        description: 'Merge multiple PDF files online for free with UsePDF. Fast, secure, no signup, and no watermark PDF merger.',
        url: 'https://usepdf.in/tools/merge-pdf',
        type: 'website',
    }
};

export default function MergePdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF Merge Tool",
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
                        "name": "Is Merge PDF free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Merge PDF tool is completely free. You can combine as many files as you need without any cost."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are my PDF files safe?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. All files are processed securely in your browser or via encrypted connections and are permanently deleted from our servers after 1 hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is there any file size limit?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We handle large files efficiently. While there are some server-side caps for stability, most standard documents merge without issues."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to install any software?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. UsePDF allows you to merge PDFs directly in your web browser, compatible with Windows, Mac, and mobile devices."
                        }
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Merge PDF Files",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Upload Files",
                        "text": "Upload one or more PDF files."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Arrange Order",
                        "text": "Arrange files in the desired order."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Merge & Download",
                        "text": "Click merge and download the merged PDF."
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use UsePDF to Merge PDFs?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        "100% free PDF merger",
                        "No registration or login required",
                        "Secure file handling",
                        "Works on mobile, tablet, and desktop",
                        "Fast processing with no watermark"
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
                        { q: "Is Merge PDF free to use?", a: "Yes, our Merge PDF tool is completely free. You can combine as many files as you need without any cost." },
                        { q: "Are my PDF files safe?", a: "Absolutely. All files are processed securely in your browser or via encrypted connections and are permanently deleted from our servers after 1 hour." },
                        { q: "Is there any file size limit?", a: "We handle large files efficiently. While there are some server-side caps for stability, most standard documents merge without issues." },
                        { q: "Do I need to install any software?", a: "No. UsePDF allows you to merge PDFs directly in your web browser, compatible with Windows, Mac, and mobile devices." }
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
                    <Link href="/tools/compress-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                                <Minimize2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 text-lg">Compress PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Reduce file size while optimizing for maximal PDF quality.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/tools/split-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                                <Split className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2 text-lg">Split PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Extract pages from your PDF or save selected pages as separate files.</p>
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
                            <p className="text-slate-500 text-sm mb-4">Convert your PDF to editable Word documents (Docx) with high accuracy.</p>
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
        <MergePdfClient seoContent={seoContent} />
    );
}
