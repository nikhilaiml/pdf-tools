import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        PDF Tools
      </Link>
      <nav>
        <Link href="/tools" className="text-lg hover:text-gray-400">
          Tools
        </Link>
      </nav>
    </header>
  );
};

export default Header;
