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

  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 5;

  const airlines = [
    ...new Set(
      flights
        .map((flight) => flight.validatingAirlineCodes?.[0])
        .filter(Boolean),
    ),
  ] as string[];

  const handleFilterChange = (key: keyof Filters, value: string | number) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to the first page when filters change
  };

  const applyFilters = () => {
    const filtered = flights.filter((flight) => {
      const flightPrice = parseFloat(flight.price?.total || "0");
      if (flightPrice > filters.maxPrice) return false;

      const stopCount = (flight.itineraries?.[0]?.segments.length || 1) - 1;
      if (filters.stops !== "any") {
        if (filters.stops === "2+" && stopCount < 2) return false;
        if (filters.stops !== "2+" && stopCount.toString() !== filters.stops)
          return false;
      }

      const flightAirline = flight.validatingAirlineCodes?.[0];
      if (filters.airline !== "any" && flightAirline !== filters.airline)
        return false;

      return true;
    });

    setFilteredFlights(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const totalPages = Math.ceil(filteredFlights.length / flightsPerPage);

  const paginatedFlights = filteredFlights.slice(
    (currentPage - 1) * flightsPerPage,
    currentPage * flightsPerPage,
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <SidebarProvider>
      <div className="flex w-full lg:flex-row lg:justify-between">
        <SidebarFilter
          applyFilters={applyFilters}
          filters={filters}
          airlines={airlines}
          handleFilterChange={handleFilterChange}
        />
        <FlightsList
          flights={paginatedFlights}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </SidebarProvider>
  );
}
