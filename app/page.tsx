import NotesIcon from "@mui/icons-material/Notes";
import { redirect } from 'next/navigation';
import PromptField from './PromptField';
import { createNewLawJob } from '@/lib/server/api-client';

const DEMO_SUGGESTIONS = [
  "Ban the use of plastic straws without attracting attention from the oil industry.",
  "Require all new buildings to have solar panels.",
  "Mandate that all cars sold in the US be electric.",
  "Allow for the president to have increased power in times of crisis.",
  "A law that increases farming subsidies without increasing taxes on oil companies.",
];

export default function Home() {
  async function performGeneration(formData: FormData) {
    "use server";
    const prompt = formData.get("prompt") as string;
    const response = await createNewLawJob(prompt);
    const generationId = response.uid;
    redirect(`/generations/${generationId}`);
  }

  return (
    <main className="h-full w-full grid place-content-center">
      <section className="w-screen max-w-4xl mx-auto mb-[10rem]">
        <div className="space-y-4">
          <div className="text-4xl">Managed Democracy</div>
          <div className="text-2xl">Your copilot for crafting policy.</div>
        </div>
        <div className="mt-8 space-y-4">
          <form action={performGeneration}>
            <PromptField />
            <PromptSuggestions suggestions={DEMO_SUGGESTIONS} />
          </form>
        </div>
      </section>
    </main>
  );
}

interface PromptSuggestionsProps {
  suggestions: string[];
}

function PromptSuggestions({ suggestions }: PromptSuggestionsProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-lg" htmlFor="suggestions">
        Suggestions
      </label>
      <div className="space-y-2">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion}
            className="flex items-center space-x-4 p-4 rounded-lg bg-surface-container-high text-on-surface-container"
          >
            <NotesIcon />
            <div>{suggestion}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
