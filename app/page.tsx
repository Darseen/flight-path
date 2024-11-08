import { StarIcon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

import Search from "@/components/pages/home/search";
import FeaturedDestinations from "@/components/pages/home/featured-destinations";
import TravelTips from "@/components/pages/home/travel-tips";
import Comments from "@/components/pages/home/comments";

export default function Home() {
  return (
    <main>
      <Search />
      <FeaturedDestinations />
      <TravelTips />
      <Comments />
    </main>
  );
}
