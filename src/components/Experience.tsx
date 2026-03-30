import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    company: "Elite Insurance Partners",
    roles: [
      {
        title: "Technical Performance Strategist",
        period: "Current",
        bullets: [
          "Led A/B testing strategy across product surfaces to improve conversion rate and lead performance",
          "Built analytics dashboards to track KPIs and inform data-driven decisions",
          "Partnered with engineering and marketing teams to design and execute experiments",
          "Presented insights and recommendations to leadership stakeholders",
        ],
      },
      {
        title: "Marketing Supervisor",
        period: "Previous",
        bullets: [
          "Managed marketing team operations and campaign performance",
          "Oversaw CRO initiatives and cross-channel optimization",
        ],
      },
      {
        title: "CRO Specialist",
        period: "Previous",
        bullets: [
          "Designed and implemented conversion rate optimization experiments",
          "Analyzed user behavior data to identify improvement opportunities",
        ],
      },
      {
        title: "WordPress Developer",
        period: "Previous",
        bullets: [
          "Built and maintained company websites on WordPress",
          "Implemented technical improvements for site performance and SEO",
        ],
      },
    ],
  },
  {
    company: "Baker White Inc.",
    roles: [
      {
        title: "Front End Web Developer & Graphic Designer",
        period: "Previous",
        bullets: [
          "Maintained client websites and implemented SEO best practices",
          "Created branding assets and marketing collateral",
        ],
      },
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-surface" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Career
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Professional experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {timeline.map((entry, ei) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * ei }}
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                {entry.company}
              </h3>

              <div className="relative border-l-2 border-divider pl-8 space-y-8">
                {entry.roles.map((role, ri) => (
                  <motion.div
                    key={role.title}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 * ei + 0.1 * ri }}
                  >
                    {/* Animated timeline dot */}
                    <motion.div
                      className="absolute -left-[2.55rem] top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 15,
                        delay: 0.3 * ei + 0.15 * ri,
                      }}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                      <h4 className="font-display font-semibold text-foreground">
                        {role.title}
                      </h4>
                      <motion.span
                        className="text-xs font-medium text-primary bg-accent-soft px-2 py-0.5 rounded-full w-fit"
                        whileHover={{ scale: 1.1 }}
                      >
                        {role.period}
                      </motion.span>
                    </div>

                    <ul className="space-y-1.5">
                      {role.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          className="text-sm text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.3 * ei + 0.1 * ri + 0.05 * bi }}
                        >
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
