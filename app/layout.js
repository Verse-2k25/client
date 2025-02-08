import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link"
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
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#252422] text-white`}
        >
          {/* <header className="p-4 border-b border-gray-800 text-center text-lg font-bold">
            VERSE
          </header> */}
          <main className="min-h-screen ">
            {children}
          </main>
          {/* <footer className="p-4 border-t border-gray-800 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Verse. All rights reserved.
          </footer> */}
<footer>
<div className="mt-16 pt-8 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400">
        <div className="flex gap-8">
          <Link href="#" className="hover:text-white">
            Terms of Use
          </Link>
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
        <div>© 2025 VERSE</div>
      </div>
    </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}

