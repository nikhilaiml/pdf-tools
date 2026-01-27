'use client';

import { Shield, Eye, Lock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-20">
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                            Your privacy is important to us. Learn how we handle your data.
                        </p>
                        <p className="text-purple-200 text-sm mt-4">Last updated: January 2025</p>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-16">
                    {/* Key Points */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">No Data Storage</h3>
                            <p className="text-gray-500 text-sm">Files are processed locally and never stored on our servers.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Lock className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Encrypted</h3>
                            <p className="text-gray-500 text-sm">All connections are secured with SSL encryption.</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Eye className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Transparent</h3>
                            <p className="text-gray-500 text-sm">We're clear about what data we collect and why.</p>
                        </div>
                    </div>

                    {/* Policy Content */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                            <div className="text-gray-600 space-y-3">
                                <p><strong>Usage Data:</strong> We collect anonymous usage statistics to improve our services.</p>
                                <p><strong>Device Information:</strong> Basic device and browser information for compatibility purposes.</p>
                                <p><strong>Cookies:</strong> We use essential cookies to ensure the website functions properly.</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                            <div className="text-gray-600 space-y-3">
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Provide and maintain our PDF tools</li>
                                    <li>Improve and optimize our services</li>
                                    <li>Understand how users interact with our website</li>
                                    <li>Detect and prevent technical issues</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. File Processing</h2>
                            <div className="text-gray-600 space-y-3">
                                <p>Your files are processed entirely in your browser:</p>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>Files never leave your computer</li>
                                    <li>We cannot access your file contents</li>
                                    <li>No files are stored on our servers</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Contact Us</h2>
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
