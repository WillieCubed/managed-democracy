const BASE_URL = process.env.BASE_SERVER_URL;

const API_BASE = `${BASE_URL}/api/v1`;

export async function createNewLawJob(
  prompt: string
) {
  return (await fetch(`${API_BASE}/legislation_jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      prompt,
    }),
  })).json();
}

export function getJobStatus(jobId: string) {
  return fetch(`${API_BASE}/legislation_jobs/${jobId}`);
}

export function getLawGeneration(generationId: string) {
  return fetch(`${API_BASE}/generations/${generationId}`);
}