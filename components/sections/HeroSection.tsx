"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { Button, FloatingBlob, Sticker } from "@/components/ui";
import config from "@/data/config.json";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 2xl:px-12">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Floating shapes */}
        <FloatingBlob color="coral" size="lg" className="absolute top-20 right-10" />
        <FloatingBlob color="teal" size="md" className="absolute bottom-32 left-10" delay="-2s" />
        <FloatingBlob color="yellow" size="sm" className="absolute top-1/2 right-1/4" delay="-4s" />
        <FloatingBlob color="purple" size="md" className="absolute bottom-20 right-20" delay="-3s" />

        <div className="relative z-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
            className="inline-block mb-6"
          >
            <Sticker className="bg-yellow text-foreground">
              <Sparkles className="w-4 h-4" /> {config.content.heroTagline}
            </Sticker>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8"
          >
            Je crée des
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">expériences</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-coral opacity-50 -z-0" />
            </span>
            <br />
            web{" "}
            <span className="wavy-underline decoration-teal">uniques</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
            className="text-xl md:text-2xl text-foreground/70 max-w-xl mb-12 leading-relaxed"
          >
            Développeur web passionné par le{" "}
            <span className="font-semibold text-foreground">design</span>,
            l&apos;<span className="font-semibold text-foreground">UX</span> et les
            interfaces qui ont de la{" "}
            <span className="font-semibold text-foreground">personnalité</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#projets" variant="primary">
              Voir mes projets
              <ArrowDown className="w-5 h-5" />
            </Button>
            <Button href="#contact" variant="secondary">
              Me contacter
              <Mail className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-sm font-mono">scroll</span>
        <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
