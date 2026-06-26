import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProjectPageContent from "@/components/sections/ProjectPageContent";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({
    where: { hasPage: true },
    select: { slug: true },
  });
  return projects.map((p: (typeof projects)[number]) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({ where: { slug } });
  if (!project) return { title: "Projet non trouvé" };

  return {
    title: project.title,
    description: project.longDescription || project.description,
    keywords: [...project.tags, "projet", "portfolio", "développement web"],
    openGraph: {
      title: `${project.title} | Lilian Bischung`,
      description: project.longDescription || project.description,
      url: `https://lilianbischung.fr/projets/${project.slug}`,
      type: "article" as const,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await prisma.project.findUnique({
    where: { slug },
    include: {
      images: {
        select: { id: true, alt: true, filename: true, order: true },
        orderBy: { order: "asc" },
      },
    },
  });

  if (!project || !project.hasPage) notFound();

  return <ProjectPageContent project={project} />;
}
