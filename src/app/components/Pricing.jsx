"use client";
import { motion } from "framer-motion";
import { CheckCircle, Crown, Gem } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "Free",
    desc: "Perfect for personal use",
    icon: <Gem className="w-6 h-6" />,
    features: ["Up to 5 projects", "Basic AI suggestions"],
  },
  {
    name: "Pro",
    price: "$9/mo",
    desc: "Great for professionals",
    icon: <Crown className="w-7 h-7" />,
    features: ["Unlimited projects", "Advanced AI", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Contact",
    desc: "Solutions for large teams",
    icon: <CheckCircle className="w-6 h-6" />,
    features: ["SLA guarantee", "Custom integrations"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-white to-slate-100 relative overflow-hidden"
    >
      {/* Floating background glow balls */}
      <div className="absolute top-20 right-20 w-52 h-52 bg-purple-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-300/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-extrabold text-slate-800"
        >
          Flexible pricing for everyone
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-600 mt-3 max-w-2xl mx-auto"
        >
          Start free — upgrade anytime as your team grows.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.04 }}
              className={`relative rounded-2xl p-8 shadow-xl backdrop-blur-xl border hover:shadow-2xl transition-all ${
                p.popular
                  ? "bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border-indigo-400/40"
                  : "bg-white/70 border-slate-200"
              }`}
            >
              {/* Most Popular badge */}
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                  ⭐ MOST POPULAR
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4 text-indigo-600">{p.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800">{p.name}</h3>

              {/* Price */}
              <p className="text-4xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                {p.price}
              </p>

              <p className="text-slate-600 mt-2">{p.desc}</p>

              <ul className="mt-5 space-y-3 text-sm text-slate-700 text-left">
                {p.features.map((f, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-indigo-500" />
                    {f}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className={`mt-8 block w-full py-3 rounded-xl text-white font-semibold shadow-lg transition ${
                  p.popular
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600"
                    : "bg-indigo-500"
                }`}
              >
                Choose Plan
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
