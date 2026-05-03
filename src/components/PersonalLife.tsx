import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const placeholderImages = [
  { src: "https://placehold.co/600x800/0a1628/22d3ee?text=Photo+1", alt: "Personal photo 1" },
  { src: "https://placehold.co/600x800/0a1628/22d3ee?text=Photo+2", alt: "Personal photo 2" },
  { src: "https://placehold.co/600x800/0a1628/22d3ee?text=Photo+3", alt: "Personal photo 3" },
];

const PersonalLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="personal" className="section-padding bg-surface/60" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-3">
            ✦ Off Duty ✦
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-wide">
            Beyond the dashboards
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {placeholderImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, boxShadow: "0 0 24px hsl(199 90% 55% / 0.25)" }}
                className={`relative overflow-hidden rounded-lg border border-divider holo-card ${
                  i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              [Dummy content] When I'm not running experiments or digging through analytics dashboards, you can find me exploring the sunny streets of Tampa, hunting for the best coffee spots in town, and soaking up time with the people I love most.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              [Dummy content] Outside of work, I'm passionate about [hobby], an avid [interest], and a devoted [family/pet detail]. I believe the same curiosity that fuels great experiments is the same one that makes life genuinely fun — always asking "what if?" and being willing to test the answer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              [Dummy content] A few things I love: [thing 1], [thing 2], and [thing 3]. Replace this with your real story whenever you're ready.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonalLife;