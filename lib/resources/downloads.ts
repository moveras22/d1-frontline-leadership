export type FreeDownload = {
  slug: string;
  href: string;
  pdfUrl: string;
  pdfDownloadName: string;
  downloadButtonLabel: string;
  title: string;
  subtitle: string;
  excerpt: string;
  description: string;
  category: string;
  featuredImage: string;
  featuredImageAlt: string;
  includedItems: string[];
  seo: {
    title: string;
    description: string;
  };
};

export const ONE_ON_ONE_MEETING_TEMPLATE: FreeDownload = {
  slug: "one-on-one-meeting-template",
  href: "/one-on-one-meeting-template",
  pdfUrl: "/downloads/one-on-one-meeting-template.pdf",
  pdfDownloadName: "one-on-one-meeting-template.pdf",
  downloadButtonLabel: "Download Template →",
  title: "Free One-on-One Meeting Template",
  subtitle: "A simple template for better supervisor-to-employee conversations.",
  excerpt:
    "Structure weekly or monthly 1:1s with a practical template built for frontline supervisors and manufacturing teams.",
  description:
    "Frontline leaders juggle production targets, shift coverage, and people development — often with no structured time to connect one-on-one. This free template gives supervisors a clear framework for weekly or monthly 1:1 conversations so nothing important gets missed.",
  category: "Free Download",
  featuredImage: "/images/downloads/one-on-one-meeting-template.jpg",
  featuredImageAlt:
    "Supervisor having a one-on-one conversation with an employee on the production floor",
  includedItems: [
    "A structured agenda for weekly and monthly one-on-one meetings",
    "Conversation prompts for performance, development, and obstacles",
    "Space to track commitments, follow-ups, and action items",
    "Designed specifically for frontline supervisors in manufacturing and operations",
  ],
  seo: {
    title: "Free One-on-One Meeting Template | D1 Frontline Leadership",
    description:
      "Download a free one-on-one meeting template to help frontline supervisors structure weekly or monthly employee conversations with clarity and consistency.",
  },
};

export const SUPERVISOR_INTERVIEW_SCORECARD: FreeDownload = {
  slug: "supervisor-interview-scorecard",
  href: "/supervisor-interview-scorecard",
  pdfUrl: "/downloads/d1-supervisor-interview-scorecard.pdf",
  pdfDownloadName: "d1-supervisor-interview-scorecard.pdf",
  downloadButtonLabel: "Download Scorecard →",
  title: "Free Supervisor Interview Scorecard",
  subtitle:
    "Evaluate leadership potential consistently during supervisor interviews.",
  excerpt:
    "Evaluate leadership potential consistently during interviews with a structured scorecard based on the D1 Leadership Framework.",
  description:
    "Hiring supervisors without a consistent evaluation method leads to gut-feel promotions and uneven leadership quality on the floor. This free scorecard gives plant managers and HR partners a structured way to assess candidates against the six D1 Leadership pillars — so every interview produces comparable, evidence-based ratings.",
  category: "Free Download",
  featuredImage: "/images/downloads/supervisor-interview-scorecard.jpg",
  featuredImageAlt:
    "Hiring manager interviewing a candidate across a table reviewing a resume",
  includedItems: [
    "Rating grid for all six D1 Leadership pillars (1–5 scale)",
    "Key interview questions aligned to each pillar",
    "Scoring summary with total, average, and development priorities",
    "Recommendation framework: Ready, Develop with Support, or Not Ready",
    "Designed for supervisor and team-lead interviews in manufacturing and operations",
  ],
  seo: {
    title: "Free Supervisor Interview Scorecard | D1 Frontline Leadership",
    description:
      "Download a free supervisor interview scorecard to evaluate leadership potential consistently using the D1 Leadership Framework.",
  },
};

export const FREE_DOWNLOADS: FreeDownload[] = [
  ONE_ON_ONE_MEETING_TEMPLATE,
  SUPERVISOR_INTERVIEW_SCORECARD,
];
