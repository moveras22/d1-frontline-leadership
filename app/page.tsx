import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import FrameworkSection from "./components/FrameworkSection";
import D1USPSection from "./components/D1USPSection";
import FreeFrameworkSection from "./components/FreeFrameworkSection";
import OneOnOneTemplateSection from "./components/OneOnOneTemplateSection";
import WorkshopSection from "./components/WorkshopSection";
import AboutSection from "./components/AboutSection";
import EmailCapture from "./components/EmailCapture";
import Footer from "./components/Footer";
import GoldBackgroundAccent from "./components/GoldBackgroundAccent";

export default function Home() {
  return (
    <>
      <main className="relative isolate">
        <GoldBackgroundAccent />
        <Hero />
        <ProblemSection />
        <FrameworkSection />
        <D1USPSection />
        <FreeFrameworkSection />
        <OneOnOneTemplateSection />
        <WorkshopSection />
        <AboutSection />
        <EmailCapture
          eyebrow="Free Download"
          title="Download the Free Framework"
          description="Enter your details below and we'll send the D1 Leadership Framework PDF straight to your inbox."
          submitLabel="Get the Free Framework"
          submittingLabel="Sending..."
          submittedMessage="Check your inbox. Your D1 Leadership Framework PDF is on its way."
          submitTrackId="free_framework_submit"
          redirectTo="/thank-you"
        />
      </main>
      <Footer />
    </>
  );
}
