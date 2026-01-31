import { Mail, Linkedin, Github, MapPin, PenLine, Send } from "lucide-react";
import { ContactCard, Stamp, Input, Textarea, Button } from "@/components/ui";
import config from "@/data/config.json";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-24 2xl:px-12 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/5 to-transparent" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-coral/20 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <Stamp className="bg-teal text-white">Contact</Stamp>
              <Mail className="w-8 h-8 text-teal wiggle" />
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.95]">
              On travaille
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">ensemble</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-teal/30 -z-0" />
              </span>{" "}
              ?
            </h2>

            <p className="text-xl text-foreground/60 mb-12 leading-relaxed">
              N&apos;hésitez pas à me contacter pour discuter de votre projet,
              demander un devis ou simplement dire{" "}
              <span className="text-foreground font-semibold">bonjour</span> !
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              <ContactCard
                href={`mailto:${config.personal.email}`}
                icon={Mail}
                title="Email"
                subtitle={config.personal.email}
                color="coral"
              />

              <ContactCard
                href={config.social.linkedin.url}
                icon={Linkedin}
                title="LinkedIn"
                subtitle={config.social.linkedin.handle}
                color="blue"
                external
              />

              <ContactCard
                href={config.social.github.url}
                icon={Github}
                title="GitHub"
                subtitle={config.social.github.handle}
                color="purple"
                external
              />
            </div>

            {/* Location */}
            <div className="mt-10 flex items-center gap-3 text-foreground/50">
              <MapPin className="w-5 h-5" />
              <span>{config.personal.locationMessage}</span>
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
                      <Input label="Nom" placeholder="Votre nom" name="name" />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="votre@email.com"
                        name="email"
                      />
                      <Textarea
                        label="Message"
                        placeholder="Parlez-moi de votre projet..."
                        name="message"
                        rows={5}
                      />
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
  );
}
