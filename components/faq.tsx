import {
  PageSection,
  PageContainer,
  AnimatedBadge,
} from "@/components/ui/page";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "O prazo varia de acordo com a complexidade do projeto. Uma landing page geralmente leva de 5 a 10 dias úteis, enquanto sites corporativos ou e-commerces podem levar de 3 a 6 semanas.",
  },
  {
    question: "Vocês fazem o design também?",
    answer:
      "Sim! Ofereço o pacote completo: desde o design da interface (UI/UX) até o desenvolvimento e publicação do site. Você não precisa contratar profissionais separados.",
  },
  {
    question: "O site será otimizado para o Google (SEO)?",
    answer:
      "Com certeza. Todos os sites são desenvolvidos seguindo as melhores práticas de SEO técnico, garantindo performance máxima (Core Web Vitals) e indexação correta.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Geralmente trabalho com 50% de entrada para iniciar o projeto e 50% na entrega final. Aceito PIX, cartão de crédito e boleto.",
  },
  {
    question: "Você oferece suporte após a entrega?",
    answer:
      "Sim, ofereço 30 dias de suporte gratuito para correção de eventuais bugs. Também tenho pacotes de manutenção mensal se você precisar de atualizações constantes.",
  },
];

export default function FAQ() {
  return (
    <PageSection
      className="bg-background py-24 relative overflow-hidden"
      aria-label="Perguntas Frequentes"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -right-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        <div className="text-center mb-16">
          <AnimatedBadge>Dúvidas</AnimatedBadge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 mt-4">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa saber antes de iniciarmos nossa parceria.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 bg-card/50 backdrop-blur-sm
                  data-[state=open]:bg-card data-[state=open]:border-primary/40 
                  data-[state=open]:shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]
                  transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:no-underline text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </PageContainer>
    </PageSection>
  );
}
