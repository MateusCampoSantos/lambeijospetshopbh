import type { ImageMetadata } from "astro";
import banho from "../assets/img/banho.webp";
import saude from "../assets/img/saude.webp";
import gatoRacao from "../assets/img/gato-racao.webp";
import pelagem from "../assets/img/pelagem.webp";

export interface Servico {
  slug: string;
  nome: string;
  emoji: string;
  resumo: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  imagem: ImageMetadata;
  imagemAlt: string;
  paragrafos: string[];
  destaques: { titulo: string; texto: string }[];
  passos: { titulo: string; texto: string }[];
  faq: { pergunta: string; resposta: string }[];
  mensagem: string;
  cta: string;
}

export const servicos: Servico[] = [
  {
    slug: "banho-e-tosa-castelo-bh",
    nome: "Banho e tosa",
    emoji: "🛁",
    resumo: "Banho e tosa para cães e gatos, respeitando o porte e a pelagem de cada um.",
    seoTitle: "Banho e Tosa no Castelo, BH | Lambeijos Pet Shop",
    seoDescription:
      "Banho e tosa para cães e gatos no bairro Castelo, em BH. Equipe carinhosa, nota 4,7 no Google. Agende pelo WhatsApp em menos de 1 minuto.",
    h1: "Banho e tosa com carinho de verdade",
    lead: "Seu pet volta cheiroso, tranquilo e bem cuidado. Banho e tosa é o assunto mais citado nas nossas avaliações do Google.",
    imagem: banho,
    imagemAlt: "Cachorro coberto de espuma durante o banho no Lambeijos",
    paragrafos: [
      "Cada pet tem um jeito. Antes de marcar, a equipe pergunta o porte, o tipo de pelo e se existe alguma sensibilidade, para planejar o banho certo e evitar surpresas.",
      "Pelos curtos, longos, volumosos ou com nós pedem cuidados diferentes. Se o seu pet tem pele sensível ou alguma recomendação do veterinário, é só avisar no agendamento.",
      "Atendemos cães e gatos. Tem cliente que traz o pet desde 2018, e muitos dizem que o pet fica feliz só de ouvir o nome Lambeijos.",
    ],
    destaques: [
      { titulo: "Cães e gatos", texto: "Filhotes, adultos e idosos." },
      { titulo: "Cada pelagem", texto: "Produtos e técnica de acordo com o pelo." },
      { titulo: "Sem pressa", texto: "Atenção individual, sem estresse." },
    ],
    passos: [
      { titulo: "Conte sobre o pet", texto: "Use o agendador abaixo: porte, pelagem e serviço." },
      { titulo: "Confirme o horário", texto: "A equipe responde no WhatsApp com valor e agenda." },
      { titulo: "Traga seu pet", texto: "É só vir à loja no Castelo no horário combinado." },
    ],
    faq: [
      {
        pergunta: "Quanto custa o banho e tosa?",
        resposta:
          "O valor depende do porte, da pelagem e do serviço escolhido (só banho ou banho e tosa). Mande essas informações pelo WhatsApp e a equipe passa o valor.",
      },
      {
        pergunta: "Vocês dão banho em gatos?",
        resposta: "Sim. Atendemos cães e gatos. Avise no agendamento se o gato costuma ficar agitado.",
      },
      {
        pergunta: "Devo avisar se o pet tem pele sensível?",
        resposta:
          "Sim. Informe sensibilidades e recomendações do veterinário ao agendar, para a equipe preparar o cuidado adequado.",
      },
      {
        pergunta: "Preciso agendar?",
        resposta:
          "Recomendamos agendar pelo WhatsApp para garantir o horário e não precisar esperar na loja.",
      },
    ],
    mensagem: "Olá! Vim pelo site e quero agendar banho e tosa.",
    cta: "Agendar banho e tosa",
  },
  {
    slug: "atendimento-veterinario-castelo-bh",
    nome: "Veterinário",
    emoji: "🩺",
    resumo: "Consultas, exames e vacinas para acompanhar a saúde do seu pet de perto.",
    seoTitle: "Veterinário no Castelo, BH: Consultas e Vacinas | Lambeijos",
    seoDescription:
      "Atendimento veterinário no bairro Castelo, BH: consultas, exames e vacinação para cães e gatos. Consulte a agenda pelo WhatsApp.",
    h1: "Atendimento veterinário perto de você",
    lead: "Consultas, exames e vacinas para cães e gatos, na mesma loja onde seu pet já toma banho.",
    imagem: saude,
    imagemAlt: "Cão e gato com estetoscópio, representando o atendimento veterinário",
    paragrafos: [
      "A consulta é o momento de tirar dúvidas sobre a saúde do seu pet com calma. Ao agendar, conte o motivo da visita e se já existe algum acompanhamento.",
      "Para exames e vacinação, pergunte pela disponibilidade e pelas orientações de preparo. Carteirinha de vacinação e resultados anteriores ajudam bastante.",
      "A equipe organiza a agenda e orienta sobre a visita. Avaliação, prevenção e tratamento são sempre definidos pelo veterinário.",
    ],
    destaques: [
      { titulo: "Consultas", texto: "Avaliação clínica e acompanhamento." },
      { titulo: "Exames", texto: "Consulte a disponibilidade e o preparo." },
      { titulo: "Vacinas", texto: "Mantenha a carteirinha em dia." },
    ],
    passos: [
      { titulo: "Explique o motivo", texto: "Consulta, exame ou vacina, espécie e idade do pet." },
      { titulo: "Confirme a agenda", texto: "A equipe informa o horário e o que levar." },
      { titulo: "Venha à loja", texto: "Traga a carteirinha e exames anteriores, se tiver." },
    ],
    faq: [
      {
        pergunta: "Como marcar uma consulta veterinária?",
        resposta:
          "Fale pelo WhatsApp, explique o motivo do atendimento e aguarde a confirmação do horário pela equipe.",
      },
      {
        pergunta: "O que devo levar na consulta?",
        resposta:
          "A carteirinha de vacinação, resultados de exames anteriores e informações sobre medicamentos em uso, se houver.",
      },
      {
        pergunta: "Vocês aplicam vacinas?",
        resposta:
          "Sim. Pergunte pelo WhatsApp quais vacinas estão disponíveis e leve a carteirinha do pet no dia.",
      },
    ],
    mensagem: "Olá! Vim pelo site e quero marcar um atendimento veterinário.",
    cta: "Marcar consulta",
  },
  {
    slug: "racoes-e-nutricao-castelo-bh",
    nome: "Rações e nutrição",
    emoji: "🥣",
    resumo: "Quatree, PremieR e Fórmula Natural, além de ração a granel e entrega pelo WhatsApp.",
    seoTitle: "Rações no Castelo, BH: PremieR, Quatree e Fórmula Natural | Lambeijos",
    seoDescription:
      "Rações para cães e gatos no Castelo, BH: PremieR, Quatree, Fórmula Natural e ração a granel. Consulte o estoque e peça entrega pelo WhatsApp.",
    h1: "Ração boa, do jeito que seu pet gosta",
    lead: "Marcas de confiança, ração a granel e entrega pelo WhatsApp. Sem precisar sair de casa.",
    imagem: gatoRacao,
    imagemAlt: "Gato ao lado de uma tigela de ração",
    paragrafos: [
      "Trabalhamos com PremieR, Quatree e Fórmula Natural para cães e gatos de todas as fases e portes. Também vendemos ração a granel, ótima para experimentar uma linha nova.",
      "Para consultar, mande a marca, a linha e o tamanho da embalagem, ou simplesmente uma foto da frente do pacote. A equipe confirma o estoque e o valor.",
      "Se o seu pet segue uma dieta indicada pelo veterinário, informe o nome exato do alimento. Mudanças em dietas específicas devem ser combinadas com ele.",
    ],
    destaques: [
      { titulo: "Marcas de confiança", texto: "PremieR, Quatree e Fórmula Natural." },
      { titulo: "Ração a granel", texto: "Compre a quantidade que precisar." },
      { titulo: "Delivery", texto: "Peça pelo WhatsApp e receba em casa." },
    ],
    passos: [
      { titulo: "Mande uma foto", texto: "Da embalagem que seu pet já usa, ou conte o que procura." },
      { titulo: "Confirme estoque", texto: "A equipe informa disponibilidade e valor." },
      { titulo: "Retire ou receba", texto: "Busque na loja ou peça a entrega." },
    ],
    faq: [
      {
        pergunta: "Quais marcas de ração vocês vendem?",
        resposta:
          "PremieR, Quatree e Fórmula Natural, em linhas para cães e gatos. Consulte a linha e o tamanho desejados pelo WhatsApp.",
      },
      {
        pergunta: "Vocês vendem ração a granel?",
        resposta: "Sim. Pergunte pelo WhatsApp quais rações estão disponíveis a granel.",
      },
      {
        pergunta: "Vocês fazem entrega?",
        resposta:
          "Sim, fazemos delivery. Faça o pedido pelo WhatsApp e confirme a entrega para o seu endereço.",
      },
      {
        pergunta: "Posso comprar pela internet?",
        resposta:
          "Sim. Na loja virtual Lambeijos você encontra rações, petiscos, higiene e brinquedos, com entrega conforme o seu CEP.",
      },
    ],
    mensagem: "Olá! Vim pelo site e quero consultar uma ração.",
    cta: "Consultar ração",
  },
  {
    slug: "medicamentos-pet-castelo-bh",
    nome: "Medicamentos pet",
    emoji: "💊",
    resumo: "Consulte o medicamento da receita do seu pet antes de sair de casa.",
    seoTitle: "Farmácia Pet no Castelo, BH: Medicamentos Veterinários | Lambeijos",
    seoDescription:
      "Medicamentos veterinários no Castelo, BH. Envie o nome do produto da receita pelo WhatsApp e confirme a disponibilidade antes de vir.",
    h1: "Medicamentos pet sem perder viagem",
    lead: "Mande o nome que está na receita e confirmamos se temos o produto antes de você sair de casa.",
    imagem: pelagem,
    imagemAlt: "Cachorro recebendo cuidados no Pet Shop Lambeijos",
    paragrafos: [
      "Para consultar um medicamento, envie o nome completo, a concentração e a apresentação que estão na receita, além da quantidade. Uma foto da receita também funciona.",
      "Apresente a prescrição quando ela for necessária e siga sempre a orientação do veterinário que acompanha o seu pet.",
      "Se o produto não estiver disponível, fale com o veterinário antes de trocar por outro. Versões parecidas nem sempre são equivalentes.",
    ],
    destaques: [
      { titulo: "Linha veterinária", texto: "Medicamentos e cuidados para pets." },
      { titulo: "Consulta rápida", texto: "Confirme o estoque pelo WhatsApp." },
      { titulo: "Com segurança", texto: "Sempre de acordo com a receita." },
    ],
    passos: [
      { titulo: "Envie a receita", texto: "Nome, concentração, apresentação e quantidade." },
      { titulo: "Confirme o estoque", texto: "A equipe verifica e responde." },
      { titulo: "Retire ou receba", texto: "Busque na loja ou peça a entrega." },
    ],
    faq: [
      {
        pergunta: "Como consultar um medicamento?",
        resposta:
          "Envie pelo WhatsApp o nome, a concentração, a apresentação e a quantidade, ou uma foto legível da receita.",
      },
      {
        pergunta: "Preciso de receita?",
        resposta:
          "Depende do medicamento. Pergunte à equipe e tenha a prescrição em mãos para conferir o produto indicado.",
      },
      {
        pergunta: "Se não tiver o medicamento, posso levar outro?",
        resposta:
          "Não troque por conta própria. Consulte o veterinário responsável antes de qualquer substituição.",
      },
    ],
    mensagem: "Olá! Vim pelo site e quero consultar um medicamento.",
    cta: "Consultar medicamento",
  },
];
