import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MousePointerClick, Video, Mail, Image as ImageIcon } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import buttonOrig from "@/assets/case-button-orig.png";
import buttonVar from "@/assets/case-button-var.png";
import lifeTyvVar from "@/assets/case-life-tyv-var.png";
import emailOrig from "@/assets/case-email-orig.png";
import emailVar from "@/assets/case-email-var.png";
import tyvOrig from "@/assets/case-tyv-orig.png";
import tyvVar2 from "@/assets/case-tyv-var2.png";
import tyvVar3 from "@/assets/case-tyv-var3.png";
import tyvVar4 from "@/assets/case-tyv-var4.png";

type CaseImage = { src: string; label: string };

type Case = {
  icon: typeof MousePointerClick;
  tag: string;
  title: string;
  problem: string;
  action: string;
  result: string;
  metricNum: number;
  metricPrefix: string;
  metricSuffix: string;
  metricLabel: string;
  baseline: string;
  winner: string;
  images: CaseImage[];
};

const cases: Case[] = [
  {
    icon: MousePointerClick,
    tag: "CTA Color Test",
    title: "Button Color Change",
    problem:
      "While auditing competitor websites, I noticed many were using orange CTA buttons while we were using red. I wanted to test whether the color shift would lift our click rate.",
    action:
      "Ran an A/B test on the primary CTA, swapping the red button for an orange variant while keeping copy and placement identical.",
    result:
      "The orange variant outperformed the red control, lifting click rate from 43.61% to 44.26% — a small change with meaningful downstream impact at scale.",
    metricNum: 44.26,
    metricPrefix: "",
    metricSuffix: "%",
    metricLabel: "Variant Click Rate",
    baseline: "Original (Red): 43.61%",
    winner: "Variant (Orange): 44.26%",
    images: [
      { src: buttonOrig, label: "Original" },
      { src: buttonVar, label: "Variant" },
    ],
  },
  {
    icon: Video,
    tag: "Funnel Optimization",
    title: "LifeCompared Thank You Video",
    problem:
      "After a Thank You Video boosted performance in our Medicare flow, we wanted to validate the same play in our Life Insurance funnel to drive higher lead-to-policy conversion.",
    action:
      "Tested two Thank You Video variations on the LifeCompared confirmation page — one AI-generated and one featuring our director on camera — measuring downstream lead-to-policy.",
    result:
      "The director-led video won, lifting lead-to-policy from 5.8% to 6.9% and confirming that authentic, human-led video outperformed the AI alternative.",
    metricNum: 6.9,
    metricPrefix: "",
    metricSuffix: "%",
    metricLabel: "Lead-to-Policy",
    baseline: "Original: 5.8%",
    winner: "Winning Variant: 6.9%",
    images: [{ src: lifeTyvVar, label: "Winning Variant" }],
  },
  {
    icon: Mail,
    tag: "Form UX",
    title: "Move Email Field",
    problem:
      "Analytics showed a heavy drop-off on the final step where users were asked for name, phone, and email all at once — it felt like handing over everything in a single ask.",
    action:
      "Restructured the form by moving the email field to an earlier step, separating it from the phone field so the contact ask felt more progressive and less invasive.",
    result:
      "The repositioned email field reduced friction at the final step and lifted overall conversions by 3.48%.",
    metricNum: 3.48,
    metricPrefix: "+",
    metricSuffix: "%",
    metricLabel: "Conversions",
    baseline: "Original: email on final step",
    winner: "Variant: email moved earlier",
    images: [
      { src: emailOrig, label: "Original" },
      { src: emailVar, label: "Variant" },
    ],
  },
  {
    icon: ImageIcon,
    tag: "Video Engagement",
    title: "Medicare Thank You Video Thumbnails",
    problem:
      "After launching the Medicare Thank You Video, watch rates were lower than expected — the default thumbnail wasn't compelling enough to pull users into the video.",
    action:
      "Designed and tested 3 new high-contrast thumbnail variations against the original, optimizing for visual interrupt and click-to-play intent.",
    result:
      "All 3 variations beat the control on lead-to-policy, with the winning thumbnail lifting LTP from 4.3% to 5.9%.",
    metricNum: 5.9,
    metricPrefix: "",
    metricSuffix: "%",
    metricLabel: "Lead-to-Policy",
    baseline: "Original: 4.3%",
    winner: "Winning Variant: 5.9%",
    images: [
      { src: tyvOrig, label: "Original" },
      { src: tyvVar2, label: "Variation 2" },
      { src: tyvVar3, label: "Variation 3" },
      { src: tyvVar4, label: "Variation 4" },
    ],
  },
];

const MetricCounter = ({
  num,
  prefix,
  suffix,
  label,
  inView,
}: {
  num: number;
  prefix: string;
  suffix: string;
  label: string;
  inView: boolean;
}) => {
  const isFloat = !Number.isInteger(num);
  const target = isFloat ? Math.round(num * 100) : num;
  const raw = useCountUp(target, 2000, inView);
  const display = isFloat ? (raw / 100).toFixed(2) : raw;
  return (
    <div className="min-w-[140px] flex flex-col items-center gap-2 p-4 rounded-lg bg-accent-soft border border-primary/20 text-center">
      <motion.span
        className="font-display text-2xl font-bold text-primary drop-shadow-[0_0_10px_hsl(199_90%_55%/0.4)] tracking-wider"
        initial={{ scale: 0.5 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
      >
        {prefix}
        {display}
        {suffix}
      </motion.span>
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
    </div>
  );
};

const CaseImages = ({ images }: { images: CaseImage[] }) => {
  const cols =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : "grid-cols-2";
  return (
    <div className={`grid ${cols} gap-3 mb-6`}>
      {images.map((img) => (
        <figure
          key={img.label}
          className="group relative overflow-hidden rounded-lg border border-divider bg-background/40"
        >
          <img
            src={img.src}
            alt={img.label}
            loading="lazy"
            className="w-full h-40 sm:h-48 object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-sm border border-primary/30 text-[10px] font-display tracking-widest uppercase text-primary">
            {img.label}
          </figcaption>
        </figure>
      ))}
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
          <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-3">
            ✦ Battle Reports ✦
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-12 tracking-wide">
            Selected case studies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              whileHover={{
                y: -4,
                boxShadow: "0 0 30px hsl(199 90% 55% / 0.1)",
              }}
              className="holo-card p-6 md:p-8 rounded-xl bg-surface-elevated border border-divider transition-all duration-300 hover:border-primary/30 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div whileHover={{ rotate: 20 }} transition={{ type: "spring" }}>
                  <c.icon
                    size={18}
                    className="text-primary drop-shadow-[0_0_6px_hsl(199_90%_55%/0.4)]"
                  />
                </motion.div>
                <span className="text-xs font-display font-medium tracking-wider uppercase text-primary">
                  {c.tag}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-5 tracking-wide">
                {c.title}
              </h3>

              <CaseImages images={c.images} />

              <div className="space-y-3 text-sm mb-6">
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

              <div className="mt-auto flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-divider">
                <div className="flex-1 space-y-1 text-xs">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                    {c.baseline}
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_hsl(199_90%_55%/0.8)]" />
                    {c.winner}
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