import { MessageCircle, Music2, Radio, Search, Users } from "lucide-react"
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {motion} from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image"
import Link from "next/link"
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Artists from "@/components/Artists";
import HowIt from "@/components/HowIt";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Selection from "@/components/Selection/selection";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-[#EDE5D9]">
 
      {/* <Selection/> */}
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        {/* Upper Section */}
        <div className="flex items-stretch justify-between relative">
          <div className="flex items-center border-r border-gray-800">
            {/* <div className="flex items-center gap-4 px-4 py-5">
              <Link href="#" className="text-gray-400 hover:text-white">
                LOG IN
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="#" className="text-gray-400 hover:text-white">
                JOIN
              </Link>
            </div> */}
                <SignedOut>
                <SignInButton>
                  <button className="text-gray-400 hover:text-white">LOG IN</button>
                </SignInButton>
                <span className="text-gray-400">|</span>
                <Link href="/sign-up" className="text-gray-400 hover:text-white">
                  JOIN
                </Link>
              </SignedOut>

              <SignedIn>
                <UserButton afterSignOutUrl="/" />
                <SignOutButton>
                  <button className="text-gray-400 hover:text-white">LOG OUT</button>
                </SignOutButton>
            </SignedIn>
          </div>
          <div className="text-white text-xl font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            VERSE
          </div>
          <div className="flex items-center border-l border-gray-800">
            <div className="px-4 py-5">
              <button className="text-gray-400 hover:text-white">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px bg-gray-800"></div>

        {/* Lower Section */}
        <div className="flex items-center justify-center gap-12 p-4">
          {["HOME", "FEATURES", "TUNE IN", "HANG OUT", "MORE"].map((item) => (
            <Link key={item} href="#" className="text-gray-400 hover:text-white">
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
        <button className="parallelogram-button bg-[#D77E1D] text-white font-bold py-4 px-16 hover:bg-[#3D9089] transition-all uppercase tracking-wider">
          <span>TRY OUT NOW</span>
        </button>
      </div>
      <div className="relative flex justify-center items-center">
     
        <Image
          src="/hero.png" 
          alt="Hero Image"
          width={500}
          height={500} 
        />
      </div>
     
    </section>

      <div className="custom-shape-divider-top-1738904011">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 119" preserveAspectRatio="none">
        <path fill="#41362A" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
      </div>

     <AboutUs/>
      <Features/>

          <Artists/>
      <HowIt/>
     <ContactUs/>
 
     <Footer/>
    </div>
  )
}

