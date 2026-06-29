import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComingSoonPage from "../../components/ComingSoonPage";
import { TRAINING_PAGES } from "@/lib/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(TRAINING_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = TRAINING_PAGES[slug];
  if (!page) return {};

  return {
    title: `${page.title} | D1 Frontline Leadership`,
    description: page.description,
  };
}

export default async function TrainingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = TRAINING_PAGES[slug];
  if (!page) notFound();

  return (
    <ComingSoonPage title={page.title} description={page.description} badge="Training" />
  );
}
