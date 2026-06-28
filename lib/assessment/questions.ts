import type { AssessmentQuestion } from "./types";

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // Coachability
  {
    id: "coachability-1",
    traitId: "coachability",
    text: "This person accepts feedback without becoming defensive.",
  },
  {
    id: "coachability-2",
    traitId: "coachability",
    text: "When coached, this person changes behavior on the next shift.",
  },
  {
    id: "coachability-3",
    traitId: "coachability",
    text: "This person actively seeks input from supervisors and peers to improve.",
  },
  {
    id: "coachability-4",
    traitId: "coachability",
    text: "This person admits gaps in knowledge and works to close them.",
  },
  {
    id: "coachability-5",
    traitId: "coachability",
    text: "This person treats correction as useful information, not a personal attack.",
  },
  // Accountability
  {
    id: "accountability-1",
    traitId: "accountability",
    text: "This person takes ownership of mistakes without blaming others.",
  },
  {
    id: "accountability-2",
    traitId: "accountability",
    text: "When problems arise, this person focuses on solutions rather than excuses.",
  },
  {
    id: "accountability-3",
    traitId: "accountability",
    text: "This person follows through on commitments without repeated reminders.",
  },
  {
    id: "accountability-4",
    traitId: "accountability",
    text: "This person accepts responsibility for team results, not just individual tasks.",
  },
  {
    id: "accountability-5",
    traitId: "accountability",
    text: "This person addresses issues directly instead of waiting for them to escalate.",
  },
  // Discipline
  {
    id: "discipline-1",
    traitId: "discipline",
    text: "This person consistently follows processes and standards every shift.",
  },
  {
    id: "discipline-2",
    traitId: "discipline",
    text: "This person maintains routines that support performance even when unmotivated.",
  },
  {
    id: "discipline-3",
    traitId: "discipline",
    text: "This person completes action items and close-out tasks on time.",
  },
  {
    id: "discipline-4",
    traitId: "discipline",
    text: "This person prepares adequately before audits, launches, or critical events.",
  },
  {
    id: "discipline-5",
    traitId: "discipline",
    text: "This person holds themselves and the team to the same standards in all conditions.",
  },
  // Pressure Response
  {
    id: "pressure-response-1",
    traitId: "pressure-response",
    text: "This person stays calm and focused when production issues or breakdowns occur.",
  },
  {
    id: "pressure-response-2",
    traitId: "pressure-response",
    text: "During disruptions, this person communicates priorities and next steps clearly.",
  },
  {
    id: "pressure-response-3",
    traitId: "pressure-response",
    text: "This person makes timely decisions even with incomplete information.",
  },
  {
    id: "pressure-response-4",
    traitId: "pressure-response",
    text: "This person maintains safety and quality standards under schedule pressure.",
  },
  {
    id: "pressure-response-5",
    traitId: "pressure-response",
    text: "This person helps the team recover after setbacks without blame or panic.",
  },
  // Team Impact
  {
    id: "team-impact-1",
    traitId: "team-impact",
    text: "This person invests time in developing and coaching team members.",
  },
  {
    id: "team-impact-2",
    traitId: "team-impact",
    text: "This person shares credit when the team succeeds.",
  },
  {
    id: "team-impact-3",
    traitId: "team-impact",
    text: "Team performance metrics have improved because of this person's leadership.",
  },
  {
    id: "team-impact-4",
    traitId: "team-impact",
    text: "This person builds trust and mutual accountability across the crew.",
  },
  {
    id: "team-impact-5",
    traitId: "team-impact",
    text: "This person creates a positive shift culture that persists beyond their presence.",
  },
  // Competitive Drive
  {
    id: "competitive-drive-1",
    traitId: "competitive-drive",
    text: "This person sets goals beyond minimum expectations for themselves and the team.",
  },
  {
    id: "competitive-drive-2",
    traitId: "competitive-drive",
    text: "This person tracks metrics and actively pursues improvement trends.",
  },
  {
    id: "competitive-drive-3",
    traitId: "competitive-drive",
    text: "This person identifies performance gaps quickly and mobilizes the team to close them.",
  },
  {
    id: "competitive-drive-4",
    traitId: "competitive-drive",
    text: "This person shows genuine pride in team and plant results.",
  },
  {
    id: "competitive-drive-5",
    traitId: "competitive-drive",
    text: "This person pushes for higher standards without creating toxic internal competition.",
  },
];

export function getQuestionsForTrait(traitId: string) {
  return ASSESSMENT_QUESTIONS.filter((q) => q.traitId === traitId);
}
