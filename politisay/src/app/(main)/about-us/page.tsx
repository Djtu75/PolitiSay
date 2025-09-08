'use client';

export default function HomePage() {

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 underline py-2">What is PolitiSay?</h1>
      <p className="py-2"> 
        PolitiSay is a passion project made by me (a first time dev) in my free time.
         I've always thought there should be some place you can look up what celebrities and politicians have said in the past.
         Google was pretty inconsistent and ChatGPT was decent, but it often only gave a couple of results and would generalize too much.
         I wanted a place that could make the process simple and easy, and I hope that PolitiSay has done that for you!</p>
      <h1 className="text-3xl font-bold mb-6 underline py-2">Why is a Quote/Promise from X Politician Missing?</h1>
      <p className="py-2">
        This is project I've just made in my free time, so I don't have the ability to collect everything online.
         The submit form tab allows you to submit any quote you want included in the database and (after review) I'll approve and add it!
      </p>
    </main>
  );
}
