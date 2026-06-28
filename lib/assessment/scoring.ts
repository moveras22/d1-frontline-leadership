import { ASSESSMENT_QUESTIONS } from "./questions";
import {
  TRAITS,
  type AssessmentAnswers,
  type AssessmentIntro,
  type AssessmentResult,
  type ScoreCategory,
  type TraitId,
  type TraitScore,
} from "./types";

const STRENGTH_THRESHOLD = 70;
const DEVELOPMENT_THRESHOLD = 70;

const TRAIT_RECOMMENDATIONS: Record<
  TraitId,
  { low: string; mid: string; high: string }
> = {
  coachability: {
    low: "Assign structured feedback sessions and observe whether behavior changes on the next shift. Pair with a strong mentor for 30 days.",
    mid: "Increase the frequency of direct coaching and use after-action reviews to reinforce learning from mistakes.",
    high: "Leverage this strength by assigning stretch projects that require learning new skills and cross-functional collaboration.",
  },
  accountability: {
    low: "Use a simple ownership format after incidents: what happened, what you own, what changes tomorrow. Address deflection patterns immediately.",
    mid: "Track whether this person closes their own action items before chasing the team. Run brief after-action reviews after major issues.",
    high: "Give this person ownership of cross-shift initiatives where accountability drives plant-wide results.",
  },
  discipline: {
    low: "Establish non-negotiable daily rhythms: pre-shift review, gemba walk, end-of-shift handoff. Track standards visibly on SQDC boards.",
    mid: "Coach with checklists and cadence rather than motivation speeches. Address inconsistency early before standards slip team-wide.",
    high: "Have this person lead standardization efforts and mentor others on building systems that sustain disciplined execution.",
  },
  "pressure-response": {
    low: "Practice escalation paths and priority frameworks before peak season. Debrief real disruptions to identify what to repeat or change.",
    mid: "Gradually increase responsibility during high-stakes periods with close coaching on communication and decision-making under stress.",
    high: "Assign this person to lead crisis response or turnaround situations where composure under pressure is critical.",
  },
  "team-impact": {
    low: "Set a quarterly development goal: every leader grows at least one team member. Observe crew behavior when this person is absent.",
    mid: "Coach delegation and teaching skills rather than doing the work for the team. Track retention and internal promotions as impact signals.",
    high: "Expand this person's scope to develop bench strength across multiple crews or shifts.",
  },
  "competitive-drive": {
    low: "Tie energy to team KPIs—safety, quality, delivery, cost. Review trend data weekly, not just end-of-month scorecards.",
    mid: "Benchmark against prior periods and best-performing shifts. Correct toxic competitiveness early while channeling drive toward team goals.",
    high: "Involve this person in plant-wide improvement initiatives and let them champion operational excellence across departments.",
  },
};

export function calculateTraitScore(answers: number[]): number {
  if (answers.length === 0) return 0;
  const sum = answers.reduce((total, value) => total + value, 0);
  const min = answers.length;
  const max = answers.length * 5;
  return Math.round(((sum - min) / (max - min)) * 100);
}

export function getScoreCategory(overallScore: number): ScoreCategory {
  if (overallScore >= 85) {
    return {
      label: "High Leadership Potential",
      description:
        "This candidate demonstrates strong leadership traits across multiple pillars and is well-positioned for a frontline leadership role.",
    };
  }
  if (overallScore >= 70) {
    return {
      label: "Developing Leadership Potential",
      description:
        "This candidate shows meaningful leadership capability with targeted development areas to address before promotion.",
    };
  }
  if (overallScore >= 55) {
    return {
      label: "Needs Development Before Promotion",
      description:
        "This candidate has foundational traits but significant gaps that should be addressed through structured coaching before advancing.",
    };
  }
  return {
    label: "High Risk for Leadership Role",
    description:
      "This candidate shows substantial leadership gaps. Promotion at this stage carries high risk for team performance and retention.",
  };
}

function getTraitRecommendation(traitId: TraitId, score: number): string {
  const recs = TRAIT_RECOMMENDATIONS[traitId];
  if (score >= STRENGTH_THRESHOLD) return recs.high;
  if (score >= 55) return recs.mid;
  return recs.low;
}

function getNextSteps(category: ScoreCategory, overallScore: number): string[] {
  if (overallScore >= 85) {
    return [
      "Proceed with a structured promotion plan including clear 30-60-90 day expectations.",
      "Assign a mentor supervisor for the first 90 days to support the transition.",
      "Use the D1 Framework to continue tracking growth after promotion.",
    ];
  }
  if (overallScore >= 70) {
    return [
      "Create a 90-day development plan targeting the lowest-scoring traits.",
      "Conduct monthly check-ins using this assessment to track improvement.",
      "Consider a trial leadership assignment before full promotion.",
    ];
  }
  if (overallScore >= 55) {
    return [
      "Delay promotion and implement a structured coaching plan for 3–6 months.",
      "Re-assess using this tool after targeted development in weak areas.",
      "Assign stretch tasks in low-risk environments to build missing traits.",
    ];
  }
  return [
    "Do not proceed with promotion at this time.",
    "Identify whether gaps are coachable or fundamental misalignment with leadership requirements.",
    "Focus on maximizing contribution in their current role while reassessing in 6 months.",
  ];
}

export function calculateAssessmentResult(
  intro: AssessmentIntro,
  answers: AssessmentAnswers,
): AssessmentResult {
  const traitScores: TraitScore[] = TRAITS.map((trait) => {
    const traitAnswers = ASSESSMENT_QUESTIONS.filter(
      (q) => q.traitId === trait.id,
    ).map((q) => answers[q.id] ?? 0);

    return {
      traitId: trait.id,
      name: trait.name,
      score: calculateTraitScore(traitAnswers),
    };
  });

  const overallScore = Math.round(
    traitScores.reduce((sum, t) => sum + t.score, 0) / traitScores.length,
  );

  const category = getScoreCategory(overallScore);

  const strengths = traitScores
    .filter((t) => t.score >= STRENGTH_THRESHOLD)
    .map((t) => `${t.name} (${t.score}%)`);

  const developmentAreas = traitScores
    .filter((t) => t.score < DEVELOPMENT_THRESHOLD)
    .map((t) => `${t.name} (${t.score}%)`);

  const recommendations = traitScores
    .filter((t) => t.score < STRENGTH_THRESHOLD)
    .sort((a, b) => a.score - b.score)
    .slice(0, 4)
    .map((t) => `${t.name}: ${getTraitRecommendation(t.traitId, t.score)}`);

  const nextSteps = getNextSteps(category, overallScore);

  return {
    intro,
    traitScores,
    overallScore,
    category,
    strengths:
      strengths.length > 0
        ? strengths
        : ["No traits scored above 70% — focus development across all pillars."],
    developmentAreas:
      developmentAreas.length > 0
        ? developmentAreas
        : ["All traits scored above 70% — maintain strengths while preparing for promotion."],
    recommendations,
    nextSteps,
  };
}
