import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.p
            className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            ✦ Transmission ✦
          </motion.p>
          <motion.h2
            className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's connect
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Open to opportunities in product, growth, and experimentation roles. Let's discuss how I can help your team make smarter, data-driven decisions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg" className="font-medium w-full sm:w-auto group shadow-[0_0_15px_hsl(199_90%_55%/0.2)]">
              <a href="mailto:goldentonya33@gmail.com">
                <Mail size={16} className="mr-2 transition-transform group-hover:scale-110" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium w-full sm:w-auto group border-primary/30 hover:border-primary hover:shadow-[0_0_15px_hsl(199_90%_55%/0.15)]">
              <a href="https://www.linkedin.com/in/tonyagolden/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} className="mr-2 transition-transform group-hover:scale-110" />
                LinkedIn
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-text-tertiary"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <MapPin size={14} />
            </motion.div>
            <span>Tampa, FL</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
