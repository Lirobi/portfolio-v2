"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Save, Trash2, Upload, X, Plus, GripVertical } from "lucide-react";

interface ProjectImage {
  id: number;
  alt: string;
  filename: string;
  order: number;
  mimeType: string;
}

interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string | null;
  tags: string[];
  color: string;
  icon: string;
  url: string | null;
  githubUrl: string | null;
  hasPage: boolean;
  portraitGallery: boolean;
  markdownContent: string | null;
  year: string | null;
  client: string | null;
  role: string | null;
  order: number;
  images: ProjectImage[];
}

const COLORS = ["coral", "teal", "purple", "blue", "yellow"];
const ICONS = ["Globe", "Smartphone", "Image", "Calendar", "Code2", "BarChart3", "Camera", "ShoppingCart", "Flower2"];

type Props = { project: Project | null };

export default function ProjectEditor({ project }: Props) {
  const isNew = !project;
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<Omit<Project, "id" | "images" | "createdAt" | "updatedAt">>({
    slug: project?.slug ?? "",
    title: project?.title ?? "",
    description: project?.description ?? "",
    longDescription: project?.longDescription ?? "",
    tags: project?.tags ?? [],
    color: project?.color ?? "coral",
    icon: project?.icon ?? "Code2",
    url: project?.url ?? "",
    githubUrl: project?.githubUrl ?? "",
    hasPage: project?.hasPage ?? true,
    portraitGallery: project?.portraitGallery ?? false,
    markdownContent: project?.markdownContent ?? "",
    year: project?.year ?? new Date().getFullYear().toString(),
    client: project?.client ?? "",
    role: project?.role ?? "",
    order: project?.order ?? 0,
  });

  const [images, setImages] = useState<ProjectImage[]>(project?.images ?? []);
  const [tagInput, setTagInput] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function addTag() {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) {
      set("tags", [...form.tags, t]);
    }
    setTagInput("");
  }

  function removeTag(tag: string) {
    set("tags", form.tags.filter((t) => t !== tag));
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    try {
      if (isNew) {
        const res = await fetch("/api/admin/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Erreur lors de la création");
        const created = await res.json();
        router.push(`/admin/projects/${created.id}`);
      } else {
        const res = await fetch(`/api/admin/projects/${project.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, id: project.id }),
        });
        if (!res.ok) throw new Error("Erreur lors de la sauvegarde");
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally {
      setSaving(false);
    }
  }

  async function handleImageUpload(files: FileList | null) {
    if (!files || !project) return;
    setUploading(true);
    for (const file of Array.from(files)) {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("projectId", project.id.toString());
      fd.append("alt", file.name.replace(/\.[^.]+$/, ""));
      fd.append("order", images.length.toString());
      const res = await fetch("/api/admin/images", { method: "POST", body: fd });
      if (res.ok) {
        const img = await res.json();
        setImages((prev) => [...prev, { ...img, mimeType: file.type, order: images.length }]);
      }
    }
    setUploading(false);
  }

  async function handleDeleteImage(id: number) {
    await fetch("/api/admin/images", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setImages((prev) => prev.filter((i) => i.id !== id));
  }

  async function updateImageAlt(id: number, alt: string) {
    setImages((prev) => prev.map((i) => (i.id === id ? { ...i, alt } : i)));
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b-2 border-foreground/10 bg-background/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="p-2 hover:bg-foreground/5 rounded-xl transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-bold">{isNew ? "Nouveau projet" : form.title || "Éditer le projet"}</h1>
              <p className="text-xs text-foreground/40">Admin / Projets</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {error && <span className="text-sm text-red-500">{error}</span>}
            {saved && <span className="text-sm text-teal">✓ Sauvegardé</span>}
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-foreground text-background font-semibold rounded-xl hover:bg-coral hover:text-foreground transition-colors text-sm disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? "Sauvegarde..." : "Sauvegarder"}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 grid lg:grid-cols-[1fr_380px] gap-8">
        {/* Left: Main content */}
        <div className="space-y-6">
          {/* Basic info */}
          <section className="p-6 border-2 border-foreground/10 rounded-2xl space-y-4">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-foreground/40">Informations</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Titre" required>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => set("title", e.target.value)}
                  placeholder="Nom du projet"
                  className="input-field"
                />
              </Field>
              <Field label="Slug (URL)">
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => set("slug", e.target.value.toLowerCase().replace(/\s+/g, "-"))}
                  placeholder="mon-projet"
                  className="input-field font-mono"
                />
              </Field>
            </div>

            <Field label="Description courte" required>
              <input
                type="text"
                value={form.description}
                onChange={(e) => set("description", e.target.value)}
                placeholder="Une phrase qui résume le projet"
                className="input-field"
              />
            </Field>

            <Field label="Description longue">
              <textarea
                value={form.longDescription ?? ""}
                onChange={(e) => set("longDescription", e.target.value)}
                rows={3}
                placeholder="Description détaillée..."
                className="input-field resize-none"
              />
            </Field>

            <div className="grid sm:grid-cols-3 gap-4">
              <Field label="Année">
                <input
                  type="text"
                  value={form.year ?? ""}
                  onChange={(e) => set("year", e.target.value)}
                  placeholder="2025"
                  className="input-field"
                />
              </Field>
              <Field label="Client">
                <input
                  type="text"
                  value={form.client ?? ""}
                  onChange={(e) => set("client", e.target.value)}
                  placeholder="Projet personnel"
                  className="input-field"
                />
              </Field>
              <Field label="Rôle">
                <input
                  type="text"
                  value={form.role ?? ""}
                  onChange={(e) => set("role", e.target.value)}
                  placeholder="Développeur"
                  className="input-field"
                />
              </Field>
            </div>
          </section>

          {/* Links */}
          <section className="p-6 border-2 border-foreground/10 rounded-2xl space-y-4">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-foreground/40">Liens</h2>
            <Field label="URL de production">
              <input
                type="url"
                value={form.url ?? ""}
                onChange={(e) => set("url", e.target.value)}
                placeholder="https://..."
                className="input-field"
              />
            </Field>
            <Field label="URL GitHub">
              <input
                type="url"
                value={form.githubUrl ?? ""}
                onChange={(e) => set("githubUrl", e.target.value)}
                placeholder="https://github.com/..."
                className="input-field"
              />
            </Field>
          </section>

          {/* Tags */}
          <section className="p-6 border-2 border-foreground/10 rounded-2xl space-y-4">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-foreground/40">Technologies</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {form.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 px-3 py-1 bg-foreground/5 rounded-full text-sm font-mono">
                  {tag}
                  <button onClick={() => removeTag(tag)} className="text-foreground/30 hover:text-red-500 transition-colors">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                placeholder="React, TypeScript..."
                className="input-field flex-1"
              />
              <button onClick={addTag} className="px-4 py-2 border-2 border-foreground/20 rounded-xl hover:border-foreground/40 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* Markdown content */}
          <section className="p-6 border-2 border-foreground/10 rounded-2xl space-y-4">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-foreground/40">Contenu (Markdown)</h2>
            <textarea
              value={form.markdownContent ?? ""}
              onChange={(e) => set("markdownContent", e.target.value)}
              rows={20}
              placeholder="## Description\n\nContenu en Markdown..."
              className="input-field resize-y font-mono text-sm leading-relaxed"
            />
          </section>
        </div>

        {/* Right: Images + appearance */}
        <div className="space-y-6">
          {/* Appearance */}
          <section className="p-6 border-2 border-foreground/10 rounded-2xl space-y-4">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-foreground/40">Apparence</h2>

            <Field label="Couleur">
              <div className="flex gap-2 flex-wrap">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => set("color", c)}
                    className={`w-8 h-8 rounded-full transition-all ${
                      form.color === c ? "ring-2 ring-offset-2 ring-foreground scale-110" : "opacity-60 hover:opacity-100"
                    } bg-${c}`}
                    title={c}
                  />
                ))}
              </div>
            </Field>

            <Field label="Icône">
              <select value={form.icon} onChange={(e) => set("icon", e.target.value)} className="input-field">
                {ICONS.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
            </Field>

            <Field label="Ordre d'affichage">
              <input
                type="number"
                value={form.order}
                onChange={(e) => set("order", Number(e.target.value))}
                className="input-field"
              />
            </Field>

            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => set("hasPage", !form.hasPage)}
                className={`w-10 h-6 rounded-full transition-colors ${form.hasPage ? "bg-teal" : "bg-foreground/20"} relative`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${form.hasPage ? "translate-x-5" : "translate-x-1"}`} />
              </div>
              <span className="text-sm">Page dédiée</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => set("portraitGallery", !form.portraitGallery)}
                className={`w-10 h-6 rounded-full transition-colors ${form.portraitGallery ? "bg-teal" : "bg-foreground/20"} relative`}
              >
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${form.portraitGallery ? "translate-x-5" : "translate-x-1"}`} />
              </div>
              <span className="text-sm">Galerie portrait (mobile)</span>
            </label>
          </section>

          {/* Images */}
          <section className="p-6 border-2 border-foreground/10 rounded-2xl space-y-4">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-foreground/40">
              Images {images.length > 0 && <span className="text-foreground/30">({images.length})</span>}
            </h2>

            {!project ? (
              <p className="text-sm text-foreground/40">Sauvegardez d&apos;abord le projet pour ajouter des images.</p>
            ) : (
              <>
                {/* Upload zone */}
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-foreground/20 rounded-xl p-6 text-center cursor-pointer hover:border-foreground/40 hover:bg-foreground/[0.02] transition-all"
                >
                  <Upload className="w-6 h-6 mx-auto mb-2 text-foreground/30" />
                  <p className="text-sm text-foreground/50">
                    {uploading ? "Upload en cours..." : "Cliquez ou glissez des images"}
                  </p>
                  <p className="text-xs text-foreground/30 mt-1">PNG, JPG, WebP, GIF</p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => handleImageUpload(e.target.files)}
                />

                {/* Image list */}
                {images.length > 0 && (
                  <div className="space-y-3">
                    {images.map((img) => (
                      <div key={img.id} className="flex gap-3 p-3 bg-foreground/[0.02] border border-foreground/10 rounded-xl">
                        <div className="shrink-0 w-16 h-16 relative rounded-lg overflow-hidden bg-foreground/5">
                          <Image
                            src={`/api/images/${img.id}`}
                            alt={img.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-foreground/40 font-mono truncate mb-1">{img.filename}</p>
                          <input
                            type="text"
                            value={img.alt}
                            onChange={(e) => updateImageAlt(img.id, e.target.value)}
                            placeholder="Texte alternatif"
                            className="w-full text-sm px-2 py-1 border border-foreground/10 rounded-lg bg-background focus:border-foreground/30 outline-none"
                          />
                        </div>
                        <button
                          onClick={() => handleDeleteImage(img.id)}
                          className="shrink-0 p-1.5 text-foreground/30 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </section>
        </div>
      </main>

      <style jsx global>{`
        .input-field {
          width: 100%;
          padding: 0.5rem 0.75rem;
          border: 2px solid rgb(var(--foreground) / 0.1);
          border-radius: 0.75rem;
          background: transparent;
          outline: none;
          transition: border-color 0.2s;
          font-size: 0.875rem;
        }
        .input-field:focus {
          border-color: rgb(var(--foreground) / 0.3);
        }
      `}</style>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5 text-foreground/70">
        {label} {required && <span className="text-coral">*</span>}
      </label>
      {children}
    </div>
  );
}
