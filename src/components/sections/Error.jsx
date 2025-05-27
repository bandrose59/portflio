import React from "react";
import { motion } from "framer-motion";

export const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-[#cce6ff] font-mono select-none bg-animated-gradient relative overflow-hidden">
      {/* Background smoke particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-8 h-8 bg-gray-400 opacity-30 rounded-full blur-sm"
          style={{ left: `${15 * i + 10}%`, bottom: `${i * 15}px` }}
          animate={{ y: [-10, -120], opacity: [0.4, 0] }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Error label */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-extrabold text-[#60a5fa] mb-6"
      >
        ERROR
      </motion.h2>

      {/* Top message */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-5xl font-bold mb-4 flex items-center space-x-3 text-center"
      >
        <span>🥲</span>
        <span>When your code crashes in production...</span>
      </motion.h1>

      {/* Main illustration */}
      <div className="flex items-center justify-center space-x-20 max-w-5xl w-full my-10 relative">
        {/* Server - floating */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="relative w-28 h-40"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 96"
            fill="none"
            className="w-full h-full"
          >
            <rect
              width="64"
              height="96"
              rx="12"
              ry="12"
              fill="#1e3a8a"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            <circle cx="16" cy="20" r="5" fill="#2563eb" />
            <circle cx="32" cy="20" r="5" fill="#3b82f6" />
            <circle cx="48" cy="20" r="5" fill="#60a5fa" />
            <rect
              x="8"
              y="40"
              width="48"
              height="8"
              fill="#2563eb"
              rx="2"
              ry="2"
            />
            <rect
              x="8"
              y="54"
              width="48"
              height="8"
              fill="#3b82f6"
              rx="2"
              ry="2"
            />
            <rect
              x="8"
              y="68"
              width="48"
              height="8"
              fill="#60a5fa"
              rx="2"
              ry="2"
            />
            <rect
              x="8"
              y="82"
              width="48"
              height="8"
              fill="#2563eb"
              rx="2"
              ry="2"
            />
          </svg>
        </motion.div>

        {/* Animated wire */}
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="w-60 h-24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#66a3ff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 240 80"
        >
          <motion.path d="M 10 70 Q 60 10 110 40 T 230 40" />
          <circle cx="10" cy="70" r="6" fill="#4a90e2" />
          <motion.circle
            r="5"
            fill="#ffffff"
            animate={{
              cx: [10, 60, 110, 170, 230],
              cy: [70, 20, 40, 50, 40],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          />
          <circle cx="230" cy="40" r="6" fill="#4a90e2" />
        </motion.svg>

        {/* Computer - floating */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3.2, ease: "easeInOut" }}
          className="relative w-32 h-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 48"
            fill="none"
            className="w-full h-full"
          >
            <rect
              x="6"
              y="4"
              width="52"
              height="28"
              rx="4"
              ry="4"
              fill="#2563eb"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            <motion.rect
              x="14"
              y="10"
              width="36"
              height="16"
              rx="2"
              ry="2"
              fill="#93c5fd"
              animate={{ opacity: [1, 0.7, 1, 0.4, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
            <rect
              x="20"
              y="34"
              width="24"
              height="6"
              fill="#1e40af"
              rx="2"
              ry="2"
            />
            <rect
              x="28"
              y="40"
              width="8"
              height="4"
              fill="#1e3a8a"
              rx="1"
              ry="1"
            />
          </svg>
        </motion.div>
      </div>

      {/* Bottom text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-3xl font-semibold flex items-center space-x-3 mb-6"
      >
        <span>🫠</span>
        <span>...but you pretend everything&apos;s fine.</span>
      </motion.p>

      {/* Back to Home button */}
      <motion.button
        onClick={() => (window.location.href = "/")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-md font-semibold shadow-md transition"
      >
        ← Back to Home
      </motion.button>
    </div>
  );
};
