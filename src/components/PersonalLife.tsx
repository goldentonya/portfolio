import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import personal1 from "@/assets/personal-1.jpeg";
import personal2 from "@/assets/personal-2.jpeg";
import personal3 from "@/assets/personal-3.jpeg";
import personal4 from "@/assets/personal-4.jpeg";
import personal5 from "@/assets/personal-5.jpeg";
import personal6 from "@/assets/personal-6.jpeg";
import personal7 from "@/assets/personal-7.jpeg";
import personal8 from "@/assets/personal-8.jpeg";
import personal9 from "@/assets/personal-9.jpeg";

const placeholderImages = [
  { src: personal1, alt: "With my partner in the backyard" },
  { src: personal2, alt: "Hiking the cactus trails in Aruba" },
  { src: personal3, alt: "Platform 9¾ at King's Cross, London" },
  { src: personal4, alt: "Date night out" },
  { src: personal5, alt: "Our pups in their Star Wars costumes" },
  { src: personal6, alt: "Night fishing" },
  { src: personal7, alt: "Bass caught on a Florida afternoon" },
  { src: personal8, alt: "Aussie at the campsite" },
  { src: personal9, alt: "Pup by the campfire" },
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
            className="grid grid-cols-3 gap-3"
          >
            {placeholderImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, boxShadow: "0 0 24px hsl(199 90% 55% / 0.25)" }}
                className="relative overflow-hidden rounded-lg border border-divider holo-card aspect-square"
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