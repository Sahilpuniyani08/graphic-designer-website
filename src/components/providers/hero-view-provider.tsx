"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type CardLayout = "scattered" | "aligned";

interface HeroViewContextType {
  cardLayout: CardLayout;
  setCardLayout: (layout: CardLayout) => void;
  toggleCardLayout: () => void;
}

const HeroViewContext = createContext<HeroViewContextType | undefined>(undefined);

export function HeroViewProvider({ children }: { children: ReactNode }) {
  const [cardLayout, setCardLayout] = useState<CardLayout>("scattered");

  const toggleCardLayout = () => {
    setCardLayout((prev) => (prev === "scattered" ? "aligned" : "scattered"));
  };

  return (
    <HeroViewContext.Provider
      value={{ cardLayout, setCardLayout, toggleCardLayout }}
    >
      {children}
    </HeroViewContext.Provider>
  );
}

export function useHeroView(): HeroViewContextType {
  const context = useContext(HeroViewContext);
  if (!context) {
    throw new Error("useHeroView must be used within a HeroViewProvider");
  }
  return context;
}

