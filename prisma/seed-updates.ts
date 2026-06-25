import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import * as fs from "fs";

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Rename + reorder projects
  await prisma.project.update({ where: { slug: "strasplanning" }, data: { title: "StrasPlanning (T5)", order: 6 } });
  console.log("✓ StrasPlanning (T5)");

  await prisma.project.update({ where: { slug: "getdrunk" }, data: { title: "GetDrunk (T4)", year: "2025", order: 3 } });
  console.log("✓ GetDrunk (T4) — year=2025");

  await prisma.project.update({ where: { slug: "watermarker" }, data: { order: 1 } });
  await prisma.project.update({ where: { slug: "mobile-preview" }, data: { order: 2 } });
  await prisma.project.update({ where: { slug: "etik-be" }, data: { order: 4 } });
  console.log("✓ Orders updated");

  // Upload images for watermarker, etik-be, mobile-preview
  const imageMap = [
    { slug: "watermarker", file: "/Users/lilianbischung/.claude/image-cache/6cf88176-2de1-495f-aad5-8ecb6c35c88d/2.png", alt: "Watermarker — page d'accueil" },
    { slug: "etik-be",     file: "/Users/lilianbischung/.claude/image-cache/6cf88176-2de1-495f-aad5-8ecb6c35c88d/3.png", alt: "ETiK BE — page d'accueil" },
    { slug: "mobile-preview", file: "/Users/lilianbischung/.claude/image-cache/6cf88176-2de1-495f-aad5-8ecb6c35c88d/4.png", alt: "Mobile Preview — page d'accueil" },
  ];

  for (const { slug, file, alt } of imageMap) {
    const project = await prisma.project.findUnique({ where: { slug } });
    if (!project) { console.warn(`  ⚠ Project not found: ${slug}`); continue; }
    await prisma.projectImage.deleteMany({ where: { projectId: project.id } });
    const data = fs.readFileSync(file);
    await prisma.projectImage.create({
      data: { projectId: project.id, data, mimeType: "image/png", filename: `${slug}-hero.png`, alt, order: 0 },
    });
    console.log(`  ✓ Image for ${slug}`);
  }

  console.log("Done.");
}

main().catch(console.error).finally(() => prisma.$disconnect());
