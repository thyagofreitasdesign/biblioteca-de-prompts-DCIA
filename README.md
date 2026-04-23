# DCIA Prompt Vault

Base pronta para Vercel usando Next.js App Router e conteúdo em Markdown.

## Estrutura

- `content/prompts/*.md`: cada prompt é um arquivo.
- `lib/prompts.js`: leitura dos arquivos e geração de filtros.
- `app/page.js`: home da biblioteca.
- `app/prompts/[slug]/page.js`: página individual do prompt.
- `app/api/prompts/route.js`: endpoint JSON.

## Como rodar

```bash
npm install
npm run dev
```

## Como subir na Vercel

1. Suba esta pasta para um repositório no GitHub.
2. Importe o repositório na Vercel.
3. Framework preset: Next.js.
4. Build command: `next build`.
5. Output: padrão da Vercel.

## Schema frontmatter

```md
---
title: Cristo Rei em gravura sacra
slug: cristo-rei-gravura-sacra
description: Retrato devocional com linguagem de gravura sacra e atmosfera cinematográfica.
level: intermediário
tool: ChatGPT + gerador de imagem
updatedAt: 2026-04-22
categories:
  - Cristo e mistérios
subcategories:
  - Cristo, rei e glória
styles:
  - Gravura sacra
  - Hiper-realismo cinematográfico
lighting:
  - Low key
  - Dourado sacro
techniques:
  - Prompt com imagem base
  - Preservar identidade
applications:
  - Carrossel
  - Post devocional
liturgicalSeasons:
  - Quaresma
  - Semana Santa
---

Seu prompt aqui.
```
