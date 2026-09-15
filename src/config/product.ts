/**
 * CONFIGURAÇÃO CENTRALIZADA DO PRODUTO "SABORES SEM FRONTEIRAS"
 * Todas as informações comerciais, textos, preços e URLs podem ser editados aqui.
 */

export interface ProductConfig {
  name: string;
  subtitle: string;
  badge: string;
  headline: string;
  subheadline: string;
  benefitsSummary: string[];
  price: string;
  previousPrice: string;
  hasDiscount: boolean;
  checkoutUrl: string;
  productAccessUrl: string;
  supportUrl: string;
  offerDisclaimer: string;
  downloadUrl: string;
  supportEmail: string;
  copyrightYear: number;
}

export const PRODUCT_DOWNLOAD_URL = "/MesaMundi-120-Receitas-do-Mundo.pdf";
export const SUPPORT_URL = "mailto:suporte@mesamundi.online";

export const PRODUCT_CONFIG: ProductConfig = {
  name: "MesaMundi",
  subtitle: "120 receitas para viajar pelo mundo sem sair da cozinha.",
  badge: "SABORES DO MUNDO NA SUA MESA",
  headline: "120 receitas para viajar pelo mundo sem sair da sua cozinha.",
  subheadline: "Descubra pratos marcantes de 10 tradições culinárias e transforme refeições comuns em experiências que atravessam países, culturas e sabores.",
  benefitsSummary: [
    "Ingredientes + preparo passo a passo",
    "Pratos principais, acompanhamentos e sobremesas",
    "Receitas de diferentes partes do mundo",
    "Acesso digital",
  ],
  // Preço e Condições Comerciais (Edite livremente)
  price: "R$ 47,00",
  previousPrice: "R$ 97,00",
  hasDiscount: true, // Alterne para false se não houver preço anterior promocional
  checkoutUrl: "https://pay.hotmart.com/exemplo", // Insira a URL real do seu checkout
  productAccessUrl: "https://mesamundi.online/acesso", // URL segura de acesso aos membros/conteúdo
  downloadUrl: PRODUCT_DOWNLOAD_URL,
  supportUrl: SUPPORT_URL, // URL ou link direto do suporte
  offerDisclaimer: "Acesso digital imediato • Consulte as condições da oferta",
  supportEmail: "suporte@mesamundi.online",
  copyrightYear: new Date().getFullYear(),
};

/**
 * 10 GRANDES TRADIÇÕES CULINÁRIAS
 */
export interface CuisineItem {
  id: string;
  name: string;
  country: string;
  flag: string;
  description: string;
  dishHighlight: string;
  imageUrl: string;
  tagColor: string;
}

export const CUISINES: CuisineItem[] = [
  {
    id: "italia",
    name: "Cozinha Italiana",
    country: "Itália",
    flag: "🇮🇹",
    description: "Massas frescas artesanais, molhos aromáticos e a arte de transformar poucos ingredientes em obras-primas.",
    dishHighlight: "Massas, risotos e sobremesas clássicas",
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-emerald-900/10 text-emerald-900 border-emerald-800/20",
  },
  {
    id: "franca",
    name: "Cozinha Francesa",
    country: "França",
    flag: "🇫🇷",
    description: "A essência da técnica culinária, caldos apurados, manteigas aromatizadas e a doçaria mais respeitada do mundo.",
    dishHighlight: "Clássicos de bistrô e confeitaria refinada",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-blue-900/10 text-blue-950 border-blue-900/20",
  },
  {
    id: "brasil",
    name: "Cozinha Brasileira",
    country: "Brasil",
    flag: "🇧🇷",
    description: "Cores vivas, afeto, ingredientes nativos, ervas frescas e pratos de panela que acolhem qualquer mesa.",
    dishHighlight: "Moquecas, assados lentos e doces de tacho",
    imageUrl: "https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-amber-900/10 text-amber-950 border-amber-900/20",
  },
  {
    id: "china",
    name: "Cozinha Chinesa",
    country: "China",
    flag: "🇨🇳",
    description: "O equilíbrio milenar entre texturas, wok em fogo alto, molhos umami profundos e aromas inconfundíveis.",
    dishHighlight: "Wok, caldos tradicionais e assados caramelizados",
    imageUrl: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-red-900/10 text-red-950 border-red-900/20",
  },
  {
    id: "espanha",
    name: "Cozinha Espanhola",
    country: "Espanha",
    flag: "🇪🇸",
    description: "Tapas vibrantes, azeites dourados, frutos do mar frescos e o calor das panelas comunitárias de arroz.",
    dishHighlight: "Paellas, tapas e assados mediterrâneos",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-amber-800/10 text-amber-900 border-amber-800/20",
  },
  {
    id: "grecia",
    name: "Cozinha Grega",
    country: "Grécia",
    flag: "🇬🇷",
    description: "Simplicidade mediterrânea: azeite extravirgem, queijo feta, ervas selvagens e limão siciliano em harmonia pura.",
    dishHighlight: "Moussakas, assados com orégano e tortas folhadas",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-sky-900/10 text-sky-950 border-sky-900/20",
  },
  {
    id: "portugal",
    name: "Cozinha Portuguesa",
    country: "Portugal",
    flag: "🇵🇹",
    description: "O respeito ancestral pelas águas do Atlântico, caldos substanciosos, alhos dourados e doçaria conventual.",
    dishHighlight: "Receitas consagradas com bacalhau e doces de ovos",
    imageUrl: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-wine-700/10 text-wine-900 border-wine-700/20",
  },
  {
    id: "alemanha",
    name: "Cozinha Alemã",
    country: "Alemanha",
    flag: "🇩🇪",
    description: "Sabores reconfortantes, marinadas com especiarias, pães de crosta rústica e sobremesas com frutas do bosque.",
    dishHighlight: "Assados suculentos, acompanhamentos e tortas rústicas",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-stone-800/10 text-stone-900 border-stone-800/20",
  },
  {
    id: "siria-libano",
    name: "Cozinha Sírio-Libanesa",
    country: "Síria & Líbano",
    flag: "🇱🇧",
    description: "O encanto do zaatar, sumac, tahine, hortelã fresca e a arte de montar mesas fartas para compartilhar.",
    dishHighlight: "Pastas aveludadas, esfihas, quibes e grelhados aromáticos",
    imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-emerald-900/10 text-emerald-950 border-emerald-900/20",
  },
  {
    id: "eua",
    name: "Cozinha Norte-Americana",
    country: "Estados Unidos",
    flag: "🇺🇸",
    description: "O vigor dos defumados lentos, tortas rústicas de maçã, molhos glaceados e a culinária crioula do Sul.",
    dishHighlight: "Grelhados marcantes, tortas clássicas e marinadas",
    imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    tagColor: "bg-red-900/10 text-red-950 border-red-900/20",
  },
];

/**
 * MINI GALERIA EDITORIAL DO HERO
 */
export const HERO_GALLERY_IMAGES = [
  {
    title: "Massa Fresca Italiana",
    category: "Itália",
    url: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Torta de Frutas Vermelhas",
    category: "França",
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Moqueca com Ervas",
    category: "Brasil",
    url: "https://images.unsplash.com/photo-1594998893017-36147cbcae05?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Salteado com Molho Umami",
    category: "China",
    url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Paella de Frutos do Mar",
    category: "Espanha",
    url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80",
  },
];

/**
 * RECEITAS DE DESTAQUE ("Clássicos que atravessaram fronteiras")
 */
export interface HighlightRecipe {
  id: string;
  name: string;
  cuisine: string;
  flag: string;
  category: string;
  description: string;
  prepTime: string;
  servings: string;
  imageUrl: string;
}

export const HIGHLIGHT_RECIPES: HighlightRecipe[] = [
  {
    id: "floresta-negra",
    name: "Floresta Negra Tradicional",
    cuisine: "Alemanha",
    flag: "🇩🇪",
    category: "Sobremesa",
    description: "Pão de ló de cacau intenso, cerejas marinadas em kirsch e camadas generosas de creme fresco chantilly.",
    prepTime: "60 min",
    servings: "10 porções",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pato-pequim",
    name: "Pato à Pequim Doméstico",
    cuisine: "China",
    flag: "🇨🇳",
    category: "Prato Principal",
    description: "Pele excepcionalmente dourada e crocante, carne macia aromática com cinco especiarias chinesas e molho hoisin caseiro.",
    prepTime: "90 min",
    servings: "6 porções",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "paella",
    name: "Paella Valenciana",
    cuisine: "Espanha",
    flag: "🇪🇸",
    category: "Prato Principal",
    description: "Arroz bomba cozido no caldo artesanal aromatizado com açafrão legítimo, legumes da horta e carnes douradas.",
    prepTime: "50 min",
    servings: "8 porções",
    imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "moussaka",
    name: "Moussaka Grega",
    cuisine: "Grécia",
    flag: "🇬🇷",
    category: "Prato Principal",
    description: "Camadas alternadas de berinjela grelhada, carne temperada com canela e ervas, coberta por um béchamel gratinado com queijo.",
    prepTime: "75 min",
    servings: "8 porções",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "lasanha",
    name: "Lasanha Bolonhesa Clássica",
    cuisine: "Itália",
    flag: "🇮🇹",
    category: "Massas",
    description: "Massa fresca delicada, ragù cozido lentamente por horas em fogo brando, molho branco aveludado e noz-moscada.",
    prepTime: "80 min",
    servings: "8 porções",
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "apple-pie",
    name: "Apple Pie Rústica",
    cuisine: "Estados Unidos",
    flag: "🇺🇸",
    category: "Sobremesa",
    description: "Massa amanteigada quebradiça recheada com maçãs fatiadas, canela perfumada, noz-moscada e um toque de limão.",
    prepTime: "55 min",
    servings: "8 fatias",
    imageUrl: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "bacalhau",
    name: "Bacalhau à Gomes de Sá",
    cuisine: "Portugal",
    flag: "🇵🇹",
    category: "Pescados",
    description: "Lascadas tenras de bacalhau confitadas no azeite extravirgem com batatas laminadas, cebolas douradas, ovos e azeitonas pretas.",
    prepTime: "45 min",
    servings: "6 porções",
    imageUrl: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "homus",
    name: "Homus Cremoso com Páprica",
    cuisine: "Síria & Líbano",
    flag: "🇱🇧",
    category: "Entradas & Meze",
    description: "Grão-de-bico batido com tahine selecionado, suco de limão fresco, alho e finalizado com azeite frutado e páprica defumada.",
    prepTime: "25 min",
    servings: "6 porções",
    imageUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
  },
];

/**
 * O QUE VOCÊ VAI RECEBER (Checklist do Atlas)
 */
export const DELIVERABLES = [
  { title: "120 receitas completas", desc: "Do café ao jantar, divididas em categorias claras e balanceadas." },
  { title: "10 tradições culinárias", desc: "Alemanha, Brasil, China, Espanha, França, Grécia, Itália, EUA, Portugal, Síria e Líbano." },
  { title: "Ingredientes detalhados", desc: "Listas precisas com itens fáceis de encontrar em mercados comuns do Brasil." },
  { title: "Modo de preparo passo a passo", desc: "Instruções objetivas para que o prato dê certo na primeira tentativa." },
  { title: "Rendimento das receitas", desc: "Medidas claras de tempo e porções para planejar qualquer refeição." },
  { title: "Pratos doces e salgados", desc: "Entradas, sopas, carnes, aves, peixes, massas, acompanhamentos e sobremesas." },
  { title: "Receitas para diferentes ocasiões", desc: "De refeições rápidas durante a semana a jantares memoráveis de fim de semana." },
  { title: "Material digital para consultar quando quiser", desc: "Acesse pelo celular, tablet ou computador, ou imprima as suas páginas favoritas." },
];

/**
 * PÁGINAS DO PREVIEW ("Veja como é por dentro")
 */
export interface PreviewPage {
  pageNumber: string;
  title: string;
  tag: string;
  country: string;
  cuisine: string;
  contentHeading: string;
  highlightText: string;
  details: string[];
}

export const PREVIEW_PAGES: PreviewPage[] = [
  {
    pageNumber: "01",
    title: "Capa & Ficha da Receita",
    tag: "Apresentação Editorial",
    country: "Itália",
    cuisine: "Cozinha Italiana",
    contentHeading: "Tagliatelle al Ragù Tradizionale",
    highlightText: "Rendimento: 4 porções • Tempo: 1h40 • Dificuldade: Moderada",
    details: [
      "História e origem da receita na Emilia-Romagna",
      "Foto em alta definição com iluminação natural",
      "Dicas de harmonização com vinho tinto regional",
    ],
  },
  {
    pageNumber: "02",
    title: "Ingredientes & Medidas Precisas",
    tag: "Lista Clara",
    country: "França",
    cuisine: "Cozinha Francesa",
    contentHeading: "Mise en Place Perfeito",
    highlightText: "Ingredientes organizados por etapas de preparo",
    details: [
      "Medidas em gramas e colheres caseiras",
      "Substituições seguras para ingredientes locais",
      "Orientações para seleção de vegetais frescos",
    ],
  },
  {
    pageNumber: "03",
    title: "Modo de Preparo Passo a Passo",
    tag: "Método Descomplicado",
    country: "Espanha",
    cuisine: "Cozinha Espanhola",
    contentHeading: "O Ponto Exato do Socarrat",
    highlightText: "Instruções numeradas e pontos de cocção descritos",
    details: [
      "Como controlar o fogo da panela",
      "O segredo do descanso antes de servir",
      "Erros comuns e como evitá-los facilmente",
    ],
  },
  {
    pageNumber: "04",
    title: "Sobremesas & Confeitaria",
    tag: "Finalização Memorável",
    country: "Alemanha",
    cuisine: "Cozinha Alemã",
    contentHeading: "Apfelstrudel & Floresta Negra",
    highlightText: "Técnicas de massa folhada e montagem de camadas",
    details: [
      "Textura exata das maçãs cozidas com especiarias",
      "Creme chantilly estável sem aditivos químicos",
      "Sugestões elegantes de empratamento",
    ],
  },
];

/**
 * PARA QUEM É
 */
export const TARGET_AUDIENCE = [
  {
    id: 1,
    title: "Para quem gosta de descobrir receitas novas",
    description: "Explore temperos, técnicas e combinações que ampliam o seu repertório e trazem frescor para o dia a dia.",
  },
  {
    id: 2,
    title: "Para quem quer sair da rotina na cozinha",
    description: "Deixe de lado os mesmos pratos repetitivos e transforme o ato de cozinhar em um momento de prazer e descoberta.",
  },
  {
    id: 3,
    title: "Para quem ama culinária internacional",
    description: "Tenha em mãos um guia confiável com as receitas mais marcantes de 10 culturas gastronômicas autênticas.",
  },
  {
    id: 4,
    title: "Para quem gosta de receber família e amigos",
    description: "Surpreenda seus convidados com jantares temáticos inesquecíveis e pratos cheios de história e sabor.",
  },
];

/**
 * QUEBRA DE OBJEÇÕES: 3 PASSOS
 */
export const THREE_STEPS = [
  {
    step: "01",
    title: "Escolha a receita",
    subtitle: "PASSO 01",
    description: "Navegue pelas 10 cozinhas ou filtre pelo tipo de prato que você deseja saborear hoje.",
  },
  {
    step: "02",
    title: "Separe os ingredientes",
    subtitle: "PASSO 02",
    description: "Compre itens acessíveis disponíveis nos mercados locais, com quantidades e medidas exatas.",
  },
  {
    step: "03",
    title: "Leve um novo sabor à mesa",
    subtitle: "PASSO 03",
    description: "Siga as orientações diretas de preparo e sirva uma refeição que viaja pelo mundo.",
  },
];

/**
 * FAQ (Dúvidas Frequentes)
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como recebo o material?",
    answer: "O envio é imediato após a confirmação do pagamento. Você receberá um e-mail com as instruções de acesso ao arquivo digital para download ou leitura direta no seu dispositivo.",
  },
  {
    question: "O conteúdo é digital?",
    answer: "Sim, trata-se de uma coleção digital completa em formato de alta resolução, otimizada para leitura em smartphones, tablets, computadores e também adequada para impressão das páginas que desejar.",
  },
  {
    question: "Quantas receitas estão incluídas?",
    answer: "A coleção conta com 120 receitas completas e balanceadas, distribuídas entre entradas, sopas, pratos principais (carnes, aves, peixes e massas), acompanhamentos e sobremesas tradicionais.",
  },
  {
    question: "Quais tipos de culinária estão presentes?",
    answer: "São 10 tradições culinárias representadas: Cozinha Alemã, Cozinha Brasileira, Cozinha Chinesa, Cozinha Espanhola, Cozinha Francesa, Cozinha Grega, Cozinha Italiana, Cozinha Norte-Americana, Cozinha Portuguesa e Cozinha Sírio-Libanesa.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! A diagramação foi cuidadosamente projetada para uma leitura confortável em qualquer tamanho de tela: smartphones, tablets ou monitores desktop.",
  },
  {
    question: "Preciso ser experiente na cozinha?",
    answer: "Não. Todas as 120 receitas foram elaboradas pensando na rotina de uma cozinha doméstica comum, com linguagem clara, ingredientes acessíveis no Brasil e instruções passo a passo numeradas.",
  },
  {
    question: "Como funciona o pagamento?",
    answer: "O pagamento é processado através de uma plataforma segura de pagamentos com criptografia SSL, com métodos tradicionais como PIX e cartão de crédito conforme disponíveis no checkout.",
  },
  {
    question: "Por quanto tempo tenho acesso?",
    answer: "O acesso ao arquivo digital é seu para sempre. Uma vez feito o download para o seu dispositivo ou aplicativo leitor, você poderá consultar as receitas quando e onde quiser.",
  },
];

/**
 * MODELO DO PEDIDO (PÓS-COMPRA)
 */
export type OrderStatus = 'approved' | 'pending' | 'failed' | 'unknown';

export interface Order {
  id?: string;
  status: OrderStatus;
  customerName?: string;
  customerEmail?: string;
  amount?: string;
  productName?: string;
  format?: string;
  quantity?: number;
}

/**
 * Função utilitária para mascarar e-mail de forma segura
 * Ex: kauan.silva@gmail.com -> kaua•••@gmail.com
 */
export const maskEmail = (email?: string): string => {
  if (!email || !email.includes('@')) return '';
  const [user, domain] = email.split('@');
  if (user.length <= 3) {
    return `${user.slice(0, 1)}•••@${domain}`;
  }
  return `${user.slice(0, 4)}•••@${domain}`;
};

/**
 * PASSOS DA SEÇÃO "O QUE ACONTECE AGORA?"
 */
export const POST_PURCHASE_STEPS = [
  {
    step: "01",
    title: "Confirmação",
    description: "Seu pedido é registrado e o pagamento é confirmado pela plataforma.",
  },
  {
    step: "02",
    title: "Acesso",
    description: "Depois da confirmação, você recebe as instruções para acessar o material.",
  },
  {
    step: "03",
    title: "Escolha uma receita",
    description: "Abra o conteúdo, escolha um país e leve um novo sabor para a sua mesa.",
  },
];

/**
 * FAQ DA PÁGINA DE OBRIGADO (PÓS-COMPRA)
 */
export const POST_PURCHASE_FAQ: FaqItem[] = [
  {
    question: "Quando recebo meu acesso?",
    answer: "Assim que o pagamento for aprovado pela plataforma de pagamentos. Pagamentos via PIX ou cartão de crédito costumam ser aprovados em poucos instantes; boletos bancários podem levar até 3 dias úteis para compensação.",
  },
  {
    question: "Não encontrei o e-mail. O que faço?",
    answer: "Verifique primeiro a sua caixa de Spam, Lixo Eletrônico ou a aba Promoções buscando pelo remetente da plataforma de pagamento ou por 'MesaMundi'. Se ainda não localizar, entre em contato direto com o nosso suporte informando o e-mail usado na compra.",
  },
  {
    question: "Meu pagamento ainda está processando. É normal?",
    answer: "Sim, algumas operadoras de cartão ou bancos realizam análises de segurança que podem levar alguns minutos. Você receberá a notificação de confirmação assim que for concluída.",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Com certeza. O material está em formato digital de alta definição, perfeitamente adaptado para leitura em smartphones, tablets, computadores ou leitores de PDF de sua preferência.",
  },
  {
    question: "Como entro em contato com o suporte?",
    answer: `Você pode enviar uma mensagem diretamente para nosso canal de atendimento oficial pelo e-mail ${PRODUCT_CONFIG.supportEmail}. Tenha em mãos o e-mail cadastrado na compra para agilizar o suporte.`,
  },
];

export const THANK_YOU_FAQ: FaqItem[] = [
  {
    question: "Como faço o download?",
    answer: "Basta clicar no botão 'BAIXAR MEU EBOOK' no topo desta página. O download do arquivo digital em formato PDF começará imediatamente.",
  },
  {
    question: "Posso baixar pelo celular?",
    answer: "Com certeza. O material está em formato PDF de alta resolução, perfeitamente adaptado para leitura em smartphones, tablets, computadores ou leitores de PDF de sua preferência.",
  },
  {
    question: "Posso salvar o PDF no computador?",
    answer: "Sim. Você pode baixar diretamente no computador e guardá-lo na pasta que preferir, ou enviar para seu serviço de nuvem (Google Drive, iCloud, Dropbox) para acessar sempre que quiser.",
  },
  {
    question: "O download não iniciou. O que faço?",
    answer: "Clique no botão 'TENTAR NOVAMENTE'. Se o navegador bloquear o início da transferência, verifique se a notificação de download foi bloqueada ou tente abrir a página em outra aba.",
  },
  {
    question: "Perdi o arquivo. Como acesso novamente?",
    answer: "O link de acesso seguro também foi enviado para o seu e-mail de compra. Você pode acessar esta mesma página ou o e-mail sempre que precisar baixar uma nova cópia.",
  },
];

/**
 * CHIPS DE PAÍSES PARA DICA DE PRIMEIRO ACESSO
 */
export const CUISINE_CHIPS = [
  { name: "Brasil", flag: "🇧🇷" },
  { name: "Itália", flag: "🇮🇹" },
  { name: "França", flag: "🇫🇷" },
  { name: "China", flag: "🇨🇳" },
  { name: "Portugal", flag: "🇵🇹" },
  { name: "Grécia", flag: "🇬🇷" },
  { name: "Alemanha", flag: "🇩🇪" },
  { name: "Espanha", flag: "🇪🇸" },
  { name: "EUA", flag: "🇺🇸" },
  { name: "Síria & Líbano", flag: "🇱🇧" },
];

/**
 * ANALYTICS EVENT TRACKING
 * Estrutura preparada para integração simples com Meta Pixel, Google Analytics 4 e GTM
 */
export type AnalyticsEvent = 
  | 'view_offer'
  | 'click_checkout_hero'
  | 'click_checkout_mid'
  | 'click_checkout_offer'
  | 'click_checkout_sticky'
  | 'faq_open'
  | 'purchase_page_view'
  | 'purchase_confirmed'
  | 'purchase_pending'
  | 'access_product_click'
  | 'thank_you_page_view'
  | 'download_click'
  | 'download_success'
  | 'download_error'
  | 'support_click';

export const trackAnalyticsEvent = (event: AnalyticsEvent, payload?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    console.info(`[Analytics Event] ${event}`, payload || {});
    
    const win = window as unknown as { dataLayer?: unknown[]; fbq?: (...args: unknown[]) => void };
    if (win.dataLayer && Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event, ...payload });
    }

    if (typeof win.fbq === 'function') {
      if (event.startsWith('click_checkout')) {
        win.fbq('track', 'InitiateCheckout', { content_name: PRODUCT_CONFIG.name, ...payload });
      } else if (event === 'purchase_confirmed') {
        win.fbq('track', 'Purchase', { content_name: PRODUCT_CONFIG.name, ...payload });
      }
    }
  }
};

/**
 * Dispara purchase_confirmed apenas uma única vez por pedido para evitar duplicatas em refresh
 */
const CONFIRMED_PURCHASE_STORAGE_KEY = 'sf_purchase_tracked_ids';

export const trackPurchaseConfirmedOnce = (orderId?: string, payload?: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;
  const key = orderId || 'default_order';
  try {
    const raw = sessionStorage.getItem(CONFIRMED_PURCHASE_STORAGE_KEY) || '[]';
    const trackedList: string[] = JSON.parse(raw);
    if (trackedList.includes(key)) {
      console.info(`[Analytics] purchase_confirmed já disparado para ${key}. Ignorando duplicação.`);
      return;
    }
    trackedList.push(key);
    sessionStorage.setItem(CONFIRMED_PURCHASE_STORAGE_KEY, JSON.stringify(trackedList));
    trackAnalyticsEvent('purchase_confirmed', { orderId: key, ...payload });
  } catch (e) {
    console.warn('[Analytics] Erro ao deduplicar compra', e);
    trackAnalyticsEvent('purchase_confirmed', { orderId: key, ...payload });
  }
};

