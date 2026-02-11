/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import WordToPdfClient from './WordToPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Word to PDF Online Free – Convert DOCX to PDF Instantly',
    description: 'Convert Word to PDF online free. Turn your DOC and DOCX files into PDF documents instantly. No signup, no watermark. Fast Word to PDF converter.',
    keywords: [
        'word to pdf',
        'convert word to pdf',
        'word to pdf converter',
        'docx to pdf',
        'doc to pdf',
        'word to pdf online free',
        'convert docx to pdf',
        'word document to pdf',
        'free word to pdf converter'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/word-to-pdf',
    },
    openGraph: {
        title: 'Word to PDF Online Free – Convert DOCX to PDF',
        description: 'Convert Word to PDF online free. No signup required.',
        url: 'https://www.usepdf.in/tools/word-to-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Word to PDF – Convert DOCX to PDF Free',
        description: 'Free Word to PDF converter. Convert documents instantly.',
    },
    robots: { index: true, follow: true }
};

export default function WordToPdfPage() {
    const faqs = [
        {
            name: "Is Word to PDF conversion free?",
            acceptedAnswer: { text: "Yes, our Word to PDF converter is 100% free. Convert unlimited documents without any cost." }
        },
        {
            name: "What Word formats are supported?",
            acceptedAnswer: { text: "We support .docx files. Upload your Word document and convert it to PDF instantly." }
        },
        {
            name: "Is signup required?",
            acceptedAnswer: { text: "No signup or registration needed. Upload your Word document and get PDF immediately." }
        },
        {
            name: "Does it preserve formatting?",
            acceptedAnswer: { text: "Our converter renders your document content into a clean PDF format. Complex formatting may vary slightly." }
        },
        {
            name: "Is my document safe?",
            acceptedAnswer: { text: "Yes. Your files are processed securely and auto-deleted. We use SSL encryption for all uploads." }
        },
        {
            name: "Does it work on mobile?",
            acceptedAnswer: { text: "Absolutely. Our tool works on all devices—Android, iPhone, tablet, and desktop browsers." }
        }
    ];

    const howToSteps = [
        { name: "Upload Word Document", text: "Select your .docx file from your device or drag and drop." },
        { name: "Convert to PDF", text: "Click convert and our tool transforms your Word document to PDF format." },
        { name: "Download PDF", text: "Download your converted PDF file instantly—ready to share or print." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Word to PDF Converter Online Free",
                "description": "Convert Word documents to PDF online free. No signup or watermark.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/word-to-pdf",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            },
            {
                "@type": "HowTo",
                "name": "How to Convert Word to PDF Online Free",
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
                    { "@type": "ListItem", "position": 3, "name": "Word to PDF", "item": "https://www.usepdf.in/tools/word-to-pdf" }
                ]
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Need to <strong>convert Word to PDF</strong>? Our free online converter turns your DOCX
                    files into professional PDF documents in seconds. No signup. No watermark. Just fast,
                    reliable <strong>Word to PDF conversion</strong>.
                </p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Word to PDF Converter?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>Word to PDF converter</strong> transforms your Microsoft Word documents (.docx) into
                    PDF format. PDFs are universally readable, print-ready, and cannot be easily edited—making
                    them ideal for sharing documents professionally.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our <strong>online Word to PDF</strong> tool works directly in your browser. Upload your
                    document, convert with one click, and download the PDF instantly.
                </p>
            </section>

            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Convert Word to PDF?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Universal compatibility across devices",
                        "Professional document presentation",
                        "Prevent unwanted edits to content",
                        "Print-ready formatting preserved",
                        "Smaller file sizes for sharing",
                        "Consistent appearance everywhere"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Convert Word to PDF Online Free</h2>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{step.name}</h3>
                                <p className="text-slate-600 text-sm">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-slate-500 mt-4 text-center">✓ No signup ✓ No watermark ✓ 100% free</p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free", desc: "No hidden costs or limits" },
                        { icon: <FileText className="w-6 h-6 text-blue-500" />, title: "DOCX Support", desc: "Upload Word (.docx) documents" },
                        { icon: <Zap className="w-6 h-6 text-green-500" />, title: "Fast Conversion", desc: "Convert in seconds" },
                        { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "No File Size Limit", desc: "Process documents of any size" },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "Secure & Private", desc: "Files auto-delete after processing" },
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

            <section className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Resumes & Cover Letters", desc: "Convert your resume to PDF for professional job applications." },
                        { title: "Business Documents", desc: "Share proposals, contracts, and reports as tamper-proof PDFs." },
                        { title: "Academic Papers", desc: "Submit essays, dissertations, and assignments in PDF format." },
                        { title: "Invoices & Letters", desc: "Create professional invoices and business correspondence." }
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
                    <Shield className="w-6 h-6 text-green-600" /> Security & Privacy
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    Your documents are encrypted with SSL during upload and processed securely. We never access,
                    share, or store your files. Your conversion is completely private and confidential.
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

            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Convert Word to PDF Now</h2>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    Fast, free, and secure Word to PDF conversion. No signup or software installation needed.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors shadow-lg">
                    Convert Word to PDF – It's Free <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF to Word</Link>
                    <Link href="/tools/excel-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Excel to PDF</Link>
                    <Link href="/tools/ppt-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PPT to PDF</Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Compress PDF</Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Merge PDF</Link>
                    <Link href="/tools/html-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">HTML to PDF</Link>
                </div>
            </section>
        </div>
    );

    return <WordToPdfClient seoContent={seoContent} />;
}
