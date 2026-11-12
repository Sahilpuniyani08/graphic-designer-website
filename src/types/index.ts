export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  external?: boolean;
}

export interface SocialLinks {
  twitter?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
  behance?: string;
  dribbble?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  creator: string;
  email: string;
  phone?: string;
  location: {
    city: string;
    region?: string;
    country: string;
  };
  mainNav: NavItem[];
  socials: SocialLinks;
}

