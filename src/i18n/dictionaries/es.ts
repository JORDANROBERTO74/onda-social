import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    title: "Onda Social — Convierte la atención en crecimiento medible",
    description:
      "Agencia de social media para marcas ambiciosas: estrategia, campañas de pago, contenido y UGC que convierten seguidores en clientes.",
    ogTagline: "Estrategia, contenido y paid social que convierten seguidores en clientes.",
  },
  navigation: {
    brand: "Onda",
    links: {
      services: "Servicios",
      work: "Trabajo",
      process: "Proceso",
      pricing: "Planes",
      faq: "FAQ",
    },
    cta: "Agendar llamada",
    localeLabel: "Idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  hero: {
    eyebrow: "Agencia de social media",
    titleLead: "Convierte las redes en",
    titleEmphasis: "crecimiento",
    titleTail: "real de negocio",
    intro:
      "Ayudamos a marcas ambiciosas a crecer en redes con estrategia clara, contenido creativo y campañas que transforman seguidores en clientes.",
    primaryCta: "Ver proyectos",
    secondaryCta: "Ver planes",
    stats: [
      { value: "120+", label: "Marcas acompañadas" },
      { value: "3,4x", label: "Retorno medio en publicidad" },
      { value: "18", label: "Mercados" },
    ],
    orbitLabel: "Canales con los que trabajamos",
  },
  about: {
    eyebrow: "01 — Sobre el estudio",
    statement:
      "Ayudamos a marcas ambiciosas a construir una presencia más sólida en redes sociales.",
    body:
      "Estrategia clara, contenido creativo y campañas que conectan con la audiencia correcta. Sin métricas de vanidad ni publicaciones por cumplir.",
    secondary:
      "Del contenido diario a las campañas de pago, unimos creatividad y datos para convertir la atención social en oportunidades reales de negocio, una conexión significativa a la vez.",
    images: [
      { src: "/images/about-01.jpg", alt: "Escritorio de estudio con aro de luz, papel y muestras de color" },
      { src: "/images/about-02.jpg", alt: "Vista cenital de un panel de planificación con muestras de color" },
    ],
  },
  services: {
    eyebrow: "02 — Qué hacemos",
    title: "Cuatro formas de mover la aguja.",
    intro:
      "Todo proyecto empieza con la misma pregunta: ¿qué tiene que conseguir social para este negocio?",
    items: [
      {
        title: "Estrategia de redes",
        desc:
          "Un plan claro que pone tu marca frente a la audiencia correcta: investigación, posicionamiento y una hoja de ruta accionable.",
        badges: ["Auditoría", "Posicionamiento", "Pilares de contenido", "Hoja de ruta"],
        tone: "pink",
      },
      {
        title: "Publicidad social",
        desc:
          "Campañas segmentadas para aumentar alcance, leads y conversiones, con presupuestos que dejan de adivinar y empiezan a componer.",
        badges: ["Meta", "TikTok", "Medición de resultados"],
        tone: "violet",
      },
      {
        title: "Creación de contenido",
        desc:
          "Contenido que detiene el scroll, cuenta tu historia y mantiene el feed vivo semana tras semana.",
        badges: ["Dirección de arte", "Piezas sociales", "Contenido de marca"],
        tone: "magenta",
      },
      {
        title: "UGC y vídeo",
        desc:
          "Historias reales y vídeo corto que generan confianza, se sienten nativos y acercan la marca a su gente.",
        badges: ["Vídeos UGC", "Reels", "Formato corto"],
        tone: "forest",
      },
    ],
  },
  work: {
    eyebrow: "03 — Trabajo seleccionado",
    title: "Trabajo que movió los números.",
    aside:
      "Cuatro colaboraciones, cuatro problemas distintos. La misma disciplina: encontrar el insight y construir el sistema alrededor.",
    disclaimer: "Marcas ficticias y cifras ilustrativas.",
    items: [
      {
        client: "Velora",
        sector: "Moda",
        description:
          "Una presencia consistente con contenido que detiene el scroll y anuncios segmentados, construida sobre una única narrativa de temporada.",
        metrics: [
          { value: "+185%", label: "Interacción" },
          { value: "+320%", label: "Alcance" },
          { value: "+240%", label: "Ventas" },
        ],
        image: "/images/work-velora.jpg",
        alt: "Detalle de seda y metal en un bodegón de estudio",
      },
      {
        client: "NourishCo",
        sector: "Alimentación",
        description:
          "Nuevo mensaje y una campaña multiplataforma que convirtió una marca de despensa discreta en un hábito diario.",
        metrics: [
          { value: "+150%", label: "Interacción" },
          { value: "+210%", label: "Alcance" },
          { value: "+190%", label: "Ventas" },
        ],
        image: "/images/work-nourish.jpg",
        alt: "Bodegón de producto sobre piedra con luz suave",
      },
      {
        client: "LumaSkin",
        sector: "Belleza",
        description:
          "Colaboraciones con creadores y un sistema visual detrás de un lanzamiento que rompió los propios récords de la marca.",
        metrics: [
          { value: "+200%", label: "Interacción" },
          { value: "+400%", label: "Alcance" },
          { value: "+310%", label: "Ventas" },
        ],
        image: "/images/work-luma.jpg",
        alt: "Vidrio cosmético y agua en una composición minimalista",
      },
      {
        client: "Techora",
        sector: "B2B SaaS",
        description:
          "Vídeo educativo y campañas muy segmentadas que posicionaron el producto como referencia de categoría.",
        metrics: [
          { value: "+120%", label: "Leads" },
          { value: "+180%", label: "Alcance" },
          { value: "+145%", label: "Altas" },
        ],
        image: "/images/work-techora.jpg",
        alt: "Texturas abstractas de luz y pantalla en azul profundo",
      },
    ],
  },
  why: {
    eyebrow: "04 — Por qué Onda",
    title: "Primero estrategia. Siempre creatividad.",
    items: [
      {
        title: "Estrategia antes que posts",
        desc: "Acordamos qué trabajo tiene que hacer social antes de diseñar una sola pieza.",
      },
      {
        title: "Creatividad con motivo",
        desc: "Cada formato existe para ganar el siguiente segundo de atención y una acción medible.",
      },
      {
        title: "Datos en la mesa",
        desc: "Reporting que dice qué funcionó, qué no y qué cambiamos la semana que viene.",
      },
      {
        title: "Un solo equipo",
        desc: "Estrategia, creatividad, medios y medición en la misma conversación.",
      },
    ],
  },
  process: {
    eyebrow: "05 — Proceso",
    title: "Cuatro pasos, sin misterio.",
    steps: [
      {
        title: "Descubrir",
        desc:
          "Empezamos entendiendo la marca desde dentro: objetivos, audiencia, competencia y qué la hace distinta.",
      },
      {
        title: "Estrategia",
        desc:
          "Una hoja de ruta pensada para maximizar el impacto online, donde cada publicación responde a un objetivo de negocio.",
      },
      {
        title: "Crear y lanzar",
        desc:
          "Producimos el contenido y lanzamos las campañas en las plataformas que de verdad importan a tu audiencia.",
      },
      {
        title: "Analizar y crecer",
        desc:
          "Medimos, leemos los números y optimizamos en tiempo real para que el crecimiento componga en lugar de estancarse.",
      },
    ],
  },
  pricing: {
    eyebrow: "06 — Planes",
    title: "Un plan para cada etapa.",
    aside:
      "Empieza con lo que necesitas hoy y amplía el alcance a medida que llegan los resultados.",
    note: "Precios en USD al mes. Cancela cuando quieras.",
    plans: [
      {
        name: "Starter",
        price: "$499",
        period: "/ mes",
        description: "Para marcas que están construyendo su presencia.",
        features: [
          "2 plataformas sociales",
          "12 publicaciones al mes",
          "5 audiencias objetivo",
          "3 estrategias de interacción",
          "1 calendario de contenido",
        ],
        featured: false,
        cta: "Empezar",
      },
      {
        name: "Professional",
        price: "$999",
        period: "/ mes",
        description: "Para marcas listas para crecer de forma constante.",
        features: [
          "4 plataformas sociales",
          "25 publicaciones al mes",
          "10 audiencias objetivo",
          "6 estrategias de interacción",
          "2 calendarios de contenido",
        ],
        featured: true,
        cta: "Elegir Professional",
      },
      {
        name: "Enterprise",
        price: "$1.999",
        period: "/ mes",
        description: "Para equipos que necesitan un sistema completo.",
        features: [
          "Plataformas ilimitadas",
          "50 publicaciones al mes",
          "Audiencias ilimitadas",
          "Estrategias avanzadas",
          "Calendarios a medida",
        ],
        featured: false,
        cta: "Hablar con ventas",
      },
    ],
  },
  testimonials: {
    eyebrow: "07 — Testimonios",
    title: "Lo que dicen nuestros partners.",
    items: [
      {
        quote: "El retorno en publicidad se disparó el primer trimestre. Solo el reporting cambió cómo planificamos.",
        name: "Marta Ruiz",
        role: "Fundadora, Velora",
        initials: "MR",
      },
      {
        quote: "Reconstruyeron nuestra presencia en redes desde cero y consiguieron que se sintiera nuestra, solo más afilada.",
        name: "Diego Ferrán",
        role: "Director de marketing, NourishCo",
        initials: "DF",
      },
      {
        quote: "Profesionales, creativos y de verdad obsesionados con los números. Una combinación poco común.",
        name: "Lucía Vidal",
        role: "Responsable de crecimiento, LumaSkin",
        initials: "LV",
      },
    ],
  },
  faq: {
    eyebrow: "08 — Preguntas",
    title: "Las dudas que nos llegan cada semana.",
    items: [
      {
        question: "¿Qué hace exactamente una agencia de social media?",
        answer:
          "Gestionamos y hacemos crecer tu presencia con estrategia, producción de contenido, campañas de pago, gestión de comunidad y reporting de resultados.",
      },
      {
        question: "¿Con qué plataformas trabajáis?",
        answer:
          "Instagram, TikTok, LinkedIn, Facebook, YouTube y Pinterest. Recomendamos las dos o tres donde tu audiencia pasa tiempo de verdad.",
      },
      {
        question: "¿Podéis crear el contenido por nosotros?",
        answer:
          "Sí. Un equipo creativo dedicado produce fotografía, vídeo corto, gráfica y copy adaptados a la voz de tu marca.",
      },
      {
        question: "¿Gestionáis publicidad de pago?",
        answer:
          "Planificamos, lanzamos y optimizamos campañas de paid social de principio a fin, con presupuesto y objetivos acordados antes de arrancar.",
      },
      {
        question: "¿Cuánto tarda en verse el resultado?",
        answer:
          "Las primeras señales de interacción suelen aparecer en semanas. El crecimiento constante y el retorno medible suelen llegar entre tres y seis meses de trabajo sostenido.",
      },
    ],
  },
  footer: {
    brand: "Onda",
    eyebrow: "Cuando quieras",
    title: "Crezcamos algo que merezca seguir.",
    email: "hola@onda.example",
    locations: "Madrid · Remoto",
    socials: [
      { label: "Instagram", href: "#contact" },
      { label: "LinkedIn", href: "#contact" },
      { label: "TikTok", href: "#contact" },
    ],
    columns: [
      {
        title: "Agencia",
        links: [
          { label: "Trabajo", href: "#work" },
          { label: "Servicios", href: "#services" },
          { label: "Sobre", href: "#about" },
          { label: "Proceso", href: "#process" },
        ],
      },
      {
        title: "Planes",
        links: [
          { label: "Starter", href: "#pricing" },
          { label: "Professional", href: "#pricing" },
          { label: "Enterprise", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],
    copyright: "© 2026 Onda Social",
    disclaimer: "Los casos usan marcas ficticias y cifras ilustrativas.",
  },
  notFound: {
    title: "Esta página se fue de cobertura.",
    body: "El enlace que seguiste no existe o el contenido se mudó a otro sitio.",
    cta: "Volver al inicio",
  },
};
