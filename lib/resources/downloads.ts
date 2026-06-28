export type FreeDownload = {
  slug: string;
  href: string;
  pdfUrl: string;
  pdfDownloadName: string;
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
  title: "Free One-on-One Meeting Template",
  subtitle: "A simple template for better supervisor-to-employee conversations.",
  excerpt:
    "Structure weekly or monthly 1:1s with a practical template built for frontline supervisors and manufacturing teams.",
  description:
    "Frontline leaders juggle production targets, shift coverage, and people development — often with no structured time to connect one-on-one. This free template gives supervisors a clear framework for weekly or monthly 1:1 conversations so nothing important gets missed.",
  category: "Free Download",
  featuredImage: "/images/resources/15-interview-questions-leadership-ability.jpg",
  featuredImageAlt: "Supervisor leading a one-on-one conversation with a team member",
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

export const FREE_DOWNLOADS: FreeDownload[] = [ONE_ON_ONE_MEETING_TEMPLATE];
