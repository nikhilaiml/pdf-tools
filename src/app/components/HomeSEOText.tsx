'use client';

import { motion } from 'framer-motion';

export default function HomeSEOText() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* How to Use Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How to Use PDF Tools Online?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: 1, title: "Select Tool", desc: "Select the required PDF tool." },
                            { step: 2, title: "Upload File", desc: "Upload your PDF file." },
                            { step: 3, title: "Processing", desc: "Tool processes automatically." },
                            { step: 4, title: "Download", desc: "Download the final PDF." }
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

                {/* Free Online PDF Tools Paragraph */}
                <div className="prose prose-lg mx-auto text-slate-600 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Free Online PDF Tools for Everyone</h2>
                    <p className="leading-relaxed">
                        We believe that powerful document management should be accessible to everyone, which is why we offer a comprehensive suite of free PDF tools online. Whether you are a student submitting assignments, a professional managing contracts, or a business owner organizing invoices, our platform is tailored to your needs. You can easily <strong>compress PDF online</strong> to meet email attachment limits, or <strong>merge PDF online</strong> to keep your reports unified. Our robust <strong>PDF converter online</strong> ensures you can switch between formats like Word, Excel, and JPG without hassle. We are committed to providing a user-friendly experience that saves you time and effort, making us your go-to solution for all PDF tasks.
                    </p>
                </div>
            </div>
        </section>
    );
}
