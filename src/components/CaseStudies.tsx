import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Filter, BarChart3 } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const cases = [
  {
    icon: TrendingUp,
    tag: "Conversion Rate Optimization",
    title: "Landing Page A/B Test",
    problem: "Low conversion rate on a high-traffic landing page was limiting lead acquisition volume.",
    action: "Designed and executed an A/B test with a restructured layout, refined messaging hierarchy, and optimized CTA placement.",
    result: "Achieved a 23% improvement in conversion rate, driving a significant increase in qualified leads.",
    metricNum: 23,
    metricPrefix: "+",
    metricSuffix: "%",
    metricLabel: "Conversion Rate",
  },
  {
    icon: Filter,
    tag: "Funnel Optimization",
    title: "Lead Funnel Drop-off Reduction",
    problem: "Significant drop-off identified between lead capture and policy conversion stages.",
    action: "Analyzed user behavior data across funnel stages, identified friction points, and implemented targeted UX and messaging improvements.",
    result: "Increased lead-to-policy conversion rate by 18%, improving overall funnel efficiency.",
    metricNum: 18,
    metricPrefix: "+",
    metricSuffix: "%",
    metricLabel: "Lead-to-Policy Rate",
  },
  {
    icon: BarChart3,
    tag: "Dashboard & Insights",
    title: "KPI Analytics Dashboard",
    problem: "Leadership lacked real-time visibility into performance metrics and experiment outcomes.",
    action: "Built comprehensive analytics dashboards consolidating KPIs from multiple data sources with automated reporting.",
    result: "Enabled data-driven decision making across teams, reducing reporting time by 60%.",
    metricNum: 60,
    metricPrefix: "-",
    metricSuffix: "%",
    metricLabel: "Reporting Time",
  },
];

const MetricCounter = ({ num, prefix, suffix, label, inView }: { num: number; prefix: string; suffix: string; label: string; inView: boolean }) => {
  const count = useCountUp(num, 2000, inView);
  return (
    <div className="lg:min-w-[140px] flex lg:flex-col items-center gap-2 p-4 rounded-lg bg-accent-soft text-center">
      <motion.span
        className="font-display text-3xl font-bold text-primary"
        initial={{ scale: 0.5 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
      >
        {prefix}{count}{suffix}
      </motion.span>
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
    </div>
  );
};

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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 40px -15px hsl(174 60% 50% / 0.12)",
              }}
              className="p-6 md:p-8 rounded-xl bg-surface-elevated border border-divider transition-colors duration-300 hover:border-primary/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div whileHover={{ rotate: 20 }} transition={{ type: "spring" }}>
                      <c.icon size={18} className="text-primary" />
                    </motion.div>
                    <span className="text-xs font-medium tracking-wider uppercase text-primary">
                      {c.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {c.title}
                  </h3>

                  <div className="space-y-3 text-sm">
                    {[
                      { label: "Problem", text: c.problem },
                      { label: "Action", text: c.action },
                      { label: "Result", text: c.result },
                    ].map((item) => (
                      <div key={item.label}>
                        <span className="font-semibold text-foreground">{item.label}: </span>
                        <span className="text-muted-foreground">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <MetricCounter
                  num={c.metricNum}
                  prefix={c.metricPrefix}
                  suffix={c.metricSuffix}
                  label={c.metricLabel}
                  inView={isInView}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
