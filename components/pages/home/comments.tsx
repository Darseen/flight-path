import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export default function Comments() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="relative mb-12 text-center">
          <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-100 blur-[8rem] dark:bg-cyan-500" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            What Our Users Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg lg:text-xl">
            Discover how our platform has enhanced the travel planning
            experience.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border">
                    <AvatarImage
                      src="/placeholder-user.jpg"
                      alt={`User ${index + 1}`}
                    />
                    <AvatarFallback>
                      {index === 0 ? "JD" : index === 1 ? "JS" : "MC"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">
                      {index === 0
                        ? "John Doe"
                        : index === 1
                          ? "Jane Smith"
                          : "Michael Chen"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {index === 0
                        ? "New York, USA"
                        : index === 1
                          ? "London, UK"
                          : "Sydney, Australia"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <div className="flex items-center gap-px text-primary">
                    {Array(4)
                      .fill(0)
                      .map((_, i) => (
                        <StarIcon key={i} className="h-3 w-3 fill-current" />
                      ))}
                    <StarIcon className="h-3 w-3" />
                  </div>
                  <span className="text-muted-foreground">
                    {index === 0
                      ? "1 week ago"
                      : index === 1
                        ? "2 weeks ago"
                        : "3 weeks ago"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {index === 0
                    ? "Booking my flights was seamless. The intuitive interface made the process straightforward and enjoyable!"
                    : index === 1
                      ? "The site provided a broad range of options. It was easy to navigate, and customer support was prompt."
                      : "A user-friendly and reliable service with excellent search and booking options. Highly recommend!"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
