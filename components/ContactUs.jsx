import { MessageCircle, Music2, Radio, Search, Users } from "lucide-react"
import {motion} from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

export default function ContactUs() {


    return(
        <section className="py-16 px-32 bg-[#41362A]">
        <h2 className="text-2xl font-bold text-white text-center mb-12">CONTACT US</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md bg-[#EDE5D9] border-gray-700 bg-opacity-50 shadow-sm focus:border-[#1A1E24] focus:ring focus:ring-[#1A1E24] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md bg-[#EDE5D9] border-gray-700 bg-opacity-50 shadow-sm focus:border-[#4DB6AC] focus:ring focus:ring-[#4DB6AC] focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-[#EDE5D9] border-gray-700 bg-opacity-50 shadow-sm focus:border-[#4DB6AC] focus:ring focus:ring-[#4DB6AC] focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-[#D77E1D] rounded-md  bg-transparent border-2 border-[#D77E1D] text-white font-bold py-4 px-16 hover:bg-[#D77E1D] hover:text-white transition-all uppercase tracking-wider">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

    );

}


