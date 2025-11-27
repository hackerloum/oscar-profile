"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, X } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Web", "Mobile", "Design"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web",
    description: "Modern e-commerce solution with advanced filtering and payment integration",
    image: "/api/placeholder/800/500",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    description: "Secure mobile banking application with biometric authentication",
    image: "/api/placeholder/800/500",
    tech: ["React Native", "TypeScript", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web",
    description: "Comprehensive analytics dashboard with real-time data visualization",
    image: "/api/placeholder/800/500",
    tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Brand Identity Design",
    category: "Design",
    description: "Complete brand identity system for tech startup",
    image: "/api/placeholder/800/500",
    tech: ["Figma", "Illustrator", "Photoshop"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Fitness Tracking App",
    category: "Mobile",
    description: "AI-powered fitness tracking with personalized workout plans",
    image: "/api/placeholder/800/500",
    tech: ["Flutter", "Firebase", "TensorFlow"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Web",
    description: "Ultra-modern portfolio website with smooth animations",
    image: "/api/placeholder/800/500",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="work" className="py-20 md:py-32 relative">
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
            Featured Work
          </h2>
          <p className="text-gray-400 text-lg">Selected projects I'm proud of</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-accent-1 to-accent-2 text-white"
                  : "border border-white/20 text-gray-400 hover:border-accent-1/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-1/20 to-accent-3/20 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">Project Image</span>
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ y: 0 }}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block text-xs px-3 py-1 rounded-full border border-white/30 mb-3 bg-black/50">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Hover Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl"
                  whileHover={{
                    borderImage: "linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899) 1",
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-2xl bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full bg-background-secondary rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="relative h-64 bg-gradient-to-br from-accent-1/20 to-accent-3/20">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="inline-block text-xs px-3 py-1 rounded-full border border-white/30 mb-3">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
                    <p className="text-gray-400 text-lg">{selectedProject.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 font-semibold hover:shadow-lg hover:shadow-accent-1/50 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-accent-1 font-semibold transition-all"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

