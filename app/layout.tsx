import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dr. Fill - AI-Powered Form Filling Assistant",
  description: "Dr. Fill is a revolutionary Chrome extension that uses AI to help you fill out forms faster and more accurately. Experience personalized, context-aware form filling with advanced RAG technology.",
  keywords: "AI, form filling, Chrome extension, productivity, OpenAI, RAG technology, forms, fill forms, fill out forms, fill out forms faster, fill out forms more accurately, AI-powered form filling, AI-powered form filling assistant, AI-powered form filling extension, AI-powered form filling Chrome extension, AI-powered form filling productivity, AI-powered form filling tool, AI-powered form filling software, AI-powered form filling app, AI-powered form filling Chrome app, AI-powered form filling Chrome tool, AI-powered form filling Chrome software",
  authors: [{ name: "Denver Gas" }],
  openGraph: {
    title: "Dr. Fill - AI-Powered Form Filling Assistant",
    description: "Fill forms faster and more accurately with AI assistance",
    type: "website",
    url: "https://www.drfill.vercel.app",
    images: ["/dancing-Fill.gif"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Fill - AI-Powered Form Filling Assistant",
    description: "Fill forms faster and more accurately with AI assistance",
    images: ["/dancing-Fill.gif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
