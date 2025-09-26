"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-red-600 text-5xl">Error fetching users data</h1>
    </div>
  );
}
