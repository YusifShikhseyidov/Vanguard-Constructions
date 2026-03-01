"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Onyx Tower",
    category: "Commercial High-Rise",
    location: "New York, NY",
    image: "https://picsum.photos/seed/skyscraper/800/1000",
    colSpan: "md:col-span-2",
  },
  {
    id: 2,
    title: "Vertex Lab",
    category: "Research Facility",
    location: "Cambridge, MA",
    image: "https://picsum.photos/seed/lab/800/800",
    colSpan: "md:col-span-1",
  },
  {
    id: 3,
    title: "Echo Residence",
    category: "Private Estate",
    location: "Aspen, CO",
    image: "https://picsum.photos/seed/modernhouse/800/800",
    colSpan: "md:col-span-1",
  },
  {
    id: 4,
    title: "Terminal 4",
    category: "Infrastructure",
    location: "Dubai, UAE",
    image: "https://picsum.photos/seed/airport/1200/800",
    colSpan: "md:col-span-2",
  },
];

export function PortfolioGrid() {
  return (
    <section id="projects" className="py-32 container mx-auto px-6">
      <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            The <span className="text-primary">Vault</span>
          </h2>
          <p className="text-muted-foreground max-w-md text-lg">
            A curated selection of our most ambitious engineering feats.
            Structure as art.
          </p>
        </div>
        <div className="hidden md:block h-px flex-1 bg-border mx-12 mb-4" />
        <div className="text-right">
          <span className="block text-xs font-mono text-primary mb-2">
            // SELECTED WORKS
          </span>
          <span className="text-4xl font-display font-bold text-muted-foreground/20">
            01 — 04
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`group relative aspect-square ${project.colSpan} overflow-hidden bg-card border border-border/50`}
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-[0.5]"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 transition-opacity duration-300" />

            {/* Blueprint Lines Overlay (Simulated) */}
            <div className="absolute inset-0 border-[0.5px] border-primary/0 group-hover:border-primary/50 transition-all duration-500 m-4 z-20">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-primary text-xs font-mono mb-2 tracking-widest uppercase">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-mono">
                    {project.location}
                  </p>
                </div>
                <div className="bg-primary text-black p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
