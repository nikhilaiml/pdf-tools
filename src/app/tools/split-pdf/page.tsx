'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Scissors, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

const SplitPdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [startPage, setStartPage] = useState('');
  const [endPage, setEndPage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (file: File) => {
    setFile(file);
  };

  const handleSplit = async () => {
    if (!file || !startPage || !endPage) {
      alert('Please select a file and specify a valid page range.');
      return;
    }

    setLoading(true);
    try {
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const newPdf = await PDFDocument.create();

      const start = parseInt(startPage, 10) - 1;
      const end = parseInt(endPage, 10);
      const totalPages = pdf.getPageCount();

      if (isNaN(start) || isNaN(end) || start < 0 || end > totalPages || start >= end) {
        alert(`Invalid range. The document has ${totalPages} pages. Please check your inputs.`);
        setLoading(false);
        return;
      }

      const pageIndices = Array.from({ length: end - start }, (_, i) => start + i);
      const copiedPages = await newPdf.copyPages(pdf, pageIndices);
      copiedPages.forEach((page) => newPdf.addPage(page));

      const newPdfBytes = await newPdf.save();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `split-${start + 1}-${end}-${file.name}`;
      link.click();
      alert('PDF split successfully!');
    } catch (error) {
      console.error('Error splitting PDF:', error);
      alert(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Split PDF
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Extract specific pages from your PDF document.
      </p>

      {!file ? (
        <FileUploader onFileSelect={handleFileChange} label="Select PDF to Split" />
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
          <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <FileText className="text-blue-500" size={24} />
            <div>
              <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</p>
              <button
                onClick={() => setFile(null)}
                className="text-xs text-red-500 hover:text-red-700 hover:underline"
              >
                Change be file
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Start Page</label>
              <input
                type="number"
                min="1"
                placeholder="e.g. 1"
                value={startPage}
                onChange={(e) => setStartPage(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Page</label>
              <input
                type="number"
                min="1"
                placeholder="e.g. 5"
                value={endPage}
                onChange={(e) => setEndPage(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <button
            onClick={handleSplit}
            disabled={loading}
            className={`w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {loading ? <Loader2 className="animate-spin" /> : <Scissors size={20} />}
            <span>{loading ? 'Splitting PDF...' : 'Split PDF'}</span>
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Note: The extracted pages will be saved as a new PDF file.
          </p>
        </div>
      )}
    </div>
  );
};

export default SplitPdfPage;
