export type ArticleImageIcon =
  | "leadership-potential"
  | "interview-guide"
  | "technician-supervisor"
  | "accountability"
  | "d1-framework"
  | "manufacturing-floor";

export type ArticleImageTheme = {
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  glowColor: string;
  icon: ArticleImageIcon;
};

export const ARTICLE_IMAGE_THEMES: Record<string, ArticleImageTheme> = {
  "identify-leadership-potential-before-promotion": {
    gradientFrom: "#0f1f35",
    gradientVia: "#152842",
    gradientTo: "#050d1a",
    glowColor: "rgba(212, 175, 55, 0.18)",
    icon: "leadership-potential",
  },
  "15-interview-questions-leadership-ability": {
    gradientFrom: "#152842",
    gradientVia: "#0f1f35",
    gradientTo: "#0a1628",
    glowColor: "rgba(212, 175, 55, 0.15)",
    icon: "interview-guide",
  },
  "great-technicians-not-great-supervisors": {
    gradientFrom: "#0a1628",
    gradientVia: "#152842",
    gradientTo: "#050d1a",
    glowColor: "rgba(212, 175, 55, 0.2)",
    icon: "technician-supervisor",
  },
  "building-accountability-without-micromanaging": {
    gradientFrom: "#0f1f35",
    gradientVia: "#0a1628",
    gradientTo: "#152842",
    glowColor: "rgba(212, 175, 55, 0.16)",
    icon: "accountability",
  },
  "d1-framework-explained": {
    gradientFrom: "#152842",
    gradientVia: "#0f1f35",
    gradientTo: "#050d1a",
    glowColor: "rgba(212, 175, 55, 0.22)",
    icon: "d1-framework",
  },
  "leadership-lessons-manufacturing-operations": {
    gradientFrom: "#0a1628",
    gradientVia: "#0f1f35",
    gradientTo: "#050d1a",
    glowColor: "rgba(212, 175, 55, 0.17)",
    icon: "manufacturing-floor",
  },
};

export const DEFAULT_IMAGE_THEME: ArticleImageTheme = {
  gradientFrom: "#0f1f35",
  gradientVia: "#152842",
  gradientTo: "#050d1a",
  glowColor: "rgba(212, 175, 55, 0.15)",
  icon: "leadership-potential",
};

export function getArticleImageTheme(slug: string): ArticleImageTheme {
  return ARTICLE_IMAGE_THEMES[slug] ?? DEFAULT_IMAGE_THEME;
}
