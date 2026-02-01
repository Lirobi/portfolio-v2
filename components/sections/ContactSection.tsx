"use client";

import { useState, FormEvent, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, PenLine, Send, Check, AlertCircle } from "lucide-react";
import { ContactCard, Stamp, Input, Textarea } from "@/components/ui";
import config from "@/data/config.json";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [loadTime] = useState(Date.now());

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check - if filled, it's a bot
    if (formData.get("website")) {
      setFormState("success");
      return;
    }

    // Time check - if submitted too fast (< 3 seconds), likely a bot
    if (Date.now() - loadTime < 3000) {
      setFormState("success");
      return;
    }

    setFormState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi");
      }

      setFormState("success");
      form.reset();
    } catch (error) {
      setFormState("error");
      setErrorMessage(error instanceof Error ? error.message : "Erreur lors de l'envoi");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-24 2xl:px-12 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/5 to-transparent" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-coral/20 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
          >
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ContactCard
                  href={`mailto:${config.personal.email}`}
                  icon={Mail}
                  title="Email"
                  subtitle={config.personal.email}
                  color="coral"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ContactCard
                  href={config.social.linkedin.url}
                  icon={Linkedin}
                  title="LinkedIn"
                  subtitle={config.social.linkedin.handle}
                  color="blue"
                  external
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ContactCard
                  href={config.social.github.url}
                  icon={Github}
                  title="GitHub"
                  subtitle={config.social.github.handle}
                  color="purple"
                  external
                />
              </motion.div>
            </div>

            {/* Location */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex items-center gap-3 text-foreground/50"
            >
              <MapPin className="w-5 h-5" />
              <span>{config.personal.locationMessage}</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
            className="relative"
          >
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
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      {/* Honeypot - hidden from humans, bots will fill it */}
                      <input
                        type="text"
                        name="website"
                        autoComplete="off"
                        tabIndex={-1}
                        className="absolute opacity-0 pointer-events-none h-0 w-0"
                        aria-hidden="true"
                      />
                      
                      <Input label="Nom" placeholder="Votre nom" name="name" required />
                      <Input
                        label="Email"
                        type="email"
                        placeholder="votre@email.com"
                        name="email"
                        required
                      />
                      <Textarea
                        label="Message"
                        placeholder="Parlez-moi de votre projet..."
                        name="message"
                        rows={5}
                        required
                      />
                      <button
                        type="submit"
                        disabled={formState === "submitting" || formState === "success"}
                        className="magnetic w-full py-5 bg-foreground text-background font-bold text-lg rounded-xl hover:bg-coral hover:text-foreground transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {formState === "submitting" && (
                          <>
                            Envoi en cours...
                            <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                          </>
                        )}
                        {formState === "success" && (
                          <>
                            Message envoyé !
                            <Check className="w-5 h-5" />
                          </>
                        )}
                        {formState === "error" && (
                          <>
                            Erreur, réessayer
                            <AlertCircle className="w-5 h-5" />
                          </>
                        )}
                        {formState === "idle" && (
                          <>
                            Envoyer le message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
