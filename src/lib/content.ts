// All the text of the portfolio lives here, in English and French,
// so it can be edited without touching the components.

export type Lang = "en" | "fr";

export const profile = {
  name: "Daizi",
  email: "shadowapex308@gmail.com",
  // Put your resume in `public/` (e.g. public/cv-daizi.pdf) and set its path here to show the download button.
  cv: "",
  socials: [
    { label: "GitHub", href: "https://github.com/DaiziDev" },
    { label: "Facebook", href: "https://www.facebook.com/share/1Bgo9E37Xe/" },
  ],
};

const projectLinks = [
  {
    title: "Grace Bilingual",
    year: "2026",
    tags: ["PHP", "JavaScript", "CSS"],
    href: "https://gracebilingual.com/",
    image:
      "https://res.cloudinary.com/dlhevtzle/image/upload/f_auto,q_auto,w_1400/v1769015188/Capture_d_%C3%A9cran_2026-01-21_143956_lf4lpe.png",
  },
  {
    title: "Kotaflix",
    year: "2026",
    tags: ["React", "Tailwind CSS", "API"],
    href: "https://kotaflix-rca.onrender.com/",
    image:
      "https://res.cloudinary.com/dlhevtzle/image/upload/f_auto,q_auto,w_1400/v1769015188/Capture_d_%C3%A9cran_2026-01-21_152627_ss8je0.png",
  },
  {
    title: "GBHS Students",
    year: "2025",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    href: "https://gbhs-students.onrender.com/",
    image:
      "https://res.cloudinary.com/dlhevtzle/image/upload/f_auto,q_auto,w_1400/v1761382072/class_dxmlx2.png",
  },
];

const stackItems = {
  frontend: ["Angular", "Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP", "Three.js"],
  backend: ["Node.js", "PHP", "REST APIs", "SQL"],
  tools: ["Git", "GitHub", "Figma", "Vite"],
};

const en = {
  role: "Fullstack Developer",
  location: "Yaoundé, Cameroon",
  nav: {
    links: [
      { label: "Story", href: "#story" },
      { label: "About", href: "#about" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
    talk: "Let's talk",
    menu: "Menu",
    close: "Close",
    cv: "Resume",
  },
  preloader: { loading: "Loading experience" },
  hero: {
    title: "Fullstack developer crafting",
    highlight: "wow.",
    intro: "I turn ideas into fast, solid web products with Angular, Next.js and React, and bring them to life with motion.",
    scroll: "Scroll to explore",
  },
  chapters: [
    {
      title: "An idea",
      text: "Every project starts as a cloud of possibilities: a need, a feeling, a direction.",
    },
    {
      title: "Becomes code",
      text: "I structure it into clean, typed, scalable code, from the API to the components.",
    },
    {
      title: "Becomes an experience",
      text: "Then I bring it to life: fast interfaces, smooth motion, and that little wow effect.",
    },
  ],
  about: {
    label: "About",
    text: "I'm Daizi, a fullstack developer based in Yaoundé. I build the whole product, from the API to the interface, but the frontend is where I shine: Angular, Next.js and React. What I love most is motion, the details that make someone stop scrolling and say wow.",
  },
  stack: [
    { group: "Frontend", items: stackItems.frontend },
    { group: "Backend", items: stackItems.backend },
    { group: "Tools", items: stackItems.tools },
  ],
  work: {
    label: "Selected work",
    title: "Things I've",
    highlight: "built.",
    intro: "Real products, used by real people. Scroll to browse.",
    view: "View",
    screenshot: "Screenshot of",
    projects: [
      "School management platform: teachers enter marks, track attendance and follow their classes all year long.",
      "HD streaming platform with a large catalogue of movies and series, personalised recommendations and a smooth interface.",
      "A space for former classmates to stay in touch, share news and collaborate easily.",
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's build something",
    highlight: "wow.",
    intro: "A project, a job, or just an idea? Tell me about it, I usually reply within 24 hours.",
    email: ["Send an", "email"],
    name: "Your name",
    yourEmail: "Your email",
    message: "Your message",
    send: "Send message",
    sending: "Sending…",
    sent: "Thanks! Your message is on its way.",
    error: "Something went wrong, please email me directly.",
    time: "in Yaoundé",
  },
  signature: { thanks: "Thanks for scrolling", top: "Back to top" },
};

type Content = typeof en;

const fr: Content = {
  role: "Dév Fullstack",
  location: "Yaoundé, Cameroun",
  nav: {
    links: [
      { label: "Histoire", href: "#story" },
      { label: "À propos", href: "#about" },
      { label: "Projets", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
    talk: "Parlons-en",
    menu: "Menu",
    close: "Fermer",
    cv: "CV",
  },
  preloader: { loading: "Chargement de l'expérience" },
  hero: {
    title: "Du code fullstack qui fait",
    highlight: "wow.",
    intro: "Je transforme des idées en produits web rapides et solides avec Angular, Next.js et React, puis je leur donne vie avec du mouvement.",
    scroll: "Scrollez pour explorer",
  },
  chapters: [
    {
      title: "Une idée",
      text: "Chaque projet commence comme un nuage de possibilités : un besoin, une émotion, une direction.",
    },
    {
      title: "Devient du code",
      text: "Je la structure en code propre, typé et évolutif, de l'API jusqu'aux composants.",
    },
    {
      title: "Devient une expérience",
      text: "Puis je lui donne vie : des interfaces rapides, des animations fluides et ce petit effet wow.",
    },
  ],
  about: {
    label: "À propos",
    text: "Moi c'est Daizi, dév fullstack à Yaoundé. Je construis tout le produit, de l'API à l'interface, mais c'est sur le frontend que je brille : Angular, Next.js et React. Ce que j'aime par-dessus tout, c'est le mouvement, ces détails qui font qu'on arrête de scroller pour dire wow.",
  },
  stack: [
    { group: "Frontend", items: stackItems.frontend },
    { group: "Backend", items: stackItems.backend },
    { group: "Outils", items: stackItems.tools },
  ],
  work: {
    label: "Projets choisis",
    title: "Ce que j'ai",
    highlight: "construit.",
    intro: "De vrais produits, utilisés par de vraies personnes. Scrollez pour les découvrir.",
    view: "Voir",
    screenshot: "Capture d'écran de",
    projects: [
      "Plateforme de gestion scolaire : les enseignants saisissent les notes, suivent les présences et leurs classes toute l'année.",
      "Plateforme de streaming HD avec un large catalogue de films et séries, des recommandations personnalisées et une interface fluide.",
      "Un espace pour que d'anciens camarades de classe restent en contact, partagent des nouvelles et collaborent facilement.",
    ],
  },
  contact: {
    label: "Contact",
    title: "Créons quelque chose de",
    highlight: "wow.",
    intro: "Un projet, un poste, ou juste une idée ? Parlez-m'en, je réponds en général sous 24 heures.",
    email: ["Envoyer", "un email"],
    name: "Votre nom",
    yourEmail: "Votre email",
    message: "Votre message",
    send: "Envoyer",
    sending: "Envoi…",
    sent: "Merci ! Votre message est en route.",
    error: "Une erreur est survenue, écrivez-moi directement par email.",
    time: "à Yaoundé",
  },
  signature: { thanks: "Merci d'avoir scrollé", top: "Retour en haut" },
};

export const content: Record<Lang, Content> = { en, fr };
export const projects = projectLinks;
