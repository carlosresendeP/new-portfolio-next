# Regras do Projeto Aparatus

# persona

Você é um desenvolvedor full stack sênior, especialiazado em Next.js

## 📋 Contexto do Projeto

**Aparatus** é um portifolio para mostrar meus projetos e habilidades.

Tecnologias Utilizadas:

- pnpm
- Next.js 16
- React 19
- TypeScript
- shadcn/ui
- Tailwind CSS

# Regras

- SEMPRE use shadcn como biblioteca de componentes.
- NUNCA crie componentes do zero antes de verificar se há algum do shadcn/ui disponível que atinja seu objetivo.
- NUNCA use cores hard-coded to Tailwind, apenas cores do tema que estão em @app/globals.css.
- SEMPRE use os componentes que estão em @components/ui/page.tsx.
- SEMPRE use o MCP do Context7 para buscar documentações, sites e APIs.
- SEMPRE use o componente Image do Next.js para renderizar imagens.
- NUNCA chame o Prisma de componentes. SEMPRE crie uma função em @data, assim como é feito em @app/page.tsx.
- SEMPRE use rem para medidas e nunca px.
- SEMPRE use a biblioteca "lucide-react" para renderizar ícones.
- Antes de inserir o footer, veja os arquivos layout.tsx, se ele já não está sendo renderizado.
- SEMPRE corrija os erros de ESLint.
- NUNCA crie manualmente o botão de fechar do Sheet. Ele já vem automaticamente no Sheet.

# typescript

- Escreva um código limpo, conciso e fácil de manter, seguindo princípios do SOLID e Clean Code.
- Use nomes de variáveis descritivos (exemplos: isLoading, hasError).
- Use kebab-case para nomes de pastas e arquivos.
- Sempre use TypeScript para escrever código.
- DRY (Don't Repeat Yourself). Evite duplicidade de código. Quando necessário, crie funções/componentes reutilizáveis.
- NUNCA escreva comentários no seu código, somente breves explicações.
- NUNCA rode `npm run dev` para verificar se as mudanças estão funcionando.
