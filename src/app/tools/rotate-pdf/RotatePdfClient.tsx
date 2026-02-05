'use client';

import { useState, useEffect, useRef } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import { Loader2, Cloud, RotateCw, LayoutTemplate, Smartphone, MousePointerClick, RefreshCw } from 'lucide-react';
import ToolPageLayout from '../../components/ToolPageLayout';

interface RotatePdfClientProps {
  seoContent?: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const RotatePdfClient = ({ seoContent, title, subtitle }: RotatePdfClientProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [renderTrigger, setRenderTrigger] = useState(0);

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile.type === 'application/pdf' || selectedFile.name.toLowerCase().endsWith('.pdf')) {
      setFile(selectedFile);
      setRotation(0); // Reset rotation on new file
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

        // Adjust scale to fit container
        const viewport = page.getViewport({ scale: 0.8 });
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
  }, [file, renderTrigger]); // Re-render if file changes

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
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + rotation));
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

  // Knob Drag Logic
  const knobRef = useRef<HTMLDivElement>(null);
  const [isKnobDragging, setIsKnobDragging] = useState(false);

  const handleKnobMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsKnobDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isKnobDragging || !knobRef.current) return;

      const rect = knobRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      let degree = angle * (180 / Math.PI);

      if (degree < 0) degree += 360;

      // Snap to 90s
      if (degree > 85 && degree < 95) degree = 90;
      if (degree > 175 && degree < 185) degree = 180;
      if (degree > 265 && degree < 275) degree = 270;
      if (degree > 355 || degree < 5) degree = 0;

      setRotation(Math.round(degree));
    };

    const handleMouseUp = () => {
      setIsKnobDragging(false);
    };

    if (isKnobDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isKnobDragging]);


  const steps = [
    { title: "Upload", description: "Select your PDF file." },
    { title: "Rotate", description: "Use presets or drag to rotate." },
    { title: "Download", description: "Save your corrected PDF." }
  ];

  return (
    <ToolPageLayout
      title={title || "Rotate PDF Pages"}
      subtitle={subtitle || "Permanently rotate your PDF documents. Set orientation for all pages instantly."}
      steps={steps}
      ctaText="Rotate PDF"
      onAction={handleRotate}
      loading={loading}
      disabled={!file}
      showCta={false} // We have a custom CTA in the layout
      seoContent={seoContent}
    >
      {!file ? (
        <div
          className={`
            bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-dashed p-6 sm:p-12
            transition-all duration-300 cursor-pointer mb-8
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
          <input
            id="file-input"
            type="file"
            accept=".pdf"
            onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
            className="hidden"
          />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Main Preview Area */}
          <div className="flex-1 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-inner overflow-hidden">
              <div
                className="transition-transform duration-300 ease-out origin-center"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <canvas ref={canvasRef} className="max-w-full h-auto shadow-2xl" />
              </div>
            </div>
            <p className="mt-6 text-gray-500 font-medium flex items-center gap-2">
              <MousePointerClick className="w-4 h-4" />
              Previewing rotation: <span className="text-purple-600 font-bold">{rotation}°</span>
            </p>
            <button
              onClick={() => setFile(null)}
              className="mt-4 text-sm text-red-500 hover:text-red-700 font-medium underline"
            >
              Remove & Upload New File
            </button>
          </div>

          {/* Sidebar Controls */}
          <div className="w-full lg:w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col shrink-0">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <LayoutTemplate className="w-5 h-5 text-purple-500" />
              Rotation Presets
            </h3>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <button
                onClick={() => setRotation(0)}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${rotation === 0 ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-100 hover:border-purple-200 text-gray-600'}`}
              >
                <Smartphone className="w-6 h-6" />
                <span className="text-xs font-bold">Portrait (0°)</span>
              </button>
              <button
                onClick={() => setRotation(90)}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${rotation === 90 ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-100 hover:border-purple-200 text-gray-600'}`}
              >
                <Smartphone className="w-6 h-6 rotate-90" />
                <span className="text-xs font-bold">Landscape (90°)</span>
              </button>
              <button
                onClick={() => setRotation(180)}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${rotation === 180 ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-100 hover:border-purple-200 text-gray-600'}`}
              >
                <Smartphone className="w-6 h-6 rotate-180" />
                <span className="text-xs font-bold">Flip (180°)</span>
              </button>
              <button
                onClick={() => setRotation(270)}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${rotation === 270 ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-100 hover:border-purple-200 text-gray-600'}`}
              >
                <Smartphone className="w-6 h-6 -rotate-90" />
                <span className="text-xs font-bold">Inv. Landscape</span>
              </button>
            </div>

            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-purple-500" />
              Drag to Rotate
            </h3>

            {/* Drag Knob UI */}
            <div className="flex justify-center mb-8 relative">
              <div
                ref={knobRef}
                className="w-32 h-32 rounded-full border-4 border-gray-100 flex items-center justify-center relative bg-gray-50 cursor-grab active:cursor-grabbing shadow-inner"
                onMouseDown={handleKnobMouseDown}
              >
                {/* Center point */}
                <div className="w-4 h-4 bg-purple-500 rounded-full z-10"></div>
                {/* Indicator Line */}
                <div
                  className="absolute w-1 h-14 bg-purple-500 origin-bottom rounded-full"
                  style={{
                    bottom: '50%',
                    transform: `rotate(${rotation}deg)`,
                    transition: isKnobDragging ? 'none' : 'transform 0.3s ease-out'
                  }}
                >
                  <div className="w-3 h-3 bg-purple-600 rounded-full absolute -top-1 -left-1 shadow-md"></div>
                </div>
                {/* Tick marks */}
                {[0, 90, 180, 270].map(d => (
                  <div
                    key={d}
                    className="absolute w-1 h-3 bg-gray-300"
                    style={{
                      height: '10px',
                      transform: `rotate(${d}deg) translateY(-58px)`
                    }}
                  />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-400 font-mono mt-8">
                {rotation}°
              </div>
            </div>

            <button
              onClick={handleRotate}
              disabled={loading}
              className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                }`}
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : <RotateCw size={20} />}
              <span className="text-base">{loading ? 'Rotating...' : 'Rotate PDF Now'}</span>
            </button>

          </div>
        </div>
      )}
    </ToolPageLayout>
  );
};

export default RotatePdfClient;
