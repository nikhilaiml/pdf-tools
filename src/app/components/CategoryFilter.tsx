'use client';

import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  onFilter: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onFilter }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleClick = (category: string) => {
    setActiveCategory(category);
    onFilter(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      <button
        onClick={() => handleClick('all')}
        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === 'all'
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-white/10'
            : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
          }`}
      >
        All Tools
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium capitalize transition-all ${activeCategory === category
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-white/10'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
