import type { Metadata } from "next";
import ComingSoonPage from "../components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Contact | D1 Frontline Leadership",
  description:
    "Get in touch with D1 Frontline Leadership about training, organizational programs, and frontline supervisor development.",
};

export default function ContactPage() {
  return (
    <ComingSoonPage
      badge="Contact"
      title="Contact D1 Frontline Leadership"
      description="Reach out to discuss frontline leadership training, organizational programs, hiring assessments, and custom supervisor development for your operation."
    />
  );
}
