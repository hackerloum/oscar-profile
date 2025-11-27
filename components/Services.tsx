"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Palette, Smartphone, Check } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building modern, responsive web applications using the latest technologies and best practices.",
    features: [
      "React & Next.js Development",
      "Full-Stack Solutions",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive user interfaces that provide exceptional user experiences.",
    features: [
      "User Research & Testing",
      "Wireframing & Prototyping",
      "Design Systems",
      "Brand Identity",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications with native performance and modern design.",
    features: [
      "React Native Development",
      "iOS & Android Apps",
      "App Store Optimization",
      "Push Notifications",
    ],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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
    <section id="services" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-sora tracking-tight mb-4">
            What I Do
          </h2>
          <p className="text-gray-400 text-lg">Services I offer to bring your vision to life</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-accent-1/50 transition-all duration-300"
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />

                {/* Icon Container */}
                <motion.div
                  className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-accent-1 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

