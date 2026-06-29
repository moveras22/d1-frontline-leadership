export const CONTACT_SUBJECTS = [
  { value: "leadership-training", label: "Leadership Training" },
  { value: "supervisor-development", label: "Supervisor Development" },
  { value: "hiring-promotion", label: "Hiring & Promotion" },
  { value: "speaking-opportunity", label: "Speaking Opportunity" },
  { value: "general-question", label: "General Question" },
] as const;

export type ContactSubjectValue = (typeof CONTACT_SUBJECTS)[number]["value"];

export type ContactFormPayload = {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  subject: ContactSubjectValue;
  message: string;
};

export const CONTACT_EMAIL = "info@d1frontlineleadership.com";

export const CONTACT_FAQS = [
  {
    question: "Do you offer custom leadership training?",
    answer:
      "Yes. D1 offers custom frontline leadership programs built around your operation, shift structure, and supervisory challenges — including manufacturing, logistics, and warehouse environments. Use the contact form and select Leadership Training or Supervisor Development to start the conversation.",
  },
  {
    question: "Can I schedule a consultation?",
    answer:
      "Absolutely. Submit the contact form with your name, company, and a brief description of what you are looking to solve. We typically respond within one business day to schedule a consultation at a time that works for your team.",
  },
  {
    question: "Do you work with manufacturing companies?",
    answer:
      "D1 Frontline Leadership was built specifically for manufacturing and operations environments. Our framework, training programs, and assessment tools are designed for production floors, shift work, and the real pressures frontline supervisors face every day.",
  },
  {
    question: "Is the D1 Framework available for organizations?",
    answer:
      "Yes. Organizations can download the free D1 Framework, use the leadership assessment, and implement D1 evaluation tools for hiring, promotion, and supervisor development. Contact us to discuss rolling out the framework across your leadership team.",
  },
];

export function getContactSubjectLabel(value: string): string | undefined {
  return CONTACT_SUBJECTS.find((subject) => subject.value === value)?.label;
}

export function isValidContactSubject(
  value: string,
): value is ContactSubjectValue {
  return CONTACT_SUBJECTS.some((subject) => subject.value === value);
}
