"use client";

import { useState } from 'react';
import GenerationFlowUI from './GenerationFlowUI';

/**
 * Redirects to home page.
 */
export default function GenerationPage() {
  const [generationCompleted, setGenerationCompleted] = useState(false);

  return (
    <div>
      <GenerationFlowUI />
    </div>
  );
}
