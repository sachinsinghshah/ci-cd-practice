"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AnniversaryCard() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("message");
  const marriageDate = new Date("1997-02-28");
  const years = 28; // 2025 - 1997
  const days = Math.floor(
    (new Date().getTime() - marriageDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const milestones = [
    { year: "1997", event: "The Beautiful Beginning - Wedding Day" },
    { year: "2000", event: "Entering the New Millennium Together" },
    { year: "2010", event: "A Decade of Growing Love" },
    { year: "2020", event: "Silver Jubilee of Hearts" },
    { year: "2025", event: "28 Years of Beautiful Memories" },
  ];

  const stats = [
    { label: "Years Together", value: years },
    { label: "Days of Love", value: days.toLocaleString() },
    { label: "Shared Memories", value: (years * 365).toLocaleString() },
    { label: "Cups of Coffee", value: (days * 2).toLocaleString() },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Animated Background - adjust for mobile */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: "50%" }}
            animate={{
              y: "-10vh",
              x: `${Math.random() * 100}%`,
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute text-2xl sm:text-4xl opacity-10"
          >
            {["❤️", "💝", "💖", "💕"][i % 4]}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-8 md:p-12"
      >
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div className="text-rose-400 font-light tracking-widest mb-4 text-sm sm:text-base">
            ✨ February 28, 1997 - 2025 ✨
          </motion.div>

          {/* Parent's Image */}
          <motion.div className="relative w-full max-w-md mx-auto mb-6 sm:mb-8 group">
            <div className="relative h-[200px] sm:h-[300px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/parents-image.jpg"
                alt="Mom & Dad at Temple"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent" />
            </div>
            <motion.div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full shadow-lg">
              <span className="text-rose-600 font-medium text-sm sm:text-base">
                28 Years of Love ❤️
              </span>
            </motion.div>
          </motion.div>

          <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-rose-600 mb-6 font-serif">
            Happy {years}th Anniversary
            <div className="text-xl sm:text-2xl md:text-3xl mt-2 text-rose-500">
              Mom & Dad
            </div>
          </motion.h1>
        </div>

        {/* Navigation Tabs - make scrollable on mobile */}
        <div className="flex justify-start sm:justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2 sm:pb-0">
          {["message", "timeline", "stats"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap
                ${
                  activeTab === tab
                    ? "bg-rose-500 text-white shadow-lg"
                    : "bg-rose-100 text-rose-600 hover:bg-rose-200"
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Message Content */}
        <AnimatePresence mode="wait">
          {activeTab === "message" && (
            <motion.div className="space-y-4 sm:space-y-8">
              <motion.div className="relative p-4 sm:p-6 rounded-2xl bg-rose-50/50 border border-rose-100">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
                  <span className="text-rose-400">
                    ✨ Our Dearest Parents ✨
                  </span>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Dear Mom & Dad, as you celebrate 28 beautiful years of
                  togetherness, we are filled with joy and gratitude. Your
                  journey began in 1997, and since then, you&apos;ve shown us
                  what true love looks like - patient, kind, and unwavering.
                </p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="flex-1 p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 shadow-sm">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Through life&apos;s ups and downs, your bond has only grown
                    stronger. The way you care for each other, support each
                    other&apos;s dreams, and face every challenge together has
                    taught us invaluable lessons about love and commitment.
                  </p>
                </div>
                <div className="text-4xl sm:text-6xl self-center animate-pulse">
                  💝
                </div>
              </motion.div>

              <motion.div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-white to-rose-50">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  Your love story isn&apos;t just about the big moments -
                  it&apos;s in the morning cups of tea, the shared smiles, the
                  quiet understanding, and the endless patience you have for
                  each other. You&apos;ve built not just a marriage, but a
                  beautiful home filled with love, laughter, and countless
                  precious memories.
                </p>
                <div className="absolute -bottom-4 right-6 text-4xl">❤️</div>
              </motion.div>
            </motion.div>
          )}

          {/* Timeline - make it more compact on mobile */}
          {activeTab === "timeline" && (
            <motion.div className="space-y-3 sm:space-y-4">
              {milestones.map((milestone) => (
                <motion.div
                  key={milestone.year}
                  className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg bg-rose-50 text-sm sm:text-base"
                >
                  <div className="text-xl font-bold text-rose-600">
                    {milestone.year}
                  </div>
                  <div className="text-gray-700">{milestone.event}</div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Stats - single column on mobile */}
          {activeTab === "stats" && (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="p-4 sm:p-6 rounded-lg bg-rose-50 text-center"
                >
                  <div className="text-xl sm:text-2xl font-bold text-rose-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Section */}
        <motion.div className="text-center mt-8 sm:mt-12">
          <p className="text-rose-500 font-semibold italic mb-2 text-sm sm:text-base">
            With endless love & gratitude ❤️
          </p>
          <p className="text-rose-400 text-xs sm:text-sm">
            Your loving children
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
