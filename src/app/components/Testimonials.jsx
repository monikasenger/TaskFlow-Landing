"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Asha R.",
    role: "Project Manager",
    icon: "✨",
    text: "TaskFlow helped our team boost productivity by almost 30%. Absolutely love the workflow!",
  },
  {
    name: "Rohit K.",
    role: "UI/UX Designer",
    icon: "🎨",
    text: "The UI is smooth, animations are beautiful, and the AI suggestions are game-changing.",
  },
  {
    name: "Neha S.",
    role: "Software Engineer",
    icon: "⚡",
    text: "Fast, intuitive and reliable. TaskFlow fits perfectly in our engineering pipeline.",
  },
];

function AvatarIcon({ icon }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      whileHover={{ rotate: 8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white text-2xl shadow-lg"
    >
      {icon}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden"
    >
      {/* BG floating elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-pink-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-indigo-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-extrabold text-center text-slate-800"
        >
          Loved by teams everywhere ❤️
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-2xl bg-white/70 backdrop-blur-xl shadow-xl border border-white transition-all hover:shadow-2xl hover:border-purple-300"
            >
              <div className="flex items-center gap-4">
                <AvatarIcon icon={r.icon} />
                <div>
                  <h3 className="font-semibold text-lg text-slate-800">{r.name}</h3>
                  <p className="text-sm text-slate-500">{r.role}</p>
                </div>
              </div>

              <p className="mt-5 text-slate-600 italic leading-relaxed text-[15px]">
                “{r.text}”
              </p>

              {/* Decorative underline animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6 }}
                className="h-1 mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
