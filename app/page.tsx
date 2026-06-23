import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FrameworkSection from "./components/FrameworkSection";
import WorkshopSection from "./components/WorkshopSection";
import AboutSection from "./components/AboutSection";
import EmailCapture from "./components/EmailCapture";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <FrameworkSection />
        <WorkshopSection />
        <AboutSection />
        <EmailCapture />
      </main>
      <Footer />
    </>
  );
}
