'use client';
import Search from "@/app/lib/search";
import Image from "next/image";
import SearchTable from "@/app/lib/searchTable";
import Pagination from "@/app/lib/pagination";
import { quoteOBJ } from "@/app/types";
import { niconne } from "@/app/fonts";
import Link from "next/link";
import TrendingBox from "@/app/lib/trendingBox";
import { spec } from "node:test/reporters";
import { error } from "console";
import { TIMEOUT } from "dns";

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

function formatVisitString(numVisits: number): string{
  if(numVisits < 1000){
    return (numVisits + "");
  }
  var stringVisits : string = numVisits + "";
  var svLen : number = stringVisits.length;
  var decimal: number = numVisits > 1000000 ? 6 : 3;
  var returnStr : string = stringVisits.substring(0, svLen - decimal) + (svLen - decimal == 3 ? "" : ".");
  returnStr += stringVisits.substring(svLen - decimal, 3);
  returnStr += numVisits > 1000000 ? "M" : "K";
  return(returnStr)
}

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-3xl font-bold mb-4">Welcome to PolitiSay!</h1>
      <div className="flex flex-col items-center justify-center divide-black divide-y-2" id="search-bar">
        <Search placeholder="Search quotes..." />
        <div id="results" className="flex flex-col justify-center items-center py-2">
          <SearchTable></SearchTable>
          <Link href={'/advanced-search'}>
            <button className='px-2 py-1 border-black border-2 rounded-xl text-lg bg-burgundy text-golden rounded hover:bg-burgundyLight transition'>Full Search</button>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col space-y-2" id="trending">
        <h2 className="font-bold text-[30px] py-[15px]">Trending Quotes:</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-4">
          {fakeData.map((trendingQuote) => (
            <TrendingBox key={trendingQuote.qID} qOBJ={trendingQuote} visitCount={formatVisitString(trendingQuote.pID)} width={'w-[120px]'} height={'h-[120px]'}/>
          ))}
        </div>
      </div>

      
    </main>
  );
}
