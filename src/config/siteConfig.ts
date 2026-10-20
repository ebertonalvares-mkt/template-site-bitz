export interface Room {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  pricePerNight: number;
  capacity: {
    adults: number;
    children: number;
  };
  size: string; // Ex: "32m²"
  bedType: string; // Ex: "Cama King Size"
  images: string[];
  features: string[];
  highlight?: boolean;
  bookingUrl?: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: string; // nome do ícone do lucide
  category: "geral" | "lazer" | "gastronomia" | "negocios";
}

export interface Testimonial {
  id: string;
  author: string;
  origin: string;
  rating: number;
  comment: string;
  source: "Google" | "TripAdvisor" | "Booking.com";
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  type: string;
}

export const siteConfig = {
  // Identidade Geral
  hotel: {
    name: "Bitz Hotel & Resort",
    shortName: "Bitz Hotel",
    tagline: "O hotel mais charmoso de Campos do Jordão",
    slogan: "Descubra um mundo onde conforto, elegância e tranquilidade se unem para criar momentos inesquecíveis.",
    description: "Desfrute de espaços cuidadosamente decorados e equipados para o seu bem-estar. Sinta-se em casa longe de casa com a sofisticação da serra e a hospitalidade inigualável.",
    foundedYear: 2021,
    stars: 5,
    checkInTime: "14:00",
    checkOutTime: "12:00",
  },

  // Dados de Contato e Localização
  contact: {
    phone: "(888) 4000-2424",
    phoneClean: "88840002424",
    whatsapp: "+55 (21) 95953-4131",
    whatsappNumber: "5521959534131",
    whatsappMessage: "Olá! Gostaria de mais informações sobre disponibilidade e reservas no Bitz Hotel.",
    email: "suporte@bitzhotel.com.br",
    address: {
      street: "Av. José Manoel Gonçalves, 1500",
      neighborhood: "Capivari",
      city: "Campos do Jordão",
      state: "SP",
      zipCode: "12460-000",
      country: "Brasil",
      full: "Av. José Manoel Gonçalves, 1500 - Capivari, Campos do Jordão - SP, 12460-000",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14693.444983021447!2d-45.590132!3d-22.738871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc8a5b2828b6d3%3A0x6b7444b0cbf4f0a!2sCampos%20do%20Jord%C3%A3o%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
      coordinates: {
        latitude: -22.738871,
        longitude: -45.590132,
      },
    },
  },

  // Redes Sociais
  social: {
    instagram: "https://instagram.com/bitzhotel",
    facebook: "https://facebook.com/bitzhotel",
    youtube: "https://youtube.com/@bitzhotel",
  },

  // Integração Oficial Bitz Softwares
  bitzEngine: {
    // URL base do motor de reservas oficial do PMS Bitz
    bookingUrl: "https://reservas.bitzsoftwares.com.br/f4967f3e-a7fe-4eae-96a7-56568b52c9e4/pt-BR",
    // Configuração do Widget de Chat Bitz
    chatWidget: {
      enabled: true,
      scriptUrl: "https://bitz-widget-chat.s3.us-east-2.amazonaws.com/chat.min.js",
      token: "f4967f3e-a7fe-4eae-96a7-56568b52c9e4",
      hotelName: "COMERCIAL BITZ",
      primaryColor: "#0A60D9",
      position: "bottom-left" as const, // 'bottom-left' ou 'bottom-right'
    },
  },

  // SEO & Open Graph
  seo: {
    siteUrl: "https://bitzhotel.com.br",
    titleTemplate: "%s | Bitz Hotel - Charme & Conforto",
    defaultTitle: "Bitz Hotel | O hotel mais charmoso de Campos do Jordão",
    defaultDescription: "Reserve sua estadia no Bitz Hotel. Conforto, gastronomia sofisticada, spa e a melhor experiência de hospedagem em Campos do Jordão.",
    keywords: [
      "hotel em campos do jordão",
      "pousada de luxo",
      "resort serra da mantiqueira",
      "hospedagem capivari",
      "bitz hotel",
      "reserva hotel sp",
      "hotel com spa",
      "hotel romantico serra",
    ],
    ogImage: "https://bitzhotel.com.br/wp-content/uploads/2025/03/leisure-travel-luxury-outdoor-area-by-the-pool-.jpg",
    locale: "pt_BR",
  },

  // Imagens do Hero (Carrossel Dinâmico)
  heroSlides: [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
      title: "Hotel & Resort de Luxo",
      subtitle: "Descubra um mundo onde conforto, elegância e tranquilidade se unem para criar momentos inesquecíveis.",
      badge: "Campos do Jordão - SP",
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1920&q=80",
      title: "Acomodações Exclusivas",
      subtitle: "Suítes requintadas com hidromassagem, lareira e vistas deslumbrantes da Serra da Mantiqueira.",
      badge: "Conforto Inigualável",
    },
    {
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80",
      title: "Spa & Gastronomia de Autor",
      subtitle: "Relaxe em nosso spa térmico e encante seu paladar com experiências gastronômicas premiadas.",
      badge: "Bem-estar & Sofisticação",
    },
  ],

  // Estatísticas / Selos de Excelência
  stats: [
    { value: "4.9", label: "Nota dos Hóspedes", sublabel: "Mais de 2.400 avaliações" },
    { value: "+18k", label: "Estadias Marcantes", sublabel: "Desde nossa inauguração" },
    { value: "100%", label: "Conforto & Lazer", sublabel: "Estrutura completa para você" },
    { value: "24h", label: "Recepção e Concierge", sublabel: "Sempre à sua disposição" },
  ],

  // Acomodações / Quartos
  rooms: [
    {
      id: "quarto-duplo",
      slug: "quarto-duplo",
      name: "Quarto Duplo Standard",
      tagline: "Aconchegante e prático",
      description: "Um espaço aconchegante para compartilhar momentos especiais com conforto e tranquilidade.",
      fullDescription: "Ideal para casais ou viajantes a trabalho que buscam o equilíbrio perfeito entre conforto moderno e conveniência. Equipado com cama Queen-size macia, enxoval de algodão egípcio, ar-condicionado quente/frio, Wi-Fi de alta velocidade e vista para o jardim interno.",
      pricePerNight: 149,
      capacity: { adults: 2, children: 1 },
      size: "26 m²",
      bedType: "1 Cama Queen Size",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
      ],
      features: ["Wi-Fi gratuito", "Smart TV 43\"", "Ar-condicionado quente/frio", "Frigobar abastecido", "Secador de cabelo", "Café da manhã incluso"],
    },
    {
      id: "suite-deluxe",
      slug: "suite-deluxe",
      name: "Suíte Deluxe",
      tagline: "Espaço e requinte",
      description: "Para quem busca espaço e conforto em um ambiente sofisticado com decoração clássica.",
      fullDescription: "Projetada para estadias memoráveis, a Suíte Deluxe conta com ampla varanda privativa com vista panorâmica para as montanhas, lareira ecológica, cama King Size com pillow top e banheiro revestido em mármore.",
      pricePerNight: 399,
      capacity: { adults: 2, children: 2 },
      size: "42 m²",
      bedType: "1 Cama King Size + Sofá Cama",
      highlight: true,
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      ],
      features: ["Varanda panorâmica", "Lareira ecológica", "Cafeteira Nespresso", "Wi-Fi veloz", "Smart TV 55\"", "Roupões e chinelos", "Café da manhã incluso"],
    },
    {
      id: "quarto-de-luxo",
      slug: "quarto-de-luxo",
      name: "Quarto de Luxo Serra",
      tagline: "O refúgio perfeito",
      description: "O refúgio perfeito para relaxar e desfrutar de momentos únicos com vista para o bosque de araucárias.",
      fullDescription: "Ambiente silencioso e relaxante, harmonizado com tons terrosos e iluminação acolhedora. Perfeito para relaxar após um dia explorando os encantos de Campos do Jordão.",
      pricePerNight: 289,
      capacity: { adults: 2, children: 1 },
      size: "34 m²",
      bedType: "1 Cama King Size",
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      ],
      features: ["Vista para bosque", "Isolamento acústico", "Mesa de trabalho", "Cofre digital", "Smart TV 50\"", "Café da manhã incluso"],
    },
    {
      id: "suite-prestigio",
      slug: "suite-prestigio",
      name: "Suíte Master Prestígio",
      tagline: "Experiência máxima de luxo",
      description: "Uma experiência inesquecível em um ambiente exclusivo com hidromassagem dupla e adega.",
      fullDescription: "Nossa acomodação mais nobre e desejada. Possui dois ambientes integrados, banheira de hidromassagem dupla com vista para o vale, adega climatizada privativa, sistema de som integrado e atendimento VIP com menu de travesseiros.",
      pricePerNight: 1099,
      capacity: { adults: 2, children: 0 },
      size: "68 m²",
      bedType: "1 Cama Super King Size",
      highlight: true,
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      ],
      features: ["Banheira de hidromassagem dupla", "Adega privativa", "Lareira e solarium", "Café servido na suíte", "Espumante de boas-vindas", "Amenities L'Occitane", "Estacionamento VIP"],
    },
    {
      id: "quarto-grande-luxo",
      slug: "quarto-grande-luxo",
      name: "Quarto Família Confort",
      tagline: "Amplo e elegante para toda a família",
      description: "O conforto que você merece em um espaço amplo para hospedar sua família com total privacidade.",
      fullDescription: "Desenvolvido especialmente para famílias que não abrem mão de requinte. Conta com dois dormitórios privativos, sala de estar compacta, dois banheiros e ampla comodidade para crianças e adultos.",
      pricePerNight: 589,
      capacity: { adults: 4, children: 2 },
      size: "55 m²",
      bedType: "1 Cama King + 2 Camas Twin",
      images: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      ],
      features: ["2 Dormitórios", "2 Banheiros completos", "Sala de estar", "Micro-ondas e frigobar", "2 Smart TVs", "Café da manhã incluso"],
    },
    {
      id: "quarto-premier",
      slug: "quarto-premier",
      name: "Quarto Premier Executivo",
      tagline: "Equilíbrio entre lazer e trabalho",
      description: "A escolha ideal para quem busca conforto, conectividade e praticidade na melhor localização.",
      fullDescription: "Espaço funcional e silencioso com internet dedicada de fibra óptica, poltrona de leitura ergonômica e tudo o que você precisa para relaxar ou trabalhar com tranquilidade.",
      pricePerNight: 239,
      capacity: { adults: 2, children: 0 },
      size: "30 m²",
      bedType: "1 Cama Queen Size",
      images: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
      ],
      features: ["Internet fibra de alta velocidade", "Estação de trabalho", "Smart TV com streaming", "Máquina de café", "Café da manhã incluso"],
    },
  ] as Room[],

  // Comodidades do Hotel
  amenities: [
    {
      id: "wifi",
      title: "Wi-Fi de Alta Velocidade",
      description: "Conexão ultrarrápida gratuita em todas as acomodações e áreas sociais do hotel.",
      icon: "Wifi",
      category: "geral",
    },
    {
      id: "fitness",
      title: "Centro Fitness Completo",
      description: "Equipamentos modernos para musculação e aeróbicos com vista panorâmica para o bosque.",
      icon: "Dumbbell",
      category: "lazer",
    },
    {
      id: "spa",
      title: "Spa e Bem-Estar",
      description: "Massagens relaxantes, sauna seca e úmida, além de banhos de imersão revigorantes.",
      icon: "Sparkles",
      category: "lazer",
    },
    {
      id: "piscina",
      title: "Piscina Aquecida Coberta",
      description: "Piscina com água aquecida e bar de apoio para você aproveitar em qualquer estação do ano.",
      icon: "Waves",
      category: "lazer",
    },
    {
      id: "gastronomia",
      title: "Restaurante Gourmet & Adega",
      description: "Cardápio assinado por chef renomado unindo o melhor da culinária regional e internacional.",
      icon: "UtensilsCrossed",
      category: "gastronomia",
    },
    {
      id: "cafe",
      title: "Café da Manhã Colonial",
      description: "Pães artesanais, bolos caseiros, frutas frescas e delícias da fazenda preparadas no dia.",
      icon: "Coffee",
      category: "gastronomia",
    },
    {
      id: "eventos",
      title: "Grande Salão de Festas",
      description: "Estrutura premium para casamentos inesquecíveis, bodas e comemorações memoráveis.",
      icon: "PartyPopper",
      category: "negocios",
    },
    {
      id: "reunioes",
      title: "Salas de Reuniões & Coworking",
      description: "Espaços corporativos climatizados e equipados com tecnologia audiovisual para congressos e reuniões.",
      icon: "Briefcase",
      category: "negocios",
    },
    {
      id: "estacionamento",
      title: "Estacionamento Privativo com Valet",
      description: "Segurança 24 horas, vagas cobertas e carregador para carros elétricos cortesia.",
      icon: "Car",
      category: "geral",
    },
  ],

  // Galeria de Fotos
  gallery: [
    {
      title: "Piscina Aquecida & Deck",
      category: "Lazer",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Suíte Master com Hidromassagem",
      category: "Acomodações",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Restaurante e Adega Climatizada",
      category: "Gastronomia",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Jardim de Inverno & Lareira Externa",
      category: "Áreas Comuns",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Quarto Deluxe com Varanda",
      category: "Acomodações",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Café da Manhã Colonial da Serra",
      category: "Gastronomia",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // Depoimentos
  testimonials: [
    {
      id: "1",
      author: "Juliana Mendes & Carlos",
      origin: "São Paulo - SP",
      rating: 5,
      comment: "Foi uma experiência maravilhosa! O atendimento é impecável do check-in ao check-out. A suíte com lareira e hidromassagem superou todas as expectativas. Voltaremos com certeza!",
      source: "TripAdvisor",
      date: "Outubro de 2025",
    },
    {
      id: "2",
      author: "Rodrigo Almeida",
      origin: "Belo Horizonte - MG",
      rating: 5,
      comment: "O hotel é simplesmente deslumbrante. O café da manhã é um espetáculo à parte, com produtos artesanais fresquinhos. A localização é perfeita para descansar longe do agito.",
      source: "Google",
      date: "Setembro de 2025",
    },
    {
      id: "3",
      author: "Fernanda Silveira",
      origin: "Rio de Janeiro - RJ",
      rating: 5,
      comment: "A reserva pelo site oficial foi super rápida e prática. Conseguimos a melhor tarifa garantida e o suporte via WhatsApp nos atendeu com muita gentileza antes da viagem.",
      source: "Booking.com",
      date: "Novembro de 2025",
    },
  ],

  // Atrações Próximas
  nearbyAttractions: [
    { name: "Vila Capivari (Centro Turístico)", distance: "5 minutos", type: "Gastronomia e Compras" },
    { name: "Morro do Elefante & Teleférico", distance: "8 minutos", type: "Passeio Panorâmico" },
    { name: "Parque Amantikir Gardens", distance: "14 minutos", type: "Natureza e Paisagismo" },
    { name: "Ducha de Prata", distance: "7 minutos", type: "Ponto Turístico" },
    { name: "Palácio Boa Vista", distance: "12 minutos", type: "Arte & Cultura" },
  ],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      question: "Quais são os horários de check-in e check-out?",
      answer: "O nosso check-in inicia a partir das 14:00 horas e o check-out deve ser realizado até as 12:00 horas. Caso necessite de early check-in ou late check-out, consulte a disponibilidade previamente com nossa recepção.",
    },
    {
      question: "O café da manhã está incluso na diária?",
      answer: "Sim! Todas as nossas diárias incluem o nosso premiado Café da Manhã Colonial, servido diariamente das 07:30 às 11:00 em nosso restaurante principal.",
    },
    {
      question: "O hotel possui estacionamento?",
      answer: "Sim, dispomos de amplo estacionamento privativo e seguro com serviço de manobrista (valet) e tomadas de recarga para veículos elétricos, 100% cortesia para hóspedes.",
    },
    {
      question: "O hotel aceita animais de estimação (Pet Friendly)?",
      answer: "Aceitamos animais de pequeno porte em categorias específicas de suítes no térreo com jardim privativo. Entre em contato antecipadamente para verificar disponibilidade e regras de convivência pet.",
    },
    {
      question: "Qual é a política de cancelamento de reservas?",
      answer: "Reservas com tarifa padrão podem ser canceladas ou remarcadas gratuitamente com até 7 dias de antecedência da data de entrada. Para tarifas promocionais, consulte as condições descritas no momento da reserva no motor oficial Bitz.",
    },
    {
      question: "Como funciona a garantia do melhor preço pelo site oficial?",
      answer: "Ao reservar diretamente através do nosso site oficial (motor Bitz Softwares), você tem a garantia do menor preço sem intermediários, confirmação imediata e benefícios exclusivos como desconto em serviços do spa.",
    },
  ],
};
