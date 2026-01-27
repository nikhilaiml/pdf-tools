'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Briefcase, Zap } from 'lucide-react';

const features = [
    {
        title: 'Work with a cool looking',
        description: "Don&apos;t be bound to your desktop. Access all PDF tools on any device, anytime.",
        image: '/feature-mobile.png',
        icon: Smartphone,
        color: 'from-blue-500 to-indigo-500'
    },
    {
        title: 'Dry the care in Mobile',
        description: 'Feel free to use PDF on your phone to the fullest of its power in a multi device fit.',
        image: '/feature-tablet.png',
        icon: Zap,
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Built for business',
        description: 'Make individual or commercial PDF tools fit your personal or business needs exactly.',
        image: '/feature-business.png',
        icon: Briefcase,
        color: 'from-orange-500 to-red-500'
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
                        Work Smarter
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg"
                    >
                        Experience the best PDF tools on any device. Simple, fast, and secure.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                                {/* Image Area */}
                                <div className={`h-48 bg-gradient-to-br ${feature.color} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/10"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-32 h-32 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                                            <feature.icon className="w-16 h-16 text-white" />
                                        </div>
                                    </div>
                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg"></div>
                                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                                        {feature.description}
                                    </p>
                                    <button className="inline-flex items-center gap-2 text-indigo-600 font-medium text-sm group-hover:gap-3 transition-all">
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
