import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/10 px-8 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center gap-2 group">
          <span className="material-icons text-blue-500 group-hover:text-blue-400 transition-colors">description</span>
          <span>PDF Tools</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/tools" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            All Tools
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
