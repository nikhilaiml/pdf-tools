/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import SplitPdfClient from './SplitPdfClient';
import { HelpCircle, Merge, Minimize2, Split, ArrowRight, Layers, Globe, Shield, Zap, Check, Smartphone, RotateCw } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online – Separate PDF Pages Free',
    description: 'Split PDF files online. Separate specific pages or extract documents from your PDF easily. No signup, no watermark, and fast secure processing.',
    keywords: ['split pdf', 'separate pdf pages', 'extract pdf pages', 'split pdf online', 'pdf splitter free'],
    alternates: {
        canonical: 'https://usepdf.in/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF Online – Separate PDF Pages Free',
        description: 'Split PDF files online. Separate specific pages or extract documents from your PDF easily. No signup, no watermark, and fast secure processing.',
        url: 'https://usepdf.in/tools/split-pdf',
        type: 'website',
    }
};

export default function SplitPdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is split PDF online free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Split PDF tool is 100% free. You can split documents and extract pages as many times as you want without any cost."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to split PDF files?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We use secure processing methods, and all your files are automatically deleted from our servers after one hour to protect your privacy."
                }
            },
            {
                "@type": "Question",
                "name": "Can I split specific pages only?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can extract specific pages by entering the page numbers or ranges (e.g., 1-5, 8, 10-12) you wish to separate from the original PDF."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to install any software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No software installation is required. Our tool works entirely in your web browser on any device, including mobile and desktop."
                }
            }
        ]
    };

    const seoContent = (
        <div className="space-y-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* H1 & Intro Section */}
            <section className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Split PDF Online – Separate PDF Pages Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Need to separate specific pages from a large PDF document? <strong>Split PDF files online</strong> instantly with UsePDF.
                    Our free tool allows you to extract pages from your PDF easily.
                    There is <strong>no signup, no installation</strong>, and the process is fast, secure, and 100% browser-based.
                </p>
            </section>

            {/* Features */}
            <section>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Split PDF Online Free", desc: "Separate pages from your PDF files completely free of charge.", icon: Globe },
                        { title: "Separate Multiple Pages", desc: "Extract single pages or specific page ranges easily.", icon: Layers },
                        { title: "No Watermark", desc: "Download extracted pages with no branding or watermarks added.", icon: Shield },
                        { title: "No Login Required", desc: "Start splitting PDFs instantly. No account needed.", icon: Zap },
                        { title: "Works on Mobile & Desktop", desc: "Use our tool on any device, anywhere, anytime.", icon: Smartphone },
                        { title: "Secure & Privacy Focused", desc: "Files are auto-deleted after one hour to ensure safety.", icon: Shield },
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                            <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Split */}
            <section className="bg-indigo-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Split PDF Online</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { step: "1", title: "Upload PDF", desc: "Upload your PDF file." },
                        { step: "2", title: "Select Pages", desc: "Choose pages to split." },
                        { step: "3", title: "Split PDF", desc: "Process the file online." },
                        { step: "4", title: "Download", desc: "Download separated files." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-indigo-100 relative">
                            <span className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                {item.step}
                            </span>
                            <h3 className="font-bold text-slate-900 mb-2 mt-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases & Why Use */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF to Split?</h2>
                    <ul className="space-y-4">
                        {[
                            "Faster than other PDF splitter tools",
                            "Simple and clean interface",
                            "No quality loss in extracted pages",
                            "100% browser-based processing"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Use Cases</h2>
                    <ul className="space-y-4">
                        {[
                            "Extract specific pages from a large report",
                            "Split scanned PDF documents into separate files",
                            "Separate large PDFs into smaller, manageable files",
                            "Split PDF to meet email attachment size limits"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <Check className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {jsonLd.mainEntity.map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.name}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-10 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Explore More Free PDF Tools</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Merge PDF
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Compress PDF
                    </Link>
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Rotate PDF
                    </Link>
                    <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Free PDF Tools Online
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <SplitPdfClient seoContent={seoContent} />
    );
}
