"use client";

import { useState, useCallback } from "react";
import { Service } from "@/types/services";
import { SERVICES_DATA } from "@/config/services-data";
import { ServiceCard } from "./service-card";
import { ServiceDetailModal } from "./service-detail-modal";

export function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  return (
    <>
      {/* 3-Column Bookshelf Grid matching the reference layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 max-w-5xl mx-auto w-full">
        {SERVICES_DATA.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            onClick={() => handleOpenModal(service)}
          />
        ))}
      </div>

      {/* Clean Interactive Pricing & Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={handleCloseModal}
      />
    </>
  );
}
