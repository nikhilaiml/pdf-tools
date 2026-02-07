/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import PdfToWordClient from './PdfToWordClient';
import Link from 'next/link';

import { HelpCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to Word Converter Online | Convert PDF to Docx Free',
    description: 'Convert PDF to Word online for free. Transform PDF to editable Word document without watermark. Fast, accurate, and secure.',
    keywords: [
        'pdf to word',
        'pdf to word converter',
        'convert pdf to word',
        'pdf to word online free',
        'pdf to word without watermark'
    ],
    alternates: {
        canonical: '/tools/pdf-to-word',
    },
    openGraph: {
        title: 'PDF to Word Converter Online | Convert PDF to Docx Free',
        description: 'Convert PDF to Word online for free. Transform PDF to editable Word document without watermark. Fast, accurate, and secure.',
        url: '/tools/pdf-to-word',
        type: 'website',
    }
};

export default function PdfToWordPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How to convert PDF to Word online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your PDF file to UsePDF's converter. The tool will automatically extracting text and formatting, then provide an editable Word (Docx) file for download."
                }
            },
            {
                "@type": "Question",
                "name": "Is this PDF to Word converter free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our PDF to Word tool is 100% free with no hidden charges or limits on the number of conversions."
                }
            },
            {
                "@type": "Question",
                "name": "Will my document formatting be preserved?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our advanced conversion engine works hard to maintain your original fonts, images, and layout, creating a Docx file that looks just like your PDF."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to convert files on UsePDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We use SSL encryption for transfers and automatically delete all uploaded files from our servers after a short period to ensure your privacy."
                }
            },
            {
                "@type": "Question",
                "name": "Can I convert Word back to PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can use our Word to PDF tool to convert your edited documents back into a professional PDF format."
                }
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12 md:space-y-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* How to Convert Section */}
            <section className="bg-indigo-50 rounded-3xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert PDF to Word Online</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="relative pl-8 md:pl-0">
                        <div className="hidden md:block absolute -top-4 -left-4 text-6xl font-black text-indigo-100 -z-10">1</div>
                        <div className="md:hidden absolute left-0 top-1 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                        <h3 className="font-bold text-slate-900 mb-2 text-lg">Upload PDF</h3>
                        <p className="text-slate-600 leading-relaxed">Select your file from your device or drag and drop it into the upload box.</p>
                    </div>
                    <div className="relative pl-8 md:pl-0">
                        <div className="hidden md:block absolute -top-4 -left-4 text-6xl font-black text-indigo-100 -z-10">2</div>
                        <div className="md:hidden absolute left-0 top-1 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                        <h3 className="font-bold text-slate-900 mb-2 text-lg">Auto Conversion</h3>
                        <p className="text-slate-600 leading-relaxed">Our tool extracts content and rebuilds it as an editable Word document.</p>
                    </div>
                    <div className="relative pl-8 md:pl-0">
                        <div className="hidden md:block absolute -top-4 -left-4 text-6xl font-black text-indigo-100 -z-10">3</div>
                        <div className="md:hidden absolute left-0 top-1 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                        <h3 className="font-bold text-slate-900 mb-2 text-lg">Download Docx</h3>
                        <p className="text-slate-600 leading-relaxed">Save your new Word file instantly and start editing right away.</p>
                    </div>
                </div>
            </section>

            {/* Why UsePDF & Features */}
            <section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF for PDF to Word Conversion?</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Converting documents shouldn't be a hassle. With UsePDF, you get a <strong>powerful PDF to Word converter</strong> that creates high-quality, editable files in seconds. Whether you need to fix a typo in a contract or repurpose content from an old report, our tool retains formatting, tables, and images so you don't have to retype a single word.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            It's completely browser-based, meaning it works on Windows, Mac, Linux, and mobile devices without any software installation. Plus, it's <strong>free and secure</strong>.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2">Editable Output</h3>
                            <p className="text-sm text-slate-500">Get a fully editable .docx file, not just an image.</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2">Preserves Layout</h3>
                            <p className="text-sm text-slate-500">Maintains fonts, paragraphs, and tables as much as possible.</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2">100% Free</h3>
                            <p className="text-sm text-slate-500">No limits, no watermarks, no registration required.</p>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 mb-2">Secure & Private</h3>
                            <p className="text-sm text-slate-500">Files are encrypted and auto-deleted after processing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internal Linking */}
            <section className="border-t border-slate-200 pt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">More Useful PDF Tools</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/compress-pdf" className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium">Compress PDF</Link>
                    <Link href="/tools/merge-pdf" className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium">Merge PDF</Link>
                    <Link href="/tools/pdf-to-jpg" className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium">PDF to JPG</Link>
                    <Link href="/tools/protect-pdf" className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium">Protect PDF</Link>
                    <Link href="/" className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-medium">All Tools</Link>
                </div>
            </section>
        </div>
    );

    return (
        <PdfToWordClient seoContent={seoContent} />
    );
}
