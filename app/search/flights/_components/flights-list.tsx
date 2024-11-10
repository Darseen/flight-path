import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { FlightOffer } from "amadeus-ts";
import { Filter } from "lucide-react";
import FlightCard from "./flight-card";
import { Button } from "@/components/ui/button";

interface Props {
  flights: FlightOffer[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function FlightsList({
  flights,
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const handlePrevious = () => onPageChange(currentPage - 1);
  const handleNext = () => onPageChange(currentPage + 1);

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

      {flights.length > 0 ? (
        <div className="space-y-4">
          {flights.map((flight, i) => (
            <FlightCard flight={flight} key={i} />
          ))}

          <div className="mt-6 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePrevious();
                    }}
                  />
                </PaginationItem>

                {[...Array(totalPages)].slice(1, 4).map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onPageChange(index + 1);
                      }}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                {totalPages > 5 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNext();
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-center text-xl">
            No Results Were Found For The Provided Search Criteria!
          </p>
        </div>
      )}
    </div>
  );
}
