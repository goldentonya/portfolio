import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-surface/80" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-3">
            ✦ Credentials ✦
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-wide">
            Certifications
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          whileHover={{
            y: -4,
            boxShadow: "0 0 25px hsl(199 90% 55% / 0.12)",
            borderColor: "hsl(199 90% 55% / 0.4)",
          }}
          className="holo-card inline-flex items-center gap-4 p-5 rounded-lg bg-surface-elevated border border-divider transition-colors duration-300 cursor-default"
        >
          <Award size={24} className="text-primary drop-shadow-[0_0_8px_hsl(199_90%_55%/0.4)]" />
          <div>
            <h3 className="font-display font-semibold text-foreground text-sm tracking-wide">
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
