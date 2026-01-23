import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-extrabold mb-4">The Ultimate PDF Tool Suite</h1>
      <p className="text-xl text-gray-400 mb-8">A complete set of tools to manage, convert, and edit your PDFs, with a focus on privacy and ease of use.</p>
      <Link href="/tools">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
