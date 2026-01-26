import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import RecentFiles from './components/RecentFiles';
import Features from './components/Features';
import PremiumSection from './components/PremiumSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0B0F19] min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />

      <main className="relative">
        <Hero />
        <RecentFiles />
        <ToolsGrid />
        <Features />
        <PremiumSection />
      </main>

      <Footer />
    </div>
  );
}
