"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FlightSearch, FlightSearchSchema } from "@/lib/zod/search";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Search() {
  const { toast } = useToast();

  const form = useForm<FlightSearch>({
    resolver: zodResolver(FlightSearchSchema),
    defaultValues: {
      originLocationCode: "",
      destinationLocationCode: "",
      departureDate: undefined,
      returnDate: undefined,
      adults: 1,
      children: 0,
      infants: 0,
      nonStop: false,
      twoWay: false,
      travelClass: undefined,
      currencyCode: "USD",
    },
  });

  const onSubmit = (data: FlightSearch) => {
    console.log("submitted");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  console.log(form.formState.errors);

  return (
    <section className="relative">
      <div className="absolute right-5 top-5 -z-10 h-96 w-96 rounded-full bg-cyan-100 blur-[10rem] dark:bg-cyan-500" />

      <div className="flex h-full flex-col justify-center gap-6 px-4 sm:px-6">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          Find your next adventure
        </h1>
        <p className="max-w-[600px] text-base sm:text-lg">
          Search for flights, hotels, and vacation packages to plan your perfect
          trip.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-4xl rounded-lg bg-white p-4 sm:p-6 shadow-lg dark:bg-transparent/50"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <FormField
                control={form.control}
                name="originLocationCode"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>From</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. DXB" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destinationLocationCode"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>To</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. ESB" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="departureDate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Departure Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value)}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="returnDate"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Return Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={!form.getValues("twoWay")}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={new Date(field.value ?? "")}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date(form.getValues("departureDate"))
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <fieldset className="mt-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
              <FormField
                control={form.control}
                name="nonStop"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-2 px-3 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      <span className="text-sm font-medium">Non-stop</span>
                    </FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="twoWay"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-2 px-3 shadow">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>
                      <span className="text-sm font-medium">Two-Way</span>
                    </FormLabel>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="travelClass"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Travel Class" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value="ANY">Any</SelectItem>
                        <SelectItem value="ECONOMY">Economy</SelectItem>
                        <SelectItem value="PREMIUM_ECONOMY">
                          Premium Economy
                        </SelectItem>
                        <SelectItem value="BUSINESS">Business</SelectItem>
                        <SelectItem value="FIRST">First</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </fieldset>
            <div className="mt-4">
              <Button type="submit" size="lg" className="w-full ">
                Search Flights
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
