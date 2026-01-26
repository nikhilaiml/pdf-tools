'use client';

import { FileText, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <FileText className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">PDF Tools</span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed">
              The most comprehensive online PDF capabilities. Secure, fast, and easy to use. Trusted by millions of users worldwide.
            </p>
            <div className="flex gap-4">
              {/* App Store Buttons Placeholder */}
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3 transition-colors">
                <div className="bg-white rounded-full p-0.5 w-6 h-6 flex items-center justify-center">
                  <span className="text-black font-bold text-xs">A</span>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400">Download on the</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3 transition-colors">
                <div className="bg-white rounded-full p-0.5 w-6 h-6 flex items-center justify-center">
                  <span className="text-black font-bold text-xs">P</span>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400">GET IT ON</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Business</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Education</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Developers</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Security</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">GDPR</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} PDF Tools. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
            <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
