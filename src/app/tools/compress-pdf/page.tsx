/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import CompressPdfClient from './CompressPdfClient';
import { HelpCircle, Merge, Shield, Zap, Globe, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF Online Free – Reduce PDF File Size | UsePDF',
    description: 'Compress PDF online free. Reduce PDF size to 100KB or 1MB securely without losing quality. Fast, secure, and no registration required.',
    keywords: ['compress pdf online', 'reduce pdf size', 'compress pdf to 100kb', 'compress pdf to 1mb', 'free pdf tools'],
    alternates: {
        canonical: 'https://usepdf.in/tools/compress-pdf',
    },
    openGraph: {
        title: 'Compress PDF Online Free – Reduce PDF File Size | UsePDF',
        description: 'Compress PDF online free. Reduce PDF size to 100KB or 1MB securely without losing quality. Fast, secure, and no registration required.',
        url: 'https://usepdf.in/tools/compress-pdf',
        type: 'website',
    }
};

export default function CompressPdfPage() {
    // Schema Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "SoftwareApplication",
                "name": "UsePDF Compress Tool",
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
                        "name": "Can I compress PDF without losing quality?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our advanced compression algorithm reduces file size by optimizing fonts and images while maintaining excellent visual quality."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it free to compress PDF online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, UsePDF is completely free. You can compress as many files as you like without any cost or registration."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I compress PDF to 1MB or 100KB?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our tool automatically optimizes your PDF to the smallest possible size, often reducing files to under 1MB or 100KB depending on the original content."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is my PDF file secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. All uploaded files are encrypted and automatically deleted from our servers permanently after one hour."
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
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Compress PDF Online – Reduce PDF File Size Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Easily <strong>compress PDF online</strong> with UsePDF. Our tool helps you <strong>reduce PDF file size</strong> without losing quality. It is fast, free, and requires no registration. Whether you need to optimize documents for email attachments, job applications, or online forms, our secure compressor is the perfect solution.
                </p>
            </section>

            {/* Compress PDF Online for Free */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Compress PDF File Online for Free</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">
                        UsePDF offers a robust solution to compress standard PDF documents directly in your browser. By removing unnecessary meta-data and optimizing embedded images, we significantly reduce the overall file footprint.
                    </p>
                    <p>
                        Security is our top priority. We use SSL encryption for file transfers, and our system ensures your privacy by automatically deleting all uploaded files from our servers after one hour. You can use our services with complete peace of mind.
                    </p>
                </div>
            </section>

            {/* Compress PDF to Specific Size */}
            <section className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Compress PDF to Specific Size</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">
                        Do you have strict file size limits for uploading documents? Our tool is engineered to handle these requirements efficiently. Whether you need to <strong>compress PDF to 100kb</strong>, <strong>compress PDF to 200kb</strong>, or even <strong>compress PDF to 300kb</strong>, our smart optimization engine works to get your file within these limits whenever technically possible.
                    </p>
                    <p>
                        For larger documents, such as legal contracts or high-quality brochures, we can easily <strong>compress PDF to 1mb</strong> or less. This makes our tool ideal for government forms, university applications, and portal uploads where file size restrictions are common.
                    </p>
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-white rounded-2xl p-8 md:p-12 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Compress PDF Online</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                        <h3 className="font-bold text-slate-800 mb-2">Upload PDF</h3>
                        <p className="text-slate-600 text-sm">Select your file from your computer or mobile device.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                        <h3 className="font-bold text-slate-800 mb-2">Automatic Compression</h3>
                        <p className="text-slate-600 text-sm">Our tool scans and reduces the file size instantly.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                        <h3 className="font-bold text-slate-800 mb-2">Download Compressed PDF</h3>
                        <p className="text-slate-600 text-sm">Save your optimized file immediately to your device.</p>
                    </div>
                </div>
            </section>

            {/* Why Choose UsePDF */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Choose UsePDF?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
                    {[
                        { icon: Zap, text: "Fast: Instant processing speed." },
                        { icon: CheckCircle, text: "Free: No hidden costs or subscriptions." },
                        { icon: Shield, text: "Secure: Files deleted after 1 hour." },
                        { icon: Globe, text: "No Watermark: Professional quality results." },
                        { icon: Smartphone, text: "Compatible: Works on all phones and computers." }

                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <feature.icon className="w-5 h-5" />
                            </div>
                            <span className="text-slate-700 font-medium">{feature.text}</span>
                        </div>
                    ))}
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
                        { q: "Can I compress PDF without losing quality?", a: "Yes, our advanced compression algorithm reduces file size by optimizing fonts and images while maintaining excellent visual quality." },
                        { q: "Is it free to compress PDF online?", a: "Yes, UsePDF is completely free. You can compress as many files as you like without any cost or registration." },
                        { q: "Can I compress PDF to 1MB or 100KB?", a: "Our tool automatically optimizes your PDF to the smallest possible size, often reducing files to under 1MB or 100KB depending on the original content." },
                        { q: "Is my PDF file secure?", a: "Absolutely. All uploaded files are encrypted and automatically deleted from our servers permanently after one hour." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Explore Related PDF Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    <Link href="/tools/merge-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-red-100 transition-colors">
                                <Merge className="w-6 h-6 text-red-500" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Merge PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Combine multiple PDFs into one.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                Try Now <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>
                    <Link href="/tools/protect-pdf" className="group">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 h-full text-center">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-slate-200 transition-colors">
                                <Shield className="w-6 h-6 text-slate-600" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Protect PDF</h3>
                            <p className="text-slate-500 text-sm mb-4">Secure your PDF with a password.</p>
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
                            <h3 className="font-bold text-slate-900 mb-2">All PDF Tools</h3>
                            <p className="text-slate-500 text-sm mb-4">Explore our full suite tools.</p>
                            <span className="text-indigo-600 font-medium text-sm inline-flex items-center">
                                View Home <ArrowRight className="w-4 h-4 ml-1" />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );

    return (
        <CompressPdfClient seoContent={seoContent} />
    );
}
