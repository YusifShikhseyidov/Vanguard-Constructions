"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description: "We align vision with feasibility. Every constraint is mapped, every ambition stress-tested.",
  },
  {
    id: "02",
    title: "Engineering",
    description: "Structural integrity meets aesthetic precision. We draft the blueprint for the impossible.",
  },
  {
    id: "03",
    title: "Construction",
    description: "Deployment of heavy machinery and master craftsmen. The vision takes physical form.",
  },
  {
    id: "04",
    title: "Handover",
    description: "Rigorous inspection and final polish. We deliver not just a building, but a legacy.",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="expertise" className="py-32 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Header */}
          <div className="md:w-1/3 sticky top-32 h-fit">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
              The <br /> <span className="text-primary">Method</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Order from chaos. Our four-stage protocol ensures precision at every scale.
            </p>
            <div className="h-px w-full bg-border" />
          </div>

          {/* Timeline */}
          <div ref={containerRef} className="md:w-2/3 relative pl-8 md:pl-16 border-l border-border/30">
            {/* Progress Line */}
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary origin-top"
            />

            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Indicator */}
                  <div className="absolute -left-[39px] md:-left-[71px] top-2.5 w-4 h-4 bg-background border-2 border-primary rounded-full z-20" />
                  
                  <span className="text-6xl md:text-8xl font-display font-bold text-muted-foreground/10 absolute -top-10 -left-4 -z-10 select-none">
                    {step.id}
                  </span>
                  
                  <h3 className="text-3xl font-display font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
