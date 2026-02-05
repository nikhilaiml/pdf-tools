'use client';

import { motion } from 'framer-motion';

export default function HomeSEOText() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* How It Works Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: 1, title: "Upload File", desc: "Upload your file." },
                            { step: 2, title: "Choose Tool", desc: "Choose a PDF tool." },
                            { step: 3, title: "Process Online", desc: "Process file online." },
                            { step: 4, title: "Download", desc: "Download result instantly." }
                        ].map((item, index) => (
                            <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                                <span className="inline-block w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full font-bold text-lg leading-10 mb-3">
                                    {item.step}
                                </span>
                                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular PDF Tools Section */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Popular PDF Tools</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/tools/pdf-to-jpg" className="text-indigo-600 font-medium hover:underline">PDF to JPG</a>
                        <span className="text-slate-300">|</span>
                        <a href="/tools/jpg-to-pdf" className="text-indigo-600 font-medium hover:underline">JPG to PDF</a>
                        <span className="text-slate-300">|</span>
                        <a href="/tools/image-to-pdf" className="text-indigo-600 font-medium hover:underline">Image to PDF</a>
                        <span className="text-slate-300">|</span>
                        <a href="/tools/compress-pdf" className="text-indigo-600 font-medium hover:underline">Compress PDF</a>
                        <span className="text-slate-300">|</span>
                        <a href="/tools/merge-pdf" className="text-indigo-600 font-medium hover:underline">Merge PDF</a>
                    </div>
                </div>

                {/* Free Online PDF Tools Paragraph */}
                <div className="prose prose-lg mx-auto text-slate-600 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Free PDF Tools Online</h2>
                    <p className="leading-relaxed">
                        We provide a comprehensive suite of <strong>free PDF tools online</strong>. Our platform allows you to easily manage your documents without any hassle. Whether you need to <strong>compress PDF</strong> files for smaller size, <strong>merge PDF</strong> documents into one, or convert images using our <strong>PDF to JPG</strong> and <strong>JPG to PDF</strong> tools, we have you covered. All our tools are secure, fast, and work directly in your browser with no signup required. UsePDF is your one-stop solution for all PDF tasks.
                    </p>
                </div>
            </div>
        </section>
    );
}
