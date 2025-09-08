import { quoteOBJ } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

export default function SearchTable({ results = [{pID: 1231, qID:333, quote:"to live is to die", date:new Date("2003-12-24"), sourceID:241}] }: { results?: quoteOBJ[] }) {
  const resultsLen = results.length;

  const topResults = resultsLen > 6 ? results.slice(0, 9) : results;

  return (
    <div>
      {topResults.map((res) => (
        <div
          key={res.qID}
          className="flex flex-row justify-start items-stretch space-x-3 border-3 border-black rounded-r-[60px] rounded-l-[16px] py-2 px-2 bg-burgundy text-golden"
        >
          <div className="w-[80px] h-[80px] overflow-hidden rounded-full border-2 border-black">
            <Link href={`/politician/${res.pID}`}>
              <Image
                src="/Ulysses_S._Grant.jpg"
                alt="picture of person"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <div className="h-[80px] w-[80px] flex flex-col justify-center flex-1 space-y-1">
            <Link href={`/quote/${res.qID}`}>
              <p className="line-clamp-2 text-3xl text-center border-2 border-golden rounded-r-full rounded-t-full px-2">
                {res.quote}
              </p>
              <p className="text-sm text-golden text-center italic">
                {res.qID}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
