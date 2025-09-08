// /app/lib/partyColors.ts

export type PartyKey = "democrat" | "republican" | "independent" | "green" | "libertarian";

export interface PartyColorScheme {
  bg: string;
  text: string;
  border: string;
  inner_border: string;
}

export const partyColors: Record<PartyKey, PartyColorScheme> = {
  democrat: {
    bg: "bg-blue-800",
    text: "text-white",
    border: "border-blue-400",
    inner_border: "divide-blue-400"
  },
  republican: {
    bg: "bg-red-800",
    text: "text-white",
    border: "border-red-500",
    inner_border: "divide-red-500"
  },
  independent: {
    bg: "bg-gray-700",
    text: "text-white",
    border: "border-gray-400",
    inner_border: "divide-gray-400"
  },
  green: {
    bg: "bg-green-800",
    text: "text-white",
    border: "border-green-400",
    inner_border: "divide-green-400"
  },
  libertarian: {
    bg: "bg-yellow-600",
    text: "text-black",
    border: "border-yellow-300",
    inner_border: "divide-yellow-300"
  }
};
