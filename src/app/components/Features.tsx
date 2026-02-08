'use client';

import { motion } from 'framer-motion';
import { Smartphone, Zap, Shield, CheckCircle, CreditCard, Lock } from 'lucide-react';

const benefits = [
    {
        icon: CreditCard,
        title: '100% Free Forever',
        description: 'No hidden costs, subscriptions, or premium limits.',
        color: 'text-green-600 bg-green-100'
    },
    {
        icon: Lock,
        title: 'No Signup Required',
        description: 'Start using tools immediately without creating an account.',
        color: 'text-indigo-600 bg-indigo-100'
    },
    {
        icon: CheckCircle,
        title: 'No Watermark',
        description: 'Clean, professional output without any branding.',
        color: 'text-purple-600 bg-purple-100'
    },
    {
        icon: Shield,
        title: 'Secure Processing',
        description: 'SSL encryption & files auto-deleted within 1 hour.',
        color: 'text-emerald-600 bg-emerald-100'
    },
    {
        icon: Smartphone,
        title: 'Works on Mobile & Desktop',
        description: 'Fully responsive on all devices and browsers.',
        color: 'text-blue-600 bg-blue-100'
    },
    {
        icon: Zap,
        title: 'Fast Processing',
        description: 'Merge, split, and convert files in seconds.',
        color: 'text-amber-600 bg-amber-100'
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
                        Why UsePDF
                    </motion.h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Fast, secure, and easy way to manage your PDF documents online.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center"
                        >
                            <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-3 mx-auto`}>
                                <benefit.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900 mb-1">{benefit.title}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
