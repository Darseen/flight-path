import FlightSearch from "@/components/pages/home/flight-search";
import FeaturedDestinations from "@/components/pages/home/featured-destinations";
import TravelTips from "@/components/pages/home/travel-tips";
import Comments from "@/components/pages/home/comments";

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
