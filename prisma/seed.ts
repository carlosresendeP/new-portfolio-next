import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const connectionString = process.env.DATABASE_URL as string;
const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Iniciando seed...");

  //admin ja cadastardo no banco
  const admin = await prisma.user.findUnique({
    where: { email: "carlosresende.paula@gmail.com" },
  });

  if (!admin) {
    throw new Error("Admin não encontrado");
  }

  console.log("✅ Buscar:", admin);

  // ==========================
  // 🚀 PROJETOS
  // ==========================
  // Limpar projetos existentes para evitar duplicatas se rodar múltiplas vezes sem limpar o banco
  await prisma.project.deleteMany({ where: { userId: admin.id } });

  await prisma.project.createMany({
    data: [
      {
        title: "Dr. Marina Silva - Neuropsicóloga",
        tags: ["html", "Css", "JavaScript", "Responsive"],
        description:
          "Website clínico para profissional de saúde mental com foco em apresentação de serviços, depoimentos e navegação clara.",
        imageUrl: "/assets/projeto29.png",
        liveUrl: "https://carlosresendep.github.io/website-psicologo-1/",
        gitUrl: "https://github.com/carlosresendeP/website-psicologo-1",
        category: "frontend",
        technologies: ["HTML", "Css", "JavaScript"],
        userId: admin.id,
      },
      {
        title: "Tradição Vidros",
        tags: ["html", "Css", "JavaScript", "Responsive", "Bootstrap"],
        description:
          "Website institucional para empresa de vidros e espelhos, com foco em apresentação de serviços e portfólio de projetos realizados.",
        imageUrl: "/assets/projeto30.png",
        liveUrl: "https://carlosresendep.github.io/tradicao-vidros/",
        gitUrl: "https://github.com/carlosresendeP/tradicao-vidros",
        category: "frontend",
        technologies: ["HTML", "Css", "JavaScript", "Bootstrap"],
        userId: admin.id,
      },
      {
        title: "Performance Master",
        tags: ["React", "Styled-Components", "n8n", "IA"],
        description:
          "Uma landing page completa e profissional para a academia Performance Master, desenvolvida com React, Vite e Styled Components, integrada com chatbot inteligente com n8n.",
        imageUrl: "/assets/projeto31.png",
        liveUrl: "https://performace-master-academia.vercel.app/",
        gitUrl: "https://github.com/carlosresendeP/performace-master-academia",
        category: "frontend",
        technologies: [
          "React",
          "Vite",
          "Styled Components",
          "n8n",
          "JavaScript",
        ],
        userId: admin.id,
      },
      {
        title: "Confeitaria Doce Encanto",
        tags: ["React", "html", "Css", "Styled-Components", "JavaScript"],
        description:
          "Doce Encanto é uma confeitaria fictícia, e esta landing page foi desenvolvida para fins educacionais, com o objetivo de praticar e aprimorar minhas habilidades em desenvolvimento web front-end.",
        imageUrl: "/assets/projeto32.png",
        liveUrl: "https://doce-encanto-doceria.vercel.app/",
        gitUrl: "https://github.com/carlosresendeP/Doce-Encanto-doceria",
        category: "frontend",
        technologies: ["React", "Styled Components", "JavaScript"],
        userId: admin.id,
      },
      {
        title: "Barber Elite",
        tags: ["React", "html", "Css", "Styled-Components", "JavaScript"],
        description:
          "O Barber Elite é um site moderno e responsivo desenvolvido para uma barbearia premium, com foco em experiência visual e navegação fluida. Criado com React, Styled Components e JavaScript, o projeto combina um design elegante com animações sutis e uma interface intuitiva.O layout foi pensado para transmitir sofisticação e profissionalismo, destacando serviços, horários e a identidade da marca.",
        imageUrl: "/assets/projeto33.png",
        liveUrl: "https://barber-plus-pied.vercel.app",
        gitUrl: "https://github.com/carlosresendeP/Barber-elite",
        category: "frontend",
        technologies: ["React", "Styled Components", "JavaScript"],
        userId: admin.id,
      },
      {
        title: "Net Gestão",
        tags: [
          "React",
          "Next.js",
          "tailwindcss",
          "TypeScript",
          "Banco de Dados",
          "mongoDB",
        ],
        description:
          "O Net Gestão é uma plataforma web desenvolvida para facilitar a gestão de grupos de networking profissional. O sistema permite:Cadastro controlado: Processo de aprovação de novos membros com sistema de convites, Dashboard de membros: Área exclusiva para acompanhamento de atividades, Sistema de indicações: Geração e acompanhamento de oportunidades de negócio entre membros, Gestão administrativa: Painel para aprovação de membros e controle da rede",
        imageUrl: "/assets/projeto34.png",
        liveUrl: "https://net-gestao.vercel.app/",
        gitUrl: "https://github.com/carlosresendeP/net-gestao",
        category: "fullstack",
        technologies: [
          "React",
          "Next.js",
          "tailwindcss",
          "TypeScript",
          "Banco de Dados",
          "mongoDB",
        ],
        userId: admin.id,
      },
      {
        title: "Site de Nutricionista - Clarisse Nutri",
        tags: ["React", "Next.js", "tailwindcss", "TypeScript"],
        description:
          "Site institucional para nutricionista, com foco em apresentação de serviços, depoimentos e contato.",
        imageUrl: "/assets/projeto35.png",
        liveUrl: "https://clarisse-nutri.vercel.app/",
        gitUrl: "https://github.com/carlosresendeP/clarisse-nutri",
        category: "frontend",
        technologies: ["React", "Next.js", "tailwindcss", "TypeScript"],
        userId: admin.id,
      },
      {
        title: "Site de Nutricionista - Dr.Ana Barbosa",
        tags: ["React", "Next.js", "tailwindcss", "TypeScript"],
        description:
          "Site institucional para nutricionista, com foco em apresentação de serviços, depoimentos e contato.",
        imageUrl: "/assets/projeto36.png",
        liveUrl: "https://psi-dr-ana.vercel.app/",
        gitUrl: "https://github.com/carlosresendeP/psi-dr-ana",
        category: "frontend",
        technologies: ["React", "Next.js", "tailwindcss", "TypeScript"],
        userId: admin.id,
      },
      {
        title: "Aparatus Mobile - SaaS para Agendamentos de Barbearias",
        tags: [
          "React",
          "Next.js",
          "tailwindcss",
          "TypeScript",
          "Mobile First",
          "SaaS",
        ],
        description:
          "Um projeto SaaS para agencia de barbearias, com foco em agendamentos e pagamen",
        imageUrl: "/assets/projeto37.png",
        liveUrl: "https://aparatus-nu.vercel.app",
        gitUrl: "https://github.com/carlosresendeP/aparatus",
        category: "fullstack",
        technologies: ["React", "Next.js", "tailwindcss", "TypeScript"],
        userId: admin.id,
      },
    ],
  });

  console.log("✅ Projetos criados com sucesso");
}

main()
  .catch((error) => {
    console.error("❌ Erro ao rodar seed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
