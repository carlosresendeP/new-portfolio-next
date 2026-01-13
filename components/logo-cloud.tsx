import {
  PageSection,
  PageContainer,
  PageSectionTitle,
} from "@/components/ui/page";
import { Cpu, Globe, Layers, Command, Zap, Box, Activity } from "lucide-react";

const companies = [
  { name: "Acme Corp", icon: Box },
  { name: "Global Tech", icon: Globe },
  { name: "FastLayers", icon: Layers },
  { name: "Command.io", icon: Command },
  { name: "ZapEnergy", icon: Zap },
  { name: "NextLevel", icon: Activity },
  { name: "FutureCpu", icon: Cpu },
];

export default function LogoCloud() {
  return (
    <PageSection
      className="border-y border-border/50 bg-background/98 backdrop-blur-sm py-12"
      aria-label="Habilidades"
    >
      <PageContainer>
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Habilidades
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110 cursor-pointer"
            >
              <company.icon className="w-8 h-8 md:w-10 md:h-10 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-lg md:text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors hidden md:block">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </PageContainer>
    </PageSection>
  );
}
