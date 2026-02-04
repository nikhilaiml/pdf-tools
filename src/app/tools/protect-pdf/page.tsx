/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import ProtectPdfClient from './ProtectPdfClient';
import { HelpCircle, Lock, Shield, Globe, ArrowRight, Minimize2, Split, Key } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Protect PDF Online – Encrypt & Secure PDF Free | UsePDF',
    description: 'Protect PDF files online for free. Encrypt your PDF with a password securely. Prevent unauthorized access with strong 256-bit encryption.',
    keywords: ['protect pdf', 'encrypt pdf', 'password protect pdf', 'secure pdf', 'lock pdf', 'pdf security'],
    alternates: {
        canonical: 'https://usepdf.in/tools/protect-pdf',
    },
    openGraph: {
        title: 'Protect PDF Online – Encrypt & Secure PDF Free | UsePDF',
        description: 'Protect PDF files online for free. Encrypt your PDF with a password securely. Prevent unauthorized access with strong 256-bit encryption.',
        url: 'https://usepdf.in/tools/protect-pdf',
        type: 'website',
    }
};

export default function ProtectPdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF Protect Tool",
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
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is this PDF tool?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Protect PDF tool allows you to encrypt your PDF documents with a password. It prevents unauthorized users from opening, printing, or copying the content of your private files."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this tool free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Protect PDF tool is completely free. You can secure as many documents as you like without any charges or limitations."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it safe and secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Your security is paramount. The encryption process happens directly in your browser (client-side), meaning your files never leave your device and are never sent to our servers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I use this tool online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simply upload your PDF file, enter your desired password in the provided field, and click the 'Protect PDF' button. Your file will be encrypted locally and ready for download instantly."
                        }
                    }
                ]
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
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Protect PDF Online – Encrypt & Secure PDF Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Secure your sensitive documents instantly with our free online <strong>Protect PDF</strong> tool. Add strong password encryption to your PDF files to prevent unauthorized access. Whether it is personal financial records or confidential business contracts, our tool ensures your data remains exclusive to those with the key. Experience top-tier security without any cost or software installation.
                </p>
            </section>

            {/* What is this tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What is the Protect PDF Tool?</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">
                        The Protect PDF tool is a security utility designed to add a layer of defense to your digital documents. It utilizes standard PDF encryption protocols to lock your file with a unique password set by you. This means that anyone attempting to open the file will be prompted to enter this password before they can view any content.
                    </p>
                    <p>
                        Beyond just restricting access, our tool can also be used to limit permissions. While our essential free tool focuses on access control, the underlying technology ensures that your document's integrity is maintained. It is the digital equivalent of placing your documents in a locked safe, providing peace of mind in an era where digital privacy is critical.
                    </p>
                </div>
            </section>

            {/* Why Use Section */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Secure PDFs with UsePDF?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
                    {[
                        { icon: Lock, text: "Strong encryption for maximum security" },
                        { icon: Shield, text: "Client-side processing (files stay on your device)" },
                        { icon: Key, text: "Instant password protection setup" },
                        { icon: Globe, text: "No account required, completely anonymous" }
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature.text}</span>
                        </div>
                    ))}
                </div>
                <div className="prose prose-slate max-w-4xl mx-auto text-slate-600">
                    <p>
                        Our Protect PDF tool offers a unique advantage: <strong>Client-Side Processing</strong>. Unlike other services that require you to upload your sensitive files to a remote server, our tool runs the encryption code directly in your web browser. This means your private documents never travel across the internet, offering an unbreachable level of privacy.
                    </p>
                    <p className="mt-4">
                        It is also incredibly fast. Because there is no uploading or downloading to a server involved, the process is near-instantaneous for most files. It supports all standard PDF types and works seamlessly on any device, be it a laptop, tablet, or smartphone.
                    </p>
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Encrypt PDF Online</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                        { step: "1", title: "Upload PDF", desc: "Select your confidential file." },
                        { step: "2", title: "Set Password", desc: "Choose a strong password." },
                        { step: "3", title: "Download", desc: "Save your secured PDF." }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                                {item.step}
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="prose prose-slate max-w-3xl mx-auto text-center text-slate-600">
                    <p>
                        Start by selecting the PDF document you wish to secure. You can do this by clicking the upload area or simply dragging the file onto the page. Once the file is recognized, you will be asked to enter a password. We recommend using a mix of letters, numbers, and symbols for high security.
                    </p>
                    <p className="mt-4">
                        After confirming your password, click the &apos;Protect PDF&apos; button. The tool will instantly apply the encryption. You can then download your file. Remember to keep a safe record of your password, as there is no way to recover the file content without it!
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center justify-center gap-3">
                    <HelpCircle className="w-8 h-8 text-indigo-600" />
                    Frequently Asked Questions (FAQs)
                </h2>
                <div className="space-y-4">
                    {[
                        { q: "What is this PDF tool?", a: "The Protect PDF tool allows you to encrypt your PDF documents with a password. It prevents unauthorized users from opening, printing, or copying the content of your private files." },
                        { q: "Is this tool free to use?", a: "Yes, our Protect PDF tool is completely free. You can secure as many documents as you like without any charges or limitations." },
                        { q: "Is it safe and secure?", a: "Your security is paramount. The encryption process happens directly in your browser (client-side), meaning your files never leave your device and are never sent to our servers." },
                        { q: "How do I use this tool online?", a: "Simply upload your PDF file, enter your desired password in the provided field, and click the 'Protect PDF' button. Your file will be encrypted locally and ready for download instantly." }
                    ].map((faq, i) => (
                        <div key={i} className="bg-slate-50/50 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.q}</h3>
                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Related Tools */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Related Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link href="/tools/compress-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-green-100 transition-colors">
                                <Minimize2 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Compress PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Reduce file size before securing it.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/tools/split-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-orange-100 transition-colors">
                                <Split className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Split PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Extract specific pages to protect.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>

                    <Link href="/" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-100 transition-colors">
                                <Globe className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Home</h3>
                            <p className="text-slate-500 text-sm mb-4">Explore all PDF tools.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Go Home <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <ProtectPdfClient seoContent={seoContent} />
    );
}
