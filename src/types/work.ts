import type { StaticImageData } from "next/image";

export interface WorkProject {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  tag: string;
  color: string;
  image?: string | StaticImageData;
  aspectRatio?: string;
  description?: string;
  year?: string;
}

export interface WorkCategory {
  id: string;
  label: string;
  shortLabel: string;
  badge?: string;
  glowGradient: string;
  accentColor: string;
  projects: WorkProject[];
}


