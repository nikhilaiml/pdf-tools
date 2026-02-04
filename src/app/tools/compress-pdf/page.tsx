/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import CompressPdfClient from './CompressPdfClient';
import { HelpCircle, Merge, Shield, Zap, Globe, Smartphone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Compress PDF – Reduce PDF Size | UsePDF',
    description: 'Compress PDF files online for free. Reduce PDF size securely without losing quality. Trusted by users for fast, secure compression. Try UsePDF now!',
    keywords: ['compress pdf', 'reduce pdf size', 'online pdf compressor', 'free pdf tool', 'optimize pdf', 'shrink pdf'],
    alternates: {
        canonical: 'https://usepdf.in/tools/compress-pdf',
    },
    openGraph: {
        title: 'Compress PDF – Reduce PDF Size | UsePDF',
        description: 'Compress PDF files online for free. Reduce PDF size securely without losing quality. Trusted by users for fast, secure compression. Try UsePDF now!',
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
                        "name": "What is this PDF tool?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The Compress PDF tool is a free online utility designed to reduce the file size of your PDF documents while maintaining high capabilities. It optimizes text and images to create lighter files suitable for email and web sharing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is this tool free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, our Compress PDF tool is completely free. You can compress as many files as you need without any hidden fees, subscriptions, or credit card requirements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is it safe and secure?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Absolutely. We prioritize your privacy and security. All files uploaded for compression are processed using secure encryption and are permanently deleted from our servers after one hour."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I use this tool online?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simply upload your PDF file to the tool, wait for the automatic compression process to finish, and then download your optimized file instantly. It performs all operations directly in your browser."
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
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Compress PDF Online – Reduce PDF Size Free</h1>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Reduce the size of your PDF documents instantly with our free online <strong>Compress PDF</strong> tool. We optimize your files for easier sharing and storage without compromising quality, ensuring your data stays safe. Whether you are managing business reports or personal documents, our tool effectively minimizes file size while keeping visual fidelity intact.
                </p>
            </section>

            {/* What is this tool */}
            <section className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What is this Compress PDF Tool?</h2>
                <div className="prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">
                        The Compress PDF tool by UsePDF is a sophisticated online solution engineered to help users manage large document files. High-resolution images and complex formatting can often bloat PDF files, making them difficult to email or upload to web portals with strict size limits. Our tool addresses this problem by intelligently rewriting the file structure and compressing images within the document.
                    </p>
                    <p>
                        Unlike basic compression methods that might blur your text or pixelate images, our technology strikes a perfect balance between size reduction and quality retention. It is an essential utility for students submitting assignments, professionals sending contracts, or anyone looking to save storage space on their devices. With support for batch processing and instant feedback, handling large PDFs has never been simpler.
                    </p>
                </div>
            </section>

            {/* Why Use Section */}
            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Why Should Users Use This Tool?</h2>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
                    {[
                        { icon: Zap, text: "Instant size reduction with smart optimization" },
                        { icon: Shield, text: "Enterprise-grade security and privacy" },
                        { icon: Globe, text: "Works on any browser (Chrome, Safari, Edge)" },
                        { icon: Smartphone, text: "Mobile-friendly for on-the-go compression" }
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
                        Choosing UsePDF represents a choice for speed, reliability, and security. We understand that your documents often contain sensitive information. That is why our platform operates with strict data retention policies, automatically purging your files after processing. Furthermore, our tool is completely platform-independent. Whether you are using Windows, macOS, Linux, Android, or iOS, you get the same consistent, high-speed performance.
                    </p>
                    <p className="mt-4">
                        We also believe in accessibility. There is no software to install, no rigorous registration process, and absolutely no cost. You get premium-level compression algorithms completely for free. This eliminates the need for expensive desktop software like Adobe Acrobat for simple compression tasks, saving you both time and money.
                    </p>
                </div>
            </section>

            {/* How to Section */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Use This Tool Online</h2>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {[
                        { step: "1", title: "Select File", desc: "Choose the Compress PDF tool from home." },
                        { step: "2", title: "Upload PDF", desc: "Drag and drop your document." },
                        { step: "3", title: "Compress", desc: "Wait for automatic optimization." },
                        { step: "4", title: "Download", desc: "Save the smaller PDF file." }
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
                        Using our tool is incredibly straightforward. First, navigate to the <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline">homepage</Link> and select the compression tool. Once there, you can drag and drop your file directly into the browser window or use the file selector. Our system immediately begins analyzing the file structure.
                    </p>
                    <p className="mt-4">
                        Within seconds, the tool identifies redundant data streams and compresses embedded images. The result is displayed with the new file size and compression percentage. Click the download button to save your new file. You can also proceed to <Link href="/tools/text-to-pdf" className="text-indigo-600 hover:text-indigo-700 font-semibold hover:underline">create new PDFs</Link> or use other tools immediately.
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
                        { q: "What is this PDF tool?", a: "The Compress PDF tool is a free online utility designed to reduce the file size of your PDF documents while maintaining high capabilities. It optimizes text and images to create lighter files suitable for email and web sharing." },
                        { q: "Is this tool free to use?", a: "Yes, our Compress PDF tool is completely free. You can compress as many files as you need without any hidden fees, subscriptions, or credit card requirements." },
                        { q: "Is it safe and secure?", a: "Absolutely. We prioritize your privacy and security. All files uploaded for compression are processed using secure encryption and are permanently deleted from our servers after one hour." },
                        { q: "How do I use this tool online?", a: "Simply upload your PDF file to the tool, wait for the automatic compression process to finish, and then download your optimized file instantly. It performs all operations directly in your browser." }
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
                            <p className="text-slate-500 text-sm mb-4">Combine multiple PDFs into one document.</p>
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
                            <p className="text-slate-500 text-sm mb-4">Secure your PDF file with a password.</p>
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
                            <p className="text-slate-500 text-sm mb-4">Explore our full suite of free tools.</p>
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
