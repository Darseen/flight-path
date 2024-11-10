import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start">
      <div className="text-center">
        <Loader2 className="mx-auto mb-4 h-16 w-16 animate-spin text-primary" />
        <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Loading
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Please wait while we fetch your request...
        </p>
      </div>
    </div>
  );
}
