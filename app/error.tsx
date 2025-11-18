// app/error.tsx
"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Server Error Boundary:", error);
  }, [error]);

  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>Digest: {error.digest}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
