import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { MapPin, Briefcase, TrendingUp } from "lucide-react";

const StatCard = ({ label, value, suffix = "", isYear = false, delay, isInView }: { label: string; value: number; suffix?: string; isYear?: boolean; delay: number; isInView: boolean }) => {
  const count = useCountUp(value, isYear ? 1 : 2000, isInView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="holo-card p-6 rounded-lg bg-surface-elevated border border-divider text-center"
    >
      <p className="font-display text-2xl md:text-3xl font-bold text-primary drop-shadow-[0_0_8px_hsl(199_90%_55%/0.4)]">
        {isYear ? value : count}{suffix}
      </p>
      <p className="text-sm text-muted-foreground mt-2">{label}</p>
    </motion.div>
  );
};

const cardData = [
  {
    icon: Briefcase,
    title: "From Code to Strategy",
    desc: "Started in web development, evolved through CRO and marketing leadership into a technical performance strategist who understands the full stack of growth.",
  },
  {
    icon: TrendingUp,
    title: "Cross-Functional Impact",
    desc: "Partner with product, engineering, and marketing teams to design experiments that drive measurable business outcomes.",
  },
  {
    icon: MapPin,
    title: "Technical × Business × Data",
    desc: "Unique ability to translate complex data into clear strategies that improve conversion rates, user experience, and bottom-line performance.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-surface/80" ref={ref}>
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
            Bridging data, product, and growth
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
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon size={20} className="text-primary mb-4 drop-shadow-[0_0_6px_hsl(199_90%_55%/0.4)]" />
              </motion.div>
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
          Results-driven professional with experience designing and executing A/B experiments to optimize product performance and improve KPIs. Skilled in analyzing data, identifying actionable insights, and presenting findings to stakeholders. Proven ability to translate complex data into strategies that improve conversion rates and business performance.
        </motion.p>

        <div className="grid grid-cols-3 gap-6 mt-10">
          <StatCard label="Established in" value={2018} isYear delay={0.7} isInView={isInView} />
          <StatCard label="Experiments Ran" value={100} suffix="+" delay={0.85} isInView={isInView} />
          <StatCard label="Websites Optimized" value={10} suffix="+" delay={1.0} isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default About;
