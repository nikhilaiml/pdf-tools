'use client';

import { useState } from 'react';
import { PDFDocument } from 'pdf-lib';

export default function DeletePagesPage() {
  const [file, setFile] = useState<File | null>(null);
  const [pagesToDelete, setPagesToDelete] = useState('');
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState<number | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const bytes = await selectedFile.arrayBuffer();
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
      const blob = new Blob([newBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `deleted-pages-${Date.now()}.pdf`;
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
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Delete PDF Pages</h1>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-4 w-full"
      />

      {pageCount && (
        <p className="text-sm mb-3">Total pages: {pageCount}</p>
      )}

      <input
        type="text"
        placeholder="Pages (e.g. 1,3-5)"
        value={pagesToDelete}
        onChange={e => setPagesToDelete(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded"
      />

      <button
        onClick={handleDelete}
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Processing...' : 'Delete Pages'}
      </button>
    </div>
  );
}
