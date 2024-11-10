import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FlightOffer } from "amadeus-ts";
import { format, parseISO } from "date-fns";
import {
  Calendar,
  Clock,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
} from "lucide-react";
import formatFlightDuration from "../_utils/format-duration";

interface Props {
  flight: FlightOffer;
}

export default function FlightCard({ flight }: Props) {
  // Extract first itinerary and segment for display
  const firstItinerary = flight.itineraries[0];
  const firstSegment = firstItinerary.segments[0];
  const lastSegment =
    firstItinerary.segments[firstItinerary.segments.length - 1];

  // Calculate stops
  const stops = (firstItinerary?.segments.length || 1) - 1;

  // Extract pricing information
  const price = flight.price.total;
  const currency = flight.price.currency;

  // Get airline code from validating airline codes
  const airlineCode = flight.validatingAirlineCodes?.[0] || "N/A";

  if (!firstSegment || !lastSegment) return null;

  return (
    <Card className="bg-white transition-all duration-200 hover:scale-[1.02] hover:cursor-pointer dark:bg-transparent/70">
      <CardHeader className="px-3 py-2 md:px-6 md:py-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Plane className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-base md:text-xl">{airlineCode}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Mobile Layout */}
        <div className="items flex flex-col gap-4 lg:hidden">
          <div className="grid grid-cols-3 gap-2">
            {/* Departure Info */}
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-semibold md:text-sm">
                {firstSegment.departure.iataCode}
              </p>
              <p className="text-sm text-muted-foreground">
                {firstSegment.departure?.terminal
                  ? `Terminal ${firstSegment.departure.terminal}`
                  : "Terminal N/A"}
              </p>
              <p className="text-xs md:text-sm">
                {format(parseISO(firstSegment.departure.at), "MMM d")}
              </p>
              <p className="text-xs md:text-sm">
                {format(parseISO(firstSegment.departure.at), "h:mm a")}
              </p>
            </div>

            {/* Flight Duration */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex items-center space-x-2">
                <PlaneTakeoff className="h-5 w-5 text-primary sm:h-7 sm:w-7" />
                <div className="h-px w-10 bg-border sm:w-20"></div>
                <PlaneLanding className="h-5 w-5 text-primary sm:h-7 sm:w-7" />
              </div>
              <p className="mt-2 text-sm font-medium">
                {formatFlightDuration(firstItinerary.duration)}
              </p>
              <p className="text-xs text-muted-foreground">
                {stops === 0
                  ? "Non-stop"
                  : `${stops} stop${stops > 1 ? "s" : ""}`}
              </p>
            </div>

            {/* Arrival Info */}
            <div className="flex flex-col items-center text-center">
              <p className="text-sm font-semibold">
                {lastSegment.arrival.iataCode}
              </p>
              <p className="text-sm text-muted-foreground">
                {lastSegment.departure?.terminal
                  ? `Terminal ${firstSegment.departure.terminal}`
                  : "Terminal N/A"}
              </p>
              <p className="text-xs">
                {format(parseISO(lastSegment.arrival.at), "MMM d")}
              </p>
              <p className="text-xs">
                {format(parseISO(lastSegment.arrival.at), "h:mm a")}
              </p>
            </div>
          </div>

          {/* Price and Button */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-lg font-bold">{`${currency} ${price}`}</span>
            <Button size="sm" className="w-full">
              Select Flight
            </Button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 items-center gap-4">
            {/* Departure Info */}
            <div className="flex flex-col items-center text-center">
              <p className="text-lg font-semibold">
                {firstSegment.departure.iataCode}
              </p>
              <p className="text-sm text-muted-foreground">
                {firstSegment.departure?.terminal
                  ? `Terminal ${firstSegment.departure.terminal}`
                  : "Terminal N/A"}
              </p>
              <p className="mt-1 text-base">
                {format(parseISO(firstSegment.departure.at), "MMM d, yyyy")}
              </p>
              <p className="text-xs">
                {format(parseISO(firstSegment.departure.at), "h:mm a")}
              </p>
            </div>

            {/* Flight Duration */}
            <div className="col-span-2 flex flex-col items-center text-center">
              <div className="flex items-center space-x-2">
                <PlaneTakeoff className="h-7 w-7 text-primary" />
                <div className="h-px w-32 bg-border"></div>
                <PlaneLanding className="h-7 w-7 text-primary" />
              </div>
              <p className="mt-2 text-sm font-medium">
                {formatFlightDuration(firstItinerary.duration) || "N/A"}
              </p>
              <p className="text-xs text-muted-foreground">
                {stops === 0
                  ? "Non-stop"
                  : `${stops} stop${stops > 1 ? "s" : ""}`}
              </p>
            </div>

            {/* Arrival Info */}
            <div className="flex flex-col items-center text-center">
              <p className="text-lg font-semibold">
                {lastSegment.arrival.iataCode}
              </p>
              <p className="text-sm text-muted-foreground">
                {lastSegment.departure?.terminal
                  ? `Terminal ${firstSegment.departure.terminal}`
                  : "Terminal N/A"}
              </p>
              <p className="mt-1 text-base">
                {format(parseISO(lastSegment.arrival.at), "MMM d, yyyy")}
              </p>
              <p className="text-xs">
                {format(parseISO(lastSegment.arrival.at), "h:mm a")}
              </p>
            </div>

            {/* Price and Button */}
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-bold">
                {`${currency} ${price}`}
              </span>
              <Button className="w-full">Select Flight</Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-3 flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground md:mt-4 md:flex-row md:text-sm">
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 md:h-4 md:w-4" />
              <span>
                Duration: {formatFlightDuration(firstItinerary.duration)}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3 md:h-4 md:w-4" />
              <span>
                Flight {firstSegment.carrierCode}
                {firstSegment.number}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
