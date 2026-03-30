import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-surface" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Credentials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{
            y: -4,
            boxShadow: "0 15px 30px -10px hsl(174 60% 50% / 0.15)",
            borderColor: "hsl(174 60% 50% / 0.3)",
          }}
          className="inline-flex items-center gap-4 p-5 rounded-lg bg-surface-elevated border border-divider transition-colors duration-300 cursor-default"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
          >
            <Award size={24} className="text-primary" />
          </motion.div>
          <div>
            <h3 className="font-display font-semibold text-foreground">
              Google Ads Search Certification
            </h3>
            <p className="text-sm text-muted-foreground">Google</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
