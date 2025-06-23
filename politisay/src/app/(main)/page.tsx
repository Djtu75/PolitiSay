'use client';

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to PolitiSay!</h1>
      <h3 className="text-2x1 mb-2"> Type in VVVV to search for a specific quote!</h3>
      <button
        onClick={() => handleClick()}
        className="px-6 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </main>
  );
}
