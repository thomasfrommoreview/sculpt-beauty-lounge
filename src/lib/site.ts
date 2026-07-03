// Single source of truth for Sculpt Beauty Lounge site content.

export const SITE = {
  name: "Sculpt Beauty Lounge",
  shortName: "Sculpt",
  owner: "Jessica Vanhoogenhuize",
  tagline: "Advanced aesthetics in downtown Sarnia",
  city: "Sarnia",
  region: "ON",
  addressLine: "210 Front St N",
  addressFull: "210 Front St N, Downtown Sarnia, ON",
  phone: "(519) 331-6373",
  phoneHref: "tel:+15193316373",
  email: "sculpt.beauty.lounge@outlook.com",
  instagram: "https://www.instagram.com/sculpt.beauty.lounge/",
  instagramHandle: "@sculpt.beauty.lounge",
  facebook: "https://www.facebook.com/p/SculptBeautyLounge-61552650745580/",
  booking:
    "https://book.squareup.com/appointments/52d4bxvd2grmiz/location/LN9JTBEAQPKJQ/services",
  domain: "https://sculpt.moreview.ca",
  mapsQuery: "Sculpt Beauty Lounge, 210 Front St N, Sarnia, ON",
} as const;

export const NAV_LINKS = [
  { label: "Programs", href: "#programs" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#contact" },
] as const;
