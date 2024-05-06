'use client';

import { useState } from 'react';

export default function GenerationFlowUI() {
  const [currentStep, setCurrentStep] = useState(1);

  const [fetchedLaws, setFetchedLaws] = useState([]);
  const [precedents, setPrecedents] = useState([]);

  return (
    <div className="pt-[96px]">
      <div className="max-w-[720px] mx-auto">

        <MainProgressIndicator currentStep={currentStep} totalSteps={5} />
        <div className="mt-4 space-y-2 rounded-lg">
          <StepSection status="completed" title="Research laws" />
          <StepSection status="active" title="Search precedents" />
          <StepSection status="upcoming" title="Create plan" />
          <StepSection status="upcoming" title="Simulating public perception" />
          <StepSection status="upcoming" title="Compile results" />
        </div>
      </div>
    </div>
  );
}

interface MainProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

function MainProgressIndicator({
  currentStep,
  totalSteps,
}: MainProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-2xl">Crafting legislation</div>
      <div className="text-md">
        Step {currentStep} of {totalSteps} complete
      </div>
    </div>
  );
}

interface StepIndicatorProps {
  status: 'active' | 'completed' | 'upcoming'
  title: string;
}

function StepSection({ status, title }: StepIndicatorProps) {
  return (
    <div className="flex items-center space-x-2 bg-surface-container-high text-on-surface-container p-4">
      <div className=''>{title}</div>
    </div>
  );
}

function LegislationCard() {
  return (
    <div className="bg-surface text-on-surface rounded-lg p-4 border-outline-variant">
      <div className="text-lg">Legislation</div>
      <div className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui euismod, ultricies nunc nec, ultrices nunc.</div>
    </div>
  );
}