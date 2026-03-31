'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

const useCases = [
    { text: 'Compress PDF for government portal upload limits', tool: '/tools/compress-pdf' },
    { text: 'Reduce Aadhaar / PAN card PDF size', tool: '/tools/compress-pdf' },
    { text: 'Merge bank statements and documents', tool: '/tools/merge-pdf' },
    { text: 'Convert images to PDF for form submissions', tool: '/tools/image-to-pdf' },
    { text: 'Split large PDF study materials', tool: '/tools/split-pdf' },
    { text: 'Remove password from downloaded PDFs', tool: '/tools/unlock-pdf' },
];

export default function IndiaSection() {
    return (
        <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-green-50 border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                        🇮🇳 Made for India
                    </span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        Popular PDF Uses in India
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        UsePDF.in is built keeping Indian users in mind. Whether you need to compress your Aadhaar card PDF,
                        reduce file size for government portal uploads, or prepare documents for DigiLocker — we&apos;ve got you covered.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.4 }}
                        >
                            <Link
                                href={useCase.tool}
                                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all group"
                            >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 group-hover:text-green-600" />
                                <span className="text-slate-700 text-sm font-medium group-hover:text-indigo-600 transition-colors">
                                    {useCase.text}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-8"
                >
                    <Link
                        href="/tools"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25"
                    >
                        Browse All Free PDF Tools →
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
