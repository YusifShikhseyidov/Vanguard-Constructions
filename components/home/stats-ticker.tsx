"use client";

import React from "react";
import { motion } from "motion/react";

const stats = [
  "2M+ Sq Ft Built",
  "///",
  "$500M Project Value",
  "///",
  "0 Safety Incidents",
  "///",
  "ISO 9001 Certified",
  "///",
  "25 Years Legacy",
  "///",
];

export function StatsTicker() {
  return (
    <section className="py-12 border-y border-border bg-card overflow-hidden relative">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          className="flex gap-16 items-center"
        >
          {[...stats, ...stats, ...stats].map((stat, index) => (
            <span
              key={index}
              className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-muted-foreground/20 to-muted-foreground/5 uppercase tracking-tighter"
            >
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* Vignette for fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </section>
  );
}
