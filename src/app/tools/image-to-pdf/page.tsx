/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageToPdfClient from './ImageToPdfClient';
import { HelpCircle, CheckCircle, Smartphone, Zap, Shield, Globe, ArrowRight, Minimize2, Image as ImageIcon } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Image to PDF Online – Convert JPG & PNG to PDF Free | UsePDF',
    description: 'Convert image to PDF online free. Supports JPG, PNG and works on all devices. Fast, secure, and no installation required. Convert images to PDF in seconds.',
    keywords: [
        'image to pdf online',
        'image to pdf converter online',
        'convert image to pdf',
        'jpg to pdf',
        'png to pdf',
        'image to pdf 100 kb',
        'image to pdf 200 kb',
        'free pdf tools'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/image-to-pdf',
    },
    openGraph: {
        title: 'Image to PDF – Convert Multiple Images to PDF Free | UsePDF',
        description: 'Convert Images to PDF online. Supports JPG, PNG, WebP, and more. Merge multiple images into a single PDF file securely and easily.',
        url: 'https://www.usepdf.in/tools/image-to-pdf',
        type: 'website',
    }
};

export default function ImageToPdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF Image to PDF Converter",
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
                        "name": "Is image to PDF online free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Image to PDF converter is 100% free with no hidden charges or limits."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it safe to convert images to PDF?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. UsePDF uses SSL encryption for secure transfer, and all files are automatically deleted from our servers after one hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I convert JPG and PNG to PDF?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our tool supports both JPG and PNG formats, calculating the best layout for your PDF automatically."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need to install any software?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No installation is required. UsePDF works entirely in your browser on desktop, tablet, or mobile."
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

            {/* Features Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Fast & Secure Image to PDF Conversion</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        "Free image to PDF online",
                        "JPG and PNG supported",
                        "No watermark",
                        "No login required",
                        "Works on mobile and desktop",
                        "Secure conversion (files auto-deleted)"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-4 h-4" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert Image to PDF</h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {[
                        { step: 1, title: "Upload Images", text: "Select your JPG or PNG files." },
                        { step: 2, title: "Arrange", text: "Drag and drop to reorder images." },
                        { step: 3, title: "Convert", text: "Click 'Convert to PDF'." },
                        { step: 4, title: "Download", text: "Save your new PDF file." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">{item.step}</div>
                            <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Use Cases */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Use Cases</h2>
                <div className="prose prose-slate max-w-none text-slate-600 grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Personal & Professional</h3>
                        <p>
                            Safely <strong>convert photos to PDF</strong> for archiving, or create professional documents from scanned images. Perfect for students submitting assignments or professionals compiling receipts.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Sharing & Storage</h3>
                        <p>
                            Use our <strong>image to pdf converter online</strong> to combine multiple images into a single file for easier email attachment. You can also use it to <strong>reduce image size into PDF format</strong> (e.g., getting an <strong>image to pdf 100 kb</strong> or <strong>200 kb</strong> range output effectively).
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose UsePDF */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose UsePDF?</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                        <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">Faster Processing</h3>
                        <p className="text-xs text-slate-600">Faster than other online converters.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                        <Smartphone className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">Clean UI</h3>
                        <p className="text-xs text-slate-600">Distraction-free and easy to use.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                        <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">Privacy Focused</h3>
                        <p className="text-xs text-slate-600">Your data is yours alone.</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow-sm text-center">
                        <Globe className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">100% Web Based</h3>
                        <p className="text-xs text-slate-600">No software installation needed.</p>
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
                        { q: "Is image to PDF online free?", a: "Yes, our Image to PDF online tool is free. You can convert JPG, PNG, and other image formats without any cost." },
                        { q: "Is it safe to convert images to PDF?", a: "Yes, it is completely safe. We use advanced encryption and auto-delete files after one hour." },
                        { q: "Can I convert JPG and PNG to PDF?", a: "Definitely. Our tool supports both JPG and PNG formats seamlessly." },
                        { q: "Do I need to install any software?", a: "No, this tool works entirely in your browser. No downloads or installations are required." }
                    ].map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Internal Links / Related Tools */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Related Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link href="/tools/pdf-to-jpg" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-pink-100 transition-colors">
                                <ImageIcon className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">PDF to JPG</h3>
                            <p className="text-slate-500 text-sm mb-4">Convert PDF pages back to images.</p>
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
                            <p className="text-slate-500 text-sm mb-4">Reduce PDF size after conversion.</p>
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
                            <p className="text-slate-500 text-sm mb-4">Explore all free PDF tools.</p>
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
        <ImageToPdfClient seoContent={seoContent} />
    );
}
