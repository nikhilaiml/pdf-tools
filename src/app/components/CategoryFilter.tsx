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
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => handleClick('all')}
        className={`px-4 py-2 rounded-lg ${activeCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={`px-4 py-2 rounded-lg ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-400'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
