'use client';
import Search from "@/app/search";
import { Suspense } from "react";

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to the search Page</h1>
      <div className="flex justify-center items-center ">
        <Suspense>
          <Search placeholder="Quote Here"></Search>
        </Suspense>
      </div>
    </main>
  );
}
