'use client';

import Link from 'next/link';

const tools = [
  { name: 'Delete Pages', href: '/tools/delete-pages' },
  // Add more tools here
];

const ToolsPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">PDF Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <Link key={tool.name} href={tool.href}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-2 text-white">{tool.name}</h2>
              <p className="text-gray-400">Feature description goes here.</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
