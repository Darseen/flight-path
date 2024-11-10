"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "../theme-toggle";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Flights", href: "#" },
  { title: "About", href: "/about" },
  { title: "project", href: "https://github.com/darseen/flight-path" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 mb-10 h-14 w-full items-center bg-white/95 px-4 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
      <div className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="flex items-center justify-between"
          prefetch={false}
        >
          <h1 className="whitespace-nowrap text-2xl font-extrabold">
            Flight Path
          </h1>
        </Link>
        <div className="flex gap-2 md:gap-0">
          <div className="mr-4 hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-4">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="text-sm font-medium underline-offset-4 hover:underline">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetTitle asChild>
                <Link
                  href="/"
                  className="flex items-center justify-between"
                  prefetch={false}
                  onClick={() => setIsOpen(false)}
                >
                  <h1 className="whitespace-nowrap text-2xl font-extrabold">
                    Flight Path
                  </h1>
                </Link>
              </SheetTitle>
              <Separator className="my-4" />
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-2 py-1 text-lg"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
