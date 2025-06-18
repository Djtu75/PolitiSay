'use client';

import { redirect } from "next/navigation";
import { useEffect } from 'react';
import Image from 'next/image'

function sendHome(){
    redirect('/');
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center min-h-screen">
      <h1 className="text-[42px] p-10">An Error Has Occured</h1>
        <Image src="/Ulysses_S._Grant.jpg" width="300" height="401" alt="picture of Ulysses S. Grant" className="border-4 border-black rounded-md shadow-lg"></Image>
      <a href='https://www.history.com/articles/ulysses-s-grant-president-accomplishments-scandals-15th-amendment#:~:text=Mistakes%20have%20been%20made%2C%20as%20all%20can%20see%20and%20I%20admit'>
        <h2 className="p-4 text-center text-blue-400 hover:text-blue-300">“Mistakes have been made, as all can see and I admit”</h2>
      </a>
      <h4>-Ulysses S. Grant, 1876</h4>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => sendHome()
        }
      >
        Home
      </button>
    </main>
  );
}
