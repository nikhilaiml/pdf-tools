/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import RotatePdfClient from './RotatePdfClient';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, RotateCw, HelpCircle, Layers } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Rotate PDF Online – Rotate PDF Pages Free',
    description: 'Rotate PDF pages online for free. Fix sideways or upside-down files easily. No signup, no watermark, and secure browser-based processing.',
    keywords: ['rotate pdf', 'rotate pdf online', 'rotate pdf pages', 'rotate pdf file', 'rotate pdf free', 'rotate pdf 90 degrees', 'turn pdf pages online'],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/rotate-pdf',
    },
    openGraph: {
        title: 'Rotate PDF Online – Rotate PDF Pages Free | UsePDF',
        description: 'Rotate PDF pages permanently. Rotate individual pages or all pages left or right. Save your PDF with proper orientation.',
        url: 'https://www.usepdf.in/tools/rotate-pdf',
        type: 'website',
    }
};

export default function RotatePdfPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I rotate a PDF online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply upload your PDF file to our online tool, select the rotation angle (90°, 180°, or 270°) for individual pages or the entire document, and click 'Rotate PDF'. Your file will be processed instantly."
                }
            },
            {
                "@type": "Question",
                "name": "Is the Rotate PDF tool free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Rotate PDF tool is 100% free to use. You can rotate as many pages or files as you need without any hidden changes or subscription fees."
                }
            },
            {
                "@type": "Question",
                "name": "Can I rotate only selected PDF pages?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. You can choose to rotate specific pages that are upside down or sideways, or you can apply the rotation to the whole PDF document at once."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to upload my PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is completely safe. We use secure browser-based processing, meaning your files are handled directly on your device and are never permanently stored on our servers."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to install any software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, you don't need to install any software. UsePDF works entirely online in your web browser, compatible with all devices including desktops, tablets, and smartphones."
                }
            }
        ]
    };

    const seoContent = (
        <div className="space-y-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* How To Rotate */}
            <section className="bg-indigo-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Rotate PDF Pages Online</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { step: 1, title: "Upload PDF File", desc: "Select and upload your PDF file." },
                        { step: 2, title: "Choose Rotation Angle", desc: "Select 90°, 180°, or 270°." },
                        { step: 3, title: "Apply Rotation", desc: "Rotate specific pages or all." },
                        { step: 4, title: "Download Rotated PDF", desc: "Save your corrected file instantly." }
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
            </section>

            {/* Features */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our Rotate PDF Tool</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Rotate PDF Pages Online for Free", desc: "Completely free tool to fix your document orientation.", icon: Globe },
                        { title: "Rotate Single or Multiple Pages", desc: "Flexibility to rotate individual pages or the entire file.", icon: Layers },
                        { title: "Supports 90°, 180°, and 270°", desc: "Full control over rotation angles to fix any layout.", icon: RotateCw },
                        { title: "No Watermark", desc: "Your final PDF remains clean and professional.", icon: Shield },
                        { title: "Works on Mobile & Desktop", desc: "Rotate PDFs easily on any device or screen size.", icon: Smartphone },
                        { title: "No Registration Required", desc: "Get started immediately without creating an account.", icon: Zap },
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                            <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Use & Quality */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF to Rotate PDF Files</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF offers a secure, reliable, and fast way to <strong>rotate PDF files</strong> online. We prioritize your privacy with automatic file deletion and secure processing. Our tool helps you <strong>rotate PDF pages</strong> instantly without complex software. Whether you need an <strong>online PDF rotator</strong> for work or personal use, our platform delivers free, high-speed results every time.
                    </p>
                    <ul className="space-y-3">
                        {["Secure & Privacy-friendly", "No installation needed", "Fast processing speed"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Rotate PDF Pages Without Losing Quality</h2>
                    <p className="text-slate-600 leading-relaxed">
                        When you rotate your documents with UsePDF, the original quality is perfectly preserved. We ensure that your layout, text fonts, and images remain unchanged and sharp. This makes our tool ideal for fixing scanned documents, contracts, or assignments that were scanned sideways or upside down.
                    </p>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {jsonLd.mainEntity.map((faq, idx) => (
                        <div key={idx} className="bg-slate-50/50 rounded-xl p-6">
                            <h3 className="font-bold text-slate-900 mb-3">{faq.name}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-10 text-center">
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
            </section>
        </div>
    );

    const introText = "Easily rotate PDF pages online for free with UsePDF. Correct the orientation of your documents by rotating them 90°, 180°, or 270° in seconds. Our tool is completely web-based, meaning you can rotate PDF files instantly without software installation or registration. It's fast, secure, and preserves the quality of your files.";

    return (
        <RotatePdfClient
            seoContent={seoContent}
            title="Rotate PDF Online – Rotate PDF Pages Free"
            subtitle={introText}
        />
    );
}
