'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    FileText,
    Lock,
    Zap,
    Globe,
    Shield,
    Printer,
    Share2,
    FolderOpen,
    Star,
    Search,
    ArrowRight
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Step {
    title: string;
    description: string;
}

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
}

interface Testimonial {
    name: string;
    role: string;
    quote: string;
    rating: number;
}

interface ToolPageLayoutProps {
    title: string;
    subtitle: string;
    steps: Step[];
    ctaText?: string;
    onAction?: () => void;
    loading?: boolean;
    disabled?: boolean;
    showCta?: boolean;
    children: React.ReactNode;
    seoContent?: React.ReactNode;
    hideDefaultFeatures?: boolean;
    hideTestimonials?: boolean;
}

// Floating icons for decoration
const FloatingIcon = ({
    icon: Icon,
    className,
    style
}: {
    icon: React.ElementType;
    className?: string;
    style?: React.CSSProperties;
}) => (
    <div
        className={`absolute p-2 sm:p-3 rounded-xl shadow-lg animate-float ${className}`}
        style={style}
    >
        <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
    </div>
);

// Default features
const defaultFeatures: Feature[] = [
    {
        icon: <FolderOpen className="w-6 h-6 text-blue-500" />,
        title: "Organize Documents",
        description: "Organize Documents. Use categories, groups, and labels to organize and access.",
        href: "/tools/rearrange-pdf"
    },
    {
        icon: <Share2 className="w-6 h-6 text-green-500" />,
        title: "Share Easily",
        description: "Share easily with others via email or URL for a fast and secure.",
        href: "/tools/share-pdf"
    },
    {
        icon: <Printer className="w-6 h-6 text-orange-500" />,
        title: "Print Ready",
        description: "Print ready with the correct PDFs for your specific print needs.",
        href: "/tools/pdf-to-jpg"
    },
    {
        icon: <Shield className="w-6 h-6 text-purple-500" />,
        title: "Reduce Clutter",
        description: "Perfect for those who reduce clutter in their work or home files.",
        href: "/tools/compress-pdf"
    }
];

// Default testimonials
const defaultTestimonials: Testimonial[] = [
    {
        name: "Sarah J.",
        role: "Graphic Designer",
        quote: "Merging PDFs for client presentations has never been easier. A real time-saver!",
        rating: 5
    },
    {
        name: "David L.",
        role: "Student",
        quote: "The drag-and-drop interface is so intuitive. Perfect for organizing my study notes.",
        rating: 5
    },
    {
        name: "Emily R.",
        role: "Small Business Owner",
        quote: "Secure and reliable. I use it for all my contracts and invoices.",
        rating: 5
    }
];

const ToolPageLayout: React.FC<ToolPageLayoutProps> = ({
    title,
    subtitle,
    steps,
    ctaText = "Process PDF",
    onAction,
    loading = false,
    disabled = false,
    showCta = true,
    children,
    seoContent,
    hideDefaultFeatures = false,
    hideTestimonials = false
}) => {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section with Gradient */}
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 pt-8 pb-20 sm:pt-12 sm:pb-28">
                {/* Decorative Floating Icons */}
                <FloatingIcon
                    icon={FileText}
                    className="bg-red-400 text-white hidden sm:block"
                    style={{ top: '15%', left: '5%', animationDelay: '0s' }}
                />
                <FloatingIcon
                    icon={Lock}
                    className="bg-green-400 text-white hidden sm:block"
                    style={{ top: '60%', left: '8%', animationDelay: '0.5s' }}
                />
                <FloatingIcon
                    icon={Zap}
                    className="bg-yellow-400 text-white hidden sm:block"
                    style={{ top: '25%', left: '12%', animationDelay: '1s' }}
                />
                <FloatingIcon
                    icon={Globe}
                    className="bg-blue-400 text-white hidden sm:block"
                    style={{ top: '20%', right: '5%', animationDelay: '0.3s' }}
                />
                <FloatingIcon
                    icon={Shield}
                    className="bg-purple-400 text-white hidden sm:block"
                    style={{ top: '55%', right: '10%', animationDelay: '0.8s' }}
                />
                <FloatingIcon
                    icon={Printer}
                    className="bg-pink-400 text-white hidden sm:block"
                    style={{ top: '35%', right: '3%', animationDelay: '1.2s' }}
                />

                {/* Title and Subtitle */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                        {title}
                    </h1>
                    <p className="text-base sm:text-lg text-purple-100 max-w-xl mx-auto mb-6 sm:mb-8">
                        {subtitle}
                    </p>

                    {/* Search Bar Decoration */}
                    <form onSubmit={handleSearch} className="max-w-md mx-auto flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg">
                        <input
                            type="text"
                            placeholder="Search for PDF tools..."
                            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                            Search
                        </button>
                    </form>
                </div>
            </div>

            {/* Upload Area - Overlapping Hero */}
            <div className="relative -mt-10 sm:-mt-16 z-20 px-4">
                <div className="max-w-2xl mx-auto">
                    {children}
                </div>
            </div>

            {/* Steps Section */}
            <div className="py-12 sm:py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${index === 0 ? 'bg-orange-100' :
                                    index === 1 ? 'bg-blue-100' :
                                        'bg-green-100'
                                    }`}>
                                    <span className={`text-lg sm:text-xl font-bold ${index === 0 ? 'text-orange-500' :
                                        index === 1 ? 'text-blue-500' :
                                            'text-green-500'
                                        }`}>
                                        {index + 1}
                                    </span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{step.title}</h3>
                                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    {showCta && onAction && (
                        <div className="text-center mt-8 sm:mt-10">
                            <button
                                onClick={onAction}
                                disabled={loading || disabled}
                                className={`bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105 ${(loading || disabled) ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                {loading ? 'Processing...' : ctaText}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Trusted By Section */}
            {!hideDefaultFeatures && (
                <div className="py-12 sm:py-16 bg-white px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2 sm:mb-3">
                            PDF Tools at a Glance
                        </h2>
                        <p className="text-sm sm:text-base text-gray-500 text-center mb-8 sm:mb-12">
                            Everything you need to work with PDF documents efficiently.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {defaultFeatures.map((feature, index) => (
                                <Link href={feature.href} key={index} className="block group">
                                    <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:bg-gray-100 transition-colors h-full">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-sm group-hover:scale-110 transition-transform">
                                            {feature.icon}
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{feature.title}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 mb-2">{feature.description}</p>
                                        <div className="inline-flex items-center text-xs text-purple-600 hover:text-purple-700 mt-auto font-medium">
                                            Learn More <ArrowRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Testimonials Section */}
            {!hideTestimonials && (
                <div className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 relative">
                        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
                            Trusted by Happy Users
                        </h2>

                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

                        {/* Infinite Scroll Track */}
                        {/* Tripled data for seamless loop */}
                        <div className="flex gap-6 animate-scroll hover:pause w-max">
                            {[...defaultTestimonials, ...defaultTestimonials, ...defaultTestimonials, ...defaultTestimonials].map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 flex-shrink-0 w-[280px] sm:w-[350px] transition-transform hover:scale-[1.02]"
                                >
                                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base ${index % 3 === 0 ? 'bg-gradient-to-br from-pink-400 to-rose-500' :
                                            index % 3 === 1 ? 'bg-gradient-to-br from-blue-400 to-indigo-500' :
                                                'bg-gradient-to-br from-green-400 to-emerald-500'
                                            }`}>
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                                            <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-600 italic mb-3 sm:mb-4 leading-relaxed line-clamp-4">"{testimonial.quote}"</p>
                                    <div className="flex gap-0.5 sm:gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* SEO Content Section */}
            {seoContent && (
                <div className="py-12 bg-white border-t border-gray-100">
                    <div className="max-w-5xl mx-auto px-4">
                        {seoContent}
                    </div>
                </div>
            )}

            {/* Animation Styles */}
            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); } /* Move 1/4th because we quadrupled the list */
        }
        .animate-scroll {
            animation: scroll 40s linear infinite;
        }
        .hover\:pause:hover {
            animation-play-state: paused;
        }
      `}</style>
            <Footer />
        </div>
    );
};

export default ToolPageLayout;
