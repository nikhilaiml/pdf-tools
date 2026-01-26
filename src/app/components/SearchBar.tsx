'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-10 relative max-w-2xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <span className="material-icons text-gray-400">search</span>
      </div>
      <input
        type="text"
        placeholder="Search for a PDF tool..."
        value={query}
        onChange={handleChange}
        className="w-full glass-panel text-white rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-lg text-lg placeholder-gray-500"
      />
    </div>
  );
};

export default SearchBar;
