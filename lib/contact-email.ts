import {
  CONTACT_EMAIL,
  getContactSubjectLabel,
  type ContactFormPayload,
} from "./contact";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(data: ContactFormPayload, subjectLabel: string): string {
  return `
    <h2>New D1 Frontline Leadership Contact Form Submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Work Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(data.company || "Not provided")}</p>
    <p><strong>Job Title:</strong> ${escapeHtml(data.jobTitle || "Not provided")}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(data.message).replaceAll("\n", "<br />")}</p>
  `.trim();
}

function buildEmailText(data: ContactFormPayload, subjectLabel: string): string {
  return [
    "New D1 Frontline Leadership Contact Form Submission",
    "",
    `Name: ${data.name}`,
    `Work Email: ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Job Title: ${data.jobTitle || "Not provided"}`,
    `Subject: ${subjectLabel}`,
    "",
    "Message:",
    data.message,
  ].join("\n");
}

export async function sendContactEmail(data: ContactFormPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Email service is not configured.");
  }

  const subjectLabel = getContactSubjectLabel(data.subject);
  if (!subjectLabel) {
    throw new Error("Invalid subject.");
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
      subject: `[D1 Contact] ${subjectLabel} — ${data.name}`,
      html: buildEmailHtml(data, subjectLabel),
      text: buildEmailText(data, subjectLabel),
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send message.");
  }
}
