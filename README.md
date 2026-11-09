# lambeijospetshopbh.com.br

Site do Pet Shop Lambeijos (Castelo, Belo Horizonte), feito com [Astro](https://astro.build) e Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev        # desenvolvimento em http://localhost:4321/
npm run build      # gera o site estático em dist/
npm run preview    # serve o dist/ em http://localhost:4321/
```

## Onde editar

| O quê | Arquivo |
|---|---|
| Endereço, telefone, horário, nota e depoimentos do Google | `src/data/loja.json` |
| Textos, perguntas frequentes e imagens de cada serviço | `src/data/servicos.ts` |
| Bairros atendidos (e redirecionamentos das páginas antigas) | `src/data/bairros.ts` |
| Home | `src/pages/index.astro` |
| Cores e fontes | `src/styles/global.css` |
| Imagens | `src/assets/img/` |

## Publicar em subpasta

Por padrão o site é gerado para `https://lambeijospetshopbh.com.br/`. Para outra URL ou subpasta (ex.: GitHub Pages):

```bash
SITE=https://usuario.github.io BASE=/lambeijospetshopbh/ npm run build
```
