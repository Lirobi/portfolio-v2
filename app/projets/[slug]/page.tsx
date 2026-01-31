import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import ProjectPageContent from "@/components/sections/ProjectPageContent";
import { promises as fs } from "fs";
import path from "path";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getMarkdownContent(filename: string): Promise<string | null> {
  try {
    const filePath = path.join(process.cwd(), "content", "projects", filename);
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  return projectsData
    .filter((project) => project.hasPage)
    .map((project) => ({
      slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | Lilian Bischung`,
    description: project.longDescription || project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project || !project.hasPage) {
    notFound();
  }

  let markdownContent: string | null = null;
  if (project.markdownFile) {
    markdownContent = await getMarkdownContent(project.markdownFile);
  }

  return (
    <ProjectPageContent project={project} markdownContent={markdownContent} />
  );
}
