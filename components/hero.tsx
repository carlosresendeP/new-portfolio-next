'use client'
import { Button } from "@/components/ui/button";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import {
  PageSection,
  PageGrid,
  GradientCard,
  AnimatedBadge,
} from "@/components/ui/page";
import { links } from "@/lib/links";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DevPotrait from '@/public/developer_portrait.png'




const titles =[
  "Desenvolvedor Frontend",
  "Desenvolvedor Fullstack",
  "Especialista em React",
  "Criador de Soluções",
]

export default function Hero() {


  const [titleIndex, setTitleIndex] = useState<number>(0);
  const animateTitle = () => {
    setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
  };

  useEffect(() => {
    const interval = setInterval(animateTitle, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageSection
      className="relative min-h-screen flex items-center bg-background pt-20 pb-12 overflow-hidden"
      aria-label="Introdução"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageGrid>
        <article className="space-y-8 relative z-10">
          {/* Status Badge */}
          <div className="animate-fade-in-up">
            <AnimatedBadge>Disponível para novos projetos</AnimatedBadge>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 w-full">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground animate-fade-in-up animation-delay-100">
              <span className="text-2xl md:text-3xl lg:text-4xl ml-1">Olá me chamo</span> <br />
              <span className="text-gradient-primary">
                Carlos Resende
              </span>{" "}
              <br />
              <AnimatePresence mode="wait">
                <motion.p
                  key={titleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-4xl font-bold text-slate-300"
                >
                  {titles[titleIndex]}
                </motion.p>
              </AnimatePresence>
            </h1>

            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up animation-delay-200">
              Crio soluções web de alta performance, focadas na
              melhor experiência de usuário e resultados de negócio.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <Button
              className="group relative h-14 px-8 rounded-full text-lg font-semibold bg-primary overflow-hidden
            transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.6),0_0_40px_rgba(var(--primary-rgb),0.4),0_0_60px_rgba(var(--primary-rgb),0.2)]
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:translate-x-[-200%] before:transition-transform before:duration-700
            hover:before:translate-x-[200%]
            active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Projetos
                <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 rounded-full bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </Button>

            <Button
              variant="outline"
              className="group relative h-14 px-8 rounded-full text-lg font-semibold border-primary/20 bg-primary/5 text-foreground backdrop-blur-sm overflow-hidden
              transition-all duration-300 ease-out
              hover:scale-105 hover:bg-primary/10 hover:border-primary/40
              hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3),0_0_30px_rgba(var(--primary-rgb),0.15)]
              active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaDownload className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Download CV
              </span>
            </Button>
          </div>

          {/* Social Proof / Links */}
          <div className="flex items-center gap-6 pt-4 animate-fade-in-up animation-delay-400">
            <a
              href={links.github}
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={links.email}
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaEnvelope className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </article>

        <aside className="relative animate-fade-in-up animation-delay-400 z-10 hidden lg:block">
          <div className="relative">
            {/* Abstract decorative shapes */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />

            <GradientCard className="rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={DevPotrait}
                alt="Desenvolvedor Profissional"
                width={200}
                height={300}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
            </GradientCard>

            {/* Float Card 1 */}
            <div className="absolute -left-12 bottom-10 p-4 glass-card rounded-2xl animate-float animation-delay-200">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <code className="text-primary font-bold text-sm">
                    {"</>"}
                  </code>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold">
                    Clean Code
                  </p>
                  <p className="text-sm font-bold text-foreground">
                    Architecture
                  </p>
                </div>
              </div>
            </div>

            {/* Float Card 2 */}
            <div className="absolute -right-8 top-20 p-4 glass-card rounded-2xl animate-float animation-delay-400">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-semibold text-foreground">
                  100% Uptime
                </p>
              </div>
            </div>
          </div>
        </aside>
      </PageGrid>
    </PageSection>
  );
}
