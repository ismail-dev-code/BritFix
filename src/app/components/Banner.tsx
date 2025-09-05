"use client";

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 md:px-10 shadow-2xl overflow-hidden">
      {/* Decorative background */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
        >
          Welcome to <span className="text-yellow-400">BritFix</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 text-slate-200 max-w-2xl mx-auto"
        >
          Fast, reliable and professional smartphone repair solutions from cracked screens to battery replacements.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex justify-center gap-5"
        >
          <button className="px-6 py-3 cursor-pointer bg-yellow-400 text-black font-semibold rounded-xl shadow-md hover:bg-yellow-300 transition-all duration-200">
            Get Started
          </button>
          <button className="px-6 cursor-pointer py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-900 transition-all duration-200">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
