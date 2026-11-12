"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { m, AnimatePresence } from "motion/react";
import { Service, ServiceVariation } from "@/types/services";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { QuantitySelector } from "@/components/ui/quantity-selector";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { CONTACT_CONFIG } from "@/config/services-data";
import {
  IconCheck,
  IconBrandWhatsapp,
  IconPhone,
  IconX,
} from "@tabler/icons-react";

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedVariationId, setSelectedVariationId] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1000);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync default selection when service opens
  useEffect(() => {
    if (service && service.variations.length > 0) {
      const initialVariation =
        service.variations.find((v) => v.popular) || service.variations[0];
      setSelectedVariationId(initialVariation.id);
      setQuantity(initialVariation.minQuantity);
    }
  }, [service]);

  const activeVariation: ServiceVariation | undefined = useMemo(() => {
    if (!service) return undefined;
    return (
      service.variations.find((v) => v.id === selectedVariationId) ||
      service.variations[0]
    );
  }, [service, selectedVariationId]);

  const handleSelectVariation = useCallback((variation: ServiceVariation) => {
    setSelectedVariationId(variation.id);
    setQuantity(variation.minQuantity);
  }, []);

  // Calculate dynamic total price
  const estimatedTotal = useMemo(() => {
    if (!activeVariation) return 0;
    if (activeVariation.pricingType === "fixed") {
      return activeVariation.price * quantity;
    }
    if (activeVariation.pricingType === "per_lot") {
      const lots = quantity / (activeVariation.minQuantity || 1000);
      return Math.round(activeVariation.price * lots);
    }
    return Math.round(activeVariation.price * quantity);
  }, [activeVariation, quantity]);

  // Universal background scroll lock (including Lenis)
  useLockBodyScroll(!!service);

  // Escape key listener
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (service) {
      window.addEventListener("keydown", handleEscape);
      return () => {
        window.removeEventListener("keydown", handleEscape);
      };
    }
  }, [service, handleEscape]);

  // WhatsApp prefilled message URL with quantity and pricing calculation
  const whatsappUrl = useMemo(() => {
    if (!service || !activeVariation) return "#";
    const msg = encodeURIComponent(
      `Hello ${CONTACT_CONFIG.designerName}! 👋\n\nI want to order *${service.title}*:\n` +
      `• Selected Option: *${activeVariation.name}*\n` +
      `• Quantity: *${quantity.toLocaleString()} ${activeVariation.unitLabel}*\n` +
      `• Total Estimate: *₹${estimatedTotal.toLocaleString()}*\n\n` +
      `Please confirm artwork submission specifications and delivery schedule!`
    );
    return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${msg}`;
  }, [service, activeVariation, quantity, estimatedTotal]);

  if (!mounted) return null;

  const drawerContent = (
    <AnimatePresence>
      {service && activeVariation && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={service.title}
          className="fixed inset-0 z-[99999] isolate flex flex-col justify-end select-none"
        >
          {/* Dark Backdrop */}
          <m.div
            key="drawer-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-0"
            onClick={onClose}
          />

          {/* 
            Bottom Drawer:
            - Reduced height on desktop: max-h-[72vh] md:max-h-[70vh]
            - data-lenis-prevent ensures internal scrolling never leaks to the page
          */}
          <m.div
            key="drawer-sheet"
            data-lenis-prevent
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-h-[85vh] md:max-h-[72vh] flex flex-col overflow-hidden shadow-2xl rounded-t-[28px] sm:rounded-t-[36px]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 1. Top Orange Header */}
            <div className="w-full bg-gradient-to-r from-accent-orange via-[#F59E0B] to-accent-orange text-white px-6 sm:px-10 md:px-14 py-3.5 sm:py-4.5 flex-shrink-0 shadow-md">
              <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                <h3 className="font-display font-bold text-base sm:text-xl md:text-2xl text-white tracking-tight">
                  {service.title}
                </h3>

                {/* Only Cross Icon on Right */}
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close drawer"
                  className="w-8 h-8 rounded-full bg-black/20 hover:bg-black/35 text-white flex items-center justify-center transition-colors flex-shrink-0 cursor-pointer"
                >
                  <IconX size={18} stroke={2.5} />
                </button>
              </div>
            </div>

            {/* 
              2. Second Div with rounded-t-[20px]:
              - Options in a Grid of 3
              - Single-line bullets without labels, with increased gap (space-y-3.5 sm:space-y-4)
              - Active card has linear gradient masked glow
              - Pricing & Quantity selector restored
            */}
            <div
              data-lenis-prevent
              className="w-full flex-1 overflow-y-auto bg-background text-foreground rounded-t-[20px] -mt-2.5 px-6 sm:px-10 md:px-14 py-5 sm:py-6 flex flex-col justify-between border-t border-black/5 shadow-inner"
            >
              <div className="max-w-6xl mx-auto w-full space-y-5">
                {/* 3 Grid Columns for Variations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {service.variations.map((variation) => {
                    const isSelected = variation.id === activeVariation.id;
                    return (
                      <button
                        key={variation.id}
                        type="button"
                        onClick={() => handleSelectVariation(variation)}
                        className={`
                          relative text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer group flex flex-col justify-between overflow-hidden border
                          ${isSelected
                            ? "border-accent-orange/40 bg-accent-orange/[0.04] shadow-sm ring-1 ring-accent-orange/30"
                            : "border-black/5 bg-background hover:border-black/15 hover:bg-surface/50"
                          }
                        `}
                      >
                        {/* 
                          Hero1 Linear Gradient Masked Glow when card is active
                        */}
                        {isSelected && (
                          <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-orange/25 via-accent-lime/10 to-transparent mask-radial-[60%_80%] mask-radial-at-top -z-0"
                          />
                        )}

                        <div className="w-full relative z-10">
                          {/* Heading & Price */}
                          <div className="flex items-baseline justify-between gap-2 mb-3.5 pb-2.5 border-b border-black/5">
                            <h4
                              className={`font-display font-bold text-base sm:text-lg transition-colors ${isSelected ? "text-accent-orange" : "text-foreground"
                                }`}
                            >
                              {variation.name}
                            </h4>

                            <span className="font-display font-bold text-xs sm:text-sm text-foreground whitespace-nowrap">
                              ₹{variation.price.toLocaleString()}
                              <span className="text-[10px] font-normal text-foreground-subtle ml-0.5">
                                {variation.priceUnit}
                              </span>
                            </span>
                          </div>

                          {/* 
                            Single-line bullets (labels removed) with increased vertical gap
                          */}
                          <ul className="space-y-3.5 sm:space-y-4 text-xs sm:text-[13px] text-foreground/85 font-medium">
                            {variation.specs.map((spec, sIdx) => (
                              <li key={sIdx} className="flex items-center gap-2.5">
                                <span className="w-4 h-4 rounded-full bg-accent-orange/15 text-accent-orange flex items-center justify-center flex-shrink-0">
                                  <IconCheck size={11} stroke={3} />
                                </span>
                                <span className="leading-tight text-foreground font-semibold truncate whitespace-nowrap">
                                  {spec.value}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 
                Bottom Bar: Small Quantity Stepper, Small Price, and Balanced Buttons
              */}
              <div className="max-w-6xl mx-auto w-full pt-4 mt-5 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                {/* Quantity & Small Price */}
                <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-foreground-subtle whitespace-nowrap">
                      Qty ({activeVariation.unitLabel}):
                    </span>
                    <QuantitySelector
                      value={quantity}
                      min={activeVariation.minQuantity}
                      max={activeVariation.maxQuantity}
                      step={activeVariation.quantityStep}
                      unitLabel={activeVariation.unitLabel}
                      onChange={setQuantity}
                      size="sm"
                    />
                  </div>

                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xs font-medium text-foreground-subtle">Total:</span>
                    <span className="font-display font-bold text-lg sm:text-xl text-foreground">
                      ₹{estimatedTotal.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Action Buttons: Icons and text in one line with gap-2 */}
                <div className="flex items-center gap-2.5">
                  <a
                    href={`tel:${CONTACT_CONFIG.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-surface hover:bg-surface-dark hover:text-white font-display font-medium text-xs transition-all border border-border flex-shrink-0 cursor-pointer"
                  >
                    <IconPhone size={15} stroke={2} className="shrink-0" />
                    <span className="whitespace-nowrap">Call</span>
                  </a>

                  <ShimmerButton
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="orange"
                    size="sm"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-full"
                  >
                    <IconBrandWhatsapp size={16} stroke={2.2} className="shrink-0" />
                    <span className="whitespace-nowrap">WhatsApp Inquiry</span>
                  </ShimmerButton>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(drawerContent, document.body);
}
