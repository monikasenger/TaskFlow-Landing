"use client";
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0ea5e9] via-[#6366f1] to-[#8b5cf6] text-white relative">
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-pink-500 to-yellow-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo + Branding */}
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-xl shadow-lg"
          >
            TF
          </motion.div>

          <div>
            <div className="text-xl font-semibold tracking-wide">TaskFlow</div>
            <div className="text-xs text-white/80">
              © {new Date().getFullYear()} TaskFlow. All rights reserved.
            </div>
          </div>
        </div>

        {/* Links + Icons */}
        <div className="flex items-center gap-8">

          {/* Footer Links */}
          <div className="flex gap-6">
            <a href="#" className="text-sm hover:text-yellow-300 transition">Privacy</a>
            <a href="#" className="text-sm hover:text-yellow-300 transition">Terms</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 bg-white/20 rounded-xl backdrop-blur-md hover:bg-white/30 transition shadow"
              href="#"
            >
              <Github size={20} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="p-2 bg-white/20 rounded-xl backdrop-blur-md hover:bg-white/30 transition shadow"
              href="#"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

        </div>
      </div>
    </footer>
  );
}
