import type { WorkCategory } from "@/types/work";

// Billbook images
import billbook1 from "@/assets/images/billbook-1.webp";
import billbook2 from "@/assets/images/billbook-2.webp";
import billbook3 from "@/assets/images/billbook-3.webp";

// Logo design images
import logo1 from "@/assets/images/logo1.webp";
import logo2 from "@/assets/images/logo-2.webp";
import logo3 from "@/assets/images/logo-3.webp";

// Visiting card images (Landscape)
import card1 from "@/assets/images/card-1.webp";
import card2 from "@/assets/images/card-2.webp";
import card3 from "@/assets/images/card-3.webp";
import card4 from "@/assets/images/card-4.webp";
import card5 from "@/assets/images/card-5.webp";
import card6 from "@/assets/images/card-6.webp";
import card7 from "@/assets/images/card-7.webp";
import card8 from "@/assets/images/card-8.webp";
import card9 from "@/assets/images/card-9.webp";
import card10 from "@/assets/images/card-10.webp";
import card11 from "@/assets/images/card-11.webp";
import card12 from "@/assets/images/card-12.webp";

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: "visiting-simple",
    label: "Visiting Cards (Matte & Clean)",
    shortLabel: "Visiting Cards",
    badge: "Matte",
    accentColor: "var(--accent-red)",
    glowGradient: "from-accent-red/25 via-accent-coral/20 to-accent-lime/15",
    projects: [
      {
        id: "vc-01",
        title: "Monochrome Minimalist",
        category: "Visiting Cards",
        subCategory: "Simple Matte",
        tag: "350 GSM Matte",
        color: "var(--swatch-putty)",
        image: card1,
        year: "2024",
      },
      {
        id: "vc-02",
        title: "Studio Nordic Identity",
        category: "Visiting Cards",
        subCategory: "Simple Textured",
        tag: "Cotton Stock",
        color: "var(--swatch-wine)",
        image: card2,
        year: "2024",
      },
      {
        id: "vc-03",
        title: "Architect Clean Card",
        category: "Visiting Cards",
        subCategory: "Edge Colored",
        tag: "Art Board 400",
        color: "var(--swatch-purple)",
        image: card3,
        year: "2024",
      },
      {
        id: "vc-04",
        title: "Boutique Atelier",
        category: "Visiting Cards",
        subCategory: "Simple Matte",
        tag: "Natural White",
        color: "var(--swatch-emerald)",
        image: card4,
        year: "2024",
      },
      {
        id: "vc-05",
        title: "Legal Partners Card",
        category: "Visiting Cards",
        subCategory: "Letterpress",
        tag: "Embossed Stock",
        color: "var(--swatch-ocean)",
        image: card5,
        year: "2024",
      },
      {
        id: "vc-06",
        title: "Urban Roast Cafe",
        category: "Visiting Cards",
        subCategory: "Kraft Card",
        tag: "Kraft 320 GSM",
        color: "var(--swatch-ochre)",
        image: card6,
        year: "2024",
      },
    ],
  },
  {
    id: "visiting-uv",
    label: "Visiting Cards (Spot UV & Foil)",
    shortLabel: "Spot UV Cards",
    badge: "UV Spec",
    accentColor: "var(--accent-violet)",
    glowGradient: "from-accent-violet/30 via-swatch-purple/25 to-accent-lightblue/20",
    projects: [
      {
        id: "vc-07",
        title: "Editorial Portfolio Card",
        category: "Visiting Cards",
        subCategory: "Silk Finish",
        tag: "Silk 350 GSM",
        color: "var(--swatch-coral)",
        image: card7,
        year: "2024",
      },
      {
        id: "vc-08",
        title: "Craftsman Woodworks",
        category: "Visiting Cards",
        subCategory: "Raised Spot UV",
        tag: "Recycled Board 400",
        color: "var(--swatch-electric)",
        image: card8,
        year: "2024",
      },
      {
        id: "vc-09",
        title: "Kinfolk Gallery Card",
        category: "Visiting Cards",
        subCategory: "Velvet Foil & Gloss",
        tag: "Fine Art 350",
        color: "var(--accent-lime)",
        image: card9,
        year: "2024",
      },
      {
        id: "vc-10",
        title: "Verve Fashion Atelier",
        category: "Visiting Cards",
        subCategory: "Foil Embossed",
        tag: "Ivory Board",
        color: "var(--swatch-wine)",
        image: card10,
        year: "2024",
      },
      {
        id: "vc-11",
        title: "Nova Horizon Studio",
        category: "Visiting Cards",
        subCategory: "Holographic Spot UV",
        tag: "Superfine 380",
        color: "var(--swatch-purple)",
        image: card11,
        year: "2024",
      },
      {
        id: "vc-12",
        title: "Aura Creative Agency",
        category: "Visiting Cards",
        subCategory: "Linen Textured & Spot Gloss",
        tag: "Linen 350",
        color: "var(--swatch-emerald)",
        image: card12,
        year: "2024",
      },
    ],
  },
  {
    id: "billbooks",
    label: "Bill Books & Receipts",
    shortLabel: "Bill Books",
    badge: "Stationery",
    accentColor: "var(--swatch-coral)",
    glowGradient: "from-accent-coral/30 via-accent-lime/20 to-swatch-wine/15",
    projects: [
      {
        id: "bb-01",
        title: "Commercial Ledger Bill Book",
        category: "Bill Books",
        subCategory: "NCR Carbonless Triplicate",
        tag: "Perforated & Numbered",
        color: "var(--swatch-wine)",
        image: billbook1,
        year: "2024",
      },
      {
        id: "bb-02",
        title: "Retail Receipt Invoice Book",
        category: "Bill Books",
        subCategory: "Duplicate Receipt Book",
        tag: "Color Coded Copies",
        color: "var(--swatch-emerald)",
        image: billbook2,
        year: "2024",
      },
      {
        id: "bb-03",
        title: "Custom Order Voucher Book",
        category: "Bill Books",
        subCategory: "Hardcover Bound Receipt",
        tag: "Serial Numbered 50x3",
        color: "var(--swatch-putty)",
        image: billbook3,
        year: "2024",
      },
    ],
  },
  {
    id: "logos",
    label: "Logo & Brand Marks",
    shortLabel: "Logos",
    badge: "Identity",
    accentColor: "var(--accent-red)",
    glowGradient: "from-accent-red/30 via-accent-violet/25 to-accent-lime/20",
    projects: [
      {
        id: "logo-01",
        title: "Monogram Brand Mark",
        category: "Logo Design",
        subCategory: "Vector Wordmark & Crest",
        tag: "Brand Identity System",
        color: "var(--surface-dark)",
        image: logo1,
        year: "2024",
      },
      {
        id: "logo-02",
        title: "Geometric Studio Emblem",
        category: "Logo Design",
        subCategory: "Minimalist Geometry",
        tag: "Vector Symbol",
        color: "var(--accent-violet)",
        image: logo2,
        year: "2024",
      },
      {
        id: "logo-03",
        title: "Modern Typographic Insignia",
        category: "Logo Design",
        subCategory: "Signature Brandmark",
        tag: "Custom Lettering",
        color: "var(--accent-lime)",
        image: logo3,
        year: "2024",
      },
    ],
  },
];
