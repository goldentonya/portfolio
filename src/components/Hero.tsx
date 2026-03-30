import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative pt-16">
      <div className="section-container w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Growth & Experimentation
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Tonya Golden
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl"
          >
            Technical Performance Strategist
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl"
          >
            I help companies improve conversion, optimize user journeys, and make smarter product decisions through experimentation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="font-medium">
              <a href="#case-studies">
                <ArrowDown size={16} className="mr-2" />
                View My Work
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <a href="#contact">
                <Mail size={16} className="mr-2" />
                Contact Me
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-soft rounded-full blur-3xl opacity-40 -z-10" />
    </section>
  );
};

export default Hero;
