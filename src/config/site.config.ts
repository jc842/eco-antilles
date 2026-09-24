export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Éco-Antilles — Observatoire de la Transition Écologique & Énergies Renouvelables",
  siteName: "eco-antilles.com",
  domain: "eco-antilles.com",
  url: "https://eco-antilles.com",
  siteUrl: "https://eco-antilles.com",
  description: "Le portail caribéen de la transition écologique, de l'énergie solaire photovoltaïque, de la gestion de l'eau pluviale, de l'éco-habitat tropical et de la biodiversité insulaire.",
  siteDescription: "Le portail caribéen de la transition écologique, de l'énergie solaire photovoltaïque, de la gestion de l'eau pluviale, de l'éco-habitat tropical et de la biodiversité insulaire.",
  defaultAuthor: "La Rédaction Éco-Antilles",
  repo: "jc842/eco-antilles",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-kotei",
    fontFamily: "Outfit, Plus Jakarta Sans, sans-serif",
    colorScheme: "emerald",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "105",
    containerId: "1504SCnt",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 623, format: "mobileBanner" },
      inContent: { zoneId: 627, format: "mediumRectangle" },
      header: { zoneId: 626, format: "leaderboard" },
    },
  },

  legal: {
    editor: "Éco-Antilles — Transition Écologique & Énergies Renouvelables",
    address: "BP 402, 97163 Le Moule Cedex",
    contactEmail: "contact@eco-antilles.com",
    hostName: "Cloudflare Inc.",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "energie-solaire", label: "Énergie Solaire & Batteries" },
    { id: "gestion-eau", label: "Gestion de l'Eau & Citernes" },
    { id: "eco-habitat", label: "Éco-Habitat & Bioclimatisme" },
    { id: "biodiversite", label: "Biodiversité & Littoral" },
    { id: "dechets-circulaire", label: "Économie Circulaire" },
  ],
};
