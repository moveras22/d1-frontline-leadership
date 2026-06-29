export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem =
  | {
      label: string;
      href: string;
      type: "link";
    }
  | {
      label: string;
      type: "dropdown";
      items: NavLink[];
    };

export const MAIN_NAV: NavItem[] = [
  {
    label: "Training",
    type: "dropdown",
    items: [
      {
        label: "Frontline Leadership Training",
        href: "/training",
        description: "Complete overview of D1 frontline leadership programs",
      },
      {
        label: "Supervisor Bootcamp",
        href: "/training/supervisor-bootcamp",
        description: "Intensive preparation for first-time leaders",
      },
      {
        label: "Manufacturing Leadership",
        href: "/training/manufacturing-leadership",
        description: "Leadership built for production environments",
      },
      {
        label: "Accountability Training",
        href: "/training/accountability",
        description: "Build standards without micromanaging",
      },
      {
        label: "Team Performance",
        href: "/training/team-performance",
        description: "Drive results through your frontline team",
      },
    ],
  },
  {
    label: "D1 Framework",
    type: "dropdown",
    items: [
      {
        label: "Framework Overview",
        href: "/free-framework",
        description: "Download the complete D1 scorecard",
      },
      {
        label: "Coachability",
        href: "/pillars/coachability",
        description: "Openness to feedback and growth",
      },
      {
        label: "Discipline",
        href: "/pillars/discipline",
        description: "Consistent execution under pressure",
      },
      {
        label: "Accountability",
        href: "/pillars/accountability",
        description: "Ownership of team outcomes",
      },
      {
        label: "Pressure Response",
        href: "/pillars/pressure-response",
        description: "Composure when operations get hard",
      },
      {
        label: "Team Impact",
        href: "/pillars/team-impact",
        description: "Influence that elevates the crew",
      },
      {
        label: "Competitive Drive",
        href: "/pillars/competitive-drive",
        description: "Motivation to win as a team",
      },
    ],
  },
  {
    label: "Resources",
    type: "dropdown",
    items: [
      {
        label: "Articles",
        href: "/resources",
        description: "Leadership insights for the plant floor",
      },
      {
        label: "Interview Guides",
        href: "/resources?category=interview-guides",
        description: "Questions that reveal true leadership ability",
      },
      {
        label: "Free Downloads",
        href: "/resources#free-downloads",
        description: "Templates, scorecards, and tools",
      },
      {
        label: "Leadership Assessment",
        href: "/assessment",
        description: "Evaluate frontline leadership traits",
      },
      {
        label: "Templates",
        href: "/resources/templates",
        description: "Ready-to-use supervisor tools",
      },
    ],
  },
  {
    label: "For Organizations",
    type: "dropdown",
    items: [
      {
        label: "Organizational Overview",
        href: "/for-organizations",
        description: "Frontline leadership solutions for your operation",
      },
      {
        label: "Hire Better Supervisors",
        href: "/for-organizations/hire-better-supervisors",
        description: "Structured hiring for frontline leaders",
      },
      {
        label: "Promote Future Leaders",
        href: "/for-organizations/promote-future-leaders",
        description: "Identify leadership potential before promotion",
      },
      {
        label: "Develop Frontline Managers",
        href: "/for-organizations/develop-frontline-managers",
        description: "Coaching programs for supervisors",
      },
      {
        label: "Custom Training",
        href: "/for-organizations/custom-training",
        description: "Tailored programs for your operation",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    type: "link",
  },
];

export function isNavActive(pathname: string, href: string): boolean {
  const baseHref = href.split("#")[0].split("?")[0];
  if (baseHref === "/") return pathname === "/";
  return pathname === baseHref || pathname.startsWith(`${baseHref}/`);
}

export function isDropdownActive(
  pathname: string,
  items: NavLink[],
): boolean {
  return items.some((item) => isNavActive(pathname, item.href));
}
