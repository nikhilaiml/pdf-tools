'use client';

import { Clock, FileText, MoreVertical, HardDrive } from 'lucide-react';

const mockFiles = [
    { name: 'Contract_Final_Signed.pdf', date: '2 mins ago', size: '2.4 MB' },
    { name: 'Project_Proposal_v3.pdf', date: '1 hour ago', size: '15.8 MB' },
    { name: 'Invoice_OCT_2024.pdf', date: 'Yesterday', size: '1.1 MB' },
    { name: 'Design_System_Specs.pdf', date: '3 days ago', size: '45.2 MB' },
];

export default function RecentFiles() {
    return (
        <div className="hidden lg:block fixed right-8 top-32 w-80 z-20">
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-400" />
                        Recent Files
                    </h3>
                    <button className="text-slate-400 hover:text-white transition-colors">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                </div>

                <div className="space-y-3">
                    {mockFiles.map((file, index) => (
                        <div
                            key={index}
                            className="group flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5"
                        >
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors">
                                <FileText className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                                    {file.name}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                    <span>{file.date}</span>
                                    <span>•</span>
                                    <span>{file.size}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/5">
                    <button className="w-full py-2 text-xs text-center text-slate-400 hover:text-blue-400 transition-colors flex items-center justify-center gap-2">
                        <HardDrive className="w-3 h-3" />
                        Manage All Files
                    </button>
                </div>
            </div>
        </div>
    );
}
