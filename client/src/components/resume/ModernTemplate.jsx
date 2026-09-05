import React, { useState, useLayoutEffect, useRef, useMemo } from "react";
import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
  BsBriefcase,
  BsCode,
  BsMortarboard,
  BsStar,
  BsPersonLinesFill,
} from "react-icons/bs";

// ============================================================
// A4 PAGE GEOMETRY (96 CSS px/inch, 25.4mm/inch)
// ============================================================
const MM_TO_PX = 96 / 25.4;
const PAGE_HEIGHT_PX = 297 * MM_TO_PX;   // ~1122.5px
const PAGE_PAD_Y_PX = 24 + 24;           // py-6 top + bottom
const ACCENT_BAR_PX = 8;                 // h-2 accent bar, repeats on every page
const PAGE_CONTENT_BUDGET_PX = PAGE_HEIGHT_PX - PAGE_PAD_Y_PX - ACCENT_BAR_PX;

let uid = 0;
const nextId = () => `blk-${uid++}`;

// ============================================================
// BLOCK BUILDER
// ============================================================
// Each block is a self-contained, atomic chunk of content. A section
// heading is glued to its first entry (or first row, for the 2-column
// project grid) so a heading never ends up alone at the bottom of a page.
function buildBlocks(data = {}) {
  const blocks = [];

  if (data.professionalSummary) {
    blocks.push({
      id: nextId(),
      sectionStart: true,
      render: () => (
        <section className="bg-[#F5F7FF] p-4 rounded-lg border border-[#E0E7FF]">
          <SectionTitle icon={<BsPersonLinesFill />} title="About Me" />
          <p className="text-[12px] leading-[1.6] text-[#333] mt-2">
            {data.professionalSummary}
          </p>
        </section>
      ),
    });
  }

  const experiences = (data.experiences || []).filter((e) => e.company || e.position);
  experiences.forEach((exp, i) => {
    blocks.push({
      id: nextId(),
      sectionStart: i === 0,
      render: () => (
        <section>
          {i === 0 && <SectionTitle icon={<BsBriefcase />} title="Work Experience" />}
          <div className={i === 0 ? "mt-2" : ""}>
            <ExperienceItem exp={exp} />
          </div>
        </section>
      ),
    });
  });

  // Projects render two-per-row (matching the original grid-cols-2 look).
  // Each row is one atomic pagination block so the grid never gets torn
  // apart mid-row across a page break.
  const projects = (data.projects || []).filter((p) => p.title || p.description);
  for (let i = 0; i < projects.length; i += 2) {
    const pair = projects.slice(i, i + 2);
    const isFirstRow = i === 0;
    blocks.push({
      id: nextId(),
      sectionStart: isFirstRow,
      render: () => (
        <section>
          {isFirstRow && <SectionTitle icon={<BsCode />} title="Projects" />}
          <div className={`grid grid-cols-2 gap-3 ${isFirstRow ? "mt-2" : ""}`}>
            {pair.map((proj, j) => (
              <ProjectCard key={j} proj={proj} />
            ))}
          </div>
        </section>
      ),
    });
  }

  const education = (data.education || []).filter((e) => e.college || e.degree);
  education.forEach((edu, i) => {
    blocks.push({
      id: nextId(),
      sectionStart: i === 0,
      render: () => (
        <section>
          {i === 0 && <SectionTitle icon={<BsMortarboard />} title="Education" />}
          <div className={i === 0 ? "mt-2" : ""}>
            <EducationItem edu={edu} />
          </div>
        </section>
      ),
    });
  });

  if (data.skills) {
    blocks.push({
      id: nextId(),
      sectionStart: true,
      render: () => (
        <section>
          <SectionTitle icon={<BsStar />} title="Skills" />
          <div className="flex flex-wrap gap-1.5 mt-2">
            <SkillsList skills={data.skills} />
          </div>
        </section>
      ),
    });
  }

  if (data.achievements) {
    blocks.push({
      id: nextId(),
      sectionStart: true,
      render: () => (
        <section>
          <SectionTitle icon={<BsStar />} title="Achievements" />
          <ul className="list-disc list-inside ml-1 text-[12px] leading-[1.5] text-[#444] space-y-1 mt-2">
            {String(data.achievements)
              .split("\n")
              .map((ach, i) => ach.trim() && <li key={i}>{ach}</li>)}
          </ul>
        </section>
      ),
    });
  }

  return blocks;
}

// ============================================================
// SUB-COMPONENTS
// ============================================================
const SectionTitle = ({ icon, title }) => (
  <div className="flex items-center gap-2">
    <span className="text-[#4F46E5]">{icon}</span>
    <h2 className="text-[13px] font-bold uppercase tracking-[1px] text-[#1e1e1e]">{title}</h2>
  </div>
);

const EducationItem = ({ edu }) => (
  <div className="mb-2">
    <p className="font-semibold text-[12.5px]">{edu.degree}</p>
    <p className="text-[11.5px] text-[#555]">{edu.college}</p>
    <p className="text-[10.5px] text-[#777]">
      {edu.startDate} - {edu.endDate}
    </p>
  </div>
);

const SkillsList = ({ skills }) => {
  if (Array.isArray(skills)) {
    const skillItems = [];
    skills.forEach((skill) => {
      if (skill && typeof skill === "object" && !Array.isArray(skill)) {
        if (Array.isArray(skill.items)) {
          skill.items.forEach((item) => {
            if (item !== null && item !== undefined && String(item).trim()) {
              skillItems.push(String(item));
            }
          });
        } else if (skill.items !== null && skill.items !== undefined) {
          const itemText = String(skill.items);
          if (itemText.trim()) skillItems.push(itemText);
        }
      } else if (skill !== null && skill !== undefined) {
        skillItems.push(String(skill));
      }
    });
    return skillItems.map((skill, i) => (
      <span
        key={i}
        className="text-[11px] bg-[#EEF2FF] text-[#4338CA] px-2.5 py-1 rounded-full font-medium"
      >
        {skill}
      </span>
    ));
  }
  return <p className="text-[12px]">{String(skills)}</p>;
};

const ExperienceItem = ({ exp }) => (
  <div className="border-l-2 border-[#4F46E5] pl-3 mb-3">
    <div className="flex justify-between items-baseline">
      <p className="font-semibold text-[13px] text-[#1e1e1e]">{exp.position}</p>
      <p className="text-[10.5px] bg-[#EEF2FF] text-[#4338CA] px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
        {exp.startDate} - {exp.endDate || "Present"}
      </p>
    </div>
    {exp.company && <p className="text-[12px] text-[#555]">{exp.company}</p>}
    {exp.desc && <p className="text-[12px] leading-[1.5] mt-1 text-[#444]">{exp.desc}</p>}
  </div>
);

const ProjectCard = ({ proj }) => (
  <div className="border border-gray-200 rounded-md p-3 hover:border-[#4F46E5] transition">
    <p className="font-semibold text-[12.5px] text-[#1e1e1e]">{proj.title}</p>
    {proj.techStack && (
      <p className="text-[10.5px] text-[#4F46E5] mt-0.5">
        {Array.isArray(proj.techStack) ? proj.techStack.join(" • ") : String(proj.techStack)}
      </p>
    )}
    {proj.description && (
      <p className="text-[11.5px] leading-[1.5] mt-1.5 text-[#444]">{proj.description}</p>
    )}
    {proj.link && (
      <a
        href={proj.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[11px] text-[#2563eb] hover:underline mt-1 inline-block"
      >
        View Project →
      </a>
    )}
  </div>
);


const Header = ({ data }) => (
  <div className="flex justify-between items-start mb-6">
    <div>
      <h1 className="text-[30px] font-bold text-[#1e1e1e] leading-tight">
        {data.fullName || "YOUR NAME"}
      </h1>
      {data.jobRole && (
        <p className="text-[14px] text-[#4F46E5] font-semibold mt-0.5">{data.jobRole}</p>
      )}
    </div>

    <div className="text-[11px] text-[#555] text-right space-y-1">
      {data.email && (
        <div className="flex items-center justify-end gap-1.5">
          <span>{data.email}</span>
          <BsEnvelope size={11} />
        </div>
      )}
      {data.phone && (
        <div className="flex items-center justify-end gap-1.5">
          <span>{data.phone}</span>
          <BsTelephone size={11} />
        </div>
      )}
      {data.location && (
        <div className="flex items-center justify-end gap-1.5">
          <span>{data.location}</span>
          <BsGeoAlt size={11} />
        </div>
      )}
      <div className="flex items-center justify-end gap-3 mt-1">
        {data.linkedinUrl && (
          <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#4F46E5] hover:underline">
            <BsLinkedin size={14} />
          </a>
        )}
        {data.github && (
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-[#4F46E5] hover:underline">
            <BsGithub size={14} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const PageShell = ({ children, pageNumber, totalPages }) => (
  <div
    className="bg-white text-[#222] mx-auto shadow-lg print:shadow-none"
    style={{
      width: "210mm",
      height: "297mm",
      boxSizing: "border-box",
      fontFamily: "Poppins, Inter, system-ui, sans-serif",
      breakAfter: "page",
      overflow: "hidden",
    }}
  >
    <div className="h-2 w-full bg-[#4F46E5]" />
    <div className="px-8 py-6 flex flex-col" style={{ height: "calc(297mm - 8px)", boxSizing: "border-box" }}>
      <div className="flex-1 overflow-hidden">{children}</div>
      {totalPages > 1 && (
        <div className="text-[10px] text-[#999] text-right pt-2 print:hidden">
          Page {pageNumber} of {totalPages}
        </div>
      )}
    </div>
  </div>
);

// ============================================================
// MAIN COMPONENT
// ============================================================
const ModernTemplate = ({ data = {} }) => {
  const blocks = useMemo(() => buildBlocks(data), [data]);
  const blockRefs = useRef({});
  const headerRef = useRef(null);
  const [pages, setPages] = useState(null);

  useLayoutEffect(() => {
    const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 0;
    const heights = blocks.map((b) => blockRefs.current[b.id]?.offsetHeight || 0);

    const result = [];
    let current = [];
    let used = headerHeight;
    let onFirstPage = true;

    blocks.forEach((block, i) => {
      const h = heights[i];
      const budget = PAGE_CONTENT_BUDGET_PX - (onFirstPage ? headerHeight : 0);
      if (current.length > 0 && used + h > budget) {
        result.push(current);
        current = [];
        used = 0;
        onFirstPage = false;
      }
      current.push(block);
      used += h;
    });
    if (current.length > 0) result.push(current);

    setPages(result.length > 0 ? result : [[]]);
  }, [blocks]);

  return (
    <>
      {/* Hidden measuring pass — same content width as a real page */}
      <div style={{ position: "absolute", top: -99999, left: -99999, visibility: "hidden", pointerEvents: "none" }}>
        <div className="px-8" style={{ width: "210mm", boxSizing: "border-box" }}>
          <div ref={headerRef}>
            <Header data={data} />
          </div>
          {blocks.map((block) => (
            <div key={block.id} ref={(el) => (blockRefs.current[block.id] = el)}>
              {block.render()}
            </div>
          ))}
        </div>
      </div>

      {/* Real, paginated output */}
      {pages &&
        pages.map((pageBlocks, pageIndex) => (
          <div key={pageIndex} className={pageIndex > 0 ? "mt-6 print:mt-0" : ""}>
            <PageShell pageNumber={pageIndex + 1} totalPages={pages.length}>
              {pageIndex === 0 && <Header data={data} />}
              <div>
                {pageBlocks.map((block, idx) => (
                  <div key={block.id} style={{ marginTop: idx === 0 ? 0 : block.sectionStart ? 20 : 12 }}>
                    {block.render()}
                  </div>
                ))}
              </div>
            </PageShell>
          </div>
        ))}

      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
        }
      `}</style>
    </>
  );
};

export default ModernTemplate;