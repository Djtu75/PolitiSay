'use client';

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
      <button
        onClick={() => handleClick()}
        className="px-6 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
    </main>
  );
}
