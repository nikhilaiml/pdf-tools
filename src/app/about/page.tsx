'use client';

import { Users, Target, Award, Heart, Globe, Zap } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-24 pb-20">
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About PDF Tools
                    </h1>
                    <p className="text-lg text-purple-100 max-w-2xl mx-auto">
                        We're on a mission to make PDF management simple, secure, and accessible for everyone.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                {/* Our Story */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <div className="prose prose-lg text-gray-600 max-w-none">
                        <p className="mb-4">
                            PDF Tools was founded with a simple vision: to provide powerful, user-friendly PDF tools that work right in your browser. No downloads, no installations, no hassle.
                        </p>
                        <p className="mb-4">
                            We believe that everyone should have access to professional-grade document tools without complicated software or expensive subscriptions. That's why we've built a comprehensive suite of PDF tools that are free, fast, and secure.
                        </p>
                        <p>
                            Today, millions of users trust PDF Tools for their daily document needs - from students merging lecture notes to businesses processing contracts.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Users className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">User First</h3>
                        <p className="text-gray-500 text-sm">Every feature we build starts with our users' needs in mind.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Target className="w-7 h-7 text-green-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Simplicity</h3>
                        <p className="text-gray-500 text-sm">Complex tasks made simple. No learning curve required.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
                        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <Award className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">Quality</h3>
                        <p className="text-gray-500 text-sm">We never compromise on the quality of our tools and output.</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
                    <h2 className="text-2xl font-bold mb-8 text-center">Trusted Worldwide</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">10M+</div>
                            <div className="text-purple-200 text-sm">Users</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50M+</div>
                            <div className="text-purple-200 text-sm">PDFs Processed</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">40+</div>
                            <div className="text-purple-200 text-sm">PDF Tools</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">190+</div>
                            <div className="text-purple-200 text-sm">Countries</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
