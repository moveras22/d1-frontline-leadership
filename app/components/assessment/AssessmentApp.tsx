"use client";

import { useState } from "react";
import { calculateAssessmentResult } from "@/lib/assessment/scoring";
import { TRAITS } from "@/lib/assessment/types";
import type {
  AssessmentAnswers,
  AssessmentIntro,
  AssessmentResult,
} from "@/lib/assessment/types";
import AssessmentIntroForm from "./AssessmentIntroForm";
import AssessmentProgress from "./AssessmentProgress";
import AssessmentResults from "./AssessmentResults";
import AssessmentTraitStep from "./AssessmentTraitStep";

const TOTAL_STEPS = TRAITS.length + 1;

const emptyIntro: AssessmentIntro = {
  candidateName: "",
  role: "",
  evaluatorName: "",
  evaluatorEmail: "",
};

export default function AssessmentApp() {
  const [step, setStep] = useState(0);
  const [intro, setIntro] = useState<AssessmentIntro>(emptyIntro);
  const [answers, setAnswers] = useState<AssessmentAnswers>({});
  const [introErrors, setIntroErrors] = useState<
    Partial<Record<keyof AssessmentIntro, string>>
  >({});
  const [result, setResult] = useState<AssessmentResult | null>(null);

  function validateIntro(): boolean {
    const errors: Partial<Record<keyof AssessmentIntro, string>> = {};

    if (!intro.candidateName.trim()) {
      errors.candidateName = "Candidate name is required.";
    }
    if (!intro.role.trim()) {
      errors.role = "Role is required.";
    }
    if (!intro.evaluatorName.trim()) {
      errors.evaluatorName = "Your name is required.";
    }
    if (!intro.evaluatorEmail.trim()) {
      errors.evaluatorEmail = "Your email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(intro.evaluatorEmail.trim())) {
      errors.evaluatorEmail = "Please enter a valid email address.";
    }

    setIntroErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleIntroSubmit() {
    if (!validateIntro()) return;
    setStep(1);
  }

  function handleAnswer(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  }

  function handleNextTrait() {
    if (step < TRAITS.length) {
      setStep(step + 1);
      return;
    }

    setResult(calculateAssessmentResult(intro, answers));
    setStep(TRAITS.length + 1);
  }

  function handleRestart() {
    setStep(0);
    setIntro(emptyIntro);
    setAnswers({});
    setIntroErrors({});
    setResult(null);
  }

  const isResults = step > TRAITS.length;

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 lg:px-8 lg:pb-32">
      {!isResults && (
        <AssessmentProgress
          currentStep={step + 1}
          totalSteps={TOTAL_STEPS}
          label={
            step === 0
              ? "Getting Started"
              : `Assessing: ${TRAITS[step - 1]?.name ?? ""}`
          }
        />
      )}

      {step === 0 && (
        <div>
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              Step 1
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
              Candidate Information
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/60">
              Enter details about the person you are evaluating and yourself as
              the evaluator. This information will appear on the final report.
            </p>
          </div>
          <AssessmentIntroForm
            data={intro}
            onChange={setIntro}
            onSubmit={handleIntroSubmit}
            errors={introErrors}
          />
        </div>
      )}

      {step >= 1 && step <= TRAITS.length && (
        <AssessmentTraitStep
          trait={TRAITS[step - 1]}
          answers={answers}
          onAnswer={handleAnswer}
          onBack={() => setStep(step - 1)}
          onNext={handleNextTrait}
          isLastTrait={step === TRAITS.length}
        />
      )}

      {isResults && result && (
        <AssessmentResults result={result} onRestart={handleRestart} />
      )}
    </div>
  );
}
