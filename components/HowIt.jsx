import { MessageCircle, Music2, Radio, Search, Users } from "lucide-react"
import {motion} from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image"
import Link from "next/link"

export default function HowIt() {
        return  (
            <section className="py-16 px-32 bg-[#0A0D14]">
        <h2 className="text-2xl font-bold text-white text-center mb-12">How it Works</h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              number: "1",
              title: "Create room",
              description: "Sign up and create your music room. Customize settings and prepare for your friends.",
            },
            {
              number: "2",
              title: "Invite friends",
              description: "Generate an invite link and share it with your friends to join your music room.",
            },
            {
              number: "3",
              title: "Enjoy Together",
              description: "Start playing music and chat with your friends in real time. Create memories together",
            },
          ].map((step, index) => (
            <div key={index} className="relative pt-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#4DB6AC] flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <div className="bg-[#0F1318] p-8 rounded-lg text-center min-h-[200px] flex flex-col items-center justify-center">
                <h3 className="text-white text-xl font-medium mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      
        );


}