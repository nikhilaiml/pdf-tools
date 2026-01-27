'use client';

import { Check, Zap, Crown, Building } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
    const plans = [
        {
            name: 'Free',
            price: '$0',
            period: 'forever',
            description: 'Perfect for occasional use',
            icon: Zap,
            color: 'bg-gray-100',
            iconColor: 'text-gray-600',
            buttonStyle: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            features: [
                'All basic PDF tools',
                'Up to 5 PDFs per day',
                'Max file size: 10MB',
                'Standard processing speed',
                'Browser-based processing',
            ],
        },
        {
            name: 'Premium',
            price: '$9',
            period: '/month',
            description: 'For power users & professionals',
            icon: Crown,
            color: 'bg-purple-100',
            iconColor: 'text-purple-600',
            buttonStyle: 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:opacity-90',
            popular: true,
            features: [
                'All PDF tools unlimited',
                'Unlimited PDFs per day',
                'Max file size: 500MB',
                'Priority processing speed',
                'Batch processing',
                'No watermarks',
                'Priority support',
            ],
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'For teams & organizations',
            icon: Building,
            color: 'bg-blue-100',
            iconColor: 'text-blue-600',
            buttonStyle: 'bg-gray-900 text-white hover:bg-gray-800',
            features: [
                'Everything in Premium',
                'Unlimited team members',
                'API access',
                'Custom integrations',
                'Dedicated support',
                'SLA guarantee',
                'On-premise option',
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-20">
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                        Choose the plan that fits your needs. Start free, upgrade when you need more.
                    </p>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-6xl mx-auto px-4 py-16 -mt-10">
                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`bg-white rounded-3xl shadow-xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className={`w-14 h-14 ${plan.color} rounded-xl flex items-center justify-center mb-6`}>
                                <plan.icon className={`w-7 h-7 ${plan.iconColor}`} />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-4">{plan.description}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                <span className="text-gray-500">{plan.period}</span>
                            </div>

                            <button className={`w-full py-3 rounded-xl font-semibold transition-all mb-8 ${plan.buttonStyle}`}>
                                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                            </button>

                            <ul className="space-y-3">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* FAQ Teaser */}
                <div className="text-center mt-16">
                    <p className="text-gray-500">
                        Have questions? Check our <Link href="/contact" className="text-purple-600 hover:underline font-medium">Contact page</Link> or reach out to support.
                    </p>
                </div>
            </div>
        </div>
    );
}
