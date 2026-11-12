import { StaticImageData } from "next/image";

export interface ServiceSpecification {
  label: string;
  value: string;
}

export interface ServiceVariation {
  id: string;
  name: string;
  description: string;
  price: number; // base price in INR
  pricingType: "per_unit" | "fixed" | "per_lot"; // per unit, fixed package, or per batch (e.g. 1000 cards)
  priceUnit: string; // e.g. "per 1,000 pcs", "per sq. ft.", "per piece"
  minQuantity: number;
  maxQuantity: number;
  quantityStep: number;
  unitLabel: string; // e.g. "Cards", "Sq. Ft.", "Prints", "Books"
  image: StaticImageData;
  specs: ServiceSpecification[];
  popular?: boolean;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  startingPrice: number;
  startingPriceUnit: string;
  /** Images displayed in the overview card (bookshelf-style, 3 overlapping mockups) */
  cardImages: StaticImageData[];
  variations: ServiceVariation[];
}
