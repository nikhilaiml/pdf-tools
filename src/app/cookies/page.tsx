'use client';

import { Cookie, Settings, ToggleLeft, Info } from 'lucide-react';

export default function CookiePolicyPage() {
    return (
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
                            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies We Use</h2>
                        <div className="space-y-4">
                            <div className="bg-gray-50 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                                <p className="text-gray-600 text-sm">These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you, such as setting your privacy preferences.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                                <p className="text-gray-600 text-sm">These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-4">
                                <h3 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                                <p className="text-gray-600 text-sm">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our services.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
                        <div className="text-gray-600 space-y-3">
                            <p>You can control and manage cookies in various ways:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Browser settings - You can set your browser to block or delete cookies</li>
                                <li>Our cookie consent tool - Adjust preferences when you first visit</li>
                                <li>Private browsing - Use incognito/private mode</li>
                            </ul>
                            <p className="mt-4">Note: Blocking essential cookies may affect website functionality.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
                        <p className="text-gray-600">
                            We may use third-party services such as analytics providers. These third parties may set their own cookies. We do not control these cookies. Please review their privacy policies for more information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-600">
                            Questions about our use of cookies? Contact us at{' '}
                            <a href="mailto:privacy@pdftools.com" className="text-purple-600 hover:underline">privacy@pdftools.com</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
