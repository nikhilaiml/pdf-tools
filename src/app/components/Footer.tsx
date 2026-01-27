'use client';

import { FileText, Twitter, Facebook, Linkedin, Github, Instagram, Star } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-indigo-100/50 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center">
                <FileText className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-slate-800">PDF Tools</span>
            </Link>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">
              i-pdf software trusted by 10 million+ and secure.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4 text-sm">About Us</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4 text-sm">Terms of use</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/legal" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">Legal</Link></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-slate-800 font-semibold mb-4 text-sm">Privacy Settings</h4>
            <ul className="space-y-3">
              <li><Link href="/cookies" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">Cookie Policy</Link></li>
              <li><Link href="/gdpr" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">GDPR</Link></li>
              <li><Link href="/security" className="text-slate-500 hover:text-indigo-600 transition-colors text-sm">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} PDF Tools. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-indigo-600 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Star Logo at Bottom */}
        <div className="flex justify-center mt-12">
          <div className="relative">
            <Star className="w-12 h-12 text-indigo-300 fill-indigo-200" />
            <div className="absolute inset-0 bg-indigo-400/20 blur-xl rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
