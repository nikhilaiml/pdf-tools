import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDF Tools - The Ultimate PDF Utility",
  description: "A complete suite of tools to manage your PDFs.",
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
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-900 text-white selection:bg-blue-500/30 selection:text-blue-200`}>
        <div className="flex-grow flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
