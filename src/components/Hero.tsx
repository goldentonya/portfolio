import { motion } from "framer-motion";
import { ArrowDown, Mail, Code2, FlaskConical, BarChart3, LineChart, Database, GitBranch, Cpu, Zap, Binary, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tonya-portrait.jpeg";
import { useEffect, useState } from "react";

const roles = [
  "Technical Performance Strategist",
  "Growth & Experimentation Lead",
  "Conversion Optimization Expert",
  "Data-Driven Decision Maker",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center relative pt-16 overflow-hidden">
      {/* Holographic grid backdrop */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(199 90% 55% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(199 90% 55% / 0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Floating tech icons (coding, experimentation, data) */}
      {[
        { Icon: Code2, left: "6%", top: "18%", size: 28, delay: 0 },
        { Icon: FlaskConical, left: "14%", top: "72%", size: 26, delay: 0.6 },
        { Icon: BarChart3, left: "22%", top: "30%", size: 30, delay: 1.2 },
        { Icon: Database, left: "30%", top: "82%", size: 24, delay: 0.4 },
        { Icon: GitBranch, left: "44%", top: "12%", size: 22, delay: 1.8 },
        { Icon: LineChart, left: "58%", top: "68%", size: 32, delay: 0.9 },
        { Icon: Cpu, left: "72%", top: "22%", size: 26, delay: 1.4 },
        { Icon: Activity, left: "82%", top: "78%", size: 28, delay: 0.3 },
        { Icon: Binary, left: "90%", top: "40%", size: 24, delay: 2.1 },
        { Icon: Zap, left: "50%", top: "88%", size: 22, delay: 1.6 },
      ].map(({ Icon, left, top, size, delay }, i) => (
        <div
          key={i}
          className="hero-float absolute -z-10 text-primary/25 drop-shadow-[0_0_8px_hsl(199_90%_55%/0.5)]"
          style={{
            left,
            top,
            ['--dur' as string]: `${7 + (i % 4)}s`,
            animationDelay: `${delay}s`,
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </div>
      ))}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="hero-particle absolute w-0.5 h-0.5 rounded-full bg-primary/40"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 22}%`,
            ['--dur' as string]: `${5 + i * 0.7}s`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}

      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary mb-4">
                ✦ Growth & Experimentation ✦
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 tracking-wide"
            >
              Tonya Golden
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-primary leading-relaxed mb-4 max-w-2xl h-8"
            >
              <span>{displayText}</span>
              <span
                className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle shadow-[0_0_8px_hsl(199_90%_55%/0.6)]"
                style={{ animation: "caret-blink 1s steps(1) infinite" }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl"
            >
              I help companies improve conversion, optimize user journeys, and make smarter product decisions through experimentation. The Force of data guides every decision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="font-medium group shadow-[0_0_15px_hsl(199_90%_55%/0.25)]">
                <a href="#case-studies">
                  <ArrowDown size={16} className="mr-2 transition-transform group-hover:translate-y-1" />
                  View My Work
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium group border-primary/30 hover:border-primary hover:shadow-[0_0_15px_hsl(199_90%_55%/0.15)]">
                <a href="#contact">
                  <Mail size={16} className="mr-2 transition-transform group-hover:scale-110" />
                  Contact Me
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
            style={{ animation: "hero-portrait-float 6s ease-in-out infinite" }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-[0_0_40px_hsl(199_90%_55%/0.15)] border border-primary/20">
              <img
                src={heroImage}
                alt="Tonya Golden, Technical Performance Strategist"
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-primary/5" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2"
        style={{ animation: "hero-scroll-indicator 2s ease-in-out infinite" }}
      >
        <ArrowDown size={20} className="text-primary drop-shadow-[0_0_6px_hsl(199_90%_55%/0.5)]" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10" />
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[120px] -z-10" />
    </section>
  );
};

export default Hero;
