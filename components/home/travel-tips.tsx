import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon, LuggageIcon, MapPinIcon } from "lucide-react";

export default function TravelTips() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="relative mb-12 text-center">
          <div className="absolute top-0 -z-10 h-96 w-96 rounded-full bg-cyan-100 blur-[10rem] dark:bg-cyan-500" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Travel Tips
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg lg:text-xl">
            Get the most out of your trip with our expert travel tips.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
              <LuggageIcon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Pack Light</h3>
              <p className="text-muted-foreground">
                Avoid overpacking by sticking to the essentials. This will make
                your travel experience more comfortable and convenient.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
              <MapPinIcon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Explore Locally</h3>
              <p className="text-muted-foreground">
                Immerse yourself in the local culture by visiting
                off-the-beaten-path destinations and interacting with locals.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-shadow hover:shadow-lg">
            <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
              <ClockIcon className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-semibold">Be Flexible</h3>
              <p className="text-muted-foreground">
                Leave room for spontaneity and be open to changing your plans.
                This will allow you to discover unexpected adventures.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
