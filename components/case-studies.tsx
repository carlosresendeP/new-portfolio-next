import {
  PageSection,
  PageContainer,
  AnimatedBadge,
} from "@/components/ui/page";
import { TrendingUp, Users, Clock } from "lucide-react";

const cases = [
  {
    title: "Startup SaaS Financeiro",
    metric: "+150%",
    label: "Aumento em Leads",
    description:
      "Redesign completo da landing page focado em conversão e otimização do funil de vendas.",
    icon: TrendingUp,
  },
  {
    title: "E-commerce de Moda",
    metric: "0.8s",
    label: "Tempo de Carregamento",
    description:
      "Otimização de performance Core Web Vitals, reduzindo o LCP de 4.2s para 0.8s.",
    icon: Clock,
  },
  {
    title: "Portal Educacional",
    metric: "50k+",
    label: "Usuários Ativos/Mês",
    description:
      "Arquitetura escalável para suportar alto tráfego simultâneo sem degradação de performance.",
    icon: Users,
  },
];

export default function CaseStudies() {
  return (
    <PageSection
      className="bg-background py-24 relative overflow-hidden"
      aria-label="Resultados"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <AnimatedBadge>Resultados Reais</AnimatedBadge>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
              Design que gera <br />
              <span className="text-gradient-primary">
                crescimento mensurável
              </span>
              .
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Não basta ser bonito. Cada pixel que eu coloco na tela tem um
              propósito: trazer resultados para o seu negócio.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-sm text-muted-foreground">
                  Clientes Satisfeitos
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
                <p className="text-4xl font-bold text-primary mb-2">30+</p>
                <p className="text-sm text-muted-foreground">
                  Projetos Entregues
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {cases.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border/50 
                  hover:border-primary/40 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.15)]
                  transition-all duration-300 hover:translate-x-2"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase font-bold mb-1">
                    {item.title}
                  </p>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      {item.metric}
                    </span>
                    <span className="text-sm font-medium text-primary">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </PageSection>
  );
}
