import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Globe } from "lucide-react";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { holobuilds } from "@/data/holobuilds";

const HolobuildDetail = () => {
  const { slug } = useParams();
  const build = holobuilds.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-background relative">
      <div className="starfield" />
      <div className="relative z-10">
        <Navbar />
        <main className="section-container section-padding pt-32">
          <Link
            to="/#holobuilds"
            className="inline-flex items-center gap-2 text-xs font-display tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Holobuilds
          </Link>

          {!build ? (
            <div className="holo-card rounded-xl bg-surface-elevated border border-divider p-10 text-center">
              <h1 className="font-display text-2xl text-foreground mb-2">Transmission lost</h1>
              <p className="text-sm text-muted-foreground">This project could not be located.</p>
            </div>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Globe size={16} className="text-primary drop-shadow-[0_0_6px_hsl(199_90%_55%/0.4)]" />
                <span className="text-xs font-display font-medium tracking-[0.3em] uppercase text-primary">
                  {build.year} · {build.role}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-wide">
                {build.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{build.tagline}</p>

              <a
                href={build.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 border border-primary/30 text-primary text-sm font-display tracking-wider uppercase hover:bg-primary/20 transition-colors mb-10"
              >
                Visit site <ExternalLink size={14} />
              </a>

              <div className="relative h-64 md:h-80 mb-10 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background/40 to-transparent overflow-hidden flex items-center justify-center">
                <span className="font-display text-xs tracking-[0.3em] uppercase text-primary/60">
                  Preview soon
                </span>
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,transparent_calc(100%_-_1px),hsl(199_90%_55%/0.08)_100%)] bg-[length:100%_10px]" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                <div className="holo-card p-5 rounded-lg border border-divider bg-surface-elevated">
                  <p className="text-[10px] font-display tracking-[0.25em] uppercase text-primary mb-2">Stack</p>
                  <div className="flex flex-wrap gap-1.5">
                    {build.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-display tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="holo-card p-5 rounded-lg border border-divider bg-surface-elevated">
                  <p className="text-[10px] font-display tracking-[0.25em] uppercase text-primary mb-2">Summary</p>
                  <p className="text-sm text-muted-foreground">{build.summary}</p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { label: "Problem", text: build.problem },
                  { label: "Approach", text: build.approach },
                  { label: "Outcome", text: build.outcome },
                ].map((s) => (
                  <div key={s.label}>
                    <h2 className="font-display text-sm font-bold tracking-[0.3em] uppercase text-primary mb-2">
                      {s.label}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          )}
        </main>
      </div>
    </div>
  );
};

export default HolobuildDetail;