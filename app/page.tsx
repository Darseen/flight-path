import FlightSearch from "@/components/home/flight-search";
import FeaturedDestinations from "@/components/home/featured-destinations";
import TravelTips from "@/components/home/travel-tips";
import Comments from "@/components/home/comments";

export default function Home() {
  return (
    <main>
      <FlightSearch />
      <FeaturedDestinations />
      <TravelTips />
      <Comments />
    </main>
  );
}
