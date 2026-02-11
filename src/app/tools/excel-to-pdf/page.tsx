/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import ExcelToPdfClient from './ExcelToPdfClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, FileSpreadsheet, ArrowRight, Table } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Excel to PDF Online Free – Convert XLS/XLSX to PDF Instantly',
    description: 'Convert Excel to PDF online free. Turn your XLS and XLSX spreadsheets into PDF documents instantly. No signup, no watermark. Fast Excel to PDF converter.',
    keywords: [
        'excel to pdf',
        'convert excel to pdf',
        'excel to pdf converter',
        'xls to pdf',
        'xlsx to pdf',
        'excel to pdf online free',
        'spreadsheet to pdf',
        'convert spreadsheet to pdf',
        'online excel to pdf converter'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/excel-to-pdf',
    },
    openGraph: {
        title: 'Excel to PDF Online Free – Convert Spreadsheets to PDF',
        description: 'Convert Excel to PDF online free. No signup required.',
        url: 'https://www.usepdf.in/tools/excel-to-pdf',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Excel to PDF – Convert XLS/XLSX to PDF Free',
        description: 'Free Excel to PDF converter. Convert spreadsheets instantly.',
    },
    robots: { index: true, follow: true }
};

export default function ExcelToPdfPage() {
    const faqs = [
        {
            name: "Is Excel to PDF conversion free?",
            acceptedAnswer: { text: "Yes, our Excel to PDF converter is 100% free. Convert unlimited spreadsheets without any cost." }
        },
        {
            name: "What Excel formats are supported?",
            acceptedAnswer: { text: "We support .xls and .xlsx file formats. Simply upload your spreadsheet and convert." }
        },
        {
            name: "Is signup required?",
            acceptedAnswer: { text: "No. Convert Excel to PDF instantly without creating an account or signing up." }
        },
        {
            name: "Does it preserve formatting?",
            acceptedAnswer: { text: "Our converter renders your spreadsheet data into a clean, readable PDF format with table structure preserved." }
        },
        {
            name: "Is my file safe?",
            acceptedAnswer: { text: "Yes. Your files are processed securely and deleted automatically. We never store your data." }
        },
        {
            name: "Can I convert on mobile?",
            acceptedAnswer: { text: "Absolutely. Our tool works on all devices including smartphones, tablets, and desktop computers." }
        }
    ];

    const howToSteps = [
        { name: "Upload Excel File", text: "Select your .xls or .xlsx spreadsheet from your device." },
        { name: "Preview & Convert", text: "Preview how your spreadsheet will look in PDF format." },
        { name: "Download PDF", text: "Download your converted PDF file instantly—ready to share." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "Excel to PDF Converter Online Free",
                "description": "Convert Excel spreadsheets to PDF online free. No signup or watermark.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/excel-to-pdf",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            },
            {
                "@type": "HowTo",
                "name": "How to Convert Excel to PDF Online Free",
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
                    { "@type": "ListItem", "position": 3, "name": "Excel to PDF", "item": "https://www.usepdf.in/tools/excel-to-pdf" }
                ]
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Need to <strong>convert Excel to PDF</strong>? Our free online tool transforms your XLS and XLSX
                    spreadsheets into professional PDF documents in seconds. No signup. No watermark. Just fast,
                    reliable conversion.
                </p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is an Excel to PDF Converter?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    An <strong>Excel to PDF converter</strong> transforms your spreadsheet files (.xls, .xlsx) into
                    portable PDF documents. This preserves your data layout and makes it easy to share, print,
                    or archive your spreadsheets in a universally readable format.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our <strong>online Excel to PDF</strong> tool works directly in your browser. Upload your
                    spreadsheet, preview the output, and download a clean PDF instantly.
                </p>
            </section>

            <section className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Convert Excel to PDF?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Share spreadsheets without editing risks",
                        "Professional presentation for clients",
                        "Print-ready documents with clean layout",
                        "Archive data in a universal format",
                        "Protect formulas from modification",
                        "Consistent viewing across all devices"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Convert Excel to PDF Online Free</h2>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
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
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free", desc: "No hidden costs or premium plans" },
                        { icon: <FileSpreadsheet className="w-6 h-6 text-green-500" />, title: "XLS & XLSX", desc: "Supports all Excel formats" },
                        { icon: <Table className="w-6 h-6 text-blue-500" />, title: "Table Layout", desc: "Clean table rendering in PDF" },
                        { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "Fast Conversion", desc: "Convert in seconds" },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "Secure & Private", desc: "Files auto-delete after processing" },
                        { icon: <Smartphone className="w-6 h-6 text-indigo-500" />, title: "All Devices", desc: "Mobile, tablet, and desktop" }
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

            <section className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Financial Reports", desc: "Convert budgets, invoices, and financial statements to PDF for sharing with stakeholders." },
                        { title: "Data Archives", desc: "Save spreadsheet data as PDF for long-term archival in a universal format." },
                        { title: "Client Deliverables", desc: "Create professional PDF reports from Excel data for client presentations." },
                        { title: "Print-Ready Docs", desc: "Convert spreadsheets to PDF for clean, consistent printing." }
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
                    <Shield className="w-6 h-6 text-green-600" /> Is It Safe?
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    Yes. All files are encrypted using SSL and processed securely. We never access, share, or store your
                    spreadsheets. Your conversion is completely private and confidential.
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

            <section className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Convert Your Excel Files Now</h2>
                <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                    Fast, free, and secure Excel to PDF conversion. No signup required.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg">
                    Convert Excel to PDF – It's Free <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/word-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Word to PDF</Link>
                    <Link href="/tools/pdf-to-excel" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF to Excel</Link>
                    <Link href="/tools/ppt-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PPT to PDF</Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Compress PDF</Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Merge PDF</Link>
                    <Link href="/tools/html-to-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">HTML to PDF</Link>
                </div>
            </section>
        </div>
    );

    return <ExcelToPdfClient seoContent={seoContent} />;
}
