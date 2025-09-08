'use client';
function InputBar({ placeholder }: { placeholder: string }){
  return(
    <input
        className="peer block w-full rounded-md border border-gray-200 py-[10px] pl-4 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
  )
}

export default function HomePage() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Submit Page</h1>
      <InputBar placeholder="Select Politician"></InputBar>
      <InputBar placeholder="Quote/Transcript"></InputBar>
      <InputBar placeholder="Source"></InputBar>
      <button className="px-6 py-2 text-lg bg-blue-500 text-white rounded hover:bg-blue-600 transition">Submit</button>
    </main>
  );
}
