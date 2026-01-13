import {
  PageSection,
  PageContainer,
  AnimatedBadge,
} from "@/components/ui/page";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Carlos Ferreira",
    role: "CEO, TechStart",
    content:
      "A transformação no nosso site foi incrível. O tráfego aumentou 40% e a taxa de conversão dobrou em menos de um mês. Profissionalismo de alto nível.",
    image: "/avatar-1.jpg",
    rating: 5,
  },
  {
    name: "Ana Silva",
    role: "Diretora de Marketing, CreativeLabs",
    content:
      "Superou todas as expectativas. A comunicação foi clara durante todo o processo e o resultado final é simplesmente lindo e funcional.",
    image: "/avatar-2.jpg",
    rating: 5,
  },
  {
    name: "Ricardo Mendes",
    role: "Fundador, EcoStore",
    content:
      "Precisávamos de uma loja rápida e otimizada para SEO. O resultado foi um e-commerce que carrega instantaneamente e vende muito.",
    image: "/avatar-3.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <PageSection
      className="bg-background py-24 relative overflow-hidden"
      aria-label="Depoimentos"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -left-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        <div className="text-center mb-16">
          <AnimatedBadge>Depoimentos</AnimatedBadge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 mt-4">
            O que dizem meus{" "}
            <span className="text-gradient-primary">parceiros</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A satisfação dos meus clientes é a métrica mais importante do meu
            trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border/50 
                hover:border-primary/40 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)]
                transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-8 text-lg font-light leading-relaxed relative z-10">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary ring-2 ring-primary/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  );
}
