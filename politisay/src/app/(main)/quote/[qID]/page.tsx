interface QuotePageProps {
  params: { qID: string };
}

export default function QuotePage({ params }: QuotePageProps) {
  const { qID } = params;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Quote Page</h1>
      <p className="mt-2 text-xl">Quote ID: {qID}</p>
    </div>
  );
}
