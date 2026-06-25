"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Pencil, Trash2, LogOut, ExternalLink, Image as ImageIcon } from "lucide-react";

interface ProjectImage {
  id: number;
  alt: string;
  filename: string;
  order: number;
}

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
  url: string | null;
  githubUrl: string | null;
  year: string | null;
  client: string | null;
  images: ProjectImage[];
  order: number;
}

const COLOR_MAP: Record<string, string> = {
  coral: "bg-coral/20 text-coral",
  teal: "bg-teal/20 text-teal",
  purple: "bg-purple/20 text-purple",
  blue: "bg-blue/20 text-blue",
  yellow: "bg-yellow/20 text-yellow",
};

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/admin/projects")
      .then((r) => r.json())
      .then(setProjects)
      .finally(() => setLoading(false));
  }, []);

  async function handleDelete(id: number, title: string) {
    if (!confirm(`Supprimer "${title}" ?`)) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b-2 border-foreground/10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Admin Portfolio</h1>
            <p className="text-xs text-foreground/40">Gestion des projets</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" target="_blank" className="text-sm text-foreground/50 hover:text-foreground transition-colors flex items-center gap-1">
              <ExternalLink className="w-4 h-4" /> Voir le site
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-foreground/20 rounded-xl hover:border-coral hover:text-coral transition-colors"
            >
              <LogOut className="w-4 h-4" /> Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Actions bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">
            Projets <span className="text-foreground/40 font-normal text-base">({projects.length})</span>
          </h2>
          <Link
            href="/admin/projects/new"
            className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-semibold rounded-xl hover:bg-coral hover:text-foreground transition-colors text-sm"
          >
            <Plus className="w-4 h-4" /> Nouveau projet
          </Link>
        </div>

        {loading ? (
          <div className="grid gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-28 rounded-2xl bg-foreground/5 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center gap-4 p-5 border-2 border-foreground/10 rounded-2xl hover:border-foreground/20 transition-all bg-foreground/[0.02]"
              >
                {/* Color indicator */}
                <div className={`w-2 h-16 rounded-full ${COLOR_MAP[project.color] ?? "bg-foreground/20"} shrink-0`} />

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold truncate">{project.title}</h3>
                    {project.year && (
                      <span className="text-xs text-foreground/40 font-mono shrink-0">{project.year}</span>
                    )}
                  </div>
                  <p className="text-sm text-foreground/60 truncate mb-2">{project.description}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-xs bg-foreground/5 text-foreground/60 rounded font-mono">
                        {tag}
                      </span>
                    ))}
                    {project.images.length > 0 && (
                      <span className="flex items-center gap-1 px-2 py-0.5 text-xs bg-teal/10 text-teal rounded font-mono">
                        <ImageIcon className="w-3 h-3" /> {project.images.length} image{project.images.length > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-foreground/40 hover:text-foreground transition-colors"
                      title="Voir le projet"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    href={`/admin/projects/${project.id}`}
                    className="flex items-center gap-1.5 px-3 py-2 border-2 border-foreground/15 rounded-xl text-sm font-medium hover:border-foreground/40 transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" /> Éditer
                  </Link>
                  <button
                    onClick={() => handleDelete(project.id, project.title)}
                    className="p-2 text-foreground/30 hover:text-red-500 transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
