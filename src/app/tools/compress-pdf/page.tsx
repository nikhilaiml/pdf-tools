/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import CompressPdfClient from './CompressPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Minimize2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF Online Free – Reduce PDF File Size Without Losing Quality | UsePDF',
    description: 'Compress PDF online free. Reduce PDF file size for email, forms & sharing. No signup, no watermark. Fast, secure PDF compressor tool.',
    keywords: [
        'compress pdf online free',
        'compress pdf online',
        'reduce pdf size',
        'pdf size reducer',
        'compress pdf without watermark',
        'compress pdf no signup',
        'reduce pdf file size online',
        'shrink pdf file',
        'pdf compressor tool',
        'compress large pdf files',
        'reduce pdf size for email',
        'online pdf compressor'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/compress-pdf',
    },
    openGraph: {
        title: 'Compress PDF Online Free – Reduce PDF File Size Without Losing Quality',
        description: 'Compress PDF online free. Reduce file size for email & forms. No signup, no watermark. Fast & secure.',
        url: 'https://www.usepdf.in/tools/compress-pdf',
        type: 'website',
        siteName: 'UsePDF',
        images: ['/og-image.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Compress PDF Online Free – Reduce File Size Instantly',
        description: 'Compress PDF online free. No signup, no watermark. Secure PDF compressor tool.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function CompressPdfPage() {
    // FAQs
    const faqs = [
        {
            name: "Is Compress PDF online free?",
            acceptedAnswer: {
                text: "Yes, our compress PDF online free tool is 100% free forever. There are no hidden charges, subscriptions, or limits. Reduce PDF file size without paying anything."
            }
        },
        {
            name: "Will compression reduce PDF quality?",
            acceptedAnswer: {
                text: "Our tool uses smart compression that minimizes file size while maintaining visual clarity. For most documents, the quality difference is imperceptible. Perfect for sharing and uploads."
            }
        },
        {
            name: "Is signup or registration required?",
            acceptedAnswer: {
                text: "No signup required. Simply upload your PDF, compress it, and download instantly. We believe in compress pdf no signup approach for maximum convenience and privacy."
            }
        },
        {
            name: "Does this tool work on mobile devices?",
            acceptedAnswer: {
                text: "Absolutely! Our online pdf compressor works perfectly on Android phones, iPhones, tablets, and laptops. No app installation needed—works directly in your browser."
            }
        },
        {
            name: "Can I compress large PDF files?",
            acceptedAnswer: {
                text: "Yes, our tool handles compress large pdf files efficiently. You can reduce the size of documents with multiple pages and images. Processing may take a few extra seconds for very large files."
            }
        },
        {
            name: "Is my PDF data safe when compressing online?",
            acceptedAnswer: {
                text: "Your security is our priority. We use SSL encryption for all transfers. Files are processed securely and automatically deleted from our servers within one hour."
            }
        },
        {
            name: "Can I use compressed PDFs for email or forms?",
            acceptedAnswer: {
                text: "Yes! Compressed PDFs are perfect for email attachments with size limits and online form submissions. Our tool helps you reduce pdf size for email quickly and efficiently."
            }
        }
    ];

    // How-To Steps
    const howToSteps = [
        {
            name: "Upload Your PDF File",
            text: "Click the upload button or drag and drop your PDF document. Our pdf compressor tool accepts files of any size."
        },
        {
            name: "Automatic Compression",
            text: "Our tool automatically applies smart compression to shrink pdf file size while maintaining quality. No manual settings needed."
        },
        {
            name: "Download Compressed PDF",
            text: "Click download to get your reduced-size PDF. The result is compress pdf without watermark and ready for immediate use."
        }
    ];

    // JSON-LD Schema - SoftwareApplication + HowTo + FAQPage
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Compress PDF Online Free",
                "description": "Compress PDF online free. Reduce PDF file size for email, forms & sharing without watermark or signup.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/compress-pdf",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Compress PDF Online Free",
                "description": "Step-by-step guide to compress pdf online and reduce file size without watermark or signup.",
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
                        "name": "Compress PDF",
                        "item": "https://www.usepdf.in/tools/compress-pdf"
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
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Compress PDF Online Free Without Losing Quality</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
                    <p>
                        If your PDF file is too large to upload, email, or share, you can easily <strong>compress PDF online free</strong> using our secure browser-based tool.
                        Large PDF files are common when documents contain high-resolution images, scanned pages, or embedded fonts.
                        Our PDF compressor helps you <strong>reduce PDF file size online</strong> instantly while maintaining readability and quality.
                    </p>
                    <p>
                        Unlike many online PDF tools, UsePDF allows you to compress PDF files:
                    </p>
                    <ul className="list-none pl-0 space-y-2 mt-4 grid sm:grid-cols-2 gap-4">
                        <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>Without signup</span>
                        </li>
                        <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>Without watermark</span>
                        </li>
                        <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>Without uploading to external servers</span>
                        </li>
                        <li className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span>100% secure browser processing</span>
                        </li>
                    </ul>
                    <p className="mt-4">
                        Whether you need to send documents by email, upload to a website, or share on messaging apps, our <strong>PDF size reducer online</strong> makes the process simple and fast.
                    </p>
                </div>
            </section>

            {/* How to Reduce PDF File Size Online */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">How to Reduce PDF File Size Online</h2>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl dark:bg-slate-700/50">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-1 dark:text-white">Upload your PDF file</h3>
                            <p className="text-slate-600 text-sm dark:text-gray-300">Select files from your computer or drag and drop into the box.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl dark:bg-slate-700/50">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-1 dark:text-white">Automatic Compression</h3>
                            <p className="text-slate-600 text-sm dark:text-gray-300">Our tool automatically analyzes and compresses your PDF.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl dark:bg-slate-700/50">
                        <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-1 dark:text-white">Download the reduced-size file instantly</h3>
                            <p className="text-slate-600 text-sm dark:text-gray-300">Save the optimized PDF to your device immediately.</p>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-slate-500 mt-6 text-center dark:text-gray-400">
                    The entire process happens securely in your browser, ensuring privacy and fast processing.
                </p>
            </section>

            {/* Why Compress a PDF File? */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 dark:from-slate-800 dark:to-slate-800 dark:border dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">Why Compress a PDF File?</h2>
                <p className="text-slate-600 mb-6 dark:text-gray-300">
                    Many platforms have file size limits. Compressing PDFs helps in:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        "Sending email attachments under 25MB",
                        "Uploading documents to government portals",
                        "Submitting assignments online",
                        "Sharing PDFs on WhatsApp or Telegram",
                        "Saving storage space"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm dark:bg-slate-700">
                            <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-gray-200">{item}</span>
                        </div>
                    ))}
                </div>
                <p className="text-slate-600 mt-6 dark:text-gray-300">
                    If your PDF contains scanned images, compression can significantly reduce file size without affecting text clarity.
                </p>
            </section>

            {/* Does Compressing PDF Reduce Quality? */}
            <section className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 dark:text-white">Does Compressing PDF Reduce Quality?</h2>
                <p className="text-slate-600 dark:text-gray-300">
                    This is one of the most common questions. Modern PDF compression techniques optimize images and remove unnecessary metadata while preserving essential document clarity.
                    Our tool balances quality and file size, ensuring your document remains readable and professional.
                </p>
                <p className="text-slate-600 dark:text-gray-300">
                    If you need maximum quality retention, you can use moderate compression instead of aggressive reduction.
                </p>
            </section>

            {/* Compress PDF Without Losing Quality */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">Compress PDF Without Losing Quality</h2>
                <p className="text-slate-600 mb-6 dark:text-gray-300">
                    Our PDF compressor is designed to:
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-indigo-50 rounded-lg dark:bg-indigo-900/30">
                            <Zap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">Optimize embedded images</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400">Smart resizing and re-encoding.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-red-50 rounded-lg dark:bg-red-900/30">
                            <Minimize2 className="w-6 h-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">Remove redundant data</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400">Cleans up unused objects.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-green-50 rounded-lg dark:bg-green-900/30">
                            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">Maintain text sharpness</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400">Fonts remain crisp and clear.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-blue-50 rounded-lg dark:bg-blue-900/30">
                            <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">Preserve document structure</h3>
                            <p className="text-sm text-slate-600 dark:text-gray-400">Layouts stay intact.</p>
                        </div>
                    </div>
                </div>
                <p className="mt-6 text-slate-600 dark:text-gray-300">
                    This makes it ideal for students, professionals, and businesses who need smaller files without compromising usability.
                </p>
            </section>

            {/* When Should You Use a PDF Size Reducer? */}
            <section className="bg-slate-50 rounded-2xl p-8 dark:bg-slate-800/50">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">When Should You Use a PDF Size Reducer?</h2>
                <p className="text-slate-600 mb-4 dark:text-gray-300">You should reduce PDF size when:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6 dark:text-gray-300">
                    <li>Your file exceeds upload limits</li>
                    <li>Your PDF is slow to load</li>
                    <li>Email attachment is rejected</li>
                    <li>Government or university portals have strict limits</li>
                </ul>
                <p className="font-medium text-indigo-600 dark:text-indigo-400">
                    Our free PDF compressor online helps you instantly solve these problems.
                </p>
            </section>

            {/* UsePDF vs Other PDF Compressors */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 dark:text-white">UsePDF vs Other PDF Compressors</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50 p-6 rounded-xl dark:bg-red-900/10">
                        <h3 className="font-bold text-red-700 mb-4 dark:text-red-400">Other PDF Tools</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-red-700 dark:text-red-300">
                                <span className="text-lg">✖</span> Signup required
                            </li>
                            <li className="flex items-center gap-2 text-red-700 dark:text-red-300">
                                <span className="text-lg">✖</span> Watermark on free version
                            </li>
                            <li className="flex items-center gap-2 text-red-700 dark:text-red-300">
                                <span className="text-lg">✖</span> Uploading files to servers
                            </li>
                            <li className="flex items-center gap-2 text-red-700 dark:text-red-300">
                                <span className="text-lg">✖</span> Limited free usage
                            </li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl dark:bg-green-900/10">
                        <h3 className="font-bold text-green-700 mb-4 dark:text-green-400">UsePDF</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                <CheckCircle className="w-5 h-5" /> No signup
                            </li>
                            <li className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                <CheckCircle className="w-5 h-5" /> No watermark
                            </li>
                            <li className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                <CheckCircle className="w-5 h-5" /> Secure in-browser compression
                            </li>
                            <li className="flex items-center gap-2 text-green-700 dark:text-green-300">
                                <CheckCircle className="w-5 h-5" /> Completely free usage
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="mt-6 text-slate-600 text-center dark:text-gray-300">
                    This makes it a reliable and privacy-friendly alternative to other PDF compression tools.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 dark:text-white">
                    <HelpCircle className="w-6 h-6 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">Q1: How do I compress PDF online for free?</h3>
                        <p className="text-slate-600 text-sm leading-relaxed dark:text-gray-300">
                            Upload your file, click compress, and download the reduced file instantly using our free online PDF compressor.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">Q2: Can I reduce PDF file size without losing quality?</h3>
                        <p className="text-slate-600 text-sm leading-relaxed dark:text-gray-300">
                            Yes. Our tool optimizes images and removes unnecessary data while maintaining document clarity.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">Q3: What is the best PDF size reducer online?</h3>
                        <p className="text-slate-600 text-sm leading-relaxed dark:text-gray-300">
                            The best PDF compressor should be free, secure, and watermark-free. UsePDF offers all these features.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-2 dark:text-white">Q4: Is it safe to compress PDF online?</h3>
                        <p className="text-slate-600 text-sm leading-relaxed dark:text-gray-300">
                            Yes. Files are processed directly in your browser and are not uploaded to external servers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8 dark:border-slate-700">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center dark:text-white">Explore More PDF Tools</h2>
                <p className="text-center text-slate-600 mb-6 dark:text-gray-300">
                    You can also use our <Link href="/tools/merge-pdf" className="text-indigo-600 hover:underline dark:text-indigo-400">Merge PDF</Link> tool to combine documents before compression.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600">
                        Merge PDF
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600">
                        Split PDF
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600">
                        PDF to Word
                    </Link>
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm dark:bg-slate-700 dark:text-indigo-400 dark:hover:bg-slate-600">
                        Rotate PDF
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <CompressPdfClient seoContent={seoContent} />
    );
}
