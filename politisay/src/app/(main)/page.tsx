'use client';
import Search from "../search";

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to PolitiSay!</h1>
      <div className="flex justify-center" id="search-bar">
        <Search placeholder="Search Here"></Search>
      </div>
      <div id="results">
        <ul>
          <li>Hey</li>
          <li>quote</li>
          <li>sup</li>
        </ul>
      </div>
      <div id="trending">
        <h2 className="font-bold py-[25px]">Trending Quotes:</h2>

      </div>
      
    </main>
  );
}
