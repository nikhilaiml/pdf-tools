'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const homeFaqs = [
    {
        question: "Is UsePDF free to use?",
        answer: "Yes, UsePDF is completely free to use. You can access all our tools for converting, merging, and compressing PDFs without any charges, subscriptions, or limits."
    },
    {
        question: "Are my PDF files safe?",
        answer: "Absolutely. We prioritize your privacy and security. All files transferred to our servers are encrypted, and they are automatically and permanently deleted after one hour to ensure your data remains private."
    },
    {
        question: "Can I use UsePDF on mobile devices?",
        answer: "Yes, our platform is fully responsive and optimized for mobile use. You can access all our tools seamlessly on your smartphone or tablet, whether you are using iOS or Android."
    },
    {
        question: "Do I need to install any software to use UsePDF?",
        answer: "No, you do not need to install any software or plugins. UsePDF is entirely cloud-based, meaning all you need is a web browser and an internet connection to handle your PDF documents."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    // FAQ Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": homeFaqs.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-50 rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                        <HelpCircle className="w-3 h-3" />
                        Support
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Everything you need to know about our PDF tools.
                    </p>
                </div>

                <div className="space-y-4">
                    {homeFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                        >
                            <button
                                onClick={() => toggleIndex(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className={`text-lg font-semibold transition-colors ${activeIndex === index ? 'text-indigo-600' : 'text-slate-800'}`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-4 p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-indigo-100 text-indigo-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                                    {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50/50">
                                            <div className="pt-4">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
