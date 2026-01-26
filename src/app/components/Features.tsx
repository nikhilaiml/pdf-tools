'use client';

import { motion } from 'framer-motion';
import { Smartphone, Briefcase, Zap, Globe, Lock, Cloud } from 'lucide-react';

const features = [
    {
        icon: Smartphone,
        title: 'Mobile Friendly',
        description: 'Work from anywhere. Our tools are optimized for all devices, from phones to tablets.',
        color: 'blue'
    },
    {
        icon: Briefcase,
        title: 'Built for Business',
        description: 'Secure, reliable, and compliant. Trusted by thousands of businesses worldwide.',
        color: 'indigo'
    },
    {
        icon: Zap,
        title: 'Lightning Fast',
        description: 'Process files in seconds. Our optimized engines ensure no time is wasted.',
        color: 'purple'
    },
    {
        icon: Lock,
        title: 'Secure & Safe',
        description: 'Your files are deleted automatically after 1 hour. We prioritize your privacy.',
        color: 'emerald'
    },
    {
        icon: Cloud,
        title: 'Cloud Powered',
        description: 'No installation needed. Access all tools directly from your browser.',
        color: 'sky'
    },
    {
        icon: Globe,
        title: 'Global Access',
        description: 'Available in 20+ languages. PDF tools for everyone, everywhere.',
        color: 'orange'
    }
];

export default function Features() {
    return (
        <section className="py-20 bg-[#0f1014]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us?</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Experience the best PDF tools on the market. Simple, fast, and secure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-800/50 hover:bg-slate-800 border border-white/5 hover:border-white/10 p-6 rounded-2xl transition-all duration-300 group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
