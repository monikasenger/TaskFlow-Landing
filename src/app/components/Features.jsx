"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Task Management",
    desc: "Create, tag, and schedule tasks with lightning speed using smart controls.",
    icon: (
      <div className="text-purple-600">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M3 12h5" stroke="currentColor" strokeWidth="2" />
          <path d="M3 6h9" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    ),
    glow: "shadow-[0_0_25px_rgba(168,85,247,0.5)]",
  },
  {
    title: "AI Suggestions",
    desc: "Let AI guide your priorities and recommend next steps effortlessly.",
    icon: (
      <div className="text-blue-600">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2v3M12 19v3M4 12H2M22 12h-2M5 5l2 2M17 17l2 2M17 5l2 2M5 17l2-2"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    ),
    glow: "shadow-[0_0_25px_rgba(59,130,246,0.5)]",
  },
  {
    title: "Team Collaboration",
    desc: "Share tasks, chat inline, and stay perfectly synced with your team.",
    icon: (
      <div className="text-pink-600">
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
          <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    ),
    glow: "shadow-[0_0_25px_rgba(236,72,153,0.5)]",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Blur Elements */}
      <div className="absolute -top-10 left-10 w-40 h-40 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center text-slate-800 tracking-tight">
          Powerful Features to Boost Your Workflow
        </h2>
        <p className="text-slate-600 mt-4 text-center max-w-2xl mx-auto">
          Beautifully crafted tools to help you stay productive, organized, and ahead.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((f, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className={`p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg border border-white hover:${f.glow} transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex flex-col items-center text-center">
                
                {/* Icon Animation */}
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white shadow-inner"
                >
                  {f.icon}
                </motion.div>

                <h3 className="mt-5 text-xl font-semibold text-slate-800 group-hover:text-purple-600 transition">
                  {f.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
