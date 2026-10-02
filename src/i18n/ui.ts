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
    mainLabel: "Navegación principal",
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
      eyebrow: "Carta flexible",
      title: "Menú flexible",
      description: "Platos destacados y especiales del día, de ejemplo.",
      bullets: [
        "Actualiza platos fácilmente",
        "Destaca especiales de temporada",
        "Descripciones claras por plato",
      ],
      buttonText: "Ver carta",
      buttonHref: "#menu",
      imagePlaceholderText: "Fotografía de la carta",
    },
    visualEditing: {
      eyebrow: "Edición visual",
      title: "Gestión sencilla",
      description: "Contenidos de ejemplo fáciles de actualizar.",
      buttonText: "Cómo funciona",
      buttonHref: "#docs",
      imagePlaceholderText: "Vista previa del editor",
    },
    lightningFast: {
      eyebrow: "Rendimiento",
      title: "Carga rápida",
      description: "Rendimiento de ejemplo para una buena experiencia.",
      bullets: ["Carga rápida", "Navegación fluida", "Buen SEO"],
      imagePlaceholderText: "Interior del restaurante",
    },
    docs: {
      eyebrow: "Documentación",
      title: "Docs y funciones",
      description: "Guías breves de ejemplo para empezar y personalizar.",
      cards: [
        {
          title: "Cómo empezar",
          description: "Pasos básicos de ejemplo para poner en marcha la página.",
          linkText: "Empezar",
          linkHref: "#docs",
        },
        {
          title: "Estilo del tema",
          description: "Opciones de ejemplo para ajustar colores y tipografía.",
          linkText: "Ver estilos",
          linkHref: "#docs",
        },
        {
          title: "Funciones extra",
          description: "Ejemplos breves de funciones adicionales disponibles.",
          linkText: "Ver más",
          linkHref: "#docs",
        },
      ],
    },
    openSource: {
      eyebrow: "Código abierto",
      title: "Abierto y gratuito",
      description: "Proyecto de ejemplo con fines educativos.",
      bullets: ["Uso libre", "Personalizable", "Comunidad"],
      buttonText: "GitHub",
      buttonHref: "https://github.com/",
      imagePlaceholderText: "Banner de código abierto",
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
    brand: "Casa Aroma",
    description:
      "Restaurante de ejemplo: cocina de temporada y ambiente acogedor.",
    address: "Calle Ejemplo 123, Ciudad",
    email: "hola@ejemplo.es",
    phone: "+34 000 000 000",
    infoTitle: "Información",
    infoHome: "Inicio",
    infoAbout: "Nosotros",
    infoDocs: "Docs",
    menuTitle: "Carta",
    menuLinkMenu: "Menú",
    menuLinkDeals: "Ofertas",
    hoursTitle: "Horario",
    hours: [
      { day: "Lun – Vie", time: "08:00 – 20:00" },
      { day: "Sáb", time: "09:00 – 00:00" },
      { day: "Dom", time: "Cerrado" },
    ],
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
      mainLabel: "Main navigation",
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
        eyebrow: "Flexible menu",
        title: "Flexible menu",
        description: "Sample featured dishes and daily specials.",
        bullets: [
          "Update dishes easily",
          "Highlight seasonal specials",
          "Clear descriptions per dish",
        ],
        buttonText: "View menu",
        buttonHref: "#menu",
        imagePlaceholderText: "Menu photograph",
      },
      visualEditing: {
        eyebrow: "Visual editing",
        title: "Effortless editing",
        description: "Sample content that is easy to update.",
        buttonText: "How it works",
        buttonHref: "#docs",
        imagePlaceholderText: "Editor preview",
      },
      lightningFast: {
        eyebrow: "Performance",
        title: "Lightning fast",
        description: "Sample performance for a great experience.",
        bullets: ["Fast loading", "Smooth navigation", "Good SEO"],
        imagePlaceholderText: "Restaurant interior",
      },
      docs: {
        eyebrow: "Documentation",
        title: "Docs & features",
        description: "Short sample guides to get started and customize.",
        cards: [
          {
            title: "Getting started",
            description: "Sample basic steps to launch the page.",
            linkText: "Get started",
            linkHref: "#docs",
          },
          {
            title: "Theme styling",
            description: "Sample options to adjust colors and typography.",
            linkText: "View styles",
            linkHref: "#docs",
          },
          {
            title: "Extra features",
            description: "Short sample descriptions of extra features.",
            linkText: "Learn more",
            linkHref: "#docs",
          },
        ],
      },
      openSource: {
        eyebrow: "Open source",
        title: "Open and free",
        description: "Sample project for educational purposes.",
        bullets: ["Free use", "Customizable", "Community"],
        buttonText: "GitHub",
        buttonHref: "https://github.com/",
        imagePlaceholderText: "Open source banner",
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
      brand: "Casa Aroma",
      description:
        "Sample restaurant: seasonal cooking and a cozy atmosphere.",
      address: "123 Example Street, City",
      email: "hello@example.com",
      phone: "+34 000 000 000",
      infoTitle: "Information",
      infoHome: "Home",
      infoAbout: "About",
      infoDocs: "Docs",
      menuTitle: "Menu",
      menuLinkMenu: "Menu",
      menuLinkDeals: "Deals",
      hoursTitle: "Opening hours",
      hours: [
        { day: "Mon – Fri", time: "08:00 – 20:00" },
        { day: "Sat", time: "09:00 – 00:00" },
        { day: "Sun", time: "Closed" },
      ],
      rights: "© 2026 Casa Aroma — Educational exercise",
    },
    languageSelector: {
      label: "Language",
      es: "Spanish",
      en: "English",
    },
  },
};
