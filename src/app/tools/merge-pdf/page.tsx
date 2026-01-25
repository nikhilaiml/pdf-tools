'use client';

import { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Merge, FileText, X } from 'lucide-react';

const MergePdfPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files).filter(f => f.type === 'application/pdf');
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert('Please select at least two files to merge.');
      return;
    }

    setLoading(true);
    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const pdfBytes = await file.arrayBuffer();
        const pdf = await PDFDocument.load(pdfBytes);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfBytes = await mergedPdf.save();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blob = new Blob([mergedPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'merged-document.pdf';
      link.click();
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Merge PDF Files
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Combine multiple PDFs into a single unified document.
      </p>

      <div
        className="flex flex-col items-center justify-center p-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer mb-8"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
          <Merge className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <p className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
          {files.length > 0 ? 'Add More PDFs' : 'Drag & Drop PDFs Here'}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          or click to browse
        </p>
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
      </div>

      {files.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-in fade-in zoom-in duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Files to Merge ({files.length})</h3>
            <button
              onClick={() => setFiles([])}
              className="text-sm text-red-500 hover:text-red-700 hover:underline"
            >
              Clear All
            </button>
          </div>

          <ul className="space-y-3 mb-8">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 overflow-hidden">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <FileText className="flex-shrink-0 text-gray-400" size={20} />
                  <span className="truncate text-sm text-gray-700 dark:text-gray-300">{file.name}</span>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                >
                  <X size={18} />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={handleMerge}
            disabled={loading || files.length < 2}
            className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || files.length < 2 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {loading ? <Loader2 className="animate-spin" /> : <Merge size={20} />}
            <span>{loading ? 'Merging...' : 'Merge PDFs Now'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default MergePdfPage;
