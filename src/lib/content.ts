// All the text of the portfolio lives here, in English and French,
// so it can be edited without touching the components.

export type Lang = "en" | "fr";

export const profile = {
  name: "Daizi",
  fullName: "Dimitri Tiolong",
  email: "dimitritiolong@gmail.com",
  // Put a resume in `public/` (e.g. public/cv.pdf) and set its path here to show the download button.
  cv: "",
  socials: [
    { label: "GitHub", href: "https://github.com/DaiziDev" },
    { label: "Facebook", href: "https://www.facebook.com/share/1Bgo9E37Xe/" },
  ],
};

// Language-independent project data. `href: null` means the project isn't public yet.
const projectData = [
  {
    title: "Akademee",
    year: "2026",
    role: "Fullstack",
    tags: ["FR / EN / LMD", "Report cards", "Mobile money"],
    href: "https://akademee.com/",
    image: "/projects/akademee.webp",
  },
  {
    title: "Spotfli",
    year: "2026",
    role: "Lead frontend",
    tags: ["Search", "Listings", "FR / EN"],
    href: "https://spotfli.com/",
    image: "/projects/spotfli.webp",
  },
  {
    title: "Sekouh",
    year: "2026",
    role: "Lead frontend",
    tags: ["Dashboard", "Grades", "Payments"],
    href: null,
    image: "/projects/sekouh.webp",
  },
  {
    title: "Grace Bilingual",
    year: "2025",
    role: "Fullstack",
    tags: ["PHP", "Bootstrap", "JavaScript"],
    href: "https://gracebilingual.com/",
    image:
      "https://res.cloudinary.com/dlhevtzle/image/upload/f_auto,q_auto,w_1400/v1769015188/Capture_d_%C3%A9cran_2026-01-21_143956_lf4lpe.png",
  },
  {
    title: "Kotaflix",
    year: "2025",
    role: "Frontend",
    tags: ["React", "Tailwind CSS", "API"],
    href: "https://kotaflix-rca.onrender.com/",
    image:
      "https://res.cloudinary.com/dlhevtzle/image/upload/f_auto,q_auto,w_1400/v1769015188/Capture_d_%C3%A9cran_2026-01-21_152627_ss8je0.png",
  },
  {
    title: "GBHS Students",
    year: "2024",
    role: "Frontend",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    href: "https://gbhs-students.onrender.com/",
    image:
      "https://res.cloudinary.com/dlhevtzle/image/upload/f_auto,q_auto,w_1400/v1761382072/class_dxmlx2.png",
  },
];

const stackItems = {
  frontend: ["Angular", "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "GSAP", "Three.js"],
  backend: ["Java", "Spring Boot", "PHP", "PostgreSQL", "SQL", "REST APIs"],
  tools: ["Git", "GitHub", "GitLab", "Figma"],
};

const en = {
  role: "Fullstack Developer",
  location: "Yaoundé, Cameroon",
  nav: {
    links: [
      { label: "Story", href: "#story" },
      { label: "Services", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Journey", href: "#journey" },
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
    intro: "I build web products end to end, from Java and Spring Boot APIs to Angular and React interfaces, and bring them to life with motion.",
    scroll: "Scroll to explore",
  },
  chapters: [
    {
      title: "An idea",
      text: "Every project starts as a cloud of possibilities: a need, a feeling, a direction.",
    },
    {
      title: "Becomes code",
      text: "I model the data, write the Java and Spring Boot API, then the components that use it.",
    },
    {
      title: "Becomes an interface",
      text: "Fast, responsive screens with smooth motion and that little wow effect.",
    },
    {
      title: "Gets tested",
      text: "Before anything ships, I walk through every flow like a real user would.",
    },
  ],
  about: {
    label: "About",
    text: "I'm Dimitri Tiolong, aka Daizi, a fullstack developer based in Yaoundé. I build the whole product, from Java and Spring Boot APIs to the interface, and I lead the frontend on products like Spotfli and Sekouh. My favourite part is Angular, React and Next.js, and above all motion: the details that make someone stop scrolling and say wow.",
  },
  services: {
    label: "What I do",
    title: "From the database",
    highlight: "to the last pixel.",
    items: [
      {
        title: "Frontend",
        text: "Interfaces that feel alive: responsive, accessible and animated, built with Angular, React and Next.js.",
        points: ["Component architecture", "Responsive & accessible UI", "Motion & WebGL", "Figma to code"],
      },
      {
        title: "Backend",
        text: "Solid foundations behind the screens: clean data models and APIs that hold up in production.",
        points: ["Java & Spring Boot", "REST API design", "PostgreSQL & SQL", "Data modeling & normalisation"],
      },
      {
        title: "Frontend lead",
        text: "On Spotfli and Sekouh I lead the frontend: the structure, the standards, and the quality of every screen.",
        points: ["Frontend architecture", "Code reviews & conventions", "Reusable UI components", "Functional checks before release"],
      },
    ],
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
    private: "Private beta",
    screenshot: "Screenshot of",
    projects: [
      "Cameroonian school platform for Francophone, Anglophone and LMD schools: grades, report cards, fees with mobile money and school websites.",
      "Find your perfect place in Cameroon: hotels, homes to rent or buy and services, with search by category and location.",
      "School management dashboard: enrolments, classes, grades, payments and report cards, with a role for each staff member.",
      "School management system: register users, enter marks and print report cards.",
      "Responsive streaming platform for movies, videos and music, with seamless multimedia sharing.",
      "A website for former classmates to connect, share updates and collaborate easily.",
    ],
  },
  journey: {
    label: "Journey",
    title: "How I got",
    highlight: "here.",
    items: [
      {
        period: "Recent",
        title: "Lead frontend developer",
        place: "Spotfli · Sekouh",
        text: "Leading the frontend of a Cameroonian real-estate & services platform and of a school-management dashboard: architecture, components, conventions and reviews.",
      },
      {
        period: "Recent",
        title: "Fullstack developer",
        place: "Akademee",
        text: "Building features end to end on a school platform for Francophone, Anglophone and LMD schools, from the API to the screens.",
      },
      {
        period: "Recent",
        title: "Functional tester",
        place: "Core banking application",
        text: "Manual functional testing on a core banking system: following test scenarios and reporting issues.",
      },
      {
        period: "Oct 2024 — now",
        title: "Fullstack developer",
        place: "Kfokam48 Training Center",
        text: "Deepening HTML, CSS and JavaScript, then designing and implementing responsive interfaces with React and Angular, backed by Java, PHP and SQL.",
      },
      {
        period: "2022 — 2023",
        title: "Secondary science education",
        place: "GBHS Koutaba",
        text: "Mathematics, computer science and IT. First lines of HTML and CSS, first algorithms and databases.",
      },
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
      { label: "Services", href: "#services" },
      { label: "Projets", href: "#work" },
      { label: "Parcours", href: "#journey" },
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
    intro: "Je construis des produits web de bout en bout, des API Java et Spring Boot jusqu'aux interfaces Angular et React, puis je leur donne vie avec du mouvement.",
    scroll: "Scrollez pour explorer",
  },
  chapters: [
    {
      title: "Une idée",
      text: "Chaque projet commence comme un nuage de possibilités : un besoin, une émotion, une direction.",
    },
    {
      title: "Devient du code",
      text: "Je modélise les données, j'écris l'API en Java et Spring Boot, puis les composants qui s'en servent.",
    },
    {
      title: "Devient une interface",
      text: "Des écrans rapides et responsives, des animations fluides et ce petit effet wow.",
    },
    {
      title: "Est testée",
      text: "Avant toute mise en ligne, je parcours chaque écran comme le ferait un vrai utilisateur.",
    },
  ],
  about: {
    label: "À propos",
    text: "Moi c'est Dimitri Tiolong, alias Daizi, dév fullstack à Yaoundé. Je construis tout le produit, des API Java et Spring Boot jusqu'à l'interface, et je dirige le frontend sur des produits comme Spotfli et Sekouh. Ma partie préférée reste Angular, React et Next.js, et surtout le mouvement : ces détails qui font qu'on arrête de scroller pour dire wow.",
  },
  services: {
    label: "Ce que je fais",
    title: "De la base de données",
    highlight: "au dernier pixel.",
    items: [
      {
        title: "Frontend",
        text: "Des interfaces vivantes : responsives, accessibles et animées, avec Angular, React et Next.js.",
        points: ["Architecture en composants", "UI responsive & accessible", "Animations & WebGL", "De Figma au code"],
      },
      {
        title: "Backend",
        text: "Des fondations solides derrière les écrans : des modèles de données propres et des API qui tiennent en production.",
        points: ["Java & Spring Boot", "Conception d'API REST", "PostgreSQL & SQL", "Modélisation & normalisation"],
      },
      {
        title: "Lead frontend",
        text: "Sur Spotfli et Sekouh, je dirige le frontend : la structure, les standards et la qualité de chaque écran.",
        points: ["Architecture frontend", "Revues de code & conventions", "Composants UI réutilisables", "Vérifications fonctionnelles avant livraison"],
      },
    ],
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
    private: "Bêta privée",
    screenshot: "Capture d'écran de",
    projects: [
      "Plateforme scolaire camerounaise pour les écoles francophones, anglophones et LMD : notes, bulletins, frais par mobile money et sites d'écoles.",
      "Trouver l'espace parfait au Cameroun : hôtels, maisons à louer ou à acheter et services, avec recherche par catégorie et par lieu.",
      "Tableau de bord de gestion scolaire : inscriptions, classes, notes, paiements et bulletins, avec un rôle pour chaque membre du personnel.",
      "Système de gestion scolaire : inscription des utilisateurs, saisie des notes et impression des bulletins.",
      "Plateforme de streaming responsive pour films, vidéos et musique, avec un partage multimédia fluide.",
      "Un site pour que d'anciens camarades de classe restent en contact, partagent des nouvelles et collaborent.",
    ],
  },
  journey: {
    label: "Parcours",
    title: "Le chemin",
    highlight: "parcouru.",
    items: [
      {
        period: "Récemment",
        title: "Lead dév frontend",
        place: "Spotfli · Sekouh",
        text: "Direction du frontend d'une plateforme camerounaise d'immobilier et de services, et d'un tableau de bord de gestion scolaire : architecture, composants, conventions et revues.",
      },
      {
        period: "Récemment",
        title: "Dév fullstack",
        place: "Akademee",
        text: "Développement de fonctionnalités de bout en bout sur une plateforme scolaire pour écoles francophones, anglophones et LMD, de l'API jusqu'aux écrans.",
      },
      {
        period: "Récemment",
        title: "Test fonctionnel",
        place: "Application de core bancaire",
        text: "Tests fonctionnels manuels sur un système de core bancaire : déroulement des scénarios de test et remontée des anomalies.",
      },
      {
        period: "Oct. 2024 — aujourd'hui",
        title: "Dév fullstack",
        place: "Kfokam48 Training Center",
        text: "Approfondissement de HTML, CSS et JavaScript, puis conception et intégration d'interfaces responsives avec React et Angular, avec Java, PHP et SQL côté serveur.",
      },
      {
        period: "2022 — 2023",
        title: "Enseignement secondaire scientifique",
        place: "GBHS Koutaba",
        text: "Mathématiques, informatique et TIC. Premières lignes de HTML et CSS, premiers algorithmes et bases de données.",
      },
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
export const projects = projectData;
