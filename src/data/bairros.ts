export interface Bairro {
  nome: string;
  slugAntigo: string;
}

const nomes: [string, string][] = [
  ["Manacás", "manacas"],
  ["Alípio de Melo", "alipio-de-melo"],
  ["Ouro Preto", "ouro-preto"],
  ["Paquetá", "paqueta"],
  ["Serrano", "serrano"],
  ["Jardim Alvorada", "jardim-alvorada"],
  ["Santa Terezinha", "santa-terezinha"],
  ["Jardim São José", "jardim-sao-jose"],
  ["Inconfidência", "inconfidencia"],
  ["Glória", "gloria"],
  ["Novo Glória", "novo-gloria"],
  ["São Salvador", "sao-salvador"],
  ["Coqueiros", "coqueiros"],
  ["Pindorama", "pindorama"],
  ["Dom Bosco", "dom-bosco"],
  ["Engenho Nogueira", "engenho-nogueira"],
  ["São José", "sao-jose"],
  ["Bandeirantes", "bandeirantes"],
  ["Urca", "urca"],
  ["Itatiaia", "itatiaia"],
];

export const bairros: Bairro[] = nomes.map(([nome, slug]) => ({
  nome,
  slugAntigo: `pet-shop-${slug}-bh`,
}));
