import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

const outputDir = path.join(process.cwd(), "public", "downloads");
const outputPath = path.join(outputDir, "d1-supervisor-interview-scorecard.pdf");

const pillars = [
  {
    name: "Coachability",
    question:
      "Tell me about a time you received difficult feedback on the job. What did you do next?",
  },
  {
    name: "Discipline",
    question:
      "What routine or process helps you perform consistently shift after shift?",
  },
  {
    name: "Accountability",
    question:
      "Tell me about a significant mistake you made and what you learned.",
  },
  {
    name: "Competitive Drive",
    question:
      "Describe a time you pushed your team or yourself beyond minimum expectations.",
  },
  {
    name: "Pressure Response",
    question:
      "Tell me about a shift when everything went wrong. How did you respond?",
  },
  {
    name: "Team Impact",
    question:
      "Describe a time you helped a struggling teammate improve their performance.",
  },
];

function addWrappedText(doc, text, x, y, maxWidth, lineHeight) {
  const lines = doc.splitTextToSize(text, maxWidth);
  doc.text(lines, x, y);
  return y + lines.length * lineHeight;
}

function generatePdf() {
  const doc = new jsPDF();
  const margin = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - margin * 2;
  let y = 24;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(10, 22, 40);
  doc.text("Supervisor Interview Scorecard", margin, y);

  y += 8;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text("D1 Frontline Leadership", margin, y);

  y += 12;
  doc.setDrawColor(201, 162, 39);
  doc.line(margin, y, pageWidth - margin, y);

  y += 12;
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 40);
  doc.text("Candidate Name: _________________________________", margin, y);
  y += 8;
  doc.text("Position: _______________________________________", margin, y);
  y += 8;
  doc.text("Date: _______________   Interviewer: _________________", margin, y);

  y += 12;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  y = addWrappedText(
    doc,
    "Rate each pillar from 1 (critical gap) to 5 (elite) based on behavioral evidence from the interview — not personality or likability.",
    margin,
    y,
    contentWidth,
    5,
  );

  y += 8;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(10, 22, 40);
  doc.text("Pillar", margin, y);
  doc.text("1", margin + 72, y);
  doc.text("2", margin + 84, y);
  doc.text("3", margin + 96, y);
  doc.text("4", margin + 108, y);
  doc.text("5", margin + 120, y);

  y += 4;
  doc.setDrawColor(201, 162, 39);
  doc.line(margin, y, pageWidth - margin, y);

  for (const pillar of pillars) {
    y += 10;
    if (y > 250) {
      doc.addPage();
      y = 24;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(10, 22, 40);
    doc.text(pillar.name, margin, y);

    for (let score = 1; score <= 5; score += 1) {
      const x = margin + 68 + (score - 1) * 12;
      doc.setDrawColor(180, 180, 180);
      doc.rect(x, y - 4, 8, 8);
    }

    y += 6;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    y = addWrappedText(
      doc,
      `Q: ${pillar.question}`,
      margin,
      y,
      contentWidth,
      4.5,
    );

    y += 4;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, pageWidth - margin, y);
  }

  if (y > 200) {
    doc.addPage();
    y = 24;
  }

  y += 12;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(10, 22, 40);
  doc.text("Scoring Summary", margin, y);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(40, 40, 40);
  doc.text("Total Score (out of 30): _________________________", margin, y);
  y += 8;
  doc.text("Average Score: _________________________________", margin, y);
  y += 8;
  doc.text("Strongest Pillar: ______________________________", margin, y);
  y += 8;
  doc.text("Priority Development Area: _____________________", margin, y);

  y += 14;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Recommendation", margin, y);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(
    "[ ] Ready for Leadership    [ ] Develop with Support    [ ] Not Ready — Reassess",
    margin,
    y,
  );

  y += 14;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Evidence & Notes", margin, y);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  for (let i = 0; i < 6; i += 1) {
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, pageWidth - margin, y);
    y += 10;
  }

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(
    "Tip: Probe every answer — What was your role? What happened next? What was the result?",
    margin,
    y + 4,
  );

  doc.setFontSize(8);
  doc.text(
    "d1frontlineleadership.com | D1 Frontline Leadership",
    margin,
    doc.internal.pageSize.getHeight() - 12,
  );

  fs.mkdirSync(outputDir, { recursive: true });
  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log(`Generated ${outputPath}`);
}

generatePdf();
