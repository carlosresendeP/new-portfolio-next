import { PageSection, PageContainer } from "@/components/ui/page";
import { Button } from "@/components/ui/button";
import { FaCalendar, FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <PageSection
      className="py-24 relative overflow-hidden bg-background"
      aria-label="Chamada para Ação"
    >
      {/* Dynamic Background Elements - More Intense */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute -left-20 top-20 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute -right-20 bottom-20 h-[700px] w-[700px] rounded-full bg-primary/15 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-30" />
      </div>

      <PageContainer className="relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/30 p-8 md:p-16 text-center shadow-2xl shadow-primary/20">
          {/* Inner Glow Effects */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
              Pronto para elevar seu negócio ao{" "}
              <span className="text-gradient-primary">próximo nível</span>?
            </h2>
            <p className="text-xl text-muted-foreground">
              Não deixe para depois. A sua presença digital pode ser o
              diferencial que falta para você escalar suas vendas hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="default"
                className="group relative bg-primary h-14 px-8 rounded-full text-lg w-full sm:w-auto border-primary  overflow-hidden
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:border-primary/60 hover:bg-success hover:text-background
                  hover:shadow-success/20
                  active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2 text-foreground font-semibold">
                  Fazer Agendamento <FaCalendar />
                  <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                variant="outline"
                className="group relative h-14 px-8 rounded-full text-lg w-full sm:w-auto border-primary/40 bg-card/50 backdrop-blur-sm overflow-hidden
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:border-primary/60 hover:bg-primary/10
                  hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4),0_0_40px_rgba(var(--primary-rgb),0.2)]
                  active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2 text-foreground font-semibold">
                  Ver Planos e Preços
                  <FaArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </PageSection>
  );
}
