import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { StatsTicker } from "@/components/home/stats-ticker";
import { PortfolioGrid } from "@/components/home/portfolio-grid";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { ContactTerminal } from "@/components/home/contact-terminal";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <StatsTicker />
      <PortfolioGrid />
      <ProcessTimeline />
      <ContactTerminal />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/30 bg-background text-center">
        <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">
          © 2024 Vanguard Constructs. All Systems Nominal.
        </p>
      </footer>
    </main>
  );
}

