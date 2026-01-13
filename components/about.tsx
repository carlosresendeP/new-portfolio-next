import {
  PageSection,
  PageContainer,
  PageSectionTitle,
  AnimatedBadge,
} from "@/components/ui/page";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import DevPortrait from "@/public/developer_portrait.png";

export default function About() {
  return (
    <PageSection
      className="bg-background py-24 relative overflow-hidden"
      aria-label="Sobre mim"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -left-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <Image
                src={DevPortrait}
                alt="Trabalhando no escritório"
                width={600}
                height={800}
                className="w-full h-auto object-cover hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -right-4 -top-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl -z-10" />

            <div className="absolute bottom-6 right-6 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl">
              <p className="text-3xl font-bold text-primary">1+</p>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                Anos de XP
              </p>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <AnimatedBadge>Sobre Mim</AnimatedBadge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 leading-tight">
                Mais que código, entrego{" "}
                <span className="text-gradient-primary animate-shimmer">
                  soluções de negócio
                </span>
                .
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha abordagem combina design meticuloso com engenharia
                robusta. Não apenas construo sites, mas crio ecossistemas
                digitais que posicionam sua marca como líder de mercado.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Desenvolvimento focado em conversão e performance",
                "Design moderno e acessível (UI/UX)",
                "Código limpo, escalável e otimizado para SEO",
                "Comunicação clara e transparência total",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button
              className="group relative h-12 px-8 py-2 flex items-center gap-2 justify-center rounded-full bg-primary 
            text-primary-foreground font-semibold overflow-hidden
            transition-all duration-300 ease-out
            hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.6),0_0_40px_rgba(var(--primary-rgb),0.4),0_0_60px_rgba(var(--primary-rgb),0.2)]
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:translate-x-[-200%] before:transition-transform before:duration-700
            hover:before:translate-x-[200%]
            active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Conheça minha história
                <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 rounded-full bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </div>
        </div>
      </PageContainer>
    </PageSection>
  );
}
