import type { Metadata } from 'next';
import ToolsPageClient from './ToolsPageClient';
import { tools } from './tools';

export const metadata: Metadata = {
  title: 'All Free PDF Tools Online – Complete List | UsePDF.in',
  description: 'Browse 40+ free online PDF tools. Compress, merge, split, convert, edit, protect, and organize PDF files. No signup required. No watermark. 100% free.',
  keywords: [
    'free pdf tools online',
    'all pdf tools',
    'pdf editor online free',
    'compress pdf free',
    'merge pdf online',
    'split pdf online',
    'convert pdf free',
    'pdf tools india',
    'online pdf tools no signup',
  ],
  alternates: {
    canonical: 'https://www.usepdf.in/tools',
  },
  openGraph: {
    title: 'All Free PDF Tools Online – Complete List | UsePDF.in',
    description: 'Browse 40+ free online PDF tools. Compress, merge, split, convert, edit, protect PDFs. No signup. No watermark.',
    url: 'https://www.usepdf.in/tools',
    type: 'website',
    siteName: 'UsePDF.in',
    locale: 'en_IN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'All Free PDF Tools – UsePDF.in',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Free PDF Tools Online – Complete List | UsePDF.in',
    description: 'Browse 40+ free online PDF tools. No signup. No watermark. 100% free.',
    creator: '@usepdfin',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Generate ItemList schema from tools data
function generateToolsSchema() {
  const itemListElements = tools.map((tool, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: tool.title,
    description: tool.description,
    url: `https://www.usepdf.in/tools/${tool.id}`,
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': 'https://www.usepdf.in/tools/#itemlist',
        name: 'All Free PDF Tools – UsePDF.in',
        description: 'Complete list of 40+ free online PDF tools. Compress, merge, split, convert, edit, protect and organize PDF files.',
        numberOfItems: tools.length,
        itemListElement: itemListElements,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': 'https://www.usepdf.in/tools/#breadcrumb',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.usepdf.in',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'All PDF Tools',
            item: 'https://www.usepdf.in/tools',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.usepdf.in/tools/#webpage',
        url: 'https://www.usepdf.in/tools',
        name: 'All Free PDF Tools Online – Complete List | UsePDF.in',
        description: 'Browse 40+ free online PDF tools. Compress, merge, split, convert, edit, protect, and organize PDF files.',
        isPartOf: { '@id': 'https://www.usepdf.in/#website' },
        breadcrumb: { '@id': 'https://www.usepdf.in/tools/#breadcrumb' },
        inLanguage: 'en',
      },
    ],
  };
}

export default function ToolsPage() {
  const toolsSchema = generateToolsSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(toolsSchema),
        }}
      />
      <ToolsPageClient />
    </>
  );
}
