
import type { Metadata } from 'next';
import Link from 'next/link';
import JpgToPdfClient from './JpgToPdfClient';
import { HelpCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'JPG to PDF Converter Online – Convert JPG Images to PDF Free',
    description: 'Convert JPG to PDF online for free. Transform your images into high-quality PDF documents securely without signup, watermark, or software installation.',
    keywords: [
        'jpg to pdf converter',
        'convert jpg to pdf',
        'jpg to pdf online',
        'image to pdf converter',
        'convert jpg images to pdf',
        'jpg to pdf free'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/jpg-to-pdf',
    },
    openGraph: {
        title: 'JPG to PDF Converter Online – Convert JPG Images to PDF Free',
        description: 'Convert JPG to PDF online for free. Transform your images into high-quality PDF documents securely without signup, watermark, or software installation.',
        url: 'https://www.usepdf.in/tools/jpg-to-pdf',
        type: 'website',
    }
};

export default function JpgToPdfPage() {
    const faqs = [
        {
            name: "How to convert JPG to PDF online?",
            acceptedAnswer: {
                text: "Simply upload your JPG images to our tool, arrange them in your desired order, and click 'Convert' to instantly generate your PDF file."
            }
        },
        {
            name: "Is this JPG to PDF converter free?",
            acceptedAnswer: {
                text: "Yes, our tool is completely free to use. You can convert limitless JPG images to PDF without any hidden fees or subscriptions."
            }
        },
        {
            name: "Is it safe to convert JPG images to PDF?",
            acceptedAnswer: {
                text: "Absolutely. We use secure encryption for file transfers, and all uploaded files are automatically deleted from our servers after conversion for your privacy."
            }
        },
        {
            name: "Can I convert multiple JPG files into one PDF?",
            acceptedAnswer: {
                text: "Yes, you can select and upload multiple JPG files at once and merge them into a single, organized PDF document."
            }
        },
        {
            name: "Does the converted PDF have a watermark?",
            acceptedAnswer: {
                text: "No, we do not add any watermarks to your converted documents. Your PDF will look professional and clean."
            }
        },
        {
            name: "Do I need to install any software?",
            acceptedAnswer: {
                text: "No installation is required. Our JPG to PDF converter works entirely in your web browser on desktop, mobile, or tablet."
            }
        }
    ];

    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF JPG to PDF Converter",
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
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">JPG to PDF Converter Online – Convert JPG Images to PDF Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    <strong>Convert JPG to PDF online</strong> for free with UsePDF. Our secure, browser-based tool allows you to transform your images into high-quality PDF documents instantly. Enjoy a seamless experience with <strong>no signup, no watermark, and full mobile and desktop support</strong> for all your conversion needs.
                </p>
            </section>

            {/* Features Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Best Free JPG to PDF Converter</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {[
                        "Free JPG to PDF converter",
                        "No watermark on output PDF",
                        "High-quality image conversion",
                        "Browser-based processing",
                        "Secure & privacy-focused",
                        "Works on mobile and desktop"
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert JPG to PDF</h2>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {[
                        { step: 1, title: "Upload JPG Images", text: "Select images from your device." },
                        { step: 2, title: "Arrange JPG Images in Order", text: "Drag and drop to reorder images." },
                        { step: 3, title: "Convert JPG to PDF", text: "Click to generate your PDF." },
                        { step: 4, title: "Download PDF File", text: "Save the PDF file instantly." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-6">JPG to PDF Converter Online Securely</h2>
                <p className="text-slate-600 leading-relaxed text-lg mb-4">
                    Transforming your image files has never been easier. With our tool, you can <strong>convert JPG to PDF online securely</strong>, ensuring your documents are safe throughout the process. Whether you need to combine multiple vacation photos into a single shareable file or archive important scanned documents, our converter handles single and batch conversions with ease.
                </p>
                <p className="text-slate-600 leading-relaxed text-lg">
                    We prioritize your privacy by automatically deleting files after processing. Experience fast, reliable, and high-quality conversion that retains the clarity of your original images—all within your browser, without the need for additional software.
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
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Merge PDF Online
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Compress PDF
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Split PDF File
                    </Link>
                    <Link href="/tools/image-to-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Image to PDF Converter
                    </Link>
                    <Link href="/tools/protect-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Protect PDF
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <JpgToPdfClient seoContent={seoContent} />
    );
}
