"use client";

import { useState } from "react";
import SidebarFilter from "./sidebar-filter";
import FlightsList from "./flights-list";
import { FlightOffer } from "amadeus-ts";
import { SidebarProvider } from "@/components/ui/sidebar";

interface Props {
  flights: FlightOffer[];
}

// A client component that shares the data between FlightsList and Sidebar component.
export default function StateWrapper({ flights }: Props) {
  const [filters, setFilters] = useState({
    maxPrice: 1000,
    stops: "any",
    airline: "any",
  });

  const handleFilterChange = (key: any, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    // const filteredFlights = flights.filter((flight) => {
    //   return (
    //     parseInt(flight?.price?.base!) <= filters.maxPrice &&
    //     (filters.stops === "any" ||
    //       flight.stops.toString() === filters.stops) &&
    //     (filters.airline === "any" || flight.airline === filters.airline)
    //   );
    // });
    // setFlights(filteredFlights);
  };

  return (
    <SidebarProvider>
      <div className="flex w-full lg:flex-row lg:justify-between">
        <SidebarFilter
          applyFilters={applyFilters}
          filters={filters}
          handleFilterChange={handleFilterChange}
        />

        <FlightsList flights={flights} />
      </div>
    </SidebarProvider>
  );
}
