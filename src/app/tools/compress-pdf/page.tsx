import type { Metadata } from 'next';
import Link from 'next/link';
import CompressPdfClient from './CompressPdfClient';
import { CheckCircle, HelpCircle, FileText, Minimize2, Split, Merge, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF Online Free | UsePDF',
    description: 'Compress PDF files online for free with UsePDF. Reduce PDF size without losing quality. Secure and fast PDF compressor.',
    alternates: {
        canonical: 'https://usepdf.in/tools/compress-pdf',
    },
    openGraph: {
        title: 'Compress PDF Online – Reduce PDF Size Free',
        description: 'Compress PDF files online for free with UsePDF. Reduce PDF size without losing quality. Secure and fast PDF compressor.',
        url: 'https://usepdf.in/tools/compress-pdf',
        type: 'website',
    }
};

export default function CompressPdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF Compress Tool",
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
                        "name": "Is Compress PDF free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Compress PDF tool is 100% free. You can reduce file sizes without any hidden costs or limits."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will my PDF quality be reduced?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our smart compression algorithms remove redundant data while keeping texts and images sharp. The visual quality remains almost identical."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are my PDF files safe?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. All processing happens securely, and we automatically delete your files from our servers after 1 hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to install any software?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. UsePDF allows you to compress PDFs directly in your web browser. No software installation is required."
                        }
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Compress PDF Files",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Upload PDF",
                        "text": "Upload the PDF file you want to compress."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Compress",
                        "text": "Choose compression and click compress."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Download",
                        "text": "Download the optimized PDF."
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use UsePDF to Compress PDFs?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        "100% free PDF compressor",
                        "No registration or login required",
                        "Smart compression with minimal quality loss",
                        "Works on mobile, tablet, and desktop",
                        "Fast compression with no watermark"
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
                        { q: "Is Compress PDF free to use?", a: "Yes, our Compress PDF tool is 100% free. You can reduce file sizes without any hidden costs or limits." },
                        { q: "Will my PDF quality be reduced?", a: "Our smart compression algorithms remove redundant data while keeping texts and images sharp. The visual quality remains almost identical." },
                        { q: "Are my PDF files safe?", a: "Absolutely. All processing happens securely, and we automatically delete your files from our servers after 1 hour." },
                        { q: "Do I need to install any software?", a: "No. UsePDF allows you to compress PDFs directly in your web browser. No software installation is required." }
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
        <CompressPdfClient seoContent={seoContent} />
    );
}
