import { ArrowRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface ContactCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: "coral" | "blue" | "purple" | "teal";
  external?: boolean;
}

export default function ContactCard({
  href,
  icon: Icon,
  title,
  subtitle,
  color,
  external = false,
}: ContactCardProps) {
  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`flex items-center gap-5 p-5 bg-${color}/5 border-2 border-${color}/20 rounded-2xl hover:border-${color} hover:bg-${color}/10 transition-all group magnetic`}
    >
      <div
        className={`w-14 h-14 bg-${color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        <Icon className={`w-7 h-7 text-${color}`} />
      </div>
      <div className="flex-1">
        <p
          className={`font-bold text-lg group-hover:text-${color} transition-colors`}
        >
          {title}
        </p>
        <p className="text-foreground/60">{subtitle}</p>
      </div>
      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </a>
  );
}
