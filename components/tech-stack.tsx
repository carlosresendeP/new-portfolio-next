import {
  PageSection,
  PageContainer,
  AnimatedBadge,
} from "@/components/ui/page";

import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import {
  FaCode,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs 
} from "react-icons/fa";


const technologies = [
  { name: "HTML", icon: FaHtml5, category: "Frontend" },
  { name: "CSS", icon: FaCss3, category: "Frontend" },
  { name: "JavaScript", icon: FaJs, category: "Frontend" },
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Next.js", icon: FaCode, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "Languages" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, category: "Styling" },
  { name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { name: "PostgreSQL", icon: FaDatabase, category: "Database" },
];

export default function TechStack() {
  return (
    <PageSection
      className="bg-background py-24 relative overflow-hidden"
      aria-label="Tecnologias"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        <div className="text-center mb-16">
          <AnimatedBadge>Tech Stack</AnimatedBadge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
            Ferramentas que{" "}
            <span className="text-gradient-primary">domino</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tecnologias modernas para criar soluções robustas e escaláveis
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-2xl w-32 h-32 md:w-40 md:h-40 
                hover:border-primary/50 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] 
                transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

              <tech.icon className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:scale-110 mb-3 relative z-10" />

              <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm md:text-base relative z-10">
                {tech.name}
              </span>

              <span className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 relative z-10">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  );
}
