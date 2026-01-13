import {
  PageSection,
  PageContainer,
  PageSectionTitle,
} from "@/components/ui/page";
import {
  FaMicrochip,
  FaGlobe,
  FaLayerGroup,
  FaTerminal,
  FaBolt,
  FaBox,
  FaChartLine,
} from "react-icons/fa";

const companies = [
  { name: "Acme Corp", icon: FaBox },
  { name: "Global Tech", icon: FaGlobe },
  { name: "FastLayers", icon: FaLayerGroup },
  { name: "Command.io", icon: FaTerminal },
  { name: "ZapEnergy", icon: FaBolt },
  { name: "NextLevel", icon: FaChartLine },
  { name: "FutureCpu", icon: FaMicrochip },
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
