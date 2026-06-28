# The D1 Leadership Framework — PDF Document

Standalone, self-contained PDF source for **The D1 Leadership Framework v1.0**. This folder is completely separate from the main website codebase.

## Quick Start

```bash
cd D1-PDF
npm install
npm run build:pdf
```

Output: `output/D1-Leadership-Framework-v1.0.pdf`

## Preview in Browser

**Do not open `index.html` directly from the file system.** Paged.js requires a local web server to load styles and scripts correctly.

```bash
npm run preview
```

Then open **http://localhost:4173**

Use the toolbar **Print / Save as PDF** button, or press `Ctrl+P` / `Cmd+P`.

For best results when printing manually, enable **Background graphics** in print settings.

## Project Structure

```
D1-PDF/
├── index.html              # Generated document (run build to refresh)
├── content/
│   └── pillars.json        # Edit pillar definitions, questions, scales
├── styles/
│   └── document.css        # Typography, layout, print rules
├── assets/
│   ├── logo-mark.svg       # D1 brand mark
│   └── grid-pattern.svg    # Decorative grid
├── scripts/
│   ├── build-html.js       # Assembles index.html from content
│   └── generate-pdf.js     # Puppeteer PDF export
└── output/                 # Generated PDFs
```

## Editing Content

### Pillars (most common edits)

Edit `content/pillars.json`. Each pillar includes:

- Definition, why it matters, behaviors, warning signs
- Interview questions, coaching tips
- 1–5 evaluation scale

Then rebuild:

```bash
npm run build
```

### Styles & Branding

Edit CSS variables at the top of `styles/document.css`:

- `--navy-*` and `--gold-*` for brand colors
- `--font-display` and `--font-body` for typography

### Static Sections

Introduction, scorecard, interview guide, 90-day plan, worksheets, and closing sections are in `scripts/build-html.js`. Search for the section comment (e.g. `WHY FRAMEWORK`) to edit.

Placeholder notes marked in the document indicate areas intended for future expansion.

## PDF Generation Notes

- Uses [Paged.js](https://pagedjs.org/) for running headers, footers, page numbers, and table-of-contents page references
- Puppeteer renders the paginated output to PDF
- Cover page uses a dedicated `@page cover` rule with no headers/footers

## Requirements Met

- Professional cover page, TOC, headers/footers, page numbers
- Callout boxes, tables, icons, page breaks between chapters
- Print-friendly letter-size layout
- No website files modified
