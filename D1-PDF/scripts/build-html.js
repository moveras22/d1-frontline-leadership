/**
 * Builds index.html from content/pillars.json and templates/document.html
 * Run: node scripts/build-html.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const pillars = JSON.parse(
  fs.readFileSync(path.join(ROOT, "content", "pillars.json"), "utf8")
);

const PILLAR_ICONS = {
  coachability: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><circle cx="12" cy="12" r="4"/><path d="m8 16 2-2 2 2"/></svg>`,
  discipline: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>`,
  accountability: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 3 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4z"/><path d="m9 12 2 2 4-4"/></svg>`,
  "competitive-drive": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M6 18V9M12 18V5M18 18v-7"/><path d="M4 18h16"/></svg>`,
  "pressure-response": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  communication: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M4 6h16v9H8l-4 4V6z"/><path d="M8 10h8M8 13h5"/></svg>`,
  "team-impact": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="9" cy="8" r="3"/><circle cx="16" cy="9" r="2.5"/><path d="M4 19c0-3 2.5-5 5-5s5 2 5 5M13 19c0-2 1.5-3.5 3.5-3.5S20 17 20 19"/></svg>`,
};

function listItems(items, className = "") {
  return `<ul class="${className}">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
}

function renderPillar(p) {
  const icon = PILLAR_ICONS[p.id] || PILLAR_ICONS.coachability;
  const scaleRows = p.evaluationScale
    .map(
      (r) =>
        `<tr><td>${r.score}</td><td>${r.label}</td><td>${r.description}</td></tr>`
    )
    .join("");

  return `
<section class="pillar" id="pillar-${p.id}">
  <span class="chapter__number">Pillar ${p.number}</span>
  <div class="pillar-header">
    <div class="pillar-icon" aria-hidden="true">${icon}</div>
    <div>
      <h1>${p.name}</h1>
      <p class="pillar-tagline">${p.tagline}</p>
    </div>
  </div>
  <div class="chapter-divider"></div>

  <h2>Definition</h2>
  <p>${p.definition}</p>

  <div class="callout">
    <span class="callout__label">Why It Matters</span>
    <p>${p.whyItMatters}</p>
  </div>

  <div class="pillar-grid">
    <div>
      <h3>Observable Behaviors</h3>
      ${listItems(p.behaviors, "list-check")}
    </div>
    <div>
      <h3>Warning Signs</h3>
      ${listItems(p.warningSigns, "list-warn")}
    </div>
  </div>

  <h2>Interview Questions</h2>
  <ol>${p.interviewQuestions.map((q) => `<li>${q}</li>`).join("")}</ol>

  <h2>Coaching Tips</h2>
  <ul>${p.coachingTips.map((t) => `<li>${t}</li>`).join("")}</ul>

  <h2>Evaluation Scale (1–5)</h2>
  <div class="table-wrap">
    <table class="table-score">
      <thead><tr><th>Score</th><th>Level</th><th>Description</th></tr></thead>
      <tbody>${scaleRows}</tbody>
    </table>
  </div>

  <div class="key-takeaway">
    <p>${p.keyTakeaway}</p>
  </div>
</section>`;
}

const pillarToc = pillars.pillars
  .map(
    (p) => `
  <li class="toc-sub">
    <a href="#pillar-${p.id}">${p.number}. ${p.name}</a>
    <span class="toc-leader"></span>
    <span class="toc-page-num" data-target="#pillar-${p.id}"></span>
  </li>`
  )
  .join("");

const pillarSections = pillars.pillars.map(renderPillar).join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The D1 Leadership Framework — Version 1.0</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles/document.css" />
  <script src="vendor/paged.polyfill.js"></script>
</head>
<body>
  <div class="screen-toolbar no-print">
    <span>The D1 Leadership Framework — Preview</span>
    <button type="button" onclick="window.print()">Print / Save as PDF</button>
  </div>

  <main class="document">

    <!-- COVER -->
    <section class="cover" aria-label="Cover page">
      <div class="cover__top">
        <div class="cover__brand">
          <img class="cover__logo" src="assets/logo-mark.svg" alt="D1" />
          <span class="cover__org">D1 Frontline Leadership</span>
        </div>
      </div>
      <div class="cover__center">
        <div class="cover__rule" aria-hidden="true"></div>
        <h1 class="cover__title">The D1 Leadership Framework</h1>
        <p class="cover__version">Version 1.0</p>
        <p class="cover__subtitle">A Practical Guide to Hiring and Developing Frontline Leaders</p>
      </div>
      <div class="cover__bottom">
        <div class="cover__meta">
          Manufacturing &amp; Operations Leadership<br />
          D1 Frontline Leadership
        </div>
        <div class="cover__pillars">
          ${pillars.pillars.map((p) => `<span class="cover__pillar-tag">${p.name}</span>`).join("")}
        </div>
      </div>
    </section>

    <!-- TABLE OF CONTENTS -->
    <section class="chapter toc-page" id="toc">
      <span class="chapter__number">Contents</span>
      <h1>Table of Contents</h1>
      <div class="chapter-divider"></div>
      <ul class="toc">
        <li><a href="#why-framework">Why the D1 Framework Exists</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#why-framework"></span></li>
        <li class="toc-sub"><a href="#how-to-use">How to Use the D1 Framework</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#how-to-use"></span></li>
        <li class="toc-section"><span>Leadership Pillars</span></li>
        ${pillarToc}
        <li class="toc-section"><span>Tools &amp; Worksheets</span></li>
        <li class="toc-sub"><a href="#scorecard">Leadership Assessment Scorecard</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#scorecard"></span></li>
        <li class="toc-sub"><a href="#interview-guide">Interview Guide</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#interview-guide"></span></li>
        <li class="toc-sub"><a href="#development-plan">90-Day Development Plan</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#development-plan"></span></li>
        <li class="toc-sub"><a href="#evaluation-worksheet">Frontline Leader Evaluation Worksheet</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#evaluation-worksheet"></span></li>
        <li class="toc-sub"><a href="#manager-notes">Manager Notes Pages</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#manager-notes"></span></li>
        <li class="toc-section"><span>Closing</span></li>
        <li class="toc-sub"><a href="#about-author">About the Author</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#about-author"></span></li>
        <li class="toc-sub"><a href="#final-thoughts">Final Thoughts</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#final-thoughts"></span></li>
        <li><a href="#continue-journey">Continue Your Leadership Journey</a><span class="toc-leader"></span><span class="toc-page-num" data-target="#continue-journey"></span></li>
      </ul>
    </section>

    <!-- WHY FRAMEWORK -->
    <section class="chapter" id="why-framework">
      <span class="chapter__number">Introduction</span>
      <h1>Why the D1 Framework Exists</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">Manufacturing organizations promote strong operators into supervision every day—and many struggle. The gap is rarely technical skill. It is leadership character: how someone learns, executes, owns results, communicates, and develops others when the shift gets difficult.</p>

      <p>The D1 Leadership Framework was built for production environments where frontline leaders directly influence safety, quality, throughput, engagement, and culture. It provides a structured, repeatable method for identifying leadership potential <em>before</em> promotion—and developing it with intention afterward.</p>

      <div class="callout callout--dark">
        <span class="callout__label">The Core Problem</span>
        <p>Most companies hire for experience and promote for individual performance. <strong>D1 evaluates traits</strong>—the behaviors that predict whether someone will lead effectively when the line stops, the audit arrives, or the team is watching.</p>
      </div>

      <h2>What Makes D1 Different</h2>
      <p>Traditional leadership models describe competencies that are hard to observe until someone is already in the role. D1 focuses on seven pillars you can assess in interviews, see on the floor, coach in conversation, and score with consistency.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>Traditional Approach</th><th>D1 Approach</th></tr></thead>
          <tbody>
            <tr><td>Hire for years of experience</td><td>Assess coachability, discipline, and accountability first</td></tr>
            <tr><td>Promote the top individual performer</td><td>Evaluate team impact and communication before the title changes</td></tr>
            <tr><td>Train after performance problems surface</td><td>Apply a 90-day development plan with clear milestones</td></tr>
            <tr><td>Rely on subjective annual reviews</td><td>Rate each pillar on a consistent 1–5 scale with evidence</td></tr>
          </tbody>
        </table>
      </div>

      <h2>The D1 Athlete Connection</h2>
      <p>The name <em>D1</em> reflects a core insight from manufacturing leadership: the same traits that produce elite athletes—discipline, accountability, resilience, coachability, competitive drive, and team orientation—often translate powerfully to the plant floor. The best athletes receive coaching daily, perform under pressure, and elevate teammates. So do the best supervisors—when those traits are paired with humility and operational rigor.</p>

      <p>Every tool in this handbook—pillar definitions, interview questions, scorecards, development plans, and evaluation worksheets—is designed to be used immediately. No theory without application. No jargon without a practical next step.</p>
    </section>

    <!-- HOW TO USE -->
    <section class="chapter" id="how-to-use">
      <span class="chapter__number">Getting Started</span>
      <h1>How to Use the D1 Framework</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">This handbook is a working system—not a one-time read. Use it across the employee lifecycle: hiring, onboarding, coaching, promotion, and succession.</p>

      <ul class="how-to-steps">
        <li><strong>Read each leadership pillar.</strong> Align hiring managers, HR, and operations leaders on what strong frontline leadership looks like in your plant.</li>
        <li><strong>Use the interview questions during hiring.</strong> Probe for specific examples from production, safety, quality, and shift leadership—not hypotheticals.</li>
        <li><strong>Evaluate candidates with the D1 scorecard.</strong> Rate each pillar from 1–5 using behavioral evidence, not gut feel.</li>
        <li><strong>Build development plans from weaker pillars.</strong> Focus coaching where scores lag; do not treat every gap the same way.</li>
        <li><strong>Reassess every 90 days.</strong> Leadership growth is visible over time—track it with the same discipline you apply to operational metrics.</li>
        <li><strong>Apply D1 across decisions.</strong> Use it for hiring, coaching, promotions, and succession planning so standards stay consistent.</li>
      </ul>

      <div class="key-takeaway">
        <p>Great leadership is built through consistent coaching, accountability, and deliberate practice—not chance.</p>
      </div>
    </section>

    <!-- PILLARS INTRO -->
    <section class="chapter" id="pillars-intro">
      <span class="chapter__number">Section 2</span>
      <h1>The Seven D1 Leadership Pillars</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">Each pillar represents a trait you can observe on the floor, assess in interviews, coach in conversation, and score with consistency. Together, they form a complete picture of frontline leadership potential and performance.</p>

      <div class="table-wrap">
        <table>
          <thead><tr><th>#</th><th>Pillar</th><th>Focus</th></tr></thead>
          <tbody>
            ${pillars.pillars
              .map(
                (p) =>
                  `<tr><td>${p.number}</td><td><strong>${p.name}</strong></td><td>${p.tagline}</td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      </div>

      <div class="callout callout--dark">
        <span class="callout__label">Evaluation Principle</span>
        <p>No single pillar defines a leader. <strong>Look for strength across all seven</strong>, with particular attention to coachability and accountability — the two traits that most predict long-term growth.</p>
      </div>
    </section>

    ${pillarSections}

    <!-- SCORECARD -->
    <section class="chapter" id="scorecard">
      <span class="chapter__number">Section 3</span>
      <h1>Leadership Assessment Scorecard</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">Rate each pillar from 1 (critical gap) to 5 (elite). Base scores on observed behavior—gemba walks, shift results, feedback sessions—not personality or likability.</p>

      <div class="callout">
        <span class="callout__label">Scoring Guidance</span>
        <p>A score of 3 means acceptable with development needed. Reserve 4 and 5 for leaders with repeated, documented evidence. A total below 21 (average below 3.0) suggests the candidate or leader is not yet ready for independent frontline responsibility.</p>
      </div>

      <div class="form-row">
        <div class="form-field"><label>Leader Name</label><div class="line"></div></div>
        <div class="form-field"><label>Date</label><div class="line"></div></div>
      </div>
      <div class="form-row">
        <div class="form-field"><label>Role / Shift</label><div class="line"></div></div>
        <div class="form-field"><label>Evaluator</label><div class="line"></div></div>
      </div>

      <div class="scorecard-grid">
        <div class="scorecard-grid__head">Pillar</div>
        <div class="scorecard-grid__head">1</div>
        <div class="scorecard-grid__head">2</div>
        <div class="scorecard-grid__head">3</div>
        <div class="scorecard-grid__head">4</div>
        <div class="scorecard-grid__head">5</div>
        ${pillars.pillars
          .map(
            (p) => `
        <div class="scorecard-grid__cell">${p.name}</div>
        <div class="scorecard-grid__cell"><span class="rating-box"></span></div>
        <div class="scorecard-grid__cell"><span class="rating-box"></span></div>
        <div class="scorecard-grid__cell"><span class="rating-box"></span></div>
        <div class="scorecard-grid__cell"><span class="rating-box"></span></div>
        <div class="scorecard-grid__cell"><span class="rating-box"></span></div>`
          )
          .join("")}
      </div>

      <h2>Scoring Summary</h2>
      <div class="table-wrap">
        <table class="table-form">
          <tbody>
            <tr><td class="field-label">Total Score (out of 35)</td><td class="field-blank"></td></tr>
            <tr><td class="field-label">Average Score</td><td class="field-blank"></td></tr>
            <tr><td class="field-label">Strongest Pillar</td><td class="field-blank"></td></tr>
            <tr><td class="field-label">Priority Development Area</td><td class="field-blank"></td></tr>
          </tbody>
        </table>
      </div>

      <h2>Recommendation</h2>
      <p class="text-small text-muted">Circle one:</p>
      <p><strong>Ready for Leadership</strong> &nbsp;·&nbsp; <strong>Develop with Support</strong> &nbsp;·&nbsp; <strong>Not Ready — Reassess in 90 Days</strong></p>

      <h3>Evidence &amp; Notes</h3>
      <div class="notes-lines">
        ${Array(8).fill('<div class="notes-line"></div>').join("")}
      </div>
    </section>

    <!-- INTERVIEW GUIDE -->
    <section class="chapter" id="interview-guide">
      <span class="chapter__number">Section 4</span>
      <h1>Interview Guide</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">Use this guide during supervisor and team-lead interviews. One strong question per pillar is enough—then follow up until you have a specific story, not a general claim.</p>

      <div class="callout">
        <span class="callout__label">Interview Protocol</span>
        <p>For every answer, probe with: <em>What was your role? What happened next? What was the result? What would you do differently?</em> Listen for production, safety, and quality examples—not office anecdotes.</p>
      </div>

      ${pillars.pillars
        .map(
          (p) => `
      <div class="interview-block">
        <h3>${p.name}</h3>
        <ul class="question-list">
          ${p.interviewQuestions.map((q) => `<li>${q}</li>`).join("")}
        </ul>
        <p class="text-small text-muted"><strong>Listen for:</strong> ${p.behaviors.slice(0, 3).join("; ")}.</p>
        <p class="text-small text-muted"><strong>Watch for:</strong> ${p.warningSigns.slice(0, 2).join("; ")}.</p>
      </div>`
        )
        .join("")}

      <h2>Interview Scorecard</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Candidate</th><th>Date</th><th>Interviewer</th><th>Overall D1 Rating (1–5)</th><th>Recommendation</th></tr></thead>
          <tbody>
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
            <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 90-DAY PLAN -->
    <section class="chapter" id="development-plan">
      <span class="chapter__number">Section 5</span>
      <h1>90-Day Development Plan</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">A structured path for new or transitioning supervisors. Adapt milestones to your plant, but keep the rhythm: assess, observe, apply, evaluate.</p>

      <div class="form-row">
        <div class="form-field"><label>Leader Name</label><div class="line"></div></div>
        <div class="form-field"><label>Start Date</label><div class="line"></div></div>
      </div>
      <div class="form-field"><label>Manager / Coach</label><div class="line"></div></div>

      <div class="plan-phase">
        <div class="plan-phase__header">
          <span class="plan-phase__badge">Days 1–30</span>
          <p class="plan-phase__title">Foundation &amp; Observation</p>
        </div>
        <ul>
          <li>Complete D1 baseline scorecard with plant manager or HR partner</li>
          <li>Shadow an experienced supervisor across days and shifts</li>
          <li>Establish shift communication rhythm: huddles, gemba walks, handoffs</li>
          <li>Learn escalation paths, safety protocols, quality standards, and key KPIs</li>
          <li>Set one coachability goal and one discipline routine to build in the first 30 days</li>
        </ul>
        <p class="text-small"><strong>Milestone check:</strong> Can articulate shift priorities, non-negotiable standards, and personal development focus.</p>
      </div>

      <div class="plan-phase">
        <div class="plan-phase__header">
          <span class="plan-phase__badge">Days 31–60</span>
          <p class="plan-phase__title">Application &amp; Feedback</p>
        </div>
        <ul>
          <li>Lead shifts with structured manager observation and debriefs</li>
          <li>Conduct a difficult performance conversation with manager support</li>
          <li>Track shift metrics and close one sustained performance gap</li>
          <li>Receive weekly feedback on two priority pillars</li>
          <li>Document one example of team impact and one of pressure response under real conditions</li>
        </ul>
        <p class="text-small"><strong>Milestone check:</strong> Executes consistently and responds to coaching without defensiveness.</p>
      </div>

      <div class="plan-phase">
        <div class="plan-phase__header">
          <span class="plan-phase__badge">Days 61–90</span>
          <p class="plan-phase__title">Ownership &amp; Evaluation</p>
        </div>
        <ul>
          <li>Operate with increasing independence; manager check-ins move to weekly</li>
          <li>Complete full D1 evaluation with documented behavioral evidence</li>
          <li>Coach one operator through a measurable skill or performance improvement</li>
          <li>Present 90-day results: SQDC trends, team feedback, and next-quarter pillar priorities</li>
          <li>Align with manager on promotion readiness, continued development, or role fit</li>
        </ul>
        <p class="text-small"><strong>Milestone check:</strong> Meets plant threshold for independent frontline leadership responsibility.</p>
      </div>

      <h2>Progress Tracker</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Week</th><th>Focus Pillar(s)</th><th>Action Taken</th><th>Result</th><th>Manager Initials</th></tr></thead>
          <tbody>
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
              .map((w) => `<tr><td>${w}</td><td></td><td></td><td></td><td></td></tr>`)
              .join("")}
          </tbody>
        </table>
      </div>
    </section>

    <!-- EVALUATION WORKSHEET -->
    <section class="chapter" id="evaluation-worksheet">
      <span class="chapter__number">Section 6</span>
      <h1>Frontline Leader Evaluation Worksheet</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">Use during quarterly reviews, post-incident assessments, or before promotion decisions. Every rating should cite behavior observed on the floor—not impressions from a single conversation.</p>

      <div class="form-row">
        <div class="form-field"><label>Leader</label><div class="line"></div></div>
        <div class="form-field"><label>Review Period</label><div class="line"></div></div>
      </div>

      ${pillars.pillars
        .map(
          (p) => `
      <h2>${p.name}</h2>
      <div class="table-wrap">
        <table class="table-form">
          <tbody>
            <tr><td class="field-label">Rating (1–5)</td><td class="field-blank"></td></tr>
            <tr><td class="field-label">Behavioral Evidence</td><td class="field-blank"></td></tr>
            <tr><td class="field-label">Development Action</td><td class="field-blank"></td></tr>
          </tbody>
        </table>
      </div>`
        )
        .join("")}

      <h2>Overall Assessment</h2>
      <div class="notes-lines">
        ${Array(6).fill('<div class="notes-line"></div>').join("")}
      </div>
    </section>

    <!-- MANAGER NOTES -->
    <section class="chapter manager-notes-page" id="manager-notes">
      <span class="chapter__number">Section 7</span>
      <h1>Manager Notes Pages</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">Dedicated space for coaching conversations, incident debriefs, and performance documentation. Strong notes create accountability—for the leader and the coach.</p>
    </section>

    <section class="manager-notes-page">
      <div class="form-row">
        <div class="form-field"><label>Leader</label><div class="line"></div></div>
        <div class="form-field"><label>Date</label><div class="line"></div></div>
      </div>
      <div class="form-field"><label>Session Topic</label><div class="line"></div></div>
      <h3>Observations</h3>
      <div class="notes-area"></div>
      <h3>Action Items</h3>
      <div class="notes-lines">${Array(4).fill('<div class="notes-line"></div>').join("")}</div>
      <div class="form-row">
        <div class="form-field"><label>Follow-Up Date</label><div class="line"></div></div>
        <div class="form-field"><label>Manager Signature</label><div class="line"></div></div>
      </div>
    </section>

    <section class="manager-notes-page">
      <div class="form-row">
        <div class="form-field"><label>Leader</label><div class="line"></div></div>
        <div class="form-field"><label>Date</label><div class="line"></div></div>
      </div>
      <div class="form-field"><label>Session Topic</label><div class="line"></div></div>
      <h3>Observations</h3>
      <div class="notes-area"></div>
      <h3>Action Items</h3>
      <div class="notes-lines">${Array(4).fill('<div class="notes-line"></div>').join("")}</div>
      <div class="form-row">
        <div class="form-field"><label>Follow-Up Date</label><div class="line"></div></div>
        <div class="form-field"><label>Manager Signature</label><div class="line"></div></div>
      </div>
    </section>

    <section class="manager-notes-page">
      <div class="form-row">
        <div class="form-field"><label>Leader</label><div class="line"></div></div>
        <div class="form-field"><label>Date</label><div class="line"></div></div>
      </div>
      <div class="form-field"><label>Session Topic</label><div class="line"></div></div>
      <h3>Observations</h3>
      <div class="notes-area"></div>
      <h3>Action Items</h3>
      <div class="notes-lines">${Array(4).fill('<div class="notes-line"></div>').join("")}</div>
      <div class="form-row">
        <div class="form-field"><label>Follow-Up Date</label><div class="line"></div></div>
        <div class="form-field"><label>Manager Signature</label><div class="line"></div></div>
      </div>
    </section>

    <!-- ABOUT THE AUTHOR -->
    <section class="chapter" id="about-author">
      <span class="chapter__number">About</span>
      <h1>About the Author</h1>
      <div class="chapter-divider"></div>

      <p>The D1 Leadership Framework was developed through years of leading manufacturing operations—running production shifts, coaching supervisors, improving systems on the floor, hiring frontline leaders, and watching which traits consistently predicted success.</p>

      <p>That work revealed a pattern: the best supervisors were not always the most senior operators. They were the ones who learned fast, executed with discipline, owned outcomes, communicated clearly, responded well under pressure, and made their teams better. Those behaviors could be identified early—if you knew what to look for.</p>

      <div class="author-story">
        <p><strong>The moment that shaped D1.</strong> A former Division I athlete applied for a leadership role in a manufacturing environment. While others focused primarily on experience, I recognized something different—the traits developed through years of elite athletics: discipline, accountability, resilience, coachability, competitive drive, and genuine teamwork.</p>
        <p>He did not just know how to work hard. He knew how to be coached, how to prepare, how to perform when conditions were difficult, and how to elevate people around him. That observation became the foundation for the D1 Leadership Framework.</p>
      </div>

      <p>D1 exists to give operations leaders a practical language and toolkit for hiring and developing frontline supervisors with the same intention they apply to safety, quality, and production performance.</p>

      <p class="text-muted text-small">This handbook reflects real plant-floor experience—not abstract theory. Use it, adapt it to your operation, and hold your leadership standard as high as your operational standard.</p>
    </section>

    <!-- FINAL THOUGHTS -->
    <section class="chapter" id="final-thoughts">
      <span class="chapter__number">Closing</span>
      <h1>Final Thoughts</h1>
      <div class="chapter-divider"></div>

      <p class="closing-quote">Leadership is not conferred by a title. It is earned through daily behaviors—the conversations you have, the standards you enforce, the feedback you accept, and the example you set when production pressure is highest.</p>

      <p>Technical skill matters on the manufacturing floor. Machines, processes, and specifications must be understood. But character matters more over time. Plants do not fail because supervisors lack mechanical knowledge alone. They struggle when leaders cannot coach, communicate, own results, or develop people.</p>

      <p>Organizations become stronger when they intentionally develop frontline leaders instead of hoping promotion solves the problem. Every supervisor shapes safety culture, quality discipline, team morale, and operational continuity. That influence compounds shift after shift.</p>

      <p>The D1 Framework exists to help you identify leadership potential <em>before</em> promotion—not after customer escapes, turnover spikes, or cultural damage make the gap impossible to ignore. When hiring managers, plant leaders, and HR partners share one standard, your bench of frontline leaders becomes a strategic advantage.</p>

      <h2>What Consistent Use Looks Like</h2>
      <ul>
        <li>Interview panels evaluate D1 traits with the same rigor applied to technical screening</li>
        <li>New supervisors follow a structured 90-day path with documented pillar growth</li>
        <li>Coaching conversations reference specific behaviors—not vague "soft skill" feedback</li>
        <li>Performance reviews include evidence-based pillar ratings tied to floor observation</li>
        <li>Teams under D1-led supervisors show stronger safety, quality, engagement, and retention trends</li>
      </ul>

      <div class="callout callout--dark">
        <span class="callout__label">The Standard</span>
        <p>Traits can be developed—but only when they are named, measured, coached, and held to account. <strong>D1 gives you the system. Your consistency gives it power.</strong></p>
      </div>

      <div class="key-takeaway">
        <p>Continue raising the standard.</p>
      </div>
    </section>

    <!-- CONTINUE JOURNEY -->
    <section class="chapter journey-page" id="continue-journey">
      <span class="chapter__number">Next Steps</span>
      <h1>Continue Your Leadership Journey</h1>
      <div class="chapter-divider"></div>
      <p class="chapter__intro">The D1 Leadership Framework is the foundation. Build on it with tools, training, and resources designed for manufacturing and operations leaders.</p>

      <div class="journey-layout">
        <div>
          <h2>Resources &amp; Tools</h2>
          <ul class="journey-resources">
            <li>Website<span>D1 Frontline Leadership — frameworks, insights, and operational leadership content</span></li>
            <li>Future Resources<span>Expanded guides, case studies, and plant-floor leadership playbooks</span></li>
            <li>Leadership Assessments<span>Structured D1 evaluations for candidates and developing supervisors</span></li>
            <li>Interview Tools<span>Role-specific question sets and panel scorecards</span></li>
            <li>Development Guides<span>Coaching frameworks for each D1 pillar</span></li>
            <li>Supervisor Coaching<span>Practical support for new and struggling frontline leaders</span></li>
            <li>Future D1 Software<span>Digital scorecards, tracking, and leadership analytics</span></li>
          </ul>

          <div class="journey-cta">
            <p><strong>Your operation deserves frontline leaders who perform with discipline, accountability, and team impact.</strong> Continue building that standard with D1—one hire, one coach, and one shift at a time.</p>
          </div>

          <div class="contact-block">
            <p><strong>D1 Frontline Leadership</strong><br />
            Elite frontline leadership for manufacturing &amp; operations.<br />
            Visit us online to access the latest tools and resources.</p>
          </div>
        </div>
        <div class="qr-placeholder" aria-label="QR code placeholder">QR Code</div>
      </div>
    </section>

  </main>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, "index.html"), html, "utf8");
console.log("Built index.html successfully.");
