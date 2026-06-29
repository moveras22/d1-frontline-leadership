export type TrainingProgram = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  outcomes: string[];
};

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    slug: "supervisor-bootcamp",
    title: "Supervisor Bootcamp",
    shortDescription:
      "Intensive preparation for first-time supervisors making the jump from operator to leader.",
    description:
      "The Supervisor Bootcamp is built for the first 90 days of leadership — when new supervisors are most likely to fall back into doing the work themselves, avoid hard conversations, and lose the trust of their crew. This program covers shift leadership fundamentals, accountability without micromanagement, and the daily habits that separate struggling supervisors from effective ones.",
    outcomes: [
      "Transition from individual contributor to team leader with clear role expectations",
      "Run structured shift startup meetings and effective shift handoffs",
      "Address performance issues early with confidence and consistency",
      "Delegate effectively without losing quality or safety standards",
    ],
  },
  {
    slug: "manufacturing-leadership",
    title: "Manufacturing Leadership Training",
    shortDescription:
      "Leadership development designed for production floors, shift work, and operational pressure.",
    description:
      "Manufacturing leadership is not corporate leadership adapted for a plant tour. It requires composure during breakdowns, consistency across shifts, and the ability to drive safety, quality, and throughput simultaneously. This program trains supervisors and managers to lead in environments where every decision affects production, people, and customer commitments.",
    outcomes: [
      "Lead effectively during downtime, changeovers, and production pressure",
      "Build cross-shift communication that prevents recurring problems",
      "Balance speed and standards without tolerating shortcuts",
      "Coach operators to solve problems instead of fixing everything yourself",
    ],
  },
  {
    slug: "accountability",
    title: "Accountability Training",
    shortDescription:
      "Build clear expectations and consistent follow-through without hovering over your team.",
    description:
      "Accountability failures on the frontline rarely stem from bad employees — they stem from unclear standards, inconsistent enforcement, and supervisors who confuse accountability with surveillance. This training teaches frontline leaders how to set measurable expectations, follow through fairly, and build teams that hold themselves to high standards.",
    outcomes: [
      "Define what \"good\" looks like for every key responsibility on the floor",
      "Address missed standards promptly and consistently",
      "Build peer-level ownership so the team self-corrects",
      "Separate accountability from micromanagement in daily supervision",
    ],
  },
  {
    slug: "team-performance",
    title: "Team Performance Training",
    shortDescription:
      "Drive productivity, morale, and results through stronger frontline leadership.",
    description:
      "Team performance is the output of leadership culture — not just equipment uptime and staffing levels. This program equips supervisors and team leads with practical tools to improve productivity, resolve conflict, recognize contributions, and create shifts where people show up engaged and leave proud of the work.",
    outcomes: [
      "Identify and remove obstacles that limit crew output",
      "Use performance data to coach instead of criticize",
      "Improve morale through fair standards and visible recognition",
      "Build continuous improvement habits into daily shift routines",
    ],
  },
  {
    slug: "new-supervisor-development",
    title: "New Supervisor Development",
    shortDescription:
      "Structured development for recently promoted leaders who need coaching, not just a new title.",
    description:
      "Promotion day is only the beginning. New supervisors need structured development, mentorship, and feedback loops that help them build confidence in people leadership — not just technical knowledge they already have. This program supports recently promoted leaders through guided skill-building, self-assessment, and real-world application on the floor.",
    outcomes: [
      "Build a 90-day development plan aligned to D1 leadership traits",
      "Practice coaching conversations before problems escalate",
      "Receive structured feedback from mentors and plant leadership",
      "Track growth across accountability, communication, and team impact",
    ],
  },
  {
    slug: "leadership-hiring-promotion",
    title: "Leadership Hiring & Promotion Support",
    shortDescription:
      "Identify leadership potential before promotion and hire supervisors who will actually succeed.",
    description:
      "The most expensive leadership mistake in manufacturing is promoting the best technician without assessing leadership traits. This program helps HR leaders, operations managers, and business owners build structured hiring and promotion processes — using behavioral indicators, interview tools, and the D1 Framework to select frontline leaders who will multiply team performance.",
    outcomes: [
      "Evaluate candidates against defined leadership traits, not just technical skill",
      "Use structured interview questions that reveal coachability and accountability",
      "Build a leadership pipeline before supervisor vacancies appear",
      "Reduce costly turnover and bad promotions on the production floor",
    ],
  },
];

export const TRAINING_AUDIENCES = [
  "Frontline supervisors",
  "Team leads",
  "Production managers",
  "Operations managers",
  "HR leaders",
  "Business owners",
];

export const TRAINING_LEARNING_OUTCOMES = [
  "How to set expectations",
  "How to hold people accountable",
  "How to coach without micromanaging",
  "How to communicate across shifts",
  "How to identify future leaders",
  "How to improve team performance",
];

export function getTrainingProgram(slug: string): TrainingProgram | undefined {
  return TRAINING_PROGRAMS.find((program) => program.slug === slug);
}

export function getTrainingProgramSlugs(): string[] {
  return TRAINING_PROGRAMS.map((program) => program.slug);
}

export const TRAINING_TRUST_CARDS = [
  {
    title: "Practical Manufacturing Experience",
    description:
      "Programs built from real plant-floor leadership challenges, not generic management theory.",
  },
  {
    title: "Leadership Hiring Framework",
    description:
      "The D1 Framework helps you identify, develop, and promote supervisors who will succeed.",
  },
  {
    title: "Built for Frontline Operations",
    description:
      "Training designed for shift work, production pressure, and the supervisors who run it.",
  },
] as const;

/** Legacy slug used in navigation before program pages were consolidated. */
export const TRAINING_OVERVIEW_SLUG = "frontline-leadership";

export function resolveTrainingSlug(slug: string): TrainingProgram | "overview" | undefined {
  if (slug === TRAINING_OVERVIEW_SLUG) return "overview";
  return getTrainingProgram(slug);
}
