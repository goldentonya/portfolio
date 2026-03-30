import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Filter, BarChart3 } from "lucide-react";

const cases = [
  {
    icon: TrendingUp,
    tag: "Conversion Rate Optimization",
    title: "Landing Page A/B Test",
    problem:
      "Low conversion rate on a high-traffic landing page was limiting lead acquisition volume.",
    action:
      "Designed and executed an A/B test with a restructured layout, refined messaging hierarchy, and optimized CTA placement.",
    result: "Achieved a 23% improvement in conversion rate, driving a significant increase in qualified leads.",
    metric: "+23%",
    metricLabel: "Conversion Rate",
  },
  {
    icon: Filter,
    tag: "Funnel Optimization",
    title: "Lead Funnel Drop-off Reduction",
    problem:
      "Significant drop-off identified between lead capture and policy conversion stages.",
    action:
      "Analyzed user behavior data across funnel stages, identified friction points, and implemented targeted UX and messaging improvements.",
    result: "Increased lead-to-policy conversion rate by 18%, improving overall funnel efficiency.",
    metric: "+18%",
    metricLabel: "Lead-to-Policy Rate",
  },
  {
    icon: BarChart3,
    tag: "Dashboard & Insights",
    title: "KPI Analytics Dashboard",
    problem:
      "Leadership lacked real-time visibility into performance metrics and experiment outcomes.",
    action:
      "Built comprehensive analytics dashboards consolidating KPIs from multiple data sources with automated reporting.",
    result: "Enabled data-driven decision making across teams, reducing reporting time by 60%.",
    metric: "-60%",
    metricLabel: "Reporting Time",
  },
];

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Impact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Selected case studies
          </h2>
        </motion.div>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="p-6 md:p-8 rounded-xl bg-surface-elevated border border-divider card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <c.icon size={18} className="text-primary" />
                    <span className="text-xs font-medium tracking-wider uppercase text-primary">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {c.title}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Problem: </span>
                      <span className="text-muted-foreground">{c.problem}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Action: </span>
                      <span className="text-muted-foreground">{c.action}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Result: </span>
                      <span className="text-muted-foreground">{c.result}</span>
                    </div>
                  </div>
                </div>

                {/* Metric highlight */}
                <div className="lg:min-w-[140px] flex lg:flex-col items-center gap-2 p-4 rounded-lg bg-accent-soft text-center">
                  <span className="font-display text-3xl font-bold text-primary">
                    {c.metric}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">
                    {c.metricLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
