import { format } from "date-fns";
import { z } from "zod";

export const flightSearchSchema = z
  .object({
    originLocationCode: z.string().min(3),
    destinationLocationCode: z.string().min(3),
    departureDate: z
      .date()
      .or(z.string())
      .transform((date) => format(date, "yyyy-MM-dd")),
    returnDate: z
      .date()
      .or(z.string())
      .optional()
      .transform((date) => date && format(date, "yyyy-MM-dd")),
    adults: z.number().default(1),
    children: z.number().default(0),
    infants: z.number().default(0),
    travelClass: z
      .enum(["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"])
      .optional(),
    currencyCode: z.any().default("USD"), // temp solution
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

export type FlightSearch = z.infer<typeof flightSearchSchema>;
