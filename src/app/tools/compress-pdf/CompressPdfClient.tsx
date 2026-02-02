'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, FileText, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const CompressPdfPage = ({ seoContent }: { seoContent?: React.ReactNode }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
      setFile(selectedFile);
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

  const handleCompress = async () => {
    if (!file) {
      alert('Please select a file to compress.');
      return;
    }

    setLoading(true);
    try {
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);

      const newPdfBytes = await pdf.save({
        useObjectStreams: true,
        addDefaultPage: false,
        objectsPerTick: 50,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `compressed-${file.name}`;
      link.click();
      alert('PDF compressed successfully!');
    } catch (error) {
      console.error('Error compressing PDF:', error);
      alert(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      title: "1. Upload PDF",
      description: "Upload the PDF file you want to compress by clicking select or dragging it here."
    },
    {
      title: "2. Compress",
      description: "Click the Compress button to automatically optimize your file and reduce its size."
    },
    {
      title: "3. Download",
      description: "Save your optimized, smaller PDF file instantly without losing quality."
    }
  ];

  return (
    <ToolPageLayout
      title="Compress PDF Online – Reduce PDF Size Free"
      subtitle="Compress PDF files online to reduce file size. Quality is preserved as much as possible. Tool is free, browser-based, and no signup required."
      steps={steps}
      ctaText="Compress PDF"
      onAction={handleCompress}
      loading={loading}
      disabled={!file}
      showCta={!!file}
      seoContent={seoContent}
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
        </div>
      ) : (
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl">
            <div className="p-2 sm:p-3 bg-purple-100 rounded-lg">
              <FileText className="text-purple-500 w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 truncate text-sm sm:text-base">{file.name}</p>
              <p className="text-xs sm:text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <button
              onClick={() => setFile(null)}
              className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium"
            >
              Remove
            </button>
          </div>

          <button
            onClick={handleCompress}
            disabled={loading}
            className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
              }`}
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : null}
            <span className="text-sm sm:text-base">{loading ? 'Compressing...' : 'Compress PDF Now'}</span>
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Removes redundant data and optimizes internal structure.
          </p>
        </div>
      )}
    </ToolPageLayout>
  );
};

export default CompressPdfPage;
