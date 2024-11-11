"use client";

import { useState, useEffect } from "react";
import SidebarFilter from "./sidebar-filter";
import FlightsList from "./flights-list";
import { FlightOffer } from "amadeus-ts";
import { SidebarProvider } from "@/components/ui/sidebar";

type Filters = {
  stops: string;
  airline: string;
  maxPrice: number;
};

interface Props {
  flights: FlightOffer[];
}

export default function StateWrapper({ flights }: Props) {
  const [filteredFlights, setFilteredFlights] =
    useState<FlightOffer[]>(flights);
  const [filters, setFilters] = useState<Filters>({
    stops: "any",
    airline: "any",
    maxPrice: 0,
  });
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    const prices = flights.map((offer) => parseFloat(offer.price.total));
    setMaxPrice(Math.max(...prices));
    setFilters((prev) => ({ ...prev, maxPrice: Math.max(...prices) }));
  }, [flights]);

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

  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 5;
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

  const airlines = [
    ...new Set(
      flights
        .map((flight) => flight.validatingAirlineCodes?.[0])
        .filter(Boolean),
    ),
  ] as string[];

  return (
    <SidebarProvider>
      <div className="flex w-full lg:flex-row lg:justify-between">
        <SidebarFilter
          filters={filters}
          airlines={airlines}
          handleFilterChange={handleFilterChange}
          maxPrice={maxPrice}
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
