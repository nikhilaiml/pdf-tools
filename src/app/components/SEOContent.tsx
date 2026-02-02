import React from 'react';
import Link from 'next/link';

interface FAQItem {
    question: string;
    answer: string;
}

interface SEOContentProps {
    title: string;
    description: string;
    howTo: {
        step: number;
        text: string;
    }[];
    features: {
        title: string;
        description: string;
    }[];
    faq: FAQItem[];
}

const SEOContent: React.FC<SEOContentProps> = ({ title, description, howTo, features, faq }) => {
    const jsonLd = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faq.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                }
            }))
        },
        {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": title,
            "step": howTo.map(item => ({
                "@type": "HowToStep",
                "position": item.step,
                "name": `Step ${item.step}`,
                "text": item.text
            }))
        }
    ];

    return (
        <div className="w-full max-w-5xl mx-auto px-4 mt-8 mb-12 space-y-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Intro Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    {description}
                </p>
            </section>

            {/* How To Section */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to use this tool</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {howTo.map((step, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-violet-50 rounded-full opacity-50"></div>
                            <div className="relative z-10">
                                <span className="inline-block w-8 h-8 rounded-full bg-violet-100 text-violet-600 text-center leading-8 font-bold mb-3">
                                    {step.step}
                                </span>
                                <p className="text-gray-700 font-medium">{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why UsePDF / Features */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Why use UsePDF?</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex gap-4 items-start bg-gray-50/50 p-6 rounded-xl">
                            <div className="flex-shrink-0 w-1 p-8 rounded-full bg-violet-500/10"></div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex gap-4 items-start bg-gray-50/50 p-6 rounded-xl">
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Is my PDF secure?</h3>
                            <p className="text-gray-600 text-sm">
                                Absolutely. We use advanced encryption to process your files.
                                All files are processed automatically and deleted from our servers permanently after 1 hour.
                                No one has access to your files except you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {faq.map((item, idx) => (
                        <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.question}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default SEOContent;
