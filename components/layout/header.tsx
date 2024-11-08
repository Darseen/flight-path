import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 mb-10 flex h-14 w-full items-center bg-white/95 px-4 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <h1 className="whitespace-nowrap text-2xl font-extrabold">
          Flight Path
        </h1>
      </Link>
      <nav className="ml-auto mr-3 flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          Flights
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          Hotels
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          Packages
        </Link>
        <Link
          href="#"
          className="text-sm font-medium underline-offset-4 hover:underline"
          prefetch={false}
        >
          About
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
