"use client";

import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function ErrorPage({
  error,
  message,
}: {
  error?: Error & { digest?: string };
  message?: string;
}) {
  return (
    <div className="flex h-screen flex-col items-center justify-start">
      <div className="px-4 text-center">
        <AlertCircle className="mx-auto mb-4 h-16 w-16 text-red-500 dark:text-red-400" />
        <h1 className="mb-2 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Oops! Something went wrong
        </h1>
        <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
          {error?.name ?? "Error"}
        </p>
        <p className="mb-8 text-2xl font-bold text-gray-800 dark:text-gray-200">
          {message}
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
