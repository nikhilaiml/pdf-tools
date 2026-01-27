'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Smartphone, Briefcase, Zap, X, Check } from 'lucide-react';

const features = [
    {
        title: 'Work with a cool looking interface',
        description: "Don't be bound to your desktop. Access all PDF tools on any device, anytime.",
        image: '/feature-mobile.png',
        icon: Smartphone,
        color: 'from-blue-500 to-indigo-500',
        fullDescription: 'Our modern, intuitive interface is designed to make PDF editing a breeze. With a clean layout and easy navigation, you can find and use any tool in seconds.',
        benefits: [
            'Clean and modern user interface',
            'Intuitive drag-and-drop functionality',
            'Quick access to all tools from one dashboard',
            'Dark and light mode support',
            'Responsive design that works on any screen size'
        ]
    },
    {
        title: 'Mobile-First Experience',
        description: 'Feel free to use PDF on your phone to the fullest of its power in a multi device fit.',
        image: '/feature-tablet.png',
        icon: Zap,
        color: 'from-purple-500 to-pink-500',
        fullDescription: 'Take your PDF tools anywhere! Our mobile-optimized platform lets you edit, convert, and manage PDFs right from your smartphone or tablet with the same power as the desktop version.',
        benefits: [
            'Full functionality on mobile devices',
            'Touch-optimized controls and gestures',
            'Works offline for basic operations',
            'Sync across all your devices seamlessly',
            'Fast processing even on mobile networks'
        ]
    },
    {
        title: 'Built for Business',
        description: 'Make individual or commercial PDF tools fit your personal or business needs exactly.',
        image: '/feature-business.png',
        icon: Briefcase,
        color: 'from-orange-500 to-red-500',
        fullDescription: 'Whether you\'re a freelancer, small business, or enterprise, our tools scale to meet your needs. Process contracts, invoices, reports, and more with enterprise-grade security.',
        benefits: [
            'Batch processing for multiple files',
            'Enterprise-level security and encryption',
            'Team collaboration features',
            'Custom branding options',
            'API access for automation'
        ]
    }
];

export default function Features() {
    const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

    return (
        <>
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
                                        <button
                                            onClick={() => setSelectedFeature(feature)}
                                            className="inline-flex items-center gap-2 text-indigo-600 font-medium text-sm group-hover:gap-3 transition-all hover:text-indigo-700"
                                        >
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

            {/* Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedFeature(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header with Gradient */}
                            <div className={`h-32 bg-gradient-to-br ${selectedFeature.color} relative`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                                        <selectedFeature.icon className="w-10 h-10 text-white" />
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedFeature(null)}
                                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {selectedFeature.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {selectedFeature.fullDescription}
                                </p>

                                <h4 className="font-semibold text-gray-800 mb-3">Key Benefits:</h4>
                                <ul className="space-y-3 mb-6">
                                    {selectedFeature.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-green-600" />
                                            </div>
                                            <span className="text-gray-600 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setSelectedFeature(null)}
                                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
                                >
                                    Got it!
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
