import {
  PageSection,
  PageContainer,
  PageSectionTitle,
  AnimatedBadge,
} from "@/components/ui/page";
import {
  FaCode,
  FaPaintBrush,
  FaRocket,
  FaChartLine,
  FaGlobe,
  FaMobileAlt,
} from "react-icons/fa";

const services = [
  {
    icon: FaCode,
    title: "Desenvolvimento Frontend",
    description:
      "Interfaces reativas e performáticas com React, Next.js e TypeScript. Código moderno e escalável.",
  },
  {
    icon: FaPaintBrush,
    title: "UI/UX Design",
    description:
      "Design systems completos, prototipagem e interfaces intuitivas que encantam seus usuários.",
  },
  {
    icon: FaRocket,
    title: "Performance & SEO",
    description:
      "Otimização vitais da web (Core Web Vitals) para garantir que seu site carregue instantaneamente e rankeie bem.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile First",
    description:
      "Experiências perfeitamente responsivas que funcionam em qualquer dispositivo, do celular ao desktop 4k.",
  },
  {
    icon: FaChartLine,
    title: "Integração & APIs",
    description:
      "Conexão com CMS, sistemas de pagamento, CRMs e outras ferramentas para automatizar seu negócio.",
  },
  {
    icon: FaGlobe,
    title: "Sistemas Web",
    description:
      "Aplicações web completas (SaaS), dashboards administrativos e plataformas de e-commerce.",
  },
];

export default function Services() {
  return (
    <PageSection
      id="services"
      className="bg-linear-to-b from-background to-muted py-24 relative overflow-hidden"
      aria-label="Serviços"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white mask-[linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <AnimatedBadge>Especialidades</AnimatedBadge>
          <h2 className="text-3xl md:text-5xl text-foreground font-bold">
            Soluções completas para{" "}
            <span className="text-gradient-primary">escalar seu negócio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Da concepção ao lançamento, ofereço um leque completo de serviços
            técnicos e criativos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary text-foreground transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  );
}
