import Link from 'next/link';
import { Tool } from '../tools/tools';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const toolLink = `/tools/${tool.id}`;

  return (
    <Link href={toolLink}>
      <div className="glass-panel rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20 h-full border border-white/5 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="material-icons text-5xl mb-4 text-blue-400 group-hover:text-blue-300 transition-colors drop-shadow-lg">{tool.icon}</span>
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-200 transition-colors relative z-10">{tool.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed relative z-10 group-hover:text-gray-300">{tool.description}</p>
      </div>
    </Link>
  );
};

export default ToolCard;
