import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  component: VolakaHome,
});

// ---------- Data ----------
const HERO = "https://volakasuites.gr/assets/hero-C3LuUpIY.jpg";
const LOGO = "/volaka-logo.jpg";
const P1 = "https://volakasuites.gr/assets/NIK_9938-HDR-vPdx6oFZ.jpg";
const P2 = "https://volakasuites.gr/assets/NIK_9895-HDR-zJWf8tlq.jpg";
const P3 = "https://volakasuites.gr/assets/NIK_9696-HDR-CrGr2Bo-.jpg";
const P4 = "https://volakasuites.gr/assets/NIK_9786-HDR-DzNSmowG.jpg";

type Suite = {
  id: string;
  name: string;
  subtitle: string;
  size: string;
  guests: string;
  beds: string;
  kitchen: string;
  price: string;
  features: string[];
  description: string;
  photos: string[];
};

const SUITES: Suite[] = [
  {
    id: "diamond",
    name: "Diamond",
    subtitle: "One-Bedroom Apartment",
    size: "52 m²",
    guests: "Up to 4",
    beds: "1 Large Double Bed + 1 Sofa Bed",
    kitchen: "Full Kitchen — washing machine, refrigerator, coffee machine, oven & stovetop",
    price: "From €180 / night",
    features: [
      "Panoramic view of Neratzia Castle",
      "Separate living & sleeping areas",
      "Private entrance",
      "Premium soundproofing",
    ],
    description:
      "Wake up to the soft light of Kos filtering through your windows and let the panoramic landmark views set the tone for the day. The Diamond suite wraps you in generous space and quiet luxury.",
    photos: [P1, P2, P3, P4],
  },
  {
    id: "ruby",
    name: "Ruby",
    subtitle: "Junior Suite with Balcony",
    size: "36 m²",
    guests: "Up to 2",
    beds: "1 Large Double Bed",
    kitchen: "Kitchenette — coffee machine, refrigerator, stovetop, electric kettle",
    price: "From €140 / night",
    features: [
      "Private balcony with landmark view",
      "Refined 36 m² of living space",
      "Complimentary high-speed WiFi",
      "Premium soundproofing throughout",
    ],
    description:
      "Step onto your private balcony and let the morning breeze of the Aegean greet you. Ruby offers the perfect balance of intimate comfort and refined luxury with landmark views.",
    photos: [P2, P1, P3, P4],
  },
  {
    id: "sapphire",
    name: "Sapphire",
    subtitle: "Junior Suite with Balcony",
    size: "43 m²",
    guests: "Up to 2",
    beds: "1 Large Double Bed",
    kitchen: "Kitchenette — coffee machine, refrigerator, stovetop, electric kettle",
    price: "From €150 / night",
    features: [
      "Balcony with city view",
      "Private entrance",
      "Premium soundproofing",
      "Complimentary high-speed WiFi",
    ],
    description:
      "Sapphire is a light-filled retreat with a private balcony overlooking Kos Town — refined finishes, discreet luxury and total serenity.",
    photos: [P3, P1, P2, P4],
  },
  {
    id: "emerald",
    name: "Emerald",
    subtitle: "Junior Suite with Balcony",
    size: "40 m²",
    guests: "Up to 2",
    beds: "1 Large Double Bed",
    kitchen: "Kitchenette — coffee machine, refrigerator, stovetop, electric kettle",
    price: "From €145 / night",
    features: [
      "Balcony with landmark view",
      "Flat-screen TV with streaming",
      "Premium soundproofing",
      "Kitchenette for light meals",
    ],
    description:
      "Emerald blends timeless colour and modern comfort. A dedicated media wall, a balcony framing the town, and a bed you will not want to leave.",
    photos: [P4, P1, P2, P3],
  },
];

const AMENITIES = [
  { icon: "📶", title: "Free High-Speed WiFi", desc: "50+ Mbps in every suite" },
  { icon: "🛏️", title: "Premium Linens", desc: "Hand-picked, hotel-grade" },
  { icon: "❄️", title: "Air Conditioning", desc: "In every suite" },
  { icon: "🔇", title: "Soundproofing", desc: "Absolute quiet" },
  { icon: "🗝️", title: "Keyless Entry", desc: "Contactless check-in" },
  { icon: "☕", title: "Coffee Machine", desc: "In every suite" },
  { icon: "🚿", title: "Rainfall Showers", desc: "With premium toiletries" },
  { icon: "📺", title: "Smart TV", desc: "With streaming apps" },
  { icon: "🧺", title: "Washing Machine", desc: "Diamond suite" },
  { icon: "🧭", title: "24/7 Host Support", desc: "WhatsApp & phone" },
];

const AMENITY_ICONS = ["📶","🛏️","❄️","🔇","🗝️","☕","🚿","📺","🧺","🧭"];
const AMENITIES_L: Record<Lang, { title: string; desc: string }[]> = {
  en: [
    { title: "Free High-Speed WiFi", desc: "50+ Mbps in every suite" },
    { title: "Premium Linens", desc: "Hand-picked, hotel-grade" },
    { title: "Air Conditioning", desc: "In every suite" },
    { title: "Soundproofing", desc: "Absolute quiet" },
    { title: "Keyless Entry", desc: "Contactless check-in" },
    { title: "Coffee Machine", desc: "In every suite" },
    { title: "Rainfall Showers", desc: "With premium toiletries" },
    { title: "Smart TV", desc: "With streaming apps" },
    { title: "Washing Machine", desc: "Diamond suite" },
    { title: "24/7 Host Support", desc: "WhatsApp & phone" },
  ],
  el: [
    { title: "Δωρεάν Γρήγορο WiFi", desc: "50+ Mbps σε κάθε σουίτα" },
    { title: "Premium Λευκά Είδη", desc: "Ξενοδοχειακής ποιότητας" },
    { title: "Κλιματισμός", desc: "Σε κάθε σουίτα" },
    { title: "Ηχομόνωση", desc: "Απόλυτη ησυχία" },
    { title: "Είσοδος χωρίς κλειδί", desc: "Contactless check-in" },
    { title: "Καφετιέρα", desc: "Σε κάθε σουίτα" },
    { title: "Ντους Βροχής", desc: "Με premium προϊόντα" },
    { title: "Smart TV", desc: "Με εφαρμογές streaming" },
    { title: "Πλυντήριο", desc: "Σουίτα Diamond" },
    { title: "24/7 Υποστήριξη", desc: "WhatsApp & τηλέφωνο" },
  ],
  de: [
    { title: "Kostenloses High-Speed-WLAN", desc: "50+ Mbps in jeder Suite" },
    { title: "Premium-Bettwäsche", desc: "Hotel-Qualität" },
    { title: "Klimaanlage", desc: "In jeder Suite" },
    { title: "Schallisolierung", desc: "Absolute Ruhe" },
    { title: "Schlüsselloser Zugang", desc: "Kontaktloser Check-in" },
    { title: "Kaffeemaschine", desc: "In jeder Suite" },
    { title: "Regenduschen", desc: "Mit Premium-Pflegeprodukten" },
    { title: "Smart-TV", desc: "Mit Streaming-Apps" },
    { title: "Waschmaschine", desc: "Diamond-Suite" },
    { title: "24/7 Host-Support", desc: "WhatsApp & Telefon" },
  ],
  it: [
    { title: "WiFi ad Alta Velocità", desc: "50+ Mbps in ogni suite" },
    { title: "Biancheria Premium", desc: "Qualità hotel" },
    { title: "Aria Condizionata", desc: "In ogni suite" },
    { title: "Isolamento Acustico", desc: "Silenzio assoluto" },
    { title: "Ingresso senza chiave", desc: "Check-in contactless" },
    { title: "Macchina del caffè", desc: "In ogni suite" },
    { title: "Docce a pioggia", desc: "Con prodotti premium" },
    { title: "Smart TV", desc: "Con app di streaming" },
    { title: "Lavatrice", desc: "Suite Diamond" },
    { title: "Assistenza 24/7", desc: "WhatsApp & telefono" },
  ],
  nl: [
    { title: "Gratis Snelle WiFi", desc: "50+ Mbps in elke suite" },
    { title: "Premium Beddengoed", desc: "Hotelkwaliteit" },
    { title: "Airconditioning", desc: "In elke suite" },
    { title: "Geluidsisolatie", desc: "Absolute rust" },
    { title: "Sleutelloze Toegang", desc: "Contactloze check-in" },
    { title: "Koffiezetapparaat", desc: "In elke suite" },
    { title: "Regendouches", desc: "Met premium producten" },
    { title: "Smart TV", desc: "Met streaming-apps" },
    { title: "Wasmachine", desc: "Diamond suite" },
    { title: "24/7 Ondersteuning", desc: "WhatsApp & telefoon" },
  ],
  fr: [
    { title: "WiFi Haut Débit Gratuit", desc: "50+ Mbps dans chaque suite" },
    { title: "Linge Premium", desc: "Qualité hôtelière" },
    { title: "Climatisation", desc: "Dans chaque suite" },
    { title: "Isolation Phonique", desc: "Silence absolu" },
    { title: "Entrée sans clé", desc: "Check-in sans contact" },
    { title: "Machine à café", desc: "Dans chaque suite" },
    { title: "Douches à effet pluie", desc: "Avec produits premium" },
    { title: "Smart TV", desc: "Avec applis de streaming" },
    { title: "Lave-linge", desc: "Suite Diamond" },
    { title: "Assistance 24/7", desc: "WhatsApp & téléphone" },
  ],
  tr: [
    { title: "Ücretsiz Yüksek Hızlı WiFi", desc: "Her suitte 50+ Mbps" },
    { title: "Premium Nevresim", desc: "Otel kalitesinde" },
    { title: "Klima", desc: "Her suitte" },
    { title: "Ses Yalıtımı", desc: "Mutlak sessizlik" },
    { title: "Anahtarsız Giriş", desc: "Temassız check-in" },
    { title: "Kahve Makinesi", desc: "Her suitte" },
    { title: "Yağmur Duşu", desc: "Premium ürünlerle" },
    { title: "Smart TV", desc: "Streaming uygulamalarıyla" },
    { title: "Çamaşır Makinesi", desc: "Diamond suit" },
    { title: "7/24 Destek", desc: "WhatsApp & telefon" },
  ],
};

const NEARBY_L: Record<Lang, { dist: string; title: string; desc: string }[]> = {
  en: [
    { dist: "Steps away", title: "Eleftherias Square", desc: "The vibrant heart of Kos Town — cafés, ancient ruins and evening life right below your balcony." },
    { dist: "3 min walk", title: "Ancient Agora & Ruins", desc: "Wander through Greco-Roman ruins under the shade of Hippocrates' plane tree." },
    { dist: "5 min walk", title: "Kos Town Beach", desc: "Organised beach with sunbeds and clear Aegean water, minutes from the door." },
    { dist: "2 min walk", title: "Neratzia Castle", desc: "The medieval fortress of the Knights of St. John, framed by your suite's view." },
    { dist: "4 min walk", title: "Marina & Waterfront", desc: "Seafront promenade lined with tavernas, cocktail bars and yachts." },
    { dist: "25 min drive", title: "Kos International Airport", desc: "Private transfer available on request." },
  ],
  el: [
    { dist: "Δίπλα", title: "Πλατεία Ελευθερίας", desc: "Η ζωντανή καρδιά της Κω — καφέ, αρχαία ερείπια και βραδινή ζωή κάτω από το μπαλκόνι σας." },
    { dist: "3 λεπτά", title: "Αρχαία Αγορά", desc: "Περπατήστε στα ελληνορωμαϊκά ερείπια κάτω από τον πλάτανο του Ιπποκράτη." },
    { dist: "5 λεπτά", title: "Παραλία Κω", desc: "Οργανωμένη παραλία με ξαπλώστρες και καθαρά νερά, δύο βήματα μακριά." },
    { dist: "2 λεπτά", title: "Κάστρο Νερατζιάς", desc: "Το μεσαιωνικό κάστρο των Ιπποτών, ορατό από τη σουίτα σας." },
    { dist: "4 λεπτά", title: "Μαρίνα", desc: "Παραλιακός περίπατος με ταβέρνες, μπαρ και σκάφη." },
    { dist: "25 λεπτά", title: "Αεροδρόμιο Κω", desc: "Ιδιωτική μεταφορά διαθέσιμη κατόπιν αιτήματος." },
  ],
  de: [
    { dist: "Direkt unten", title: "Eleftherias-Platz", desc: "Das lebendige Herz von Kos — Cafés, antike Ruinen und Abendleben unter Ihrem Balkon." },
    { dist: "3 Min. Fußweg", title: "Antike Agora", desc: "Spazieren Sie durch griechisch-römische Ruinen unter Hippokrates' Platane." },
    { dist: "5 Min. Fußweg", title: "Stadtstrand Kos", desc: "Organisierter Strand mit Liegen und klarem Wasser, wenige Minuten entfernt." },
    { dist: "2 Min. Fußweg", title: "Neratzia-Burg", desc: "Die mittelalterliche Festung der Johanniter, umrahmt von Ihrer Aussicht." },
    { dist: "4 Min. Fußweg", title: "Marina", desc: "Uferpromenade mit Tavernen, Bars und Yachten." },
    { dist: "25 Min. Fahrt", title: "Flughafen Kos", desc: "Privater Transfer auf Anfrage." },
  ],
  it: [
    { dist: "A pochi passi", title: "Piazza Eleftherias", desc: "Il cuore vivace di Kos — caffè, rovine antiche e vita serale sotto il balcone." },
    { dist: "3 min a piedi", title: "Antica Agorà", desc: "Passeggia tra le rovine greco-romane sotto il platano di Ippocrate." },
    { dist: "5 min a piedi", title: "Spiaggia di Kos", desc: "Spiaggia attrezzata con lettini e acque cristalline, a pochi minuti." },
    { dist: "2 min a piedi", title: "Castello di Neratzia", desc: "La fortezza medievale dei Cavalieri, incorniciata dalla tua vista." },
    { dist: "4 min a piedi", title: "Marina", desc: "Lungomare con taverne, bar e yacht." },
    { dist: "25 min in auto", title: "Aeroporto di Kos", desc: "Transfer privato su richiesta." },
  ],
  nl: [
    { dist: "Vlakbij", title: "Eleftherias-plein", desc: "Het bruisende hart van Kos — cafés, oude ruïnes en avondleven onder uw balkon." },
    { dist: "3 min lopen", title: "Oude Agora", desc: "Wandel door Grieks-Romeinse ruïnes onder de plataan van Hippocrates." },
    { dist: "5 min lopen", title: "Strand van Kos", desc: "Georganiseerd strand met ligbedden en helder water, op enkele minuten." },
    { dist: "2 min lopen", title: "Neratzia-kasteel", desc: "De middeleeuwse vesting van de Ridders, ingelijst door uw uitzicht." },
    { dist: "4 min lopen", title: "Jachthaven", desc: "Boulevard met taverna's, bars en jachten." },
    { dist: "25 min rijden", title: "Luchthaven Kos", desc: "Privétransfer op verzoek." },
  ],
  fr: [
    { dist: "À deux pas", title: "Place Eleftherias", desc: "Le cœur vibrant de Kos — cafés, ruines antiques et vie nocturne sous votre balcon." },
    { dist: "3 min à pied", title: "Ancienne Agora", desc: "Promenez-vous parmi les ruines gréco-romaines sous le platane d'Hippocrate." },
    { dist: "5 min à pied", title: "Plage de Kos", desc: "Plage aménagée avec transats et eau claire, à quelques minutes." },
    { dist: "2 min à pied", title: "Château de Neratzia", desc: "La forteresse médiévale des Chevaliers, encadrée par votre vue." },
    { dist: "4 min à pied", title: "Marina", desc: "Promenade avec tavernes, bars et yachts." },
    { dist: "25 min en voiture", title: "Aéroport de Kos", desc: "Transfert privé sur demande." },
  ],
  tr: [
    { dist: "Hemen yanı", title: "Eleftherias Meydanı", desc: "Kos'un canlı kalbi — kafeler, antik kalıntılar ve balkonunuzun altında akşam hayatı." },
    { dist: "3 dk yürüyüş", title: "Antik Agora", desc: "Hipokrat'ın çınarının altında Greko-Romen kalıntıları arasında yürüyün." },
    { dist: "5 dk yürüyüş", title: "Kos Plajı", desc: "Şezlonglu düzenli plaj ve berrak Ege suları, dakikalar uzakta." },
    { dist: "2 dk yürüyüş", title: "Neratzia Kalesi", desc: "Şövalyelerin ortaçağ kalesi, manzaranızda çerçevelenmiş." },
    { dist: "4 dk yürüyüş", title: "Marina", desc: "Tavernalar, barlar ve yatlarla sahil şeridi." },
    { dist: "25 dk sürüş", title: "Kos Havalimanı", desc: "Talep üzerine özel transfer." },
  ],
};

const VIEW_MAP_L: Record<Lang, string> = {
  en: "View on Google Maps →", el: "Δείτε στο Google Maps →", de: "Auf Google Maps ansehen →",
  it: "Vedi su Google Maps →", nl: "Bekijk op Google Maps →", fr: "Voir sur Google Maps →", tr: "Google Maps'te gör →",
};

const NEARBY = [
  { dist: "Steps away", title: "Eleftherias Square", desc: "The vibrant heart of Kos Town — cafés, ancient ruins and evening life right below your balcony." },
  { dist: "3 min walk", title: "Ancient Agora & Ruins", desc: "Wander through Greco-Roman ruins under the shade of Hippocrates' plane tree." },
  { dist: "5 min walk", title: "Kos Town Beach", desc: "Organised beach with sunbeds and clear Aegean water, minutes from the door." },
  { dist: "2 min walk", title: "Neratzia Castle", desc: "The medieval fortress of the Knights of St. John, framed by your suite's view." },
  { dist: "4 min walk", title: "Marina & Waterfront", desc: "Seafront promenade lined with tavernas, cocktail bars and yachts." },
  { dist: "25 min drive", title: "Kos International Airport", desc: "Private transfer available on request." },
];

const REVIEWS = [
  { name: "Oksana", country: "Ukraine", stars: 5, text: "It was wonderful. The location was perfect, and so were the apartments. Brand new and very comfortable, right in the centre of Kos Town. The host was very helpful and always replied quickly." },
  { name: "Simon", country: "Germany", stars: 5, text: "Very modern place in a great location. Easy check-in, very new modern and clean apartment. Great location and friendly host. Good WiFi." },
  { name: "Kevin", country: "United Kingdom", stars: 5, text: "A total gem. Very modern apartment. The keyless entry is so good. You couldn't get a better location, with a balcony overlooking the main square in Kos Old Town. The soundproofing is superb." },
];

// ---------- Translations ----------
type Lang = "en" | "el" | "de" | "it" | "nl" | "fr" | "tr";
const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "el", flag: "🇬🇷", label: "EL" },
  { code: "de", flag: "🇩🇪", label: "DE" },
  { code: "it", flag: "🇮🇹", label: "IT" },
  { code: "nl", flag: "🇳🇱", label: "NL" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "tr", flag: "🇹🇷", label: "TR" },
];

type Dict = Record<string, string>;
const T: Record<Lang, Dict> = {
  en: {
    announce: "Book direct & save — best rate guaranteed, flexible cancellation",
    nav_suites: "Suites", nav_experience: "Experience", nav_amenities: "Amenities", nav_nearby: "Location", nav_reviews: "Reviews", nav_faq: "FAQ", nav_contact: "Contact",
    book: "Book Now",
    hero_tag: "Kos Town, Greece", hero_title_a: "Stay in the", hero_title_em: "heart of Kos", hero_title_b: "above the luxury, opposite the history",
    hero_desc: "Four designer suites directly above the Volaka watch boutique, overlooking historic Eleftherias Square. Your private sanctuary in Kos Town.",
    hero_cta1: "Book Direct", hero_cta2: "View Suites",
    stat_rating: "Booking.com", stat_suites: "Designer Suites", stat_check: "24/7 Host", stat_year: "Since 2024",
    intro_eyebrow: "Welcome", intro_title: "Volaka Luxury Suites",
    intro_p1: "Nestled in the heart of Kos Town, Volaka Luxury Suites offers an unparalleled blend of contemporary elegance and Mediterranean charm. Each suite is thoughtfully designed to provide a sanctuary of comfort, where modern luxury meets authentic Greek hospitality.",
    intro_p2: "Whether you seek a romantic escape or a serene retreat, our four suites promise an experience that lingers in memory long after departure.",
    suites_eyebrow: "Accommodations", suites_title: "Featured Suites", suites_desc: "Limited availability for peak season — secure your dates early.",
    view_suite: "View Suite", book_suite: "Book Now",
    size: "Size", guests: "Guests", beds: "Beds", kitchen: "Kitchen", highlights: "Suite Highlights",
    amenities_eyebrow: "Amenities", amenities_title: "Everything crafted, nothing overlooked",
    nearby_eyebrow: "Location", nearby_title: "In the centre of everything", nearby_desc: "Kos Town's history, beaches, tavernas and marina — all within walking distance.",
    reviews_eyebrow: "Testimonials", reviews_title: "What our guests say", reviews_summary: "9.9/10 — Booking.com Traveller Review Award",
    faq_eyebrow: "FAQ", faq_title: "Before you book",
    contact_eyebrow: "Contact", contact_title: "Get in touch", contact_desc: "Questions about your stay? Message us directly — we answer within an hour.",
    phone: "Phone", email: "Email", address: "Address", checkin_label: "Check-in / Check-out",
    close: "Close",
    footer_tag: "Boutique suites in the heart of Kos, above the Volaka boutique.",
    footer_nav: "Explore", footer_hotel: "Stay", footer_social: "Follow",
    footer_copy: "© 2026 Volaka Luxury Suites. All rights reserved.",
  },
  el: {
    announce: "Κράτηση απευθείας & εξοικονόμηση — εγγυημένη καλύτερη τιμή, ευέλικτη ακύρωση",
    nav_suites: "Σουίτες", nav_experience: "Εμπειρία", nav_amenities: "Παροχές", nav_nearby: "Τοποθεσία", nav_reviews: "Αξιολογήσεις", nav_faq: "Ερωτήσεις", nav_contact: "Επικοινωνία",
    book: "Κράτηση",
    hero_tag: "Πόλη της Κω, Ελλάδα", hero_title_a: "Μείνετε στην", hero_title_em: "καρδιά της Κω", hero_title_b: "πάνω από την πολυτέλεια, απέναντι από την ιστορία",
    hero_desc: "Τέσσερις σχεδιαστικές σουίτες ακριβώς πάνω από το κατάστημα Volaka, με θέα στην ιστορική Πλατεία Ελευθερίας. Το ιδιωτικό σας καταφύγιο στην Πόλη της Κω.",
    hero_cta1: "Κάντε Κράτηση", hero_cta2: "Δείτε τις Σουίτες",
    stat_rating: "Booking.com", stat_suites: "Σχεδιαστικές Σουίτες", stat_check: "24/7 Υποστήριξη", stat_year: "Από το 2024",
    intro_eyebrow: "Καλώς ήρθατε", intro_title: "Volaka Luxury Suites",
    intro_p1: "Στην καρδιά της Πόλης της Κω, οι Volaka Luxury Suites προσφέρουν έναν απαράμιλλο συνδυασμό σύγχρονης κομψότητας και μεσογειακής γοητείας. Κάθε σουίτα έχει σχεδιαστεί προσεκτικά για να αποτελέσει έναν χώρο άνεσης, όπου η μοντέρνα πολυτέλεια συναντά την αυθεντική ελληνική φιλοξενία.",
    intro_p2: "Είτε αναζητάτε ρομαντική απόδραση είτε ήρεμη ανάπαυση, οι τέσσερις σουίτες μας υπόσχονται μια εμπειρία που θα μείνει αξέχαστη.",
    suites_eyebrow: "Καταλύματα", suites_title: "Οι Σουίτες μας", suites_desc: "Περιορισμένη διαθεσιμότητα για την υψηλή σεζόν — κλείστε νωρίς.",
    view_suite: "Δείτε τη Σουίτα", book_suite: "Κράτηση",
    size: "Μέγεθος", guests: "Επισκέπτες", beds: "Κρεβάτια", kitchen: "Κουζίνα", highlights: "Χαρακτηριστικά",
    amenities_eyebrow: "Παροχές", amenities_title: "Όλα στη λεπτομέρεια",
    nearby_eyebrow: "Τοποθεσία", nearby_title: "Στο κέντρο των πάντων", nearby_desc: "Ιστορία, παραλίες, ταβέρνες και μαρίνα — όλα με τα πόδια.",
    reviews_eyebrow: "Μαρτυρίες", reviews_title: "Τι λένε οι επισκέπτες μας", reviews_summary: "9.9/10 — Booking.com Traveller Review Award",
    faq_eyebrow: "Συχνές ερωτήσεις", faq_title: "Πριν κάνετε κράτηση",
    contact_eyebrow: "Επικοινωνία", contact_title: "Ελάτε σε επαφή", contact_desc: "Ερωτήσεις για τη διαμονή σας; Στείλτε μας μήνυμα — απαντάμε εντός μιας ώρας.",
    phone: "Τηλέφωνο", email: "Email", address: "Διεύθυνση", checkin_label: "Check-in / Check-out",
    close: "Κλείσιμο",
    footer_tag: "Boutique σουίτες στην καρδιά της Κω, πάνω από την μπουτίκ Volaka.",
    footer_nav: "Πλοήγηση", footer_hotel: "Διαμονή", footer_social: "Ακολουθήστε",
    footer_copy: "© 2026 Volaka Luxury Suites. Με επιφύλαξη παντός δικαιώματος.",
  },
  de: {
    announce: "Direkt buchen & sparen — Bestpreisgarantie, flexible Stornierung",
    nav_suites: "Suiten", nav_experience: "Erlebnis", nav_amenities: "Ausstattung", nav_nearby: "Lage", nav_reviews: "Bewertungen", nav_faq: "FAQ", nav_contact: "Kontakt",
    book: "Buchen",
    hero_tag: "Kos-Stadt, Griechenland", hero_title_a: "Wohnen im", hero_title_em: "Herzen von Kos", hero_title_b: "über dem Luxus, gegenüber der Geschichte",
    hero_desc: "Vier Designer-Suiten direkt über der Volaka Boutique, mit Blick auf den historischen Eleftherias-Platz. Ihr privates Refugium in Kos-Stadt.",
    hero_cta1: "Direkt buchen", hero_cta2: "Suiten ansehen",
    stat_rating: "Booking.com", stat_suites: "Designer-Suiten", stat_check: "24/7 Support", stat_year: "Seit 2024",
    intro_eyebrow: "Willkommen", intro_title: "Volaka Luxury Suites",
    intro_p1: "Volaka Luxury Suites im Herzen von Kos-Stadt verbindet zeitgenössische Eleganz mit mediterranem Charme. Jede Suite ist mit Bedacht gestaltet — moderner Luxus trifft griechische Gastfreundschaft.",
    intro_p2: "Ob romantische Auszeit oder ruhiger Rückzugsort — unsere vier Suiten versprechen ein unvergessliches Erlebnis.",
    suites_eyebrow: "Unterkunft", suites_title: "Unsere Suiten", suites_desc: "Begrenzte Verfügbarkeit in der Hochsaison — sichern Sie sich Ihre Termine.",
    view_suite: "Suite ansehen", book_suite: "Buchen",
    size: "Größe", guests: "Gäste", beds: "Betten", kitchen: "Küche", highlights: "Highlights",
    amenities_eyebrow: "Ausstattung", amenities_title: "Alles bedacht",
    nearby_eyebrow: "Lage", nearby_title: "Mitten im Geschehen", nearby_desc: "Geschichte, Strände, Tavernen und Yachthafen — alles zu Fuß erreichbar.",
    reviews_eyebrow: "Stimmen", reviews_title: "Was unsere Gäste sagen", reviews_summary: "9.9/10 — Booking.com Traveller Review Award",
    faq_eyebrow: "FAQ", faq_title: "Vor Ihrer Buchung",
    contact_eyebrow: "Kontakt", contact_title: "Kontakt aufnehmen", contact_desc: "Fragen zu Ihrem Aufenthalt? Schreiben Sie uns — Antwort innerhalb einer Stunde.",
    phone: "Telefon", email: "E-Mail", address: "Adresse", checkin_label: "Check-in / Check-out",
    close: "Schließen",
    footer_tag: "Boutique-Suiten im Herzen von Kos, über der Volaka Boutique.",
    footer_nav: "Entdecken", footer_hotel: "Aufenthalt", footer_social: "Folgen",
    footer_copy: "© 2026 Volaka Luxury Suites. Alle Rechte vorbehalten.",
  },
  it: {
    announce: "Prenota diretto e risparmia — miglior prezzo garantito, cancellazione flessibile",
    nav_suites: "Suite", nav_experience: "Esperienza", nav_amenities: "Servizi", nav_nearby: "Posizione", nav_reviews: "Recensioni", nav_faq: "FAQ", nav_contact: "Contatti",
    book: "Prenota",
    hero_tag: "Città di Kos, Grecia", hero_title_a: "Vivi nel", hero_title_em: "cuore di Kos", hero_title_b: "sopra il lusso, di fronte alla storia",
    hero_desc: "Quattro suite di design proprio sopra la boutique Volaka, affacciate sulla storica Piazza Eleftherias. Il tuo rifugio privato nella Città di Kos.",
    hero_cta1: "Prenota diretto", hero_cta2: "Vedi le Suite",
    stat_rating: "Booking.com", stat_suites: "Suite di design", stat_check: "Assistenza 24/7", stat_year: "Dal 2024",
    intro_eyebrow: "Benvenuti", intro_title: "Volaka Luxury Suites",
    intro_p1: "Nel cuore della Città di Kos, Volaka Luxury Suites offre un connubio impareggiabile di eleganza contemporanea e fascino mediterraneo. Ogni suite è un santuario di comfort — lusso moderno e autentica ospitalità greca.",
    intro_p2: "Che cerchiate una fuga romantica o un ritiro sereno, le nostre quattro suite promettono un'esperienza indimenticabile.",
    suites_eyebrow: "Alloggi", suites_title: "Le nostre Suite", suites_desc: "Disponibilità limitata in alta stagione — assicurati le tue date.",
    view_suite: "Vedi la Suite", book_suite: "Prenota",
    size: "Dimensioni", guests: "Ospiti", beds: "Letti", kitchen: "Cucina", highlights: "Punti forti",
    amenities_eyebrow: "Servizi", amenities_title: "Ogni dettaglio curato",
    nearby_eyebrow: "Posizione", nearby_title: "Nel centro di tutto", nearby_desc: "Storia, spiagge, taverne e porto turistico — tutto a piedi.",
    reviews_eyebrow: "Testimonianze", reviews_title: "Cosa dicono i nostri ospiti", reviews_summary: "9.9/10 — Booking.com Traveller Review Award",
    faq_eyebrow: "FAQ", faq_title: "Prima di prenotare",
    contact_eyebrow: "Contatti", contact_title: "Mettiti in contatto", contact_desc: "Domande sul soggiorno? Scrivici — rispondiamo entro un'ora.",
    phone: "Telefono", email: "Email", address: "Indirizzo", checkin_label: "Check-in / Check-out",
    close: "Chiudi",
    footer_tag: "Suite boutique nel cuore di Kos, sopra la boutique Volaka.",
    footer_nav: "Esplora", footer_hotel: "Soggiorno", footer_social: "Seguici",
    footer_copy: "© 2026 Volaka Luxury Suites. Tutti i diritti riservati.",
  },
  nl: {
    announce: "Direct boeken & besparen — laagste prijs gegarandeerd, flexibele annulering",
    nav_suites: "Suites", nav_experience: "Ervaring", nav_amenities: "Voorzieningen", nav_nearby: "Locatie", nav_reviews: "Beoordelingen", nav_faq: "FAQ", nav_contact: "Contact",
    book: "Boek nu",
    hero_tag: "Kos-stad, Griekenland", hero_title_a: "Verblijf in het", hero_title_em: "hart van Kos", hero_title_b: "boven de luxe, tegenover de geschiedenis",
    hero_desc: "Vier designersuites recht boven de Volaka-boutique, met uitzicht op het historische Eleftherias-plein. Uw privé-toevluchtsoord in Kos-stad.",
    hero_cta1: "Direct boeken", hero_cta2: "Bekijk suites",
    stat_rating: "Booking.com", stat_suites: "Designersuites", stat_check: "24/7 support", stat_year: "Sinds 2024",
    intro_eyebrow: "Welkom", intro_title: "Volaka Luxury Suites",
    intro_p1: "In het hart van Kos-stad biedt Volaka Luxury Suites een unieke combinatie van hedendaagse elegantie en mediterrane charme. Elke suite is een oase van comfort — moderne luxe ontmoet authentieke Griekse gastvrijheid.",
    intro_p2: "Of u nu een romantische ontsnapping zoekt of een serene retraite, onze vier suites beloven een onvergetelijke ervaring.",
    suites_eyebrow: "Accommodatie", suites_title: "Onze Suites", suites_desc: "Beperkte beschikbaarheid in het hoogseizoen — boek tijdig.",
    view_suite: "Bekijk suite", book_suite: "Boek nu",
    size: "Grootte", guests: "Gasten", beds: "Bedden", kitchen: "Keuken", highlights: "Hoogtepunten",
    amenities_eyebrow: "Voorzieningen", amenities_title: "Alles doordacht",
    nearby_eyebrow: "Locatie", nearby_title: "In het centrum van alles", nearby_desc: "Geschiedenis, stranden, taverna's en jachthaven — allemaal op loopafstand.",
    reviews_eyebrow: "Getuigenissen", reviews_title: "Wat onze gasten zeggen", reviews_summary: "9.9/10 — Booking.com Traveller Review Award",
    faq_eyebrow: "FAQ", faq_title: "Voor u boekt",
    contact_eyebrow: "Contact", contact_title: "Neem contact op", contact_desc: "Vragen over uw verblijf? Stuur ons een bericht — antwoord binnen een uur.",
    phone: "Telefoon", email: "E-mail", address: "Adres", checkin_label: "Check-in / Check-out",
    close: "Sluiten",
    footer_tag: "Boutique-suites in het hart van Kos, boven de Volaka-boutique.",
    footer_nav: "Ontdek", footer_hotel: "Verblijf", footer_social: "Volg ons",
    footer_copy: "© 2026 Volaka Luxury Suites. Alle rechten voorbehouden.",
  },
  fr: {
    announce: "Réservez direct et économisez — meilleur prix garanti, annulation flexible",
    nav_suites: "Suites", nav_experience: "Expérience", nav_amenities: "Équipements", nav_nearby: "Emplacement", nav_reviews: "Avis", nav_faq: "FAQ", nav_contact: "Contact",
    book: "Réserver",
    hero_tag: "Ville de Kos, Grèce", hero_title_a: "Séjournez au", hero_title_em: "cœur de Kos", hero_title_b: "au-dessus du luxe, face à l'histoire",
    hero_desc: "Quatre suites de designer juste au-dessus de la boutique Volaka, dominant la place historique Eleftherias. Votre sanctuaire privé à Kos.",
    hero_cta1: "Réserver en direct", hero_cta2: "Voir les suites",
    stat_rating: "Booking.com", stat_suites: "Suites de designer", stat_check: "Support 24/7", stat_year: "Depuis 2024",
    intro_eyebrow: "Bienvenue", intro_title: "Volaka Luxury Suites",
    intro_p1: "Au cœur de Kos-ville, Volaka Luxury Suites propose un mélange incomparable d'élégance contemporaine et de charme méditerranéen. Chaque suite est un havre de confort — luxe moderne et authentique hospitalité grecque.",
    intro_p2: "Escapade romantique ou retraite sereine, nos quatre suites promettent une expérience mémorable.",
    suites_eyebrow: "Hébergement", suites_title: "Nos Suites", suites_desc: "Disponibilité limitée en haute saison — réservez tôt.",
    view_suite: "Voir la suite", book_suite: "Réserver",
    size: "Superficie", guests: "Invités", beds: "Lits", kitchen: "Cuisine", highlights: "Points forts",
    amenities_eyebrow: "Équipements", amenities_title: "Chaque détail soigné",
    nearby_eyebrow: "Emplacement", nearby_title: "Au centre de tout", nearby_desc: "Histoire, plages, tavernes et marina — tout à pied.",
    reviews_eyebrow: "Témoignages", reviews_title: "Ce que disent nos clients", reviews_summary: "9.9/10 — Booking.com Traveller Review Award",
    faq_eyebrow: "FAQ", faq_title: "Avant de réserver",
    contact_eyebrow: "Contact", contact_title: "Nous contacter", contact_desc: "Questions sur votre séjour ? Écrivez-nous — réponse en une heure.",
    phone: "Téléphone", email: "Email", address: "Adresse", checkin_label: "Check-in / Check-out",
    close: "Fermer",
    footer_tag: "Suites boutique au cœur de Kos, au-dessus de la boutique Volaka.",
    footer_nav: "Explorer", footer_hotel: "Séjour", footer_social: "Suivez-nous",
    footer_copy: "© 2026 Volaka Luxury Suites. Tous droits réservés.",
  },
  tr: {
    announce: "Doğrudan rezervasyon & tasarruf — en iyi fiyat garantisi, esnek iptal",
    nav_suites: "Suitler", nav_experience: "Deneyim", nav_amenities: "Olanaklar", nav_nearby: "Konum", nav_reviews: "Yorumlar", nav_faq: "SSS", nav_contact: "İletişim",
    book: "Rezervasyon",
    hero_tag: "Kos Şehri, Yunanistan", hero_title_a: "Kos'un", hero_title_em: "kalbinde konaklayın", hero_title_b: "lüksün üstünde, tarihin karşısında",
    hero_desc: "Tarihi Eleftherias Meydanı'na bakan, Volaka butiğinin tam üstünde dört tasarım suit. Kos Şehri'ndeki özel sığınağınız.",
    hero_cta1: "Doğrudan rezervasyon", hero_cta2: "Suitleri gör",
    stat_rating: "Booking.com", stat_suites: "Tasarım Suit", stat_check: "7/24 Destek", stat_year: "2024'ten beri",
    intro_eyebrow: "Hoş geldiniz", intro_title: "Volaka Luxury Suites",
    intro_p1: "Kos Şehri'nin kalbindeki Volaka Luxury Suites, çağdaş zarafet ile Akdeniz'in cazibesini eşsiz bir şekilde birleştirir. Her suit özenle tasarlanmıştır — modern lüks, otantik Yunan misafirperverliğiyle buluşur.",
    intro_p2: "İster romantik bir kaçamak, ister sakin bir inziva arayın — dört suitimiz unutulmaz bir deneyim vaat ediyor.",
    suites_eyebrow: "Konaklama", suites_title: "Suitlerimiz", suites_desc: "Yoğun sezonda sınırlı müsaitlik — tarihlerinizi erken güvence altına alın.",
    view_suite: "Suit'i gör", book_suite: "Rezervasyon",
    size: "Alan", guests: "Misafir", beds: "Yatak", kitchen: "Mutfak", highlights: "Öne çıkanlar",
    amenities_eyebrow: "Olanaklar", amenities_title: "Her detay düşünüldü",
    nearby_eyebrow: "Konum", nearby_title: "Her şeyin merkezinde", nearby_desc: "Tarih, plajlar, tavernalar ve marina — hepsi yürüme mesafesinde.",
    reviews_eyebrow: "Görüşler", reviews_title: "Misafirlerimiz ne diyor", reviews_summary: "9.9/10 — Booking.com Traveller Review Award",
    faq_eyebrow: "SSS", faq_title: "Rezervasyondan önce",
    contact_eyebrow: "İletişim", contact_title: "Bize ulaşın", contact_desc: "Konaklamanız hakkında sorular mı var? Yazın — bir saat içinde yanıtlıyoruz.",
    phone: "Telefon", email: "E-posta", address: "Adres", checkin_label: "Check-in / Check-out",
    close: "Kapat",
    footer_tag: "Kos'un kalbinde, Volaka butiğinin üstünde butik suitler.",
    footer_nav: "Keşfet", footer_hotel: "Konaklama", footer_social: "Bizi takip edin",
    footer_copy: "© 2026 Volaka Luxury Suites. Tüm hakları saklıdır.",
  },
};

const FAQ_ITEMS: Record<Lang, { q: string; a: string }[]> = {
  en: [
    { q: "What are the check-in and check-out times?", a: "Check-in is from 15:00 and check-out is by 11:00. Late check-out is available upon request: until 18:00 €50, until 20:00 €60." },
    { q: "Is the check-in contactless?", a: "Yes. We use keyless entry and send door codes 2 days before your arrival." },
    { q: "Do you offer airport transfers?", a: "Yes, private transfers to/from Kos International Airport (25 min) can be arranged on request." },
    { q: "Is parking available?", a: "Public parking is available a short walk away. We can advise on the closest options when you arrive." },
    { q: "Is breakfast included?", a: "Suites are self-catering with a kitchenette (or full kitchen in Diamond). We can recommend our favourite spots for breakfast within a minute's walk." },
  ],
  el: [
    { q: "Ώρα check-in και check-out;", a: "Check-in από τις 15:00, check-out έως τις 11:00. Late check-out κατόπιν αιτήματος: έως 18:00 €50, έως 20:00 €60." },
    { q: "Είναι contactless το check-in;", a: "Ναι. Keyless entry — στέλνουμε τους κωδικούς 2 μέρες πριν την άφιξη." },
    { q: "Παρέχετε μεταφορά από το αεροδρόμιο;", a: "Ναι, ιδιωτική μεταφορά από/προς το αεροδρόμιο της Κω κατόπιν αιτήματος." },
    { q: "Υπάρχει πάρκινγκ;", a: "Δημόσιος χώρος στάθμευσης με σύντομη πεζοπορία. Σας ενημερώνουμε κατά την άφιξη." },
    { q: "Περιλαμβάνεται πρωινό;", a: "Οι σουίτες διαθέτουν κουζινάκι (πλήρη κουζίνα στη Diamond). Προτείνουμε τα αγαπημένα μας μαγαζιά στα λίγα μέτρα γύρω." },
  ],
  de: [
    { q: "Check-in- und Check-out-Zeiten?", a: "Check-in ab 15:00, Check-out bis 11:00. Später Check-out auf Anfrage: bis 18:00 €50, bis 20:00 €60." },
    { q: "Ist der Check-in kontaktlos?", a: "Ja. Keyless Entry — Türcodes werden 2 Tage vor Anreise gesendet." },
    { q: "Bieten Sie Flughafentransfer an?", a: "Ja, privater Transfer zum/vom Flughafen Kos auf Anfrage." },
    { q: "Gibt es Parkplätze?", a: "Öffentliche Parkplätze in kurzer Gehweite. Wir beraten bei Ankunft." },
    { q: "Ist Frühstück inklusive?", a: "Suiten mit Kitchenette (Diamond mit voller Küche). Wir empfehlen gerne Cafés in Gehweite." },
  ],
  it: [
    { q: "Orari di check-in e check-out?", a: "Check-in dalle 15:00, check-out entro le 11:00. Late check-out su richiesta: fino alle 18:00 €50, fino alle 20:00 €60." },
    { q: "Il check-in è contactless?", a: "Sì. Ingresso senza chiave — i codici vengono inviati 2 giorni prima dell'arrivo." },
    { q: "Offrite transfer dall'aeroporto?", a: "Sì, transfer privato da/per l'aeroporto di Kos su richiesta." },
    { q: "C'è parcheggio?", a: "Parcheggio pubblico a breve distanza a piedi. Vi informiamo all'arrivo." },
    { q: "La colazione è inclusa?", a: "Suite con angolo cottura (cucina completa in Diamond). Vi consigliamo i nostri locali preferiti a un minuto a piedi." },
  ],
  nl: [
    { q: "Wat zijn de check-in en check-out tijden?", a: "Check-in vanaf 15:00, check-out tot 11:00. Late check-out op verzoek: tot 18:00 €50, tot 20:00 €60." },
    { q: "Is de check-in contactloos?", a: "Ja. Sleutelloze toegang — codes worden 2 dagen voor aankomst verstuurd." },
    { q: "Bieden jullie luchthaventransfer aan?", a: "Ja, privétransfer van/naar de luchthaven van Kos op verzoek." },
    { q: "Is er parkeergelegenheid?", a: "Openbaar parkeren op korte loopafstand. We adviseren u bij aankomst." },
    { q: "Is ontbijt inbegrepen?", a: "Suites met kitchenette (volledige keuken in Diamond). We raden onze favoriete plekjes op een minuut lopen aan." },
  ],
  fr: [
    { q: "Horaires de check-in et check-out ?", a: "Check-in à partir de 15h, check-out avant 11h. Late check-out sur demande : jusqu'à 18h 50€, jusqu'à 20h 60€." },
    { q: "Le check-in est-il sans contact ?", a: "Oui. Entrée sans clé — les codes sont envoyés 2 jours avant l'arrivée." },
    { q: "Proposez-vous des transferts depuis l'aéroport ?", a: "Oui, transfert privé de/vers l'aéroport de Kos sur demande." },
    { q: "Y a-t-il un parking ?", a: "Parking public à courte distance à pied. Nous vous conseillons à l'arrivée." },
    { q: "Le petit-déjeuner est-il inclus ?", a: "Suites avec kitchenette (cuisine complète en Diamond). Nous recommandons nos adresses préférées à une minute à pied." },
  ],
  tr: [
    { q: "Giriş ve çıkış saatleri nedir?", a: "Giriş 15:00'ten itibaren, çıkış 11:00'e kadar. Geç çıkış talep üzerine: 18:00'e kadar €50, 20:00'e kadar €60." },
    { q: "Giriş temassız mı?", a: "Evet. Anahtarsız giriş — kapı kodları varışınızdan 2 gün önce gönderilir." },
    { q: "Havalimanı transferi sunuyor musunuz?", a: "Evet, Kos Havalimanı'ndan/na özel transfer talep üzerine ayarlanabilir." },
    { q: "Otopark var mı?", a: "Kısa bir yürüyüş mesafesinde halka açık otopark. Varışta bilgilendiririz." },
    { q: "Kahvaltı dahil mi?", a: "Suitler mutfaklıdır (Diamond'da tam mutfak). Bir dakika yürüme mesafesindeki favori mekanlarımızı öneririz." },
  ],
};

// ---------- Component ----------
function VolakaHome() {
  const [lang, setLang] = useState<Lang>("en");
  const [scrolled, setScrolled] = useState(false);
  const [announceOpen, setAnnounceOpen] = useState(true);
  const [activeSuite, setActiveSuite] = useState<Suite | null>(null);
  const [photoIdx, setPhotoIdx] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const t = T[lang];
  const faqs = FAQ_ITEMS[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (activeSuite) {
      document.body.style.overflow = "hidden";
      setPhotoIdx(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeSuite]);

  const dir = "ltr";
  const heroTitle = useMemo(() => (
    <>
      {t.hero_title_a} <em>{t.hero_title_em}</em>
      <span style={{ display: "block", fontSize: "0.55em", marginTop: 12, color: "var(--brass-light)", fontWeight: 300 }}>{t.hero_title_b}</span>
    </>
  ), [t]);

  return (
    <div dir={dir} className="volaka">
      <style>{CSS}</style>

      {/* HEADER */}
      <header className={scrolled ? "scrolled" : ""}>
        {announceOpen && (
          <div className="announce-row">
            <span dangerouslySetInnerHTML={{ __html: t.announce }} />
            <button className="announce-close" aria-label="Close" onClick={() => setAnnounceOpen(false)}>✕</button>
          </div>
        )}
        <div className="wrap nav-inner">
          <a href="#home" className="logo">
            <img src={LOGO} alt="Volaka Luxury Suites" />
          </a>
          <nav>
            <ul>
              <li><a href="#suites">{t.nav_suites}</a></li>
              <li><a href="#amenities">{t.nav_amenities}</a></li>
              <li><a href="#nearby">{t.nav_nearby}</a></li>
              <li><a href="#reviews">{t.nav_reviews}</a></li>
              <li><a href="#faq">{t.nav_faq}</a></li>
              <li><a href="#contact">{t.nav_contact}</a></li>
            </ul>
          </nav>
          <div className="nav-actions">
            <div className="lang-select">
              <select value={lang} onChange={(e) => setLang(e.target.value as Lang)} aria-label="Language">
                {LANGS.map((l) => (
                  <option key={l.code} value={l.code}>{l.flag} {l.label}</option>
                ))}
              </select>
            </div>
            <a href="https://volakasuites.gr/#hero" target="_blank" rel="noopener" className="btn btn-line">{t.book}</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg"><img src={HERO} alt="Volaka Luxury Suites hero" /></div>
        <div className="hero-overlay" />
        <div className="wrap">
          <div className="hero-tag">{t.hero_tag}</div>
          <h1>{heroTitle}</h1>
          <p>{t.hero_desc}</p>
          <div className="hero-ctas">
            <a href="https://volakasuites.gr/#hero" target="_blank" rel="noopener" className="btn btn-primary">{t.hero_cta1}</a>
            <a href="#suites" className="btn btn-outline">{t.hero_cta2}</a>
          </div>
          <div className="hero-stats">
            <div><strong>9.9/10</strong><span>{t.stat_rating}</span></div>
            <div><strong>4</strong><span>{t.stat_suites}</span></div>
            <div><strong>24/7</strong><span>{t.stat_check}</span></div>
            <div><strong>2024</strong><span>{t.stat_year}</span></div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div className="wrap intro-grid">
          <div className="intro-visual" style={{ backgroundImage: `url(${P1})` }} />
          <div className="intro-text">
            <div className="eyebrow">{t.intro_eyebrow}</div>
            <h2>{t.intro_title}</h2>
            <p style={{ marginTop: 20 }}>{t.intro_p1}</p>
            <p>{t.intro_p2}</p>
            <div className="intro-badges">
              <div><strong>4</strong><span>{t.stat_suites}</span></div>
              <div><strong>36–52 m²</strong><span>{t.size}</span></div>
              <div><strong>9.9</strong><span>Booking.com</span></div>
              <div><strong>0m</strong><span>Eleftherias Sq.</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SUITES */}
      <section className="rooms" id="suites">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t.suites_eyebrow}</div>
            <h2>{t.suites_title}</h2>
            <p>{t.suites_desc}</p>
          </div>
          <div className="room-grid">
            {SUITES.map((s) => (
              <article className="room-card" key={s.id}>
                <div className="room-photo" style={{ backgroundImage: `url(${s.photos[0]})` }} />
                <div className="room-body">
                  <div className="room-top">
                    <h3>{s.name}</h3>
                    <div className="room-price">{s.price.split("/")[0]}<small>/ night</small></div>
                  </div>
                  <div className="room-sub">{s.subtitle}</div>
                  <div className="room-meta">
                    <span>📐 {s.size}</span>
                    <span>👥 {s.guests}</span>
                    <span>🛏️ {s.beds.split("+")[0].trim()}</span>
                  </div>
                  <p className="room-desc">{s.description}</p>
                  <div className="room-tags">
                    {s.features.slice(0, 3).map((f) => <span key={f}>{f}</span>)}
                  </div>
                  <div className="room-actions">
                    <button className="btn btn-line" onClick={() => setActiveSuite(s)}>{t.view_suite}</button>
                    <a className="btn btn-primary" href="https://volakasuites.gr/#hero" target="_blank" rel="noopener">{t.book_suite}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section id="amenities">
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">{t.amenities_eyebrow}</div>
            <h2>{t.amenities_title}</h2>
          </div>
          <div className="amenity-grid">
            {AMENITIES_L[lang].map((a, i) => (
              <div className="amenity-card" key={a.title}>
                <div className="amenity-icon">{AMENITY_ICONS[i]}</div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY */}
      <section className="rooms" id="nearby">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t.nearby_eyebrow}</div>
            <h2>{t.nearby_title}</h2>
            <p>{t.nearby_desc}</p>
          </div>
          <div className="nearby-grid">
            {NEARBY_L[lang].map((n) => (
              <div className="nearby-card" key={n.title}>
                <div className="nearby-dist">{n.dist}</div>
                <h4>{n.title}</h4>
                <p>{n.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <a className="btn btn-line" href="https://maps.app.goo.gl/9Fr7iLD7igDFJjSE8" target="_blank" rel="noopener">{VIEW_MAP_L[lang]}</a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews" id="reviews">
        <div className="wrap">
          <div className="section-head">
            <div className="eyebrow">{t.reviews_eyebrow}</div>
            <h2>{t.reviews_title}</h2>
          </div>
          <div className="review-summary">
            <div className="review-score">9.9</div>
            <div>
              <div className="stars">★★★★★</div>
              <div className="review-summary-text">{t.reviews_summary}</div>
            </div>
          </div>
          <div className="review-grid">
            {REVIEWS.map((r) => (
              <div className="review-card" key={r.name}>
                <span className="stars">{"★".repeat(r.stars)}</span>
                <p>"{r.text}"</p>
                <div className="review-who">
                  <span><strong>{r.name}</strong>{r.country}</span>
                  <span>Booking.com</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "var(--paper-dim)" }}>
        <div className="wrap">
          <div className="section-head center">
            <div className="eyebrow">{t.faq_eyebrow}</div>
            <h2>{t.faq_title}</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className={`faq-item ${openFaq === i ? "open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="plus">+</span>
                </button>
                <div className="faq-a" style={{ maxHeight: openFaq === i ? 400 : 0 }}>
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="wrap contact-grid">
          <div>
            <div className="eyebrow">{t.contact_eyebrow}</div>
            <h2>{t.contact_title}</h2>
            <p style={{ color: "var(--ink-soft)", marginTop: 14 }}>{t.contact_desc}</p>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div><strong>{t.phone}</strong><a href="tel:+306956607396">+30 695 660 7396</a></div>
              </div>
              <div className="contact-info-item">
                <div><strong>WhatsApp</strong><a href="https://wa.me/306943186260" target="_blank" rel="noopener">+30 694 318 6260</a></div>
              </div>
              <div className="contact-info-item">
                <div><strong>{t.email}</strong><a href="mailto:info@volakasuites.gr">info@volakasuites.gr</a></div>
              </div>
              <div className="contact-info-item">
                <div><strong>{t.address}</strong><span>Eleftherias Square, Kos Town 853 00, Greece</span></div>
              </div>
              <div className="contact-info-item">
                <div><strong>{t.checkin_label}</strong><span>15:00 / 11:00</span></div>
              </div>
            </div>
          </div>
          <div>
            <div className="map-box">
              <iframe
                title="Volaka Luxury Suites map"
                src="https://www.google.com/maps?q=Eleftherias+Square+Kos&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">Volaka Luxury Suites</div>
              <p style={{ fontSize: ".88rem", marginBottom: 20 }}>{t.footer_tag}</p>
              <a className="btn btn-primary" href="https://volakasuites.gr/#hero" target="_blank" rel="noopener">{t.book}</a>
            </div>
            <div>
              <h5>{t.footer_nav}</h5>
              <ul>
                <li><a href="#suites">{t.nav_suites}</a></li>
                <li><a href="#amenities">{t.nav_amenities}</a></li>
                <li><a href="#nearby">{t.nav_nearby}</a></li>
                <li><a href="#reviews">{t.nav_reviews}</a></li>
                <li><a href="#contact">{t.nav_contact}</a></li>
              </ul>
            </div>
            <div>
              <h5>{t.footer_hotel}</h5>
              <ul>
                <li><a href="tel:+306956607396">+30 695 660 7396</a></li>
                <li><a href="mailto:info@volakasuites.gr">info@volakasuites.gr</a></li>
                <li><a href="https://maps.app.goo.gl/9Fr7iLD7igDFJjSE8" target="_blank" rel="noopener">Google Maps</a></li>
              </ul>
            </div>
            <div>
              <h5>{t.footer_social}</h5>
              <ul>
                <li><a href="https://instagram.com/volakasuites" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="https://www.facebook.com/volakasuites" target="_blank" rel="noopener">Facebook</a></li>
                <li><a href="https://wa.me/306943186260" target="_blank" rel="noopener">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t.footer_copy}</span>
          </div>
        </div>
      </footer>

      {/* SUITE MODAL */}
      {activeSuite && (
        <div className="modal-backdrop" onClick={() => setActiveSuite(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveSuite(null)} aria-label={t.close}>✕</button>
            <div className="modal-gallery">
              <img src={activeSuite.photos[photoIdx]} alt={`${activeSuite.name} view ${photoIdx + 1}`} />
              <button className="gallery-nav prev" onClick={() => setPhotoIdx((photoIdx - 1 + activeSuite.photos.length) % activeSuite.photos.length)}>‹</button>
              <button className="gallery-nav next" onClick={() => setPhotoIdx((photoIdx + 1) % activeSuite.photos.length)}>›</button>
              <div className="gallery-thumbs">
                {activeSuite.photos.map((p, i) => (
                  <button key={p} className={i === photoIdx ? "active" : ""} onClick={() => setPhotoIdx(i)}>
                    <img src={p} alt="" />
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-body">
              <div className="eyebrow">{activeSuite.subtitle}</div>
              <h2>{activeSuite.name}</h2>
              <p style={{ color: "var(--ink-soft)", margin: "16px 0 24px", fontStyle: "italic" }}>
                "{activeSuite.description}"
              </p>
              <div className="modal-meta">
                <div><small>{t.size}</small><strong>{activeSuite.size}</strong></div>
                <div><small>{t.guests}</small><strong>{activeSuite.guests}</strong></div>
                <div><small>{t.beds}</small><strong>{activeSuite.beds}</strong></div>
              </div>
              <h4 style={{ marginTop: 24, marginBottom: 12, fontFamily: "'Fraunces', serif" }}>{t.kitchen}</h4>
              <p style={{ color: "var(--ink-soft)", fontSize: ".9rem" }}>{activeSuite.kitchen}</p>
              <h4 style={{ marginTop: 24, marginBottom: 12, fontFamily: "'Fraunces', serif" }}>{t.highlights}</h4>
              <ul className="modal-features">
                {activeSuite.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <div className="modal-cta">
                <div className="modal-price">{activeSuite.price}</div>
                <a href="https://volakasuites.gr/#hero" target="_blank" rel="noopener" className="btn btn-primary">{t.book_suite}</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Styles (scoped) ----------
const CSS = `
.volaka{--ink:#1F2A24;--ink-soft:#4B564E;--paper:#FAF7F1;--paper-dim:#F1EAE0;--pine:#2F4F44;--pine-deep:#16261F;--brass:#B08D57;--brass-light:#D9C08C;--stone:#8C8577;--white:#FFFFFF;--line:rgba(31,42,36,0.12);--shadow:0 20px 45px rgba(22,38,31,0.14);font-family:'Inter',sans-serif;background:var(--paper);color:var(--ink);line-height:1.6;-webkit-font-smoothing:antialiased;}
.volaka *{box-sizing:border-box;margin:0;padding:0;}
.volaka img{max-width:100%;display:block;}
.volaka a{color:inherit;text-decoration:none;}
.volaka ul{list-style:none;}
.volaka h1,.volaka h2,.volaka h3,.volaka h4{font-family:'Fraunces',serif;font-weight:500;color:var(--pine-deep);line-height:1.15;}
.volaka .eyebrow{font-family:'Inter',sans-serif;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--brass);font-weight:600;}
.volaka .wrap{max-width:1180px;margin:0 auto;padding:0 32px;}
.volaka .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 28px;border-radius:2px;font-size:.85rem;letter-spacing:.04em;font-weight:600;cursor:pointer;border:1px solid transparent;transition:all .25s ease;font-family:'Inter',sans-serif;}
.volaka .btn-primary{background:var(--pine);color:var(--paper);}
.volaka .btn-primary:hover{background:var(--pine-deep);}
.volaka .btn-outline{background:transparent;border-color:var(--paper);color:var(--paper);}
.volaka .btn-outline:hover{background:rgba(255,255,255,0.12);}
.volaka .btn-line{background:transparent;border-color:var(--ink);color:var(--ink);}
.volaka .btn-line:hover{background:var(--ink);color:var(--paper);}
.volaka section{padding:110px 0;}
.volaka .section-head{max-width:620px;margin-bottom:56px;}
.volaka .section-head h2{font-size:clamp(1.8rem,3vw,2.6rem);margin-top:10px;}
.volaka .section-head p{color:var(--ink-soft);margin-top:16px;font-size:1.02rem;}
.volaka .section-head.center{margin-left:auto;margin-right:auto;text-align:center;}

.volaka header{position:fixed;top:0;left:0;right:0;z-index:100;padding:22px 0;transition:background .3s ease,padding .3s ease,box-shadow .3s ease;}
.volaka header.scrolled{background:rgba(250,247,241,0.96);backdrop-filter:blur(6px);padding:14px 0;box-shadow:0 6px 20px rgba(22,38,31,0.06);}
.volaka .announce-row{background:var(--pine-deep);color:var(--brass-light);text-align:center;font-size:.78rem;letter-spacing:.01em;padding:9px 44px;position:relative;}
.volaka .announce-row strong{color:var(--paper);font-weight:700;}
.volaka .announce-close{position:absolute;right:16px;top:50%;transform:translateY(-50%);background:none;border:none;color:rgba(250,247,241,0.55);cursor:pointer;font-size:1.1rem;padding:4px;}
.volaka header.scrolled .announce-row{display:none;}
.volaka .nav-inner{display:flex;align-items:center;justify-content:space-between;}
.volaka .logo img{height:64px;width:64px;object-fit:cover;border-radius:50%;background:var(--paper);box-shadow:0 2px 12px rgba(0,0,0,0.25);transition:height .3s ease,width .3s ease;}
.volaka header.scrolled .logo img{height:52px;width:52px;box-shadow:0 2px 10px rgba(0,0,0,0.1);}
.volaka nav ul{display:flex;gap:34px;}
.volaka nav a{font-size:.82rem;letter-spacing:.03em;font-weight:600;color:var(--paper);position:relative;padding-bottom:4px;}
.volaka header.scrolled nav a{color:var(--ink);}
.volaka nav a::after{content:'';position:absolute;left:0;bottom:0;height:1px;width:0;background:var(--brass);transition:width .25s ease;}
.volaka nav a:hover::after{width:100%;}
.volaka .nav-actions{display:flex;align-items:center;gap:18px;}
.volaka .lang-select{position:relative;display:flex;align-items:center;}
.volaka .lang-select::after{content:'▾';position:absolute;right:2px;top:50%;transform:translateY(-50%);font-size:.6rem;color:var(--brass-light);pointer-events:none;}
.volaka header.scrolled .lang-select::after{color:var(--brass);}
.volaka .lang-select select{appearance:none;-webkit-appearance:none;background:transparent;border:none;border-bottom:1px solid rgba(250,247,241,0.3);color:var(--paper);font-family:'Inter';font-size:.78rem;font-weight:600;letter-spacing:.03em;padding:4px 18px 4px 2px;cursor:pointer;}
.volaka header.scrolled .lang-select select{color:var(--ink);border-bottom-color:var(--line);}
.volaka .lang-select select option{color:var(--ink);background:var(--paper);}
.volaka header.scrolled .btn-line{border-color:var(--ink);color:var(--ink);}

.volaka .hero{position:relative;min-height:100vh;display:flex;align-items:center;color:var(--paper);overflow:hidden;}
.volaka .hero-bg{position:absolute;inset:0;z-index:0;}
.volaka .hero-bg img{width:100%;height:100%;object-fit:cover;animation:kenBurns 18s ease-in-out infinite alternate;transform-origin:center center;}
@keyframes kenBurns{0%{transform:scale(1)}100%{transform:scale(1.15)}}
.volaka .hero-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(12,10,8,.4) 0%,rgba(14,11,8,.55) 45%,rgba(10,8,7,.8) 100%);}
.volaka .hero .wrap{position:relative;z-index:2;padding-top:60px;}
.volaka .hero-tag{color:var(--brass-light);font-size:.75rem;letter-spacing:.3em;text-transform:uppercase;font-weight:600;}
.volaka .hero h1{font-size:clamp(2.6rem,6vw,4.6rem);color:var(--paper);margin:20px 0 26px;max-width:14ch;}
.volaka .hero h1 em{font-style:italic;color:var(--brass-light);}
.volaka .hero p{max-width:520px;color:rgba(250,247,241,0.85);font-size:1.05rem;margin-bottom:38px;}
.volaka .hero-ctas{display:flex;gap:16px;flex-wrap:wrap;}
.volaka .hero-stats{display:flex;gap:40px;margin-top:70px;padding-top:30px;border-top:1px solid rgba(250,247,241,0.2);max-width:680px;flex-wrap:wrap;}
.volaka .hero-stats div strong{display:block;font-family:'Fraunces',serif;font-size:1.7rem;color:var(--brass-light);}
.volaka .hero-stats div span{font-size:.75rem;color:rgba(250,247,241,0.7);letter-spacing:.03em;}

.volaka .intro{padding-top:150px;}
.volaka .intro-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:70px;align-items:start;}
.volaka .intro-visual{aspect-ratio:4/5;background-size:cover;background-position:center;box-shadow:var(--shadow);}
.volaka .intro-text p{color:var(--ink-soft);margin-bottom:18px;font-size:1.02rem;}
.volaka .intro-text h2{font-size:clamp(1.8rem,3vw,2.6rem);margin-top:12px;}
.volaka .intro-badges{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-top:36px;}
.volaka .intro-badges strong{display:block;font-family:'Fraunces';font-size:1.4rem;color:var(--pine);}
.volaka .intro-badges span{font-size:.75rem;color:var(--stone);}

.volaka .rooms{background:var(--paper-dim);}
.volaka .room-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px;}
.volaka .room-card{background:var(--white);border:1px solid var(--line);display:grid;grid-template-columns:220px 1fr;transition:box-shadow .25s ease,transform .25s ease;overflow:hidden;}
.volaka .room-card:hover{box-shadow:var(--shadow);transform:translateY(-3px);}
.volaka .room-photo{background-size:cover;background-position:center;min-height:100%;}
.volaka .room-body{padding:26px 26px 24px;}
.volaka .room-top{display:flex;justify-content:space-between;align-items:baseline;gap:10px;}
.volaka .room-top h3{font-size:1.3rem;}
.volaka .room-sub{font-size:.78rem;color:var(--stone);letter-spacing:.05em;text-transform:uppercase;margin-top:2px;}
.volaka .room-price{font-family:'Fraunces';color:var(--pine);font-size:1.05rem;white-space:nowrap;}
.volaka .room-price small{font-family:'Inter';font-size:.68rem;color:var(--stone);font-weight:500;}
.volaka .room-meta{display:flex;gap:14px;margin:12px 0;font-size:.76rem;color:var(--stone);flex-wrap:wrap;}
.volaka .room-desc{font-size:.88rem;color:var(--ink-soft);margin-bottom:16px;}
.volaka .room-tags{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px;}
.volaka .room-tags span{font-size:.68rem;padding:5px 10px;background:var(--paper-dim);color:var(--ink-soft);letter-spacing:.03em;border:1px solid var(--line);}
.volaka .room-actions{display:flex;gap:10px;}
.volaka .room-actions .btn{flex:1;padding:12px;}

.volaka .amenity-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:1px;background:var(--line);border:1px solid var(--line);}
.volaka .amenity-card{background:var(--paper);padding:34px 22px;text-align:center;}
.volaka .amenity-icon{font-size:1.8rem;margin-bottom:14px;}
.volaka .amenity-card h4{font-size:.92rem;font-family:'Inter';font-weight:600;color:var(--ink);}
.volaka .amenity-card p{font-size:.74rem;color:var(--stone);margin-top:6px;}

.volaka .nearby-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
.volaka .nearby-card{padding:28px;border:1px solid var(--line);background:var(--white);position:relative;}
.volaka .nearby-dist{position:absolute;top:24px;right:24px;font-family:'Fraunces';font-size:.85rem;color:var(--brass);}
.volaka .nearby-card h4{font-size:1.05rem;margin-bottom:8px;padding-right:80px;}
.volaka .nearby-card p{font-size:.86rem;color:var(--ink-soft);}

.volaka .reviews{background:var(--pine-deep);color:var(--paper);}
.volaka .reviews .eyebrow{color:var(--brass-light);}
.volaka .reviews .section-head h2{color:var(--paper);}
.volaka .review-summary{display:flex;align-items:center;gap:26px;margin-bottom:50px;padding-bottom:36px;border-bottom:1px solid rgba(250,247,241,0.15);}
.volaka .review-score{font-family:'Fraunces';font-size:3.4rem;color:var(--brass-light);}
.volaka .review-summary-text{font-size:.85rem;color:rgba(250,247,241,0.7);}
.volaka .stars{color:var(--brass-light);letter-spacing:2px;font-size:.95rem;}
.volaka .review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;}
.volaka .review-card{background:rgba(250,247,241,0.05);border:1px solid rgba(250,247,241,0.14);padding:28px;}
.volaka .review-card .stars{margin-bottom:14px;display:block;}
.volaka .review-card p{font-size:.92rem;color:rgba(250,247,241,0.85);margin-bottom:20px;}
.volaka .review-who{display:flex;justify-content:space-between;align-items:center;font-size:.78rem;color:rgba(250,247,241,0.6);}
.volaka .review-who strong{color:var(--paper);font-weight:600;display:block;font-size:.86rem;}

.volaka .faq-list{max-width:760px;margin:0 auto;}
.volaka .faq-item{border-bottom:1px solid var(--line);}
.volaka .faq-q{width:100%;text-align:left;background:none;border:none;cursor:pointer;padding:22px 4px;display:flex;justify-content:space-between;align-items:center;gap:20px;font-family:'Fraunces',serif;font-size:1.05rem;color:var(--pine-deep);}
.volaka .faq-q .plus{font-family:'Inter';font-size:1.3rem;color:var(--brass);flex-shrink:0;transition:transform .25s ease;font-weight:300;}
.volaka .faq-item.open .faq-q .plus{transform:rotate(45deg);}
.volaka .faq-a{max-height:0;overflow:hidden;transition:max-height .3s ease;}
.volaka .faq-a p{padding:0 4px 22px;color:var(--ink-soft);font-size:.92rem;max-width:640px;}

.volaka .contact-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:60px;}
.volaka .contact-info-list{margin-top:30px;display:flex;flex-direction:column;gap:22px;}
.volaka .contact-info-item{display:flex;gap:16px;align-items:flex-start;}
.volaka .contact-info-item strong{display:block;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:var(--stone);margin-bottom:4px;}
.volaka .contact-info-item span,.volaka .contact-info-item a{font-size:1rem;color:var(--ink);font-weight:500;}
.volaka .map-box{margin-top:34px;aspect-ratio:16/12;border:1px solid var(--line);overflow:hidden;}
.volaka .map-box iframe{width:100%;height:100%;border:none;}

.volaka footer{background:var(--pine-deep);color:rgba(250,247,241,0.7);padding:70px 0 30px;}
.volaka .footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1.2fr;gap:40px;padding-bottom:50px;border-bottom:1px solid rgba(250,247,241,0.12);}
.volaka .footer-logo{font-family:'Fraunces';font-size:1.4rem;color:var(--paper);margin-bottom:14px;}
.volaka .footer-grid h5{font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--brass-light);margin-bottom:18px;}
.volaka .footer-grid ul li{margin-bottom:10px;font-size:.88rem;}
.volaka .footer-grid ul li a:hover{color:var(--paper);}
.volaka .footer-bottom{display:flex;justify-content:space-between;padding-top:24px;font-size:.76rem;flex-wrap:wrap;gap:10px;}

.volaka .modal-backdrop{position:fixed;inset:0;background:rgba(10,8,7,.85);z-index:200;display:flex;align-items:center;justify-content:center;padding:20px;animation:fade .25s ease;}
@keyframes fade{from{opacity:0}to{opacity:1}}
.volaka .modal{background:var(--paper);max-width:1200px;width:100%;max-height:92vh;display:grid;grid-template-columns:1.2fr 1fr;position:relative;overflow:hidden;box-shadow:var(--shadow);}
.volaka .modal-close{position:absolute;top:16px;right:16px;background:rgba(255,255,255,.9);border:none;width:40px;height:40px;border-radius:50%;font-size:1.1rem;cursor:pointer;z-index:10;display:flex;align-items:center;justify-content:center;}
.volaka .modal-gallery{position:relative;background:#000;display:flex;flex-direction:column;}
.volaka .modal-gallery > img{width:100%;flex:1;object-fit:cover;min-height:0;}
.volaka .gallery-nav{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,.85);border:none;width:44px;height:44px;border-radius:50%;font-size:1.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;}
.volaka .gallery-nav.prev{left:16px;}
.volaka .gallery-nav.next{right:16px;}
.volaka .gallery-thumbs{display:flex;gap:6px;padding:10px;background:rgba(0,0,0,.5);}
.volaka .gallery-thumbs button{border:2px solid transparent;background:none;padding:0;cursor:pointer;width:70px;height:50px;overflow:hidden;}
.volaka .gallery-thumbs button.active{border-color:var(--brass-light);}
.volaka .gallery-thumbs img{width:100%;height:100%;object-fit:cover;}
.volaka .modal-body{padding:40px;overflow-y:auto;}
.volaka .modal-body h2{font-size:2rem;margin-top:8px;}
.volaka .modal-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;padding:20px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);}
.volaka .modal-meta small{display:block;font-size:.68rem;letter-spacing:.14em;text-transform:uppercase;color:var(--stone);margin-bottom:6px;}
.volaka .modal-meta strong{font-family:'Fraunces';font-weight:500;color:var(--pine-deep);font-size:.95rem;}
.volaka .modal-features{list-style:none;padding:0;margin:0;}
.volaka .modal-features li{padding:8px 0;padding-left:22px;position:relative;color:var(--ink-soft);font-size:.9rem;}
.volaka .modal-features li::before{content:'✓';position:absolute;left:0;color:var(--brass);font-weight:700;}
.volaka .modal-cta{margin-top:28px;padding-top:24px;border-top:1px solid var(--line);display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;}
.volaka .modal-price{font-family:'Fraunces';font-size:1.3rem;color:var(--pine);}

@media (max-width:980px){
  .volaka nav{display:none;}
  .volaka .intro-grid,.volaka .contact-grid{grid-template-columns:1fr;}
  .volaka .room-grid,.volaka .nearby-grid,.volaka .review-grid{grid-template-columns:1fr;}
  .volaka .amenity-grid{grid-template-columns:repeat(2,1fr);}
  .volaka .footer-grid{grid-template-columns:1fr 1fr;}
  .volaka .modal{grid-template-columns:1fr;max-height:95vh;}
  .volaka .modal-gallery > img{max-height:40vh;}
  .volaka .intro-badges{grid-template-columns:repeat(2,1fr);}
}
@media (max-width:600px){
  .volaka section{padding:70px 0;}
  .volaka .wrap{padding:0 20px;}
  .volaka .room-card{grid-template-columns:1fr;}
  .volaka .room-photo{min-height:200px;}
  .volaka .hero-stats{gap:24px;}
  .volaka .modal-body{padding:24px;}
  .volaka .modal-meta{grid-template-columns:1fr;gap:12px;}
}
`;