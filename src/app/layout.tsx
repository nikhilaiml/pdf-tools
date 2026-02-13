import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usepdf.in'),
  title: {
    default: "Free Online PDF Tools – Edit, Convert, Merge & Compress PDFs",
    template: "%s | UsePDF",
  },
  description: "Free online PDF tools to merge, split, compress, delete, reorder and convert PDF files. No signup required. No watermark. Secure, fast, and works on all devices.",
  keywords: [
    "free pdf tools online",
    "online pdf editor",
    "pdf tools without signup",
    "merge pdf",
    "split pdf",
    "compress pdf",
    "delete pdf pages",
    "reorder pdf",
    "online pdf tools",
    "free pdf editor",
    "pdf converter online",
    "combine pdf files",
    "pdf compressor free"
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
    url: 'https://www.usepdf.in',
    title: 'Free Online PDF Tools – Merge, Split, Compress & Convert PDFs',
    description: 'UsePDF is a free online PDF tools platform. Merge, split, compress, delete and reorder PDF files. No signup or watermark. Secure & fast.',
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
    title: 'Free Online PDF Tools – Merge, Split, Compress PDFs',
    description: 'UsePDF is a free online PDF tools platform. Merge, split, compress PDF files without signup. Secure & fast.',
    creator: '@UsePDF',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.usepdf.in',
  },
};

// Homepage Schema - WebSite + Organization
const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.usepdf.in/#website",
      "url": "https://www.usepdf.in",
      "name": "UsePDF",
      "description": "Free online PDF tools to merge, split, compress, delete, reorder and convert PDF files.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.usepdf.in/?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.usepdf.in/#organization",
      "name": "UsePDF",
      "url": "https://www.usepdf.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.usepdf.in/logo.png",
        "width": 512,
        "height": 512
      },
      "sameAs": []
    },
    {
      "@type": "WebApplication",
      "name": "UsePDF - Free Online PDF Tools",
      "url": "https://www.usepdf.in",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "A complete suite of free online PDF tools to merge, split, compress, delete, reorder and convert PDF files."
    }
  ]
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
            __html: JSON.stringify(homepageSchema)
          }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.className} min-h-screen flex flex-col bg-slate-900 text-white selection:bg-blue-500/30 selection:text-blue-200`}>
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YYJFR02YQB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YYJFR02YQB');
          `}
        </Script>
      </body>
    </html>
  );
}
