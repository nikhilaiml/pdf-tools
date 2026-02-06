/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import SplitPdfClient from './SplitPdfClient';
import { HelpCircle, Merge, Minimize2, Split, ArrowRight, Layers, Globe, Shield, Zap, Check, Smartphone, RotateCw, Lock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF File - Split PDF Online Free & Securely',
    description: 'Split PDF file online for free. Separate PDF pages, extract specific documents, and organize your files without signup. Secure, fast, and works on all devices.',
    keywords: ['split pdf file', 'split pdf online', 'online pdf splitter', 'separate pdf pages', 'split pdf documents', 'pdf page splitter'],
    alternates: {
        canonical: 'https://usepdf.in/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF File - Split PDF Online Free & Securely',
        description: 'Split PDF file online for free. Separate PDF pages, extract specific documents, and organize your files without signup. Secure, fast, and works on all devices.',
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
                "name": "How to split PDF file online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply upload your PDF file, select the pages or ranges you want to separate, and click the split button to process your document instantly."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to split PDF online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our tool is completely secure. Your files are processed safely and automatically deleted from our servers after one hour to ensure your privacy."
                }
            },
            {
                "@type": "Question",
                "name": "Can I split PDF pages on mobile?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our online PDF splitter works seamlessly on all devices, including mobile phones, tablets, and desktop computers."
                }
            },
            {
                "@type": "Question",
                "name": "Is this PDF splitter free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, usepdf.in provides a 100% free PDF splitter with no hidden charges, no signup required, and no limits on daily usage."
                }
            },
            {
                "@type": "Question",
                "name": "Do split PDF files have watermark?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. When you separate PDF pages using our tool, the output documents are clean and free from any watermarks or branding."
                }
            },
            {
                "@type": "Question",
                "name": "Is installation required?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No installation is needed. You can split PDF documents directly in your browser without downloading any software or apps."
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
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Split PDF File</h1>
                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    <strong>Split PDF file online</strong> for free with our secure, easy-to-use tool. Whether you are on mobile or desktop, you can separate PDF pages without signup or software installation. Our platform ensures your documents remain private while providing a fast, browser-based solution to manage your PDF files efficiently.
                </p>
            </section>

            {/* Features */}
            <section>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "No Watermark", desc: "Download your split PDF files with zero watermarks or branding added.", icon: Shield },
                        { title: "Free PDF Splitter", desc: "Enjoy unlimited access to split PDF documents at no cost.", icon: Globe },
                        { title: "Browser-Based Processing", desc: "No software download needed. Split files directly in your web browser.", icon: Zap },
                        { title: "Secure & Privacy Focused", desc: "Files are encrypted and automatically deleted after processing.", icon: Lock },
                        { title: "Works on Mobile & Desktop", desc: "Split PDFs from your iPhone, Android, Windows, or Mac device.", icon: Smartphone },
                        { title: "Fast & Easy", desc: "Separate pages in seconds with our optimized cloud processing.", icon: Layers },
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
                        { step: "1", title: "Upload PDF File to Split", desc: "Select your file from your device." },
                        { step: "2", title: "Select Pages to Split PDF", desc: "Choose the specific pages or ranges." },
                        { step: "3", title: "Split PDF File Securely", desc: "Click split to separate your documents." },
                        { step: "4", title: "Download Split PDF Files", desc: "Save your new PDF files instantly." }
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

            {/* SEO Content Block */}
            <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Split PDF File Online Securely</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-4">
                    Need to separate a large document? Our tool allows you to <strong>split PDF file online securely</strong> and efficiently. Easily extract specific pages, break down large PDF documents into smaller files, or organize PDF files for better management. We prioritize your privacy; all files are processed directly in your browser or on secure servers and deleted automatically.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                    Experience lightning-fast processing speeds without the need for expensive software. Whether you need to isolate a single page or divide a report into chapters, our free PDF splitter makes the task clear and simple.
                </p>
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
                <h3 className="text-xl font-bold text-slate-900 mb-6">Related PDF Tools</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Merge PDF Online
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Compress PDF
                    </Link>
                    <Link href="/tools/rearrange-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Organize PDF Pages
                    </Link>
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Rotate PDF
                    </Link>
                    <Link href="/tools/protect-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Protect PDF
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <SplitPdfClient seoContent={seoContent} />
    );
}
