import type { Metadata } from 'next';
import RotatePdfClient from './RotatePdfClient';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, RotateCw } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Rotate PDF Online – Rotate PDF Pages Free',
    description: 'Rotate PDF pages online for free. Fix sideways or upside-down files easily. No signup, no watermark, and secure browser-based processing.',
    alternates: {
        canonical: 'https://usepdf.in/tools/rotate-pdf',
    }
};

export default function RotatePdfPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is rotate PDF online free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Rotate PDF tool is 100% free. You can rotate individual pages or entire documents without any cost or hidden fees."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to rotate PDF files?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Your files are processed securely in your browser and are automatically deleted from our servers after one hour to ensure your privacy."
                }
            },
            {
                "@type": "Question",
                "name": "Can I rotate specific PDF pages only?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can select specific pages to rotate individually (90°, 180°, or 270°) or apply rotation to the entire document at once."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to install any software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No installation is required. UsePDF works entirely in your web browser, compatible with Windows, Mac, Linux, and mobile devices."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <RotatePdfClient />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* H1 & Intro */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Rotate PDF Online – Rotate PDF Pages Free
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Need to fix a PDF file with upside-down or sideways pages? <strong>Rotate PDF pages online</strong> instantly with UsePDF.
                            Our free tool allows you to correct the orientation of specific pages or the entire document in seconds.
                            There is <strong>no signup, no watermark</strong>, and no software installation required. Experience fast, secure, and 100% browser-based PDF rotation.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            { title: "Rotate PDF Online Free", desc: "Completely free tool to rotate PDF files without any limits or hidden costs.", icon: Globe },
                            { title: "No Watermark", desc: "Download your rotated PDF documents clean and professional, with no branding added.", icon: Shield },
                            { title: "Secure & Private", desc: "Your files are encrypted and automatically deleted from our servers after an hour.", icon: Shield },
                            { title: "No Login Required", desc: "Start rotating PDF pages instantly. No account creation or email needed.", icon: Zap },
                            { title: "Works on All Devices", desc: "Compatible with mobile, tablet, and desktop browsers (Chrome, Safari, Edge).", icon: Smartphone },
                            { title: "Fast Processing", desc: "Rotate single or multiple pages in seconds using our optimized cloud tool.", icon: RotateCw },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* How To Rotate */}
                    <div className="mb-20 bg-indigo-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Rotate PDF Online</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: 1, title: "Upload PDF", desc: "Select and upload your PDF file from your device." },
                                { step: 2, title: "Select Pages", desc: "Choose specific pages or select all to rotate." },
                                { step: 3, title: "Choose Angle", desc: "Rotate pages 90°, 180°, or 270° clockwise." },
                                { step: 4, title: "Download", desc: "Click 'Download' to save your permanently rotated PDF." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-indigo-100 relative">
                                    <span className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                        {item.step}
                                    </span>
                                    <h3 className="font-bold text-slate-900 mb-2 mt-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Use Cases & Why Use */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF?</h2>
                            <ul className="space-y-4">
                                {[
                                    "Faster than other online rotate PDF tools",
                                    "Simple and clean interface with no ads",
                                    "No quality loss during rotation",
                                    "100% browser-based processing (safe & secure)"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Use Cases</h2>
                            <ul className="space-y-4">
                                {[
                                    "Fix scanned PDF documents that are upside down",
                                    "Rotate PDF pages to the correct orientation for printing",
                                    "Correct sideways documents from mobile scanners",
                                    "Prepare clean PDF files for professional submission"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {jsonLd.mainEntity.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                    <h3 className="font-bold text-slate-900 mb-3">{faq.name}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Internal Links */}
                    <div className="border-t border-slate-200 pt-10 text-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Explore More Free PDF Tools</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                                Compress PDF
                            </Link>
                            <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                                Merge PDF
                            </Link>
                            <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                                PDF to JPG
                            </Link>
                            <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                                Free PDF Tools Online
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
