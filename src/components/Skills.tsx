import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Beaker, BarChart3, Code, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Beaker,
    title: "Product & Growth",
    skills: ["A/B Testing", "Experiment Design", "Conversion Rate Optimization", "Funnel Analysis"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    skills: ["Data Analysis", "KPI Tracking", "Dashboarding"],
  },
  {
    icon: Code,
    title: "Technical",
    skills: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Google Analytics", "Salesforce", "Datorama", "VWO", "Hotjar"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-3">
            ✦ Arsenal ✦
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-12 tracking-wide">
            Core competencies
          </h2>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={itemVariants} className="group">
              <group.icon size={20} className="text-primary mb-4 drop-shadow-[0_0_6px_hsl(199_90%_55%/0.4)]" />
              <h3 className="font-display font-semibold text-foreground mb-4 text-sm tracking-wide">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + si * 0.08 }}
                    className="text-sm text-muted-foreground flex items-center gap-2 group-hover:text-foreground transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0 shadow-[0_0_4px_hsl(199_90%_55%/0.6)]" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
