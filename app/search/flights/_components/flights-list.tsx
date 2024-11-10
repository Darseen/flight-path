import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { FlightOffer } from "amadeus-ts";
import { Filter } from "lucide-react";
import FlightCard from "./flight-card";

interface Props {
  flights: FlightOffer[];
}

export default function FlightsList({ flights }: Props) {
  return (
    <div className="w-full max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold md:text-3xl">
          Flight Search Results
        </h1>
        <SidebarTrigger className="md:hidden">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
            <span className="sr-only">Toggle Filters</span>
          </Button>
        </SidebarTrigger>
      </div>

      <div className="space-y-4">
        {flights.map((flight, i) => (
          <FlightCard flight={flight} key={i} />
        ))}
      </div>
    </div>
  );
}
