import { PageSection, PageContainer } from "@/components/ui/page";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { getProjects } from "@/lib/data";
import { Project } from "@prisma/client";

export default async function Projects() {
  const projectsData = await getProjects(7);

  // Map database fields to UI structure if needed, or use directly
  const projects = projectsData.map((p: Project) => ({
    ...p,
    image: p.imageUrl,
    link: p.liveUrl || "#",
    github: p.gitUrl || "#",
    techs: p.technologies,
  }));

  return (
    <PageSection
      id="projects"
      className="bg-background py-24 relative overflow-hidden"
      aria-label="Projetos em Destaque"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -left-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white mask-[linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <span className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold tracking-[0.2em] text-primary uppercase">
              Trabalhos
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Ultimos Projetos
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {projects.length === 0 ? (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              <p>
                Nenhum projeto encontrado.
              </p>
            </div>
          ) : (
            projects.map((project, index) => {
              // Define grid layout patterns
              const isLargeFeatured = index === 0; // First project takes 2 columns
              const isSecondaryFeatured = index === 3; // Fourth project takes 2 rows

              return (
                <div
                  key={project.id}
                  className={`group relative bg-card border border-border/50 rounded-xl overflow-hidden
                    hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20
                    transition-all duration-500
                    ${isLargeFeatured ? "md:col-span-2 md:row-span-1" : ""}
                    ${isSecondaryFeatured ? "lg:row-span-2" : ""}
                  `}
                >
                  {/* Accent Tab */}
                  <div className="absolute top-0 left-6 z-20">
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-chart-2 rounded-b-sm" />
                  </div>

                  {/* Image Container */}
                  <div
                    className={`relative overflow-hidden bg-muted ${
                      isLargeFeatured
                        ? "aspect-[21/9]"
                        : isSecondaryFeatured
                          ? "aspect-[4/5]"
                          : "aspect-[4/3]"
                    }`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                        Sem Imagem
                      </div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />

                    {/* Hover Overlay with Actions */}
                    <div
                      className="absolute inset-0 bg-background/95 backdrop-blur-sm
                      opacity-0 group-hover:opacity-100 transition-all duration-500
                      flex flex-col items-center justify-center gap-4 p-6"
                    >
                      <p className="text-muted-foreground text-sm text-center max-w-md leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex gap-3">
                        {project.link !== "#" && (
                          <Button
                            size="sm"
                            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90
                              shadow-lg hover:shadow-xl hover:shadow-primary/40 transition-all"
                            asChild
                          >
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaExternalLinkAlt className="w-3.5 h-3.5 mr-2" />
                              Ver Projeto
                            </a>
                          </Button>
                        )}
                        {project.github !== "#" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="rounded-full border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                            asChild
                          >
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="w-3.5 h-3.5 mr-2" />
                              Código
                            </a>
                          </Button>
                        )}
                      </div>

                      {/* Tech Stack in Overlay */}
                      <div className="flex flex-wrap gap-2 justify-center">
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
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <span
                        className="px-3 py-1.5 bg-background/90 backdrop-blur-md border border-border/50 rounded-lg
                        text-xs font-semibold text-primary shadow-lg"
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content - Always Visible */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="group relative rounded-full px-8 py-6 h-auto bg-background border-2 border-primary/30
              transition-all duration-300 ease-out
              hover:scale-105 hover:border-primary/60 hover:bg-primary/5
              hover:shadow-[0_0_30px_rgba(1,206,196,0.3)]
              active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-3 text-foreground font-semibold text-base">
              Ver todos
              <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Button>
        </div>
      </PageContainer>
    </PageSection>
  );
}
