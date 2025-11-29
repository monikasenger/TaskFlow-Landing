"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles, Flame } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 
      backdrop-blur-2xl bg-white/30 border-b border-white/20 
      shadow-[0_8px_30px_rgba(0,0,0,0.1)]">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 
            bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 
            rounded-2xl flex items-center justify-center text-white 
            font-extrabold shadow-lg shadow-purple-300/40 
            group-hover:scale-110 group-hover:rotate-6
            transition-all duration-500 ease-out">

            {/* Glow Sparkle */}
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-ping" />

            {/* Floating Icon */}
            <Flame className="w-6 h-6 text-white animate-float" />
          </div>

          <span className="font-extrabold text-2xl tracking-wider 
            bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent
            group-hover:scale-105 transition-all duration-300">
            TaskFlow
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">
          {["Features", "Pricing", "Testimonials", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              <span className="group-hover:text-purple-600 transition font-semibold">
                {item}
              </span>

              {/* Bottom Hover Line */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                bg-gradient-to-r from-purple-600 to-blue-600 
                group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          <Link
            href="#"
            className="ml-4 px-6 py-2 
            bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 
            text-white rounded-xl shadow-md 
            hover:scale-[1.06] hover:shadow-purple-400/40 
            transition-all duration-300 font-semibold"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg bg-white/40 shadow-sm 
          backdrop-blur-md border border-white/30 hover:scale-105 
          transition-all"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/70 backdrop-blur-xl shadow-xl px-6 py-4 space-y-5">
          {["Features", "Pricing", "Testimonials", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block font-semibold text-lg hover:text-purple-600 transition"
            >
              {item}
            </Link>
          ))}

          <Link
            href="#"
            className="inline-block w-full text-center px-5 py-2 
            bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 
            text-white rounded-xl shadow-md 
            hover:scale-[1.03] transition-all duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
