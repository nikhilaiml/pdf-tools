'use client';

import { useState, useEffect, useRef } from 'react';
import { Loader2, FileText, Play, Pause, Square, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

// We need to properly type the window.speechSynthesis API
interface SpeechState {
    isPlaying: boolean;
    isPaused: boolean;
    text: string;
    progress: number; // 0 to 100
}

const PdfToAudioClient = () => {
    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [speechState, setSpeechState] = useState<SpeechState>({
        isPlaying: false,
        isPaused: false,
        text: '',
        progress: 0
    });
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
    const [selectedVoice, setSelectedVoice] = useState<string>('');
    const [rate, setRate] = useState(1);
    const [isDragging, setIsDragging] = useState(false);

    // Use a ref to keep track of the utterance so we can control it
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        const updateVoices = () => {
            const availableVoices = window.speechSynthesis.getVoices();
            setVoices(availableVoices);
            if (availableVoices.length > 0 && !selectedVoice) {
                // Try to find a default English voice
                const defaultVoice = availableVoices.find(v => v.lang.includes('en') && v.default)
                    || availableVoices.find(v => v.lang.includes('en'))
                    || availableVoices[0];
                setSelectedVoice(defaultVoice.name);
            }
        };

        updateVoices();
        window.speechSynthesis.onvoiceschanged = updateVoices;

        return () => {
            window.speechSynthesis.cancel();
        };
    }, [selectedVoice]);

    const extractText = async (file: File) => {
        setLoading(true);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

            const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
            let fullText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const pageText = textContent.items.map((item: any) => item.str).join(' ');
                fullText += pageText + ' ';
            }

            setSpeechState(prev => ({ ...prev, text: fullText }));
        } catch (error) {
            console.error('Error extracting text:', error);
            alert('Failed to extract text from PDF.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileSelect = (selectedFile: File) => {
        setFile(selectedFile);
        window.speechSynthesis.cancel();
        setSpeechState({ isPlaying: false, isPaused: false, text: '', progress: 0 });
        extractText(selectedFile);
    };

    const handlePlay = () => {
        if (speechState.isPaused) {
            window.speechSynthesis.resume();
            setSpeechState(prev => ({ ...prev, isPlaying: true, isPaused: false }));
            return;
        }

        if (speechState.isPlaying) return;

        const utterance = new SpeechSynthesisUtterance(speechState.text);
        utterance.rate = rate;

        const voice = voices.find(v => v.name === selectedVoice);
        if (voice) utterance.voice = voice;

        utterance.onend = () => {
            setSpeechState(prev => ({ ...prev, isPlaying: false, isPaused: false, progress: 100 }));
        };

        utterance.onboundary = (event) => {
            const charIndex = event.charIndex;
            const textLength = speechState.text.length;
            setSpeechState(prev => ({ ...prev, progress: Math.min((charIndex / textLength) * 100, 100) }));
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setSpeechState(prev => ({ ...prev, isPlaying: true, isPaused: false }));
    };

    const handlePause = () => {
        window.speechSynthesis.pause();
        setSpeechState(prev => ({ ...prev, isPlaying: true, isPaused: true }));
    };

    const handleStop = () => {
        window.speechSynthesis.cancel();
        setSpeechState(prev => ({ ...prev, isPlaying: false, isPaused: false, progress: 0 }));
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileSelect(e.dataTransfer.files[0]);
        }
    };

    const steps = [
        {
            title: "Step 1: Upload PDF",
            description: "Upload the PDF document you want to listen to."
        },
        {
            title: "Step 2: Configure Voice",
            description: "Select your preferred voice and playback speed."
        },
        {
            title: "Step 3: Listen",
            description: "Play, pause, and control the audio playback of your document."
        }
    ];

    return (
        <ToolPageLayout
            title="PDF to Audio"
            subtitle="Convert your PDF documents into spoken audio instantly."
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
                    onClick={() => document.getElementById('audio-upload')?.click()}
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
                        id="audio-upload"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                    />
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
                    <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <FileText className="text-pink-500" size={24} />
                            <div>
                                <p className="font-medium text-gray-900 truncate max-w-[200px]">{file.name}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                handleStop();
                                setFile(null);
                            }}
                            className="text-xs text-red-500 hover:text-red-700 hover:underline"
                        >
                            Change File
                        </button>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <Loader2 className="w-10 h-10 text-pink-500 animate-spin mx-auto mb-4" />
                            <p className="text-gray-600">Extracting text from PDF...</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* Controls */}
                            <div className="flex flex-col gap-4">
                                <div className="flex justify-center gap-4">
                                    {!speechState.isPlaying || speechState.isPaused ? (
                                        <button
                                            onClick={handlePlay}
                                            disabled={!speechState.text}
                                            className="w-16 h-16 rounded-full bg-pink-600 hover:bg-pink-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Play fill="currentColor" size={32} className="ml-1" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handlePause}
                                            className="w-16 h-16 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-900 flex items-center justify-center shadow-lg transform transition-all"
                                        >
                                            <Pause fill="currentColor" size={32} />
                                        </button>
                                    )}

                                    <button
                                        onClick={handleStop}
                                        disabled={!speechState.isPlaying && speechState.progress === 0}
                                        className="w-16 h-16 rounded-full bg-gray-100 hover:text-red-600 text-gray-500 flex items-center justify-center border border-gray-200"
                                    >
                                        <Square fill="currentColor" size={24} />
                                    </button>
                                </div>

                                {/* Progress Bar */}
                                <div>
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                        <span>Progress</span>
                                        <span>{Math.round(speechState.progress)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${speechState.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>

                            {/* Settings */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Voice</label>
                                    <select
                                        value={selectedVoice}
                                        onChange={(e) => setSelectedVoice(e.target.value)}
                                        className="w-full text-sm bg-gray-50 border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-pink-500"
                                    >
                                        {voices.map(voice => (
                                            <option key={voice.name} value={voice.name}>
                                                {voice.name.slice(0, 30)}{voice.name.length > 30 ? '...' : ''} ({voice.lang})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">Speed: {rate}x</label>
                                    <input
                                        type="range"
                                        min="0.5"
                                        max="2"
                                        step="0.1"
                                        value={rate}
                                        onChange={(e) => {
                                            setRate(parseFloat(e.target.value));
                                        }}
                                        className="w-full accent-pink-500"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </ToolPageLayout>
    );
};

export default PdfToAudioClient;
