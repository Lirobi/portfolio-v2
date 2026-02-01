"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Route } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/parcours", label: "Parcours", icon: Route },
  ];

  return (
    <nav className="fixed top-6 right-6 md:top-8 md:right-12 z-50 flex gap-2">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              sticker group flex items-center gap-2 px-4 py-2 font-mono text-sm
              transition-all duration-300
              ${
                isActive
                  ? "hand-drawn bg-foreground text-background"
                  : "hand-drawn bg-background text-foreground hover:bg-yellow"
              }
            `}
          >
            <Icon className={`w-4 h-4 ${!isActive && "group-hover:wiggle"}`} />
            <span className="hidden sm:inline">{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
