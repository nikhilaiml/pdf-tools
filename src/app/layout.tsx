import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: 'swap', preload: true });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.usepdf.in'),
  title: {
    default: "Free PDF Tools Online – Compress, Merge, Split & Convert | UsePDF.in",
    template: "%s | UsePDF.in",
  },
  description: "100% free online PDF tools. Compress PDF, merge PDF files, split PDF, convert PDF to JPG and more. No signup required. No watermark. Works on mobile. Trusted by users in India.",
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
  verification: {
    google: 'your-google-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.usepdf.in',
    title: 'Free Online PDF Tools – Compress, Merge, Split & Convert | UsePDF.in',
    description: 'UsePDF is a 100% free online PDF tools platform. Compress, merge, split, convert PDF files. No signup, no watermark. Trusted by users across India.',
    siteName: 'UsePDF.in',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'UsePDF.in – Free Online PDF Tools for India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online PDF Tools – Compress, Merge, Split & Convert | UsePDF.in',
    description: '100% free PDF tools – compress, merge, split, convert PDFs online. No signup, no watermark. Fast & secure. Trusted in India.',
    creator: '@usepdfin',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.usepdf.in',
    languages: {
      'en-IN': 'https://www.usepdf.in',
      'en': 'https://www.usepdf.in',
      'x-default': 'https://www.usepdf.in',
    },
  },
};

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
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.usepdf.in/?search={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Organization",
      "@id": "https://www.usepdf.in/#organization",
      "name": "UsePDF.in",
      "url": "https://www.usepdf.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.usepdf.in/logo.png",
        "width": 512,
        "height": 512
      },
      "description": "Free online PDF tools for everyone. Compress, merge, split, and convert PDFs without signup.",
      "foundingLocation": {
        "@type": "Country",
        "name": "India"
      },
      "sameAs": [
        "https://twitter.com/usepdfin",
        "https://www.linkedin.com/company/usepdfin"
      ]
    },
    {
      "@type": "WebApplication",
      "name": "UsePDF.in - Free Online PDF Tools",
      "url": "https://www.usepdf.in",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Any",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      },
      "featureList": [
        "No signup required",
        "No watermark",
        "Free to use",
        "Works on mobile",
        "Secure file processing"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "1250"
      },
      "description": "A complete suite of free online PDF tools to compress, merge, split, convert and edit PDF files. Trusted by users in India."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.usepdf.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.usepdf.in"
        }
      ]
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="theme-color" content="#0f172a" />
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
