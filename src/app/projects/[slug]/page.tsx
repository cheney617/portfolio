import { notFound } from "next/navigation";
import { PROJECTS } from "./projects-data";
import DetailContent from "./detail-content";

export async function generateStaticParams() {
  return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!PROJECTS[slug]) notFound();

  return <DetailContent slug={slug} />;
}
