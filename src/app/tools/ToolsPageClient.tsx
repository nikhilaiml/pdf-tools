'use client';

import { useState } from 'react';
import { tools } from './tools';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const categoryConfig: Record<string, { label: string; icon: string; color: string }> = {
  basic: { label: 'Organize & Edit', icon: '📑', color: 'from-blue-500 to-indigo-600' },
  convert: { label: 'Convert PDF', icon: '🔄', color: 'from-emerald-500 to-teal-600' },
  edit: { label: 'Edit & Annotate', icon: '✏️', color: 'from-amber-500 to-orange-600' },
  security: { label: 'Security & Privacy', icon: '🔒', color: 'from-rose-500 to-red-600' },
  utility: { label: 'Utility Tools', icon: '🛠️', color: 'from-violet-500 to-purple-600' },
  advanced: { label: 'Advanced Tools', icon: '⚡', color: 'from-cyan-500 to-blue-600' },
  ai: { label: 'AI-Powered', icon: '🤖', color: 'from-pink-500 to-fuchsia-600' },
  workflow: { label: 'Workflow & Batch', icon: '📋', color: 'from-lime-500 to-green-600' },
};

const ToolsPageClient = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(tools.map((tool) => tool.category)));

  // Group tools by category for categorized view
  const groupedTools = categories.reduce((acc, cat) => {
    acc[cat] = filteredTools.filter((t) => t.category === cat);
    return acc;
  }, {} as Record<string, typeof tools>);

  const showCategorized = selectedCategory === 'all' && !searchQuery;

  return (
    <div className="bg-[#faf8f5] min-h-screen text-slate-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-indigo-400/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            All Free PDF Tools – Complete List
          </h1>
          <p className="text-indigo-100/80 text-lg max-w-2xl mx-auto mb-8">
            Browse {tools.length}+ free online PDF tools. No signup required. No watermark. Works on any device.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <SearchBar onSearch={setSearchQuery} />
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-3xl mx-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
              }`}
            >
              All Tools
            </button>
            {categories.map((cat) => {
              const config = categoryConfig[cat] || { label: cat, icon: '📄', color: '' };
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat
                      ? 'bg-white text-slate-900 shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
                  }`}
                >
                  <span>{config.icon}</span>
                  {config.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {showCategorized ? (
            // Categorized View
            <div className="space-y-12">
              {categories.map((cat) => {
                const catTools = groupedTools[cat];
                if (!catTools || catTools.length === 0) return null;
                const config = categoryConfig[cat] || { label: cat, icon: '📄', color: 'from-gray-500 to-gray-600' };
                return (
                  <div key={cat}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${config.color} flex items-center justify-center text-lg shadow-md`}>
                        {config.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">{config.label}</h2>
                        <p className="text-sm text-slate-500">{catTools.length} tools</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {catTools.map((tool) => (
                        <ToolCard key={tool.id} tool={tool} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // Flat filtered view
            <>
              <p className="text-sm text-slate-500 mb-6">
                {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
            </>
          )}

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <p className="text-lg font-medium text-slate-700 mb-2">No tools found</p>
              <p className="text-slate-500">Try a different search term or category.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-4 px-6 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Why Use UsePDF.in PDF Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🆓 100% Free, No Tricks</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                All our PDF tools are completely free to use. No hidden charges, no premium plans needed, no signup walls.
                Just upload your PDF and get the job done instantly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🔒 Your Files Stay Private</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your files are processed securely and automatically deleted within 1 hour.
                We never store, share, or access your documents.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">📱 Works on Any Device</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Use our tools on desktop, tablet, or mobile. No app download needed.
                Works perfectly in Chrome, Firefox, Safari, and Edge browsers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">🇮🇳 Built for Indian Users</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Optimized for Indian internet speeds. Perfect for compressing Aadhaar and PAN card PDFs,
                preparing government form uploads, and more.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Most Popular Tools</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { name: 'Compress PDF', href: '/tools/compress-pdf' },
                { name: 'Merge PDF', href: '/tools/merge-pdf' },
                { name: 'Split PDF', href: '/tools/split-pdf' },
                { name: 'PDF to JPG', href: '/tools/pdf-to-jpg' },
                { name: 'PDF to Word', href: '/tools/pdf-to-word' },
                { name: 'JPG to PDF', href: '/tools/jpg-to-pdf' },
                { name: 'Rotate PDF', href: '/tools/rotate-pdf' },
                { name: 'Delete Pages', href: '/tools/delete-pdf-pages' },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-100 transition-colors"
                >
                  {tool.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ToolsPageClient;
