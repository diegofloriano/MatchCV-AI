import type { Profile } from "@/data/mockData";

/** Builds an ATS-friendly single-column A4 .docx and triggers download. Loaded lazily (browser only). */
export async function downloadResumeDocx(p: Profile) {
  const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat, BorderStyle } = await import("docx");
  const font = "Arial";
  const heading = (t: string) =>
    new Paragraph({
      spacing: { before: 240, after: 100 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 1 } },
      children: [new TextRun({ text: t.toUpperCase(), bold: true, size: 24, font })],
    });
  const text = (t: string, opts: { bold?: boolean; italics?: boolean } = {}) =>
    new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: t, size: 21, font, ...opts })] });
  const bullet = (t: string) =>
    new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 40 }, children: [new TextRun({ text: t, size: 21, font })] });

  const children = [
    new Paragraph({ alignment: AlignmentType.LEFT, children: [new TextRun({ text: p.name, bold: true, size: 36, font })] }),
    text(p.title, { bold: true }),
    text([p.email, p.phone, p.location, p.linkedin].filter(Boolean).join(" | ")),
  ];
  if (p.summary) children.push(heading("Resumo Profissional"), text(p.summary));
  if (p.experiences.length) {
    children.push(heading("Experiência Profissional"));
    for (const e of p.experiences) {
      children.push(
        new Paragraph({ spacing: { before: 120, after: 40 }, keepNext: true, children: [
          new TextRun({ text: `${e.role} — ${e.company}`, bold: true, size: 22, font }),
        ] }),
        text(e.period, { italics: true }),
        ...e.bullets.filter(Boolean).map(bullet),
      );
    }
  }
  if (p.education.length) {
    children.push(heading("Formação Acadêmica"));
    p.education.forEach((ed) => children.push(text(`${ed.degree} — ${ed.school}${ed.year ? ` (${ed.year})` : ""}`)));
  }
  if (p.skills.length) children.push(heading("Habilidades"), text(p.skills.join(", ")));
  if (p.certifications.length) {
    children.push(heading("Certificações"));
    p.certifications.forEach((c) => children.push(bullet(c)));
  }

  const doc = new Document({
    numbering: { config: [{ reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }] },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 } } },
      children,
    }],
  });
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `curriculo-${p.name.toLowerCase().replace(/\s+/g, "-")}.docx`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}
