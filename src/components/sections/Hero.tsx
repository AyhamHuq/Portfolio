"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-4"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-3 font-mono text-sm text-[var(--accent)]"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-3 text-5xl font-bold tracking-tight text-[var(--text-primary)] md:text-7xl"
        >
          Ayham Huq
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-2xl font-medium text-[var(--text-secondary)] md:text-3xl"
        >
          Software Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-10 max-w-lg text-base leading-relaxed text-[var(--text-muted)]"
        >
          Building full-stack applications and cloud infrastructure — from hackathon
          floors to Fortune 100 production systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Resume
          </Button>
          <Button href="#contact" variant="outline">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] transition-colors hover:text-[var(--text-secondary)]"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
