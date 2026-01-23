export interface Tool {
  title: string;
  description: string;
  icon: string;
  category: string;
}

export const tools: Tool[] = [
  {
    title: 'Merge PDF',
    description: 'Combine multiple PDFs into one document.',
    icon: 'merge_type',
    category: 'basic',
  },
  {
    title: 'Split PDF',
    description: 'Extract specific pages or ranges from a PDF.',
    icon: 'call_split',
    category: 'basic',
  },
  {
    title: 'Compress PDF',
    description: 'Reduce the file size of your PDF.',
    icon: 'compress',
    category: 'basic',
  },
  {
    title: 'Rotate PDF',
    description: 'Rotate the pages of your PDF.',
    icon: 'rotate_90_degrees_cw',
    category: 'basic',
  },
  {
    title: 'Delete Pages',
    description: 'Remove specific pages from a PDF.',
    icon: 'delete',
    category: 'basic',
  },
  {
    title: 'Reorder Pages',
    description: 'Change the order of pages in a PDF.',
    icon: 'reorder',
    category: 'basic',
  },
  {
    title: 'PDF to JPG',
    description: 'Convert PDF pages to JPG images.',
    icon: 'image',
    category: 'convert',
  },
  {
    title: 'JPG to PDF',
    description: 'Convert JPG images to a PDF.',
    icon: 'picture_as_pdf',
    category: 'convert',
  },
  {
    title: 'PDF to Word',
    description: 'Convert a PDF to an editable Word document.',
    icon: 'description',
    category: 'convert',
  },
  {
    title: 'PDF to Excel',
    description: 'Extract tables from a PDF into an Excel spreadsheet.',
    icon: 'table_chart',
    category: 'convert',
  },
  {
    title: 'PDF to PPT',
    description: 'Convert a PDF to a PowerPoint presentation.',
    icon: 'slideshow',
    category: 'convert',
  },
  {
    title: 'Word to PDF',
    description: 'Convert a Word document to a PDF.',
    icon: 'picture_as_pdf',
    category: 'convert',
  },
  {
    title: 'Excel to PDF',
    description: 'Convert an Excel spreadsheet to a PDF.',
    icon: 'picture_as_pdf',
    category: 'convert',
  },
  {
    title: 'PPT to PDF',
    description: 'Convert a PowerPoint presentation to a PDF.',
    icon: 'picture_as_pdf',
    category: 'convert',
  },
  {
    title: 'PDF to Text',
    description: 'Extract text from a PDF.',
    icon: 'text_fields',
    category: 'convert',
  },
  {
    title: 'HTML to PDF',
    description: 'Convert a webpage to a PDF.',
    icon: 'web',
    category: 'convert',
  },
  {
    title: 'Add Watermark',
    description: 'Add a text or image watermark to your PDF.',
    icon: 'branding_watermark',
    category: 'edit',
  },
  {
    title: 'Add Page Numbers',
    description: 'Insert page numbers into your PDF.',
    icon: 'format_list_numbered',
    category: 'edit',
  },
  {
    title: 'Crop PDF',
    description: 'Crop the pages of your PDF.',
    icon: 'crop',
    category: 'edit',
  },
  {
    title: 'Resize Pages',
    description: 'Change the size of the pages in your PDF.',
    icon: 'aspect_ratio',
    category: 'edit',
  },
  {
    title: 'Flatten PDF',
    description: 'Flatten the layers of your PDF.',
    icon: 'layers',
    category: 'edit',
  },
  {
    title: 'Protect PDF',
    description: 'Add a password to your PDF.',
    icon: 'lock',
    category: 'security',
  },
  {
    title: 'Unlock PDF',
    description: 'Remove a password from your PDF.',
    icon: 'lock_open',
    category: 'security',
  },
  {
    title: 'Restrict Printing/Copying',
    description: 'Set permissions on your PDF.',
    icon: 'block',
    category: 'security',
  },
  {
    title: 'View Metadata',
    description: 'View the metadata of your PDF.',
    icon: 'info',
    category: 'security',
  },
  {
    title: 'Remove Metadata',
    description: 'Remove the metadata from your PDF.',
    icon: 'info_outline',
    category: 'security',
  },
  {
    title: 'Repair Corrupted PDF',
    description: 'Attempt to repair a corrupted PDF.',
    icon: 'build',
    category: 'utility',
  },
  {
    title: 'Optimize PDF Size',
    description: 'Further reduce the size of your PDF.',
    icon: 'speed',
    category: 'utility',
  },
  {
    title: 'PDF Version Converter',
    description: 'Change the PDF version of your document.',
    icon: 'system_update_alt',
    category: 'utility',
  },
  {
    title: 'PDF Analytics',
    description: 'Get information about your PDF.',
    icon: 'analytics',
    category: 'utility',
  },
  {
    title: 'PDF Table Extractor',
    description: 'Extract tables from your PDF to Excel or CSV.',
    icon: 'table_rows',
    category: 'advanced',
  },
  {
    title: 'Scan to PDF',
    description: 'Convert a scanned document to a PDF.',
    icon: 'scanner',
    category: 'advanced',
  },
  {
    title: 'Screenshot to PDF',
    description: 'Convert a screenshot to a PDF.',
    icon: 'screenshot',
    category: 'advanced',
  },
  {
    title: 'Batch Image to PDF',
    description: 'Convert multiple images to a single PDF.',
    icon: 'burst_mode',
    category: 'advanced',
  },
  {
    title: 'Batch Processing',
    description: 'Process multiple files at once.',
    icon: 'dynamic_feed',
    category: 'workflow',
  },
  {
    title: 'Multi-step Workflow Presets',
    description: 'Create and save custom workflows.',
    icon: 'playlist_add_check',
    category: 'workflow',
  },
];
