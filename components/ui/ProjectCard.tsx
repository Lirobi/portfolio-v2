import { ArrowUpRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    color: string;
    icon: LucideIcon;
    url: string;
    slug?: string;
    hasPage?: boolean;
    offset?: boolean;
}

const colorStyles: Record<string, { bg: string; bgLight: string; iconBg: string }> = {
  coral: { 
    bg: "rgba(255, 107, 107, 0.2)", 
    bgLight: "rgba(255, 107, 107, 0.05)", 
    iconBg: "rgba(255, 107, 107, 0.2)" 
  },
  teal: { 
    bg: "rgba(78, 205, 196, 0.2)", 
    bgLight: "rgba(78, 205, 196, 0.05)", 
    iconBg: "rgba(78, 205, 196, 0.2)" 
  },
  purple: { 
    bg: "rgba(168, 85, 247, 0.2)", 
    bgLight: "rgba(168, 85, 247, 0.05)", 
    iconBg: "rgba(168, 85, 247, 0.2)" 
  },
  yellow: { 
    bg: "rgba(255, 217, 61, 0.2)", 
    bgLight: "rgba(255, 217, 61, 0.05)", 
    iconBg: "rgba(255, 217, 61, 0.2)" 
  },
  blue: { 
    bg: "rgba(59, 130, 246, 0.2)", 
    bgLight: "rgba(59, 130, 246, 0.05)", 
    iconBg: "rgba(59, 130, 246, 0.2)" 
  },
};

export default function ProjectCard({
    title,
    description,
    tags,
    color,
    icon: IconComponent,
    url,
    slug,
    hasPage = false,
}: ProjectCardProps) {
  const colors = colorStyles[color] || colorStyles.coral;

  const cardContent = (
    <>
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl"
        style={{ backgroundColor: colors.bg }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ backgroundColor: colors.iconBg }}
          >
            <IconComponent className="w-10 h-10" />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-coral transition-colors">
          {title}
        </h3>
        <p className="text-foreground/60 mb-8 leading-relaxed">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-foreground/5 border border-foreground/10 text-sm font-mono rounded-full group-hover:bg-foreground/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Corner decoration */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform"
        style={{ backgroundColor: colors.iconBg }}
      />
    </>
  );

  const cardStyle = { backgroundColor: colors.bgLight };

  // Si le projet a une page dédiée, utiliser Link, sinon ouvrir l'URL externe
  if (hasPage && slug) {
    return (
      <Link
        href={`/projets/${slug}`}
        className="project-card group relative h-full flex flex-col p-8 md:p-10 rounded-3xl border-2 border-foreground/10 hover:border-foreground cursor-pointer overflow-hidden"
        style={cardStyle}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article
      className="project-card group relative h-full flex flex-col p-8 md:p-10 rounded-3xl border-2 border-foreground/10 hover:border-foreground cursor-pointer overflow-hidden"
      style={cardStyle}
      onClick={() => window.open(url, "_blank")}
    >
      {cardContent}
    </article>
  );
}
