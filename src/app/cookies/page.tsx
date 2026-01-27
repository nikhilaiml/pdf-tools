'use client';

import { ToggleLeft, Settings, Info } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-20">
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Cookie Policy
                        </h1>
                        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                            Learn how we use cookies to improve your experience.
                        </p>
                        <p className="text-purple-200 text-sm mt-4">Last updated: January 2025</p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    {/* Cookie Types */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <ToggleLeft className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Essential</h3>
                            <p className="text-gray-500 text-sm">Required for basic site functionality.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Settings className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Functional</h3>
                            <p className="text-gray-500 text-sm">Remember your preferences.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Info className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Analytics</h3>
                            <p className="text-gray-500 text-sm">Help us improve our services.</p>
                        </div>
                    </div>

                    {/* Policy Content */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
                            <p className="text-gray-600">
                                Cookies are small text files stored on your device when you visit a website. They help websites work more efficiently.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies We Use</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                                    <p className="text-gray-600 text-sm">Necessary for the website to function. Cannot be switched off.</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                                    <p className="text-gray-600 text-sm">Enable enhanced functionality and personalization.</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                                    <p className="text-gray-600 text-sm">Help us understand how visitors interact with our website.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                            <p className="text-gray-600">
                                You can control cookies through your browser settings. Note: Blocking essential cookies may affect website functionality.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-600">
                                Questions? Contact us at{' '}
                                <a href="mailto:privacy@pdftools.com" className="text-purple-600 hover:underline">privacy@pdftools.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
