/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import BatchImageToPdfClient from './BatchImageToPdfClient';
import Link from 'next/link';
import { Check, Shield, Zap, Globe, Smartphone, FileText, Image as ImageIcon, HelpCircle, Layers } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Batch Images to PDF Online – Convert Multiple Images into One PDF Free',
    description: 'Convert multiple images (JPG, PNG) into a single PDF file online for free. Batch upload photos, combine them in one document, and download instantly.',
    keywords: [
        'batch images to pdf',
        'multiple images to pdf',
        'convert images to pdf',
        'combine images into pdf',
        'many images to pdf',
        'photo to pdf',
        'jpg to pdf',
        'png to pdf',
        'images to pdf online',
        'convert multiple photos to pdf',
        'merge images into pdf'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/batch-images-to-pdf',
    },
    openGraph: {
        title: 'Batch Convert Images to PDF – Multiple Images | UsePDF',
        description: 'Convert multiple images to PDF files in one go. Bulk processing for JPG, PNG, and other image formats.',
        url: 'https://www.usepdf.in/tools/batch-images-to-pdf',
        type: 'website',
    }
};

export default function BatchImageToPdfPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I convert multiple images to PDF online?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply upload all your image files to UsePDF, arrange them in your preferred order, and click convert to merge them into a single PDF document."
                }
            },
            {
                "@type": "Question",
                "name": "Is batch images to PDF conversion free?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our tool is 100% free. You can convert as many photos and images as you need without any limits or hidden costs."
                }
            },
            {
                "@type": "Question",
                "name": "Can I arrange images before creating the PDF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. After uploading, you can easily drag and drop your images to sort them exactly how you want them to appear in the final PDF."
                }
            },
            {
                "@type": "Question",
                "name": "Which image formats are supported?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We support the most popular image formats, including JPG and PNG, ensuring high-quality conversion for your photos and scans."
                }
            },
            {
                "@type": "Question",
                "name": "Is it safe to upload my images?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, your security is guaranteed. All uploaded files are processed securely and are automatically deleted from our servers post-conversion."
                }
            }
        ]
    };

    const steps = [
        {
            title: "Upload multiple images",
            description: "Select all the JPG or PNG files you want to combine from your device."
        },
        {
            title: "Arrange images in order",
            description: "Drag and drop the thumbnails to set the sequence for your PDF pages."
        },
        {
            title: "Convert images into one PDF",
            description: "Click the convert button to merge all your photos into a single document."
        },
        {
            title: "Download the final PDF file",
            description: "Save your new combined PDF instantly to your computer or phone."
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Convert Multiple Images into One PDF</h2>
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Features of Our Batch Images to PDF Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "Batch to Single PDF", desc: "Combine many images into one file.", icon: Layers },
                        { title: "Bulk Upload Support", desc: "Select multiple photos at once.", icon: ImageIcon },
                        { title: "Drag & Drop Ordering", desc: "Arrange pages exactly how you want.", icon: FileText },
                        { title: "JPG & PNG Support", desc: "Works with common image formats.", icon: Globe },
                        { title: "High-Quality Output", desc: "Crisp images in your final PDF.", icon: Check },
                        { title: "Fast & Secure", desc: "Process files quickly and privately.", icon: Zap },
                        { title: "No Watermark", desc: "Professional results with no branding.", icon: Shield },
                        { title: "No Registration", desc: "Start converting immediately.", icon: HelpCircle },
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
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Use UsePDF for Batch Image to PDF Conversion</h2>
                    <p className="text-slate-600 leading-relaxed mb-6">
                        UsePDF offers the most efficient way to manage your digital photo collections and documents. Our tool excels at <strong>batch images to pdf</strong> conversion, allowing you to organize scattered files into a neat, shareable document. Whether you need to <strong>convert multiple photos to pdf</strong> for a project or archive receipts, our platform provides a secure, fast, and user-friendly experience on any device. We prioritize your privacy, ensuring all your files are handled safely and deleted automatically.
                    </p>
                    <ul className="space-y-3">
                        {["Secure Batch Processing", "Easy File Organization", "Universal Compatibility"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-500" />
                                <span className="text-slate-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Convert Multiple Images to PDF Without Losing Quality</h2>
                    <p className="text-slate-600 leading-relaxed">
                        We understand that visual clarity is crucial. Our converter is engineered to preserve the original resolution and color fidelity of your uploads. When you combine images into a PDF, you can be confident that your photos, scanned documents, and design mockups will look just as sharp in the final document as they did in the source files.
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
                    <Link href="/tools/protect-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Protect PDF
                    </Link>
                    <Link href="/tools/rearrange-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Rearrange Pages
                    </Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        Merge PDF
                    </Link>
                    <Link href="/" className="px-5 py-2.5 bg-slate-50 text-slate-700 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors font-medium">
                        All PDF Tools
                    </Link>
                </div>
            </section>
        </div>
    );

    const introText = "Effortlessly combine your digital memories and documents with UsePDF's batch image converter. Our tool allows you to upload batch images to pdf in seconds, merging multiple JPG or PNG files into a single, organized PDF document. Whether you are compiling a photo album, creating a presentation portfolio, or archiving receipts, we make it simple to convert multiple photos to pdf online. There is no software to install and no registration required. Enjoy a free, fast, and secure service that lets you combine images into pdf files directly from your browser, keeping your workflow smooth and efficient on any device.";

    return (
        <BatchImageToPdfClient
            seoContent={seoContent}
            title="Batch Images to PDF Online – Convert Multiple Images into One PDF Free"
            subtitle={introText}
            steps={steps}
        />
    );
}
