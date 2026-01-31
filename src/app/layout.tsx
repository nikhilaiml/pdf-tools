import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://usepdf.in'),
  title: {
    default: "UsePDF – Free Online PDF Tools",
    template: "%s | UsePDF",
  },
  description: "UsePDF offers free online PDF tools to merge, split, compress, and convert PDF files. Fast, secure, and easy to use.",
  keywords: ["pdf tools", "merge pdf", "split pdf", "compress pdf", "convert pdf", "pdf to word", "free pdf tools"],
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
    title: 'UsePDF – Free Online PDF Tools',
    description: 'Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! Merge, split, compress, convert, rotate, unlock and more with just a few clicks.',
    siteName: 'UsePDF',
    images: [
      {
        url: '/og-image.jpg', // Assuming you will add one or I should reference a generic one
        width: 1200,
        height: 630,
        alt: 'UsePDF - Free Online PDF Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UsePDF – Free Online PDF Tools',
    description: 'Every tool you need to use PDFs, at your fingertips. All are 100% FREE and easy to use!',
    creator: '@UsePDF', // Placeholder, can be updated
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
