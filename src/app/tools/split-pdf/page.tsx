/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import SplitPdfClient from './SplitPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Scissors, ArrowRight, FileText, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online Free (No Watermark) – Fast & Secure PDF Splitter',
    description: 'Split PDF online free without watermark. Separate or extract pages instantly. Secure, fast and works on all devices.',
    keywords: [
        'split pdf online free',
        'pdf splitter',
        'split pdf file',
        'pdf page splitter',
        'separate pdf pages',
        'extract pages from pdf',
        'online pdf splitter',
        'split pdf without watermark',
        'split pdf without losing formatting',
        'split pdf pages online',
        'split pdf by page range',
        'split pdf no signup',
        'remove pages from pdf',
        'split large pdf file',
        'pdf cutter',
        'divide pdf pages'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF Online Free (No Watermark) – Fast & Secure PDF Splitter',
        description: 'Split PDF online free without watermark. Separate or extract pages instantly. Secure, fast and works on all devices.',
        url: 'https://www.usepdf.in/tools/split-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Split PDF Online Free (No Watermark) – Fast PDF Splitter',
        description: 'Split PDF online free without watermark. Separate or extract pages instantly. Secure & fast.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function SplitPdfPage() {
    // FAQs – matching user's exact questions
    const faqs = [
        {
            name: "How can I split a PDF online for free?",
            acceptedAnswer: {
                text: "Simply upload your PDF file to our free online PDF splitter, enter the page range you want to extract, and click Split PDF. Your new file downloads instantly. No signup, no payment, and no watermark. It works on any device with a browser."
            }
        },
        {
            name: "Can I split a PDF without losing formatting?",
            acceptedAnswer: {
                text: "Yes. Our tool extracts pages directly from the original PDF without any re-encoding or compression. Text, images, fonts, and layout remain exactly as they are in the original document. You get a pixel-perfect copy of only the pages you selected."
            }
        },
        {
            name: "Is this PDF splitter safe?",
            acceptedAnswer: {
                text: "Absolutely. All file transfers use SSL encryption. Your PDF is processed securely and automatically deleted from our servers within one hour. We never access, read, or share your documents. Your privacy is our top priority."
            }
        },
        {
            name: "Can I split PDF on mobile?",
            acceptedAnswer: {
                text: "Yes! Our online PDF splitter works perfectly on Android phones, iPhones, iPads, and tablets. No app installation required. Just open the page in your mobile browser, upload your file, and split it instantly."
            }
        },
        {
            name: "How do I extract pages from a PDF?",
            acceptedAnswer: {
                text: "Upload your PDF, then enter the start and end page numbers for the range you want. For example, enter 3 to 5 to extract pages 3, 4, and 5. To extract a single page, enter the same number for both start and end. Click Split PDF and download your extracted pages."
            }
        },
        {
            name: "Does this tool add watermark?",
            acceptedAnswer: {
                text: "No. Our PDF splitter never adds any watermark, logo, or branding to your files. The output is clean and professional, exactly as the original document. Split PDF without watermark, always."
            }
        }
    ];

    // How-To Steps – 4 steps per spec
    const howToSteps = [
        {
            name: "Upload PDF",
            text: "Click the upload button or drag and drop your PDF file. Our tool accepts all standard PDF documents of any size."
        },
        {
            name: "Select Pages",
            text: "Enter the start page and end page numbers to define which pages you want to extract from your PDF."
        },
        {
            name: "Click Split",
            text: "Hit the Split PDF button. The tool processes your file instantly and prepares your new document in seconds."
        },
        {
            name: "Download File",
            text: "Download your split PDF file. No watermark, no quality loss. Your file is ready to use immediately."
        }
    ];

    // JSON-LD Schema – SoftwareApplication + HowTo + FAQPage + BreadcrumbList
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Split PDF Online Free",
                "description": "Split PDF online free without watermark. Separate, extract or divide PDF pages instantly. 100% secure and fast PDF splitter tool.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "All",
                "url": "https://www.usepdf.in/tools/split-pdf",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Split a PDF File Online",
                "description": "Step-by-step guide to split PDF pages online free without watermark or signup.",
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

            {/* Section 1 – Intro (150 words) */}
            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Need to <strong>split PDF online free</strong>? Large PDF files can be frustrating. Maybe you only need a few pages
                    from a long report. Maybe your document has unwanted pages that you want to remove before sharing. Or perhaps
                    an online form only accepts single-page PDF uploads. Whatever the reason, our <strong>PDF splitter</strong> makes
                    it effortless to separate, extract, or divide PDF pages in seconds.
                </p>
                <p className="text-slate-600 mt-4 leading-relaxed">
                    No software to download. No account to create. No watermark on your files. Just upload, select your pages, and
                    download. Our <strong>online PDF splitter</strong> works on any device—desktop, laptop, tablet, or phone. It's
                    the fastest way to <strong>split PDF file</strong> documents when you need results right now.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                    Trusted by thousands of students, professionals, and businesses worldwide.
                </p>
            </section>

            {/* Section 2 – How to Split a PDF File Online */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Split a PDF File Online</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Splitting a PDF has never been easier. Follow these four simple steps to <strong>split pdf pages online</strong> and
                    get your extracted document ready in under a minute. No technical knowledge needed.
                </p>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">Step {i + 1}: {step.name}</h3>
                                <p className="text-slate-600 text-sm">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-slate-600 mt-6 leading-relaxed">
                    That's it. The entire process takes less than 60 seconds. Whether you want to <strong>extract pages from PDF</strong> or
                    divide a large document into smaller parts, our tool handles it smoothly. You can repeat the process as many
                    times as you need—there are no daily limits or file count restrictions.
                </p>
                <p className="text-sm text-slate-500 mt-4 text-center">
                    ✓ No signup required &nbsp; ✓ No watermark added &nbsp; ✓ 100% free
                </p>
            </section>

            {/* Section 3 – Features of Our PDF Splitter */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Features of Our PDF Splitter</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Our <strong>free PDF splitter</strong> is built with simplicity and power in mind. Here's what makes it
                    stand out from other tools available online.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Scissors className="w-6 h-6 text-blue-500" />, title: "Split PDF Without Losing Quality", desc: "Pages are extracted directly from the original. No re-encoding, no compression, no quality loss." },
                        { icon: <Lock className="w-6 h-6 text-red-500" />, title: "No Watermark Ever", desc: "Your output files are clean and professional. We never add any watermark or branding." },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "100% Secure Processing", desc: "SSL encryption for all transfers. Files auto-delete within 1 hour. Your data stays private." },
                        { icon: <Smartphone className="w-6 h-6 text-orange-500" />, title: "Works on Mobile", desc: "Fully responsive design. Split PDFs on your phone, tablet, or any device with a browser." },
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Free PDF Splitter", desc: "No hidden costs, no premium tiers, no limits. Split as many PDFs as you need, completely free." },
                        { icon: <Globe className="w-6 h-6 text-green-500" />, title: "No Installation Required", desc: "Works entirely in your browser. No software downloads, no plugins, no Java required." }
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

            {/* Split PDF Without Losing Quality – Dedicated Section */}
            <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Split PDF Without Losing Quality</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    One of the biggest concerns people have when using an <strong>online PDF splitter</strong> is whether
                    their document quality will be preserved. With our tool, the answer is always yes.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    When you <strong>split PDF file</strong> documents using UsePDF, we extract the exact pages you selected
                    without any form of re-compression or re-rendering. Text stays sharp. Images remain in their original
                    resolution. Fonts, colors, and vector graphics are preserved exactly as they appear in the source PDF.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    This means you can confidently <strong>separate PDF pages</strong> for official submissions, academic
                    assignments, legal documents, or professional reports. The output is identical to the original—just
                    with fewer pages.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Unlike some tools that convert and re-save your PDF (which can degrade quality), our approach ensures
                    <strong> split PDF without losing formatting</strong> every single time. What you see in the original is
                    exactly what you get in the split version.
                </p>
            </section>

            {/* Section 4 – Use Cases */}
            <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases for Splitting PDFs</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    People use our <strong>pdf page splitter</strong> for a wide variety of tasks every day. Here are
                    the most popular use cases.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Extract a Single Page",
                            desc: "Need just one page from a 50-page document? Enter the same start and end page number to extract exactly one page. Perfect for ID cards, certificates, and receipts."
                        },
                        {
                            title: "Divide Large PDF Files",
                            desc: "Large PDFs are hard to share via email. Split them into smaller, manageable files that fit within email attachment limits and are easier to handle."
                        },
                        {
                            title: "Remove Unwanted Pages",
                            desc: "Extract only the pages you need and leave behind blank pages, cover pages, or irrelevant sections that you don't want recipients to see."
                        },
                        {
                            title: "Split Invoice Pages",
                            desc: "Separate individual invoices from a bulk PDF. Accountants and bookkeepers use this feature daily to organize financial documents."
                        },
                        {
                            title: "Academic Submissions",
                            desc: "Students often need to submit specific pages from assignments, textbooks, or research papers. Extract only the required pages for submission portals."
                        },
                        {
                            title: "Official Form Uploads",
                            desc: "Government portals and online forms often require single-page PDF uploads. Split your multi-page document to meet these requirements."
                        }
                    ].map((useCase, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{useCase.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Our Free PDF Split Tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Free PDF Split Tool</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    There are many PDF splitter tools available online. Here's why thousands of users choose UsePDF
                    over the competition.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "No Annoying Ads", desc: "Clean, distraction-free interface. Focus on your work without pop-ups or banner ads getting in the way." },
                        { title: "No Forced Registration", desc: "Start splitting immediately. No email signups, no account creation, no unnecessary steps." },
                        { title: "Lightning Fast Processing", desc: "Our optimized engine processes your PDF in seconds, not minutes. Upload, split, and download—all in under 60 seconds." },
                        { title: "Works on Any Device", desc: "Seamless experience whether you're on a phone, tablet, laptop, or desktop computer. No app needed." },
                        { title: "Unlimited Usage", desc: "No daily limits, no file count restrictions. Split as many PDF documents as you need, whenever you need." },
                        { title: "Privacy First Approach", desc: "Your files are never stored permanently. Automatic deletion ensures your sensitive documents stay private." }
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

            {/* Security Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    Is It Safe to Split PDF Online?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Absolutely. Security is built into every step of our process. When you upload a file to our
                    <strong> PDF splitter</strong>, it's transferred using <strong>SSL encryption</strong>—the same
                    technology banks use to protect sensitive data.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Our tool processes your PDF directly in the browser whenever possible, meaning your file may
                    never even leave your device. For any server-side processing, files are stored temporarily
                    and <strong>automatically deleted within one hour</strong>.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We never access, read, share, or sell your documents. Your privacy is guaranteed. Whether you're
                    splitting personal documents, business contracts, or confidential reports, you can trust UsePDF
                    to handle your files responsibly.
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
                                <td className="p-4">Large (all pages included)</td>
                                <td className="p-4">Smaller (only selected pages)</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Page Flexibility</td>
                                <td className="p-4">All pages included</td>
                                <td className="p-4">Only the pages you need</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-medium">Email Sharing</td>
                                <td className="p-4">May exceed attachment limits</td>
                                <td className="p-4">Fits within email size limits</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Form Uploads</td>
                                <td className="p-4">Often not accepted</td>
                                <td className="p-4">Perfect for single-page uploads</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Best For</td>
                                <td className="p-4">Complete document archival</td>
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

            {/* Conclusion / CTA */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Ready to Split Your PDF?</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Join thousands of users worldwide who trust UsePDF for fast, free, and secure PDF splitting.
                    Upload your file, select your pages, and download in seconds. No watermark. No signup. Just results.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                    Split PDF Now – It's Free
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Internal Links – Expanded */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF Files Online
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF Online Free
                    </Link>
                    <Link href="/tools/rearrange-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Reorder PDF Pages
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Word Converter
                    </Link>
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert PDF to JPG Online
                    </Link>
                    <Link href="/tools/delete-pdf-pages" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Delete Pages from PDF
                    </Link>
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Rotate PDF Pages Online
                    </Link>
                    <Link href="/tools/protect-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Protect PDF with Password
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <SplitPdfClient seoContent={seoContent} />
    );
}
