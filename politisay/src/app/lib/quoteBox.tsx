import { quoteOBJ } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

export default function QuoteBox({
  qOBJ = { pID: -1, qID: -1, quote: "placeholder quote", date: new Date("1000-10-10"), sourceID: -1 },
  width = 'w-auto',
  height = 'h-auto'
}: {
  qOBJ?: quoteOBJ,
  width?: string,
  height?: string
}){
    return(
        <div
          className="flex flex-row justify-start items-stretch space-x-3 border-3 border-black rounded-r-[60px] rounded-l-[16px] py-2 px-2 bg-burgundy text-golden"
        >
          <div className={`${width} ${height} overflow-hidden rounded-full border-2 border-black`}>
            <Link href={`/politician/${qOBJ.pID}`}>
              <Image
                src="/Ulysses_S._Grant.jpg"
                alt="picture of person"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <div className={`${width} ${height} flex flex-col justify-center flex-1 space-y-1`}>
            <Link href={`/quote/${qOBJ.qID}`}>
              <p className="line-clamp-2 text-3xl text-center border-2 border-golden rounded-r-full rounded-t-full px-2">
                {qOBJ.quote}
              </p>
              <p className="text-sm text-golden text-center italic">
                {qOBJ.qID}
              </p>
            </Link>
          </div>
        </div>
    );
}