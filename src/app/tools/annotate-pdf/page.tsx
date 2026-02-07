/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';

import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, PenTool, HelpCircle, Layers } from 'lucide-react';

import AnnotatePdfWrapper from './AnnotatePdfWrapper';

export const metadata: Metadata = {
    title: 'Highlight PDF Online – Annotate PDF Free',
    description: 'Highlight text and annotate PDF documents online for free. Add comments, markings, and notes easily. fast, secure, and no software installation required.',
    keywords: [
        'pdf highlight',
        'highlighting pdf document',
        'annotate pdf',
        'pdf highlighter',
        'pdf highlighter online free',
        'highlight pdf online',
        'highlight text in pdf',
        'annotate pdf online',
        'pdf annotation tool',
        'mark text in pdf',
        'highlight pdf free'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/highlight-pdf',
    },
    openGraph: {
        title: 'Annotate PDF Online – Highlight, Draw & Add Text | UsePDF',
        description: 'Annotate PDF files online for free. Highlight text, draw, add shapes, and insert comments. No login required.',
        url: 'https://www.usepdf.in/tools/highlight-pdf',
        type: 'website',
    }
};

export default function AnnotatePdfPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I highlight text in a PDF online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your PDF to UsePDF, select the highlight or pen tool, mark the text you want to emphasize, and download your annotated file."
                }
            },
            {
                "@type": "Question",
                "name": "Is the PDF highlight tool free to use?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our PDF highlighter is completely free. You can annotate and highlight as many documents as you need without any hidden fees."
                }
            },
            {
                "@type": "Question",
                "name": "Can I annotate PDF documents online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Besides highlighting, you can use our pen tool to add handwritten notes, drawings, and other annotations to your PDF pages."
                }
            },
            {
                "@type": "Question",
                "name": "Will highlighting affect PDF quality?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, our tool preserves the original quality of your PDF. Highlights and annotations are added as a separate layer without blurring text or images."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to upload my PDF files?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, your privacy is our priority. All files are processed securely and deleted from our servers automatically after you download your work."
                }
            }
        ]
    };

    const steps = [
        {
            title: "Upload your PDF file",
            description: "Select the document you want to highlight from your device."
        },
        {
            title: "Select highlight or annotation tool",
            description: "Choose the pen tool and a color to start marking your text."
        },
        {
            title: "Highlight text or add notes",
            description: "Draw directly on the PDF pages to emphasize key points."
        },
        {
            title: "Download the annotated PDF",
            description: "Save your file with all highlights and notes embedded."
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Highlight and Annotate PDF Online</h2>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our PDF Highlight Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Free Online Highlighter", desc: "Highlight PDF text at no cost.", icon: Globe },
                        { title: "Easy Annotations", desc: "Mark up documents with simple tools.", icon: PenTool },
                        { title: "Preserves Layout", desc: "Original formatting stays intact.", icon: Layers },
                        { title: "Add Comments & Notes", desc: "Draw and write directly on pages.", icon: Check },
                        { title: "Fast & Secure", desc: "Quick processing with full privacy.", icon: Zap },
                        { title: "No Watermark", desc: "Clean output without our branding.", icon: Shield },
                        { title: "All Devices Supported", desc: "Works on mobile, tablet, and PC.", icon: Smartphone },
                        { title: "No Registration", desc: "Start highlighting instantly.", icon: HelpCircle },
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF to Highlight PDF Documents</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF offers a seamless way to review and markup documents efficiently. Our <strong>pdf highlighter online free</strong> tool is designed for students, professionals, and anyone who needs to <strong>annotate pdf online</strong> quickly. We prioritize your privacy with secure file handling and ensure that your experience is fast and frustration-free. With no software to install or accounts to create, you can focus entirely on your work.
                    </p>
                    <ul className="space-y-3">
                        {["Secure & Private", "Instant Annotation", "User-Friendly Interface"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Annotate and Highlight PDF Without Losing Quality</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Precision is key when making notes. Our tool ensures that your original content remains exactly as it was. When you highlight text or add drawings, they overlay the document perfectly without changing the fonts, images, or layout. This makes it improving readability and organization for study notes, legal contracts, and business reports.
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
                    <Link href="/tools/add-watermark" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Add Watermark
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        PDF to Word
                    </Link>
                    <Link href="/tools/page-number-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Add Page Numbers
                    </Link>
                    <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        All PDF Tools
                    </Link>
                </div>
            </section>
        </div>
    );

    const introText = "Enhance your reading and review process with UsePDF's free online highlighter. Our intuitive tool allows you to easily highlight text in PDF documents, making it perfect for studying, contract review, or collaborative feedback. Beyond simple highlighting, you can annotate pdf files by drawing, adding personalized notes, or marking specific sections directly in your browser. We offer a fast, secure, and completely free solution that requires no software installation or registration. Experience the convenience of a powerful pdf highlight tool that works seamlessly on any device, preserving the original layout and quality of your important documents.";

    return (
        <AnnotatePdfWrapper
            seoContent={seoContent}
            title="Highlight PDF Online – Annotate PDF Free"
            subtitle={introText}
            steps={steps}
        />
    );
}
