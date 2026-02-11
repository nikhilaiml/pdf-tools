/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import PdfToTextClient from './PdfToTextClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, FileText, ArrowRight, Copy } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to Text Online Free – Extract Text from PDF Instantly',
    description: 'Extract text from PDF online free. Convert PDF to editable text (TXT) in seconds. No signup, no watermark. Fast, secure PDF to text extractor.',
    keywords: [
        'pdf to text',
        'extract text from pdf',
        'pdf to text converter',
        'pdf to text online free',
        'pdf to txt',
        'convert pdf to text',
        'pdf text extractor',
        'copy text from pdf',
        'online pdf to text',
        'free pdf to text converter'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-to-text',
    },
    openGraph: {
        title: 'PDF to Text Online Free – Extract Text from PDF',
        description: 'Extract text from PDF online free. No signup, no watermark. Fast PDF to text converter.',
        url: 'https://www.usepdf.in/tools/pdf-to-text',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PDF to Text Online Free – Extract Text Instantly',
        description: 'Free PDF to text converter. Extract text from PDF files instantly.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function PdfToTextPage() {
    const faqs = [
        {
            name: "Is PDF to text extraction free?",
            acceptedAnswer: {
                text: "Yes, our PDF to text converter is 100% free. Extract text from unlimited PDFs without any cost or hidden fees."
            }
        },
        {
            name: "Does it work on scanned PDFs?",
            acceptedAnswer: {
                text: "Our tool works best on text-based PDFs where text is selectable. Scanned image-only PDFs may not produce results without OCR."
            }
        },
        {
            name: "Is signup required?",
            acceptedAnswer: {
                text: "No signup or registration needed. Simply upload your PDF and extract text instantly."
            }
        },
        {
            name: "Does it work on mobile?",
            acceptedAnswer: {
                text: "Yes, our online PDF to text converter works perfectly on all devices—Android, iPhone, tablet, and desktop."
            }
        },
        {
            name: "Is my PDF safe?",
            acceptedAnswer: {
                text: "Absolutely. We use SSL encryption for secure transfers. Your files are processed privately and automatically deleted from our servers."
            }
        },
        {
            name: "Can I download the extracted text?",
            acceptedAnswer: {
                text: "Yes! You can copy the extracted text to your clipboard or download it as a .txt file instantly."
            }
        }
    ];

    const howToSteps = [
        {
            name: "Upload Your PDF",
            text: "Upload or drag and drop your PDF document into the converter."
        },
        {
            name: "Extract Text Automatically",
            text: "Our tool processes every page and extracts all selectable text content instantly."
        },
        {
            name: "Copy or Download Text",
            text: "Copy the extracted text to clipboard or download as a .txt file—ready to use."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "PDF to Text Converter Online Free",
                "description": "Extract text from PDF online free. Convert PDF documents to editable text files without watermark or signup.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/pdf-to-text",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Extract Text from PDF Online Free",
                "description": "Step-by-step guide to extract text from PDF online without signup.",
                "totalTime": "PT1M",
                "step": howToSteps.map((step, index) => ({
                    "@type": "HowToStep",
                    "position": index + 1,
                    "name": step.name,
                    "text": step.text
                }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.name,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.acceptedAnswer.text
                    }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.usepdf.in" },
                    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.usepdf.in/tools" },
                    { "@type": "ListItem", "position": 3, "name": "PDF to Text", "item": "https://www.usepdf.in/tools/pdf-to-text" }
                ]
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Introduction */}
            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Need to <strong>extract text from PDF</strong>? Our free <strong>PDF to text converter</strong> pulls
                    all selectable text from your PDF documents in seconds. No signup. No watermark. Just fast,
                    accurate text extraction you can copy or download instantly.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                    Trusted by students, professionals, and researchers worldwide.
                </p>
            </section>

            {/* What is PDF to Text */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a PDF to Text Converter?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>PDF to text converter</strong> extracts all readable text content from PDF documents and
                    gives you a clean, editable text output. This is useful when you need to reuse content, search
                    through documents, or convert <strong>PDF to TXT</strong> format for further processing.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our <strong>online PDF to text</strong> tool works directly in your browser. It reads every page
                    of your PDF and outputs plain text that you can copy to clipboard or download as a .txt file.
                </p>
            </section>

            {/* Why Extract Text from PDF */}
            <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Extract Text from PDF?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Copy content without retyping",
                        "Search and find information quickly",
                        "Reuse PDF content in other documents",
                        "Create plain text versions of reports",
                        "Prepare data for analysis or processing",
                        "Make content accessible for screen readers"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* How to Extract - Steps */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Extract Text from PDF Online Free</h2>
                <p className="text-slate-600 mb-6">
                    Follow these simple steps to <strong>convert PDF to text</strong>:
                </p>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                {i + 1}
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{step.name}</h3>
                                <p className="text-slate-600 text-sm">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-slate-500 mt-4 text-center">
                    ✓ No signup required &nbsp; ✓ No watermark &nbsp; ✓ 100% free
                </p>
            </section>

            {/* Features */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF PDF to Text Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free Forever", desc: "No hidden costs or premium limits" },
                        { icon: <FileText className="w-6 h-6 text-blue-500" />, title: "Clean Text Output", desc: "Get plain text with page markers" },
                        { icon: <Copy className="w-6 h-6 text-green-500" />, title: "Copy or Download", desc: "Copy to clipboard or save as .txt" },
                        { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "Fast Processing", desc: "Extract text in seconds" },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "Secure & Private", desc: "Files auto-delete after processing" },
                        { icon: <Smartphone className="w-6 h-6 text-indigo-500" />, title: "Works on All Devices", desc: "Mobile, tablet, and desktop" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="p-2 bg-white rounded-lg shadow-sm">{feature.icon}</div>
                            <div>
                                <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                                <p className="text-slate-600 text-sm">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Common Use Cases */}
            <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Students & Research", desc: "Extract quotes, citations, and content from academic papers and textbooks." },
                        { title: "Office & Business", desc: "Pull text from reports, contracts, and invoices for record-keeping." },
                        { title: "Content Reuse", desc: "Copy text from PDFs to use in presentations, emails, or other documents." },
                        { title: "Data Processing", desc: "Extract raw text for data analysis, search indexing, or NLP processing." },
                        { title: "Accessibility", desc: "Convert PDF content to plain text for screen readers and assistive technology." }
                    ].map((useCase, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                            <p className="text-slate-600 text-sm">{useCase.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Security */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    Is It Safe to Extract Text from PDF Online?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Yes. Your files are encrypted using <strong>SSL encryption</strong> and processed securely.
                    We never access, share, or store your documents permanently.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our <strong>PDF text extractor</strong> works directly in your browser for maximum privacy.
                    Your conversion is completely private and confidential.
                </p>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-5 hover:bg-slate-50 transition-colors">
                            <h3 className="font-semibold text-slate-900 mb-2">{faq.name}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why UsePDF */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose UsePDF PDF to Text Tool?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "Clean Interface", desc: "Simple, distraction-free design for quick text extraction" },
                        { title: "No Registration", desc: "Start extracting text immediately without creating accounts" },
                        { title: "Fast & Reliable", desc: "Optimized processing for quick results" },
                        { title: "All Devices Supported", desc: "Works seamlessly on phone, tablet, or computer" }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Extract Text from Your PDF Now</h2>
                <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                    Fast, free, and secure PDF to text extraction in seconds. Join thousands of users who trust
                    UsePDF for their document needs.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
                >
                    Extract Text from PDF – It's Free
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Word Converter
                    </Link>
                    <Link href="/tools/pdf-to-excel" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Excel Converter
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF Online Free
                    </Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF Files Online
                    </Link>
                    <Link href="/tools/pdf-translator" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF Translator Online
                    </Link>
                    <Link href="/tools/pdf-to-audio" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Audio Converter
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <PdfToTextClient seoContent={seoContent} />
    );
}
