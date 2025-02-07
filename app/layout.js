import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  adjustFontFallback: true,
});

export const metadata = {
  title: "Verse",
  description: "Listen together, chat together.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
        >
          <header className="p-4 border-b border-gray-800 text-center text-lg font-bold">
            VERSE
          </header>
          <main className="min-h-screen flex flex-col items-center justify-center">
            {children}
          </main>
          <footer className="p-4 border-t border-gray-800 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Verse. All rights reserved.
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}

