"use client"

import { MessageCircle, Music2, Radio, Search, Users } from "lucide-react";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Artists from "@/components/Artists";
import HowIt from "@/components/HowIt";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Chatbot from "@/components/chatbot/chatbot";
import Election from "@/app/Selection/Election";
import { useState } from "react";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className="min-h-screen bg-[#EDE5D9]">
      <Chatbot />

      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="flex items-stretch justify-between relative">
          <div className="flex items-center border-r border-gray-800">
            <SignedOut>
              <SignInButton>
                <button className="text-[#41362A] hover:text-white">SIGN IN</button>
              </SignInButton>
              <span className="text-gray-400">|</span>
              <Link href="/sign-up" className="text-gray-400 hover:text-white">
                JOIN
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/Selection/election" />
              <SignOutButton>
                <button className="text-[#41362A] hover:text-white" onClick={() => setSignedIn(false)}>
                  LOG OUT
                </button>
              </SignOutButton>
            </SignedIn>
          </div>
         
          <div className="text-[#41362A] text-3xl font-bold tracking-widest absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  VERSE
</div>
          <div className="flex items-center border-l border-gray-800">
            <div className="px-4 py-5">
              <Link href="/Selection/election">
                <button className="text-[#41362A] hover:text-white">
                  <Search className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-800"></div>

        <div className="flex items-center justify-center gap-12 p-4">
          {["HOME", "FEATURES", "TUNE IN", "HANG OUT", "MORE"].map((item) => (
            <Link key={item} href="#" className="text-[#41362A] hover:text-white">
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div>
        <section className="grid grid-cols-2 gap-8 p-16">
          <div className="space-y-6 pl-12">
            <h1 className="text-5xl font-bold text-[#5C4033]">
              Listen Together,
              <br />
              <span className="text-[#D77E1D]">Chat Together</span>
            </h1>
            <p className="text-gray-400 max-w-md">
              Create your own private music room, invite friends and enjoy synchronized music playback while chatting in
              real time.
            </p>
            <button className="parallelogram-button bg-[#D77E1D] text-white font-bold py-4 px-16 hover:bg-[#D77E2D] transition-all uppercase tracking-wider">
              <span>TRY OUT NOW</span>
            </button>
          </div>

          <div className="relative flex justify-center items-center">
            {signedIn ? (
              <Image src="/hero.png" alt="Hero Image" width={700} height={700} className="transition-all duration-300" />
            ) : (
              <Image src="/hero.png" alt="Hero Image" width={500} height={500} />
            )}
          </div>
        </section>

        <div className="custom-shape-divider-top-1738904011">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 119" preserveAspectRatio="none">
            <path
              fill="#41362A"
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>

      <AboutUs />
      <Features />
     
      <Election />
      <HowIt />
      <ContactUs />
      <Footer />
    </div>
  );
}
