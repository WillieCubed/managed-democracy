interface PageUIProps {
  originalPrompt: string;
  overview: string;
  lawsCited: Law[];
  fullText: string;
}

export type Law = {
  title: string;
  description: string;
  citation: string;
  passDate: string;
}

export default function PageUI({
  originalPrompt,
  overview,
  lawsCited,
  fullText
}: PageUIProps) {
  return (
    <div>
      <h1>{originalPrompt}</h1>
      <p>{overview}</p>
      <h2>Laws Cited</h2>
      <ul>
        {lawsCited.map(law => (
          <li key={law.citation}>
            <h3>{law.title}</h3>
            <p>{law.description}</p>
            <p>{law.citation}</p>
            <p>{law.passDate}</p>
          </li>
        ))}
      </ul>
      <h2>Full Text</h2>
      <p>{fullText}</p>
    </div>
  )
}