/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import MergePdfClient from './MergePdfClient';
import { CheckCircle, HelpCircle, Minimize2, Split, ArrowRight, Shield, Layers, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Merge PDF Online – Combine PDF Files Free | UsePDF',
    description: 'Merge multiple PDF files online for free. Combine PDF documents securely into one file. User-friendly, fast, and secure PDF merger.',
    keywords: ['merge pdf', 'combine pdf', 'join pdf', 'merge pdf online', 'pdf merger', 'combine pdf files'],
    alternates: {
        canonical: 'https://usepdf.in/tools/merge-pdf',
    },
    openGraph: {
        title: 'Merge PDF Online – Combine PDF Files Free | UsePDF',
        description: 'Merge multiple PDF files online for free. Combine PDF documents securely into one file. User-friendly, fast, and secure PDF merger.',
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
                        "name": "What is this PDF tool?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Merge PDF tool is a versatile online utility that allows you to combine multiple PDF documents into a single, cohesive file. It is perfect for organizing scattered documents into one easy-to-manage file."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this tool free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Merge PDF tool is completely free. You can start merging your files immediately without any registration, watermarks, or hidden costs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it safe and secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your security is our top priority. We use advanced encryption to handle your files, and we automatically delete all uploaded data from our servers after one hour to ensure your privacy."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I use this tool online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Using the tool is easy: upload the PDF files you want to combine, arrange them in your preferred order using our drag-and-drop interface, and click the merge button to download your single combined PDF."
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
                    Combining multiple documents into a single file has never been easier. Our <strong>Merge PDF</strong> tool allows you to join PDF files quickly and securely, creating a unified document for better organization. Streamline your workflow by merging reports, receipts, or contracts in just a few clicks with our intuitive and free solution.
                </p>
            </section>

            {/* What is this tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What is the Merge PDF Tool?</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">
                        The Merge PDF tool is designed to solve the common problem of scattered information. Often, we find ourselves with multiple related documents—such as separate chapters of a book, various invoices, or different parts of a project report—that are difficult to manage individually. Our merging tool consolidates these separate files into one orderly PDF document.
                    </p>
                    <p>
                        This tool handles the complex task of stitching together digital documents while maintaining page numbering and formatting integrity. It supports various PDF versions and ensures that the final output is compatible with all standard PDF readers. Whether you are a student compiling assignment pages or a business integrating weekly reports, this tool offers the reliability you need.
                    </p>
                </div>
            </section>

            {/* Why Use Section */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose Our PDF Merger?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
                    {[
                        { icon: Layers, text: "Seamlessly combine unlimited pages" },
                        { icon: Shield, text: "Secure processing with auto-deletion" },
                        { icon: CheckCircle, text: "Preserves original formatting and quality" },
                        { icon: Globe, text: "No installation required - works on web" }
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
                        Our platform stands out because of its simplicity and commitment to user privacy. We do not require you to create an account or provide an email address to use the service. You can <Link href="/tools/compress-pdf" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline">compress pdfs</Link> or merge them instantly. The interface is designed to be user-friendly, allowing you to drag and drop files and reorder them visually before finalizing the merge.
                    </p>
                    <p className="mt-4">
                        Efficiency is key. We process files on optimized servers to ensure minimal wait times, even for larger documents. Plus, our commitment to security means you can trust us with your sensitive business contracts or personal records. Once you are done, the files are wiped from our system, giving you peace of mind.
                    </p>
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Merge PDF Online</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                        { step: "1", title: "Upload Files", desc: "Select multiple PDF files." },
                        { step: "2", title: "Arrange Order", desc: "Drag pages to correct order." },
                        { step: "3", title: "Merge & Download", desc: "Get your single combined PDF." }
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
                        To get started, visit the UsePDF <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline">homepage</Link> and click on the Merge PDF tool. Upload the files you wish to combine. You can upload files from your computer, mobile device, or cloud storage.
                    </p>
                    <p className="mt-4">
                        Once uploaded, you will see thumbnails of your documents. Simply click and drag these thumbnails to rearrange them into your desired sequence. When everything looks right, hit the &apos;Merge&apos; button. Your new document will be ready in moments. You can then proceed to <Link href="/tools/protect-pdf" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline">protect your new PDF</Link> if needed.
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
                        { q: "What is this PDF tool?", a: "The Merge PDF tool is a versatile online utility that allows you to combine multiple PDF documents into a single, cohesive file. It is perfect for organizing scattered documents into one easy-to-manage file." },
                        { q: "Is this tool free to use?", a: "Yes, our Merge PDF tool is completely free. You can start merging your files immediately without any registration, watermarks, or hidden costs." },
                        { q: "Is it safe and secure?", a: "Your security is our top priority. We use advanced encryption to handle your files, and we automatically delete all uploaded data from our servers after one hour to ensure your privacy." },
                        { q: "How do I use this tool online?", a: "Using the tool is easy: upload the PDF files you want to combine, arrange them in your preferred order using our drag-and-drop interface, and click the merge button to download your single combined PDF." }
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
                    <Link href="/tools/compress-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-100 transition-colors">
                                <Minimize2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Compress PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Reduce file size while optimizing quality.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/tools/split-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-100 transition-colors">
                                <Split className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Split PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Extract pages from your PDF documents.</p>
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
                            <p className="text-slate-500 text-sm mb-4">Return to PDF tools homepage.</p>
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
