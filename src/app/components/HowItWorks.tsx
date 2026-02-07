'use client';

import { Upload, Settings, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        icon: Upload,
        title: 'Choose a Tool',
        description: 'Select from our comprehensive collection of PDF tools.',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: Settings,
        title: 'Upload & Process',
        description: 'Upload your file and let our secure server handle the rest.',
        color: 'bg-indigo-100 text-indigo-600'
    },
    {
        icon: Download,
        title: 'Download',
        description: 'Get your high-quality result instantly.',
        color: 'bg-green-100 text-green-600'
    }
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
                    How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center bg-white p-6 rounded-2xl"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-sm`}>
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
