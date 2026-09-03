// ============================================================================
// SITE CONFIG — the ONE file to edit for each new site.
// ============================================================================
// All of the site's content (copy, contact details, opening hours, services,
// reviews...) lives here. Components contain NO hard-coded text: they read
// this config. To spin up a new site: fill in this file, replace the images
// in public/images/, and adjust the colors in src/styles/tokens.css.
//
// This data also powers the SEO: the JSON-LD LocalBusiness markup
// (JsonLdLocalBusiness.astro) is generated automatically from SITE.business.
//
// Every visible UI string lives in SITE.ui — translate that section and the
// content below to ship the site in any language (a full French example is
// provided in examples/french-bakery/).

export const SITE = {
  // --- Identity & URLs -------------------------------------------------------
  url: "https://leuchtturm-momente.org", // NO trailing slash
  lang: "de",
  // BCP 47 locale used for Open Graph (e.g. "en_US", "fr_FR", "de_DE")
  ogLocale: "de_DE",
  name: "Leuchtturm Momente",
  tagline: "Trauerreden, die berühren und trösten",
  description:
    "Individuelle Trauerreden - Gestaltung und Vortrag.",

  // --- Business (powers the JSON-LD LocalBusiness markup) --------------------
  business: {
    // The most specific schema.org type you can find. Useful examples:
    // "Bakery", "Restaurant", "LodgingBusiness", "HairSalon", "Plumber",
    // "SportingGoodsStore", "TouristInformationCenter"... (see schema.org)
    schemaType: "ProfessionalService",
    phone: "+49123456789",
    email: "e_twesten@Noch.Nicht",
    address: {
      street: "Fantasiestraße 12",
      postalCode: "12345",
      city: "Berlin",
      country: "DE",
    },
    // GPS coordinates (Google Maps → right-click the location → copy)
    geo: { latitude: 52.5354, longitude: 13.4019 },
    // Price range shown by Google: "€", "€€", "€€€" (or "$", "$$"...)
    priceRange: "€€",
    // Link to the business's Google Business Profile
    googleBusinessUrl: "https://maps.google.com/?cid=EXAMPLE",
    socialProfiles: [
      "https://www.instagram.com/example",
      "https://www.facebook.com/example",
    ],
  },

  // --- Opening hours (shown on the site AND injected into the JSON-LD) -------
  // days: 0 = Monday ... 6 = Sunday. closed: true = closing day.
  openingHours: [
    { label: "Monday", days: [0], opens: "09:00", closes: "17:00" },
    { label: "Tuesday", days: [1], opens: "09:00", closes: "17:00" },
    { label: "Wednesday", days: [2], opens: "09:00", closes: "17:00"  },
    { label: "Thursday", days: [3], opens: "09:00", closes: "17:00" },
    { label: "Friday", days: [4], opens: "09:00", closes: "17:00" },
    { label: "Saturday", days: [5], closed: true },
    { label: "Sunday", days: [6], closed: true },
  ] as OpeningHours[],

  // --- Navigation (home page anchors + pages) --------------------------------
  navigation: [
    { label: "Angebote", href: "/#services" },
    { label: "Geschichte", href: "/#about" },
    //{ label: "Gallery", href: "/#gallery" },
    //{ label: "Reviews", href: "/#reviews" },
    { label: "Info", href: "/#info" },
    { label: "Kontakt", href: "/#contact" },
  ],

  // --- Hero section -----------------------------------------------------------
  hero: {
    // "immersive" = the photo fills the whole first screen behind a dark
    //               veil (use a wide atmospheric photo, ≥1600px).
    // "split"     = text left, framed photo right, on the dark background
    //               (best with a product close-up).
    layout: "immersive" as "immersive" | "split",
    title: "Ein Licht auf die guten Momente",
    // Optional: a substring of the title rendered in italic accent color.
    // Leave "" to disable.
    titleHighlight: "Momente",
    subtitle:
      "Individuelle Trauerreden, die Nähe stiften und Halt geben. Hinter Leuchtturmmomenten steht die Überzeugung, dass aus jedem Leben prägende Eindrücke bestehen bleiben.",
    image: "images/hero.png",
    imageAlt: "Freshly baked sourdough loaf held on a linen cloth",
    primaryCta: { label: "Unsere Angebote", href: "/#services" },
    secondaryCta: { label: "Hier finden sie uns", href: "/#info" },
    // Trust badges shown under the buttons (2 to 4 short items).
    // Great spots for the Google rating, founding year, a signature promise.
    highlights: ["Jede Rede individuell abgestimmt", "Vertrauensvoller Umgang", "Erfahrung seit 2024"], //" ★ 4.7 auf Google", 
  },

  // --- Services / products (3 to 6 cards) -------------------------------------
  services: {
    eyebrow: "Leistungen", // small uppercase label above the title ("" hides it)
    title: "Unsere Angebote",
    intro: "Begleitung in schweren Zeiten",
    items: [
      {
        title: "Trauerreden gestalten",
        description:
          "Persönliche Abschiedsworte, die die Beziehung zum Verstorbenen einfangen und nahbar machen. Jede Rede wird individuell für Sie geschrieben.",
        icon: "pen",
      },
      {
        title: "Trauerreden vortragen",
        description:
          "Professioneller Vortrag Ihrer Trauerrede auf der Beerdigung. Einfühlsam vorgetragen, mit der Ruhe und Würde, die ein Abschied verdient.",
        icon: "microphone",
      },
      {
        title: "Trauerbegleitung",
        description:
          "Beratung und Begleitung durch den gesamten Prozess: Von der ersten Idee über das Verfassen bis hin zur Übung und Vorbereitung auf den letzten Moment.",
        icon: "holding_heart",
      },
    ],
  },

  // --- About -------------------------------------------------------------------
  about: {
    eyebrow: "Seit 2024",
    title: "Unsere Geschichte",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.",
    ],
    image: "/images/about.jpg",
    imageAlt: "Lampe mit einzelnen ausstrahlenden Lichtpunkten.",
  },

  // --- Gallery (4 to 8 images) ---------------------------------------------------
  gallery: {
  /*
    eyebrow: "Behind the counter",
    title: "In pictures",
    // The first image is featured (2×2 in the grid): 5 or 7 images fill the
    // grid perfectly on desktop.
    images: [
      { src: "/images/gallery-1.webp", alt: "Wooden shelves stacked with rustic sourdough loaves" },
    ],
  */
  },

  // --- Customer reviews (copied from the business's Google profile) --------------
  reviews: {
    /*
    eyebrow: "Eindrücke",
    title: "In ihren Worten",
    // Link to the "reviews" tab of the Google profile, to read or leave more
    allReviewsUrl: "https://maps.google.com/?cid=EXAMPLE",
    items: [
      {
        author: "Marie L.",
        rating: 5,
        text: "The best bread in the valley, hands down. The stone-milled boule keeps for a week and the mont-blanc is to die for.",
      },
    ],
    */
  },

  // --- Call-to-action banner ------------------------------------------------------
  ctaBanner: {
    title: "Wir sind für Sie da",
    text: "Leidenschaft für Worte in Momenten, die sie verdienen.",
    button: { label: "Kontakt", href: "/#contact" },
  },


  // --- FAQ (SEO bonus: questions people actually type into Google) ---------------
  faq: {
    eyebrow: "Gut zu wissen",
    title: "Häufige Fragen",
    items: [
      {
        question: "Muss die Leiche schon kühl sein, damit sie unter die Erde kann?",
        answer:
          "Nein: Ab unter die Erde und zu den Deckel!",
      },
      {
        question: "Welches Material sollte ich bereit stellen?",
        answer:
          "Um die Rede individuell zu gestalten braucht es nicht mehr als gemeinsame Gespräche, wenn sie jedoch etwas haben, dass einfließen soll, können sie uns das gerne mitteilen. " +
          "Fotos, Briefe oder ähnliche Andenken können sie gerne mitbringen, müssen das aber nicht.",
      },
    ],
  },

  // --- Contact form ------------------------------------------------------------------
  contact: {
    eyebrow: "Kontakt",
    title: "Schreiben sie uns",
    intro:
      "Lassen sie uns ihre Nachricht da, wir antworten in der Regel innerhalb eines Werktages.",
    // Form endpoint. Options:
    //  1. Formspree/Basin: paste the URL the service gives you.
    //  2. Your own backend (any endpoint accepting a classic form POST).
    //  3. Leave empty "": the form falls back to a mailto button automatically.
    endpoint: "",
    // Name of the hidden anti-spam (honeypot) field. Your backend must reject
    // any submission where this field is filled in. Keep the default unless
    // your form backend expects a specific field name.
    honeypotField: "website",
  },

  // --- Legal pages ---------------------------------------------------------------------
  // Shown on /legal-notice/ — mandatory for professional sites in many
  // EU countries (e.g. France's LCEN, Germany's Impressumspflicht).
  legal: {
    companyType: "NONE_YET",
    registrationNumber: "000 000 000 00000",
    publisher: "Josua Carl",
    host: {
      name: "GitHub Inc",
      address: "88 Colin P Kelly Jr St, San Francisco, CA 94107-2008, USA",
      url: "https://github.com",
    },
  },

  // --- UI strings ------------------------------------------------------------------------
  // Every fixed label used by the components. Translate this section (plus the
  // content above) to ship the site in another language — no component edits.
  ui: {
    skipToContent: "Skip to content",
    menuOpenLabel: "Menü öffnen",
    closedLabel: "Geschlossen",
    hoursTitle: "Bürozeiten",
    findUsTitle: "Sie finden uns hier:",
    infoEyebrow: "Infos",
    infoTitle: "Besuchen sie uns",
    directionsLabel: "Wegbeschreibung",
    googleProfileLabel: "Unser Google Profil",
    readAllReviews: "Lesen sie alle Bewertungen bei Google →",
    ratingLabel: "Bewertungen:", // followed by "4 out of 5"
    ratingOutOf: "von 5",
    reviewsScoreLabel: "von Google Bewertungen", // under the big average score
    formNameLabel: "Ihr Name",
    formEmailLabel: "Ihre Email",
    formMessageLabel: "Ihre Nachricht",
    formSubmitLabel: "Senden",
    formHoneypotLabel: "Lassen sie das Feld leer",
    legalNoticeLabel: "Impressum",
    privacyPolicyLabel: "Datenschutz",
    allRightsReserved: "Alle Rechte vorenthalten",
    notFoundTitle: "Page not found",
    notFoundText: "The page you are looking for does not exist or has moved.",
    notFoundCta: "Back to the home page",
  },
} as const;

// --- Utility types ---------------------------------------------------------------------
export interface OpeningHours {
  label: string;
  days: number[];
  opens?: string;
  closes?: string;
  closed?: boolean;
}

export type SiteConfig = typeof SITE;
