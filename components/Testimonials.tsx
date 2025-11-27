"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Oscar was an absolute pleasure. The attention to detail and creative vision brought our project to life in ways we never imagined.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Exceptional work! The website Oscar created for us exceeded all expectations. Professional, responsive, and beautifully designed.",
    name: "Michael Chen",
    title: "Founder, DesignCo",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Oscar's technical expertise combined with creative design skills resulted in a product that perfectly represents our brand. Highly recommended!",
    name: "Emily Rodriguez",
    title: "Marketing Director, BrandHub",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 relative">
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
            What Clients Say
          </h2>
          <p className="text-gray-400 text-lg">Testimonials from satisfied clients</p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center"
            >
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-accent-1 text-accent-1"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl italic text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-1 to-accent-2 mb-4 flex items-center justify-center text-2xl font-bold">
                  {testimonials[currentIndex].name.charAt(0)}
                </div>
                <p className="text-xl font-bold mb-1">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400">{testimonials[currentIndex].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-gradient-to-r from-accent-1 to-accent-2"
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

