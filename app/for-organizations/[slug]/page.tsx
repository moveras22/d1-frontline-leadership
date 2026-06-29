import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComingSoonPage from "../../components/ComingSoonPage";
import { ORGANIZATION_PAGES } from "@/lib/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(ORGANIZATION_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = ORGANIZATION_PAGES[slug];
  if (!page) return {};

  return {
    title: `${page.title} | D1 Frontline Leadership`,
    description: page.description,
  };
}

export default async function OrganizationPage({ params }: PageProps) {
  const { slug } = await params;
  const page = ORGANIZATION_PAGES[slug];
  if (!page) notFound();

  return (
    <ComingSoonPage
      title={page.title}
      description={page.description}
      badge="For Organizations"
    />
  );
}
