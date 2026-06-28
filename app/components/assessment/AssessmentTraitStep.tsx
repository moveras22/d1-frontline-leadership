"use client";

import { getQuestionsForTrait } from "@/lib/assessment/questions";
import type { AssessmentAnswers, TraitDefinition } from "@/lib/assessment/types";
import RatingQuestion from "./RatingQuestion";

type AssessmentTraitStepProps = {
  trait: TraitDefinition;
  answers: AssessmentAnswers;
  onAnswer: (questionId: string, value: number) => void;
  onBack: () => void;
  onNext: () => void;
  isLastTrait: boolean;
};

export default function AssessmentTraitStep({
  trait,
  answers,
  onAnswer,
  onBack,
  onNext,
  isLastTrait,
}: AssessmentTraitStepProps) {
  const questions = getQuestionsForTrait(trait.id);
  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  return (
    <div>
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
          Trait Assessment
        </p>
        <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
          {trait.name}
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/60">
          {trait.description}
        </p>
        <p className="mt-2 text-sm text-white/45">
          Rate how strongly you agree with each statement about this candidate.
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <RatingQuestion
            key={question.id}
            questionNumber={index + 1}
            text={question.text}
            value={answers[question.id]}
            onChange={(value) => onAnswer(question.id, value)}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-sm border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white/80 transition-all hover:border-gold-500/40 hover:bg-white/10"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={!allAnswered}
          data-track={`assessment_trait_${trait.id}`}
          className="rounded-sm bg-gold-500 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isLastTrait ? "View Results" : "Next Trait"}
        </button>
      </div>
    </div>
  );
}
