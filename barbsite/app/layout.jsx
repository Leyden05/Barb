"use client"

import { Inter } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";  // Import AOS from npm
import "aos/dist/aos.css";  // Import AOS CSS
import "./globals.css";
import "./index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({

    });
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}