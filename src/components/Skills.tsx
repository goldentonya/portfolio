import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code2, Beaker, BarChart3, Wrench, Sparkles } from "lucide-react";

const skillGroups = [
  {
    icon: Palette,
    title: "UI/UX Design",
    skills: ["UI Design", "Visual Design", "Design Systems", "Wireframing", "User Flows", "Prototyping", "Usability Testing"],
  },
  {
    icon: Code2,
    title: "Front-End Development",
    skills: ["React", "TypeScript", "JavaScript (ES6+)", "HTML & CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    icon: Beaker,
    title: "Product & Growth",
    skills: ["A/B Testing", "Experiment Design", "Conversion Rate Optimization", "Funnel Analysis"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    skills: ["Data Analysis", "KPI Tracking", "Dashboarding", "Cohort Analysis", "Attribution Modeling", "Segmentation", "Statistical Significance Testing"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Figma", "Git", "Vite", "WordPress", "Google Analytics", "Salesforce", "Datorama", "VWO", "Hotjar", "VS Code", "PostHog"],
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    skills: ["ChatGPT", "Claude Code", "Claude Design", "Lovable", "Manus"],
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 0 30px hsl(199 90% 55% / 0.12)", borderColor: "hsl(199 90% 55% / 0.4)" }}
              className="holo-card group rounded-xl bg-surface-elevated border border-divider p-6 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                  <group.icon size={20} className="text-primary drop-shadow-[0_0_6px_hsl(199_90%_55%/0.4)]" />
                </span>
                <h3 className="font-display font-semibold text-foreground text-sm tracking-wide">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + si * 0.05 }}
                    className="px-2.5 py-1 rounded-md text-xs bg-primary/10 border border-primary/20 text-primary/90 group-hover:border-primary/40 group-hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
