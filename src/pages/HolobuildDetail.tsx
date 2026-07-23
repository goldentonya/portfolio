import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { holobuilds } from "@/data/holobuilds";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const HolobuildDetail = () => {
  const { slug } = useParams();
  const build = holobuilds.find((b) => b.slug === slug);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

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
              className="max-w-5xl"
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
              <p className="text-lg text-muted-foreground mb-10">{build.tagline}</p>

              {build.images.length > 0 ? (
                <div className="mb-10">
                  <Carousel setApi={setApi} className="group">
                    <CarouselContent>
                      {build.images.map((image) => (
                        <CarouselItem key={image.src}>
                          <button
                            type="button"
                            onClick={() => setLightboxOpen(true)}
                            className="relative w-full rounded-xl border border-primary/20 bg-surface-elevated overflow-hidden cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <img
                              src={image.src}
                              alt={`${build.title}: ${image.label}`}
                              className="w-full h-auto max-h-[70vh] object-contain object-top"
                            />
                          </button>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Carousel>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs font-display tracking-[0.2em] uppercase text-primary">
                      {build.images[current]?.label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {current + 1} / {build.images.length}
                    </span>
                  </div>

                  <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                    <DialogContent className="max-w-6xl w-[95vw] p-2 bg-background border-primary/30">
                      <div className="flex flex-col gap-3">
                        <span className="self-start ml-2 mt-2 px-2.5 py-1 rounded-md bg-primary/15 border border-primary/40 text-[10px] font-display font-bold tracking-[0.2em] uppercase text-primary">
                          {build.images[current]?.label}
                        </span>
                        <img
                          src={build.images[current]?.src}
                          alt={`${build.title}: ${build.images[current]?.label}`}
                          className="w-full max-h-[85vh] object-contain rounded-md"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ) : (
                <div className="relative h-64 md:h-80 mb-10 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background/40 to-transparent overflow-hidden flex items-center justify-center">
                  <span className="font-display text-xs tracking-[0.3em] uppercase text-primary/60">
                    Preview soon
                  </span>
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_0%,transparent_calc(100%_-_1px),hsl(199_90%_55%/0.08)_100%)] bg-[length:100%_10px]" />
                </div>
              )}

              <div className="holo-card p-5 rounded-lg border border-divider bg-surface-elevated mb-10 space-y-4">
                <div>
                  <p className="text-[10px] font-display tracking-[0.25em] uppercase text-primary mb-2">Stack</p>
                  <div className="flex flex-wrap items-center gap-2">
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
                <div className="pt-4 border-t border-divider">
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