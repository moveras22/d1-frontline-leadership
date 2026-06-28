"use client";

import { useState } from "react";
import { generateAssessmentPdf } from "@/lib/assessment/pdf-report";
import type { AssessmentResult } from "@/lib/assessment/types";
import { trackLeadConversion } from "@/lib/analytics";

type AssessmentResultsProps = {
  result: AssessmentResult;
  onRestart: () => void;
};

function TraitScoreBar({ name, score }: { name: string; score: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm">
        <span className="font-medium text-white/85">{name}</span>
        <span className="font-semibold text-gold-400">{score}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-navy-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export default function AssessmentResults({
  result,
  onRestart,
}: AssessmentResultsProps) {
  const [email, setEmail] = useState(result.intro.evaluatorEmail);
  const [emailError, setEmailError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const hasEmailFromStart = !!result.intro.evaluatorEmail.trim();

  async function handleDownload() {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setEmailError("Email is required to download your report.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setEmailError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: result.intro.evaluatorName,
          email: trimmedEmail,
        }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        setEmailError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      trackLeadConversion();
      generateAssessmentPdf(result);
      setDownloaded(true);
    } catch {
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
          Assessment Complete
        </p>
        <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
          D1 Leadership Score for {result.intro.candidateName}
        </h2>
        <p className="mt-2 text-sm text-white/50">
          Role: {result.intro.role}
        </p>
      </div>

      <div className="mt-10 rounded-sm border border-gold-500/25 bg-gradient-to-br from-gold-500/8 via-navy-800/80 to-navy-900/90 p-8 text-center sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
          Overall D1 Score
        </p>
        <p className="mt-4 font-display text-6xl font-bold text-white sm:text-7xl">
          {result.overallScore}
        </p>
        <p className="mt-2 text-sm text-white/50">out of 100</p>
        <p className="mt-6 font-display text-xl font-semibold text-gold-400 sm:text-2xl">
          {result.category.label}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
          {result.category.description}
        </p>
      </div>

      <div className="mt-10 space-y-5">
        <h3 className="font-display text-xl font-bold sm:text-2xl">
          Trait Breakdown
        </h3>
        {result.traitScores.map((trait) => (
          <TraitScoreBar key={trait.traitId} name={trait.name} score={trait.score} />
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8">
          <h3 className="font-display text-lg font-bold text-gold-400">
            Strengths
          </h3>
          <ul className="mt-4 space-y-3">
            {result.strengths.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8">
          <h3 className="font-display text-lg font-bold text-gold-400">
            Development Areas
          </h3>
          <ul className="mt-4 space-y-3">
            {result.developmentAreas.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/75">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {result.recommendations.length > 0 && (
        <div className="mt-10 rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8">
          <h3 className="font-display text-xl font-bold sm:text-2xl">
            Development Recommendations
          </h3>
          <ul className="mt-6 space-y-4">
            {result.recommendations.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/75 sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8">
        <h3 className="font-display text-xl font-bold sm:text-2xl">
          Suggested Next Steps
        </h3>
        <ul className="mt-6 space-y-4">
          {result.nextSteps.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/75 sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 rounded-sm border border-gold-500/25 bg-gradient-to-br from-gold-500/8 via-navy-800/80 to-navy-900/90 p-8 sm:p-10">
        <h3 className="text-center font-display text-xl font-bold sm:text-2xl">
          Download Your Personalized Leadership Report
        </h3>
        <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-white/65 sm:text-base">
          Get a PDF report with scores, strengths, development areas, and
          recommended next steps for {result.intro.candidateName}.
        </p>

        {downloaded ? (
          <div className="mt-8 text-center">
            <p className="font-display text-lg font-semibold text-gold-400">
              Your report has been downloaded.
            </p>
            <p className="mt-2 text-sm text-white/60">
              Check your downloads folder for the PDF.
            </p>
          </div>
        ) : (
          <div className="mx-auto mt-8 max-w-md">
            {!hasEmailFromStart && (
              <div className="mb-4">
                <label
                  htmlFor="report-email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
                >
                  Email Address
                </label>
                <input
                  id="report-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  disabled={isSubmitting}
                  className="w-full rounded-sm border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/50"
                />
              </div>
            )}

            {emailError && (
              <p className="mb-4 text-center text-sm text-red-400" role="alert">
                {emailError}
              </p>
            )}

            <button
              type="button"
              onClick={handleDownload}
              disabled={isSubmitting}
              data-track="assessment_download_report"
              className="w-full rounded-sm bg-gold-500 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Preparing..." : "Download Your Personalized Leadership Report"}
            </button>

            {hasEmailFromStart && (
              <p className="mt-3 text-center text-xs text-white/40">
                Using {result.intro.evaluatorEmail}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onRestart}
          className="text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
        >
          Start a New Assessment
        </button>
      </div>
    </div>
  );
}
