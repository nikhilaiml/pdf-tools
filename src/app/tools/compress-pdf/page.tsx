/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import CompressPdfClient from './CompressPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Minimize2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF Online Free – Reduce PDF File Size Instantly',
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
        title: 'Compress PDF Online Free – Reduce PDF File Size Instantly',
        description: 'Compress PDF online free. Reduce file size for email & forms. No signup, no watermark. Fast & secure.',
        url: 'https://www.usepdf.in/tools/compress-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Compress PDF Online Free – Reduce File Size Instantly',
        description: 'Compress PDF online free. No signup, no watermark. Secure PDF compressor tool.',
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
            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Need to <strong>compress PDF online free</strong>? Whether you're sending email attachments,
                    uploading documents to forms, or saving storage space—our <strong>pdf compressor tool</strong> makes
                    it effortless. No signup. No watermark. Just instant file size reduction.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                    Trusted by students, professionals, and businesses worldwide.
                </p>
            </section>

            {/* What is Compress PDF Tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Compress PDF Tool?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>compress PDF tool</strong> reduces the file size of your PDF documents while maintaining
                    readable quality. Large PDFs can be difficult to email, upload, or share—compression solves this problem.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Our <strong>pdf size reducer</strong> works by optimizing images, fonts, and document structure
                    within your PDF. The result is a smaller file that's easier to handle and faster to transfer.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Online compression tools are preferred because they require no software installation, work on any device,
                    and provide instant results. Simply upload, compress, and download—all in your browser.
                </p>
            </section>

            {/* Why Compress PDF */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Do People Compress PDF Files?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Upload PDFs to websites with size limits",
                        "Send PDFs via email without bouncing",
                        "Save storage space on devices",
                        "Faster uploads and downloads",
                        "Share files easily on messaging platforms",
                        "Meet form submission requirements"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* How to Compress - Steps */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Compress PDF Online Free</h2>
                <p className="text-slate-600 mb-6">
                    Follow these simple steps to <strong>reduce pdf file size online</strong> in seconds:
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF Compress PDF Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free Forever", desc: "No hidden costs or premium limits" },
                        { icon: <Minimize2 className="w-6 h-6 text-blue-500" />, title: "Smart Compression", desc: "High reduction with minimal quality loss" },
                        { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "Large File Support", desc: "Compress PDFs of any size" },
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases for Compressing PDFs</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Email Attachments", desc: "Most email providers have attachment size limits (10-25MB). Compress your PDFs to send them without issues." },
                        { title: "Online Form Submissions", desc: "Many websites and portals have file size restrictions. Reduce your PDF to meet upload requirements easily." },
                        { title: "Students Sharing Assignments", desc: "Compress large assignment PDFs before submitting through college portals or sharing with classmates." },
                        { title: "Business Reports & Invoices", desc: "Reduce file sizes for faster sharing with clients and colleagues. Store more documents without filling up storage." },
                        { title: "Faster Document Uploads", desc: "Compressed PDFs upload faster, saving time especially on slower internet connections." }
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
                    Is It Safe to Compress PDF Online?
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Compressed PDF vs Original PDF – Quick Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-semibold text-slate-900 border-b">Feature</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Original PDF</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Compressed PDF</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b">
                                <td className="p-4 font-medium">File Size</td>
                                <td className="p-4">Large (can be 10MB+)</td>
                                <td className="p-4">Reduced (typically 50-80% smaller)</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Upload Speed</td>
                                <td className="p-4">Slower uploads</td>
                                <td className="p-4">Much faster uploads</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-medium">Sharing Convenience</td>
                                <td className="p-4">May exceed email limits</td>
                                <td className="p-4">Easy to share anywhere</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Visual Quality</td>
                                <td className="p-4">Maximum quality</td>
                                <td className="p-4">Optimized (minimal visible difference)</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Best Use Case</td>
                                <td className="p-4">Print & archival</td>
                                <td className="p-4">Email, forms & sharing</td>
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose UsePDF Compress PDF Tool?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "No Annoying Ads", desc: "Clean interface without distracting advertisements" },
                        { title: "No Forced Registration", desc: "Start compressing immediately without creating accounts" },
                        { title: "Maximum Compression", desc: "Optimized algorithms for best size reduction" },
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
                <h2 className="text-2xl font-bold mb-4">Ready to Compress Your PDF?</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Join thousands of users worldwide who trust UsePDF for fast, free, and secure PDF compression.
                    Reduce your file size in seconds and share documents effortlessly.
                </p>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                    Compress PDF Now – It's Free
                    <ArrowRight className="w-5 h-5" />
                </button>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF Files Online
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Split PDF Pages Online
                    </Link>
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert PDF to JPG Online
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert PDF to Word Online
                    </Link>
                    <Link href="/tools/jpg-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert JPG to PDF Online
                    </Link>
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Rotate PDF Pages Online
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <CompressPdfClient seoContent={seoContent} />
    );
}
