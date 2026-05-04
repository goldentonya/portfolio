import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import personal1 from "@/assets/personal-1.webp";
import personal2 from "@/assets/personal-2.webp";
import personal3 from "@/assets/personal-3.webp";
import personal4 from "@/assets/personal-4.webp";
import personal5 from "@/assets/personal-5.webp";
import personal6 from "@/assets/personal-6.webp";
import personal7 from "@/assets/personal-7.webp";
import personal8 from "@/assets/personal-8.webp";
import personal9 from "@/assets/personal-9.webp";

const placeholderImages = [
  { src: personal5, alt: "Our pups in their Star Wars costumes" },
  { src: personal2, alt: "Hiking the cactus trails in Aruba" },
  { src: personal7, alt: "Bass caught on a Florida afternoon" },
  { src: personal9, alt: "Pup by the campfire" },
  { src: personal1, alt: "With my partner in the backyard" },
  { src: personal3, alt: "Platform 9¾ at King's Cross, London" },
  { src: personal8, alt: "Aussie at the campsite" },
  { src: personal6, alt: "Night fishing" },
  { src: personal4, alt: "Date night out" },
];

const PersonalLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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

        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm originally from Minnesota, where I was born and raised, and in 2020 I made the move down to Tampa, Florida for a change of pace and a lot more sunshine.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Outside of work, most of my time is spent with my amazing boyfriend and our two Australian Shepherds, who are absolutely our babies and keep life fun. We love staying active and being outdoors together, whether that's working out, heading to the beach, camping, or going fishing. I also enjoy winding down with video games when I get the chance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Travel is a big passion of mine, and I'm always looking forward to the next trip. At the top of my bucket list is visiting Japan — a place I've wanted to experience for a long time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm also a big music fan and love going to concerts whenever I can. And I'm definitely a nerd at heart — I've always loved Star Wars, Pokémon, and anime like Bleach, Demon Slayer, Black Clover and many more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-3 md:gap-4"
          >
            {placeholderImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, boxShadow: "0 0 24px hsl(199 90% 55% / 0.25)" }}
                className="relative overflow-hidden rounded-lg border border-divider holo-card aspect-square"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(i)}
                  className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label={`Open ${img.alt}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-2 bg-background border-primary/30">
          {openIdx !== null && (
            <img
              src={placeholderImages[openIdx].src}
              alt={placeholderImages[openIdx].alt}
              className="w-full max-h-[85vh] object-contain rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PersonalLife;