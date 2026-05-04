import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Skeleton } from "@/components/ui/skeleton";

// Below-the-fold sections are code-split so the initial mobile load is small.
const About = lazy(() => import("@/components/About"));
const PersonalLife = lazy(() => import("@/components/PersonalLife"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const CaseStudies = lazy(() => import("@/components/CaseStudies"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => (
  <div className="section-container section-padding space-y-4" aria-hidden="true">
    <Skeleton className="h-4 w-36 bg-secondary/60" />
    <Skeleton className="h-10 w-72 max-w-full bg-secondary/70" />
    <Skeleton className="h-24 w-full bg-secondary/40" />
  </div>
);

const LazySection = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<SectionFallback />}>{children}</Suspense>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Starfield background */}
      <div className="starfield" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="lightsaber-divider" />
        <LazySection>
          <About />
        </LazySection>
        <div className="lightsaber-divider" />
        <LazySection>
          <PersonalLife />
        </LazySection>
        <div className="lightsaber-divider" />
        <LazySection>
          <Skills />
        </LazySection>
        <div className="lightsaber-divider" />
        <LazySection>
          <Experience />
        </LazySection>
        <div className="lightsaber-divider" />
        <LazySection>
          <CaseStudies />
        </LazySection>
        <div className="lightsaber-divider" />
        <LazySection>
          <Certifications />
        </LazySection>
        <div className="lightsaber-divider" />
        <LazySection>
          <Contact />
        </LazySection>
        <LazySection>
          <Footer />
        </LazySection>
      </div>
    </div>
  );
};

export default Index;
