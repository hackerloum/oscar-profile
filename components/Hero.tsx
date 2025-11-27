"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const words = ["Creative Developer", "& Digital Designer"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-hero opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent-2 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-3 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-base font-medium gradient-text mb-6 uppercase tracking-wider"
        >
          Hi, I&apos;m Oscar
        </motion.p>

        {/* Main Heading */}
        <div className="mb-6">
          {words.map((word, index) => (
            <motion.h1
              key={index}
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sora tracking-tight leading-tight mb-2"
            >
              <span className="gradient-text">{word}</span>
            </motion.h1>
          ))}
        </div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting exceptional digital experiences through innovative design and cutting-edge
          development
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Link
            href="#work"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 font-bold text-lg overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-2 via-accent-3 to-accent-1 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>

          <Link
            href="#contact"
            className="group px-8 py-4 rounded-xl border-2 border-transparent bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 bg-clip-border font-bold text-lg relative"
          >
            <span className="absolute inset-[2px] rounded-xl bg-black" />
            <span className="relative z-10 gradient-text">Get In Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

