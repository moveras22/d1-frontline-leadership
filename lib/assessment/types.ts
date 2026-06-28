export const TRAIT_IDS = [
  "coachability",
  "accountability",
  "discipline",
  "pressure-response",
  "team-impact",
  "competitive-drive",
] as const;

export type TraitId = (typeof TRAIT_IDS)[number];

export type TraitDefinition = {
  id: TraitId;
  name: string;
  description: string;
};

export const TRAITS: TraitDefinition[] = [
  {
    id: "coachability",
    name: "Coachability",
    description: "Openness to feedback, learning, and continuous improvement.",
  },
  {
    id: "accountability",
    name: "Accountability",
    description: "Ownership of actions, decisions, and outcomes.",
  },
  {
    id: "discipline",
    name: "Discipline",
    description: "Consistent execution regardless of circumstances.",
  },
  {
    id: "pressure-response",
    name: "Pressure Response",
    description: "Composure and decision quality under stress.",
  },
  {
    id: "team-impact",
    name: "Team Impact",
    description: "Ability to elevate the performance of others.",
  },
  {
    id: "competitive-drive",
    name: "Competitive Drive",
    description: "Internal drive to improve and raise standards.",
  },
];

export type AssessmentQuestion = {
  id: string;
  traitId: TraitId;
  text: string;
};

export type AssessmentIntro = {
  candidateName: string;
  role: string;
  evaluatorName: string;
  evaluatorEmail: string;
};

export type AssessmentAnswers = Record<string, number>;

export type TraitScore = {
  traitId: TraitId;
  name: string;
  score: number;
};

export type ScoreCategory = {
  label: string;
  description: string;
};

export type AssessmentResult = {
  intro: AssessmentIntro;
  traitScores: TraitScore[];
  overallScore: number;
  category: ScoreCategory;
  strengths: string[];
  developmentAreas: string[];
  recommendations: string[];
  nextSteps: string[];
};

export const RATING_LABELS: Record<number, string> = {
  1: "Strongly Disagree",
  2: "Disagree",
  3: "Neutral",
  4: "Agree",
  5: "Strongly Agree",
};
