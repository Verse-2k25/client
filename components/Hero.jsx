import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-800">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        {/* Upper Section */}
        <div className="flex items-stretch justify-between relative">
          <div className="flex items-center border-r border-gray-800">
            <div className="flex items-center gap-4 px-4 py-5">
              {/* <SignedOut>
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
              </SignedIn> */}
            </div>
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
      </nav>

      {/* Hero Section */}
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
          <Image src="/hero.png" alt="Hero Image" width={500} height={500} />
        </div>
      </section>
    </div>
  );
}
