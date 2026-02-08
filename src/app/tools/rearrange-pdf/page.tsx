/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import RearrangePdfClient from './RearrangePdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Move, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Reorder PDF Pages Online Free – Rearrange PDF Pages Easily',
    description: 'Reorder PDF pages online free. Rearrange, organize and move pages in PDF files. No signup, no watermark. Fast, secure PDF page organizer tool.',
    keywords: [
        'reorder pdf pages online free',
        'rearrange pdf pages',
        'reorder pages in pdf',
        'rearrange pdf online',
        'reorder pdf no signup',
        'reorder pdf without watermark',
        'change page order in pdf',
        'move pages in pdf',
        'organize pdf pages',
        'pdf page organizer',
        'pdf editor reorder pages'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/rearrange-pdf',
    },
    openGraph: {
        title: 'Reorder PDF Pages Online Free – Rearrange PDF Pages Easily',
        description: 'Reorder PDF pages online free. Drag and drop to rearrange pages. No signup, no watermark. Fast & secure.',
        url: 'https://www.usepdf.in/tools/rearrange-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Reorder PDF Pages Online Free – Rearrange Pages Instantly',
        description: 'Reorder PDF pages online free. No signup, no watermark. Secure PDF page organizer tool.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RearrangePdfPage() {
    // FAQs
    const faqs = [
        {
            name: "Is Reorder PDF Pages online free?",
            acceptedAnswer: {
                text: "Yes, our reorder PDF pages online free tool is 100% free forever. There are no hidden charges, subscriptions, or limits. Rearrange pages in unlimited PDF files without paying anything."
            }
        },
        {
            name: "Can I move only one page in a PDF?",
            acceptedAnswer: {
                text: "Yes, you can move a single page or rearrange multiple pages at once. Simply drag and drop to change page order in pdf exactly as you need."
            }
        },
        {
            name: "Will reordering affect PDF quality?",
            acceptedAnswer: {
                text: "No, our tool maintains the original quality of all pages. We organize pdf pages without any compression or quality loss. Your reordered PDF looks exactly like the original."
            }
        },
        {
            name: "Is signup or registration required?",
            acceptedAnswer: {
                text: "No signup required. Simply upload your PDF, rearrange pages, and download instantly. We believe in reorder pdf no signup approach for maximum convenience and privacy."
            }
        },
        {
            name: "Does this tool work on mobile devices?",
            acceptedAnswer: {
                text: "Absolutely! Our pdf page organizer works perfectly on Android phones, iPhones, tablets, and laptops. No app installation needed—works directly in your browser."
            }
        },
        {
            name: "Can I reorder pages in large PDF files?",
            acceptedAnswer: {
                text: "Yes, our tool handles large PDF files efficiently. You can rearrange pages in documents with many pages. Processing may take a few extra seconds for very large files."
            }
        },
        {
            name: "Is my PDF data safe when reordering online?",
            acceptedAnswer: {
                text: "Your security is our priority. We use SSL encryption for all transfers. Files are processed securely and automatically deleted from our servers within one hour."
            }
        }
    ];

    // How-To Steps
    const howToSteps = [
        {
            name: "Upload Your PDF File",
            text: "Click the upload button or drag and drop your PDF document. Our pdf page organizer accepts files of any size."
        },
        {
            name: "Drag and Drop to Rearrange",
            text: "Simply drag page thumbnails to move pages in pdf and arrange them in your desired order. It's intuitive and fast."
        },
        {
            name: "Download Reordered PDF",
            text: "Click 'Save Changes' and download your reorganized PDF. The result is reorder pdf without watermark and ready for immediate use."
        }
    ];

    // JSON-LD Schema - SoftwareApplication + HowTo + FAQPage
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Reorder PDF Pages Online Free",
                "description": "Reorder PDF pages online free. Rearrange and organize pages in PDF files without watermark or signup.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/rearrange-pdf",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Reorder PDF Pages Online Free",
                "description": "Step-by-step guide to rearrange pdf pages and organize page order without watermark or signup.",
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
                        "name": "Reorder PDF Pages",
                        "item": "https://www.usepdf.in/tools/rearrange-pdf"
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
                    Need to <strong>reorder PDF pages online free</strong>? Whether you're fixing scanned documents in wrong order,
                    organizing assignment pages, or preparing reports for submission—our <strong>pdf page organizer</strong> makes
                    it effortless. No signup. No watermark. Just drag, drop, and download.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                    Trusted by students, professionals, and businesses worldwide.
                </p>
            </section>

            {/* What is Reorder PDF Tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Reorder PDF Pages Tool?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>reorder PDF pages tool</strong> allows you to change the sequence of pages within your PDF document.
                    Unlike deleting (which removes pages) or splitting (which creates separate files), reordering simply changes
                    the page order while keeping all content intact.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    This is incredibly useful when you have scanned pages in the wrong order, need to reorganize a report, or want
                    to arrange document sections logically. Our <strong>pdf editor reorder pages</strong> feature handles this in
                    seconds with simple drag-and-drop.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Online reordering tools are preferred because they require no software installation, work on any device,
                    and provide instant results. Simply upload, rearrange, and download your perfectly organized PDF.
                </p>
            </section>

            {/* Why Reorder PDF Pages */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Do People Reorder PDF Pages?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Fix incorrect scan order in documents",
                        "Arrange pages properly for assignments or reports",
                        "Organize documents for form submission",
                        "Improve document readability and flow",
                        "Prepare PDFs for printing in correct sequence",
                        "Restructure presentations and proposals"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* How to Reorder - Steps */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Reorder PDF Pages Online Free</h2>
                <p className="text-slate-600 mb-6">
                    Follow these simple steps to <strong>rearrange pdf pages</strong> in seconds:
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF Reorder PDF Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free Forever", desc: "No hidden costs or premium limits" },
                        { icon: <Move className="w-6 h-6 text-blue-500" />, title: "Drag-and-Drop Interface", desc: "Intuitive page reordering" },
                        { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "Original Quality", desc: "No quality loss after reordering" },
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases for Reordering PDF Pages</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Students & Assignments", desc: "Rearrange assignment or project pages in the correct order before submission to professors or college portals." },
                        { title: "Scanned Documents", desc: "Fix pages that were scanned in the wrong order. Organize them properly without rescanning." },
                        { title: "Business Reports & Proposals", desc: "Restructure reports, proposals, or presentations to present information in the most logical flow." },
                        { title: "Official Document Preparation", desc: "Organize documents correctly before uploading to official or government submission portals." },
                        { title: "Printing in Correct Sequence", desc: "Reorder pages so they print in the exact sequence you need, saving time and avoiding confusion." }
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
                    Is It Safe to Reorder PDF Pages Online?
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Reordered PDF vs Original PDF – Quick Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-semibold text-slate-900 border-b">Feature</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Original PDF</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Reordered PDF</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b">
                                <td className="p-4 font-medium">Page Order</td>
                                <td className="p-4">May be incorrect or disorganized</td>
                                <td className="p-4">Pages in perfect sequence</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Readability</td>
                                <td className="p-4">Confusing flow if misordered</td>
                                <td className="p-4">Logical and easy to follow</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-medium">Professional Appearance</td>
                                <td className="p-4">May look unprofessional</td>
                                <td className="p-4">Polished and organized</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Print Ready</td>
                                <td className="p-4">May print in wrong order</td>
                                <td className="p-4">Ready for correct printing</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Best Use Case</td>
                                <td className="p-4">Unedited document storage</td>
                                <td className="p-4">Sharing, submission & printing</td>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose UsePDF Reorder PDF Tool?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "No Annoying Ads", desc: "Clean interface without distracting advertisements" },
                        { title: "No Forced Registration", desc: "Start reordering pages immediately without creating accounts" },
                        { title: "Intuitive Drag-and-Drop", desc: "Simply drag pages to rearrange—no learning curve" },
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
                <h2 className="text-2xl font-bold mb-4">Ready to Reorder Your PDF Pages?</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Join thousands of users worldwide who trust UsePDF for fast, free, and secure PDF editing.
                    Rearrange your pages in seconds and share perfectly organized documents.
                </p>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                    Reorder Pages Now – It's Free
                    <ArrowRight className="w-5 h-5" />
                </button>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/delete-pdf-pages" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Delete PDF Pages Online
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Split PDF Pages Online
                    </Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF Files Online
                    </Link>
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Rotate PDF Pages Online
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF Online Free
                    </Link>
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert PDF to JPG Online
                    </Link>
                </div>
            </section>
        </div>
    );

    const introText = "Rearrange and reorder PDF pages online instantly with UsePDF. Simply drag and drop to change the order of pages in your PDF file. Our tool is completely free, fast, and requires no software installation or registration.";

    return (
        <RearrangePdfClient
            seoContent={seoContent}
            title="Reorder PDF Pages Online Free – Rearrange PDF Pages Easily"
            subtitle={introText}
        />
    );
}
