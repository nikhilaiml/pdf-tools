/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import AddWatermarkClient from './AddWatermarkClient';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, Lock, HelpCircle, Layout } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Add Watermark to PDF Online – Watermark PDF Free',
    description: 'Add watermark to PDF documents online for free. Support text and image watermarks with full customization. Protect your PDF files instantly.',
    keywords: [
        'watermark pdf',
        'water mark pdf',
        'watermark pdf document',
        'water mark a pdf',
        'pdf to watermark',
        'add watermark to pdf',
        'add text watermark to pdf',
        'add image watermark to pdf',
        'pdf watermark online',
        'watermark pdf free',
        'protect pdf with watermark'
    ],
    alternates: {
        canonical: 'https://usepdf.in/tools/watermark-pdf',
    },
    openGraph: {
        title: 'Add Watermark to PDF Online – Watermark PDF Free',
        description: 'Secure your documents by adding watermarks to PDF files online. Free, fast, and no installation required.',
        url: 'https://usepdf.in/tools/watermark-pdf',
        type: 'website',
    }
};

export default function AddWatermarkPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I add a watermark to a PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your file to UsePDF, type your watermark text or upload an image, customize the style, and download the protected PDF."
                }
            },
            {
                "@type": "Question",
                "name": "Is the PDF watermark tool free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our watermark tool is completely free. You can add watermarks to as many PDF documents as you need without cost."
                }
            },
            {
                "@type": "Question",
                "name": "Can I add an image watermark to a PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can upload your logo or any image file to use as a watermark on your PDF pages."
                }
            },
            {
                "@type": "Question",
                "name": "Will the watermark affect PDF quality?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, our tool adds the watermark layer without altering the resolution or quality of your original PDF content."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to upload my PDF files?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We use secure encryption for processing, and all files are automatically deleted from our servers shortly after you download them."
                }
            }
        ]
    };

    const steps = [
        {
            title: "Upload your PDF file",
            description: "Select the document you want to protect from your device."
        },
        {
            title: "Choose text or image watermark",
            description: "Type your custom text or upload a logo image."
        },
        {
            title: "Customize watermark",
            description: "Adjust the position, transparency, and size to fit your needs."
        },
        {
            title: "Download the watermarked PDF",
            description: "Save your secured document instantly."
        }
    ];

    const seoContent = (
        <div className="space-y-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* How To Convert */}
            <section className="bg-indigo-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Add Watermark to PDF Online</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-indigo-100 relative">
                            <span className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                                {idx + 1}
                            </span>
                            <h3 className="font-bold text-slate-900 mb-2 mt-2">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our PDF Watermark Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Free Online Watermark", desc: "No hidden charges to watermark your PDFs.", icon: Globe },
                        { title: "Text & Image Support", desc: "Use custom text or logos as watermarks.", icon: Layout },
                        { title: "Full Customization", desc: "Control opacity, size, and placement.", icon: Check },
                        { title: "Protect Documents", desc: "Prevent unauthorized copying and misuse.", icon: Lock },
                        { title: "Fast Processing", desc: "Apply watermarks to pages in seconds.", icon: Zap },
                        { title: "No Tool Branding", desc: "We don't add our own watermark to your files.", icon: Shield },
                        { title: "Cross-Platform", desc: "Works on mobile, tablet, and desktop.", icon: Smartphone },
                        { title: "No Registration", desc: "Instant access without signing up.", icon: HelpCircle },
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                            <feature.icon className="w-10 h-10 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                            <p className="text-slate-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Use & Protection */}
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF to Watermark PDF Documents</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF is the easiest and most reliable way to protect your intellectual property. Our <strong>pdf watermark online</strong> tool offers enterprise-grade security for free, ensuring your confidential documents adhere to privacy standards. Whether you need to <strong>watermark pdf free</strong> for a quick draft or secure an official contract, our platform delivers speed and simplicity. We respect your data privacy with automatic file deletion and ensure a seamless experience across all your devices.
                    </p>
                    <ul className="space-y-3">
                        {["Secure & Private", "No Software Installation", "Instant Branding"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Protect PDF Documents with Watermarks</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Adding a watermark is one of the most effective ways to prevent unauthorized use of your content. It clearly signals ownership and status (e.g., "Draft", "Confidential"). This practice is ideal for sharing contracts, business reports, creative portfolios, and branded files. With UsePDF, you can protect your work while maintaining the original visual quality and layout of your document.
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
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        PDF to JPG
                    </Link>
                    <Link href="/tools/video-to-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Video to PDF
                    </Link>
                    <Link href="/tools/protect-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Protect PDF
                    </Link>
                    <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        All PDF Tools
                    </Link>
                </div>
            </section>
        </div>
    );

    const introText = "Secure your documents instantly by adding a watermark to your PDF files with UsePDF. Our free online tool gives you complete control, allowing you to insert custom text or image watermarks with adjustable position, size, and transparency. Whether you need to label a document as 'Confidential', protect your creative work with a logo, or simple water mark a pdf for draft review, our platform handles it all efficiently. We ensure your files are processed securely in the cloud without any software installation. Experience the fastest way to watermark pdf documents online, fully compatible with mobile and desktop devices. Start protecting your intellectual property today with our reliable and user-friendly pdf watermark solution.";

    return (
        <AddWatermarkClient
            seoContent={seoContent}
            title="Add Watermark to PDF Online – Watermark PDF Free"
            subtitle={introText}
            steps={steps}
        />
    );
}
