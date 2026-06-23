"use client";

import { FormEvent, useState } from "react";
import { trackLeadConversion } from "@/lib/analytics";

type FormErrors = {
  name?: string;
  email?: string;
};

export default function EmailCapture() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: (formData.get("name") as string).trim(),
      email: (formData.get("email") as string).trim(),
      company: (formData.get("company") as string).trim(),
      role: (formData.get("role") as string).trim(),
      challenge: (formData.get("challenge") as string).trim(),
    };

    const nextErrors: FormErrors = {};

    if (!data.name) {
      nextErrors.name = "Name is required.";
    }

    if (!data.email) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(
          result.error ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setSubmitted(true);
      trackLeadConversion();
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-sm border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/50";
  const errorInputClass =
    "border-red-400/50 focus:border-red-400/70";

  return (
    <section id="early-access" className="relative py-24 lg:py-32">
      <div className="section-divider mx-auto max-w-7xl" />
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            Get Started
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Join Early Access
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Be the first to access the D1 Assessment, workshop invitations, and
            leadership resources designed for manufacturing teams.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          {submitted ? (
            <div className="rounded-sm border border-gold-500/30 bg-gold-500/5 px-8 py-12 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <p className="font-display text-xl font-semibold leading-relaxed text-white/90">
                You&apos;re on the list. We&apos;ll send your D1 Leadership
                Assessment and upcoming workshop invitations.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-sm border border-white/10 bg-navy-800/50 p-8 sm:p-10"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    disabled={isSubmitting}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your organization"
                    disabled={isSubmitting}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="role"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    defaultValue=""
                    disabled={isSubmitting}
                    className={inputClass}
                  >
                    <option value="">Select your role</option>
                    <option value="plant-manager">Plant Manager</option>
                    <option value="operations-manager">
                      Operations Manager
                    </option>
                    <option value="hr-leader">HR Leader</option>
                    <option value="director">Director / VP</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="challenge"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
                  >
                    Biggest frontline leadership challenge
                  </label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    rows={3}
                    placeholder="What's the toughest leadership challenge on your plant floor?"
                    disabled={isSubmitting}
                    className={`${inputClass} resize-none`}
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
                data-track="early_access_submit"
                disabled={isSubmitting}
                className="mt-8 w-full rounded-sm bg-gold-500 py-4 text-sm font-semibold uppercase tracking-wider text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Joining..." : "Join Early Access"}
              </button>
              <p className="mt-4 text-center text-xs text-white/35">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
