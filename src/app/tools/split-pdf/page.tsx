/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import SplitPdfClient from './SplitPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Scissors, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online Free – Extract & Separate PDF Pages Easily',
    description: 'Split PDF online free. Extract pages from PDF, separate by page range. No signup, no watermark. Fast, secure PDF page splitter tool.',
    keywords: [
        'split pdf online free',
        'split pdf page free',
        'PDF page splitter free',
        'Pdf cutter',
        'split pdf pages online',
        'extract pages from pdf',
        'split pdf by page range',
        'separate pdf pages',
        'split pdf no signup',
        'split pdf without watermark',
        'remove pages from pdf',
        'pdf page splitter',
        'split large pdf file',
        'split pdf tool online',
        'split pdf for forms'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF Online Free – Extract & Separate PDF Pages Easily',
        description: 'Split PDF online free. Extract pages, separate by range. No signup, no watermark. Fast & secure.',
        url: 'https://www.usepdf.in/tools/split-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Split PDF Online Free – Extract Pages Instantly',
        description: 'Split PDF online free. No signup, no watermark. Secure PDF splitter tool.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function SplitPdfPage() {
    // FAQs
    const faqs = [
        {
            name: "Is Split PDF online free?",
            acceptedAnswer: {
                text: "Yes, our split PDF online free tool is 100% free forever. There are no hidden charges, subscriptions, or limits. Split unlimited PDF files without paying anything."
            }
        },
        {
            name: "Can I extract only one page from a PDF?",
            acceptedAnswer: {
                text: "Yes, you can extract a single page or any specific page range. Simply enter the same number for start and end page to extract just one page from your PDF document."
            }
        },
        {
            name: "Will splitting reduce PDF quality?",
            acceptedAnswer: {
                text: "No, our tool maintains the original quality. We extract pages without any compression or quality loss. Your split PDF files look exactly like the original document."
            }
        },
        {
            name: "Is signup or login required?",
            acceptedAnswer: {
                text: "No signup required. Simply upload your PDF, select pages, and download instantly. We believe in split pdf no signup approach for maximum convenience."
            }
        },
        {
            name: "Does this tool work on mobile devices?",
            acceptedAnswer: {
                text: "Absolutely! Our pdf page splitter works perfectly on Android phones, iPhones, tablets, and laptops. No app installation needed—works directly in your browser."
            }
        },
        {
            name: "Can I split large PDF files?",
            acceptedAnswer: {
                text: "Yes, our tool handles large PDF files efficiently. You can split large pdf file documents with multiple pages. For very large files, processing may take a few extra seconds."
            }
        },
        {
            name: "Is my PDF data safe when splitting online?",
            acceptedAnswer: {
                text: "Your security is our priority. We use SSL encryption for all transfers. Files are processed securely and automatically deleted from our servers within one hour."
            }
        }
    ];

    // How-To Steps
    const howToSteps = [
        {
            name: "Upload Your PDF File",
            text: "Click the upload button or drag and drop your PDF document. Our tool accepts all standard PDF files of any size."
        },
        {
            name: "Select Pages or Page Range",
            text: "Enter the start and end page numbers to extract pages from pdf. You can split by page range or extract specific pages."
        },
        {
            name: "Download Split PDF Files",
            text: "Click 'Split PDF' and download your new document. All files are split pdf without watermark and ready for use."
        }
    ];

    // JSON-LD Schema - SoftwareApplication + HowTo + FAQPage
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Split PDF Online Free",
                "description": "Split PDF online free. Extract pages from PDF, separate by page range without watermark or signup.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/split-pdf",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Split PDF Online Free",
                "description": "Step-by-step guide to split pdf pages online and extract specific pages without watermark or signup.",
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
                        "name": "Split PDF",
                        "item": "https://www.usepdf.in/tools/split-pdf"
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
                    Need to <strong>split PDF online free</strong>? Whether you're a student extracting assignment pages,
                    a professional separating report sections, or someone preparing documents for form submissions—our
                    <strong> pdf page splitter</strong> makes it effortless. No signup. No watermark. Just instant results.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                    Trusted by students, professionals, and businesses worldwide.
                </p>
            </section>

            {/* What is Split PDF Tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Split PDF Tool?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>split PDF tool</strong> allows you to divide a multi-page PDF document into smaller files
                    or <strong>extract pages from PDF</strong> documents. This is incredibly useful when you only need
                    specific pages from a large document.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Instead of sharing an entire 50-page report, you can <strong>separate PDF pages</strong> and send
                    only the relevant sections. Our <strong>split pdf tool online</strong> handles this in seconds,
                    directly in your browser.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Online PDF splitters are preferred because they require no software installation, work on any device,
                    and provide instant results. Your documents never leave your control with our secure processing.
                </p>
            </section>

            {/* Why Split PDF */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Do People Split PDF Files?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Upload single pages to online forms",
                        "Remove unwanted or confidential pages",
                        "Reduce file size for email attachments",
                        "Share only required pages with others",
                        "Organize large PDF documents efficiently",
                        "Print specific pages without wasting paper"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* How to Split - Steps */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Split PDF Online Free</h2>
                <p className="text-slate-600 mb-6">
                    Follow these simple steps to <strong>split pdf pages online</strong> in seconds:
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF Split PDF Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free Forever", desc: "No hidden costs or premium limits" },
                        { icon: <Scissors className="w-6 h-6 text-blue-500" />, title: "Split by Page Range", desc: "Extract any pages you need" },
                        { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "High-Quality Output", desc: "No quality loss in split files" },
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases for Splitting PDFs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Students & Academic Submissions", desc: "Extract specific assignment pages or separate chapters from textbooks for easier studying and submission." },
                        { title: "Official & Government Forms", desc: "Many forms require single-page uploads. Split your documents to meet upload requirements on official portals." },
                        { title: "Business Document Sharing", desc: "Share only relevant report sections with clients or colleagues instead of sending entire documents." },
                        { title: "Printing Selected Pages", desc: "Save paper and ink by extracting only the pages you need to print from large PDF documents." },
                        { title: "Removing Confidential Pages", desc: "Remove sensitive or confidential pages before sharing documents externally with clients or partners." }
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
                    Is It Safe to Split PDF Online?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Absolutely! Your security is our top priority. We use <strong>SSL encryption</strong> for all file transfers,
                    ensuring your documents are protected during upload and download.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Our tool processes files directly in your browser when possible, meaning your PDFs never leave your device.
                    For server-side processing, files are stored temporarily and <strong>automatically deleted within one hour</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We never access, share, or sell your documents. Your privacy is guaranteed with our privacy-first approach.
                </p>
            </section>

            {/* Comparison Table */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Split PDF vs Full PDF – Quick Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-semibold text-slate-900 border-b">Feature</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Full PDF</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Split PDF</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b">
                                <td className="p-4 font-medium">File Size</td>
                                <td className="p-4">Large (all pages)</td>
                                <td className="p-4">Smaller (selected pages only)</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Page Flexibility</td>
                                <td className="p-4">All pages included</td>
                                <td className="p-4">Only pages you need</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-medium">Sharing Convenience</td>
                                <td className="p-4">May include extra content</td>
                                <td className="p-4">Share only relevant pages</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Form Uploads</td>
                                <td className="p-4">May not be accepted</td>
                                <td className="p-4">Perfect for single-page uploads</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Best Use Case</td>
                                <td className="p-4">Complete document storage</td>
                                <td className="p-4">Targeted sharing & submissions</td>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose UsePDF Split PDF Tool?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "No Annoying Ads", desc: "Clean interface without distracting advertisements" },
                        { title: "No Forced Registration", desc: "Start splitting immediately without creating accounts" },
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
                <h2 className="text-2xl font-bold mb-4">Ready to Split Your PDF?</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Join thousands of users worldwide who trust UsePDF for fast, free, and secure PDF splitting.
                    Extract exactly the pages you need in seconds.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                    Split PDF Now – It's Free
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF Files Online
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF Online Free
                    </Link>
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert PDF to JPG Online
                    </Link>
                    <Link href="/tools/rearrange-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Rearrange PDF Pages
                    </Link>
                    <Link href="/tools/delete-pdf-pages" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Delete Pages from PDF
                    </Link>
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Rotate PDF Pages Online
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <SplitPdfClient seoContent={seoContent} />
    );
}
