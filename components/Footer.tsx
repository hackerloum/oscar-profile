"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Work: [
    { name: "Projects", href: "#work" },
    { name: "Case Studies", href: "#" },
    { name: "Testimonials", href: "#testimonials" },
  ],
  Services: [
    { name: "Web Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10 overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-1 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-3 rounded-full blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-sora gradient-text">Oscar</h3>
            <p className="text-gray-400 text-sm">
              Creative developer and digital designer crafting exceptional experiences.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-accent-1 hover:shadow-lg hover:shadow-accent-1/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h3 className="text-2xl font-bold mb-3">Stay Updated</h3>
          <p className="text-gray-400 mb-6">
            Subscribe to my newsletter for the latest updates and insights.
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-1 focus:bg-white/10 transition-all duration-300"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 font-bold hover:shadow-lg hover:shadow-accent-1/50 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Oscar. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

