
import type { Metadata } from 'next';
import Link from 'next/link';
import PdfToPptClient from './PdfToPptClient';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to PPT Converter Online – Convert PDF to PowerPoint Free',
    description: 'Convert PDF to PPT online for free. Transform PDF pages into editable PowerPoint slides securely without signup or installation.',
    keywords: [
        'pdf to ppt',
        'pdf to powerpoint',
        'convert pdf to powerpoint',
        'pdf to powerpoint presentation',
        'convert pdf file to powerpoint'
    ],
    alternates: {
        canonical: 'https://usepdf.in/tools/pdf-to-ppt',
    },
    openGraph: {
        title: 'PDF to PPT Converter Online – Convert PDF to PowerPoint Free',
        description: 'Convert PDF to PPT online for free. Transform PDF pages into editable PowerPoint slides securely without signup or installation.',
        url: 'https://usepdf.in/tools/pdf-to-ppt',
        type: 'website',
    }
};

export default function PdfToPptPage() {
    const faqs = [
        {
            name: "How to convert PDF to PPT online?",
            acceptedAnswer: {
                text: "Simply upload your PDF file to our tool, wait for the conversion to process, and download your PowerPoint presentation instantly."
            }
        },
        {
            name: "Is this PDF to PPT converter free?",
            acceptedAnswer: {
                text: "Yes, our converter is 100% free to use. You can convert limitless PDF files to PowerPoint without any hidden costs."
            }
        },
        {
            name: "Is it safe to convert PDF to PowerPoint?",
            acceptedAnswer: {
                text: "Absolutely. Your files are processed securely and are automatically deleted from our servers after the conversion is complete to strictly protect your privacy."
            }
        },
        {
            name: "Will my PDF formatting be preserved?",
            acceptedAnswer: {
                text: "Yes, our tool converts each PDF page into a high-quality PowerPoint slide, preserving the visual layout of your original document."
            }
        },
        {
            name: "Can I convert PDF to PPT on mobile?",
            acceptedAnswer: {
                text: "Yes, UsePDF works fully on mobile browsers, allowing you to convert PDFs to PowerPoint presentations on your smartphone or tablet."
            }
        },
        {
            name: "Do I need to install any software?",
            acceptedAnswer: {
                text: "No installation is required. Our browser-based tool handles the conversion entirely online."
            }
        }
    ];

    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF PDF to PPT Converter",
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
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.name,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.acceptedAnswer.text
                    }
                }))
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
            <section className="text-center max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PDF to PPT Converter Online – Convert PDF to PowerPoint Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    <strong>Convert PDF to PPT online</strong> instantly with UsePDF. Our free, easy-to-use tool transforms your PDF documents into PowerPoint slides without any signup. Enjoy a secure, browser-based solution that works perfectly on both mobile and desktop devices, ensuring your privacy while you work.
                </p>
            </section>

            {/* Features Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Use Our PDF to PowerPoint Converter?</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        "Free PDF to PPT converter",
                        "High-quality PowerPoint slides",
                        "No watermark",
                        "Browser-based processing",
                        "Secure & privacy focused",
                        "Works on mobile & desktop"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert PDF to PPT</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    {[
                        { step: 1, title: "Upload PDF File to Convert", text: "Select your file from your device." },
                        { step: 2, title: "Convert PDF to PPT Slides", text: "Our tool processes your pages into slides." },
                        { step: 3, title: "Download PowerPoint File", text: "Save your new presentation file." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">{item.step}</div>
                            <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SEO Text Block */}
            <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">PDF to PPT Converter Online Securely</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-4">
                    Transforming your documents into presentation-ready formats is simple with our tool. <strong>PDF to PPT converter online securely</strong> processes your files, turning static PDF pages into PowerPoint slides that you can use for business meetings, school presentations, or personal projects.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                    We ensure fast conversion speeds so you don't have to wait. Plus, your data privacy is our top priority; all uploaded files are automatically deleted after a short period, so you never have to worry about the safety of your sensitive information.
                </p>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.name}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Tools */}
            <section className="border-t border-slate-200 pt-10 text-center">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Related PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {/* Note: Assuming these paths exist based on standard naming conventions and previous context */}
                    <Link href="/tools/ppt-to-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        PPT to PDF
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        PDF to Word
                    </Link>
                    <Link href="/tools/pdf-to-excel" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        PDF to Excel
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Compress PDF
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Split PDF File
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <PdfToPptClient seoContent={seoContent} />
    );
}
