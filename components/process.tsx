import {
  PageSection,
  PageContainer,
  AnimatedBadge,
} from "@/components/ui/page";
import {
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    number: "01",
    title: "Discovery & Estratégia",
    description:
      "Análise profunda do seu negócio, objetivos e público-alvo. Definimos juntos a estratégia ideal para maximizar resultados.",
    icon: FaLightbulb,
    highlights: [
      "Pesquisa de mercado",
      "Análise de concorrentes",
      "Definição de KPIs",
    ],
  },
  {
    number: "02",
    title: "Design & Prototipagem",
    description:
      "Criação de interfaces modernas e intuitivas focadas em conversão. Protótipos interativos para validação antes do desenvolvimento.",
    icon: FaPencilRuler,
    highlights: ["UI/UX Design", "Protótipos interativos", "Design System"],
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Código limpo, escalável e otimizado. Utilizo as tecnologias mais modernas para garantir performance e segurança.",
    icon: FaCode,
    highlights: [
      "Código otimizado",
      "Testes automatizados",
      "Documentação completa",
    ],
  },
  {
    number: "04",
    title: "Lançamento & Suporte",
    description:
      "Deploy profissional com monitoramento contínuo. Suporte dedicado para garantir o sucesso do seu projeto.",
    icon: FaRocket,
    highlights: [
      "Deploy automatizado",
      "Monitoramento 24/7",
      "Suporte contínuo",
    ],
  },
];

export default function Process() {
  return (
    <PageSection
      className="py-24 bg-background bg-linear-to-b to-background from-muted relative overflow-hidden"
      aria-label="Processo de Trabalho"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-1/4 h-[500px] w-[500px] rounded-full bg-chart-2/10 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10" />
      </div>

      <PageContainer className="relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <AnimatedBadge>Meu Processo</AnimatedBadge>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 mt-6">
            Do conceito ao{" "}
            <span className="text-gradient-primary">lançamento</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Um processo testado e comprovado que transforma suas ideias em
            produtos digitais de alto impacto
          </p>
        </div>

        {/* Process Steps - Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative">
            {/* Connecting Lines - Desktop Only */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Card */}
                  <div
                    className="relative bg-card border border-border/50 rounded-2xl p-8 h-full
                    hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10
                    transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Step Number Badge */}
                    <div
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-chart-2 
                      flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300"
                    >
                      <span className="text-white font-bold text-sm">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 relative">
                      <div
                        className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 
                        flex items-center justify-center group-hover:bg-primary/20 
                        group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300"
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <div className="pt-4 space-y-2">
                        {step.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm"
                          >
                            <FaCheckCircle className="w-4 h-4 text-chart-2 shrink-0" />
                            <span className="text-foreground/80">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-chart-2/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
            <div className="w-2 h-2 rounded-full bg-chart-2 animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Processo otimizado para entregar resultados em{" "}
              <span className="text-primary font-bold">4-8 semanas</span>
            </span>
          </div>
        </div>
      </PageContainer>
    </PageSection>
  );
}
