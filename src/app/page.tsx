import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-20">

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium tracking-wide">
          v2.0 Now Available
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="block text-white">Unlock Your</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            PDF Potential
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Easy-to-use online PDF tools to merge, split, compress, and convert your files.
          Secure, fast, and completely free.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/tools">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-500/25">
              Explore All PDF Tools
            </button>
          </Link>
          <button className="bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all border border-white/10 backdrop-blur-sm">
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
      </div>

    </div>
  );
};

export default HomePage;
