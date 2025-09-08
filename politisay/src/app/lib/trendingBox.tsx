import { quoteOBJ } from "@/app/types";
import Link from "next/link";
import Image from "next/image";
import { partyColors } from "@/app/partyColors";

function parseTailwindSize(size: string): number {
  // Examples: "w-[80px]", "w-20", "w-[100]"
  const match = size.match(/(?:w|h)-\[?(\d+)(?:px)?\]?/);
  return match ? parseInt(match[1]) : 120; // fallback to 80 if not matched
}


export default function TrendingBox({
  qOBJ = { pID: -1, qID: -1, quote: "placeholder quote", date: new Date("1000-10-10"), sourceID: -1 },
  visitCount = '-1',
  width = 'w-auto',
  height = 'h-auto'
}: {
  qOBJ?: quoteOBJ,
  visitCount?: string,
  width?: string,
  height?: string
}){

    const parsedWidth = parseTailwindSize(width);
    const parsedHeight = parseTailwindSize(height);
    const guy = 'null';

    const party = ( /*qOBJ.pID.party*/ guy ?? "independent").toLowerCase() as keyof typeof partyColors;
    const colors = partyColors[party] ?? partyColors.independent;

    return(
        <div
          className={`flex flex-row justify-start items-stretch space-x-3 border-3 rounded-r-[60px] rounded-l-[16px] py-2 px-2 divide-x-3 ${colors.border} ${colors.bg} ${colors.text} ${colors.inner_border}`}
        >
            <div className={`flex flex-col justify-center text-center w-[60px]`}>
                    visits: {visitCount}
            </div>
          <div className={`${width} ${height} overflow-hidden rounded-full border-2`}>
            <Link href={`/politician/${qOBJ.pID}`}>
              <Image
                src="/Ulysses_S._Grant.jpg"
                alt="picture of person"
                width={parsedWidth}
                height={parsedHeight}
              />
            </Link>
          </div>
          <div className={`${width} ${height} flex flex-col justify-center flex-1 space-y-1`}>
            <Link href={`/quote/${qOBJ.qID}`}>
              <p className="line-clamp-2 text-3xl text-center border-2 rounded-r-full rounded-t-full px-2">
                {qOBJ.quote}
              </p>
              <p className="text-sm text-center italic">
                {qOBJ.qID}
              </p>
            </Link>
          </div>
        </div>
    );
}