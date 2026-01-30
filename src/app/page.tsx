'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import Features from './components/Features';
import PremiumSection from './components/PremiumSection';
import Footer from './components/Footer';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialSearch = searchParams.get('search') || '';
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // Sync state with URL
  useEffect(() => {
    const currentSearch = searchParams.get('search') || '';
    if (currentSearch !== searchQuery) {
      setSearchQuery(currentSearch);
    }
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Update URL without full reload
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    router.replace(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-[#faf8f5] min-h-screen text-slate-800 font-sans selection:bg-indigo-500/30">
      <Navbar />

      <main className="relative">
        <Hero onSearch={handleSearch} initialSearchValue={searchQuery} />
        <ToolsGrid searchQuery={searchQuery} />
        <Features />
        <PremiumSection />
      </main>

      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f5]" />}>
      <HomeContent />
    </Suspense>
  );
}
