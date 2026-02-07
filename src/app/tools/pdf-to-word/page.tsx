/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import PdfToWordClient from './PdfToWordClient';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, FileText, HelpCircle, FileType } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to Word & Word to PDF Converter Online – Free & Editable',
    description: 'Convert PDF files to editable Word documents or Word to PDF online for free. Accurate conversion with no software required. Fast, secure, and preserves formatting.',
    keywords: [
        'pdf to word',
        'convert pdf to word',
        'pdf to word converter',
        'word to pdf',
        'word to pdf converter',
        'pdf to word online',
        'free pdf to word',
        'convert word to pdf online',
        'doc to pdf',
        'pdf to doc',
        'editable pdf to word'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-to-word',
    },
    openGraph: {
        title: 'PDF to Word Converter – Convert PDF to DOC/DOCX Free | UsePDF',
        description: 'Convert PDF to Word documents online for free. Editable DOC/DOCX files with accurate formatting. No signup required.',
        url: 'https://www.usepdf.in/tools/pdf-to-word',
        type: 'website',
    }
};

export default function PdfToWordPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I convert PDF to Word online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply upload your PDF file to UsePDF, choose the conversion option, and download your editable Word document in seconds."
                }
            },
            {
                "@type": "Question",
                "name": "Is the PDF to Word converter free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our tool is completely free to use. You can convert limitless PDF and Word files without any hidden costs."
                }
            },
            {
                "@type": "Question",
                "name": "Will the Word file be editable?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Our converter extracts text, tables, and images to create a fully editable Word format (Docx) that you can modify."
                }
            },
            {
                "@type": "Question",
                "name": "Can I convert Word to PDF online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, UsePDF also supports Word to PDF conversion. Upload your Doc or Docx file, and we will turn it into a high-quality PDF."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to upload my documents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your security is our priority. Files are processed securely via SSL and are automatically deleted from our servers shortly after conversion."
                }
            }
        ]
    };

    const steps = [
        {
            title: "Upload your PDF or Word file",
            description: "Select the document you want to convert from your device."
        },
        {
            title: "Choose conversion type",
            description: "The tool automatically detects the format and prepares for conversion (PDF to Word or Word to PDF)."
        },
        {
            title: "Convert instantly",
            description: "Click to start the process. Our engine works in seconds."
        },
        {
            title: "Download the converted file",
            description: "Save your new, high-quality document ready for use."
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert PDF to Word or Word to PDF Online</h2>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our PDF and Word Converter</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Convert PDF to Word Free", desc: "Transform PDFs into Docx files at no cost.", icon: Globe },
                        { title: "Word to PDF in Seconds", desc: "Quickly turn Word docs into professional PDFs.", icon: FileType },
                        { title: "Editable Word Output", desc: "Get fully editable text and layouts.", icon: FileText },
                        { title: "Preserves Formatting", desc: "Retains fonts, images, and alignment.", icon: Check },
                        { title: "Fast & Secure", desc: "Encrypted processing for privacy and speed.", icon: Zap },
                        { title: "No Watermark Added", desc: "Clean documents without branding.", icon: Shield },
                        { title: "Mobile & Desktop", desc: "Convert on any device, anywhere.", icon: Smartphone },
                        { title: "No Registration", desc: "Start converting instantly, no signup needed.", icon: HelpCircle },
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF to Convert PDF and Word Files</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF has established itself as a reliable authority for digital document management. We ensure your file privacy and security with robust encryption standards. Our <strong>pdf to word online</strong> converter allows anyone to easily transform static regular files into dynamic, editable documents. Conversely, our <strong>word to pdf converter</strong> creates universally compatible PDF files for sharing. With a focus on speed, accuracy, and ease of use, UsePDF simplifies your workflow without requiring any software installation.
                    </p>
                    <ul className="space-y-3">
                        {["Secure File Handling", "Accurate Formatting", "Instant Results"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Convert PDF to Word Without Losing Formatting</h2>
                    <p className="text-slate-600 leading-relaxed">
                        One of the biggest challenges in conversion is maintaining the original look of the document. Our tool excels at this. When you convert, the <strong>text remains editable</strong>, while fonts, spacing, and layout are carefully preserved. This precision makes our tool ideal for updating resumes, editing business reports, or retrieving content from older documents without retyping everything from scratch.
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
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Merge PDF
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Compress PDF
                    </Link>
                    <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        All PDF Tools
                    </Link>
                </div>
            </section>
        </div>
    );

    const introText = "Seamlessly convert your PDF files into editable Word documents or turn Word files into professional PDFs with UsePDF. Our robust online processor ensures that you get accurate results, retaining original formatting like fonts, paragraphs, and tables. Whether you are looking to convert pdf to word for editing a report or need a word to pdf converter to finalize a contract, our tool offers a free, fast, and secure solution. We operate entirely in the cloud, meaning you can access our services from any browser without installing software. Experience the convenience of high-quality document conversion that perfectly matches your search intent for accuracy and ease of use.";

    return (
        <PdfToWordClient
            seoContent={seoContent}
            title="PDF to Word & Word to PDF Converter Online – Free & Editable"
            subtitle={introText}
            steps={steps}
        />
    );
}
