# Maschio & Soares Advogados

Site institucional do escritório Maschio & Soares Advogados, construído em
Next.js (App Router) com TypeScript e Tailwind CSS.

## Stack

- Next.js 16 (App Router, geração estática)
- TypeScript
- Tailwind CSS v4
- Fontes: Fraunces (display), Space Mono (navegação/labels), Inter (corpo)

## Estrutura

```
src/
  app/
    page.tsx                       → Página inicial
    atuacao/page.tsx                → Áreas de atuação
    contato/page.tsx                → Contato (com formulário)
    profissionais/page.tsx          → Listagem da equipe
    profissionais/[slug]/page.tsx   → Página individual de cada advogado
    publicacoes/page.tsx            → Listagem de publicações/artigos
    publicacoes/[slug]/page.tsx     → Artigo individual
    responsabilidade-social/page.tsx
    not-found.tsx                   → Página 404
  components/                       → Header, Footer, Button, Reveal, ContactForm, ícones
  lib/content.tsx                   → Conteúdo do site (equipe, áreas, posts) — editar aqui
public/images/                      → Imagens (stock, livre de direitos via Unsplash)
```

## Editando o conteúdo

A maior parte dos textos (nomes da equipe, bios, áreas de atuação,
publicações) está centralizada em `src/lib/content.tsx`. Para atualizar a
equipe com os profissionais reais do escritório, edite o array `TEAM` nesse
arquivo e troque as fotos em `public/images/team-*.jpg`.

## Formulário de contato

O formulário em `src/components/ContactForm.tsx` ainda **não está conectado
a nenhum serviço de envio de e-mail**. Atualmente ele apenas simula o envio.
Para receber as mensagens de fato, integre com um serviço como Resend,
Formspree, ou crie uma rota `/api/contato` que envie o e-mail.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Deploy no Vercel

1. Suba este projeto para um repositório no GitHub/GitLab/Bitbucket.
2. Em https://vercel.com, clique em "Add New Project" e importe o
   repositório.
3. O Vercel detecta automaticamente que é um projeto Next.js — não é
   necessário configurar nada manualmente.
4. Clique em "Deploy".

Alternativamente, via CLI:

```bash
npm install -g vercel
vercel
```
