import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://usepdf.in'),
  title: {
    default: "Online PDF Tools – Edit, Convert, Merge & Compress PDFs Free",
    template: "%s | UsePDF",
  },
  description: "UsePDF provides free online PDF tools to edit, convert, merge, compress, and manage PDF files. No signup required. Secure, fast, and works on all devices.",
  keywords: [
    "online pdf tools",
    "online pdf editor",
    "free pdf tools",
    "pdf combine files",
    "pdf joiner",
    "online pdf merger",
    "jpg to pdf converter",
    "picture to pdf converter online",
    "free pdf viewer",
    "convert pdf to image"
  ],
  authors: [{ name: "UsePDF" }],
  creator: "UsePDF",
  publisher: "UsePDF",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://usepdf.in',
    title: 'Online PDF Tools – Compress, Merge, Convert PDFs Free',
    description: 'UsePDF is a free online PDF tools website to compress, merge, convert, protect and manage PDF files. No signup or software installation required.',
    siteName: 'UsePDF',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UsePDF - Free Online PDF Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online PDF Tools – Compress, Merge, Convert PDFs Free',
    description: 'UsePDF is a free online PDF tools website to compress, merge, convert, protect and manage PDF files. No signup or software installation required.',
    creator: '@UsePDF',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://usepdf.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "UsePDF",
              "url": "https://usepdf.in",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "A complete suite of free online PDF tools to manage your documents."
            })
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-900 text-white selection:bg-blue-500/30 selection:text-blue-200`}>
        <div className="flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
