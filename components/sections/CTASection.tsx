import {
  Lightbulb,
  Rocket,
  Sparkles,
  MessageCircle,
  ArrowUp,
  Handshake,
  Crosshair,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui";
import config from "@/data/config.json";

export default function CTASection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 2xl:px-12 bg-gradient-to-br from-foreground via-foreground to-purple/80 text-background relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-coral/20 rounded-full blur-2xl float" />
      <div
        className="absolute bottom-10 right-10 w-48 h-48 bg-teal/20 rounded-full blur-2xl float"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow/20 rounded-full blur-2xl float"
        style={{ animationDelay: "-5s" }}
      />

      {/* Decorative elements */}
      <Star className="absolute top-20 right-20 w-16 h-16 opacity-20 spin-slow fill-current" />
      <Star
        className="absolute bottom-20 left-20 w-12 h-12 opacity-20 spin-slow fill-current"
        style={{ animationDirection: "reverse" }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Floating icons */}
        <div className="flex justify-center gap-8 mb-8">
          <Lightbulb
            className="w-12 h-12 text-yellow float"
            style={{ animationDelay: "0s" }}
          />
          <Rocket
            className="w-16 h-16 text-coral float sticker"
            style={{ animationDelay: "-1s" }}
          />
          <Sparkles
            className="w-12 h-12 text-teal float"
            style={{ animationDelay: "-2s" }}
          />
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95]">
          Prêt à créer
          <br />
          quelque chose de
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-coral">génial</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 20"
              fill="none"
            >
              <path
                d="M0 15 Q50 5 100 15 T200 15"
                stroke="#ff6b6b"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>{" "}
          ?
        </h2>

        <p className="text-xl md:text-2xl text-background/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Que vous ayez un projet précis ou juste une idée floue,
          <strong className="text-background">
            {" "}
            je suis là pour en discuter
          </strong>{" "}
          et trouver la meilleure solution ensemble.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href={`mailto:${config.personal.email}`}
            variant="magnetic"
            className="px-10 py-5 text-lg"
          >
            Démarrer une conversation
            <MessageCircle className="w-6 h-6" />
          </Button>
          <Button href="#projets" variant="outline" className="px-10 py-5 text-lg">
            Voir mes projets
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-background/50 text-sm">
          <span className="flex items-center gap-2">
            <Handshake className="w-5 h-5 text-teal" /> Devis gratuit
          </span>
          <span className="flex items-center gap-2">
            <Crosshair className="w-5 h-5 text-coral" /> 100% sur mesure
          </span>
        </div>
      </div>
    </section>
  );
}
