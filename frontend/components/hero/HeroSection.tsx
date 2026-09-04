"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";

const HeroSection = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(textRef, {
    once: true,
    amount: 0.3,
  });

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.jpg"
          alt="Computer parts store hero image"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Image Overlay */}
      <div className="absolute inset-0 z-10 bg-white/70 dark:bg-black/70" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={textRef}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-3xl text-center"
        >
          {/* Heading */}
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl dark:text-white">
            Build Your Dream PC
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed text-black sm:text-xl md:text-2xl dark:text-white">
            Discover top-quality computer components — from cutting-edge CPUs to
            powerful GPUs. We bring you the best hardware for your next build.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold
              text-white shadow-md transition-colors duration-200
              hover:bg-indigo-700"
            >
              Shop Now
            </button>

            <button
              className="rounded-lg border border-gray-300 bg-white
              px-6 py-3 font-semibold text-black shadow-sm
              transition-colors duration-200 hover:bg-gray-50
              dark:border-gray-600 dark:bg-gray-800 dark:text-white
              dark:hover:bg-gray-700"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
