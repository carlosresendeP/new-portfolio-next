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
    link: "https://aparatus-nu.vercel.app",
    github: "https://github.com/carlosresendeP/aparatus",
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
    link: "https://psi-dr-ana.vercel.app/",
    github: "https://github.com/carlosresendeP/psi-dr-ana",
    techs: ["React", "Next.js", "Framer Motion"],
    category: "Frontend",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "3",
    title: "Site de Nutricionista - Clarisse Nutri",
    description:
      "Site institucional para nutricionista, com foco em apresentação de serviços, depoimentos e contato.",
    image: "/images/mockup-clarisse-nutri.png",
    link: "https://clarisse-nutri.vercel.app/",
    github: "https://github.com/carlosresendeP/clarisse-nutri",
    techs: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "4",
    title: "Net Gestão",
    description:
      "O Net Gestão é uma plataforma web desenvolvida para facilitar a gestão de grupos de networking profissional. O sistema permite: Cadastro controlado, Dashboard de membros, Sistema de indicações e Gestão administrativa.",
    image: "/images/mockup-netGestao.png",
    link: "https://net-gestao.vercel.app/",
    github: "https://github.com/carlosresendeP/net-gestao",
    techs: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "5",
    title: "Barber Elite",
    description:
      "O Barber Elite é um site moderno e responsivo desenvolvido para uma barbearia premium, com foco em experiência visual e navegação fluida.",
    image: "/images/mokup-BarberElite.png",
    link: "https://barber-plus-pied.vercel.app",
    github: "https://github.com/carlosresendeP/Barber-elite",
    techs: ["React Native", "Firebase"],
    category: "Mobile",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "6",
    title: "Confeitaria Doce Encanto",
    description:
      "Doce Encanto é uma confeitaria fictícia, e esta landing page foi desenvolvida para fins educacionais.",
    image: "/images/Mockup-doce-encanto.png",
    link: "https://doce-encanto-doceria.vercel.app/",
    github: "https://github.com/carlosresendeP/Doce-Encanto-doceria",
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
      "Website institucional para empresa de vidros e espelhos, com foco em apresentação de serviços e portfólio de projetos realizados.",
    image: "/images/mockup-tradicaoVidros.png",
    link: "https://carlosresendep.github.io/tradicao-vidros/",
    github: "https://github.com/carlosresendeP/tradicao-vidros",
    techs: ["HTML", "Sass", "JavaScript"],
    category: "Website",
    createdAt: "2025-12-01T00:00:00Z",
  },
  {
    id: "9",
    title: "Dr. Marina Silva - Neuropsicóloga",
    description:
      "Website clínico para profissional de saúde mental com foco em apresentação de serviços, depoimentos e navegação clara.",
    image: "/images/mockup-drmarina.png",
    link: "https://carlosresendep.github.io/website-psicologo-1/",
    github: "https://github.com/carlosresendeP/website-psicologo-1",
    techs: ["WordPress", "PHP"],
    category: "Website",
    createdAt: "2025-12-01T00:00:00Z",
  },
];
