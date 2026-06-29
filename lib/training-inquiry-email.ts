import { CONTACT_EMAIL } from "./contact";
import type { TrainingInquiryPayload } from "./training-inquiry";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(data: TrainingInquiryPayload): string {
  return `
    <h2>New Training Program Inquiry</h2>
    <p><strong>Program:</strong> ${escapeHtml(data.programTitle)}</p>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Work Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
    <p><strong>Job Title:</strong> ${escapeHtml(data.jobTitle)}</p>
    <p><strong>Number of Supervisors:</strong> ${escapeHtml(data.supervisorCount)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message || "Not provided").replaceAll("\n", "<br />")}</p>
  `.trim();
}

function buildEmailText(data: TrainingInquiryPayload): string {
  return [
    "New Training Program Inquiry",
    "",
    `Program: ${data.programTitle}`,
    `Name: ${data.name}`,
    `Work Email: ${data.email}`,
    `Company: ${data.company}`,
    `Job Title: ${data.jobTitle}`,
    `Number of Supervisors: ${data.supervisorCount}`,
    "",
    "Message:",
    data.message || "Not provided",
  ].join("\n");
}

export async function sendTrainingInquiryEmail(
  data: TrainingInquiryPayload,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Email service is not configured.");
  }

  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "D1 Contact Form <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `[D1 Training] ${data.programTitle} — ${data.name}`,
      html: buildEmailHtml(data),
      text: buildEmailText(data),
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send message.");
  }
}
