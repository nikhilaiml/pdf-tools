/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { HelpCircle, CheckCircle, Shield, Zap, Smartphone, Volume2, ArrowRight, Headphones } from 'lucide-react';

const PdfToAudioClient = dynamic(() => import('./PdfToAudioClient'));

export const metadata: Metadata = {
    title: 'PDF to Audio Online Free – Convert PDF to Speech (TTS)',
    description: 'Convert PDF to audio free online. Listen to your PDF documents using text-to-speech. No signup, no download. Accessibility-friendly PDF reader.',
    keywords: [
        'pdf to audio',
        'pdf to speech',
        'pdf text to speech',
        'convert pdf to audio',
        'pdf reader online',
        'listen to pdf',
        'pdf tts',
        'read pdf aloud',
        'pdf to mp3',
        'text to speech pdf'
    ],
    alternates: {
        canonical: 'https://www.usepdf.in/tools/pdf-to-audio',
    },
    openGraph: {
        title: 'PDF to Audio Online Free – Convert PDF to Speech',
        description: 'Listen to your PDF documents. Free PDF to speech converter. No signup required.',
        url: 'https://www.usepdf.in/tools/pdf-to-audio',
        type: 'website',
        siteName: 'UsePDF',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PDF to Audio – Listen to PDFs Online Free',
        description: 'Convert PDF to speech instantly. Free online text-to-speech for PDF documents.',
    },
    robots: { index: true, follow: true }
};

export default function PdfToAudioPage() {
    const faqs = [
        {
            name: "Is PDF to audio conversion free?",
            acceptedAnswer: { text: "Yes, our PDF to audio tool is 100% free. Listen to unlimited PDFs without any cost." }
        },
        {
            name: "Can I choose different voices?",
            acceptedAnswer: { text: "Yes! You can select from multiple voices and languages available in your browser's speech synthesis engine." }
        },
        {
            name: "Can I adjust the speed?",
            acceptedAnswer: { text: "Absolutely. Use the speed slider to adjust playback from 0.5x to 2x speed." }
        },
        {
            name: "Does it work on mobile?",
            acceptedAnswer: { text: "Yes, our PDF to audio tool works on all modern browsers including Chrome, Safari, Firefox on mobile and desktop." }
        },
        {
            name: "Is my PDF safe?",
            acceptedAnswer: { text: "Yes. Your PDF is processed locally in your browser. We never upload or store your documents on our servers." }
        },
        {
            name: "Does it work with scanned PDFs?",
            acceptedAnswer: { text: "This tool works best with text-based PDFs. Scanned PDFs without selectable text may not produce results." }
        }
    ];

    const howToSteps = [
        { name: "Upload Your PDF", text: "Select or drag and drop your PDF file into the converter." },
        { name: "Configure Voice Settings", text: "Choose your preferred voice and adjust the playback speed." },
        { name: "Listen to Your Document", text: "Press play to hear your PDF read aloud. Pause, resume, or stop anytime." }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "PDF to Audio Converter Online Free",
                "description": "Convert PDF to speech online free. Listen to PDF documents with text-to-speech technology.",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Any",
                "url": "https://www.usepdf.in/tools/pdf-to-audio",
                "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            },
            {
                "@type": "HowTo",
                "name": "How to Convert PDF to Audio Online Free",
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
                    { "@type": "ListItem", "position": 3, "name": "PDF to Audio", "item": "https://www.usepdf.in/tools/pdf-to-audio" }
                ]
            }
        ]
    };

    const seoContent = (
        <div className="space-y-12">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-slate-700 leading-relaxed">
                    Convert <strong>PDF to audio</strong> instantly with our free online text-to-speech tool.
                    Upload any PDF document and listen to it read aloud. Perfect for multitasking, accessibility,
                    and learning on the go. No signup required.
                </p>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What is PDF to Audio?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    <strong>PDF to audio</strong> converts your PDF documents into spoken words using text-to-speech
                    (TTS) technology. Instead of reading, you can <strong>listen to your PDF</strong> while commuting,
                    exercising, or doing other tasks.
                </p>
                <p className="text-slate-600 leading-relaxed">
                    Our tool uses your browser's built-in speech synthesis for instant playback. Choose from multiple
                    voices and adjust speed to match your preference.
                </p>
            </section>

            <section className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Convert PDF to Speech?</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                    {[
                        "Learn on the go while commuting",
                        "Accessibility for visually impaired users",
                        "Multitask while listening to documents",
                        "Reduce eye strain from reading",
                        "Better comprehension for auditory learners",
                        "Review documents hands-free"
                    ].map((reason, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{reason}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Convert PDF to Audio Online Free</h2>
                <div className="space-y-4">
                    {howToSteps.map((step, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                            <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                            <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{step.name}</h3>
                                <p className="text-slate-600 text-sm">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Features of UsePDF PDF to Audio</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "100% Free", desc: "No costs, no limits" },
                        { icon: <Headphones className="w-6 h-6 text-blue-500" />, title: "Multiple Voices", desc: "Choose from available system voices" },
                        { icon: <Volume2 className="w-6 h-6 text-green-500" />, title: "Speed Control", desc: "0.5x to 2x playback speed" },
                        { icon: <Shield className="w-6 h-6 text-purple-500" />, title: "100% Private", desc: "Files processed in your browser" },
                        { icon: <Smartphone className="w-6 h-6 text-indigo-500" />, title: "All Devices", desc: "Works on mobile and desktop" },
                        { icon: <Zap className="w-6 h-6 text-orange-500" />, title: "Play/Pause/Stop", desc: "Full playback controls" }
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

            <section className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Who Uses PDF to Audio?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {[
                        { title: "Students", desc: "Listen to textbooks and lecture notes while studying or commuting." },
                        { title: "Professionals", desc: "Review reports and documents hands-free during busy workdays." },
                        { title: "Visually Impaired Users", desc: "Access PDF content through audio for better accessibility." },
                        { title: "Language Learners", desc: "Hear pronunciation and practice listening comprehension." }
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
                    <Shield className="w-6 h-6 text-green-600" />
                    Privacy & Security
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                    Your PDF is processed <strong>entirely in your browser</strong>. We never upload, store, or access your files.
                    This means your documents stay completely private and secure.
                </p>
            </section>

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

            <section className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Listen to Your PDFs Now</h2>
                <p className="text-rose-100 mb-6 max-w-2xl mx-auto">
                    Free, instant PDF to audio conversion. No signup, no download. Upload and listen.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors shadow-lg">
                    Convert PDF to Audio – It's Free <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            <section className="border-t border-slate-200 pt-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Explore More PDF Tools</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link href="/tools/pdf-to-text" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF to Text</Link>
                    <Link href="/tools/pdf-to-word" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF to Word</Link>
                    <Link href="/tools/pdf-translator" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">PDF Translator</Link>
                    <Link href="/tools/compress-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Compress PDF</Link>
                    <Link href="/tools/merge-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Merge PDF</Link>
                    <Link href="/tools/chat-with-pdf" className="px-5 py-2.5 bg-indigo-50 text-indigo-700 rounded-full hover:bg-indigo-100 transition-colors font-medium text-sm">Chat with PDF</Link>
                </div>
            </section>
        </div>
    );

    return <PdfToAudioClient seoContent={seoContent} />;
}
