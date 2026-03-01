"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function ContactTerminal() {
  return (
    <section id="contact" className="py-32 bg-black font-mono relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-2xl">
          <div className="flex items-center justify-between mb-12 border-b border-border/50 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              Secure Connection: Encrypted
            </span>
          </div>

          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Initiate <span className="text-primary">Protocol</span>
            </h2>
            <p className="text-muted-foreground">
              Ready to break ground? Enter your project parameters below.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary">
                  // Identity
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-primary">
                  // Contact Frequency
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-primary">
                // Project Parameters
              </label>
              <textarea
                rows={4}
                placeholder="Describe your vision, timeline, and constraints..."
                className="w-full bg-transparent border-b border-border py-4 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30 resize-none"
              />
            </div>

            <div className="pt-8 flex justify-end">
              <Button variant="industrial" size="lg" className="w-full md:w-auto">
                Transmit Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
