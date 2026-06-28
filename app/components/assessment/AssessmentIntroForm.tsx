"use client";

import type { AssessmentIntro } from "@/lib/assessment/types";

type AssessmentIntroFormProps = {
  data: AssessmentIntro;
  onChange: (data: AssessmentIntro) => void;
  onSubmit: () => void;
  errors: Partial<Record<keyof AssessmentIntro, string>>;
};

const inputClass =
  "w-full rounded-sm border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/50";

export default function AssessmentIntroForm({
  data,
  onChange,
  onSubmit,
  errors,
}: AssessmentIntroFormProps) {
  function updateField(field: keyof AssessmentIntro, value: string) {
    onChange({ ...data, [field]: value });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="candidateName"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Candidate Name
          </label>
          <input
            id="candidateName"
            type="text"
            value={data.candidateName}
            onChange={(e) => updateField("candidateName", e.target.value)}
            placeholder="Who are you evaluating?"
            className={`${inputClass} ${errors.candidateName ? "border-red-400/50" : ""}`}
          />
          {errors.candidateName && (
            <p className="mt-2 text-sm text-red-400">{errors.candidateName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="role"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Role Being Considered For
          </label>
          <input
            id="role"
            type="text"
            value={data.role}
            onChange={(e) => updateField("role", e.target.value)}
            placeholder="e.g. Shift Supervisor"
            className={`${inputClass} ${errors.role ? "border-red-400/50" : ""}`}
          />
          {errors.role && (
            <p className="mt-2 text-sm text-red-400">{errors.role}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="evaluatorName"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Your Name
          </label>
          <input
            id="evaluatorName"
            type="text"
            value={data.evaluatorName}
            onChange={(e) => updateField("evaluatorName", e.target.value)}
            placeholder="Evaluator name"
            className={`${inputClass} ${errors.evaluatorName ? "border-red-400/50" : ""}`}
          />
          {errors.evaluatorName && (
            <p className="mt-2 text-sm text-red-400">{errors.evaluatorName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="evaluatorEmail"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Your Email
          </label>
          <input
            id="evaluatorEmail"
            type="email"
            value={data.evaluatorEmail}
            onChange={(e) => updateField("evaluatorEmail", e.target.value)}
            placeholder="you@company.com"
            className={`${inputClass} ${errors.evaluatorEmail ? "border-red-400/50" : ""}`}
          />
          {errors.evaluatorEmail && (
            <p className="mt-2 text-sm text-red-400">{errors.evaluatorEmail}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        data-track="assessment_start"
        className="w-full rounded-sm bg-gold-500 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] sm:w-auto sm:px-10"
      >
        Begin Assessment
      </button>
    </form>
  );
}
