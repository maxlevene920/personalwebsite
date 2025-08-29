import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Max - Personal Portfolio",
  description: "Full-stack developer and creative technologist. Building modern web applications with cutting-edge technologies.",
  keywords: ["portfolio", "developer", "full-stack", "web development", "react", "next.js"],
  authors: [{ name: "Max" }],
  creator: "Max",
  openGraph: {
    title: "Max - Personal Portfolio",
    description: "Full-stack developer and creative technologist. Building modern web applications with cutting-edge technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Max - Personal Portfolio",
    description: "Full-stack developer and creative technologist. Building modern web applications with cutting-edge technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
