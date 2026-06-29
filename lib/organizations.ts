export type OrganizationProgram = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  outcomes: string[];
};

export const ORGANIZATION_PROGRAMS: OrganizationProgram[] = [
  {
    slug: "hire-better-supervisors",
    title: "Hire Better Supervisors",
    shortDescription:
      "Structured hiring processes that identify frontline leaders with true supervisory potential.",
    description:
      "Most supervisor hiring failures happen because interviews surface technical skill but miss leadership traits. D1 helps organizations build structured interview processes, behavioral assessments, and scorecards that reveal coachability, accountability, and team impact before you extend an offer.",
    outcomes: [
      "Replace gut-feel hiring with D1-aligned behavioral evaluation",
      "Use interview questions that reveal frontline leadership traits",
      "Reduce costly mis-hires and early supervisor turnover",
      "Build a repeatable hiring standard across shifts and departments",
    ],
  },
  {
    slug: "promote-future-leaders",
    title: "Promote Future Leaders",
    shortDescription:
      "Identify leadership potential before promotion — not after the damage is done.",
    description:
      "Promoting your best technician without assessing leadership ability is one of the most expensive mistakes in manufacturing. This program helps operations and HR leaders evaluate leadership potential using observable behaviors, structured assessments, and the D1 Framework before making promotion decisions.",
    outcomes: [
      "Stop promoting based on tenure or production numbers alone",
      "Build a leadership pipeline 12–18 months before vacancies appear",
      "Document leadership traits with structured evaluation rubrics",
      "Retain top individual contributors through technical career paths",
    ],
  },
  {
    slug: "develop-frontline-managers",
    title: "Develop Frontline Managers",
    shortDescription:
      "Ongoing coaching that turns capable supervisors into consistent, high-impact leaders.",
    description:
      "Strong supervisors are built through development — not discovered by accident after a promotion. D1 organizational programs provide structured coaching, mentorship frameworks, and self-assessment tools that help frontline managers grow across every pillar of the D1 Framework.",
    outcomes: [
      "Implement 90-day onboarding for every new supervisor",
      "Use D1 pillars as a shared coaching language across the plant",
      "Track supervisor development alongside production metrics",
      "Build internal mentors who develop the next generation of leaders",
    ],
  },
  {
    slug: "custom-training",
    title: "Custom Training",
    shortDescription:
      "Tailored frontline leadership programs built around your culture and operational challenges.",
    description:
      "Every operation has different supervisory challenges — shift structures, union environments, quality systems, safety cultures, and growth trajectories. D1 custom training programs are built around your specific needs, delivered for manufacturing, logistics, and operations teams who need leadership development that fits the real floor.",
    outcomes: [
      "Design programs aligned to your supervisory structure and goals",
      "Integrate D1 assessment tools into existing HR and ops processes",
      "Train plant leadership teams to coach using a shared framework",
      "Measure impact through retention, safety, quality, and productivity",
    ],
  },
];

export function getOrganizationProgram(
  slug: string,
): OrganizationProgram | undefined {
  return ORGANIZATION_PROGRAMS.find((program) => program.slug === slug);
}

export function getOrganizationProgramSlugs(): string[] {
  return ORGANIZATION_PROGRAMS.map((program) => program.slug);
}
