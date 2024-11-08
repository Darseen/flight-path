import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ClockIcon, LuggageIcon, MapPinIcon, StarIcon } from "lucide-react";
import Search from "@/components/pages/home/search";
import FeaturedDestinations from "@/components/pages/home/featured-destinations";

export default function Home() {
  return (
    <main>
      <Search />
      <FeaturedDestinations />
      <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Travel Tips
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the most out of your trip with our expert travel tips.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col gap-4">
                <LuggageIcon className="h-8 w-8" />
                <h3 className="text-lg font-semibold">Pack Light</h3>
                <p className="text-muted-foreground">
                  Avoid overpacking by sticking to the essentials. This will
                  make your travel experience more comfortable and convenient.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-4">
                <MapPinIcon className="h-8 w-8" />
                <h3 className="text-lg font-semibold">Explore Locally</h3>
                <p className="text-muted-foreground">
                  Immerse yourself in the local culture by visiting
                  off-the-beaten-path destinations and interacting with locals.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-4">
                <ClockIcon className="h-8 w-8" />
                <h3 className="text-lg font-semibold">Be Flexible</h3>
                <p className="text-muted-foreground">
                  Leave room for spontaneity and be open to changing your plans.
                  This will allow you to discover unexpected adventures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from real travelers who have used our services.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-11 w-11 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-muted-foreground">
                      New York, USA
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5" />
                  </div>
                  <span>1 week ago</span>
                </div>
                <p>
                  I had a great experience booking my flights through Fly Away.
                  The process was easy and the prices were competitive. I would
                  definitely use their services again.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-11 w-11 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="grid">
                    <div className="font-semibold">Jane Smith</div>
                    <div className="text-sm text-muted-foreground">
                      London, UK
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px">
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5 fill-primary" />
                    <StarIcon className="h-2.5 w-2.5" />
                  </div>
                  <span>2 weeks ago</span>
                </div>
                <p>
                  I was impressed with the wide range of flight options and the
                  easy-to-use booking platform. The customer service was also
                  excellent.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-11 w-11 border">
                    <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                    {`< />`}
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
