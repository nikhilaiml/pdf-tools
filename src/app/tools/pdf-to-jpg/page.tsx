/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import PdfToJpgClient from './PdfToJpgClient';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, Image, HelpCircle, FileImage } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to JPG & Image to PDF Converter Online – Free & Fast',
    description: 'Convert PDF to JPG online for free. Also support converting images and photos to PDF. No software required. Fast, secure, and high-quality conversion.',
    keywords: [
        'pdf to jpg',
        'pdf to jpg online',
        'convert pdf to jpg',
        'pdf to jpg free',
        'pdf to image',
        'image to pdf',
        'photo to pdf',
        'convert image to pdf',
        'pdf to jpeg',
        'convert pdf pages to jpg',
        'pdf page to jpg',
        'online pdf to jpg converter',
        'save pdf as jpg',
        'jpg to pdf',
        'picture to pdf',
        'convert photo to pdf online'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-to-jpg',
    },
    openGraph: {
        title: 'PDF to JPG & Image to PDF Converter Online – Free & Fast',
        description: 'Convert PDF to JPG online for free. Also support converting images and photos to PDF. No software required. Fast, secure, and high-quality conversion.',
        url: 'https://www.usepdf.in/tools/pdf-to-jpg',
        type: 'website',
    }
};

export default function PdfToJpgPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I convert PDF to JPG online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Upload your PDF file to UsePDF, and our tool will automatically convert each page into a high-quality JPG image that you can download instantly."
                }
            },
            {
                "@type": "Question",
                "name": "How do I convert image or photo to PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply upload your image files (JPG, PNG, etc.) to our Image to PDF converter, arrange them in the desired order, and convert them into a single PDF document."
                }
            },
            {
                "@type": "Question",
                "name": "Is this PDF and image converter free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our converter is 100% free to use. You can process both PDF-to-Image and Image-to-PDF conversions without any cost or limitations."
                }
            },
            {
                "@type": "Question",
                "name": "Can I convert multiple files at once?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can upload multiple images to create a PDF, or convert a multi-page PDF into separate image files in one go."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to upload my files?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. All file processing happens securely in your browser. Your files are encrypted and automatically deleted from our servers to ensure your privacy."
                }
            }
        ]
    };

    const steps = [
        {
            title: "Upload your PDF or image files",
            description: "Select files from your device to start converting."
        },
        {
            title: "Choose conversion type",
            description: "Select PDF to JPG or Image to PDF mode."
        },
        {
            title: "Convert files instantly",
            description: "Click the button to process your documents in seconds."
        },
        {
            title: "Download the converted files",
            description: "Save your new high-quality files immediately."
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert PDF to JPG or Image to PDF Online</h2>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our PDF & Image Converter</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Convert PDF to JPG Free", desc: "Turn PDF pages into images at no cost.", icon: Globe },
                        { title: "Image to PDF Conversion", desc: "Easily turn photos and images into PDF.", icon: FileImage },
                        { title: "Supports JPG, PNG, JPEG", desc: "Compatible with all major image formats.", icon: Image },
                        { title: "High-Quality Output", desc: "Get sharp conversions without quality loss.", icon: Check },
                        { title: "Fast & Secure", desc: "Process files instantly in a secure environment.", icon: Zap },
                        { title: "No Watermark Added", desc: "Clean output with no branding or watermarks.", icon: Shield },
                        { title: "Mobile & Desktop Ready", desc: "Works perfectly on any device or screen.", icon: Smartphone },
                        { title: "No Registration", desc: "No account needed. Just upload and convert.", icon: HelpCircle },
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF for PDF and Image Conversion</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF is your trusted solution for secure and efficient document conversion. We prioritize your privacy with advanced encryption and automatic file deletion, ensuring your data remains safe. Our platform is designed for simplicity and speed, allowing you to <strong>convert pdf to jpg online</strong> or turn an <strong>image to pdf</strong> without any technical hassles. With no software to download and a user-friendly interface, UsePDF delivers professional results every time, making it the preferred choice for millions of users worldwide.
                    </p>
                    <ul className="space-y-3">
                        {["Privacy Focused & Secure", "High-Speed Processing", "User-Friendly Interface"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Convert PDF and Images Without Losing Quality</h2>
                    <p className="text-slate-600 leading-relaxed">
                        Our advanced conversion engine guarantees that your files retain their original excellence. When you <strong>convert PDF to JPG</strong>, every image maintains its full resolution. Likewise, converted PDFs preserve the clarity, sharpness, and color accuracy of your original photos. Text and layout remain crisp, making this tool perfect for working with scanned documents, certificates, and important images where quality cannot be compromised.
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
                    <Link href="/tools/rotate-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Rotate PDF
                    </Link>
                    <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Free PDF Tools Online
                    </Link>
                </div>
            </section>
        </div>
    );

    const introText = "Easily convert PDF files to high-quality JPG images or turn your photos and images into PDF documents with UsePDF. Our versatile online converter allows you to process single or multiple files instantly—no software installation or registration required. Whether you need to save a PDF page as an image for easy sharing or convert photo to PDF for a professional portfolio, our tool handles it all with speed and precision. We support popular formats like JPG, PNG, and JPEG, ensuring your files look perfect every time. Experience the fastest way to convert pdf to jpg free and securely on any device, including mobile, tablet, and desktop. Try our efficient image to pdf and photo to pdf solution today for a seamless document management experience.";

    return (
        <PdfToJpgClient
            seoContent={seoContent}
            title="PDF to JPG & Image to PDF Converter Online – Free & Fast"
            subtitle={introText}
            steps={steps}
        />
    );
}
