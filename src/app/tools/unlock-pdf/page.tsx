import type { Metadata } from 'next';
import UnlockPdfClient from './UnlockPdfClient';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, Lock, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Unlock PDF Online – Remove PDF Password Free',
    description: 'Unlock PDF files online for free. Remove password protection from PDFs securely and instantly. No signup, no installation, and 100% browser-based.',
    alternates: {
        canonical: 'https://usepdf.in/tools/unlock-pdf',
    }
};

export default function UnlockPdfPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is unlock PDF online free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Unlock PDF tool is completely free. You can remove passwords from as many PDF files as you like without any cost."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to remove PDF password?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is very safe. We process your files locally in your browser, and they are never stored on our servers for more than an hour."
                }
            },
            {
                "@type": "Question",
                "name": "Can I unlock PDF without knowing the password?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, you must know the correct password to unlock the PDF initially. This tool removes the password protection so you don't need to enter it every time."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to install any software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No software installation is required. Everything works directly in your web browser on any device."
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
            <UnlockPdfClient />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* H1 & Intro */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Unlock PDF Online – Remove PDF Password Free
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Need to open a password-protected PDF without entering the password every time? <strong>Unlock PDF online</strong> instantly with UsePDF.
                            Our free tool allows you to remove password protection from PDF files easily.
                            There is <strong>no signup, no installation</strong>, and the process is fast, secure, and purely browser-based.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {[
                            { title: "Unlock PDF Online Free", desc: "Remove restrictions from your PDF files absolutely free of charge.", icon: Globe },
                            { title: "Remove Password Securely", desc: "Safely remove passwords without exposing your sensitive data.", icon: Shield },
                            { title: "No Watermark", desc: "Get clean, unlocked PDF documents with no branding or watermarks.", icon: Shield },
                            { title: "No Login Required", desc: "Unlock PDFs instantly without creating an account or providing email.", icon: Zap },
                            { title: "Works on Mobile & Desktop", desc: "Seamlessly unlock PDFs on your smartphone, tablet, or computer.", icon: Smartphone },
                            { title: "Privacy Focused", desc: "Files are processed securely and deleted automatically to protect your privacy.", icon: Lock },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                                <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* How To Unlock */}
                    <div className="mb-20 bg-indigo-50 rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Unlock PDF</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: 1, title: "Upload PDF", desc: "Upload your password-protected PDF file." },
                                { step: 2, title: "Enter Password", desc: "Enter the current PDF password to verify ownership." },
                                { step: 3, title: "Unlock File", desc: "Click 'Unlock PDF' to remove the password protection." },
                                { step: 4, title: "Download", desc: "Download your new unlocked PDF file instantly." }
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
                                    "Faster than other PDF password remover tools",
                                    "Simple and clean interface with no complicated steps",
                                    "No quality loss in the unlocked document",
                                    "100% browser-based processing for maximum security"
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
                                    "Remove password from PDF for easier printing",
                                    "Unlock PDF for editing contents or sharing with others",
                                    "Access secured bank statements or bills more easily",
                                    "Remove restrictions from your own personal PDF archives"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Important Note */}
                    <div className="mb-20 bg-amber-50 border border-amber-200 rounded-xl p-8 flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-amber-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-amber-800 mb-2">Important Note</h3>
                            <p className="text-amber-700 leading-relaxed">
                                This tool works only if you know the current password of the PDF file. It is designed to remove the password protection for easier access, not to bypass or crack passwords of files you do not own. UsePDF respects user privacy and security regulations.
                            </p>
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
                            <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                                Rotate PDF
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
