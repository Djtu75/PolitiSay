'use client';

import PromiseSearch from "@/app/lib/promiseSearch";

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Promise Page</h1>
      <PromiseSearch placeholder="Politician Here"></PromiseSearch>
    </main>
  );
}
