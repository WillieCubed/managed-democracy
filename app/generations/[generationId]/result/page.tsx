export default function ResultPage() {
  const data = 

  return (
    <div className="lg:grid lg:grid-cols-">
      <section className='space-y-4'>
        <h1 className="text-xl">Full Text</h1>
        <FullTextBlock fullText={''} />
      </section>
    </div>
  )
}

interface FullTextBlockProps {
  fullText: string;
}

function FullTextBlock({
  fullText
}: FullTextBlockProps) {
  return (
    <div>
      {fullText}
    </div>
  );
}