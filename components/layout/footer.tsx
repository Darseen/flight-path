import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row sm:px-6 lg:px-8">
        <nav className="mb-6 flex flex-wrap justify-center gap-4 sm:mb-0 sm:justify-start">
          <Link
            href="/"
            className="text-sm font-medium hover:text-cyan-500"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-cyan-500"
            prefetch={false}
          >
            Flights
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-cyan-500"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-cyan-500"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </div>
      <div className="container mx-auto mt-6 px-4 text-center text-sm text-[#999999] sm:px-6 lg:px-8">
        &copy; 2024 Flight Path. All rights reserved.
      </div>
    </footer>
  );
}
