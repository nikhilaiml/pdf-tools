'use client';

import { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';

const MergePdfPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
    // Reset input via ref to ensure onChange triggers next time
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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

      const blob = new Blob([mergedPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'merged.pdf';
      link.click();
      alert('PDFs merged successfully!');
      setFiles([]); // Clear files after successful merge
    } catch (error) {
      console.error('Error merging PDFs:', error);
      alert(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Merge PDF</h1>
      <div
        className="mb-8 p-6 bg-gray-800 rounded-lg border border-dashed border-gray-600 hover:border-gray-500 transition-colors cursor-pointer"
        onClick={triggerFileInput}
      >
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden"
        />
        <div className="text-center">
          <span className="material-icons text-4xl text-gray-400 mb-2">upload_file</span>
          <p className="font-bold text-lg text-blue-400">
            {files.length > 0 ? 'Add More PDFs' : 'Click to Select PDFs'}
          </p>
          <p className="text-gray-400 mt-2 text-sm">Select multiple files to merge</p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mb-8 text-left bg-gray-800 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Selected Files ({files.length}):</h3>
          <ul className="space-y-2">
            {files.map((file, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded">
                <span className="truncate mr-4 text-sm md:text-base">{file.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering file input if inside clickable area
                    removeFile(index);
                  }}
                  className="bg-red-500/20 hover:bg-red-500/40 text-red-300 hover:text-red-200 px-3 py-1 rounded text-sm transition-colors"
                  title="Remove file"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleMerge}
        disabled={loading || files.length < 2}
        className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-10 rounded-lg text-lg w-full transition-colors ${(loading || files.length < 2) ? 'opacity-50 cursor-not-allowed bg-gray-600' : ''
          }`}
      >
        {loading ? 'Merging...' : 'Merge PDFs'}
      </button>
    </div>
  );
};

export default MergePdfPage;
