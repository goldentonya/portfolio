import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's connect
          </h2>
          <p className="text-muted-foreground mb-8">
            Open to opportunities in product, growth, and experimentation roles. Let's discuss how I can help your team make smarter, data-driven decisions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button asChild size="lg" className="font-medium w-full sm:w-auto">
              <a href="mailto:tonya@example.com">
                <Mail size={16} className="mr-2" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium w-full sm:w-auto">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-text-tertiary">
            <MapPin size={14} />
            <span>Tampa, FL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
