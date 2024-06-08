import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import { Analytics } from "@vercel/analytics/react";

const inter = Crimson_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Yebōah | Home",
  description: "Portfolio of David Yebōah, Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex  flex-row justify-center ${inter.className}`}>
        <div className="noise"></div>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
