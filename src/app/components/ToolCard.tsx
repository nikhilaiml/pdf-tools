import Link from 'next/link';
import { Tool } from '../tools/tools';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const toolLink = `/tools/${tool.title.toLowerCase().replace(/[ /]/g, '-')}`;

  return (
    <Link href={toolLink}>
      <div className="bg-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-600 transition-colors h-full">
        <span className="material-icons text-4xl mb-4">{tool.icon}</span>
        <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
        <p className="text-gray-400">{tool.description}</p>
      </div>
    </Link>
  );
};

export default ToolCard;
