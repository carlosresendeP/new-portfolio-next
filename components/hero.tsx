import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import {
  PageSection,
  PageGrid,
  GradientCard,
  AnimatedBadge,
} from "@/components/ui/page";
import { links } from "@/lib/links";

export default function Hero() {
  return (
    <PageSection
      className="relative min-h-[90vh] flex items-center bg-background pt-20 pb-12 overflow-hidden"
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

          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground animate-fade-in-up animation-delay-100">
              Transformando códigos em <br />
              <span className="text-gradient-primary">
                Experiências Digitais
              </span>{" "}
              <br />
              de Impacto.
            </h1>

            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up animation-delay-200">
              Crio soluções web escaláveis e de alta performance, focadas na
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
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
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
                <Download className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Download CV
              </span>
            </Button>
          </div>

          {/* Social Proof / Links */}
          <div className="flex items-center gap-6 pt-4 animate-fade-in-up animation-delay-400">
            <a
              href={links.github} target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={links.linkedin} target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href={links.email} target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
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
                src="/developer_portrait.png"
                alt="Desenvolvedor Profissional"
                width={600}
                height={700}
                className="w-full h-auto object-cover rounded-2xl"
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
