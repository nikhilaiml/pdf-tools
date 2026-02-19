'use client';


import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Logo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xl font-bold text-gray-900">
                UsePDF <span className="text-indigo-600 hidden sm:inline">– Free Online PDF Tools</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              UsePDF provides secure, browser-based PDF tools. No file uploads. 100% free and private.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Files are processed locally in your browser.
            </div>
          </div>

          {/* Column 2: Tools (SEO Optimized) */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Popular PDF Tools</h4>
            <ul className="space-y-3">
              <li><Link href="/tools/merge-pdf" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Merge PDF Online Free</Link></li>
              <li><Link href="/tools/split-pdf" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Split PDF Online Free</Link></li>
              <li><Link href="/tools/compress-pdf" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Compress PDF Online</Link></li>
              <li><Link href="/tools/pdf-to-word" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">PDF to Word Converter</Link></li>
              <li><Link href="/tools/pdf-to-jpg" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Convert PDF to JPG</Link></li>
              <li><Link href="/tools/rotate-pdf" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Rotate PDF Pages</Link></li>
              <li><Link href="/tools/delete-pdf-pages" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Delete PDF Pages</Link></li>
              <li><Link href="/tools/view-metadata" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">View PDF Metadata</Link></li>
              <li><Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center gap-1 mt-4">View All PDF Tools →</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Company & Support</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">About UsePDF</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Contact Us</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Blog</Link></li>
              <li><Link href="/sitemap.xml" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Sitemap</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h4 className="text-gray-900 font-bold mb-6">Legal & Privacy</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Cookie Policy</Link></li>
              <li><Link href="/gdpr" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">GDPR Compliance</Link></li>
              <li><Link href="/security" className="text-gray-500 hover:text-indigo-600 transition-colors text-sm block">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} UsePDF.in. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
