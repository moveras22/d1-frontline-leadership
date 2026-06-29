export type ChatLink = {
  label: string;
  href: string;
};

export type BotResponse = {
  text: string;
  links?: ChatLink[];
};

export const WELCOME_MESSAGE =
  "Hi, I'm the D1 Leadership Assistant. I can help with supervisor training, hiring, the D1 Framework, free resources, or contacting D1.";

export const FALLBACK_MESSAGE =
  "That's a great question. The best next step is to contact D1 directly at info@d1frontlineleadership.com or visit the Contact page.";

export const LEAD_CAPTURE_PROMPT =
  "Want the free D1 leadership resources? Enter your email and I'll send you the download link.";

export const QUICK_REPLIES = [
  "What is the D1 Framework?",
  "I need supervisor training",
  "Help me hire better supervisors",
  "Show free resources",
  "Contact D1",
] as const;

const FRAMEWORK_KEYWORDS = [
  "framework",
  "d1 framework",
  "pillar",
  "coachability",
  "discipline",
  "pressure response",
  "team impact",
  "competitive drive",
  "what is d1",
];

const TRAINING_KEYWORDS = [
  "training",
  "supervisor training",
  "supervisor development",
  "bootcamp",
  "manufacturing leadership",
  "team performance",
  "develop supervisors",
  "frontline leadership training",
];

const HIRING_KEYWORDS = [
  "hire",
  "hiring",
  "promotion",
  "promote",
  "interview",
  "leadership potential",
  "supervisor candidates",
  "identify leaders",
];

const RESOURCES_KEYWORDS = [
  "free",
  "resource",
  "download",
  "template",
  "scorecard",
  "assessment",
  "pdf",
  "tools",
];

const CONTACT_KEYWORDS = [
  "contact",
  "email",
  "reach",
  "talk to",
  "speak with",
  "get in touch",
  "consultation",
  "schedule",
];

function includesKeyword(input: string, keywords: string[]): boolean {
  return keywords.some((keyword) => input.includes(keyword));
}

export function getBotResponse(input: string): BotResponse {
  const normalized = input.trim().toLowerCase();

  if (!normalized) {
    return {
      text: "Please type a question or choose one of the quick reply options below.",
    };
  }

  if (normalized === "what is the d1 framework?") {
    return frameworkResponse();
  }

  if (normalized === "i need supervisor training") {
    return trainingResponse();
  }

  if (normalized === "help me hire better supervisors") {
    return hiringResponse();
  }

  if (normalized === "show free resources") {
    return resourcesResponse();
  }

  if (normalized === "contact d1") {
    return contactResponse();
  }

  if (includesKeyword(normalized, CONTACT_KEYWORDS)) {
    return contactResponse();
  }

  if (includesKeyword(normalized, TRAINING_KEYWORDS)) {
    return trainingResponse();
  }

  if (includesKeyword(normalized, HIRING_KEYWORDS)) {
    return hiringResponse();
  }

  if (includesKeyword(normalized, RESOURCES_KEYWORDS)) {
    return resourcesResponse();
  }

  if (includesKeyword(normalized, FRAMEWORK_KEYWORDS)) {
    return frameworkResponse();
  }

  return {
    text: FALLBACK_MESSAGE,
    links: [
      { label: "Contact Page", href: "/contact" },
      { label: "Free Resources", href: "/resources" },
    ],
  };
}

function frameworkResponse(): BotResponse {
  return {
    text: "The D1 Framework evaluates six leadership traits that predict frontline supervisor success: Coachability, Discipline, Accountability, Pressure Response, Team Impact, and Competitive Drive. These traits help organizations identify, hire, and develop stronger leaders on the production floor.",
    links: [
      { label: "Explore the D1 Framework", href: "/free-framework" },
      { label: "View All Pillars", href: "/pillars/coachability" },
    ],
  };
}

function trainingResponse(): BotResponse {
  return {
    text: "D1 offers frontline leadership training for supervisors and operations teams — including Supervisor Bootcamp, manufacturing leadership, accountability training, team performance support, and new supervisor development.",
    links: [
      { label: "View Training Programs", href: "/training" },
      { label: "Supervisor Bootcamp", href: "/training/supervisor-bootcamp" },
    ],
  };
}

function hiringResponse(): BotResponse {
  return {
    text: "D1 helps organizations identify leadership potential before promotion using structured interview questions, leadership assessments, and the D1 Framework — so you hire and promote supervisors who will actually succeed.",
    links: [
      { label: "Leadership Resources", href: "/resources" },
      { label: "Free Assessment", href: "/assessment" },
      { label: "For Organizations", href: "/for-organizations" },
    ],
  };
}

function resourcesResponse(): BotResponse {
  return {
    text: "Here are the free D1 leadership resources available right now:",
    links: [
      { label: "Download the D1 Framework", href: "/free-framework" },
      { label: "Browse Articles & Tools", href: "/resources" },
      { label: "Take the Leadership Assessment", href: "/assessment" },
      {
        label: "One-on-One Meeting Template",
        href: "/one-on-one-meeting-template",
      },
    ],
  };
}

function contactResponse(): BotResponse {
  return {
    text: "You can reach D1 Frontline Leadership at info@d1frontlineleadership.com. We typically respond within one business day.",
    links: [{ label: "Visit the Contact Page", href: "/contact" }],
  };
}
