import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const projectId = formData.get("projectId");
  const alt = (formData.get("alt") as string) || "";
  const order = Number(formData.get("order") ?? 0);

  if (!file || !projectId) {
    return NextResponse.json({ error: "Missing file or projectId" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const image = await prisma.projectImage.create({
    data: {
      projectId: Number(projectId),
      data: buffer,
      mimeType: file.type || "image/png",
      filename: file.name,
      alt,
      order,
    },
  });

  return NextResponse.json({ id: image.id, filename: image.filename, alt: image.alt });
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();
  await prisma.projectImage.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
}
