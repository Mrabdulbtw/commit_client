import { AlertCircle } from "lucide-react";

export default function ErrorComponent() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <AlertCircle className="size-14 text-red-500" />

      <h2 className="mt-4 text-xl font-semibold text-gray-900">
        Something went wrong
      </h2>

      <p className="mt-2 text-sm text-gray-500 text-center">
        Unable to load commit details.
        <br />
        Please try again later.
      </p>
    </div>
  );
}