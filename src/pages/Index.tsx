import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import CaseStudies from "../components/CaseStudies";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Starfield background */}
      <div className="starfield" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="lightsaber-divider" />
        <About />
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
      </div>
    </div>
  );
};

export default Index;
