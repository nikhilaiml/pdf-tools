/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import MergePdfClient from './MergePdfClient';
import { HelpCircle, CheckCircle, Zap, Shield, Globe, Smartphone, ArrowRight, Minimize2, Image as ImageIcon, Check } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Merge PDF Online – Combine PDF Files Free | UsePDF',
    description: 'Merge PDF online free. Combine multiple PDF files into one document instantly. Fast, secure, and no installation required. Works on all devices.',
    keywords: [
        'merge pdf online',
        'merge pdf files online',
        'combine pdf files',
        'pdf merger online',
        'merge pdf free',
        'combine pdf online',
        'join pdf files'
    ],
    alternates: {
        canonical: 'https://usepdf.in/tools/merge-pdf',
    },
    openGraph: {
        title: 'Merge PDF Online – Combine PDF Files Free | UsePDF',
        description: 'Merge PDF online free. Combine multiple PDF files into one document instantly. Fast, secure, and no installation required.',
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
                        "name": "Is merge PDF online free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Merge PDF tool is 100% free to use. You can combine as many PDF files as you need without any cost."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it safe to merge PDF files?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We use secure SSL capability encryption, and all uploaded files are permanently deleted from our servers after 1 hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I merge PDFs without watermark?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! UsePDF does not add any watermarks to your merged documents. Your files remain professional and clean."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to install any software?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No installation is needed. Our tool runs entirely in your web browser, compatible with Windows, Mac, Linux, and mobile devices."
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
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Merge PDF Online – Combine PDF Files Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Easily <strong>merge PDF online</strong> with UsePDF. Our tool allows you to <strong>combine multiple PDF files</strong> into a single, organized document in just a few clicks. It works completely online with no signup or installation required, offering a fast and secure way to manage your documents.
                </p>
            </section>

            {/* Features Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Top Features for Merging PDFs</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        "Free PDF merger online",
                        "Combine multiple PDF files",
                        "No watermark added",
                        "No login required",
                        "Works on mobile & desktop",
                        "Secure & privacy-friendly"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Merge PDF Files</h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {[
                        { step: 1, title: "Upload Files", text: "Select your PDF documents." },
                        { step: 2, title: "Arrange Order", text: "Drag to reorder pages." },
                        { step: 3, title: "Merge PDF", text: "Click to combine files." },
                        { step: 4, title: "Download", text: "Save your merged PDF." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">{item.step}</div>
                            <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose UsePDF */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use UsePDF to Merge PDF?</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Zap className="w-10 h-10 text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Faster Processing</h3>
                            <p className="text-slate-600">Our optimized engine processes files instantly, making us faster than many other online PDF merger tools.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Smartphone className="w-10 h-10 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Simple Interface</h3>
                            <p className="text-slate-600">Our intuitive drag-and-drop interface makes arranging and combining documents effortless for everyone.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No Quality Loss</h3>
                            <p className="text-slate-600">We preserve the formatting and resolution of your original files, ensuring the merged document looks perfect.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Globe className="w-10 h-10 text-purple-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">100% Browser-Based</h3>
                            <p className="text-slate-600">Merge files directly in your web browser. There is no need to download or install risky software.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Email Organization</h3>
                        <p className="text-slate-600">Instead of sending ten separate attachments, <strong>merge PDF files for email</strong> into a single, professional document that is easier for recipients to download and read.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Scanned Documents</h3>
                        <p className="text-slate-600">Did you scan a contract page by page? Use our tool to <strong>combine scanned documents</strong> into one cohesive PDF file for archiving or sharing.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Reports</h3>
                        <p className="text-slate-600"><strong>Join invoices or reports</strong> from different departments. Combine spreadsheets, text docs (after converting to PDF), and images into one master report.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Academic Use</h3>
                        <p className="text-slate-600">Students and researchers can <strong>merge PDFs for work or study</strong>, compiling lecture notes, research papers, and references into a single study guide.</p>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">UsePDF vs. Typical PDF Mergers</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th className="p-4 font-bold text-slate-900">Feature</th>
                                <th className="p-4 font-bold text-indigo-600 bg-indigo-50 rounded-t-xl">UsePDF</th>
                                <th className="p-4 font-bold text-slate-500">Typical Tools</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 text-slate-900 font-medium">Cost</td>
                                <td className="p-4 text-indigo-600 bg-indigo-50/50">100% Free</td>
                                <td className="p-4 text-slate-600">Often Paid / Freemium</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 text-slate-900 font-medium">Watermark</td>
                                <td className="p-4 text-indigo-600 bg-indigo-50/50">None</td>
                                <td className="p-4 text-slate-600">Sometimes Added</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 text-slate-900 font-medium">Privacy</td>
                                <td className="p-4 text-indigo-600 bg-indigo-50/50">Auto-delete (1hr)</td>
                                <td className="p-4 text-slate-600">Varies</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-slate-900 font-medium">Speed</td>
                                <td className="p-4 text-indigo-600 bg-indigo-50/50 rounded-b-xl">Instant</td>
                                <td className="p-4 text-slate-600">Can be Slow</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {[
                        { q: "Is merge PDF online free?", a: "Yes, our Merge PDF tool is 100% free to use. You can combine as many PDF files as you need without any cost." },
                        { q: "Is it safe to merge PDF files?", a: "Absolutely. We use secure SSL capability encryption, and all uploaded files are permanently deleted from our servers after 1 hour." },
                        { q: "Can I merge PDFs without watermark?", a: "Yes! UsePDF does not add any watermarks to your merged documents. Your files remain professional and clean." },
                        { q: "Do I need to install any software?", a: "No installation is needed. Our tool runs entirely in your web browser, compatible with Windows, Mac, Linux, and mobile devices." }
                    ].map((faq, i) => (
                        <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Tools */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Explore Other Free Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link href="/tools/compress-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-100 transition-colors">
                                <Minimize2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Compress PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Reduce PDF size efficiently.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/tools/image-to-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-100 transition-colors">
                                <ImageIcon className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Image to PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Photos to PDF document.</p>
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
                            <p className="text-slate-500 text-sm mb-4">View all free PDF tools.</p>
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
        <MergePdfClient seoContent={seoContent} />
    );
}
