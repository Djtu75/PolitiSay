'use client';
import AdvSearchTable from "@/app/lib/advSearchTable";
import Pagination from "@/app/lib/pagination";
import { quoteOBJ } from "@/app/types";
import { Suspense } from "react";

const fakeData: quoteOBJ[] = [
  {pID: 1231, qID:333, quote:"to live is to die", date:new Date("2003-12-24"), sourceID:241},
  {pID: 153, qID:124, quote:"I did not have sexual relations with that woman.", date:new Date("2012-03-16"), sourceID:16},
  {pID: 132643, qID:523, quote:"sup bro", date:new Date("2007-07-07"), sourceID:1234},
  {pID: 8654090, qID:432, quote:"yuuuuuh", date:new Date("1987-10-17"), sourceID:34},
  {pID: 1231, qID:355, quote:"to live is to die and yet i wonder if this is true", date:new Date("2003-12-24"), sourceID:241},
  {pID: 153, qID:1224, quote:"yippie kai yae", date:new Date("2012-03-16"), sourceID:16},
  {pID: 132643, qID:3423, quote:"sup bro this is supposed to be a longer quote for testing purposes sadgasdfga sgasdg aef as fsa and yet it still needs to be longer, and such is life, so longer it will be", date:new Date("2007-07-07"), sourceID:1234},
  {pID: 1231, qID:3653, quote:"to live is to die", date:new Date("2003-12-24"), sourceID:241},
  {pID: 153, qID:184, quote:"yippie kai yae", date:new Date("2012-03-16"), sourceID:16},
  {pID: 132643, qID:598, quote:"sup bro", date:new Date("2007-07-07"), sourceID:1234}
]

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to the search Page</h1>
      <div className="flex flex-col justify-center items-center ">
        <Suspense>
          <AdvSearchTable></AdvSearchTable>
        </Suspense>
        <Pagination></Pagination>
      </div>
    </main>
  );
}
