"use client";

import { useState, useEffect } from "react";
import SidebarFilter from "./sidebar-filter";
import FlightsList from "./flights-list";
import { FlightOffer } from "amadeus-ts";
import { SidebarProvider } from "@/components/ui/sidebar";

type Filters = {
  maxPrice: number;
  stops: string;
  airline: string;
};

interface Props {
  flights: FlightOffer[];
}

export default function StateWrapper({ flights }: Props) {
  const [filteredFlights, setFilteredFlights] =
    useState<FlightOffer[]>(flights);
  const [filters, setFilters] = useState<Filters>({
    maxPrice: 10000,
    stops: "any",
    airline: "any",
  });

  // Extract unique airlines from flights
  const airlines = [
    ...new Set(
      flights
        .map((flight) => flight.validatingAirlineCodes?.[0])
        .filter(Boolean),
    ),
  ] as string[];

  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    const filtered = flights.filter((flight) => {
      // Price filter
      const flightPrice = parseFloat(flight.price?.total || "0");
      if (flightPrice > filters.maxPrice) {
        return false;
      }

      // Stops filter
      const stopCount = (flight.itineraries?.[0]?.segments.length || 1) - 1;
      if (filters.stops !== "any") {
        if (filters.stops === "2+") {
          if (stopCount < 2) return false;
        } else if (stopCount.toString() !== filters.stops) {
          return false;
        }
      }

      // Airline filter
      const flightAirline = flight.validatingAirlineCodes?.[0];
      if (filters.airline !== "any" && flightAirline !== filters.airline) {
        return false;
      }

      return true;
    });

    setFilteredFlights(filtered);
  };

  // Apply filters on initial load
  useEffect(() => {
    applyFilters();
  }, [filters]); // Re-run when filters change

  return (
    <SidebarProvider>
      <div className="flex w-full lg:flex-row lg:justify-between">
        <SidebarFilter
          applyFilters={applyFilters}
          filters={filters}
          airlines={airlines}
          handleFilterChange={handleFilterChange}
        />
        <FlightsList flights={filteredFlights} />
      </div>
    </SidebarProvider>
  );
}
