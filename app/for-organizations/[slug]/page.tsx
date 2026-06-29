import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import OrganizationProgramDetail from "../../components/organizations/OrganizationProgramDetail";
import {
  getOrganizationProgram,
  getOrganizationProgramSlugs,
} from "@/lib/organizations";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getOrganizationProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getOrganizationProgram(slug);
  if (!program) return {};

  return {
    title: `${program.title} | D1 Frontline Leadership`,
    description: program.shortDescription,
  };
}

export default async function OrganizationProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getOrganizationProgram(slug);
  if (!program) notFound();

  return (
    <>
      <OrganizationProgramDetail program={program} />
      <Footer />
    </>
  );
}
