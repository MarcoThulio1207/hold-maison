/* ============================================================
   HOLD Maison — Editable content & translations
   Replace image paths, links and texts freely.
   ============================================================ */

export type Lang = "pt" | "en" | "fr" | "es";

export const LANGS: Lang[] = ["pt", "en", "fr", "es"];

/* --------- Global links (edit here) --------- */
export const LINKS = {
  instagram: "https://www.instagram.com/hold.architect/",
  whatsapp: "https://wa.me/351900000000",
  email: "mailto:contact@holdmaison.com",
  linkedin: "https://www.linkedin.com/in/holdlianh-b-7328b538?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
};

/* --------- Images (swap freely) --------- */
export const IMAGES = {
  hero: "images/new_images/01_HERO_CASACOR_DESKTOP.webp",
  exhibitions: "images/new_images/02_EXHIBITIONS_MIAD_DESKTOP.webp",
  press: "images/new_images/03_PRESS_REVISTAS_DESKTOP.webp",
  education: "images/new_images/04_EDUCATION_CATOLICA_DESKTOP.webp",
  research: "images/research.jpg",
  architecture: "images/new_images/06_ARCHITECTURE_DESKTOP.webp",
  interiors: "images/new_images/07_INTERIORS_COZINHA_DESKTOP.webp",
  objets: "images/new_images/08_OBJECTS_DESKTOP.webp",
  portrait: "images/hold.jpeg",
  raizes: "images/new_images/10_PROJECT_RAIZES_DESKTOP.webp",
};

/* --------- Type of a full dictionary --------- */
export interface Dictionary {
  nav: {
    architecture: string;
    interiors: string;
    objets: string;
    exhibitions: string;
    press: string;
    projects: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    complement: string;
    cities: string;
    cta: string;
  };
  presence: {
    title: string;
    cities: string;
    text: string;
    items: { key: string; title: string; meta: string; text: string }[];
  };
  exhibitions: { title: string; text: string; meta: string; cta: string };
  press: { title: string; text: string; meta: string; cta: string };
  education: { title: string; text: string; meta: string; cta: string };
  research: {
    title: string;
    text: string;
    meta: string;
    cta: string;
    places: string[];
  };
  approach: {
    title: string;
    blocks: { title: string; text: string; cta: string }[];
  };
  references: {
    title: string;
    note: string;
    columns: { title: string; names: string }[];
  };
  about: { title: string; p1: string; p2: string; cta: string };
  projects: {
    title: string;
    text: string;
    view: string;
    items: { title: string; category: string; location?: string; text: string }[];
  };
  contact: {
    title: string;
    sub: string;
    whatsapp: string;
    instagram: string;
    email: string;
  };
  footer: {
    rights: string;
    privacy: string;
    contact: string;
    backTop: string;
  };
}

/* ============================================================
   Dictionaries
   ============================================================ */

const en: Dictionary = {
  nav: {
    architecture: "Architecture",
    interiors: "Interiors",
    objets: "Objets",
    exhibitions: "Exhibitions",
    press: "Publications",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  hero: {
    title:
      "A maison shaped by international design, sensory architecture and luxury curation.",
    subtitle:
      "Uma maison construída por repertório internacional, arquitetura sensorial e curadoria de luxo.",
    complement: "Creativity is the foundation. Each section carries its own personality.",
    cities: "Brasil · Portugal · Madrid · Milano · Paris · Dubai · Miami",
    cta: "Discover the Maison",
  },
  presence: {
    title: "International Presence",
    cities: "Brasil · Portugal · Madrid · Milano · Paris · Dubai · Miami",
    text: "The maison moves between countries, cultures and design scenes, building a refined perspective shaped by architecture, interiors, luxury, art and sensory experiences.",
    items: [
      {
        key: "exhibitions",
        title: "Exhibitions",
        meta: "CASACOR Minas · MIAD Madrid · Portugal · Brasil",
        text: "Immersive presence in design shows across Brasil, Portugal and Madrid — spaces conceived as sensory chapters of the maison.",
      },
      {
        key: "press",
        title: "Press & Publications",
        meta: "CARAS Portugal · LuxDeco · Stylish Club · Editorial Features",
        text: "An editorial voice featured in magazines and articles that echo the maison's vision of design, architecture and luxury.",
      },
      {
        key: "education",
        title: "Luxury Education",
        meta: "Gestão do Luxo · Católica Lisbon · Bocconi Milano",
        text: "A continuous education in the universe of luxury — curation, value perception and aesthetic sensibility.",
      },
      {
        key: "research",
        title: "Design Research",
        meta: "Milano · Paris · Dubai · Miami · Portugal",
        text: "International immersions in design capitals, in direct contact with maisons, trends and cultural repertoires.",
      },
    ],
  },
  exhibitions: {
    title: "Exhibitions",
    text: "Participation in design exhibitions across Brasil, Portugal and Madrid — expanding repertoire, connections and international presence.",
    meta: "CASACOR Minas · MIAD Madrid · Portugal · Brasil",
    cta: "View on Instagram",
  },
  press: {
    title: "Press & Publications",
    text: "An editorial presence in magazines, features and articles that reinforce the maison's authority in the universe of design, architecture and luxury.",
    meta: "CARAS Portugal · LuxDeco · Stylish Club · Editorial Features",
    cta: "View publications",
  },
  education: {
    title: "Luxury Education",
    text: "A specialisation in luxury and experience — an education connected to curation, sophistication, value perception and aesthetic sensibility.",
    meta: "Gestão do Luxo · Católica Lisbon · Bocconi Milano",
    cta: "Learn more",
  },
  research: {
    title: "Design Research",
    text: "International experiences in design, luxury and architecture — in direct contact with brands, trends, exclusive experiences and cultural repertoires.",
    meta: "Milano · Paris · Dubai · Miami · Portugal",
    cta: "View on Instagram",
    places: ["Milano", "Paris", "Dubai", "Miami", "Portugal"],
  },
  approach: {
    title: "Architecture · Interiors · Objets",
    blocks: [
      {
        title: "Architecture",
        text: "Projects that unite aesthetics, function, memory and identity.",
        cta: "Learn more",
      },
      {
        title: "Interiors",
        text: "Sensory environments that translate lifestyle, well-being and sophistication.",
        cta: "Learn more",
      },
      {
        title: "Objets",
        text: "An authorial curation of pieces, natural materials and exclusive objects that complete experiences.",
        cta: "Learn more",
      },
    ],
  },
  references: {
    title: "Selected Names & References",
    note: "Partners, references, publications and events that orbit the maison's universe.",
    columns: [
      {
        title: "Design Partners",
        names:
          "Jader Almeida · Deca · Portinari · Terratile · Tom Sobre Tom · Interlight · Lepri",
      },
      {
        title: "Global Design References",
        names:
          "Eichholtz · Roche Bobois · Fendi Casa · Armani Casa · Bentley Home · Bugatti Home · Versace Home",
      },
      {
        title: "Press & Events",
        names: "CASACOR Minas · MIAD · CARAS Portugal · LuxDeco · Salone del Mobile",
      },
    ],
  },
  about: {
    title: "About Holdlianh Beiró",
    p1: "Architect and interior designer working between Brasil and Portugal, Holdlianh Beiró develops an authorial language marked by sensory architecture, neurodesign, affective design, luxury curation and international experiences.",
    p2: "Her trajectory gathers design exhibitions, editorial publications, global design events, education in the universe of luxury and a constant research on beauty, memory, matter and experience.",
    cta: "Get to know more",
  },
  projects: {
    title: "Selected Projects",
    text: "Authorial projects that translate identity, context and sophistication into every detail.",
    view: "View project",
    items: [
      {
        title: "Raízes Sensoriais",
        category: "CASACOR Minas 2026",
        location: "Belo Horizonte, Brasil",
        text: "A sensory project inspired by ancestry, neurodesign, environmental psychology and affective design.",
      },
      {
        title: "Hold House",
        category: "Residential project",
        location: "Portugal",
        text: "A special place, designed to welcome, to dwell and to reveal identity.",
      },
      {
        title: "Interiores Autorais",
        category: "Interior projects",
        text: "Sophisticated, sensory and functional environments.",
      },
      {
        title: "Objets & Curadoria",
        category: "Exclusive pieces",
        text: "A curation of materials, natural objects and sophisticated elements.",
      },
      {
        title: "Projetos Comerciais",
        category: "Corporate spaces",
        text: "Projects that connect brand, experience and function.",
      },
      {
        title: "Mostras & Experiências",
        category: "Design & lifestyle",
        text: "Environments created to communicate memory, matter and emotion.",
      },
    ],
  },
  contact: {
    title: "Let's create timeless spaces with intention.",
    sub: "Get in touch to create your next project.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "E-mail",
  },
  footer: {
    rights: "© HOLD Maison · Architecture · Interiors · Objects",
    privacy: "Privacy Policy",
    contact: "Contact",
    backTop: "Back to top",
  },
};

const pt: Dictionary = {
  nav: {
    architecture: "Arquitetura",
    interiors: "Interiores",
    objets: "Objets",
    exhibitions: "Mostras",
    press: "Publicações",
    projects: "Projetos",
    about: "Sobre",
    contact: "Contato",
  },
  hero: {
    title:
      "Uma maison construída por repertório internacional, arquitetura sensorial e curadoria de luxo.",
    subtitle:
      "A maison shaped by international design, sensory architecture and luxury curation.",
    complement: "A criatividade é o alicerce. Cada seção carrega sua própria personalidade.",
    cities: "Brasil · Portugal · Madri · Milão · Paris · Dubai · Miami",
    cta: "Descobrir a Maison",
  },
  presence: {
    title: "Presença Internacional",
    cities: "Brasil · Portugal · Madri · Milão · Paris · Dubai · Miami",
    text: "A maison transita entre países, culturas e cenas do design, construindo um olhar refinado formado por arquitetura, interiores, luxo, arte e experiências sensoriais.",
    items: [
      {
        key: "exhibitions",
        title: "Mostras",
        meta: "CASACOR Minas · MIAD Madrid · Portugal · Brasil",
        text: "Presença imersiva em mostras de design no Brasil, em Portugal e em Madri — espaços concebidos como capítulos sensoriais da maison.",
      },
      {
        key: "press",
        title: "Imprensa & Publicações",
        meta: "CARAS Portugal · LuxDeco · Stylish Club · Editorial Features",
        text: "Uma voz editorial presente em revistas e artigos que ecoam a visão da maison sobre design, arquitetura e luxo.",
      },
      {
        key: "education",
        title: "Formação em Luxo",
        meta: "Gestão do Luxo · Católica Lisbon · Bocconi Milano",
        text: "Uma formação contínua no universo do luxo — curadoria, percepção de valor e sensibilidade estética.",
      },
      {
        key: "research",
        title: "Pesquisa em Design",
        meta: "Milão · Paris · Dubai · Miami · Portugal",
        text: "Imersões internacionais nas capitais do design, em contato direto com maisons, tendências e repertórios culturais.",
      },
    ],
  },
  exhibitions: {
    title: "Mostras",
    text: "Participação em mostras de design no Brasil, Portugal e Madri, ampliando repertório, conexões e presença internacional.",
    meta: "CASACOR Minas · MIAD Madrid · Portugal · Brasil",
    cta: "Ver no Instagram",
  },
  press: {
    title: "Imprensa & Publicações",
    text: "Presença editorial em revistas, reportagens e artigos que reforçam a autoridade da marca no universo do design, da arquitetura e do luxo.",
    meta: "CARAS Portugal · LuxDeco · Stylish Club · Editorial Features",
    cta: "Ver publicações",
  },
  education: {
    title: "Formação em Luxo",
    text: "Especialização em luxo e experiência, com formação conectada à curadoria, sofisticação, percepção de valor e sensibilidade estética.",
    meta: "Gestão do Luxo · Católica Lisbon · Bocconi Milano",
    cta: "Saiba mais",
  },
  research: {
    title: "Pesquisa em Design",
    text: "Vivências internacionais em design, luxo e arquitetura, com contato direto com marcas, tendências, experiências exclusivas e repertórios culturais.",
    meta: "Milão · Paris · Dubai · Miami · Portugal",
    cta: "Ver no Instagram",
    places: ["Milão", "Paris", "Dubai", "Miami", "Portugal"],
  },
  approach: {
    title: "Arquitetura · Interiores · Objets",
    blocks: [
      {
        title: "Arquitetura",
        text: "Projetos que unem estética, funcionalidade, memória e identidade.",
        cta: "Saiba mais",
      },
      {
        title: "Interiores",
        text: "Ambientes sensoriais que traduzem estilo de vida, bem-estar e sofisticação.",
        cta: "Saiba mais",
      },
      {
        title: "Objets",
        text: "Curadoria autoral de peças, materiais naturais e objetos exclusivos que completam experiências.",
        cta: "Saiba mais",
      },
    ],
  },
  references: {
    title: "Nomes & Referências Selecionadas",
    note: "Parceiros, referências, publicações e eventos que orbitam o universo da maison.",
    columns: [
      {
        title: "Parceiros de Design",
        names:
          "Jader Almeida · Deca · Portinari · Terratile · Tom Sobre Tom · Interlight · Lepri",
      },
      {
        title: "Referências Globais de Design",
        names:
          "Eichholtz · Roche Bobois · Fendi Casa · Armani Casa · Bentley Home · Bugatti Home · Versace Home",
      },
      {
        title: "Imprensa & Eventos",
        names: "CASACOR Minas · MIAD · CARAS Portugal · LuxDeco · Salone del Mobile",
      },
    ],
  },
  about: {
    title: "Sobre Holdlianh Beiró",
    p1: "Arquiteta e designer de interiores com atuação entre Brasil e Portugal, Holdlianh Beiró desenvolve uma linguagem autoral marcada por arquitetura sensorial, neurodesign, design afetivo, curadoria de luxo e experiências internacionais.",
    p2: "Sua trajetória reúne participação em mostras, publicações editoriais, eventos de design, formação no universo do luxo e uma pesquisa constante sobre beleza, memória, matéria e experiência.",
    cta: "Conhecer mais",
  },
  projects: {
    title: "Projetos Selecionados",
    text: "Projetos autorais que traduzem identidade, contexto e sofisticação em cada detalhe.",
    view: "Ver projeto",
    items: [
      {
        title: "Raízes Sensoriais",
        category: "CASACOR Minas 2026",
        location: "Belo Horizonte, Brasil",
        text: "Projeto sensorial inspirado na ancestralidade, no neurodesign, na psicologia dos ambientes e no design afetivo.",
      },
      {
        title: "Hold House",
        category: "Projeto residencial",
        location: "Portugal",
        text: "Um lugar especial, pensado para acolher, morar e revelar identidade.",
      },
      {
        title: "Interiores Autorais",
        category: "Projetos de interiores",
        text: "Ambientes sofisticados, sensoriais e funcionais.",
      },
      {
        title: "Objets & Curadoria",
        category: "Peças exclusivas",
        text: "Curadoria de materiais, objetos naturais e elementos sofisticados.",
      },
      {
        title: "Projetos Comerciais",
        category: "Espaços corporativos",
        text: "Projetos que conectam marca, experiência e funcionalidade.",
      },
      {
        title: "Mostras & Experiências",
        category: "Design & lifestyle",
        text: "Ambientes criados para comunicar memória, matéria e emoção.",
      },
    ],
  },
  contact: {
    title: "Vamos criar espaços atemporais com intenção.",
    sub: "Entre em contato para criar seu próximo projeto.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "E-mail",
  },
  footer: {
    rights: "© HOLD Maison · Arquitetura · Interiores · Objetos",
    privacy: "Política de Privacidade",
    contact: "Contato",
    backTop: "Voltar ao topo",
  },
};

const fr: Dictionary = {
  nav: {
    architecture: "Architecture",
    interiors: "Intérieurs",
    objets: "Objets",
    exhibitions: "Expositions",
    press: "Publications",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
  },
  hero: {
    title:
      "Une maison façonnée par le design international, l'architecture sensorielle et la curation du luxe.",
    subtitle:
      "A maison shaped by international design, sensory architecture and luxury curation.",
    complement: "La créativité est le fondement. Chaque section porte sa propre personnalité.",
    cities: "Brésil · Portugal · Madrid · Milan · Paris · Dubaï · Miami",
    cta: "Découvrir la Maison",
  },
  presence: {
    title: "Présence Internationale",
    cities: "Brésil · Portugal · Madrid · Milan · Paris · Dubaï · Miami",
    text: "La maison circule entre pays, cultures et scènes du design, construisant un regard raffiné façonné par l'architecture, les intérieurs, le luxe, l'art et les expériences sensorielles.",
    items: [
      {
        key: "exhibitions",
        title: "Expositions",
        meta: "CASACOR Minas · MIAD Madrid · Portugal · Brésil",
        text: "Une présence immersive dans les salons de design au Brésil, au Portugal et à Madrid — des espaces conçus comme des chapitres sensoriels de la maison.",
      },
      {
        key: "press",
        title: "Presse & Publications",
        meta: "CARAS Portugal · LuxDeco · Stylish Club · Editorial Features",
        text: "Une voix éditoriale présente dans des magazines et articles qui reflètent la vision de la maison sur le design, l'architecture et le luxe.",
      },
      {
        key: "education",
        title: "Éducation au Luxe",
        meta: "Gestão do Luxo · Católica Lisbon · Bocconi Milano",
        text: "Une formation continue dans l'univers du luxe — curation, perception de la valeur et sensibilité esthétique.",
      },
      {
        key: "research",
        title: "Recherche en Design",
        meta: "Milan · Paris · Dubaï · Miami · Portugal",
        text: "Des immersions internationales dans les capitales du design, en contact direct avec les maisons, les tendances et les répertoires culturels.",
      },
    ],
  },
  exhibitions: {
    title: "Expositions",
    text: "Participation à des salons de design au Brésil, au Portugal et à Madrid — élargissant répertoire, connexions et présence internationale.",
    meta: "CASACOR Minas · MIAD Madrid · Portugal · Brésil",
    cta: "Voir sur Instagram",
  },
  press: {
    title: "Presse & Publications",
    text: "Une présence éditoriale dans des magazines, reportages et articles qui renforcent l'autorité de la marque dans l'univers du design, de l'architecture et du luxe.",
    meta: "CARAS Portugal · LuxDeco · Stylish Club · Editorial Features",
    cta: "Voir les publications",
  },
  education: {
    title: "Éducation au Luxe",
    text: "Une spécialisation dans le luxe et l'expérience — une formation liée à la curation, la sophistication, la perception de la valeur et la sensibilité esthétique.",
    meta: "Gestão do Luxo · Católica Lisbon · Bocconi Milano",
    cta: "En savoir plus",
  },
  research: {
    title: "Recherche en Design",
    text: "Des expériences internationales en design, luxe et architecture — en contact direct avec les marques, tendances, expériences exclusives et répertoires culturels.",
    meta: "Milan · Paris · Dubaï · Miami · Portugal",
    cta: "Voir sur Instagram",
    places: ["Milan", "Paris", "Dubaï", "Miami", "Portugal"],
  },
  approach: {
    title: "Architecture · Intérieurs · Objets",
    blocks: [
      {
        title: "Architecture",
        text: "Des projets qui unissent esthétique, fonction, mémoire et identité.",
        cta: "En savoir plus",
      },
      {
        title: "Intérieurs",
        text: "Des ambiances sensorielles qui traduisent art de vivre, bien-être et sophistication.",
        cta: "En savoir plus",
      },
      {
        title: "Objets",
        text: "Une curation d'auteur de pièces, matériaux naturels et objets exclusifs qui complètent les expériences.",
        cta: "En savoir plus",
      },
    ],
  },
  references: {
    title: "Noms & Références Choisis",
    note: "Partenaires, références, publications et événements qui gravitent autour de la maison.",
    columns: [
      {
        title: "Partenaires Design",
        names:
          "Jader Almeida · Deca · Portinari · Terratile · Tom Sobre Tom · Interlight · Lepri",
      },
      {
        title: "Références Globales",
        names:
          "Eichholtz · Roche Bobois · Fendi Casa · Armani Casa · Bentley Home · Bugatti Home · Versace Home",
      },
      {
        title: "Presse & Événements",
        names: "CASACOR Minas · MIAD · CARAS Portugal · LuxDeco · Salone del Mobile",
      },
    ],
  },
  about: {
    title: "À propos de Holdlianh Beiró",
    p1: "Architecte et designer d'intérieur entre le Brésil et le Portugal, Holdlianh Beiró développe un langage d'auteur marqué par l'architecture sensorielle, le neurodesign, le design affectif, la curation du luxe et les expériences internationales.",
    p2: "Son parcours réunit expositions, publications éditoriales, événements de design, formation dans l'univers du luxe et une recherche constante sur la beauté, la mémoire, la matière et l'expérience.",
    cta: "En savoir plus",
  },
  projects: {
    title: "Projets Choisis",
    text: "Des projets d'auteur qui traduisent identité, contexte et sophistication dans chaque détail.",
    view: "Voir le projet",
    items: [
      {
        title: "Raízes Sensoriais",
        category: "CASACOR Minas 2026",
        location: "Belo Horizonte, Brésil",
        text: "Un projet sensoriel inspiré par l'ancestralité, le neurodesign, la psychologie des espaces et le design affectif.",
      },
      {
        title: "Hold House",
        category: "Projet résidentiel",
        location: "Portugal",
        text: "Un lieu singulier, pensé pour accueillir, habiter et révéler une identité.",
      },
      {
        title: "Interiores Autorais",
        category: "Projets d'intérieurs",
        text: "Des ambiances sophistiquées, sensorielles et fonctionnelles.",
      },
      {
        title: "Objets & Curadoria",
        category: "Pièces exclusives",
        text: "Une curation de matériaux, objets naturels et éléments sophistiqués.",
      },
      {
        title: "Projets Commerciaux",
        category: "Espaces corporatifs",
        text: "Des projets qui relient marque, expérience et fonctionnalité.",
      },
      {
        title: "Expositions & Expériences",
        category: "Design & lifestyle",
        text: "Des espaces créés pour communiquer mémoire, matière et émotion.",
      },
    ],
  },
  contact: {
    title: "Créons des espaces intemporels, avec intention.",
    sub: "Contactez-nous pour créer votre prochain projet.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "E-mail",
  },
  footer: {
    rights: "© HOLD Maison · Architecture · Intérieurs · Objets",
    privacy: "Politique de Confidentialité",
    contact: "Contact",
    backTop: "Retour en haut",
  },
};

const es: Dictionary = {
  nav: {
    architecture: "Arquitectura",
    interiors: "Interiores",
    objets: "Objets",
    exhibitions: "Muestras",
    press: "Publicaciones",
    projects: "Proyectos",
    about: "Sobre",
    contact: "Contacto",
  },
  hero: {
    title:
      "Una maison formada por diseño internacional, arquitectura sensorial y curaduría de lujo.",
    subtitle:
      "A maison shaped by international design, sensory architecture and luxury curation.",
    complement: "La creatividad es el fundamento. Cada sección lleva su propia personalidad.",
    cities: "Brasil · Portugal · Madrid · Milán · París · Dubái · Miami",
    cta: "Descubrir la Maison",
  },
  presence: {
    title: "Presencia Internacional",
    cities: "Brasil · Portugal · Madrid · Milán · París · Dubái · Miami",
    text: "La maison transita entre países, culturas y escenas del diseño, construyendo una mirada refinada formada por arquitectura, interiores, lujo, arte y experiencias sensoriales.",
    items: [
      {
        key: "exhibitions",
        title: "Muestras",
        meta: "CASACOR Minas · MIAD Madrid · Portugal · Brasil",
        text: "Presencia inmersiva en muestras de diseño en Brasil, Portugal y Madrid — espacios concebidos como capítulos sensoriales de la maison.",
      },
      {
        key: "press",
        title: "Prensa & Publicaciones",
        meta: "CARAS Portugal · LuxDeco · Stylish Club · Editorial Features",
        text: "Una voz editorial presente en revistas y artículos que reflejan la visión de la maison sobre diseño, arquitectura y lujo.",
      },
      {
        key: "education",
        title: "Educación en Lujo",
        meta: "Gestão do Luxo · Católica Lisbon · Bocconi Milano",
        text: "Una formación continua en el universo del lujo — curaduría, percepción de valor y sensibilidad estética.",
      },
      {
        key: "research",
        title: "Investigación en Diseño",
        meta: "Milán · París · Dubái · Miami · Portugal",
        text: "Inmersiones internacionales en las capitales del diseño, en contacto directo con maisons, tendencias y repertorios culturales.",
      },
    ],
  },
  exhibitions: {
    title: "Muestras",
    text: "Participación en muestras de diseño en Brasil, Portugal y Madrid, ampliando repertorio, conexiones y presencia internacional.",
    meta: "CASACOR Minas · MIAD Madrid · Portugal · Brasil",
    cta: "Ver en Instagram",
  },
  press: {
    title: "Prensa & Publicaciones",
    text: "Presencia editorial en revistas, reportajes y artículos que refuerzan la autoridad de la marca en el universo del diseño, la arquitectura y el lujo.",
    meta: "CARAS Portugal · LuxDeco · Stylish Club · Editorial Features",
    cta: "Ver publicaciones",
  },
  education: {
    title: "Educación en Lujo",
    text: "Especialización en lujo y experiencia, con formación conectada a la curaduría, la sofisticación, la percepción de valor y la sensibilidad estética.",
    meta: "Gestão do Luxo · Católica Lisbon · Bocconi Milano",
    cta: "Saber más",
  },
  research: {
    title: "Investigación en Diseño",
    text: "Vivencias internacionales en diseño, lujo y arquitectura, con contacto directo con marcas, tendencias, experiencias exclusivas y repertorios culturales.",
    meta: "Milán · París · Dubái · Miami · Portugal",
    cta: "Ver en Instagram",
    places: ["Milán", "París", "Dubái", "Miami", "Portugal"],
  },
  approach: {
    title: "Arquitectura · Interiores · Objets",
    blocks: [
      {
        title: "Arquitectura",
        text: "Proyectos que unen estética, funcionalidad, memoria e identidad.",
        cta: "Saber más",
      },
      {
        title: "Interiores",
        text: "Ambientes sensoriales que traducen estilo de vida, bienestar y sofisticación.",
        cta: "Saber más",
      },
      {
        title: "Objets",
        text: "Curaduría autoral de piezas, materiales naturales y objetos exclusivos que completan experiencias.",
        cta: "Saber más",
      },
    ],
  },
  references: {
    title: "Nombres & Referencias Seleccionadas",
    note: "Socios, referencias, publicaciones y eventos que orbitan el universo de la maison.",
    columns: [
      {
        title: "Socios de Diseño",
        names:
          "Jader Almeida · Deca · Portinari · Terratile · Tom Sobre Tom · Interlight · Lepri",
      },
      {
        title: "Referencias Globales",
        names:
          "Eichholtz · Roche Bobois · Fendi Casa · Armani Casa · Bentley Home · Bugatti Home · Versace Home",
      },
      {
        title: "Prensa & Eventos",
        names: "CASACOR Minas · MIAD · CARAS Portugal · LuxDeco · Salone del Mobile",
      },
    ],
  },
  about: {
    title: "Sobre Holdlianh Beiró",
    p1: "Arquitecta y diseñadora de interiores entre Brasil y Portugal, Holdlianh Beiró desarrolla un lenguaje autoral marcado por la arquitectura sensorial, el neurodiseño, el diseño afectivo, la curaduría de lujo y las experiencias internacionales.",
    p2: "Su trayectoria reúne muestras, publicaciones editoriales, eventos de diseño, formación en el universo del lujo y una investigación constante sobre belleza, memoria, materia y experiencia.",
    cta: "Conocer más",
  },
  projects: {
    title: "Proyectos Seleccionados",
    text: "Proyectos autorales que traducen identidad, contexto y sofisticación en cada detalle.",
    view: "Ver proyecto",
    items: [
      {
        title: "Raízes Sensoriais",
        category: "CASACOR Minas 2026",
        location: "Belo Horizonte, Brasil",
        text: "Proyecto sensorial inspirado en la ancestralidad, el neurodiseño, la psicología de los ambientes y el diseño afectivo.",
      },
      {
        title: "Hold House",
        category: "Proyecto residencial",
        location: "Portugal",
        text: "Un lugar especial, pensado para acoger, habitar y revelar identidad.",
      },
      {
        title: "Interiores Autorais",
        category: "Proyectos de interiores",
        text: "Ambientes sofisticados, sensoriales y funcionales.",
      },
      {
        title: "Objets & Curadoria",
        category: "Piezas exclusivas",
        text: "Curaduría de materiales, objetos naturales y elementos sofisticados.",
      },
      {
        title: "Proyectos Comerciales",
        category: "Espacios corporativos",
        text: "Proyectos que conectan marca, experiencia y funcionalidad.",
      },
      {
        title: "Muestras & Experiencias",
        category: "Design & lifestyle",
        text: "Ambientes creados para comunicar memoria, materia y emoción.",
      },
    ],
  },
  contact: {
    title: "Creemos espacios atemporales con intención.",
    sub: "Ponte en contacto para crear tu próximo proyecto.",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    email: "E-mail",
  },
  footer: {
    rights: "© HOLD Maison · Arquitectura · Interiores · Objetos",
    privacy: "Política de Privacidad",
    contact: "Contacto",
    backTop: "Volver arriba",
  },
};

export const DICTIONARIES: Record<Lang, Dictionary> = { pt, en, fr, es };

/* --------- Images used by the presence switcher --------- */
export const PRESENCE_IMAGES: Record<string, string> = {
  exhibitions: IMAGES.exhibitions,
  press: IMAGES.press,
  education: IMAGES.education,
  research: IMAGES.research,
};

/* --------- Project card images (order matches items) --------- */
export const PROJECT_IMAGES: string[] = [
  IMAGES.raizes,
  IMAGES.hero,
  IMAGES.interiors,
  IMAGES.objets,
  IMAGES.education,
  IMAGES.exhibitions,
];
