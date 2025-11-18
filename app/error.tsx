"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("Full error details:", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Something went wrong!</h2>
      <details className="mb-4">
        <summary>Error Details</summary>
        <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-4 rounded">
          {error.message}
          {error.stack}
        </pre>
      </details>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}
