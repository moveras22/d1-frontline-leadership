import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FrameworkSection from "./components/FrameworkSection";
import D1USPSection from "./components/D1USPSection";
import FreeFrameworkSection from "./components/FreeFrameworkSection";
import WorkshopSection from "./components/WorkshopSection";
import AboutSection from "./components/AboutSection";
import EmailCapture from "./components/EmailCapture";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProblemSection />
        <FrameworkSection />
        <D1USPSection />
        <FreeFrameworkSection />
        <WorkshopSection />
        <AboutSection />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
