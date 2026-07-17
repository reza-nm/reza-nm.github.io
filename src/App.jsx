import Header from "./components/Header";
import Hero from "./components/Hero";
import IndustriesMarquee from "./components/IndustriesMarquee";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import StandardsSection from "./components/StandardsSection";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Contact from "./components/Contact";
import WorkingTogether from "./components/WorkingTogether";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      id="top"
      className="min-h-screen w-full overflow-x-hidden bg-paper font-body text-inkdark"
    >
      <Header />
      <main>
        <Hero />
        <IndustriesMarquee />
        <ProblemSection />
        <SolutionSection />
        <StandardsSection />
        <CaseStudies />
        <Process />
        <Contact />
        <WorkingTogether />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
