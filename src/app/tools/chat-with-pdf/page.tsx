'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, FileText, RefreshCw, AlertCircle, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface TextChunk {
    id: number;
    text: string;
    page: number;
}

interface Message {
    id: string;
    role: 'user' | 'bot';
    content: string;
    sources?: TextChunk[];
}

export default function ChatWithPdfPage() {
    const [file, setFile] = useState<File | null>(null);
    const [chunks, setChunks] = useState<TextChunk[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleFileSelect = async (selectedFile: File) => {
        if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
            setFile(selectedFile);
            setError(null);
            setMessages([]);
            setChunks([]);
            await processPdf(selectedFile);
        } else {
            alert('Please select a valid PDF file.');
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const processPdf = async (fileToProcess: File) => {
        setIsProcessing(true);
        try {
            const arrayBuffer = await fileToProcess.arrayBuffer();
            const pdfjsLib = await import('pdfjs-dist');

            if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
                pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;
            }

            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            const extractedChunks: TextChunk[] = [];
            let chunkId = 0;

            // Extract text from all pages
            // Limit pages to avoid browser freeze for huge docs
            const maxPages = Math.min(pdf.numPages, 50);

            for (let i = 1; i <= maxPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    .map((item: any) => item.str)
                    .join(' ');

                // Simple chunking by paragraph (double newline) or sentence
                // We'll split by periods followed by space for granular chunks, 
                // or just keep paragraphs. Let's try splitting by rough sentence groups (approx 200 chars)

                // Better approach: Split by ". " but group them to have context
                const sentences = pageText.match(/[^.!?]+[.!?]+/g) || [pageText];

                let currentChunk = "";

                sentences.forEach(sentence => {
                    if (currentChunk.length + sentence.length > 300) {
                        extractedChunks.push({
                            id: chunkId++,
                            text: currentChunk.trim(),
                            page: i
                        });
                        currentChunk = sentence;
                    } else {
                        currentChunk += " " + sentence;
                    }
                });

                if (currentChunk.trim().length > 0) {
                    extractedChunks.push({
                        id: chunkId++,
                        text: currentChunk.trim(),
                        page: i
                    });
                }
            }

            setChunks(extractedChunks);
            setMessages([{
                id: 'intro',
                role: 'bot',
                content: `I've read ${fileToProcess.name}. I found ${extractedChunks.length} text segments. Ask me anything about the document!`
            }]);

        } catch (err) {
            console.error("PDF Processing Error:", err);
            setError("Failed to read the PDF. It might be a scanned image or encrypted.");
        } finally {
            setIsProcessing(false);
        }
    };

    const findRelevantChunks = (query: string): TextChunk[] => {
        if (!query.trim()) return [];

        const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 2);

        const scored = chunks.map(chunk => {
            const textLower = chunk.text.toLowerCase();
            let score = 0;
            terms.forEach(term => {
                if (textLower.includes(term)) score += 1;
            });
            return { chunk, score };
        });

        // Filter valid scores and sort
        return scored
            .filter(item => item.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 3) // Top 3
            .map(item => item.chunk);
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate "typing"
        setTimeout(() => {
            const relevantFor = input;
            const context = findRelevantChunks(relevantFor);

            let botContent = "";
            if (context.length === 0) {
                botContent = "I couldn't find any specific text matching your question in the document.";
            } else {
                botContent = "Here are the most relevant parts I found:";
            }

            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                content: botContent,
                sources: context
            };

            setMessages(prev => [...prev, botMsg]);
        }, 500);
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Upload the PDF document you want to chat with."
        },
        {
            title: "Step 2: Ask Questions",
            description: "Type your questions about the document in the chat."
        },
        {
            title: "Step 3: Get Answers",
            description: "Get instant answers based on the content of your PDF."
        }
    ];

    return (
        <ToolPageLayout
            title="Chat with PDF"
            subtitle="Interact with your documents using AI. Ask questions and extract information instantly."
            steps={steps}
            showCta={false}
        >
            {!file ? (
                <div
                    className={`
                        bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-6 sm:p-12
                        transition-all duration-300 cursor-pointer
                        ${isDragging
                            ? 'border-purple-500 bg-purple-50 scale-[1.02]'
                            : 'border-orange-200 hover:border-purple-400 hover:shadow-2xl'
                        }
                    `}
                    onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                    onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-input')?.click()}
                >
                    <div className="flex justify-center mb-4 sm:mb-6">
                        <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors ${isDragging ? 'bg-purple-100' : 'bg-orange-50'}`}>
                            <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400'}`} strokeWidth={1.5} />
                        </div>
                    </div>

                    <p className={`text-xl sm:text-2xl font-bold text-center mb-2 ${isDragging ? 'text-purple-700' : 'text-gray-800'}`}>
                        Drag & Drop PDF Here
                    </p>
                    <p className="text-sm sm:text-base text-gray-500 text-center">or click to browse</p>

                    <input
                        id="file-input"
                        type="file"
                        accept=".pdf"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                        className="hidden"
                    />
                    {error && (
                        <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                            <AlertCircle className="mr-2" size={20} />
                            {error}
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 overflow-hidden h-[600px]">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <FileText className="text-blue-500" size={20} />
                            </div>
                            <span className="font-semibold text-gray-800 truncate max-w-[200px]">{file.name}</span>
                        </div>
                        <button
                            onClick={() => setFile(null)}
                            className="text-xs text-gray-500 hover:text-red-500 flex items-center hover:underline"
                        >
                            <RefreshCw size={12} className="mr-1" /> New File
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50/50">
                        {isProcessing && (
                            <div className="flex flex-col items-center justify-center py-10 opacity-70">
                                <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-2" />
                                <p className="text-sm text-gray-500">Reading document...</p>
                            </div>
                        )}

                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl p-4 shadow-sm
                                    ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-white border border-gray-200 rounded-bl-none'
                                    }
                                `}>
                                    <div className="flex items-center space-x-2 mb-1 opacity-80 text-xs">
                                        {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                                        <span className="uppercase font-bold tracking-wider">{msg.role === 'user' ? 'You' : 'PDF Bot'}</span>
                                    </div>

                                    <div className="mb-2 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
                                        {msg.content}
                                    </div>

                                    {/* Citations/Excerpts */}
                                    {msg.sources && msg.sources.length > 0 && (
                                        <div className="space-y-2 mt-4 pt-3 border-t border-gray-200/20">
                                            {msg.sources.map(source => (
                                                <div key={source.id} className="bg-gray-50/50 p-3 rounded text-sm border-l-4 border-blue-400">
                                                    <p className="italic mb-1 text-gray-600">"{source.text}..."</p>
                                                    <span className="text-xs font-bold text-gray-400">Page {source.page}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-4 bg-white border-t border-gray-100">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={isProcessing ? "Processing..." : "Ask a question..."}
                                disabled={isProcessing}
                                className="flex-1 bg-gray-100 border-0 rounded-xl px-5 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isProcessing}
                                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </ToolPageLayout>
    );
}
