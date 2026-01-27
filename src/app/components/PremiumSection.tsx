'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield, Sparkles } from 'lucide-react';

export default function PremiumSection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Premium Gradient Background */}
            <div className="absolute inset-0 premium-gradient z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Left Content */}
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-indigo-200 text-indigo-600 text-sm font-medium mb-6"
                            >
                                <Sparkles className="w-4 h-4" />
                                Premium Features
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl font-bold text-slate-800 mb-6"
                            >
                                Get more with Premium
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-slate-600 text-lg mb-8 leading-relaxed"
                            >
                                Unlock unlimited access to all tools, higher file size limits, and priority support. Take your document management to the next level.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4 mb-8"
                            >
                                {[
                                    'Edit the books and go a bit of work monthly.',
                                    '400 PDFs, get to brand PDF for yearly use if you need more use',
                                    'Convert for e-Signature is screen page.'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3.5 h-3.5 text-white" />
                                        </div>
                                        <span className="text-slate-700">{feature}</span>
                                    </div>
                                ))}
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                            >
                                Get Premium
                            </motion.button>

                            {/* App Store Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex gap-4 mt-8"
                            >
                                <button className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl transition-colors">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-[10px] text-slate-400">Download on the</div>
                                        <div className="text-sm font-semibold">App Store</div>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl transition-colors">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-[10px] text-slate-400">GET IT ON</div>
                                        <div className="text-sm font-semibold">Google Play</div>
                                    </div>
                                </button>
                            </motion.div>
                        </div>

                        {/* Right - Preview Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:w-1/2"
                        >
                            <div className="relative">
                                {/* Floating decorative elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-indigo-200/50 rounded-2xl -z-10"></div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200/50 rounded-full -z-10"></div>

                                {/* Main Preview Card */}
                                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                                    {/* Mock Header */}
                                    <div className="bg-slate-50 px-4 py-3 flex items-center gap-2 border-b border-slate-100">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="flex-1 text-center text-xs text-slate-400">PDF Tools Premium</div>
                                    </div>

                                    {/* Content Preview */}
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                                <Zap className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-slate-800">Premium Active</div>
                                                <div className="text-xs text-green-500">✓ All features unlocked</div>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-slate-50 rounded-xl p-4">
                                                <div className="text-2xl font-bold text-indigo-600">∞</div>
                                                <div className="text-xs text-slate-500">PDFs Processed</div>
                                            </div>
                                            <div className="bg-slate-50 rounded-xl p-4">
                                                <div className="text-2xl font-bold text-purple-600">500MB</div>
                                                <div className="text-xs text-slate-500">Max File Size</div>
                                            </div>
                                        </div>

                                        {/* Document Preview */}
                                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 flex items-center gap-3">
                                            <div className="w-10 h-12 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">PDF</div>
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-slate-700">Agreement_Signed.pdf</div>
                                                <div className="text-xs text-slate-400">Just processed • 2.4 MB</div>
                                            </div>
                                            <Check className="w-5 h-5 text-green-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
