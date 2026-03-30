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
    skills: ["HTML, CSS, JavaScript", "WordPress"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Google Analytics", "Salesforce", "Datorama"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Expertise
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
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
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <group.icon size={20} className="text-primary mb-4 transition-colors" />
              </motion.div>
              <h3 className="font-display font-semibold text-foreground mb-4">
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
                    <motion.span
                      className="w-1 h-1 rounded-full bg-primary shrink-0"
                      whileHover={{ scale: 2 }}
                    />
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
