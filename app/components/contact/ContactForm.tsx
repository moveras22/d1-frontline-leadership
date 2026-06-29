"use client";

import { FormEvent, useState } from "react";
import { CONTACT_SUBJECTS } from "@/lib/contact";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const inputClass =
  "w-full rounded-sm border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold-500/50";
const errorInputClass = "border-red-400/50 focus:border-red-400/70";

export default function ContactForm() {
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
      subject: (formData.get("subject") as string).trim(),
      message: (formData.get("message") as string).trim(),
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

    if (!data.subject) {
      nextErrors.subject = "Please select a subject.";
    }

    if (!data.message) {
      nextErrors.message = "Message is required.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setSubmitError(
          result.error ??
            "Unable to send your message right now. Please try again.",
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
          Message Sent
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/60">
          Thank you for reaching out. We typically respond within one business
          day.
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
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label
            htmlFor="contact-name"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Full Name <span className="text-gold-400">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            disabled={isSubmitting}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`${inputClass} ${errors.name ? errorInputClass : ""}`}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-2 text-sm text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-email"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Work Email <span className="text-gold-400">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            disabled={isSubmitting}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`${inputClass} ${errors.email ? errorInputClass : ""}`}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-2 text-sm text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-company"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Company
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your organization"
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="contact-job-title"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Job Title
          </label>
          <input
            id="contact-job-title"
            name="jobTitle"
            type="text"
            autoComplete="organization-title"
            placeholder="Your role"
            disabled={isSubmitting}
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-subject"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Subject <span className="text-gold-400">*</span>
          </label>
          <select
            id="contact-subject"
            name="subject"
            defaultValue=""
            disabled={isSubmitting}
            aria-invalid={!!errors.subject}
            aria-describedby={
              errors.subject ? "contact-subject-error" : undefined
            }
            className={`${inputClass} ${errors.subject ? errorInputClass : ""}`}
          >
            <option value="">Select a subject</option>
            {CONTACT_SUBJECTS.map((subject) => (
              <option key={subject.value} value={subject.value}>
                {subject.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p id="contact-subject-error" className="mt-2 text-sm text-red-400">
              {errors.subject}
            </p>
          )}
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="contact-message"
            className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50"
          >
            Message <span className="text-gold-400">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Tell us how we can help your team..."
            disabled={isSubmitting}
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message ? "contact-message-error" : undefined
            }
            className={`${inputClass} resize-y ${errors.message ? errorInputClass : ""}`}
          />
          {errors.message && (
            <p id="contact-message-error" className="mt-2 text-sm text-red-400">
              {errors.message}
            </p>
          )}
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
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
