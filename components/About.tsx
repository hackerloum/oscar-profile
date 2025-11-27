"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Palette,
  Smartphone,
  Database,
  Cloud,
  Zap,
  Download,
} from "lucide-react";
import Image from "next/image";

const skills = [
  { name: "Frontend", icon: Code },
  { name: "UI/UX Design", icon: Palette },
  { name: "Mobile Apps", icon: Smartphone },
  { name: "Backend", icon: Database },
  { name: "Cloud", icon: Cloud },
  { name: "Performance", icon: Zap },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Photo */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 p-[2px] rounded-2xl">
                <div className="absolute inset-[2px] bg-black rounded-2xl" />
              </div>
              <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-accent-1/20 to-accent-3/20 rounded-2xl p-2">
                <div className="w-full h-full bg-gray-800 rounded-xl flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Your Photo Here</span>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-sm font-medium gradient-text uppercase tracking-wider"
            >
              About Me
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold font-sora tracking-tight leading-tight"
            >
              Crafting Digital Experiences
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-lg text-gray-400 leading-relaxed"
            >
              <p>
                I'm a passionate creative developer and digital designer with a focus on building
                exceptional user experiences. With years of experience in modern web technologies,
                I bring ideas to life through clean code and beautiful design.
              </p>
              <p>
                My approach combines technical expertise with creative vision, ensuring every
                project is not only functional but also visually stunning and user-friendly.
              </p>
              <p>
                I specialize in creating responsive, performant applications that push the
                boundaries of what's possible on the web.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.1 * index, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-1/50 transition-all duration-300 cursor-pointer"
                  >
                    <Icon className="w-6 h-6 mb-2 text-accent-1" />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Download CV Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <button className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 font-semibold hover:shadow-lg hover:shadow-accent-1/50 transition-all duration-300">
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

