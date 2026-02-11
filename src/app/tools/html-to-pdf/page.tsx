/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import HtmlToPdfClient from './HtmlToPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Code, ArrowRight, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'HTML to PDF Online Free – Convert HTML & Websites to PDF',
    description: 'Convert HTML to PDF online free. Turn raw HTML code or website URLs into PDF documents instantly. No signup, no watermark.',
    keywords: [
        'html to pdf',
        'convert html to pdf',
        'html to pdf converter',
        'website to pdf',
        'url to pdf',
        'html to pdf online free',
        'webpage to pdf',
        'convert website to pdf',
        'save webpage as pdf'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/html-to-pdf',
    },
    openGraph: {
        title: 'HTML to PDF Online Free – Convert Websites & HTML to PDF',
        description: 'Convert HTML & websites to PDF online free. No signup required.',
        url: 'https://www.usepdf.in/tools/html-to-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HTML to PDF – Convert Code & URLs to PDF Free',
        description: 'Free HTML to PDF converter. Convert code and websites instantly.',
    },
    robots: { index: true, follow: true }
};

export default function HtmlToPdfPage() {
    const faqs = [
        {
            name: "Is HTML to PDF conversion free?",
            acceptedAnswer: { text: "Yes, our HTML to PDF converter is 100% free. Convert unlimited HTML pages and URLs without cost." }
        },
        {
            name: "Can I convert a website URL to PDF?",
            acceptedAnswer: { text: "Yes! Switch to the 'From URL' tab, paste any website URL, and our tool captures the full page as a PDF." }
        },
        {
            name: "Does it support CSS styling?",
            acceptedAnswer: { text: "Yes, our converter renders HTML with CSS styling. For the URL option, it captures the fully rendered page including styles." }
        },
        {
            name: "Is signup required?",
            acceptedAnswer: { text: "No. Convert HTML to PDF instantly without creating an account." }
        },
        {
            name: "Is my code safe?",
            acceptedAnswer: { text: "Yes. HTML code is processed locally in your browser. URL conversions use secure server-side rendering." }
        },
        {
            name: "Does it work on mobile?",
            acceptedAnswer: { text: "Yes, our tool works on all devices including phones, tablets, and desktop computers." }
        }
    ];

    const howToSteps = [
        { name: "Enter HTML or URL", text: "Paste your raw HTML code or enter a website URL to convert." },
        { name: "Preview the Output", text: "See a live preview of your HTML content before converting." },
        { name: "Download PDF", text: "Click download to save the rendered output as a PDF document." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "HTML to PDF Converter Online Free",
                "description": "Convert HTML code and website URLs to PDF online free.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/html-to-pdf",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            },
            {
                "@type": "HowTo",
                "name": "How to Convert HTML to PDF Online Free",
                "totalTime": "PT1M",
                "step": howToSteps.map((step, i) => ({
                    "@type": "HowToStep", "position": i + 1, "name": step.name, "text": step.text
                }))
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question", "name": faq.name,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.acceptedAnswer.text }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.usepdf.in" },
                    { "@type": "ListItem", "position": 2, "name": "Tools", "item": "https://www.usepdf.in/tools" },
                    { "@type": "ListItem", "position": 3, "name": "HTML to PDF", "item": "https://www.usepdf.in/tools/html-to-pdf" }
                ]
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Need to <strong>convert HTML to PDF</strong>? Our free tool turns raw HTML code or live
                    website URLs into high-quality PDF documents. Paste code, enter a URL, preview, and download.
                    No signup required.
                </p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is an HTML to PDF Converter?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    An <strong>HTML to PDF converter</strong> renders HTML markup into a downloadable PDF document.
                    This is useful for saving web pages, generating reports from code, or creating printable
                    versions of online content.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our tool offers two modes: paste raw HTML code for instant rendering, or enter any
                    <strong> website URL</strong> to capture the full page as a PDF using server-side rendering.
                </p>
            </section>

            <section className="bg-gradient-to-br from-fuchsia-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Convert HTML to PDF?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Save web pages for offline reading",
                        "Create PDF reports from HTML templates",
                        "Archive website content permanently",
                        "Share printable versions of pages",
                        "Capture web receipts and invoices",
                        "Generate documents from code"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Convert HTML to PDF Online Free</h2>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{step.name}</h3>
                                <p className="text-slate-600 text-sm">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Code className="w-6 h-6 text-blue-500" />, title: "Raw HTML Mode", desc: "Paste HTML code and convert directly" },
                        { icon: <Globe className="w-6 h-6 text-green-500" />, title: "URL to PDF", desc: "Capture any website as PDF" },
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Live Preview", desc: "See rendered output before download" },
                        { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "100% Free", desc: "No hidden costs or limitations" },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "Secure", desc: "SSL encryption and private processing" },
                        { icon: <Smartphone className="w-6 h-6 text-indigo-500" />, title: "All Devices", desc: "Works on mobile, tablet, desktop" }
                    ].map((f, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="p-2 bg-white rounded-lg shadow-sm">{f.icon}</div>
                            <div>
                                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                                <p className="text-slate-600 text-sm">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Developers", desc: "Generate PDF reports from HTML templates in development workflows." },
                        { title: "Researchers", desc: "Save web articles and references as PDF for offline access." },
                        { title: "Businesses", desc: "Archive web receipts, invoices, and web-based documents." },
                        { title: "Students", desc: "Save online study materials and lecture pages as PDFs." }
                    ].map((uc, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                            <h3 className="font-semibold text-slate-900 mb-2">{uc.title}</h3>
                            <p className="text-slate-600 text-sm">{uc.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-green-600" /> Privacy & Security
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    Raw HTML conversions happen entirely in your browser. URL conversions use encrypted server-side
                    processing. We never store your content and all temporary data is automatically deleted.
                </p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-indigo-600" /> Frequently Asked Questions
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

            <section className="bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Convert HTML to PDF Now</h2>
                <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                    Free, instant HTML and website to PDF conversion. No signup needed.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg">
                    Convert HTML to PDF – It's Free <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/word-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Word to PDF</Link>
                    <Link href="/tools/excel-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Excel to PDF</Link>
                    <Link href="/tools/image-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Image to PDF</Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Compress PDF</Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Merge PDF</Link>
                    <Link href="/tools/pdf-to-text" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF to Text</Link>
                </div>
            </section>
        </div>
    );

    return <HtmlToPdfClient seoContent={seoContent} />;
}
