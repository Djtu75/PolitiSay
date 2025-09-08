import { quoteOBJ } from "@/app/types";
import QuoteBox from "@/app/lib/quoteBox";
import Link from "next/link";
import Image from "next/image";

export default function AdvSearchTable({ results = [{pID: 1231, qID:333, quote:"to live is to die", date:new Date("2003-12-24"), sourceID:241}, {pID: 4433, qID:564, quote:"to live is to die 2 electric boogaloo", date:new Date("2003-12-12"), sourceID:665}] }: { results?: quoteOBJ[] }) {
  const resultsLen = results.length;

  const topResults = resultsLen > 6 ? results.slice(0, 9) : results;

  return (
    <div>
      {topResults.map((res) => (
        <QuoteBox key={res.qID} qOBJ={res} />
      ))}
    </div>
  );
}
