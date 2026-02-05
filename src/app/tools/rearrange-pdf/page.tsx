/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import RearrangePdfClient from './RearrangePdfClient';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, RotateCw, HelpCircle, Layers, Move } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Rearrange PDF Pages Online – Reorder PDF pages Free',
    description: 'Rearrange and reorder PDF pages online for free. Drag and drop to sort, delete, or organize pages in your PDF instantly. No signup required.',
    keywords: ['rearrange pdf pages', 'reorder pages in pdf', 'arrange pdf pages', 'reorder pages of pdf', 'rearrange pdf', 'rearrange pdf pages online', 'move pdf pages', 'organize pdf pages'],
    alternates: {
        canonical: 'https://usepdf.in/tools/rearrange-pdf',
    },
    openGraph: {
        title: 'Rearrange PDF Pages Online – Reorder PDF pages Free',
        description: 'Rearrange and reorder PDF pages online for free. Drag and drop to sort, delete, or organize pages in your PDF instantly. No signup required.',
        url: 'https://usepdf.in/tools/rearrange-pdf',
        type: 'website',
    }
};

export default function RearrangePdfPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I rearrange PDF pages online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply upload your PDF file to UsePDF, drag and drop the page thumbnails to change their order, and click 'Save Changes' to download your reorganized file."
                }
            },
            {
                "@type": "Question",
                "name": "Is it free to reorder pages in a PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our Rearrange PDF tool is 100% free. You can reorder as many pages and files as you like without any cost or hidden fees."
                }
            },
            {
                "@type": "Question",
                "name": "Can I move specific pages in a PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our drag-and-drop interface allows you to move any specific page to any new location within the document easily."
                }
            },
            {
                "@type": "Question",
                "name": "Is my PDF file secure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, security is our top priority. We process files securely in your browser and ensure they are automatically deleted from our servers after processing."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need to install any software?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No installation is needed. You can rearrange PDF pages directly in your web browser on any device, including desktops, tablets, and smartphones."
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

            {/* How To Rearrange */}
            <section className="bg-indigo-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Rearrange PDF Pages Online</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { step: 1, title: "Upload PDF File", desc: "Select and upload your PDF." },
                        { step: 2, title: "Drag & Drop Pages", desc: "Move thumbnails to reorder." },
                        { step: 3, title: "Apply Changes", desc: "Confirm your new page order." },
                        { step: 4, title: "Download PDF", desc: "Save your reorganized file." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our Rearrange PDF Tool</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Rearrange PDF Pages Free", desc: "Reorder your PDF pages completely free of charge.", icon: Globe },
                        { title: "Single or Multiple Pages", desc: "Move one page or reorganize the whole document.", icon: Layers },
                        { title: "Easy Drag & Drop", desc: "Intuitive interface makes sorting pages effortless.", icon: Move },
                        { title: "No Watermark", desc: "Your downloaded PDF stays clean with no branding.", icon: Shield },
                        { title: "Mobile & Desktop Ready", desc: "Works smoothly on all your devices and browsers.", icon: Smartphone },
                        { title: "No Registration", desc: "Start organizing immediately without signing up.", icon: Zap },
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF to Reorder PDF Pages</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF allows you to <strong>rearrange PDF pages</strong> quickly securely and easily. Our platform prioritizes your privacy with encrypted processing and automatic deletion. Whether you need to <strong>reorder PDF pages online</strong> for a presentation or organize scanned documents, our tool is designed for speed and simplicity. Enjoy a smooth experience with no software installation required.
                    </p>
                    <ul className="space-y-3">
                        {["Secure & Private", "Fast & Easy to Use", "No Hidden Costs"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Rearrange PDF Pages Without Losing Quality</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Rest assured that when you use our tool to rearrange your PDF, the quality of your content remains exactly the same. We preserve the original resolution of texts and images, ensuring that your layout stays intact. This is perfect for large documents, reports, and high-quality scans where preserving detail is critical.
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
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        PDF to Word
                    </Link>
                    <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Free PDF Tools Online
                    </Link>
                </div>
            </section>
        </div>
    );

    const introText = "Rearrange and reorder PDF pages online instantly with UsePDF. Simply drag and drop thumbnail images to change the order of pages in your PDF file. Our tool is completely free, fast, and requires no software installation or registration. Organize your documents perfectly in seconds with our secure, browser-based solution.";

    return (
        <RearrangePdfClient
            seoContent={seoContent}
            title="Rearrange PDF Pages Online – Reorder PDF Pages Free"
            subtitle={introText}
        />
    );
}
