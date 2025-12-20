import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Flowbite CSS */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
        
        {/* Load Flowbite JS */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}