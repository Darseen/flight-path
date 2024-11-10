"use client";

import ErrorPage from "@/components/error-page";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <ErrorPage error={error} />;
}
