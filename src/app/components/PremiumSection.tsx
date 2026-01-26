'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap, Shield } from 'lucide-react';

export default function PremiumSection() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with golden gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-900/10 to-slate-900 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-sm relative overflow-hidden group">

                    {/* Shine effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-6">
                                <Star className="w-4 h-4 fill-amber-400" />
                                Premium Features
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Get <span className="text-amber-400">More</span> With Premium
                            </h2>
                            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                Unlock unlimited access to all tools, higher file size limits, and priority support. Take your document management to the next level.
                            </p>

                            <div className="space-y-4">
                                {[
                                    'Unlimited document processing',
                                    'Convert Scanned PDF to Word (OCR)',
                                    'No ads, ever',
                                    'Priority customer support'
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-amber-400" />
                                        </div>
                                        <span className="text-slate-200">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-1/2 flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-amber-500 blur-3xl opacity-20 rounded-full"></div>
                                <div className="relative bg-slate-900 border border-amber-500/30 p-8 rounded-2xl shadow-2xl max-w-sm">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="p-3 bg-amber-500/10 rounded-xl">
                                            <Zap className="w-8 h-8 text-amber-400" />
                                        </div>
                                        <span className="text-2xl font-bold text-white">$9<span className="text-sm text-slate-400 font-normal">/mo</span></span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
                                    <p className="text-sm text-slate-400 mb-8">Perfect for power users who need professional tools.</p>

                                    <button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-1">
                                        Get Premium Now
                                    </button>

                                    <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                                        <Shield className="w-3 h-3" />
                                        <span>30-Day Money-Back Guarantee</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
