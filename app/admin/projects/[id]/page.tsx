import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import ProjectEditor from "./ProjectEditor";
import { prisma } from "@/lib/prisma";

type Props = { params: Promise<{ id: string }> };

export default async function AdminProjectPage({ params }: Props) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const { id } = await params;
  let project = null;

  if (id !== "new") {
    project = await prisma.project.findUnique({
      where: { id: Number(id) },
      include: {
        images: {
          select: { id: true, alt: true, filename: true, order: true, mimeType: true },
          orderBy: { order: "asc" },
        },
      },
    });
    if (!project) redirect("/admin");
  }

  return <ProjectEditor project={project} />;
}
