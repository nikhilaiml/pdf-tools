/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import SplitPdfClient from './SplitPdfClient';
import { HelpCircle, Merge, Minimize2, Split, ArrowRight, Layers, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online – Extract Pages Free | UsePDF',
    description: 'Split PDF files online for free. Extract specific pages or separate documents from your PDF. Fast, secure, and no installation required.',
    keywords: ['split pdf', 'extract pdf pages', 'separate pdf', 'split pdf online', 'cut pdf', 'remove pdf pages'],
    alternates: {
        canonical: 'https://usepdf.in/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF Online – Extract Pages Free | UsePDF',
        description: 'Split PDF files online for free. Extract specific pages or separate documents from your PDF. Fast, secure, and no installation required.',
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
                        "name": "What is this PDF tool?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Split PDF tool allows you to divide a single PDF document into multiple separate files, or extracting specific pages to create a new, smaller document focused on what you need."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this tool free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Split PDF tool is 100% free. You can split documents and extract pages as many times as you want without paying a cent."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it safe and secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We use secure processing methods, and all your files are automatically deleted from our servers after one hour to protect your privacy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I use this tool online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Upload the PDF you want to split, enter the page numbers or range (e.g., 1-5) you wish to extract, and click the 'Split PDF' button. Your new file will be ready for download instantly."
                        }
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

            {/* Intro Section */}
            <section className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Split PDF Online – Extract Pages Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Extract specific pages or split large documents into smaller files with our free online <strong>Split PDF</strong> tool. Whether you need to pull a single page from a contract or break a large report into chapters, our tool makes it simple. Enjoy fast, secure, and precise PDF splitting directly in your browser without any watermark or quality loss.
                </p>
            </section>

            {/* What is this tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What is the Split PDF Tool?</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">
                        The Split PDF tool is a document management utility designed to give you control over your PDF content. Often, PDFs contain more information than necessary for a specific task—like a 50-page report where you only need the executive summary on page 3. Breaking these files apart manually is difficult without specialized software.
                    </p>
                    <p>
                        Our tool automates this process. You simply specify the page range you want to keep, and the system creates a new PDF containing only those pages. It preserves the formatting, layout, and quality of the original pages, ensuring your extracted document looks professional and ready for use.
                    </p>
                </div>
            </section>

            {/* Why Use Section */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use UsePDF to Split Documents?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
                    {[
                        { icon: Split, text: "Extract exact page ranges instantly" },
                        { icon: Layers, text: "Preserves original layout and quality" },
                        { icon: Globe, text: "No software installation (Cloud-based)" },
                        { icon: Minimize2, text: "Reduce file size by removing pages" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature.text}</span>
                        </div>
                    ))}
                </div>
                <div className="prose prose-slate max-w-4xl mx-auto text-slate-600">
                    <p>
                        Efficiency and simplicity are the core of our platform. We designed the Split PDF tool to be intuitive so anyone can use it without technical knowledge. You do not need to download heavy software suites like Adobe Acrobat just to separate a few pages. Our lightweight, browser-based solution works on <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline">any device</Link>, saving you disk space and time.
                    </p>
                    <p className="mt-4">
                        Moreover, it is a great way to handle file size limits. If you have a document that is too large to email, splitting it into smaller sections is a quick fix. And with our commitment to privacy, you can rest assured that your uploaded documents are processed securely and deleted promptly.
                    </p>
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Split PDF Online</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                        { step: "1", title: "Upload File", desc: "Select the PDF to split." },
                        { step: "2", title: "Choose Range", desc: "Enter page numbers (e.g. 1-5)." },
                        { step: "3", title: "Split & Save", desc: "Download your new file." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                                {item.step}
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="prose prose-slate max-w-3xl mx-auto text-center text-slate-600">
                    <p>
                        Using the tool is simple. First, navigate to the Split PDF tool on our site. Upload your document by dragging it onto the page. Once uploaded, you will see fields to enter the 'Start Page' and 'End Page'.
                    </p>
                    <p className="mt-4">
                        For example, if you want to extract the first chapter comprising pages 1 through 10, enter &apos;1&apos; and &apos;10&apos; respectively. Then click &apos;Split PDF&apos;. Our system does the work in seconds, providing you with a download link for the extracted section. You can then <Link href="/tools/merge-pdf" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline">merge it</Link> with other files if needed.
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                    {[
                        { q: "What is this PDF tool?", a: "The Split PDF tool allows you to divide a single PDF document into multiple separate files, or extracting specific pages to create a new, smaller document focused on what you need." },
                        { q: "Is this tool free to use?", a: "Yes, our Split PDF tool is 100% free. You can split documents and extract pages as many times as you want without paying a cent." },
                        { q: "Is it safe and secure?", a: "Absolutely. We use secure processing methods, and all your files are automatically deleted from our servers after one hour to protect your privacy." },
                        { q: "How do I use this tool online?", a: "Upload the PDF you want to split, enter the page numbers or range (e.g., 1-5) you wish to extract, and click the 'Split PDF' button. Your new file will be ready for download instantly." }
                    ].map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
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
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-red-100 transition-colors">
                                <Merge className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Merge PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Combine split files back together.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>
                    <Link href="/tools/compress-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-100 transition-colors">
                                <Minimize2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Compress PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Shrink your split files even further.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>
                    <Link href="/" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-100 transition-colors">
                                <Globe className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Home</h3>
                            <p className="text-slate-500 text-sm mb-4">Back to main dashboard.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Go Home <ArrowRight className="w-4 h-4 ml-1" />
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
