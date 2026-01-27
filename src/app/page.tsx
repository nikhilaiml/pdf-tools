import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ToolsGrid from './components/ToolsGrid';
import Features from './components/Features';
import PremiumSection from './components/PremiumSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-[#faf8f5] min-h-screen text-slate-800 font-sans selection:bg-indigo-500/30">
      <Navbar />

      <main className="relative">
        <Hero />
        <ToolsGrid />
        <Features />
        <PremiumSection />
      </main>

      <Footer />
    </div>
  );
}
