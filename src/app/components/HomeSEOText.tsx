'use client';

export default function HomeSEOText() {
    return (
        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Popular Online PDF Tools Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Popular Online PDF Tools</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">PDF Combine Files</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Combine multiple PDF files into a single document instantly. Our tool preserves the quality of your pages while merging them securely in the correct order.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Online PDF Editor</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Edit your PDF files directly in your browser. Add text, images, or annotations to your documents without needing complex software or installations.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">PDF Joiner</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Join separate PDF documents together into one organized file. Perfect for bringing reports, invoices, and other documents into a unified format.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Online PDF Merger</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Merge PDF files quickly and securely online. Select your files, arrange them as needed, and download your merged document in seconds.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Convert Files Easily Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Convert Files Easily</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">JPG to PDF Converter</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Convert your JPG images into high-quality PDF documents. Our converter handles file sizing and orientation to produce a professional PDF from your photos.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Picture to PDF Converter</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Turn any picture into a PDF file instantly. Whether it's a PNG, BMP, or TIFF, our tool converts your images while maintaining visual clarity.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-800 mb-3">Convert PDF to Image</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Extract pages from your PDF and save them as high-resolution images. Convert typically into JPG or PNG formats for easy sharing and viewing.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
