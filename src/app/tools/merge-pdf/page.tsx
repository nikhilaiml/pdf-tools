/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import MergePdfClient from './MergePdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, FolderPlus, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Merge PDF Online Free – Combine PDF Files into One Document',
    description: 'Merge PDF online free. Combine multiple PDF files into one document. No signup, no watermark. Fast, secure PDF merger tool.',
    keywords: [
        'merge pdf online free',
        'merge pdf files online',
        'combine pdf files',
        'join pdf pages',
        'merge multiple pdf files',
        'merge pdf no signup',
        'merge pdf without watermark',
        'combine pdf documents',
        'pdf merger tool',
        'merge large pdf files',
        'merge pdf for forms',
        'online pdf merger'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/merge-pdf',
    },
    openGraph: {
        title: 'Merge PDF Online Free – Combine PDF Files into One Document',
        description: 'Merge PDF online free. Combine multiple files into one document. No signup, no watermark. Fast & secure.',
        url: 'https://www.usepdf.in/tools/merge-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Merge PDF Online Free – Combine Files Instantly',
        description: 'Merge PDF online free. No signup, no watermark. Secure PDF merger tool.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function MergePdfPage() {
    // FAQs
    const faqs = [
        {
            name: "Is Merge PDF online free?",
            acceptedAnswer: {
                text: "Yes, our merge PDF online free tool is 100% free forever. There are no hidden charges, subscriptions, or limits. Combine unlimited PDF files without paying anything."
            }
        },
        {
            name: "Can I merge many PDF files at once?",
            acceptedAnswer: {
                text: "Yes, you can merge multiple pdf files at once. Simply upload all your files, arrange them in your preferred order, and combine them into a single document instantly."
            }
        },
        {
            name: "Will quality be reduced after merging?",
            acceptedAnswer: {
                text: "No, our tool maintains the original quality of all pages. We combine pdf documents without any compression or quality loss. Your merged PDF looks exactly like the originals."
            }
        },
        {
            name: "Is signup or registration required?",
            acceptedAnswer: {
                text: "No signup required. Simply upload your PDFs, merge them, and download instantly. We believe in merge pdf no signup approach for maximum convenience and privacy."
            }
        },
        {
            name: "Does this tool work on mobile devices?",
            acceptedAnswer: {
                text: "Absolutely! Our online pdf merger works perfectly on Android phones, iPhones, tablets, and laptops. No app installation needed—works directly in your browser."
            }
        },
        {
            name: "Can I merge large PDF files?",
            acceptedAnswer: {
                text: "Yes, our tool handles merge large pdf files efficiently. You can combine documents with multiple pages each. For very large files, processing may take a few extra seconds."
            }
        },
        {
            name: "Is my PDF data safe when merging online?",
            acceptedAnswer: {
                text: "Your security is our priority. We use SSL encryption for all transfers. Files are processed securely and automatically deleted from our servers within one hour."
            }
        }
    ];

    // How-To Steps
    const howToSteps = [
        {
            name: "Upload Multiple PDF Files",
            text: "Click the upload button or drag and drop your PDF documents. You can select multiple files at once to combine pdf files quickly."
        },
        {
            name: "Arrange Files in Order",
            text: "Drag and drop to rearrange your PDFs in the desired sequence. This ensures your merged document has pages in the correct order."
        },
        {
            name: "Download Combined PDF",
            text: "Click 'Merge PDF' and download your combined document. The result is merge pdf without watermark and ready for immediate use."
        }
    ];

    // JSON-LD Schema - SoftwareApplication + HowTo + FAQPage
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Merge PDF Online Free",
                "description": "Merge PDF online free. Combine multiple PDF files into one document without watermark or signup.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/merge-pdf",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Merge PDF Online Free",
                "description": "Step-by-step guide to merge pdf files online and combine multiple documents without watermark or signup.",
                "totalTime": "PT1M",
                "step": howToSteps.map((step, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": step.name,
                    "text": step.text
                }))
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
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.usepdf.in"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Tools",
                        "item": "https://www.usepdf.in/tools"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Merge PDF",
                        "item": "https://www.usepdf.in/tools/merge-pdf"
                    }
                ]
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Introduction */}
            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Need to <strong>merge PDF online free</strong>? Whether you're a student combining assignment pages,
                    a professional creating unified reports, or someone preparing documents for form submissions—our
                    <strong> pdf merger tool</strong> makes it effortless. No signup. No watermark. Just instant results.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                    Trusted by students, professionals, and businesses worldwide.
                </p>
            </section>

            {/* What is Merge PDF Tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Merge PDF Tool?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>merge PDF tool</strong> allows you to combine multiple PDF documents into a single file.
                    Instead of managing several separate files, you can <strong>join pdf pages</strong> into one organized document.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    This is incredibly useful when you have related documents—like multiple chapters, invoices, or form pages—that
                    belong together. Our <strong>online pdf merger</strong> handles this in seconds, directly in your browser.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Online PDF mergers are preferred over desktop software because they require no installation, work on any device,
                    and provide instant results. Your documents stay secure with our encrypted processing.
                </p>
            </section>

            {/* Why Merge PDF */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Do People Merge PDF Files?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Upload multiple pages as one file",
                        "Combine documents for form submissions",
                        "Share a single PDF instead of many",
                        "Organize related documents together",
                        "Save time and reduce file clutter",
                        "Create comprehensive reports easily"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* How to Merge - Steps */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Merge PDF Online Free</h2>
                <p className="text-slate-600 mb-6">
                    Follow these simple steps to <strong>merge pdf files online</strong> in seconds:
                </p>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{step.name}</h3>
                                <p className="text-slate-600 text-sm">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-slate-500 mt-4 text-center">
                    ✓ No signup required &nbsp; ✓ No watermark added &nbsp; ✓ 100% free
                </p>
            </section>

            {/* Features */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF Merge PDF Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free Forever", desc: "No hidden costs or premium limits" },
                        { icon: <FolderPlus className="w-6 h-6 text-blue-500" />, title: "Merge Unlimited Files", desc: "Combine as many PDFs as you need" },
                        { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "Original Quality", desc: "No compression or quality loss" },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "Secure & Private", desc: "Files auto-delete in 1 hour" },
                        { icon: <Smartphone className="w-6 h-6 text-orange-500" />, title: "Works Everywhere", desc: "Mobile, tablet, and desktop" },
                        { icon: <Lock className="w-6 h-6 text-red-500" />, title: "No Watermark", desc: "Clean professional output" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="p-2 bg-white rounded-lg shadow-sm">{feature.icon}</div>
                            <div>
                                <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                                <p className="text-slate-600 text-sm">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Common Use Cases */}
            <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases for Merging PDFs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Students & Academic Work", desc: "Combine assignment pages, research papers, or multiple chapters into a single submission-ready document." },
                        { title: "Official & Government Forms", desc: "Many forms require multiple documents as one file. Merge your ID, photos, and forms for easy submission." },
                        { title: "Business Reports & Invoices", desc: "Combine monthly reports, invoices, or project documents into comprehensive packages for clients." },
                        { title: "Legal & Financial Documents", desc: "Merge contracts, agreements, or financial statements into organized files for record-keeping." },
                        { title: "Printing Multiple Documents", desc: "Combine several PDFs into one file for efficient printing without switching between documents." }
                    ].map((useCase, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                            <p className="text-slate-600 text-sm">{useCase.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Security Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    Is It Safe to Merge PDF Online?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Absolutely! Your security is our top priority. We use <strong>SSL encryption</strong> for all file transfers,
                    ensuring your documents are protected during upload and download.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Our tool processes files securely, and all uploaded documents are stored only temporarily.
                    Files are <strong>automatically deleted within one hour</strong> after processing is complete.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We never access, share, or sell your documents. Your privacy is guaranteed with our privacy-first approach.
                </p>
            </section>

            {/* Comparison Table */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Merged PDF vs Separate PDFs – Quick Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-semibold text-slate-900 border-b">Feature</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Separate PDFs</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Merged PDF</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b">
                                <td className="p-4 font-medium">File Management</td>
                                <td className="p-4">Multiple files to track</td>
                                <td className="p-4">Single organized document</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Upload Convenience</td>
                                <td className="p-4">Upload files one by one</td>
                                <td className="p-4">Upload once, done</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-medium">Sharing Ease</td>
                                <td className="p-4">Send multiple attachments</td>
                                <td className="p-4">Share one file</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Form Submissions</td>
                                <td className="p-4">May not be accepted</td>
                                <td className="p-4">Perfect for single-file uploads</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Best Use Case</td>
                                <td className="p-4">Individual document access</td>
                                <td className="p-4">Unified sharing & submission</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                            <h3 className="font-semibold text-slate-900 mb-2">{faq.name}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why UsePDF is Better */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose UsePDF Merge PDF Tool?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "No Annoying Ads", desc: "Clean interface without distracting advertisements" },
                        { title: "No Forced Registration", desc: "Start merging immediately without creating accounts" },
                        { title: "Lightning Fast", desc: "Optimized processing for instant results" },
                        { title: "Works on Any Device", desc: "Seamless experience on phone, tablet, or computer" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Conclusion / CTA */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Ready to Merge Your PDF Files?</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Join thousands of users worldwide who trust UsePDF for fast, free, and secure PDF merging.
                    Combine all your documents into one file in seconds.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                    Merge PDF Now – It's Free
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Split PDF Pages Online
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF Online Free
                    </Link>
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert PDF to JPG Online
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert PDF to Word Online
                    </Link>
                    <Link href="/tools/rearrange-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Rearrange PDF Pages
                    </Link>
                    <Link href="/tools/jpg-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert JPG to PDF Online
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <MergePdfClient seoContent={seoContent} />
    );
}
