'use client';

import { motion } from 'framer-motion';

const stats = [
    { number: '5,00,000+', label: 'PDFs Processed', icon: '📄' },
    { number: '15+', label: 'Free PDF Tools', icon: '🛠️' },
    { number: '0', label: 'Signups Required', icon: '🔓' },
    { number: '100%', label: 'Free Forever', icon: '💚' },
];

export default function StatsBar() {
    return (
        <section className="py-12 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className="text-2xl mb-2">{stat.icon}</div>
                            <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1 group-hover:scale-110 transition-transform">
                                {stat.number}
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
