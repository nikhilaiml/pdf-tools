/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import SplitPdfClient from './SplitPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Scissors, ArrowRight, FileText, Globe, Layers, Eye, Download } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online Free – Separate, Extract & Cut PDF Pages Instantly (No Signup) | UsePDF',
    description: 'Split PDF online free. Separate, extract or cut PDF pages instantly with no signup and no watermark. Secure browser-based PDF splitter tool.',
    keywords: [
        'split pdf online free',
        'pdf splitter',
        'split pdf file',
        'pdf page splitter',
        'separate pdf pages',
        'extract pages from pdf',
        'online pdf splitter',
        'split pdf without watermark',
        'cut pdf pages online',
        'split pdf pages online',
        'free pdf splitter',
        'split pdf no signup',
        'remove pages from pdf',
        'split large pdf file',
        'pdf cutter',
        'divide pdf pages',
        'split pdf without losing quality'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/split-pdf',
    },
    openGraph: {
        title: 'Split PDF Online Free – Separate, Extract & Cut PDF Pages Instantly',
        description: 'Split PDF online free. Separate, extract or cut PDF pages instantly with no signup. Secure browser-based processing.',
        url: 'https://www.usepdf.in/tools/split-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Split PDF Online Free – Separate & Extract Pages Instantly',
        description: 'Split PDF online free. Separate, extract or cut PDF pages instantly with no signup.',
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
            name: "How do I split PDF online for free?",
            acceptedAnswer: {
                text: "To split PDF online for free, simply upload your PDF file to UsePDF's secure tool. Enter the page ranges you want to extract (e.g., 1-5 or 3,7,9). Click 'Split PDF' and download your new document instantly. No signup required."
            }
        },
        {
            name: "What is the best PDF splitter online?",
            acceptedAnswer: {
                text: "The best PDF splitter online should be free, fast, secure, and require no installation. UsePDF offers all these features with the added benefit of processing files directly in your browser for maximum privacy."
            }
        },
        {
            name: "Can I extract pages from a PDF file?",
            acceptedAnswer: {
                text: "Yes, you can easily extract pages from a PDF file using our tool. Whether you need a single page or a specific range, just specify the page numbers and our tool will create a new PDF containing only those pages."
            }
        },
        {
            name: "Is it safe to split PDF online?",
            acceptedAnswer: {
                text: "Yes, it is completely safe. UsePDF uses secure browser-based processing (SSL), meaning your files are often processed locally on your device or deleted from our servers immediately after processing. We never store or share your documents."
            }
        },
        {
            name: "How to separate PDF pages without software?",
            acceptedAnswer: {
                text: "You don't need expensive software like Adobe Acrobat to separate PDF pages. UsePDF works in any modern web browser (Chrome, Firefox, Safari, Edge) on Windows, Mac, Linux, or mobile devices."
            }
        },
        {
            name: "Does splitting PDF reduce quality?",
            acceptedAnswer: {
                text: "No, splitting PDF helps you separate pages without losing quality. Our tool extracts the exact pages from your original document, preserving fonts, images, and formatting exactly as they appeared in the source file."
            }
        }
    ];

    // How-To Steps
    const howToSteps = [
        {
            name: "Upload PDF File",
            text: "Click 'Upload PDF' or drag and drop your file into the splitter tool. We support large files and all standard PDF types."
        },
        {
            name: "Select Page Range",
            text: "Enter the specific page numbers or ranges (e.g., 1-5) you want to extract/separate from the document."
        },
        {
            name: "Click Split PDF",
            text: "Press the 'Split PDF' button. Our engine will instantly process the file and separate the selected pages."
        },
        {
            name: "Download New PDF",
            text: "Download your newly created PDF file containing only the extracted pages. No watermark, no signup."
        }
    ];

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Split PDF Online Free",
                "description": "Split PDF online free. Separate, extract or cut PDF pages instantly with no signup and no watermark. Secure browser-based PDF splitter tool.",
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
                "name": "How to Split PDF Pages Step-by-Step",
                "description": "Step-by-step guide to split PDF online free and extract pages without quality loss.",
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

            {/* Introduction / H2: Split PDF Online Free */}
            <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Split PDF Online Free</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                    <p>
                        If you need to <strong>split PDF</strong> quickly, our free Split PDF tool lets you extract pages instantly.
                        UsePDF allows you to separate documents directly in your browser without any software installation.
                        Whether you are a student, lawyer, or business professional, our <strong>pdf splitter</strong> makes it easy to organize your files.
                    </p>
                    <p className="mt-4">
                        Unlike traditional software, our <strong>free pdf splitter</strong> works completely in the cloud.
                        You can upload a file, select page ranges, and <strong>extract pages from pdf</strong> in seconds—no signup required.
                    </p>
                </div>
            </section>

            {/* H2: How to Split PDF Pages Step-by-Step */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">How to Split PDF Pages Only</h2>
                <p className="text-slate-600 mb-6 dark:text-gray-300">
                    Follow these simple steps to <strong>cut pdf pages online</strong>:
                </p>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl dark:bg-slate-700/50">
                            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1 dark:text-white">{step.name}</h3>
                                <p className="text-slate-600 text-sm dark:text-gray-300">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl dark:bg-blue-900/20 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-300 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <strong>Pro Tip:</strong> Enter "1-5" to keep the first five pages, or "5" to extract just page 5.
                    </p>
                </div>
            </section>

            {/* H2: Extract Pages from PDF File */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 dark:from-slate-800 dark:to-slate-800 dark:border dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">Extract Pages from PDF File</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-slate-600 mb-4 dark:text-gray-300">
                            Need specific chapters from a large book or report?
                            UsePDF makes it easy to <strong>extract pages from pdf</strong> without affecting the original document.
                        </p>
                        <p className="text-slate-600 mb-4 dark:text-gray-300">
                            When you <strong>separate pdf pages</strong>, we create a new file with only your selected pages.
                            Ideal for sharing specific information efficiently.
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Extract single pages (e.g., page 5)",
                                "Extract page ranges (e.g., pages 10-20)",
                                "Extract multiple separate ranges",
                                "Remove unwanted cover pages"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-700 dark:text-gray-300 text-sm">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-slate-700">
                        <div className="flex items-center justify-center h-48 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 dark:bg-slate-600 dark:border-slate-500">
                            <div className="text-center">
                                <Layers className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                                <span className="text-slate-500 text-sm font-medium">Visual Page Selection Engine</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: Separate PDF Pages Without Losing Quality */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">Separate PDF Pages Without Losing Quality</h2>
                <p className="text-slate-600 mb-6 dark:text-gray-300">
                    With UsePDF, you can <strong>split pdf without losing quality</strong>. We preserve your document's resolution and formatting.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-4 bg-slate-50 rounded-xl dark:bg-slate-700/50">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 dark:bg-blue-900/30">
                            <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">Crisp Text & Fonts</h3>
                        <p className="text-sm text-slate-600 dark:text-gray-400">Vector text remains sharp at any zoom level.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl dark:bg-slate-700/50">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 dark:bg-purple-900/30">
                            <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">Original Images</h3>
                        <p className="text-sm text-slate-600 dark:text-gray-400">High-res images extracted without re-compression.</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl dark:bg-slate-700/50">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-4 dark:bg-green-900/30">
                            <Download className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">Metadata Retention</h3>
                        <p className="text-sm text-slate-600 dark:text-gray-400">Properties and layouts are maintained.</p>
                    </div>
                </div>
            </section>

            {/* H2: When Should You Use a PDF Splitter? */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">When Should You Use a PDF Splitter?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "Remove Unwanted Pages", desc: "Remove blank pages or cover sheets." },
                        { title: "Share Selected Pages", desc: "Send only relevant chapters or invoices." },
                        { title: "Reduce File Size", desc: "Break large PDFs into smaller chunks." },
                        { title: "Submit Partial Documents", desc: "Upload only required forms." }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-orange-50 rounded-xl dark:bg-orange-900/20">
                            <Scissors className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="text-slate-600 text-sm dark:text-gray-300">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 dark:text-white">
                    <HelpCircle className="w-6 h-6 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-5 hover:bg-slate-50 transition-colors dark:bg-slate-700/50 dark:hover:bg-slate-700">
                            <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">{faq.name}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed dark:text-gray-300">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trusted By / Conversion Block */}
            <section className="bg-green-50 rounded-2xl p-6 text-center border border-green-100 dark:bg-green-900/20 dark:border-green-800">
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="font-bold text-slate-900 dark:text-white">100% Secure</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-gray-300">
                    Files are processed directly in your browser. No sensitive data leaves your device.
                </p>
            </section>

            {/* Conclusion / CTA */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Start Splitting PDF Files Now</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Ready to organize your documents? Use our <strong>pdf page splitter</strong> to clean up your files today.
                    Free, secure, and instant.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                    Split PDF Online Free
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center dark:text-white">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600">
                        Merge PDF Files
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600">
                        Compress PDF Online
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600">
                        Convert PDF to Word
                    </Link>
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600">
                        Rotate PDF Pages
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <SplitPdfClient seoContent={seoContent} />
    );
}
