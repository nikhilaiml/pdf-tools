'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Loader2, Trash2, FileText } from 'lucide-react';
import FileUploader from '../../components/FileUploader';

export default function DeletePagesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pagesToDelete, setPagesToDelete] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState<number | null>(null);

  const handleFileChange = async (file: File) => {
    setFile(file);
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    setPageCount(pdf.getPageCount());
  };

  const parsePages = (input: string, maxPages: number) => {
    const pages = new Set<number>();
    input.split(',').forEach(part => {
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(n => parseInt(n.trim(), 10));
        if (start >= 1 && end <= maxPages && start <= end) {
          for (let i = start; i <= end; i++) pages.add(i - 1);
        }
      } else {
        const page = parseInt(part.trim(), 10);
        if (page >= 1 && page <= maxPages) pages.add(page - 1);
      }
    });
    return Array.from(pages).sort((a, b) => b - a);
  };

  const handleDelete = async () => {
    if (!file || !pagesToDelete || !pageCount) {
      alert('Please select a PDF and valid pages.');
      return;
    }

    try {
      setLoading(true);
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);
      const pages = parsePages(pagesToDelete, pdf.getPageCount());

      if (pages.length === 0) {
        alert('No valid pages to delete.');
        return;
      }

      pages.forEach(index => pdf.removePage(index));

      const newBytes = await pdf.save();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blob = new Blob([newBytes as any], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `deleted-pages-${file.name}`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert('Failed to process PDF.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">
        Delete PDF Pages
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
        Remove unwanted pages from your document.
      </p>

      {!file ? (
        <FileUploader onFileSelect={handleFileChange} label="Select PDF" />
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto animate-in fade-in zoom-in duration-300">
          <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
            <FileText className="text-blue-500" size={24} />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-900 dark:text-white truncate max-w-[200px]">{file.name}</p>
                <span className="text-sm text-gray-500 bg-white dark:bg-gray-800 px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
                  {pageCount} Pages
                </span>
              </div>
              <button
                onClick={() => { setFile(null); setPageCount(null); }}
                className="text-xs text-red-500 hover:text-red-700 hover:underline mt-1"
              >
                Change be file
              </button>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Pages to Delete
              <span className="text-gray-400 font-normal ml-2">(e.g. 1, 3-5, 10)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 2, 4-6"
              value={pagesToDelete}
              onChange={e => setPagesToDelete(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 dark:text-white"
            />
          </div>

          <button
            onClick={handleDelete}
            disabled={loading || !pagesToDelete}
            className={`w-full flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading || !pagesToDelete ? 'opacity-50 cursor-not-allowed' : ''
              }`}
          >
            {loading ? <Loader2 className="animate-spin" /> : <Trash2 size={20} />}
            <span>{loading ? 'Deleting...' : 'Delete Pages'}</span>
          </button>
        </div>
      )}
    </div>
  );
}
