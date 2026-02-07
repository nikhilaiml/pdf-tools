'use client';

import { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, FileText, X, Cloud } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const MergePdfPage = ({ seoContent }: { seoContent?: React.ReactNode }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
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
    setIsDragging(false);
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
    <ToolPageLayout
      title="Merge PDF Online"
      subtitle="Securely combine multiple PDF files into one document. Our merge PDF online tool is fast, free, and works on any device."
      steps={[
        {
          title: "Upload Files",
          description: "Upload your PDF files from your computer or mobile device."
        },
        {
          title: "Reorder Pages",
          description: "Drag and drop the thumbnails to arrange them in the correct order."
        },
        {
          title: "Merge PDF",
          description: "Click to merge your files and download the combined document."
        }
      ]}
      ctaText="Merge PDF"
      onAction={handleMerge}
      loading={loading}
      disabled={files.length < 2}
      showCta={files.length >= 2}
      seoContent={seoContent}
    >
      {/* Upload Area */}
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
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className={`p-4 sm:p-6 rounded-2xl sm:rounded-3xl transition-colors ${isDragging ? 'bg-purple-100' : 'bg-orange-50'}`}>
            <Cloud className={`w-12 h-12 sm:w-16 sm:h-16 ${isDragging ? 'text-purple-500' : 'text-orange-400'}`} strokeWidth={1.5} />
          </div>
        </div>

        <p className={`text-xl sm:text-2xl font-bold text-center mb-2 ${isDragging ? 'text-purple-700' : 'text-gray-800'}`}>
          {files.length > 0 ? 'Add More PDFs' : 'Upload PDF Files'}
        </p>
        <p className="text-sm sm:text-base text-gray-500 text-center">or drag and drop</p>

        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="mt-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4 sm:p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base">Files to Merge ({files.length})</h3>
            <button
              onClick={(e) => { e.stopPropagation(); setFiles([]); }}
              className="text-xs sm:text-sm text-red-500 hover:text-red-700 hover:underline"
            >
              Clear All
            </button>
          </div>

          <ul className="space-y-2 sm:space-y-3">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-2 sm:space-x-3 overflow-hidden">
                  <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </span>
                  <FileText className="flex-shrink-0 text-gray-400" size={18} />
                  <span className="truncate text-xs sm:text-sm text-gray-700">{file.name}</span>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); removeFile(index); }}
                  className="p-1 sm:p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>

          {/* Merge Button inside file list when there are files */}
          <button
            onClick={(e) => { e.stopPropagation(); handleMerge(); }}
            disabled={loading || files.length < 2}
            className={`w-full mt-6 flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || files.length < 2 ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
              }`}
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : null}
            <span className="text-sm sm:text-base">{loading ? 'Merging...' : 'Merge PDF'}</span>
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Files are secured and deleted after 1 hour.
          </p>
        </div>
      )}
    </ToolPageLayout>
  );
};

export default MergePdfPage;
