import { Button } from "@/components/ui/button";
import { FaCode } from "react-icons/fa";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
  >
    {children}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
  </a>
);

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 animate-fade-in-up">
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <FaCode className="size-6 text-primary transition-transform group-hover:rotate-12" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/80">
              DevPortfolio
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <NavLink href="#inicio">Início</NavLink>
            </li>
            <li>
              <NavLink href="#sobre">Sobre</NavLink>
            </li>
            <li>
              <NavLink href="#habilidades">Habilidades</NavLink>
            </li>
            <li>
              <NavLink href="#projetos">Projetos</NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button className="btn-neon-hover bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 rounded-xl px-6">
              Vamos Conversar
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
