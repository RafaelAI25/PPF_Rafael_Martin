export type Lang = "es" | "en";

export const defaultLang: Lang = "es";

export const languages: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

const es = {
  nav: {
    brand: "Casa Aroma",
    home: "Inicio",
    about: "Nosotros",
    menu: "Carta",
    openMenu: "Abrir menú",
  },
  hero: {
    title: "Descubre Casa Aroma: cocina de temporada",
    titleStart: "Descubre",
    titleHighlight: "Casa Aroma:",
    titleEnd: "cocina de temporada",
    description:
      "Restaurante de ejemplo con carta flexible, producto local y una experiencia pensada para disfrutar sin prisa.",
    ctaPrimary: "Ver carta",
    ctaSecondary: "Nuestra historia",
    imageLabel: "Fotografía del restaurante",
  },
  buttons: {
    viewMenu: "Ver carta",
    ourStory: "Nuestra historia",
    howItWorks: "Cómo funciona",
    github: "GitHub",
  },
  sections: {
    flexibleMenu: {
      title: "Menú flexible",
      description: "Platos destacados y especiales del día, de ejemplo.",
      bullets: [
        "Actualiza platos fácilmente",
        "Destaca especiales de temporada",
        "Descripciones claras por plato",
      ],
    },
    visualEditing: {
      title: "Gestión sencilla",
      description: "Contenidos de ejemplo fáciles de actualizar.",
    },
    lightningFast: {
      title: "Carga rápida",
      description: "Rendimiento de ejemplo para una buena experiencia.",
      bullets: ["Carga rápida", "Navegación fluida", "Buen SEO"],
    },
    docs: {
      title: "Docs y funciones",
      cards: [
        { title: "Cómo empezar", link: "Empezar" },
        { title: "Estilo del tema", link: "Ver estilos" },
        { title: "Funciones extra", link: "Ver más" },
      ],
    },
    openSource: {
      title: "Abierto y gratuito",
      description: "Proyecto de ejemplo con fines educativos.",
      bullets: ["Uso libre", "Personalizable", "Comunidad"],
    },
  },
  deals: {
    title: "Ofertas de ejemplo",
    subtitle: "Promociones semanales de ejemplo.",
    items: [
      {
        title: "Tapas para dos",
        description: "Oferta de ejemplo, cada domingo.",
        price: "20 €",
      },
      {
        title: "Lunes de vermut",
        description: "Oferta de ejemplo, cada lunes.",
        price: "12 €",
      },
      {
        title: "Jueves de vino",
        description: "Oferta de ejemplo, cada jueves.",
        price: "15 €",
      },
    ],
  },
  footer: {
    address: "Calle Ejemplo 123, Ciudad",
    infoTitle: "Información",
    menuTitle: "Carta",
    hoursTitle: "Horario",
    rights: "© 2026 Casa Aroma — Ejercicio educativo",
  },
  languageSelector: {
    label: "Idioma",
    es: "Español",
    en: "Inglés",
  },
};

export type UITexts = typeof es;

export const ui: Record<Lang, UITexts> = {
  es,
  en: {
    nav: {
      brand: "Casa Aroma",
      home: "Home",
      about: "About",
      menu: "Menu",
      openMenu: "Open menu",
    },
    hero: {
      title: "Meet Casa Aroma: seasonal cooking",
      titleStart: "Meet",
      titleHighlight: "Casa Aroma:",
      titleEnd: "seasonal cooking",
      description:
        "Sample restaurant with a flexible menu, local produce and a relaxed dining experience.",
      ctaPrimary: "View menu",
      ctaSecondary: "Our story",
      imageLabel: "Restaurant photograph",
    },
    buttons: {
      viewMenu: "View menu",
      ourStory: "Our story",
      howItWorks: "How it works",
      github: "GitHub",
    },
    sections: {
      flexibleMenu: {
        title: "Flexible menu",
        description: "Sample featured dishes and daily specials.",
        bullets: [
          "Update dishes easily",
          "Highlight seasonal specials",
          "Clear descriptions per dish",
        ],
      },
      visualEditing: {
        title: "Effortless editing",
        description: "Sample content that is easy to update.",
      },
      lightningFast: {
        title: "Lightning fast",
        description: "Sample performance for a great experience.",
        bullets: ["Fast loading", "Smooth navigation", "Good SEO"],
      },
      docs: {
        title: "Docs & features",
        cards: [
          { title: "Getting started", link: "Get started" },
          { title: "Theme styling", link: "View styles" },
          { title: "Extra features", link: "Learn more" },
        ],
      },
      openSource: {
        title: "Open and free",
        description: "Sample project for educational purposes.",
        bullets: ["Free use", "Customizable", "Community"],
      },
    },
    deals: {
      title: "Sample deals",
      subtitle: "Sample weekly promotions.",
      items: [
        {
          title: "Tapas for two",
          description: "Sample offer, every Sunday.",
          price: "€20",
        },
        {
          title: "Vermouth Monday",
          description: "Sample offer, every Monday.",
          price: "€12",
        },
        {
          title: "Wine Thursday",
          description: "Sample offer, every Thursday.",
          price: "€15",
        },
      ],
    },
    footer: {
      address: "123 Example Street, City",
      infoTitle: "Information",
      menuTitle: "Menu",
      hoursTitle: "Opening hours",
      rights: "© 2026 Casa Aroma — Educational exercise",
    },
    languageSelector: {
      label: "Language",
      es: "Spanish",
      en: "English",
    },
  },
};
