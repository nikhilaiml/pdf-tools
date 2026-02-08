/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import PdfToJpgClient from './PdfToJpgClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Lock, Image as ImageIcon, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF to JPG Online Free – Convert PDF Pages to Images Instantly',
    description: 'Convert PDF to JPG online free. No signup, no watermark. Extract images from PDF for government forms, assignments & sharing. Fast, secure PDF to image converter.',
    keywords: [
        'pdf to jpg online free',
        'convert pdf to jpg online free',
        'pdf to image converter',
        'pdf pages to jpg',
        'pdf to jpg without watermark',
        'pdf to jpg no signup',
        'extract images from pdf',
        'pdf file to jpg format',
        'online pdf image converter',
        'secure pdf to jpg tool',
        'pdf to jpg for government forms',
        'pdf to jpg for students'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-to-jpg',
    },
    openGraph: {
        title: 'PDF to JPG Online Free – Convert PDF Pages to Images Instantly',
        description: 'Convert PDF to JPG online free. No signup, no watermark. Fast, secure PDF to image converter.',
        url: 'https://www.usepdf.in/tools/pdf-to-jpg',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PDF to JPG Online Free – Convert PDF Pages to Images',
        description: 'Convert PDF to JPG online free. No signup, no watermark. Secure PDF image converter.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function PdfToJpgPage() {
    // FAQs
    const faqs = [
        {
            name: "Is PDF to JPG converter free?",
            acceptedAnswer: {
                text: "Yes, our PDF to JPG online free tool is 100% free. There are no hidden charges, subscriptions, or limits. Convert unlimited PDFs to JPG images without paying anything."
            }
        },
        {
            name: "Will converting PDF to JPG reduce image quality?",
            acceptedAnswer: {
                text: "No, our tool maintains original resolution. We use high-quality rendering to ensure your JPG images look exactly like the original PDF pages. Perfect for printing and official use."
            }
        },
        {
            name: "Do I need to create an account or login?",
            acceptedAnswer: {
                text: "No signup required. Simply upload your PDF and download JPG images instantly. We respect your time and privacy with our pdf to jpg no signup approach."
            }
        },
        {
            name: "Can I convert multiple PDF pages to JPG?",
            acceptedAnswer: {
                text: "Yes, our tool converts all pages from your PDF into separate JPG images. You can download them individually or as a ZIP file. Great for multi-page documents."
            }
        },
        {
            name: "Does this tool work on mobile phones?",
            acceptedAnswer: {
                text: "Absolutely! Our pdf to image converter works perfectly on Android phones, iPhones, tablets, and laptops. No app installation needed—works directly in your browser."
            }
        },
        {
            name: "Is my PDF data safe when converting online?",
            acceptedAnswer: {
                text: "Your security is our priority. We use SSL encryption for all transfers. Files are processed locally and automatically deleted from our servers within one hour."
            }
        },
        {
            name: "Can I use this for government form submissions?",
            acceptedAnswer: {
                text: "Yes, many users convert PDF to JPG for government forms that only accept image uploads. Our tool produces clean, high-resolution JPG files accepted by official and government portals worldwide."
            }
        }
    ];

    // How-To Steps
    const howToSteps = [
        {
            name: "Upload Your PDF File",
            text: "Click the upload button or drag and drop your PDF document. Our tool accepts all standard PDF files."
        },
        {
            name: "Automatic Conversion",
            text: "Our secure PDF to image converter automatically converts each page into a high-quality JPG image. No manual settings needed."
        },
        {
            name: "Download JPG Images",
            text: "Download your JPG images individually or as a ZIP file. All files are pdf to jpg without watermark and ready for use."
        }
    ];

    // JSON-LD Schema - SoftwareApplication + HowTo + FAQPage
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "PDF to JPG Converter Online Free",
                "description": "Convert PDF to JPG online free. Extract images from PDF pages instantly without watermark or signup.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/pdf-to-jpg",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR"
                }
            },
            {
                "@type": "HowTo",
                "name": "How to Convert PDF to JPG Online Free",
                "description": "Step-by-step guide to convert pdf pages to jpg images online without watermark or signup.",
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
                        "name": "PDF to JPG",
                        "item": "https://www.usepdf.in/tools/pdf-to-jpg"
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
                    Need a <strong>free online PDF to JPG converter</strong>? Whether you're a student uploading assignments,
                    an office professional sharing documents, or someone filling government forms—our <strong>pdf to image converter</strong> makes
                    it simple. No signup. No watermark. Just fast, secure conversion.
                </p>
                <p className="text-sm text-slate-500 mt-3">
                    Trusted by students, offices, and government form users worldwide.
                </p>
            </section>

            {/* What is PDF to JPG Converter */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is PDF to JPG Converter?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>PDF to JPG converter</strong> transforms your PDF document pages into JPG image files.
                    This is useful when websites only accept image uploads, or when you want to share individual pages easily.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    JPG format works better than PDF for WhatsApp sharing, social media uploads, and inserting into presentations.
                    Our <strong>online pdf image converter</strong> handles this conversion instantly in your browser.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Common use cases: uploading documents to government portals, sharing certificates on job sites,
                    and sending exam results to colleges that need image format.
                </p>
            </section>

            {/* Why Convert PDF to JPG */}
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Convert PDF to JPG?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Upload on websites that accept images only",
                        "Share easily on WhatsApp & email",
                        "Submit to government & exam portals",
                        "View documents on any mobile device",
                        "Insert pages into presentations",
                        "Print individual pages clearly"
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Convert PDF to JPG Online Free</h2>
                <p className="text-slate-600 mb-6">
                    Follow these simple steps to <strong>convert PDF pages into JPG images online</strong> in seconds:
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
                    ✓ No signup required &nbsp; ✓ No watermark added &nbsp; ✓ 100% free
                </p>
            </section>

            {/* Features */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF PDF to JPG Tool</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free Forever", desc: "No hidden costs or premium limits" },
                        { icon: <ImageIcon className="w-6 h-6 text-blue-500" />, title: "High-Quality Output", desc: "Crystal clear JPG images" },
                        { icon: <Zap className="w-6 h-6 text-purple-500" />, title: "Fast Conversion", desc: "Results in seconds" },
                        { icon: <Shield className="w-6 h-6 text-green-500" />, title: "Secure & Private", desc: "Files auto-delete in 1 hour" },
                        { icon: <Smartphone className="w-6 h-6 text-orange-500" />, title: "Mobile Friendly", desc: "Works on phone & laptop" },
                        { icon: <Lock className="w-6 h-6 text-red-500" />, title: "No Watermark", desc: "Clean images every time" }
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
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common PDF to JPG Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Students & Academic Use", desc: "Convert PDF assignments to JPG for uploading on college portals. Many universities accept only image formats for online submissions." },
                        { title: "Government Document Uploads", desc: "Many official and government portals require JPG images for document submissions. Convert your PDFs easily." },
                        { title: "Office & Business Presentations", desc: "Extract specific PDF pages as images to insert into PowerPoint or Word documents for professional presentations." },
                        { title: "Printing & Scanning Work", desc: "Convert scanned PDF documents to JPG for easy printing at local cyber cafes that prefer image formats." }
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
                    Is It Safe to Convert PDF to JPG Online?
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Absolutely! Your security is our top priority. We use <strong>SSL encryption</strong> for all file transfers,
                    ensuring your documents are protected during upload and download.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Our <strong>secure pdf to jpg tool</strong> processes files directly in your browser when possible.
                    Any server-side processing is done on encrypted servers, and all files are automatically deleted within one hour.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    We never share, sell, or access your documents. Your privacy is guaranteed with our privacy-first approach.
                </p>
            </section>

            {/* Comparison Table */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">PDF vs JPG – Quick Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100">
                                <th className="p-4 font-semibold text-slate-900 border-b">Feature</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">PDF</th>
                                <th className="p-4 font-semibold text-slate-900 border-b">JPG</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b">
                                <td className="p-4 font-medium">File Size</td>
                                <td className="p-4">Larger (multi-page)</td>
                                <td className="p-4">Smaller per page</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">Editability</td>
                                <td className="p-4">Text editable (with tools)</td>
                                <td className="p-4">Image only</td>
                            </tr>
                            <tr className="border-b">
                                <td className="p-4 font-medium">Compatibility</td>
                                <td className="p-4">Needs PDF reader</td>
                                <td className="p-4">Universal (any device)</td>
                            </tr>
                            <tr className="border-b bg-slate-50">
                                <td className="p-4 font-medium">WhatsApp Sharing</td>
                                <td className="p-4">Opens as file</td>
                                <td className="p-4">Shows preview instantly</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-medium">Best Use Case</td>
                                <td className="p-4">Multi-page documents</td>
                                <td className="p-4">Single page sharing, uploads</td>
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

            {/* Conclusion / CTA */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Ready to Convert Your PDF to JPG?</h2>
                <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
                    Join thousands of users worldwide who trust UsePDF for fast, free, and secure PDF conversions.
                    No signup. No watermark. Just instant results.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                    Convert PDF to JPG Now
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Why UsePDF is Better - Competitor Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why UsePDF is Better Than Other PDF to JPG Tools?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { title: "No Ads or Popups", desc: "Clean interface without annoying advertisements" },
                        { title: "No Forced Signup", desc: "Start converting immediately without creating accounts" },
                        { title: "Faster Conversion", desc: "Optimized for speed with instant results" },
                        { title: "Optimized for All Devices", desc: "Works seamlessly on any device and internet connection" }
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

            {/* Internal Links */}
            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/jpg-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert JPG to PDF Online
                    </Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Compress PDF Online Free
                    </Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Merge PDF Files Online
                    </Link>
                    <Link href="/tools/split-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Split PDF Pages Online
                    </Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Convert PDF to Word Online
                    </Link>
                    <Link href="/tools/image-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">
                        Image to PDF Converter
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <PdfToJpgClient seoContent={seoContent} />
    );
}
