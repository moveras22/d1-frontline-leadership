import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";

const outputDir = path.join(process.cwd(), "public", "downloads");
const outputPath = path.join(outputDir, "one-on-one-meeting-template.pdf");

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
  doc.text("One-on-One Meeting Template", margin, y);

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
  doc.text("Employee Name: _________________________________", margin, y);
  y += 8;
  doc.text("Supervisor Name: _______________________________", margin, y);
  y += 8;
  doc.text("Date: _______________   Meeting Type: [ ] Weekly  [ ] Monthly", margin, y);
  y += 8;
  doc.text("Role / Department: ______________________________", margin, y);

  const sections = [
    {
      title: "1. Check-In",
      prompts: [
        "How are you doing this week — personally and on the floor?",
        "What is going well on your shift right now?",
        "Is anything creating friction or slowing you down?",
      ],
    },
    {
      title: "2. Performance & Priorities",
      prompts: [
        "Are expectations clear for safety, quality, and production this week?",
        "What results are you most focused on right now?",
        "Where do you need support from me to hit your targets?",
      ],
    },
    {
      title: "3. Development & Growth",
      prompts: [
        "What skill would help you perform better in your current role?",
        "What is one thing you want to get better at over the next 30 days?",
        "Are there stretch opportunities or training you are interested in?",
      ],
    },
    {
      title: "4. Obstacles & Support",
      prompts: [
        "What is getting in the way of doing your best work?",
        "Are there process, equipment, or staffing issues I should know about?",
        "What decision or resource do you need from me?",
      ],
    },
    {
      title: "5. Commitments & Follow-Up",
      prompts: [
        "What will you commit to before our next meeting?",
        "What will I commit to as your supervisor?",
        "When should we follow up on open action items?",
      ],
    },
  ];

  for (const section of sections) {
    if (y > 250) {
      doc.addPage();
      y = 24;
    }

    y += 6;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(10, 22, 40);
    doc.text(section.title, margin, y);

    y += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);

    for (const prompt of section.prompts) {
      y = addWrappedText(doc, `• ${prompt}`, margin, y, contentWidth, 5);
      y += 3;
      doc.setDrawColor(200, 200, 200);
      doc.line(margin + 4, y, pageWidth - margin, y);
      y += 8;
      if (y > 270) {
        doc.addPage();
        y = 24;
      }
    }
  }

  if (y > 220) {
    doc.addPage();
    y = 24;
  }

  y += 4;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(10, 22, 40);
  doc.text("Action Items", margin, y);

  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  for (let i = 1; i <= 5; i += 1) {
    doc.text(`${i}. Action: __________________________  Owner: ________  Due: ________`, margin, y);
    y += 10;
  }

  y += 6;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(
    "Tip: Keep 1:1s consistent, document commitments, and follow through every time.",
    margin,
    y,
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
