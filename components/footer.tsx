import { PageContainer } from "@/components/ui/page";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { links } from "@/lib/links";



export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background pt-16 pb-8 relative overflow-hidden">


      <PageContainer className="relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-gradient-primary">
              Portfólio.
            </h3>
            <p className="text-muted-foreground max-w-xs">
              Desenvolvendo o futuro da web, uma linha de código por vez. Focado
              em performance, acessibilidade e experiência do usuário.
            </p>
            <div className="flex gap-4">
              <a
                href={links.github}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center 
                  hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]
                  transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center 
                  hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]
                  transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center 
                  hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]
                  transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href={links.github} className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href={links.linkedin} className="hover:text-primary transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href={links.twitterx} className="hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href={links.whatsapp} className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Licença
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center">
            Feito com React <br /> por Carlos
          </p>
        </div>
      </PageContainer>
    </footer>
  );
}
