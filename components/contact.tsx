"use client";

import { useState, FormEvent } from "react";
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
import { toast } from "sonner";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!", {
          description: "Entrarei em contato em breve. Obrigado!",
          duration: 5000,
        });
        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Erro ao enviar mensagem", {
          description: data.error || "Tente novamente mais tarde.",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Erro ao enviar mensagem", {
        description: "Verifique sua conexão e tente novamente.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <form
            className="space-y-6 p-8 rounded-2xl bg-card shadow-xl"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Nome
                </Label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border/50 focus:border-primary outline-none border-none text-foreground font-semibold"
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border/50 focus:border-primary outline-none border-none text-foreground font-semibold "
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground">
                  Assunto
                </Label>
                <Input
                  id="subject"
                  placeholder="Sobre o que vamos falar?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background border-border/50 focus:border-primary outline-none border-none text-foreground font-semibold "
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Telefone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Seu telefone"
                  value={formData.phone}
                  required
                  onChange={handleChange}
                  className="bg-background outline-none border-none text-foreground font-semibold"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Mensagem
              </Label>
              <Textarea
                id="message"
                placeholder="Me conte mais sobre seu projeto..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-background border-border/50 text-foreground font-semibold focus:border-primary outline-none border-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full h-14 text-lg font-semibold rounded-full bg-primary overflow-hidden
              transition-all duration-300 ease-out
              hover:bg-success hover:text-card
              hover:scale-105 hover:shadow-[0_0_20px_rgba(4,255,138,0.6),0_0_40px_rgba(4,255,138,0.4)]
              before:absolute before:inset-0 before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent
              before:translate-x-[-200%] before:transition-transform before:duration-700
              hover:before:translate-x-[200%]
              active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
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
