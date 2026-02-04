'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import Features from './components/Features';
import HomeSEOText from './components/HomeSEOText';
// ... imports

// ... inside HomeContent ...
        <Hero onSearch={handleSearch} initialSearchValue={searchQuery} />
        <ToolsGrid searchQuery={searchQuery} />
        <Features />
        <HomeSEOText />
        <FAQSection />
{/* <PremiumSection /> Removed to focus on 100% Free messaging */ }

<Footer />
    </div >
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#faf8f5]" />}>
      <HomeContent />
    </Suspense>
  );
}
