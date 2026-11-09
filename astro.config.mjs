import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { bairros } from "./src/data/bairros.ts";

// SITE/BASE permitem publicar numa subpasta (ex.: GitHub Pages) sem mudar o código.
const site = process.env.SITE ?? "https://lambeijospetshopbh.com.br";
const base = process.env.BASE ?? "/";

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  redirects: Object.fromEntries(
    bairros.map((b) => [`/${b.slugAntigo}`, `${base.replace(/\/$/, "")}/bairros-atendidos/`]),
  ),
  integrations: [sitemap({ filter: (page) => !/\/pet-shop-[^/]+-bh\/$/.test(page) })],
  vite: { plugins: [tailwindcss()] },
});
