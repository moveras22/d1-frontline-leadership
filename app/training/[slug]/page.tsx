import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Footer from "../../components/Footer";
import TrainingProgramDetail from "../../components/training/TrainingProgramDetail";
import {
  getTrainingProgram,
  getTrainingProgramSlugs,
  TRAINING_OVERVIEW_SLUG,
} from "@/lib/training";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    { slug: TRAINING_OVERVIEW_SLUG },
    ...getTrainingProgramSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug === TRAINING_OVERVIEW_SLUG) {
    return {
      title: "Frontline Leadership Training | D1 Frontline Leadership",
      description:
        "Practical frontline leadership training for supervisors, team leads, and future leaders in manufacturing and operations.",
    };
  }

  const program = getTrainingProgram(slug);
  if (!program) return {};

  return {
    title: `${program.title} | D1 Frontline Leadership`,
    description: program.shortDescription,
  };
}

export default async function TrainingProgramPage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === TRAINING_OVERVIEW_SLUG) {
    redirect("/training");
  }

  const program = getTrainingProgram(slug);
  if (!program) notFound();

  return (
    <>
      <TrainingProgramDetail program={program} />
      <Footer />
    </>
  );
}
