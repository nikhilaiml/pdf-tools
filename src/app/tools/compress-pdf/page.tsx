import type { Metadata } from 'next';
import Link from 'next/link';
import CompressPdfClient from './CompressPdfClient';
import { CheckCircle, HelpCircle, Merge, Split, FileText, ArrowRight, Smartphone, Shield, Zap, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF Online – Reduce PDF Size Free',
    description: 'Compress PDF files online for free. Reduce PDF size without losing quality. Fast, secure, and works on all devices.',
    keywords: ['compress pdf online', 'reduce pdf size', 'pdf compressor', 'resize pdf', 'optimize pdf', 'free pdf tools'],
    alternates: {
        canonical: 'https://usepdf.in/tools/compress-pdf',
    },
    openGraph: {
        title: 'Compress PDF Online – Reduce PDF Size Free',
        description: 'Compress PDF files online for free. Reduce PDF size without losing quality. Fast, secure, and works on all devices.',
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
                        "name": "Is Compress PDF tool free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Compress PDF tool is 100% free. You can reduce file sizes as many times as you like without any hidden costs or paywalls."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does PDF compression reduce quality?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our smart algorithm optimizes your file by removing redundant data and compressing images efficiently. The visual quality remains excellent, making it hard to spot any difference."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are my PDF files safe?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. Your privacy is our priority. All uploaded files are processed securely and automatically deleted from our servers permanently after one hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I compress PDF on mobile?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes! UsePDF is a web-based platform that works perfectly on all mobile devices, including Android and iPhone, as well as tablets and desktops."
                        }
                    }
                ]
            },
            {
                "@type": "HowTo",
                "name": "How to Compress PDF Online",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Select Tool",
                        "text": "Choose the Compress PDF tool from our homepage or tools menu."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Upload PDF",
                        "text": "Upload the PDF file you want to compress from your device."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Compress",
                        "text": "The tool will automatically process and compress your PDF file."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download",
                        "text": "Download your smaller, optimized PDF file immediately."
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
            <section className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Compress PDF Online – Reduce PDF Size Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Easily <strong>compress PDF online</strong> with our advanced compression tool. We help you <strong>reduce PDF size</strong> significantly without compromising on quality. Whether you need to send a file via email or upload it to a portal with size limits, our <strong>PDF compressor</strong> is here to help. It works instantly in your browser—no software installation, signup, or watermarks required. Enjoy a fast, secure, and completely free experience on any device, from desktop to mobile.
                </p>
            </section>

            {/* How to Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center relative z-10">How to Compress PDF Online?</h2>
                <div className="grid md:grid-cols-4 gap-6 relative z-10">
                    {[
                        { step: "1", title: "Select Tool", desc: "Choose the Compress PDF tool." },
                        { step: "2", title: "Upload File", desc: "Select and upload your PDF." },
                        { step: "3", title: "Auto Compress", desc: "Tool optimizes file size instantly." },
                        { step: "4", title: "Download", desc: "Save your compressed PDF." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                                {item.step}
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use UsePDF Compress PDF Tool?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[
                        { icon: CheckCircle, text: "High quality PDF compression" },
                        { icon: Zap, text: "Fast processing speed" },
                        { icon: Shield, text: "Secure and private (files deleted automatically)" },
                        { icon: Globe, text: "Browser-based tool, no installation" },
                        { icon: Smartphone, text: "Fully mobile-friendly" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature.text}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Quality Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Reduce PDF Size Without Losing Quality</h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
                    Large PDF files can be a hassle, often exceeding email attachment limits or taking forever to upload. Our smart compression technology solves this by analyzing your document and removing unnecessary meta-data while optimizing images. This ensures you get a significantly smaller file that still looks sharp and professional. It’s the perfect solution for sharing reports, resumes, or any document where visual clarity matters.
                </p>
            </section>

            {/* Device Support Section */}
            <section className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Free PDF Compressor for All Devices</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                    We believe productivity shouldn't be limited by your device. Our tool is fully compatible with Windows, Mac, Linux, Android, and iPhone. As long as you have a modern web browser, you can access our services anywhere, anytime. best of all, there are no accounts to create and no payments required.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                    {[
                        { q: "Is Compress PDF tool free to use?", a: "Yes, our Compress PDF tool is 100% free. You can reduce file sizes as many times as you like without any hidden costs or paywalls." },
                        { q: "Does PDF compression reduce quality?", a: "Our smart algorithm optimizes your file by removing redundant data and compressing images efficiently. The visual quality remains excellent, making it hard to spot any difference." },
                        { q: "Are my PDF files safe?", a: "Absolutely. Your privacy is our priority. All uploaded files are processed securely and automatically deleted from our servers permanently after one hour." },
                        { q: "Can I compress PDF on mobile?", a: "Yes! UsePDF is a web-based platform that works perfectly on all mobile devices, including Android and iPhone, as well as tablets and desktops." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Related PDF Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {[
                        { name: "Merge PDF", icon: Merge, desc: "Combine multiple PDFs.", href: "/tools/merge-pdf", color: "text-red-500", bg: "bg-red-50" },
                        { name: "PDF to Word", icon: FileText, desc: "Convert PDF to Docx.", href: "/tools/pdf-to-word", color: "text-blue-500", bg: "bg-blue-50" },
                        { name: "Word to PDF", icon: FileText, desc: "Convert Word to PDF.", href: "/tools/word-to-pdf", color: "text-blue-500", bg: "bg-blue-50" },
                        { name: "Protect PDF", icon: Shield, desc: "Add password security.", href: "/tools/protect-pdf", color: "text-slate-600", bg: "bg-slate-100" },
                    ].map((tool, i) => (
                        <Link key={i} href={tool.href} className="group">
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                                <div className={`w-12 h-12 ${tool.bg} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                                    <tool.icon className={`w-6 h-6 ${tool.color}`} />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-2">{tool.name}</h3>
                                <p className="text-slate-500 text-sm mb-4">{tool.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );

    return (
        <CompressPdfClient seoContent={seoContent} />
    );
}
