'use client';

import { useState, useEffect, useRef } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import { Loader2, FileText, Cloud, RotateCw } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

const RotatePdfPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState<number>(90);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Render PDF Preview
  useEffect(() => {
    if (!file || !canvasRef.current) return;

    const renderPreview = async () => {
      try {
        const pdfjsLib = await import('pdfjs-dist');
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

        const fileData = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: fileData });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        const viewport = page.getViewport({ scale: 0.6 });
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (canvas && context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
          };
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await page.render(renderContext as any).promise;
        }
      } catch (error) {
        console.error('Preview Error:', error);
      }
    };

    renderPreview();
  }, [file]);

  const handleRotate = async () => {
    if (!file) {
      alert('Please select a file to rotate.');
      return;
    }

    setLoading(true);
    try {
      const pdfBytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(pdfBytes);

      const pages = pdf.getPages();
      pages.forEach(page => {
        page.setRotation(degrees(rotation));
      });

      const newPdfBytes = await pdf.save();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const blob = new Blob([newPdfBytes as any], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `rotated-${file.name}`;
      link.click();
      alert('PDF rotated successfully!');
    } catch (error) {
      console.error('Error rotating PDF:', error);
      alert(`An error occurred: ${(error as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      title: "Step 1: Upload PDF",
      description: "Select or drag and drop your PDF file that you want to rotate."
    },
    {
      title: "Step 2: Choose Angle",
      description: "Select the rotation angle - 90°, 180°, or 270° to rotate all pages."
    },
    {
      title: "Step 3: Download",
      description: "Get your rotated PDF instantly. All pages will be rotated permanently."
    }
  ];

  return (
    <ToolPageLayout
      title="Rotate Your PDF"
      subtitle="Permanently rotate all pages in your PDF document."
      steps={steps}
      ctaText="Rotate PDF"
      onAction={handleRotate}
      loading={loading}
      disabled={!file}
      showCta={!!file}
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

          {/* Preview */}
          <div className="mb-6 bg-gray-100 rounded-xl p-4 flex items-center justify-center min-h-[200px] overflow-hidden">
            <div
              className="shadow-lg transition-transform duration-500 ease-in-out bg-white"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <canvas ref={canvasRef} className="max-w-full h-auto" style={{ maxHeight: '250px' }} />
            </div>
          </div>

          {/* Rotation Options */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Rotation Angle</label>
            <div className="grid grid-cols-3 gap-3">
              {[90, 180, 270].map((deg) => (
                <button
                  key={deg}
                  onClick={() => setRotation(deg)}
                  className={`py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${rotation === deg
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <RotateCw size={16} />
                  {deg}°
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleRotate}
            disabled={loading}
            className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
              }`}
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : null}
            <span className="text-sm sm:text-base">{loading ? 'Rotating...' : 'Rotate PDF Now'}</span>
          </button>
        </div>
      )}
    </ToolPageLayout>
  );
};

export default RotatePdfPage;
