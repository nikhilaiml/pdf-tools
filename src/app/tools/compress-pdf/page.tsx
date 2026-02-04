/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import CompressPdfClient from './CompressPdfClient';
import { HelpCircle, CheckCircle, Zap, Shield, Globe, Smartphone, ArrowRight, Minimize2, Image as ImageIcon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF Online – Reduce PDF File Size Free | UsePDF',
    description: 'Compress PDF online free. Reduce PDF file size without losing quality. Works on mobile & desktop. Fast, secure, and no installation required.',
    keywords: [
        'compress pdf online',
        'compress pdf online free',
        'reduce pdf file size',
        'pdf compressor online',
        'compress pdf without losing quality',
        'compress pdf 100 kb',
        'compress pdf 200 kb',
        'online pdf tools'
    ],
    alternates: {
        canonical: 'https://usepdf.in/tools/compress-pdf',
    },
    openGraph: {
        title: 'Compress PDF Online – Reduce PDF File Size Free | UsePDF',
        description: 'Compress PDF online free. Reduce PDF file size without losing quality. Works on mobile & desktop. Fast, secure, and no installation required.',
        url: 'https://usepdf.in/tools/compress-pdf',
        type: 'website',
    }
};

export default function CompressPdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF Compress Tool",
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
                        "name": "Is compress PDF online free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our PDF compressor is completely free to use. You can reduce PDF file sizes without any payment or subscription."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Will compression reduce PDF quality?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our smart compression algorithm optimizes file size while maintaining high visual quality, ensuring your documents remain sharp and professional."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it safe to compress PDF files?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, security is our priority. Your files are encrypted during transfer and automatically deleted from our servers after one hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to install any software?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, UsePDF works entirely in your web browser. You can compress PDF online from any device without installing software."
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
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Compress PDF Online – Reduce PDF File Size Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Easily <strong>compress PDF online</strong> with UsePDF. Our advanced tool allows you to <strong>reduce PDF file size</strong> significantly without losing quality. There is no signup, registration, or installation required. Enjoy fast, secure, and reliable PDF compression directly in your browser.
                </p>
            </section>

            {/* Features Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Powerful Features for Your PDF Needs</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        "Free PDF compressor online",
                        "Compress PDF without watermark",
                        "No login required",
                        "High-quality compression",
                        "Works on mobile and desktop",
                        "Secure & privacy-focused"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Compress PDF</h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {[
                        { step: 1, title: "Upload PDF File", text: "Select your document from your device." },
                        { step: 2, title: "Choose Level", text: "Select your desired compression strength." },
                        { step: 3, title: "Compress PDF", text: "Click to start the optimization process." },
                        { step: 4, title: "Download", text: "Save your smaller PDF instantly." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use UsePDF to Compress PDF?</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Zap className="w-10 h-10 text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Faster Processing</h3>
                            <p className="text-slate-600">Our engine is optimized for speed, making it faster than many other online PDF compressors.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Smartphone className="w-10 h-10 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Simple and Clean UI</h3>
                            <p className="text-slate-600">We prioritize user experience with a distraction-free interface that anyone can use.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">No Quality Loss</h3>
                            <p className="text-slate-600">We balance size reduction with visual fidelity, ensuring your text and images stay crisp.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Globe className="w-10 h-10 text-purple-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">100% Browser-Based</h3>
                            <p className="text-slate-600">Process files directly in your browser. No risky software downloads or installations needed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Email Attachments</h3>
                        <p className="text-slate-600">Most email services limit attachment sizes (often 25MB). Use our tool to <strong>reduce PDF size for email</strong> and ensure your message gets delivered without bouncing.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Messaging Apps</h3>
                        <p className="text-slate-600">Sharing files on WhatsApp or Messenger? <strong>Compress PDF 100 kb</strong> or less to send them quickly over mobile data and save bandwidth for you and the recipient.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Web Optimization</h3>
                        <p className="text-slate-600">Webmasters can <strong>optimize PDF files for websites</strong> to improve page load speeds. Smaller PDFs mean happier visitors and better SEO performance for your site.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Large Documents</h3>
                        <p className="text-slate-600">Whether it is a thesis, a report, or an ebook, you can <strong>compress large PDF documents easily</strong>. Shrink files from 50MB to under 5MB in seconds.</p>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">UsePDF vs. Typical Tools</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200">
                                <th className="p-4 font-bold text-slate-900">Feature</th>
                                <th className="p-4 font-bold text-indigo-600 bg-indigo-50 rounded-t-xl">UsePDF</th>
                                <th className="p-4 font-bold text-slate-500">Typical Compressors</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 text-slate-900 font-medium">Cost</td>
                                <td className="p-4 text-indigo-600 bg-indigo-50/50">100% Free</td>
                                <td className="p-4 text-slate-600">Often Freemium</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 text-slate-900 font-medium">Watermark</td>
                                <td className="p-4 text-indigo-600 bg-indigo-50/50">None</td>
                                <td className="p-4 text-slate-600">Sometimes Added</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="p-4 text-slate-900 font-medium">Speed</td>
                                <td className="p-4 text-indigo-600 bg-indigo-50/50">Instant</td>
                                <td className="p-4 text-slate-600">Variable / Queued</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-slate-900 font-medium">Quality</td>
                                <td className="p-4 text-indigo-600 bg-indigo-50/50 rounded-b-xl">High Fidelity</td>
                                <td className="p-4 text-slate-600">Often pixelated</td>
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
                        { q: "Is compress PDF online free?", a: "Yes, our PDF compressor is completely free to use. You can reduce PDF file sizes without any payment or subscription." },
                        { q: "Will compression reduce PDF quality?", a: "Our smart compression algorithm optimizes file size while maintaining high visual quality, ensuring your documents remain sharp and professional." },
                        { q: "Is it safe to compress PDF files?", a: "Yes, security is our priority. Your files are encrypted during transfer and automatically deleted from our servers after one hour." },
                        { q: "Do I need to install any software?", a: "No, UsePDF works entirely in your web browser. You can compress PDF online from any device without installing software." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Try Other Free PDF Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link href="/tools/pdf-to-jpg" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-pink-100 transition-colors">
                                <ImageIcon className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">PDF to JPG</h3>
                            <p className="text-slate-500 text-sm mb-4">Convert PDF pages to images.</p>
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
                            <p className="text-slate-500 text-sm mb-4">Combine images into a PDF.</p>
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
                            <p className="text-slate-500 text-sm mb-4">See all 40+ free PDF tools.</p>
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
        <CompressPdfClient seoContent={seoContent} />
    );
}
