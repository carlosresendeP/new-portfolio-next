import {
  PageSection,
  PageContainer,
  PageSectionTitle,
  AnimatedBadge,
} from "@/components/ui/page";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Entendo seu negócio, seus objetivos e seu público-alvo para definir a melhor estratégia.",
  },
  {
    number: "02",
    title: "Design & UX",
    description:
      "Crio protótipos e layouts visuais que alinham estética com usabilidade e conversão.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Codificação limpa e robusta utilizando as tecnologias mais modernas do mercado.",
  },
  {
    number: "04",
    title: "Lançamento",
    description:
      "Testes rigorosos, deploy automatizado e acompanhamento pós-lançamento.",
  },
];

export default function Process() {
  return (
    <PageSection
      className="py-24 bg-linear-to-t from-background to-muted relative overflow-hidden"
      aria-label="Processo"
    >
      {/* Subtle dark background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <PageContainer>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedBadge>Processo</AnimatedBadge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Como transformo{" "}
            <span className="text-gradient-primary">ideias em realidade</span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="flex gap-6 items-start">
                  {/* Number Circle */}
                  <div className="shrink-0 relative">
                    <div
                      className="w-20 h-20 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center
                      group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.4)]
                      transition-all duration-500"
                    >
                      <span className="text-2xl font-bold text-primary">
                        {step.number}
                      </span>
                    </div>

                    {/* Connecting line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-gradient-to-b from-primary/30 to-transparent" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 pb-8">
                    <div
                      className="bg-card border border-border rounded-xl p-6 
                      group-hover:border-primary/40 group-hover:shadow-lg
                      transition-all duration-300"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </PageSection>
  );
}
