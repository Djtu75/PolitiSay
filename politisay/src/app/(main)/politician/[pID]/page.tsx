interface PoliticianPageProps {
  params: { pID: string };
}

export default function PoliticianPage({ params }: PoliticianPageProps) {
  const { pID } = params;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Politician Page</h1>
      <p className="mt-2 text-xl">Politician ID: {pID}</p>
    </div>
  );
}
