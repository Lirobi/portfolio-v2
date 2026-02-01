import { Heart, Coffee, ChevronUp } from "lucide-react";
import Link from "next/link";
import config from "@/data/config.json";

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 2xl:px-12 bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="text-4xl font-bold mb-4">
              {config.personal.name}
              <span className="text-coral">.</span>
            </div>
            <p className="text-background/60 max-w-xs">
              {config.content.footerTagline}
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-bold mb-4 text-background/40 uppercase text-sm tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-background/70 hover:text-coral transition-colors"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <Link
                    href="/parcours"
                    className="text-background/70 hover:text-coral transition-colors"
                  >
                    Mon Parcours
                  </Link>
                </li>
                <li>
                  <a
                    href="/#projets"
                    className="text-background/70 hover:text-coral transition-colors"
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-background/70 hover:text-coral transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-background/40 uppercase text-sm tracking-wider">
                Social
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href={config.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-blue transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={config.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-purple transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-background/10 mb-8" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 font-mono text-sm">
            © {new Date().getFullYear()} {config.personal.fullName}
          </p>
          <p className="text-background/40 text-sm flex items-center gap-2">
            
          </p>
          <a
            href="#"
            className="text-background/60 hover:text-coral transition-colors flex items-center gap-2"
          >
            Retour en haut <ChevronUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
