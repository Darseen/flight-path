import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <nav className="flex flex-wrap justify-center sm:justify-start gap-4 mb-6 sm:mb-0">
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#00b894]"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#00b894]"
            prefetch={false}
          >
            Flights
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#00b894]"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-[#00b894]"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="text-[#00b894] hover:text-white"
            prefetch={false}
          >
            <FacebookIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-[#00b894] hover:text-white"
            prefetch={false}
          >
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="text-[#00b894] hover:text-white"
            prefetch={false}
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center text-sm text-[#999999]">
        &copy; 2024 Flight Path. All rights reserved.
      </div>
    </footer>
  );
}
