import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image";
import Link from "next/link";

// components/Footer.js
export default function Footer() {
  return (
      <footer className="text-center text-lg-start text-white bg-[#222222]">

        <div className="container p-4 pb-0">
      
          <section>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            
              <div className="mt-3">
                <h6 className="text-uppercase mb-4 font-bold"> VERSE</h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div className="mt-3">
                <p> <a className="text-white hover:underline">About Us</a></p>
                <p><a className="text-white hover:underline">Hang Out</a></p>
                <p><a className="text-white hover:underline">Tune In</a></p>
                <p><a className="text-white hover:underline">Dashboard</a></p>
             
              </div>

              <div className="mt-3 mb-4">
                <h6 className="text-uppercase mb-4 font-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Verse, Tritans</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                
              </div>

              <div className="mt-3">
  <h6 className="text-uppercase mb-4 font-bold">Follow us</h6>

  <div className="flex space-x-2 flex-nowrap">
    <a className="btn btn-primary m-1 bg-blue-600 p-2 rounded-full" href="#!" role="button">
      <Facebook className="text-white w-5 h-5" />
    </a>
    <a className="btn btn-primary m-1 bg-blue-400 p-2 rounded-full" href="#!" role="button">
      <Twitter className="text-white w-5 h-5" />
    </a>
    <a className="btn btn-primary m-1 bg-purple-600 p-2 rounded-full" href="#!" role="button">
      <Instagram className="text-white w-5 h-5" />
    </a>
    <a className="btn btn-primary m-1 bg-blue-800 p-2 rounded-full" href="#!" role="button">
      <Linkedin className="text-white w-5 h-5" />
    </a>
  </div>
</div>

            </div>
   
          </section>

        </div>
        <div className="text-center p-3 bg-black bg-opacity-20">
          © 2025 Copyright:
          <a className="text-white hover:underline" href="https://mdbootstrap.com/">VERSE</a>
        </div>
      </footer>
     
   
  );
}

