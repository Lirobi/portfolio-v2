"use client";

import { 
  ShoppingCart, 
  Flower2, 
  BarChart3, 
  Camera,
  ArrowDown,
  Mail,
  ArrowUpRight,
  Sparkles,
  Coffee,
  Palette,
  ArrowRight,
  Rocket,
  MessageCircle,
  ArrowUp,
  Handshake,
  Crosshair,
  Linkedin,
  Github,
  MapPin,
  PenLine,
  Send,
  Heart,
  Star,
  Code2,
  User,
  Lightbulb,
  ChevronUp,
  type LucideIcon
} from "lucide-react";
import projectsData from "@/data/projects.json";

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  Flower2,
  BarChart3,
  Camera,
};

export default function Home() {
  const projects = projectsData.map(project => ({
    ...project,
    icon: iconMap[project.icon] || Code2,
  }));

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
        {/* Floating shapes */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-coral opacity-60 blob float" />
        <div className="absolute bottom-32 left-10 w-24 h-24 bg-teal opacity-50 blob float" style={{ animationDelay: "-2s" }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-yellow opacity-70 blob float" style={{ animationDelay: "-4s" }} />
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-purple opacity-40 blob float" style={{ animationDelay: "-3s" }} />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-block mb-6">
            <span className="sticker inline-flex items-center gap-2 px-4 py-2 bg-yellow text-foreground font-mono text-sm rounded-full cursor-default">
              <Sparkles className="w-4 h-4" /> Disponible pour des missions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
            Je crée des
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">expériences</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-coral opacity-50 -z-0" />
            </span>
            <br />
            web{" "}
            <span className="wavy-underline decoration-teal">uniques</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 max-w-xl mb-12 leading-relaxed">
            Développeur web passionné par le{" "}
            <span className="font-semibold text-foreground">design</span>,
            l&apos;<span className="font-semibold text-foreground">UX</span> et les
            interfaces qui ont de la{" "}
            <span className="font-semibold text-foreground">personnalité</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projets"
              className="hand-drawn inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-semibold hover:bg-coral hover:text-foreground transition-colors"
            >
              Voir mes projets
              <ArrowDown className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="hand-drawn inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground font-semibold hover:bg-yellow transition-colors"
            >
              Me contacter
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-sm font-mono">scroll</span>
          <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 border-4 border-coral rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-yellow blob float" style={{ animationDelay: "-1s" }} />
            
            {/* Main photo container */}
            <div className="relative">
              <div className="polaroid mx-auto md:mx-0 max-w-sm">
                <div className="aspect-square bg-gradient-to-br from-teal via-purple to-coral rounded-lg flex items-center justify-center">
                  <Code2 className="w-32 h-32 text-white" />
                </div>
                <p className="text-center font-mono text-sm text-foreground/60 mt-2">moi @ mon bureau</p>
              </div>
              
              {/* Floating stickers */}
              <div className="absolute -top-6 -right-2 md:-right-10 sticker">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-coral text-white font-bold text-sm rounded-full rotate-12 retro-shadow">
                  C&apos;est moi! <User className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="stamp bg-yellow text-foreground font-mono text-sm">
                À propos
              </span>
              <Sparkles className="w-6 h-6 wiggle text-yellow" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Un dev qui aime
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-coral">le beau</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              autant que
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-teal">le fonctionnel</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 280 12" fill="none">
                  <path d="M2 8C70 2 210 2 278 8" stroke="#4ecdc4" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h2>
            
            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              <p>
                Je transforme des idées en produits digitaux qui
                marquent les esprits. Mon approche ? Combiner une technique solide
                avec un œil pour le design.
              </p>
              <p>
                Quand je ne code pas, vous me trouverez probablement en train
                d&apos;explorer de nouveaux <strong className="text-foreground">cafés</strong>, de photographier des <strong className="text-foreground">architectures</strong>
                {" "}ou de contribuer à des projets <strong className="text-foreground">open source</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-32 px-6 md:px-12 lg:px-24 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 dots-pattern opacity-30" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-4 py-2 bg-coral text-white font-mono text-sm rounded-full">
                  Projets
                </span>
                <Palette className="w-10 h-10 text-coral bounce-subtle" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.95]">
                Mes dernières
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">créations</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-purple/30 -z-0" />
                </span>
              </h2>
            </div>
            <div className="max-w-sm mt-6 md:mt-0">
              <p className="text-lg text-foreground/60 mb-4">
                Une sélection de projets qui illustrent mon approche et mes compétences.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-coral transition-colors group">
                Voir tous les projets 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
              <article
                key={project.id}
                className={`project-card group relative bg-${project.color}/5 p-8 md:p-10 rounded-3xl border-2 border-foreground/10 hover:border-foreground cursor-pointer overflow-hidden`}
                style={{ transform: index % 2 === 1 ? "translateY(2rem)" : "none" }}
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-${project.color}/20 opacity-0 group-hover:opacity-100 transition-opacity blur-3xl`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-20 h-20 bg-${project.color}/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <div className="w-12 h-12 rounded-full border-2 border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-coral transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/60 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${project.color}/10 rounded-full group-hover:scale-150 transition-transform`} />
              </article>
              );
            })}
          </div>

          {/* Featured project teaser */}
          <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-coral/10 via-purple/10 to-teal/10 rounded-3xl border-2 border-dashed border-foreground/20 text-center">
            <Sparkles className="w-10 h-10 mx-auto mb-4 text-purple wiggle" />
            <h3 className="text-2xl font-bold mb-2">Projet secret en cours...</h3>
            <p className="text-foreground/60">Quelque chose de cool arrive bientôt. Stay tuned!</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-foreground via-foreground to-purple/80 text-background relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-coral/20 rounded-full blur-2xl float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal/20 rounded-full blur-2xl float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow/20 rounded-full blur-2xl float" style={{ animationDelay: "-5s" }} />
        
        {/* Decorative elements */}
        <Star className="absolute top-20 right-20 w-16 h-16 opacity-20 spin-slow fill-current" />
        <Star className="absolute bottom-20 left-20 w-12 h-12 opacity-20 spin-slow fill-current" style={{ animationDirection: "reverse" }} />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Floating icons */}
          <div className="flex justify-center gap-8 mb-8">
            <Lightbulb className="w-12 h-12 text-yellow float" style={{ animationDelay: "0s" }} />
            <Rocket className="w-16 h-16 text-coral float sticker" style={{ animationDelay: "-1s" }} />
            <Sparkles className="w-12 h-12 text-teal float" style={{ animationDelay: "-2s" }} />
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.95]">
            Prêt à créer
            <br />
            quelque chose de
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-coral">génial</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 20" fill="none">
                <path d="M0 15 Q50 5 100 15 T200 15" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" fill="none"/>
              </svg>
            </span>{" "}?
          </h2>
          
          <p className="text-xl md:text-2xl text-background/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Que vous ayez un projet précis ou juste une idée floue, 
            <strong className="text-background"> je suis là pour en discuter</strong> et 
            trouver la meilleure solution ensemble.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:l.bischung@gmail.com"
              className="magnetic inline-flex items-center justify-center gap-3 px-10 py-5 bg-coral text-foreground font-bold text-lg rounded-full hover:bg-yellow transition-all glow-coral"
            >
              Démarrer une conversation
              <MessageCircle className="w-6 h-6" />
            </a>
            <a
              href="#projets"
              className="magnetic inline-flex items-center justify-center gap-3 px-10 py-5 bg-background/10 text-background font-bold text-lg rounded-full border-2 border-background/30 hover:bg-background/20 transition-all"
            >
              Voir mes projets
              <ArrowUp className="w-5 h-5" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-background/50 text-sm">
            <span className="flex items-center gap-2"><Handshake className="w-5 h-5 text-teal" /> Devis gratuit</span>
            <span className="flex items-center gap-2"><Crosshair className="w-5 h-5 text-coral" /> 100% sur mesure</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/5 to-transparent" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-coral/20 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="stamp bg-teal text-white font-mono text-sm">
                  Contact
                </span>
                <Mail className="w-8 h-8 text-teal wiggle" />
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95]">
                On travaille
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10">ensemble</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-teal/30 -z-0" />
                </span>{" "}?
              </h2>
              
              <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
                N&apos;hésitez pas à me contacter pour discuter de votre projet,
                demander un devis ou simplement dire <span className="text-foreground font-semibold">bonjour</span> !
              </p>

              {/* Contact cards */}
              <div className="space-y-4">
                <a
                  href="mailto:l.bischung@gmail.com"
                  className="flex items-center gap-5 p-5 bg-coral/5 border-2 border-coral/20 rounded-2xl hover:border-coral hover:bg-coral/10 transition-all group magnetic"
                >
                  <div className="w-14 h-14 bg-coral/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-coral" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg group-hover:text-coral transition-colors">
                      Email
                    </p>
                    <p className="text-foreground/60">l.bischung@gmail.com</p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://linkedin.com/in/lilianbischung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-blue/5 border-2 border-blue/20 rounded-2xl hover:border-blue hover:bg-blue/10 transition-all group magnetic"
                >
                  <div className="w-14 h-14 bg-blue/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin className="w-7 h-7 text-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg group-hover:text-blue transition-colors">
                      LinkedIn
                    </p>
                    <p className="text-foreground/60">/in/lilianbischung</p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="https://github.com/lirobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 bg-purple/5 border-2 border-purple/20 rounded-2xl hover:border-purple hover:bg-purple/10 transition-all group magnetic"
                >
                  <div className="w-14 h-14 bg-purple/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github className="w-7 h-7 text-purple" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg group-hover:text-purple transition-colors">
                      GitHub
                    </p>
                    <p className="text-foreground/60">@lirobi</p>
                  </div>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Location */}
              <div className="mt-10 flex items-center gap-3 text-foreground/50">
                <MapPin className="w-5 h-5" />
                <span>Basé à Strasbourg, disponible partout</span>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-8">
                {/* Form with tape effect */}
                <div className="relative">
                  <div className="tape" />
                  <div className="bg-yellow/10 p-3 rounded-3xl rotate-1 hover:rotate-0 transition-transform">
                    <div className="bg-background p-8 md:p-10 rounded-2xl shadow-2xl retro-shadow border-2 border-foreground/5">
                      <div className="flex items-center gap-3 mb-8">
                        <PenLine className="w-8 h-8 text-coral" />
                        <h3 className="text-2xl font-bold">
                          Envoyez-moi un message
                        </h3>
                      </div>
                      <form className="space-y-5">
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Nom
                          </label>
                          <input
                            type="text"
                            className="w-full px-5 py-4 bg-foreground/5 border-2 border-transparent rounded-xl focus:border-coral focus:bg-background focus:outline-none transition-all"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            className="w-full px-5 py-4 bg-foreground/5 border-2 border-transparent rounded-xl focus:border-coral focus:bg-background focus:outline-none transition-all"
                            placeholder="votre@email.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">
                            Message
                          </label>
                          <textarea
                            rows={5}
                            className="w-full px-5 py-4 bg-foreground/5 border-2 border-transparent rounded-xl focus:border-coral focus:bg-background focus:outline-none transition-all resize-none"
                            placeholder="Parlez-moi de votre projet..."
                          />
                        </div>
                        <button
                          type="submit"
                          className="magnetic w-full py-5 bg-foreground text-background font-bold text-lg rounded-xl hover:bg-coral hover:text-foreground transition-all flex items-center justify-center gap-2"
                        >
                          Envoyer le message
                          <Send className="w-5 h-5" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 lg:px-24 bg-foreground text-background">
        <div className="max-w-6xl mx-auto">
          {/* Top section */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <div className="text-4xl font-bold mb-4">
                Lilian<span className="text-coral">.</span>
              </div>
              <p className="text-background/60 max-w-xs">
                Développeur web créatif, passionné par les interfaces qui ont du caractère.
              </p>
            </div>
            
            <div className="flex gap-16">
              <div>
                <h4 className="font-bold mb-4 text-background/40 uppercase text-sm tracking-wider">Navigation</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Accueil</a></li>
                  <li><a href="#projets" className="text-background/70 hover:text-coral transition-colors">Projets</a></li>
                  <li><a href="#contact" className="text-background/70 hover:text-coral transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-background/40 uppercase text-sm tracking-wider">Social</h4>
                <ul className="space-y-2">
                  <li><a href="https://linkedin.com/in/lilianbischung" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-blue transition-colors">LinkedIn</a></li>
                  <li><a href="https://github.com/lirobi" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-purple transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-background/10 mb-8" />

          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 font-mono text-sm">
              © 2026 Lilian Bischung
            </p>
            <p className="text-background/40 text-sm flex items-center gap-2">
              Fait avec <Heart className="w-4 h-4 text-coral fill-coral" /> et beaucoup de <Coffee className="w-4 h-4 text-yellow" /> à Strasbourg
            </p>
            <a href="#" className="text-background/60 hover:text-coral transition-colors flex items-center gap-2">
              Retour en haut <ChevronUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
