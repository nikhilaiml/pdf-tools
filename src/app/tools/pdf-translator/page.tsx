/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import PdfTranslatorClient from './PdfTranslatorClient';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Languages, ArrowRight, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: 'PDF Translator Online Free – Translate PDF Text Easily',
    description: 'Translate PDF text online free. Extract text from your PDF and translate to any language with Google Translate. No signup required.',
    keywords: [
        'pdf translator',
        'translate pdf',
        'pdf translate online',
        'translate pdf to english',
        'pdf translator online free',
        'translate pdf document',
        'pdf translation tool',
        'pdf language translator',
        'free pdf translator'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-translator',
    },
    openGraph: {
        title: 'PDF Translator Online Free – Translate PDF Documents',
        description: 'Translate PDF documents online free. Extract and translate text instantly.',
        url: 'https://www.usepdf.in/tools/pdf-translator',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PDF Translator – Translate PDF Online Free',
        description: 'Free PDF translator. Extract text and translate to any language.',
    },
    robots: { index: true, follow: true }
};

export default function PdfTranslatorPage() {
    const faqs = [
        {
            name: "Is the PDF translator free?",
            acceptedAnswer: { text: "Yes, our PDF translator is completely free. Extract text and translate unlimited PDFs without cost." }
        },
        {
            name: "What languages are supported?",
            acceptedAnswer: { text: "We integrate with Google Translate, which supports 100+ languages. Extract text and translate to any language Google Translate offers." }
        },
        {
            name: "Is signup required?",
            acceptedAnswer: { text: "No. Upload your PDF and translate text instantly without creating an account." }
        },
        {
            name: "How does it work?",
            acceptedAnswer: { text: "Our tool extracts text from your PDF, then you can copy it or open Google Translate directly to translate the content to your desired language." }
        },
        {
            name: "Does it work on scanned PDFs?",
            acceptedAnswer: { text: "This tool works best with text-based PDFs where text is selectable. Scanned image-only PDFs may not produce results without OCR." }
        },
        {
            name: "Is my document safe?",
            acceptedAnswer: { text: "Yes. Your PDF is processed locally in your browser. We never upload or store your documents." }
        }
    ];

    const howToSteps = [
        { name: "Upload PDF", text: "Select or drag and drop your PDF file to extract text for translation." },
        { name: "Extract Text", text: "Our tool automatically extracts all selectable text from your PDF document." },
        { name: "Translate", text: "Copy the text or click 'Open Google Translate' for instant translation to any language." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "PDF Translator Online Free",
                "description": "Translate PDF documents online free. Extract text and translate to any language.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/pdf-translator",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            },
            {
                "@type": "HowTo",
                "name": "How to Translate PDF Online Free",
                "totalTime": "PT2M",
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
                    { "@type": "ListItem", "position": 3, "name": "PDF Translator", "item": "https://www.usepdf.in/tools/pdf-translator" }
                ]
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Need to <strong>translate a PDF</strong>? Our free <strong>PDF translator</strong> extracts
                    text from your documents and lets you translate to 100+ languages via Google Translate.
                    No signup. No installation. Just fast, easy PDF translation.
                </p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a PDF Translator?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    A <strong>PDF translator</strong> extracts the text content from your PDF documents and makes
                    it easy to translate into any language. Since PDFs are not directly editable, translation
                    requires first extracting the text, then using a translation service.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our tool handles the text extraction step and integrates directly with Google Translate.
                    Simply upload your PDF, and you're one click away from translation.
                </p>
            </section>

            <section className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Use a PDF Translator?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Translate foreign-language documents",
                        "Understand contracts in other languages",
                        "Study materials in your native language",
                        "Translate research papers and articles",
                        "Read international business documents",
                        "Access content in 100+ languages"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Translate PDF Online Free</h2>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{step.name}</h3>
                                <p className="text-slate-600 text-sm">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-slate-500 mt-4 text-center">✓ No signup ✓ No watermark ✓ 100+ languages</p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Languages className="w-6 h-6 text-blue-500" />, title: "100+ Languages", desc: "Translate via Google Translate" },
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free", desc: "No hidden costs or limits" },
                        { icon: <Globe className="w-6 h-6 text-green-500" />, title: "Google Translate", desc: "Direct integration for accuracy" },
                        { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "Instant Extraction", desc: "Text extracted in seconds" },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "100% Private", desc: "Files processed in your browser" },
                        { icon: <Smartphone className="w-6 h-6 text-indigo-500" />, title: "All Devices", desc: "Works on mobile and desktop" }
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

            <section className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "International Business", desc: "Translate contracts, proposals, and correspondence from foreign partners." },
                        { title: "Academic Research", desc: "Read and translate journal articles and papers in other languages." },
                        { title: "Travel & Immigration", desc: "Translate official documents, certificates, and forms." },
                        { title: "Language Learning", desc: "Practice reading comprehension by comparing original and translated text." }
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
                    Your PDF is processed entirely in your browser. We never upload, store, or access your
                    documents. When using Google Translate, only the extracted text is sent to Google's translation
                    service—your original PDF stays on your device.
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

            <section className="bg-gradient-to-r from-sky-600 to-cyan-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Translate Your PDF Now</h2>
                <p className="text-sky-100 mb-6 max-w-2xl mx-auto">
                    Free PDF translation with 100+ languages. No signup needed. Upload and translate instantly.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 bg-white text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-50 transition-colors shadow-lg">
                    Translate PDF – It's Free <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/pdf-to-text" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF to Text</Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF to Word</Link>
                    <Link href="/tools/pdf-to-audio" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF to Audio</Link>
                    <Link href="/tools/chat-with-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Chat with PDF</Link>
                    <Link href="/tools/pdf-summary" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF Summary</Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Compress PDF</Link>
                </div>
            </section>
        </div>
    );

    return <PdfTranslatorClient seoContent={seoContent} />;
}
