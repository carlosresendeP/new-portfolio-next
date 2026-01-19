export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  techs: string[];
  category: string;
  createdAt?: string;
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Aparatus Mobile - SaaS para Agendamentos de Barbearias",
    description:
      "Plataforma completa para gestão de barbearias, incluindo agendamento online, gestão financeira e fidelidade.",
    image: "/images/mockup-aparatus.png",
    link: "https://aparatus.app",
    github: "#",
    techs: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "Full Stack",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "2",
    title: "Site de Nutricionista - Dr.Ana Barbosa",
    description:
      "Site institucional focado em conversão para agendamentos de consultas de nutrição esportiva e clínica.",
    image: "/images/mockup-drana.png",
    link: "https://anabarbosa.com.br",
    github: "#",
    techs: ["React", "Next.js", "Framer Motion"],
    category: "Frontend",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "3",
    title: "Site de Nutricionista - Clarisse Nutri",
    description:
      "Landing page otimizada para captação de leads e divulgação de serviços de nutrição comportamental.",
    image: "/images/mockup-clarisse-nutri.png",
    link: "https://clarissenutri.com",
    github: "#",
    techs: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "4",
    title: "Net Gestão",
    description:
      "Sistema de gestão empresarial (ERP) simplificado para pequenas empresas de serviços.",
    image: "/images/mockup-netGestao.png",
    link: "#",
    github: "#",
    techs: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "5",
    title: "Barber Elite",
    description:
      "Aplicativo mobile para clientes de barbearias premium agendarem horários e comprarem produtos.",
    image: "/images/mokup-BarberElite.png",
    link: "#",
    github: "#",
    techs: ["React Native", "Firebase"],
    category: "Mobile",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "6",
    title: "Confeitaria Doce Encanto",
    description:
      "E-commerce para encomendas de bolos e doces personalizados, com integração de pagamentos.",
    image: "/images/Mockup-doce-encanto.png",
    link: "#",
    github: "#",
    techs: ["Next.js", "Stripe", "Sanity CMS"],
    category: "E-commerce",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "7",
    title: "DevBurger Delivery",
    description:
      "App de delivery completo com rastreamento de pedidos em tempo real e painel administrativo.",
    image: "/images/Mockup-DevBurger.png",
    link: "#",
    github: "#",
    techs: ["Vue.js", "D3.js", "Express"],
    category: "Full Stack",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "8",
    title: "Tradição Vidros",
    description:
      "Site corporativo para vidraçaria com catálogo de serviços e formulário de orçamento.",
    image: "/images/mockup-tradicaoVidros.png",
    link: "https://tradicaovidros.com.br",
    github: "#",
    techs: ["HTML", "Sass", "JavaScript"],
    category: "Website",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "9",
    title: "Dr. Marina Silva - Neuropsicóloga",
    description:
      "Site profissional para psicóloga com blog integrado e área de agendamento online.",
    image: "/images/mockup-drmarina.png",
    link: "#",
    github: "#",
    techs: ["WordPress", "PHP"],
    category: "Website",
    createdAt: "2025-12-01T00:00:00Z",
  },
];
