import { format } from "date-fns";
import { z } from "zod";

export const FlightSearchSchema = z
  .object({
    originLocationCode: z.string().min(3),
    destinationLocationCode: z.string().min(3),
    departureDate: z.date().transform((date) => format(date, "dd-MM-yyyy")),
    returnDate: z
      .date()
      .optional()
      .transform((date) => date && format(date, "dd-MM-yyyy")),
    adults: z.number().default(1),
    children: z.number().default(0),
    infants: z.number().default(0),
    travelClass: z
      .enum(["ANY", "ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"])
      .default("ANY"),
    currencyCode: z.string().length(3).default("USD"),
    excludedAirlineCodes: z.string().optional(),
    includedAirlineCodes: z.string().optional(),
    maxPrice: z.number().optional(),
    minPrice: z.number().optional(),
    max: z.number().default(200),
    nonStop: z.boolean().default(false),
    twoWay: z.boolean().default(false),
  })
  .refine((data) => !data.twoWay || data.returnDate, {
    message: "Required",
    path: ["returnDate"],
  });

export type FlightSearch = z.infer<typeof FlightSearchSchema>;
