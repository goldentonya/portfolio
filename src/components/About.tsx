import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, TrendingUp } from "lucide-react";

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
    <section id="about" className="section-padding bg-surface" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
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
                boxShadow: "0 20px 40px -15px hsl(174 60% 50% / 0.15)",
                borderColor: "hsl(174 60% 50% / 0.3)",
              }}
              className="p-6 rounded-lg bg-surface-elevated border border-divider transition-colors duration-300 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon size={20} className="text-primary mb-4" />
              </motion.div>
              <h3 className="font-display font-semibold text-foreground mb-2">
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
      </div>
    </section>
  );
};

export default About;
