import { MessageCircle, Music2, Radio, Search, Users } from "lucide-react"
import {motion} from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image"
import Link from "next/link"


export default function Footer() {

    return(
        <footer className="bg-[#0F1318] py-16 px-32">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="col-span-3">
            <Image
              src={``}
              alt="Vortex Logo"
              width={150}
              height={150}
              className="brightness-0 invert"
            />
          </div>

          {/* Links Section */}
          <div className="col-span-6">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Link href="#" className="block text-white hover:text-[#4DB6AC]">
                  ABOUT US
                </Link>
                <Link href="#" className="block text-white hover:text-[#4DB6AC]">
                  HELP & FAQ
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="#" className="block text-white hover:text-[#4DB6AC]">
                  ALBUMS
                </Link>
                <Link href="#" className="block text-white hover:text-[#4DB6AC]">
                  PLAYLISTS
                </Link>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="col-span-3">
            <h3 className="text-white font-bold mb-6">FOLLOW VERSE</h3>
            <div className="grid grid-cols-4 gap-4">
              {[
                { name: "Facebook", icon: "facebook" },
                { name: "Twitter", icon: "twitter" },
                { name: "Instagram", icon: "instagram" },
                { name: "Tumblr", icon: "tumblr" },
                { name: "YouTube", icon: "youtube" },
                { name: "Snapchat", icon: "snapchat" },
                { name: "Pinterest", icon: "pinterest" },
                { name: "Twitch", icon: "twitch" },
              ].map((social, index) => (
                <Link key={index} href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">{social.name}</span>
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <Image
                      src={``}
                      alt={social.name}
                      width={16}
                      height={16}
                      className="opacity-50 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
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
    );
}