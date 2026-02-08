/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import PdfToWordClient from './PdfToWordClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to Word Online Free – Convert PDF to Editable Word (DOCX)',
    description: 'Convert PDF to Word online free. Turn PDFs into editable Word (DOCX) files instantly. No signup, no watermark. Fast, secure PDF to Word converter.',
    keywords: [
        'pdf to word',
        'convert pdf to word',
        'pdf to word online free',
        'pdf to docx',
        'pdf to word converter',
        'online pdf to word',
        'editable word document',
        'convert pdf file to word',
        'pdf document to docx',
        'online document converter',
        'edit pdf content in word',
        'word file from pdf',
        'free pdf to word converter'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-to-word',
    },
    openGraph: {
        title: 'PDF to Word Online Free – Convert PDF to Editable Word',
        description: 'Convert PDF to Word online free. No signup, no watermark. Fast and secure PDF to Word converter.',
        url: 'https://www.usepdf.in/tools/pdf-to-word',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PDF to Word Online Free – Convert PDF Instantly',
        description: 'Free PDF to Word converter. Turn PDFs into editable Word files instantly.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function PdfToWordPage() {
    // FAQs
    const faqs = [
        {
            name: "Is PDF to Word free?",
            acceptedAnswer: {
                text: "Yes, our PDF to Word converter is 100% free forever. Convert unlimited PDF files to editable Word (DOCX) documents without any cost or hidden fees."
            }
        },
        {
            name: "Is the Word file fully editable?",
            acceptedAnswer: {
                text: "Yes, you get a fully editable DOCX file. Edit text, update formatting, add content, and make any changes you need in Microsoft Word or Google Docs."
            }
        },
        {
            name: "Is signup or registration required?",
            acceptedAnswer: {
                text: "No signup required. Simply upload your PDF, convert to Word, and download your editable file instantly. No account needed."
            }
        },
        {
            name: "Does it work on mobile devices?",
            acceptedAnswer: {
                text: "Yes, our online PDF to Word converter works perfectly on all devices—Android phones, iPhones, tablets, and desktop computers."
            }
        },
        {
            name: "Is my data safe when converting online?",
            acceptedAnswer: {
                text: "Absolutely. We use SSL encryption for secure transfers. Your files are processed privately and automatically deleted from our servers within one hour."
            }
        },
        {
            name: "Will my document formatting be preserved?",
            acceptedAnswer: {
                text: "Our converter works to maintain your original text structure, paragraphs, and readability as much as possible. Complex layouts may require minor adjustments."
            }
        },
        {
            name: "Can I convert Word back to PDF?",
            acceptedAnswer: {
                text: "Yes! After editing your Word file, use our Word to PDF tool to convert it back into a professional PDF format for sharing."
            }
        }
    ];

    // How-To Steps
    const howToSteps = [
        {
            name: "Upload Your PDF File",
            text: "Upload or drag and drop your PDF document into the converter."
        },
        {
            name: "Convert PDF to Word",
            text: "Click convert and let the tool process your file automatically. Conversion takes just seconds."
        },
        {
            name: "Download Editable Word File",
            text: "Download your DOCX file. Fully editable and watermark-free—ready to edit immediately."
        }
    ];

    // JSON-LD Schema - SoftwareApplication + HowTo + FAQPage + BreadcrumbList
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "PDF to Word Converter Online Free",
                "description": "Convert PDF to Word online free. Turn PDF documents into editable Word (DOCX) files without watermark or signup.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/pdf-to-word",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Convert PDF to Word Online Free",
                "description": "Step-by-step guide to convert PDF to Word online without watermark or signup.",
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
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.usepdf.in"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Tools",
                        "item": "https://www.usepdf.in/tools"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "PDF to Word",
                        "item": "https://www.usepdf.in/tools/pdf-to-word"
                    }
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
                    Looking to <strong>convert PDF to Word online free</strong>? Whether you need to edit documents, update
                    reports, or reuse PDF content, our <strong>PDF to Word converter</strong> helps you turn PDFs into fully
                    editable Word (DOCX) files in seconds. No signup. No watermark. Just fast, accurate conversion.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                    Trusted by students, professionals, and users worldwide.
                </p>
            </section>

            {/* What is PDF to Word Converter */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a PDF to Word Converter?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>PDF to Word converter</strong> allows you to transform non-editable PDF files into editable Word
                    documents. PDFs are ideal for sharing, but editing them directly can be difficult. Converting <strong>PDF
                        to Word</strong> makes it easy to update text, fix formatting, and reuse content without starting from scratch.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our <strong>online PDF to Word</strong> tool works directly in your browser and preserves text structure and
                    readability as much as possible. Get an <strong>editable word document</strong> in seconds.
                </p>
            </section>

            {/* Why Convert PDF to Word */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Convert PDF to Word?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Edit text without retyping",
                        "Update documents quickly",
                        "Reuse content from PDFs",
                        "Modify resumes and CVs",
                        "Edit reports, contracts, and forms",
                        "Save time and effort"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* How to Convert - Steps */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Convert PDF to Word Online Free</h2>
                <p className="text-slate-600 mb-6">
                    Follow these simple steps to <strong>convert PDF to editable Word</strong>:
                </p>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF PDF to Word Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free Forever", desc: "No hidden costs or premium limits" },
                        { icon: <FileText className="w-6 h-6 text-blue-500" />, title: "Editable DOCX Output", desc: "Fully editable Word document" },
                        { icon: <CheckCircle className="w-6 h-6 text-green-500" />, title: "Accurate Conversion", desc: "Preserves text and structure" },
                        { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "Fast Processing", desc: "Convert in seconds" },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "Secure & Private", desc: "Files auto-delete in 1 hour" },
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
                        { title: "Students & Academic Work", desc: "Edit assignments, lecture notes, and research papers without retyping content." },
                        { title: "Office & Business Documents", desc: "Update reports, proposals, and contracts quickly by converting to editable Word." },
                        { title: "Resume & CV Editing", desc: "Make quick changes to your resume or CV without recreating the entire document." },
                        { title: "Official & Form Documents", desc: "Edit form content, update information, and prepare documents for submission." },
                        { title: "Content Reuse", desc: "Copy and reuse content from PDFs without manual retyping—save hours of work." }
                    ].map((useCase, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-slate-900 mb-2">{useCase.title}</h3>
                            <p className="text-slate-600 text-sm">{useCase.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Security Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-600" />
                    Is It Safe to Convert PDF to Word Online?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Yes. Your files are encrypted using <strong>SSL encryption</strong> and automatically deleted within one hour
                    after processing. Your documents are never accessed, shared, or stored permanently.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We prioritize your privacy with secure, browser-based processing. Your <strong>PDF document to docx</strong> conversion
                    is completely private and confidential.
                </p>
            </section>

            {/* Comparison Table */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">PDF vs Word – Quick Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-semibold text-slate-900 border-b">Feature</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">PDF</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">Word (DOCX)</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b">
                                <td className="p-4 font-medium">Editability</td>
                                <td className="p-4">Limited / Difficult</td>
                                <td className="p-4">Fully Editable</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Making Updates</td>
                                <td className="p-4">Requires special tools</td>
                                <td className="p-4">Easy and quick</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-medium">Content Reuse</td>
                                <td className="p-4">Copy-paste issues</td>
                                <td className="p-4">Seamless editing</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Best For</td>
                                <td className="p-4">Sharing & archiving</td>
                                <td className="p-4">Editing & collaboration</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* FAQ Section */}
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

            {/* Why UsePDF is Better */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Choose UsePDF PDF to Word Tool?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "Clean Interface", desc: "Simple, distraction-free design for quick conversions" },
                        { title: "No Registration", desc: "Start converting immediately without creating accounts" },
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

            {/* Conclusion / CTA */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Convert Your PDF to Editable Word Now</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Fast, free, and secure PDF to Word conversion in seconds. Join thousands of users who trust
                    UsePDF for their document editing needs.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                    Convert PDF to Word – It's Free
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/word-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Word to PDF Converter
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF Online Free
                    </Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF Files Online
                    </Link>
                    <Link href="/tools/pdf-to-jpg" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to JPG Converter
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Split PDF Online Free
                    </Link>
                    <Link href="/tools/pdf-to-excel" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        PDF to Excel Converter
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <PdfToWordClient seoContent={seoContent} />
    );
}
