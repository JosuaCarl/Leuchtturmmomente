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
  name: "Leuchtturmmomente",
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
    email: "e_twesten@yahoo.com",
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
    { label: "Monday", days: [0], opens: "06:30", closes: "19:00" },
    { label: "Tuesday", days: [1], opens: "06:30", closes: "19:00" },
    { label: "Wednesday", days: [2], closed: true },
    { label: "Thursday", days: [3], opens: "06:30", closes: "19:00" },
    { label: "Friday", days: [4], opens: "06:30", closes: "19:00" },
    { label: "Saturday", days: [5], opens: "06:30", closes: "19:30" },
    { label: "Sunday", days: [6], opens: "07:00", closes: "13:00" },
  ] as OpeningHours[],

  // --- Navigation (home page anchors + pages) --------------------------------
  navigation: [
    { label: "Our products", href: "/#services" },
    { label: "Our story", href: "/#about" },
    { label: "Gallery", href: "/#gallery" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Visit us", href: "/#info" },
    { label: "Contact", href: "/#contact" },
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
      "Individuelle Trauerreden, die Nähe stiften und Halt geben. Hinter Leuchtturmmomente steht die Überzeugung, dass aus jedem Leben prägende Momente bestehen bleiben.",
    image: "/images/hero.png",
    imageAlt: "Freshly baked sourdough loaf held on a linen cloth",
    primaryCta: { label: "Unsere Angebote", href: "/#services" },
    secondaryCta: { label: "Sie finden uns hier", href: "/#info" },
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
    eyebrow: "Since 1987",
    title: "Our story",
    paragraphs: [
      "Settled on rue du Docteur Paccard since 1987, The Alpine Loaf has been run by the Ravanel family for three generations. We work exclusively with stone-milled Alpine flours and a sourdough starter we have kept alive for over thirty years.",
      "Summer and winter alike, the ovens are lit at 3am so that mountain guides, seasonal workers and families find warm bread the minute we open.",
    ],
    image: "/images/about.webp",
    imageAlt: "Baker's hands kneading floured dough on a dark workbench",
  },

  // --- Gallery (4 to 8 images) ---------------------------------------------------
  gallery: {
    eyebrow: "Behind the counter",
    title: "In pictures",
    // The first image is featured (2×2 in the grid): 5 or 7 images fill the
    // grid perfectly on desktop.
    images: [
      { src: "/images/gallery-1.webp", alt: "Wooden shelves stacked with rustic sourdough loaves" },
      { src: "/images/gallery-2.webp", alt: "Golden croissants in the bakery display case" },
      { src: "/images/gallery-3.webp", alt: "Éclairs and cream puffs lined up on the pastry counter" },
      { src: "/images/gallery-4.webp", alt: "The bakery storefront and its green woodwork" },
      { src: "/images/gallery-5.webp", alt: "Baker presenting a crusty boule over the wooden counter" },
    ],
  },

  // --- Customer reviews (copied from the business's Google profile) --------------
  reviews: {
    eyebrow: "Reviews",
    title: "In their words",
    // Link to the "reviews" tab of the Google profile, to read or leave more
    allReviewsUrl: "https://maps.google.com/?cid=EXAMPLE",
    items: [
      {
        author: "Marie L.",
        rating: 5,
        text: "The best bread in the valley, hands down. The stone-milled boule keeps for a week and the mont-blanc is to die for.",
      },
      {
        author: "Thomas B.",
        rating: 5,
        text: "Open early — perfect before heading out on a route. The baguette sandwiches are generous and the coffee is good.",
      },
      {
        author: "Elena K.",
        rating: 4,
        text: "Wonderful bakery, authentic sourdough bread. A bit of a queue on Saturday mornings but absolutely worth it.",
      },
    ],
  },

  // --- FAQ (SEO bonus: questions people actually type into Google) ---------------
  faq: {
    eyebrow: "Good to know",
    title: "Frequently asked questions",
    items: [
      {
        question: "Do you bake special breads to order?",
        answer:
          "Yes: rye loaves, gluten-free (dedicated oven on Tuesdays) and large pieces for restaurants and mountain huts, ordered 48 hours ahead by phone.",
      },
      {
        question: "Can I order a birthday or wedding cake?",
        answer:
          "Of course. Allow one week's notice for tiered and custom cakes. Drop by the shop and we'll design it together.",
      },
      {
        question: "Are you open between seasons?",
        answer:
          "Yes, all year round except Wednesdays and three weeks in November. Holiday dates are posted in the shop and on our Google profile.",
      },
      {
        question: "Where can I park near the bakery?",
        answer:
          "The Mont-Blanc car park is a 3-minute walk away, and there is a drop-off zone right outside the shop on rue du Docteur Paccard.",
      },
    ],
  },

  // --- Call-to-action banner ------------------------------------------------------
  ctaBanner: {
    title: "Planning an event?",
    text: "Buffets, weddings, seminars or mountain-hut resupply: write to us and we'll send a quote within 24 hours.",
    button: { label: "Request a quote", href: "/#contact" },
  },

  // --- Contact form ------------------------------------------------------------------
  contact: {
    eyebrow: "Get in touch",
    title: "Write to us",
    intro:
      "A question, a special order? Leave us a message — we reply within one business day.",
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
    companyType: "SARL with a capital of €10,000",
    registrationNumber: "000 000 000 00000",
    publisher: "Jeanne Ravanel",
    host: {
      name: "Vercel Inc.",
      address: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
      url: "https://vercel.com",
    },
  },

  // --- UI strings ------------------------------------------------------------------------
  // Every fixed label used by the components. Translate this section (plus the
  // content above) to ship the site in another language — no component edits.
  ui: {
    skipToContent: "Skip to content",
    menuOpenLabel: "Open menu",
    closedLabel: "Closed",
    hoursTitle: "Opening hours",
    findUsTitle: "Find us",
    infoEyebrow: "Practical",
    infoTitle: "Visit us",
    directionsLabel: "Directions on Google Maps",
    googleProfileLabel: "Our Google profile",
    readAllReviews: "Read all reviews on Google →",
    ratingLabel: "Rating:", // followed by "4 out of 5"
    ratingOutOf: "out of 5",
    reviewsScoreLabel: "from Google reviews", // under the big average score
    formNameLabel: "Your name",
    formEmailLabel: "Your email",
    formMessageLabel: "Your message",
    formSubmitLabel: "Send message",
    formHoneypotLabel: "Leave this field empty",
    legalNoticeLabel: "Legal notice",
    privacyPolicyLabel: "Privacy policy",
    allRightsReserved: "All rights reserved",
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
