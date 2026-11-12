import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "The Design Vault | Graphic Design & Brand Identity",
  shortName: "The Design Vault",
  description:
    "Turning ideas into visuals. We craft distinctive brand identities, static creatives, visiting cards, and digital design assets that make your brand accessible.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  ogImage: "/og.png",
  creator: "Creative Director",
  email: "hello@example.com",
  phone: "+1 (555) 000-0000",
  location: {
    city: "New York",
    country: "United States",
  },
  mainNav: [
    {
      title: "Work",
      href: "#work",
    },
    {
      title: "Collections",
      href: "#collections",
    },
    {
      title: "Services",
      href: "#services",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
  socials: {
    instagram: "https://instagram.com",
    behance: "https://behance.net",
    dribbble: "https://dribbble.com",
    linkedin: "https://linkedin.com",
  },
};

