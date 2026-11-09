import loja from "../data/loja.json";

export { loja };

export function url(path = "/"): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function whatsapp(mensagem: string): string {
  return `https://wa.me/${loja.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export const enderecoCompleto = `${loja.endereco.rua}, ${loja.endereco.bairro}, ${loja.endereco.cidade} - ${loja.endereco.uf}, ${loja.endereco.cep}`;

export const rotaGoogle = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(enderecoCompleto)}`;
export const rotaWaze = `https://www.waze.com/ul?ll=${loja.geo.lat},${loja.geo.lng}&navigate=yes`;

const nomesDias: Record<string, string> = {
  Mo: "segunda", Tu: "terça", We: "quarta", Th: "quinta", Fr: "sexta", Sa: "sábado", Su: "domingo",
};

/** "08:00" -> "8h", "17:30" -> "17h30" */
export const hora = (hhmm: string) => `${Number(hhmm.slice(0, 2))}h${hhmm.slice(3) === "00" ? "" : hhmm.slice(3)}`;

const capitalizar = (t: string) => t[0].toUpperCase() + t.slice(1);

export const horarioLegivel = [
  ...loja.horario.map((h) => ({
    dias: capitalizar(h.dias.length > 1 ? `${nomesDias[h.dias[0]]} a ${nomesDias[h.dias.at(-1)!]}` : nomesDias[h.dias[0]]),
    horas: `${hora(h.abre)} às ${hora(h.fecha)}`,
  })),
  { dias: "Domingo", horas: "Fechado" },
];
