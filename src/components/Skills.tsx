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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <group.icon size={20} className="text-primary mb-4" />
              <h3 className="font-display font-semibold text-foreground mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
