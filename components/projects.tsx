import {
  PageSection,
  PageContainer,
  AnimatedBadge,
} from "@/components/ui/page";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "EcoMarkt E-commerce",
    category: "Fullstack / Next.js",
    image: "/project-1.jpg",
    description:
      "Plataforma completa de e-commerce com dashboard administrativo, pagamentos via Stripe e gestão de inventário em tempo real.",
    techs: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "HealthTrack App",
    category: "Web App / Dashboard",
    image: "/project-2.jpg",
    description:
      "Aplicação de monitoramento de saúde com gráficos interativos, autenticação segura e integração com wearables.",
    techs: ["React", "Node.js", "Prisma", "Recharts"],
    link: "#",
    github: "#",
  },
  {
    title: "Fintech Landing Page",
    category: "Marketing / UI Developer",
    image: "/project-3.jpg",
    description:
      "Landing page de alta conversão para startup financeira, com animações complexas e performance score de 100/100.",
    techs: ["Astro", "Framer Motion", "React"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <PageSection
      className="bg-background py-24 relative overflow-hidden"
      aria-label="Projetos em Destaque"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -left-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedBadge>Portfolio</AnimatedBadge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 mt-4">
            Projetos que{" "}
            <span className="text-gradient-primary">fazem a diferença</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções reais que geraram resultados mensuráveis para meus clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden
                hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10
                transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-all duration-500
                  flex items-end justify-center pb-6 gap-3"
                >
                  <Button
                    size="sm"
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90
                      shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all"
                    asChild
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Projeto
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 bg-background/90 backdrop-blur-sm border border-border rounded-full 
                    text-xs font-semibold text-primary"
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-md 
                        text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Accent */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Ver detalhes</span>
                    <ArrowUpRight
                      className="w-4 h-4 text-primary opacity-0 -translate-x-2 
                      group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="group relative rounded-full border-primary/30 px-6 py-3 h-16 bg-primary overflow-hidden
              transition-all duration-300 ease-out
              hover:scale-105 hover:border-primary/50 hover:bg-primary/10
              hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3),0_0_40px_rgba(var(--primary-rgb),0.15)]
              active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2 text-foreground">
              Ver todos os projetos
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Button>
        </div>
      </PageContainer>
    </PageSection>
  );
}
