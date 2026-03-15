 
import type { Metadata } from 'next';
import SplitPdfClient from './SplitPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Scissors, ArrowRight, FileText, Globe, Layers, Eye, Download, Copy, SplitSquareVertical } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Split PDF Online Free – Separate & Extract PDF Pages (No Signup)',
    description: 'Split PDF online free. Separate any PDF into multiple files instantly — no signup, no watermark, 100% free. Extract pages securely.',
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
        title: 'Split PDF Online Free – Separate & Extract PDF Pages Instantly',
        description: 'Split PDF online free. Separate any PDF into multiple files instantly — no signup, no watermark, 100% free. Secure browser-based processing.',
        url: 'https://www.usepdf.in/tools/split-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Split PDF Online Free – Separate & Extract Pages Instantly',
        description: 'Split PDF online free. Separate any PDF into multiple files instantly — no signup, no watermark, 100% free.',
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
            name: "Is splitting a PDF online safe?",
            acceptedAnswer: {
                text: "Yes, completely safe. UsePDF.in processes all files directly in your browser using JavaScript. Your PDF is never uploaded to any server, so your data stays with you at all times."
            }
        },
        {
            name: "What is the maximum file size I can split?",
            acceptedAnswer: {
                text: "You can split PDF files up to 100MB using our free tool. For most documents — including scanned forms, reports, and presentations — this limit is more than enough."
            }
        },
        {
            name: "Can I split a PDF on my phone?",
            acceptedAnswer: {
                text: "Yes. Our PDF splitter works on all modern mobile browsers, including Chrome and Safari on Android and iPhone. No app download or installation is needed."
            }
        },
        {
            name: "Can I extract just one page from a PDF?",
            acceptedAnswer: {
                text: "Absolutely. Enter the same number for the start and end page (e.g., 'Page 5 to Page 5') to extract a single page as a separate PDF file."
            }
        },
        {
            name: "Will the quality of my PDF change after splitting?",
            acceptedAnswer: {
                text: "No. Splitting a PDF does not affect image quality, fonts, or formatting. The extracted pages look exactly the same as in the original document."
            }
        },
        {
            name: "Can I split a password-protected PDF?",
            acceptedAnswer: {
                text: "You will need to unlock the PDF first before splitting. Use our Unlock PDF tool to remove the password, and then split the file."
            }
        }
    ];

    // How-To Steps
    const howToSteps = [
        {
            name: "Upload your PDF",
            text: "Click the 'Select PDF' button or drag and drop your file."
        },
        {
            name: "Choose how to split",
            text: "Enter the page range (e.g., pages 1–5), or split every page into a separate file."
        },
        {
            name: "Click 'Split PDF'",
            text: "Our tool processes your file instantly in your browser."
        },
        {
            name: "Download your files",
            text: "Download the split PDF files individually or as a ZIP archive."
        }
    ];

    // JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Split PDF Online Free",
                "description": "Split PDF online free. Separate any PDF into multiple files instantly — no signup, no watermark, 100% free. Secure browser-based PDF splitter tool.",
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
                "name": "How to Split a PDF Online — Step by Step",
                "description": "Step-by-step guide to split PDF online and extract pages securely.",
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
        <div className="space-y-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Introduction */}
            <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Split PDF Online Free</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                    <p className="lead text-xl">
                        <strong>Separate any PDF into multiple files instantly — no signup, no watermark, 100% free.</strong>
                    </p>
                </div>
            </section>

            {/* What is PDF Splitting? */}
            <section className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">What is PDF Splitting?</h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                        <p>
                            PDF splitting means breaking one large PDF file into two or more smaller files. For example, if you have a 50-page report and only need pages 10 to 20, you can split the PDF and extract just those pages — saving time and storage space.
                        </p>
                        <p className="mt-4">
                            Our free online PDF splitter lets you cut any PDF file by page range, extract individual pages, or divide the document into equal parts — all without installing any software.
                        </p>
                    </div>
                </div>
            </section>

            {/* When Do You Need to Split a PDF? */}
            <section className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white text-center">When Do You Need to Split a PDF?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "Extract specific pages", desc: "Pull out only the pages you need from a large document.", icon: FileText },
                        { title: "Share part of a document", desc: "Send only the relevant section of a report or contract.", icon: Copy },
                        { title: "Reduce file size", desc: "A smaller PDF is easier to email or upload.", icon: Zap },
                        { title: "Separate chapters or sections", desc: "Split a book or manual into individual chapters.", icon: SplitSquareVertical },
                        { title: "Remove unwanted pages", desc: "Cut out blank or irrelevant pages from a scanned document.", icon: Scissors },
                        { title: "Government & exam forms", desc: "Extract specific pages from Aadhaar, marksheet, or admit card PDFs.", icon: Layers }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-5 bg-indigo-50/50 rounded-xl border border-indigo-100 dark:bg-slate-800 dark:border-slate-700 hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-indigo-900/50">
                                <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Split a PDF Online — Step by Step */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">How to Split a PDF Online — Step by Step</h2>
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
                <div className="mt-6 text-center text-slate-600 dark:text-slate-400 italic">
                    The entire process takes less than 10 seconds. No account needed. No app to download.
                </div>
            </section>

            {/* Why Use UsePDF.in to Split PDFs? */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 dark:from-slate-800 dark:to-slate-800 dark:border dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">Why Use UsePDF.in to Split PDFs?</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "100% Free", desc: "No hidden charges, no subscription required.", icon: Zap },
                        { title: "No Signup", desc: "Start splitting PDFs immediately without creating an account.", icon: Smartphone },
                        { title: "Private & Secure", desc: "Files are processed in your browser. Nothing is uploaded to our servers.", icon: Lock },
                        { title: "Works on All Devices", desc: "Use on desktop, tablet, or mobile — Android and iPhone both supported.", icon: Globe },
                        { title: "No Watermark", desc: "Your split PDFs are clean and ready to use.", icon: CheckCircle },
                        { title: "Supports Large Files", desc: "Split PDF files up to 100MB for free.", icon: Layers }
                    ].map((item, i) => (
                        <div key={i} className="p-4 bg-white rounded-xl shadow-sm dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600">
                            <div className="flex items-center gap-3 mb-3">
                                <item.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                                <h3 className="font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-gray-400">{item.desc}</p>
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

            {/* Other Free PDF Tools You Might Need */}
            <section className="border-t border-slate-200 pt-10 dark:border-slate-700 mt-16">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center dark:text-white">Other Free PDF Tools You Might Need</h2>
                <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto dark:text-slate-400">After splitting your PDF, you may also find these tools useful:</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {[
                        { title: "Merge PDF", link: "/tools/merge-pdf", desc: "Combine multiple files into one" },
                        { title: "Compress PDF", link: "/tools/compress-pdf", desc: "Reduce file size" },
                        { title: "Deskew PDF", link: "/tools/deskew-pdf", desc: "Straighten scanned pages" },
                        { title: "PDF to Word", link: "/tools/pdf-to-word", desc: "Convert to editable Word" }
                    ].map((tool, i) => (
                        <Link key={i} href={tool.link} className="block p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 transition-all text-center group dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:border-slate-600">
                            <div className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-1">{tool.title}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">{tool.desc}</div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );

    return (
        <SplitPdfClient seoContent={seoContent} />
    );
}
