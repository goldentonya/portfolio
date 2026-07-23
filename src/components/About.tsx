import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { Palette, Code2, TrendingUp } from "lucide-react";

const StatCard = ({ label, value, suffix = "", isYear = false, delay, isInView }: { label: string; value: number; suffix?: string; isYear?: boolean; delay: number; isInView: boolean }) => {
  const count = useCountUp(value, isYear ? 1 : 2000, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="holo-card p-3 sm:p-6 rounded-lg bg-surface-elevated border border-divider text-center flex flex-col items-center justify-center"
    >
      <p className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary drop-shadow-[0_0_8px_hsl(199_90%_55%/0.4)]">
        {isYear ? value : count}{suffix}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground mt-2">{label}</p>
    </motion.div>
  );
};

const cardData = [
  {
    icon: Palette,
    title: "Where It Started: Design",
    desc: "My path began in design, learning how to think about layout, color, and user experience long before I ever wrote a line of code.",
  },
  {
    icon: Code2,
    title: "Self-Taught in Front-End Dev",
    desc: "I taught myself front-end development so I could build the things I was designing, and it grew into a genuine love for writing code.",
  },
  {
    icon: TrendingUp,
    title: "Into CRO & Data Analysis",
    desc: "That path led me into conversion rate optimization and A/B testing, where I became fluent in data analysis and using real user behavior to guide decisions.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="my-story" className="section-padding bg-surface/80" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-3">
            ✦ The Backstory ✦
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-wide">
            A path from design, to code, to data
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cardData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 30px hsl(199 90% 55% / 0.12)",
                borderColor: "hsl(199 90% 55% / 0.4)",
              }}
              className="holo-card p-6 rounded-lg bg-surface-elevated border border-divider transition-colors duration-300 cursor-default"
            >
              <item.icon size={20} className="text-primary mb-4 drop-shadow-[0_0_6px_hsl(199_90%_55%/0.4)]" />
              <h3 className="font-display font-semibold text-foreground mb-2 text-sm tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-muted-foreground leading-relaxed max-w-3xl"
        >
          I started out in design, learning how to craft interfaces that felt intuitive and looked great. From there I taught myself front-end development so I could build the things I was designing, and it quickly grew into a genuine love for writing code. That love led me to start college and graduate with an Associate's Degree in Computer Science. From there I began my career doing front-end development work. Eventually I was moved into a CRO specialist role at my current company, where I became familiar with data analysis, experiment design, and using real user behavior to inform every decision. Today I bring all three together, design, development, and data, to build interfaces that are as intuitive as they are effective.
        </motion.p>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <StatCard label="Established in" value={2018} isYear delay={0.7} isInView={isInView} />
          <StatCard label="Experiments Ran" value={100} suffix="+" delay={0.85} isInView={isInView} />
          <StatCard label="Interfaces Built" value={10} suffix="+" delay={1.0} isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default About;
