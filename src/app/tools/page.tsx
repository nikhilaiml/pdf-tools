'use client';

import { useState } from 'react';
import { tools } from './tools';
import ToolCard from '../components/ToolCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

const ToolsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = tool.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(tools.map((tool) => tool.category)));

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">PDF Tools</h1>
      <div className="max-w-4xl mx-auto">
        <SearchBar onSearch={setSearchQuery} />
        <CategoryFilter categories={categories} onFilter={setSelectedCategory} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.title} tool={tool} />
        ))}
      </div>
      {filteredTools.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No tools found matching your criteria.</p>
      )}
    </div>
  );
};

export default ToolsPage;
