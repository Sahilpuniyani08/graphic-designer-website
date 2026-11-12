export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  tag?: string;
  initials: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "review-1",
    name: "Jason Keller",
    role: "Brand Director",
    company: "Apex Media Labs",
    content:
      "Anmol completely transformed our brand presence. The Spot UV visiting cards and roll-up standees received endless compliments at our product summit. Working with him felt like having an in-house genius.",
    rating: 5,
    tag: "#testimonial",
    initials: "JK",
  },
  {
    id: "review-2",
    name: "Priya Sharma",
    role: "Founder",
    company: "Cafe Botanica",
    content:
      "The waterproof tri-fold cafe menus and storefront star flex banners are top-notch. High durability, zero color fade, and delivered in under 48 hours. He is my go-to designer for everything.",
    rating: 5,
    tag: "#review",
    initials: "PS",
  },
  {
    id: "review-3",
    name: "Vikram Mehta",
    role: "Managing Director",
    company: "Mehta Industrial Supplies",
    content:
      "Ordered 25 custom duplicate NCR billbooks and corporate letterheads. The serial numbering, clean micro-perforation, and paper quality exceeded all expectations.",
    rating: 5,
    tag: "#commercial",
    initials: "VM",
  },
  {
    id: "review-4",
    name: "Arjun Verma",
    role: "Creative Producer",
    company: "SoundWave Events",
    content:
      "The promotional A3 posters and event flex hoardings were crisp, vivid, and eye-catching from hundreds of feet away. Incredible attention to typography and color reproduction.",
    rating: 5,
    tag: "#eventprint",
    initials: "AV",
  },
  {
    id: "review-5",
    name: "Sneha Kapoor",
    role: "Co-Founder",
    company: "Luxe Atelier Studio",
    content:
      "The gold foil textured visiting cards made an unforgettable first impression on our luxury clients. Anmol understands subtle tactile craftsmanship like no one else.",
    rating: 5,
    tag: "#luxurybranding",
    initials: "SK",
  },
];

