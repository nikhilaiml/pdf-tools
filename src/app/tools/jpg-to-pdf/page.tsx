/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import JpgToPdfClient from './JpgToPdfClient';
import { HelpCircle, CheckCircle, Smartphone, Zap, Shield, Globe, ArrowRight, Image as ImageIcon, Minimize2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'JPG to PDF Online – Convert JPG Images to PDF Free | UsePDF',
    description: 'Convert JPG to PDF online free. High-quality image to PDF conversion. Works on mobile & desktop. Fast, secure, and no installation required.',
    keywords: [
        'jpg to pdf online',
        'jpg to pdf converter online',
        'convert jpg to pdf',
        'jpg image to pdf',
        'jpg to pdf free',
        'convert jpg files to pdf',
        'image to pdf'
    ],
    alternates: {
        canonical: 'https://usepdf.in/tools/jpg-to-pdf',
    },
    openGraph: {
        title: 'JPG to PDF Online – Convert JPG Images to PDF Free | UsePDF',
        description: 'Convert JPG to PDF online free. High-quality image to PDF conversion. Fast, secure, and no installation required.',
        url: 'https://usepdf.in/tools/jpg-to-pdf',
        type: 'website',
    }
};

export default function JpgToPdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF JPG to PDF Converter",
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
                        "name": "Is JPG to PDF online free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our JPG to PDF converter is 100% free. You can convert limitless JPG images into PDF format without any cost."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it safe to convert JPG images to PDF?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your safety is our priority. All files are encrypted during transfer and automatically deleted from our servers after one hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I convert multiple JPGs into one PDF?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, you can upload multiple JPG images, arrange them in your preferred order, and merge them into a single PDF document."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to install any software?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, UsePDF works entirely in the browser. You can convert JPG to PDF on any device (Windows, Mac, iOS, Android) without installing apps."
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
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">JPG to PDF Online – Convert JPG Images to PDF Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Instantly <strong>convert JPG to PDF online</strong> with UsePDF. Our tool creates high-quality PDFs from your images without any signup or software installation. Securely convert your photos, scans, and graphics into a single, shareable document in seconds.
                </p>
            </section>

            {/* Features Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Best Free JPG to PDF Converter</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        "Free JPG to PDF online",
                        "High-quality conversion",
                        "No watermark",
                        "No login required",
                        "Works on mobile & desktop",
                        "Secure & privacy-focused"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert JPG to PDF</h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {[
                        { step: 1, title: "Upload JPGs", text: "Select images from your device." },
                        { step: 2, title: "Arrange", text: "Drag and drop to reorder images." },
                        { step: 3, title: "Convert", text: "Click to generate your PDF." },
                        { step: 4, title: "Download", text: "Save the PDF file instantly." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use UsePDF?</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Zap className="w-10 h-10 text-yellow-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Suprafast Conversion</h3>
                            <p className="text-slate-600">Our engine is built for speed. Convert dozens of images to PDF faster than other tools.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Smartphone className="w-10 h-10 text-blue-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Clean Interface</h3>
                            <p className="text-slate-600">No popups, no clutter. Just a simple, effective interface that helps you get the job done.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <CheckCircle className="w-10 h-10 text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Zero Quality Loss</h3>
                            <p className="text-slate-600">We optimize the PDF creation process to maintain the sharpness and color accuracy of your original JPGs.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex-shrink-0">
                            <Globe className="w-10 h-10 text-purple-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">100% Browser-Based</h3>
                            <p className="text-slate-600">Process files securely in your browser. No need to download software or upload files to a third-party app.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-gradient-to-br from-indigo-50 to-orange-50 rounded-2xl p-8 border border-indigo-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Photo Albums</h3>
                        <p className="text-slate-600">Compile your memories into a digital booklet. <strong>Convert photos to PDF</strong> to easily share holiday pictures or event snapshots with friends and family.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Document Archiving</h3>
                        <p className="text-slate-600">Have photos of documents? <strong>Create PDF documents from JPG images</strong> to organize your receipts, contracts, or ID cards into a standard digital format.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Printing</h3>
                        <p className="text-slate-600">Printers often prefer PDF over image files. Use our tool for <strong>JPG to PDF for email or printing</strong> to ensure your layout stays consistent on paper.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Project Portfolios</h3>
                        <p className="text-slate-600">Designers and artists can <strong>combine multiple JPG images into one PDF</strong> portfolio. It is the professional way to showcase your work to clients.</p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {[
                        { q: "Is JPG to PDF online free?", a: "Yes, our JPG to PDF converter is 100% free. You can convert limitless JPG images into PDF format without any cost." },
                        { q: "Is it safe to convert JPG images to PDF?", a: "Your safety is our priority. All files are encrypted during transfer and automatically deleted from our servers after one hour." },
                        { q: "Can I convert multiple JPGs into one PDF?", a: "Yes, you can upload multiple JPG images, arrange them in your preferred order, and merge them into a single PDF document." },
                        { q: "Do I need to install any software?", a: "No, UsePDF works entirely in the browser. You can convert JPG to PDF on any device (Windows, Mac, iOS, Android) without installing apps." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">More Free PDF Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link href="/tools/image-to-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-100 transition-colors">
                                <ImageIcon className="w-6 h-6 text-orange-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Image to PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Generalized image to PDF tool.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/tools/compress-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-100 transition-colors">
                                <Minimize2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Compress PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Shrink PDF size after creation.</p>
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
                            <p className="text-slate-500 text-sm mb-4">Access all 40+ PDF tools.</p>
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
        <JpgToPdfClient seoContent={seoContent} />
    );
}
