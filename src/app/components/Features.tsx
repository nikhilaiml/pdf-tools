'use client';

import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, CheckCircle, CreditCard } from 'lucide-react';

const benefits = [
    {
        icon: Smartphone,
        title: 'Ease of Use',
        description: 'Intuitive interface for everyone. No technical skills needed.',
        color: 'text-blue-600 bg-blue-100'
    },
    {
        icon: Zap,
        title: 'Fast Processing',
        description: 'Merge, split, and convert files in seconds with high-speed servers.',
        color: 'text-amber-600 bg-amber-100'
    },
    {
        icon: Shield,
        title: 'Secure Handling',
        description: 'Files are encrypted using SSL and deleted automatically after processing.',
        color: 'text-emerald-600 bg-emerald-100'
    },
    {
        icon: CheckCircle,
        title: 'Device Ready',
        description: 'Works perfectly on mobile, tablet, and desktop browsers.',
        color: 'text-indigo-600 bg-indigo-100'
    },
    {
        icon: CreditCard,
        title: '100% Free',
        description: 'No hidden costs, subscriptions, or watermarks. Completely free access.',
        color: 'text-purple-600 bg-purple-100'
    }
];

export default function Features() {
    return (
        <section className="py-20 bg-[#faf8f5]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
                    >
                        Why Use Our PDF Tools
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        We provide a fast, secure, and easy way to manage your documents online.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                        >
                            <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
