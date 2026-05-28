import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Globe } from "lucide-react";
import { holobuilds } from "@/data/holobuilds";

const Holobuilds = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="holobuilds" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-3">
            ✦ Holobuilds ✦
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 tracking-wide">
            Websites I've built
          </h2>
          <p className="text-sm text-muted-foreground mb-12 max-w-2xl">
            A growing archive of sites I've designed and shipped. Tap a card to open the full project log.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {holobuilds.map((b, i) => (
            <motion.div
              key={b.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ y: -4, boxShadow: "0 0 30px hsl(199 90% 55% / 0.12)" }}
              className="holo-card rounded-xl bg-surface-elevated border border-divider transition-all duration-300 hover:border-primary/30 overflow-hidden flex flex-col"
            >
              <Link to={`/holobuilds/${b.slug}`} className="flex flex-col h-full p-6 md:p-7 group">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <Globe size={16} className="text-primary drop-shadow-[0_0_6px_hsl(199_90%_55%/0.4)]" />
                    <span className="text-[10px] font-display font-medium tracking-[0.2em] uppercase text-primary">
                      {b.year} · {b.role}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>

                <div className="relative h-40 mb-5 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 via-background/40 to-transparent overflow-hidden flex items-center justify-center">
                  <span className="font-display text-xs tracking-[0.3em] uppercase text-primary/60">
                    Preview soon
                  </span>
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,transparent_calc(100%_-_1px),hsl(199_90%_55%/0.08)_100%)] bg-[length:100%_8px]" />
                </div>

                <h3 className="font-display text-lg font-bold text-foreground mb-2 tracking-wide group-hover:text-primary transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{b.tagline}</p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-divider">
                  {b.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded text-[10px] font-display tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Holobuilds;