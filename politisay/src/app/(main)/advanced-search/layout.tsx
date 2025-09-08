import AdvSearch from "@/app/lib/advSearch";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Left 1/3 panel */}
      <div className="w-1/3 flex justify-center items-center overflow-auto text-center border-r-4 border-black px-4">
        <Suspense>
          <AdvSearch placeholder="Quote Here"></AdvSearch>
        </Suspense>
      </div>

      {/* Right 2/3 panel for content */}
      <div className="w-2/3 p-4 overflow-auto">
        {children}
      </div>
    </div>
  );
}