"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Code2, Wrench } from "lucide-react";
import { Stamp } from "@/components/ui";
import config from "@/data/config.json";
import Image from "next/image";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 lg:px-24 2xl:px-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-yellow/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal/20 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Skills section - Left side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Stamp className="bg-coral text-white">Stack</Stamp>
              <Wrench className="w-6 h-6 wiggle text-coral" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              Mes outils du quotidien
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {config.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
                  className={`skill-tag group relative px-5 py-3 bg-${skill.color}/10 border-2 border-${skill.color}/20 rounded-2xl hover:border-${skill.color} hover:bg-${skill.color}/20 transition-all cursor-default`}
                >
                  <div className="flex items-center gap-2">
                    {skill.icon && (
                      <Image 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        width={24} 
                        height={24}
                        className="w-6 h-6"
                      />
                    )}
                    <span className={`font-semibold text-${skill.color === 'foreground' ? 'foreground' : skill.color}`}>
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative code block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
              className="mt-10 p-6 bg-foreground/5 rounded-2xl border-2 border-foreground/10 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-coral" />
                <div className="w-3 h-3 rounded-full bg-yellow" />
                <div className="w-3 h-3 rounded-full bg-teal" />
              </div>
              <code className="text-foreground/70">
                <span className="text-purple">const</span>{" "}
                <span className="text-teal">dev</span> = {"{"}
                <br />
                <span className="text-coral ml-4">passion</span>:{" "}
                <span className="text-yellow">&quot;web&quot;</span>,
                <br />
                <span className="text-coral ml-4">focus</span>:{" "}
                <span className="text-yellow">&quot;UX + code&quot;</span>,
                <br />
                <span className="text-coral ml-4">status</span>:{" "}
                <span className="text-teal">available</span>
                <br />
                {"}"};
              </code>
            </motion.div>
          </motion.div>

          {/* About text - Right side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Stamp className="bg-yellow text-foreground">À propos</Stamp>
              <Sparkles className="w-6 h-6 wiggle text-yellow" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1]">
              Un dev qui aime
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-coral">le beau</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="#ff6b6b"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              autant que
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-teal">le fonctionnel</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 280 12"
                  fill="none"
                >
                  <path
                    d="M2 8C70 2 210 2 278 8"
                    stroke="#4ecdc4"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <div className="space-y-4 text-lg text-foreground/70 leading-relaxed">
              {config.content.aboutParagraphs.map((paragraph, index) => (
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
