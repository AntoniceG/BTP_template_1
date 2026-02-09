// ============================================================
// CONFIGURATION CENTRALISEE - MODELE TYPE BTP
// ============================================================
// Pour dupliquer ce site pour un nouveau prospect,
// il suffit de modifier les variables ci-dessous.
// Temps de personnalisation estime : ~15 minutes
// ============================================================

export const siteConfig = {
  // --- Identite de l'entreprise ---
  companyName: "Batir & Renover",
  tagline: "L'excellence au service de votre habitat",

  // --- Metier ---
  tradeType: "Renovation & Maconnerie",
  tradeDescription: "renovation et maconnerie generale",

  // --- Localisation ---
  city: "Aix-en-Provence",
  region: "Bouches-du-Rhone",
  coverageArea: "Aix-en-Provence, Trets et alentours",
  address: "Zone d'activite Les Milles, 13290 Aix-en-Provence",

  // --- Contact ---
  phone: "06 12 34 56 78",
  phoneHref: "tel:+33612345678",
  email: "contact@batir-renover.fr",

  // --- Chiffres cles ---
  yearsExperience: "15",
  projectsCompleted: "500+",
  satisfactionRate: "98%",

  // --- Navigation ---
  navLinks: [
    { label: "Prestations", href: "#services" },
    { label: "Realisations", href: "#projects" },
    { label: "Temoignages", href: "#testimonials" },
    { label: "Devis gratuit", href: "#quote" },
  ],

  // --- Services / Prestations ---
  services: [
    {
      title: "R\u00e9novation int\u00e9rieure",
      description: "Transformation compl\u00e8te de vos espaces de vie : cuisine, salle de bain, pi\u00e8ces \u00e0 vivre. Finitions haut de gamme.",
      icon: "Paintbrush" as const,
      image: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "R\u00e9novation ext\u00e9rieure",
      description: "Embellissement et protection de vos fa\u00e7ades, terrasses et espaces ext\u00e9rieurs. Durabilit\u00e9 garantie.",
      icon: "Home" as const,
      image: "/images/aménagement exterieur.jpg",
    },
    {
      title: "Ma\u00e7onnerie g\u00e9n\u00e9rale",
      description: "Travaux de gros \u0153uvre, murs porteurs, fondations et structures en b\u00e9ton arm\u00e9.",
      icon: "Hammer" as const,
      image: "/images/plaquiste.jpg",
    },
    {
      title: "Extension & Sur\u00e9l\u00e9vation",
      description: "Agrandissement de votre habitat avec des extensions sur mesure, int\u00e9gr\u00e9es \u00e0 l\u2019existant.",
      icon: "Maximize" as const,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Am\u00e9nagement de combles",
      description: "Optimisation de vos combles pour cr\u00e9er de nouveaux espaces habitables, lumineux et isol\u00e9s.",
      icon: "Layers" as const,
      image: "/images/comble.jpg",
    },
    {
      title: "Ravalement de fa\u00e7ade",
      description: "Nettoyage, r\u00e9paration et embellissement de vos fa\u00e7ades avec isolation thermique par l\u2019ext\u00e9rieur.",
      icon: "Building" as const,
      image: "/images/ravalement.jpg",
    },
  ],

  // --- Projets / Realisations ---
  projects: [
    {
      title: "Renovation complete maison de ville",
      description: "Renovation totale d'une maison de ville de 120m2 incluant restructuration des espaces, mise aux normes electriques et plomberie complete.",
      location: "Trets",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Extension contemporaine",
      description: "Extension de 40m2 avec grande baie vitree, toiture plate et finitions haut de gamme pour un espace de vie lumineux.",
      location: "Aix-en-Provence",
      image: "/images/maison moderne.jpg",
    },
    {
      title: "Ravalement facade immeuble",
      description: "Ravalement complet avec isolation thermique par l'exterieur (ITE) sur un immeuble de 3 etages en centre-ville.",
      location: "Gardanne",
      image: "/images/ravalement.jpg",
    },
  ],

  // --- Temoignages ---
  testimonials: [
    {
      name: "M. et Mme Durand",
      project: "Renovation cuisine et salle de bain",
      rating: 5,
      text: "Un travail remarquable du debut a la fin. L'equipe a ete ponctuelle, propre et tres professionnelle. Notre cuisine est meconnaissable, exactement ce que nous voulions.",
    },
    {
      name: "Pierre L.",
      project: "Extension maison 35m2",
      rating: 5,
      text: "Nous hesitions entre plusieurs entreprises. Le devis etait clair et detaille, les delais ont ete respectes a la lettre. Le resultat depasse nos attentes.",
    },
    {
      name: "Sophie M.",
      project: "Ravalement de facade",
      rating: 5,
      text: "Tres satisfaite du ravalement de notre facade. L'equipe a su nous conseiller sur les materiaux et les couleurs. Un vrai coup de neuf pour notre maison.",
    },
  ],

  // --- Options formulaire devis ---
  projectTypes: [
    "Renovation interieure",
    "Renovation exterieure",
    "Maconnerie generale",
    "Extension / Surelevation",
    "Amenagement de combles",
    "Ravalement de facade",
    "Autre",
  ],

  // --- Footer ---
  footerTagline: "Artisan de confiance pour tous vos projets de renovation et maconnerie dans la region d'Aix-en-Provence.",
  copyright: "Batir & Renover",
  createdBy: "Votre Agence Web",
} as const
