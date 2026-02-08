'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import HomeSEOText from './components/HomeSEOText';
import FAQSection from './components/FAQSection';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <HowItWorks />
        <Features />
        <HomeSEOText />
        <FAQSection />
        {/* <PremiumSection /> Removed to focus on 100% Free messaging */}
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
