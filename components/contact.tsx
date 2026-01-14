import {
  PageSection,
  PageContainer,
  AnimatedBadge,
} from "@/components/ui/page";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <PageSection
      className="bg-background bg-linear-to-b from-background to-card py-24 relative overflow-hidden"
      aria-label="Contato"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute -left-20 bottom-20 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20" />
      </div>

      <PageContainer className="relative z-10">
        <div className="text-center mb-16">
          <AnimatedBadge>Contato</AnimatedBadge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 mt-4">
            Vamos construir algo{" "}
            <span className="text-gradient-primary">incrível</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tem um projeto em mente ou quer apenas bater um papo? Preencha o
            formulário abaixo e entrarei em contato em breve.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <FaEnvelope className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Mande um email direto
              </p>
              <a
                href="mailto:dev.carlosresende@hotmail.com"
                className="text-primary hover:underline font-medium"
              >
                dev.carlosresende@hotmail.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
              <FaCommentDots className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-1">
                WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Resposta rápida
              </p>
              <a
                href="https://wa.me/32998283189 "
                className="text-green-500 hover:underline font-medium"
              >
                +55 ******3189
              </a>
            </div>
          </div>

          <form className="space-y-6 p-8 rounded-2xl bg-card border border-border/50 shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nome
                </Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-background border-border/50 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground">
                Assunto
              </Label>
              <Input
                id="subject"
                placeholder="Sobre o que vamos falar?"
                className="bg-background border-border/50 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Me conte mais sobre seu projeto..."
                className="min-h-[150px] bg-background border-border/50 focus:border-primary"
              />
            </div>

            <Button
              className="group relative w-full h-14 text-lg rounded-full bg-success overflow-hidden
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.6),0_0_40px_rgba(var(--primary-rgb),0.4)]
              before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
              before:translate-x-[-200%] before:transition-transform before:duration-700
              hover:before:translate-x-[200%]
              active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Enviar Mensagem
                <FaPaperPlane className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 rounded-full bg-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
          </form>
        </div>
      </PageContainer>
    </PageSection>
  );
};

export default Contact;
