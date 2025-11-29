"use client"
import { motion } from "framer-motion"

/* Floating Glow Orbs */
function FloatingBlob({ size, color, x, y }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.3, 0.8, 0.3], x: [x, x + 30, x], y: [y, y - 30, y] }}
      transition={{ repeat: Infinity, duration: 6 }}
      className={`absolute rounded-full blur-3xl`} 
      style={{ width: size, height: size, background: color }}
    />
  )
}

/* Icon */
function SparkIcon({ className = "w-8 h-8" }) {
  return (
    <motion.svg
      initial={{ rotate: -20, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v4M12 18v4M4 12h4M16 12h4" stroke="currentColor" strokeWidth="1.5" />
    </motion.svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-br from-white via-slate-50 to-slate-100">

      {/* 🔥 Floating glowing blobs */}
      <FloatingBlob size="280px" color="#c084fc50" x={-50} y={-20} />
      <FloatingBlob size="300px" color="#60a5fa40" x={250} y={100} />
      <FloatingBlob size="250px" color="#f472b650" x={-80} y={300} />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="relative z-20">

          {/* AI Badge */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full 
            bg-white/60 backdrop-blur-xl border 
            text-purple-700 text-sm font-medium shadow-lg shadow-purple-300/30"
          >
            <SparkIcon className="w-5 h-5 text-purple-600" />
            <span>AI Powered Productivity</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight"
          >
            Your workflow,
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            bg-clip-text text-transparent">
              Re-imagined with AI.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 text-slate-600 text-lg max-w-md"
          >
            Advance your productivity with smart automation, AI task suggestions, and a beautifully minimal dashboard designed for speed.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl 
              bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold 
              shadow-lg shadow-purple-300/30 hover:scale-[1.04] transition-transform"
            >
              Start Free Trial
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl 
              border backdrop-blur-xl font-medium hover:bg-white/60 transition"
            >
              Learn More
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative z-20 flex justify-center"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full max-w-md p-6 rounded-3xl 
            bg-white/60 backdrop-blur-2xl border border-white/40 shadow-2xl shadow-purple-200/40"
          >
            <div className="grid grid-cols-2 gap-4 mt-4">

              <DashboardCard color="purple" title="Tasks" subtitle="14 pending" />
              <DashboardCard color="pink" title="Focus" subtitle="2h today" />
              <DashboardCard color="blue" title="Streak" subtitle="7 days" />
              <DashboardCard color="emerald" title="AI Tips" subtitle="3 suggestions" />

            </div>

            <div className="mt-6">
              <div className="text-xs text-slate-500">Quick Actions</div>
              <div className="mt-3 flex items-center gap-3">
                <button className="px-4 py-2 rounded-lg border text-sm hover:bg-slate-50 transition">New Task</button>
                <button className="px-4 py-2 rounded-lg border text-sm hover:bg-slate-50 transition">Start Sprint</button>
                <button className="px-4 py-2 rounded-lg border text-sm hover:bg-slate-50 transition">Get AI Tip</button>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

/* Dashboard Cards */
function DashboardCard({ color, title, subtitle }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      className="p-4 rounded-xl bg-white/70 backdrop-blur-xl border shadow-lg shadow-slate-200/40"
    >
      <div className="flex items-start gap-3">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center 
        bg-${color}-100 text-${color}-600 shadow-inner`}>
          <SparkIcon className="w-5 h-5" />
        </div>

        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-slate-500">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  )
}
