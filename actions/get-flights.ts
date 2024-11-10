"use server";

import Amadeus, {
  FlightOffersSearchGetParams,
  ResponseError,
} from "amadeus-ts";

export default async function getFlights(params: FlightOffersSearchGetParams) {
  const amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENT_ID,
    clientSecret: process.env.AMADEUS_CLIENT_SECRET,
  });
  try {
    const { data } = await amadeus.shopping.flightOffersSearch.get(params);

    return { data, error: null };
  } catch (error: unknown) {
    if (error instanceof ResponseError) {
      console.log(error.description[0]);
      return {
        error: {
          message: error.description[0].title ?? "Unknown Amadeus Error",
        },
        data: null,
      };
    }
    // unknown error
    console.log(error);
    return { error: { message: "Unknown Error Occured" }, data: null };
  }
}
