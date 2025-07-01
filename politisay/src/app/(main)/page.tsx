'use client';
import Search from "@/app/search";
import Image from "next/image";
import { quoteOBJ } from "@/app/types";
import { niconne } from "@/app/fonts";
import Link from "next/link";

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

function formatVisitString(numVisits: number): String{
  if(numVisits < 1000){
    return (numVisits + "");
  }
  var stringVisits : String = numVisits + "";
  var svLen : number = stringVisits.length;
  var decimal: number = numVisits > 1000000 ? 6 : 3;
  var returnStr : String = stringVisits.substring(0, svLen - decimal) + (svLen - decimal == 3 ? "" : ".");
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
      <div className="flex justify-center" id="search-bar">
      </div>
      <div id="results">
        <ul>
          <li>Hey</li>
          <li>quote</li>
          <li>sup</li>
        </ul>
      </div>
      <div className="w-full flex justify-center items-center flex-col space-y-2" id="trending">
        <h2 className="font-bold text-[30px] py-[15px]">Trending Quotes:</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-5 gap-4">
          {fakeData.map((trendingQuote) => (
            <div
              key={trendingQuote.qID}
              className="flex flex-row justify-start items-stretch space-x-3 border-3 border-black rounded-r-[60px] rounded-l-[16px] py-2 px-2 bg-burgundy text-golden divide-x-4 divide-black"
            > 
              <div className="flex flex-col justify-center text-center w-[60px]">
                visits: {formatVisitString(trendingQuote.pID)}
              </div>
              <div className="w-[120px] h-[120px] overflow-hidden rounded-full border-2 border-black">
                <Link href={"/" + trendingQuote.pID}>
                <Image
                  src="/Ulysses_S._Grant.jpg"
                  alt="picture of person"
                  width={120}
                  height={120}
                />
                </Link>
              </div>
              <div className="h-[120px] w-[120px] flex flex-col justify-center flex-1 space-y-1">
                <Link href={"/" + trendingQuote.qID}>
                <p className={`${niconne.className} antialiased line-clamp-2 text-3xl text-center border-2 border-golden rounded-r-full rounded-t-full px-2`}>
                  {trendingQuote.quote}
                </p>
                <p className="text-sm text-golden text-center italic">
                  {trendingQuote.qID}
                </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </main>
  );
}
