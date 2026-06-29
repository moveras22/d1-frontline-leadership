"use client";

import { FormEvent, useState } from "react";

type FormErrors = {
  name?: string;
  email?: string;
  company?: string;
  jobTitle?: string;
  supervisorCount?: string;
};

const inputClass =
  "w-full rounded-sm border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/50";
const errorInputClass = "border-red-400/50 focus:border-red-400/70";

type TrainingProgramInterestFormProps = {
  programTitle: string;
  programSlug: string;
};

export default function TrainingProgramInterestForm({
  programTitle,
  programSlug,
}: TrainingProgramInterestFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get("name") as string).trim(),
      email: (formData.get("email") as string).trim(),
      company: (formData.get("company") as string).trim(),
      jobTitle: (formData.get("jobTitle") as string).trim(),
      supervisorCount: (formData.get("supervisorCount") as string).trim(),
      message: (formData.get("message") as string).trim(),
      programTitle,
      programSlug,
    };

    const nextErrors: FormErrors = {};

    if (!data.name) {
      nextErrors.name = "Full name is required.";
    }

    if (!data.email) {
      nextErrors.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "Please enter a valid work email address.";
    }

    if (!data.company) {
      nextErrors.company = "Company is required.";
    }

    if (!data.jobTitle) {
      nextErrors.jobTitle = "Job title is required.";
    }

    if (!data.supervisorCount) {
      nextErrors.supervisorCount = "Number of supervisors is required.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/training-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(
          result.error ??
            "Unable to send your request right now. Please try again.",
        );
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-sm border border-gold-500/30 bg-gold-500/5 px-8 py-12 text-center sm:px-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h2 className="font-display text-2xl font-bold text-white/90">
          Request Received
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          Thank you for your interest in {programTitle}. We typically respond
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm border border-white/10 bg-navy-800/50 p-6 sm:p-8 lg:p-10"
    >
      <h2 className="font-display text-2xl font-bold sm:text-3xl">
        Interested in This Program?
      </h2>
      <p className="mt-3 text-base leading-relaxed text-white/60">
        Tell us about your team and we&apos;ll follow up with program details
        and next steps.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor={`training-name-${programSlug}`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Full Name <span className="text-gold-400">*</span>
          </label>
          <input
            id={`training-name-${programSlug}`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            disabled={isSubmitting}
            aria-invalid={!!errors.name}
            aria-describedby={
              errors.name ? `training-name-error-${programSlug}` : undefined
            }
            className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
          />
          {errors.name && (
            <p
              id={`training-name-error-${programSlug}`}
              className="mt-2 text-sm text-red-400"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`training-email-${programSlug}`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Work Email <span className="text-gold-400">*</span>
          </label>
          <input
            id={`training-email-${programSlug}`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby={
              errors.email ? `training-email-error-${programSlug}` : undefined
            }
            className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
          />
          {errors.email && (
            <p
              id={`training-email-error-${programSlug}`}
              className="mt-2 text-sm text-red-400"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`training-company-${programSlug}`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Company <span className="text-gold-400">*</span>
          </label>
          <input
            id={`training-company-${programSlug}`}
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your organization"
            disabled={isSubmitting}
            aria-invalid={!!errors.company}
            aria-describedby={
              errors.company
                ? `training-company-error-${programSlug}`
                : undefined
            }
            className={`${inputClass} ${errors.company ? errorInputClass : ""}`}
          />
          {errors.company && (
            <p
              id={`training-company-error-${programSlug}`}
              className="mt-2 text-sm text-red-400"
            >
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`training-job-title-${programSlug}`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Job Title <span className="text-gold-400">*</span>
          </label>
          <input
            id={`training-job-title-${programSlug}`}
            name="jobTitle"
            type="text"
            autoComplete="organization-title"
            placeholder="Your role"
            disabled={isSubmitting}
            aria-invalid={!!errors.jobTitle}
            aria-describedby={
              errors.jobTitle
                ? `training-job-title-error-${programSlug}`
                : undefined
            }
            className={`${inputClass} ${errors.jobTitle ? errorInputClass : ""}`}
          />
          {errors.jobTitle && (
            <p
              id={`training-job-title-error-${programSlug}`}
              className="mt-2 text-sm text-red-400"
            >
              {errors.jobTitle}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`training-supervisor-count-${programSlug}`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Number of Supervisors <span className="text-gold-400">*</span>
          </label>
          <input
            id={`training-supervisor-count-${programSlug}`}
            name="supervisorCount"
            type="text"
            inputMode="numeric"
            placeholder="e.g. 12"
            disabled={isSubmitting}
            aria-invalid={!!errors.supervisorCount}
            aria-describedby={
              errors.supervisorCount
                ? `training-supervisor-count-error-${programSlug}`
                : undefined
            }
            className={`${inputClass} ${errors.supervisorCount ? errorInputClass : ""}`}
          />
          {errors.supervisorCount && (
            <p
              id={`training-supervisor-count-error-${programSlug}`}
              className="mt-2 text-sm text-red-400"
            >
              {errors.supervisorCount}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor={`training-message-${programSlug}`}
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Message
          </label>
          <textarea
            id={`training-message-${programSlug}`}
            name="message"
            rows={5}
            placeholder="Tell us about your team, timeline, or training goals..."
            disabled={isSubmitting}
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      {submitError && (
        <p className="mt-6 text-sm text-red-400" role="alert">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-sm bg-gold-500 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {isSubmitting ? "Sending..." : "Request Information"}
      </button>
    </form>
  );
}
