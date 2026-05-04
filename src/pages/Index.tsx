import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Below-the-fold sections are code-split so the initial mobile load is small.
const About = lazy(() => import("@/components/About"));
const PersonalLife = lazy(() => import("@/components/PersonalLife"));
const Skills = lazy(() => import("@/components/Skills"));
const Experience = lazy(() => import("@/components/Experience"));
const CaseStudies = lazy(() => import("@/components/CaseStudies"));
const Certifications = lazy(() => import("@/components/Certifications"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="h-32" />;

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Starfield background */}
      <div className="starfield" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <div className="lightsaber-divider" />
          <About />
          <div className="lightsaber-divider" />
          <PersonalLife />
          <div className="lightsaber-divider" />
          <Skills />
          <div className="lightsaber-divider" />
          <Experience />
          <div className="lightsaber-divider" />
          <CaseStudies />
          <div className="lightsaber-divider" />
          <Certifications />
          <div className="lightsaber-divider" />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
