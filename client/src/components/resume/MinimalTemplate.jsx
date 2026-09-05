import React, {
  useState,
  useLayoutEffect,
  useRef,
  useMemo,
} from "react";

import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
} from "react-icons/bs";

/* =========================================================
   A4 PAGE SETTINGS
========================================================= */

const MM_TO_PX = 96 / 25.4;

const PAGE_HEIGHT_PX = 297 * MM_TO_PX;

// py-6 = 24px top + 24px bottom
const PAGE_PAD_Y_PX = 24;

const PAGE_CONTENT_BUDGET_PX =
  PAGE_HEIGHT_PX - PAGE_PAD_Y_PX * 2;


/* =========================================================
   CREATE UNIQUE BLOCK ID
========================================================= */

let uid = 0;

const nextId = () => {
  uid += 1;
  return `blk-${uid}`;
};


/* =========================================================
   SECTION HEADING
========================================================= */

const SectionHeading = ({ children }) => (
  <h2 className="text-[13px] font-semibold uppercase tracking-[1.2px] text-[#1a1a1a] mb-1.5 border-b border-gray-200 pb-0.5">
    {children}
  </h2>
);


/* =========================================================
   EXPERIENCE ITEM
========================================================= */

const ExperienceItem = ({ exp }) => (
  <div className="mb-2.5">
    <div className="flex justify-between items-baseline gap-4">

      <p className="font-semibold text-[13px]">
        {exp.position}
      </p>

      <p className="text-[11px] text-[#666] whitespace-nowrap">
        {exp.startDate} - {exp.endDate || "Present"}
      </p>

    </div>

    <p className="text-[12px] text-[#555] italic">
      {exp.company}
    </p>

    {exp.desc && (
      <p className="text-[12px] leading-[1.4] mt-0.5 text-[#333]">
        {exp.desc}
      </p>
    )}
  </div>
);


/* =========================================================
   PROJECT ITEM
========================================================= */

// const ProjectItem = ({ proj }) => (
//   <div className="mb-2.5">

//     <div className="flex justify-between items-baseline gap-4">

//       <p className="font-semibold text-[13px]">
//         {proj.title}
//       </p>

//       <p className="text-[11px] text-[#666] whitespace-nowrap">
//         {proj.startDate} - {proj.endDate}
//       </p>

//     </div>

//     {proj.techStack && (
//       <p className="text-[11.5px] text-[#555] italic">
//         Tech:{" "}
//         {Array.isArray(proj.techStack)
//           ? proj.techStack.join(", ")
//           : proj.techStack}
//       </p>
//     )}

//     {proj.description && (
//       <p className="text-[12px] leading-[1.4] mt-0.5 text-[#333]">
//         {proj.description}
//       </p>
//     )}

//     {proj.link && (
//       <a
//         href={proj.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-[11.5px] text-[#2563eb] hover:underline font-medium"
//       >
//         {proj.link}
//       </a>
//     )}

//   </div>
// );


const ProjectItem = ({ proj }) => (

  <div className="mb-2.5">

<div className="flex justify-between items-baseline gap-4">

  <p className="font-semibold text-[13px]">
    {proj.title}
  </p>

  <p className="text-[11px] text-[#666] whitespace-nowrap">
    {proj.startDate} - {proj.endDate}
  </p>

</div>

<div className="flex justify-between items-center gap-4">

  {proj.techStack && (
    <p className="text-[11.5px] text-[#555] italic">
      Tech:{" "}
      {Array.isArray(proj.techStack)
        ? proj.techStack.join(", ")
        : proj.techStack}
    </p>
  )}

  {proj.link && (
    <a
      href={proj.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[11.5px] text-[#2563eb] hover:underline font-medium whitespace-nowrap"
    >
      Live link
    </a>
  )}

</div>

{proj.description && (
  <p className="text-[12px] leading-[1.4] mt-0.5 text-[#333]">
    {proj.description}
  </p>
)}


  </div>
);





/* =========================================================
   EDUCATION ITEM
========================================================= */

const EducationItem = ({ edu }) => (
  <div className="mb-2">

    <div className="flex justify-between items-start gap-4">

      <div>

        <p className="font-semibold text-[13px]">
          {edu.degree}
        </p>

        <p className="text-[12px] text-[#555]">
          {edu.college}
        </p>

      </div>

      <p className="text-[11px] text-[#666] whitespace-nowrap">
        {edu.startDate} - {edu.endDate}
      </p>

    </div>

  </div>
);


/* =========================================================
   SKILLS
========================================================= */

const SkillsBlock = ({ skills }) => (
  <p className="text-[12px] leading-[1.4] text-[#333]">

    {Array.isArray(skills)
      ? skills.map((skill, index) => (
          <React.Fragment key={index}>

            {index > 0 && " • "}

            {skill && typeof skill === "object" ? (
              <span>

                {skill.category && (
                  <b>{skill.category}:</b>
                )}

                {" "}

                {Array.isArray(skill.items)
                  ? skill.items.join(", ")
                  : skill.items}

              </span>
            ) : (
              <span>{skill}</span>
            )}

          </React.Fragment>
        ))
      : skills}

  </p>
);


/* =========================================================
   HEADER
========================================================= */

const Header = ({ data }) => (
  <div className="mb-5">

    {/* NAME */}

    <h1 className="text-[32px] font-bold tracking-tight leading-tight">
      {data.fullName || "YOUR NAME"}
    </h1>


    {/* JOB ROLE */}

    {data.jobRole && (
      <p className="text-[15px] text-[#555] mt-0.5 font-medium">
        {data.jobRole}
      </p>
    )}


    {/* CONTACT INFORMATION */}

    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-2 text-[11.5px] text-[#666]">

      {data.email && (
        <div className="flex items-center gap-1.5">
          <BsEnvelope size={12} />
          <span>{data.email}</span>
        </div>
      )}


      {data.phone && (
        <div className="flex items-center gap-1.5">
          <BsTelephone size={12} />
          <span>{data.phone}</span>
        </div>
      )}


      {data.location && (
        <div className="flex items-center gap-1.5">
          <BsGeoAlt size={12} />
          <span>{data.location}</span>
        </div>
      )}


      {data.linkedinUrl && (
        <a
          href={data.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:underline"
        >
          <BsLinkedin size={12} />
          <span>LinkedIn</span>
        </a>
      )}


      {data.github && (
        <a
          href={data.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:underline"
        >
          <BsGithub size={12} />
          <span>GitHub</span>
        </a>
      )}

    </div>

  </div>
);


/* =========================================================
   BUILD CONTENT BLOCKS
========================================================= */

function buildBlocks(data = {}) {

  const blocks = [];


  /* ================= SUMMARY ================= */

  if (data.professionalSummary) {

    blocks.push({
      id: nextId(),
      section: "summary",
      sectionStart: true,

      render: () => (
        <section>

          <SectionHeading>
            Professional Summary
          </SectionHeading>

          <p className="text-[12px] leading-[1.4] text-[#333] text-justify">
            {data.professionalSummary}
          </p>

        </section>
      ),
    });

  }


  /* ================= EXPERIENCE ================= */

  const experiences = (data.experiences || [])
    .filter((e) => e.company || e.position);

  experiences.forEach((exp, index) => {

    blocks.push({
      id: nextId(),
      section: "experience",
      sectionStart: index === 0,

      render: () => (
        <>

          {index === 0 && (
            <SectionHeading>
              Work Experience
            </SectionHeading>
          )}

          <ExperienceItem exp={exp} />

        </>
      ),
    });

  });


  /* ================= PROJECTS ================= */

  const projects = (data.projects || [])
    .filter((p) => p.title || p.description);

  projects.forEach((proj, index) => {

    blocks.push({
      id: nextId(),
      section: "projects",
      sectionStart: index === 0,

      render: () => (
        <>

          {index === 0 && (
            <SectionHeading>
              Projects
            </SectionHeading>
          )}

          <ProjectItem proj={proj} />

        </>
      ),
    });

  });


  /* ================= EDUCATION ================= */

  const education = (data.education || [])
    .filter((e) => e.college || e.degree);

  education.forEach((edu, index) => {

    blocks.push({
      id: nextId(),
      section: "education",
      sectionStart: index === 0,

      render: () => (
        <>

          {index === 0 && (
            <SectionHeading>
              Education
            </SectionHeading>
          )}

          <EducationItem edu={edu} />

        </>
      ),
    });

  });


  /* ================= SKILLS ================= */

  if (
    data.skills &&
    (
      Array.isArray(data.skills)
        ? data.skills.length > 0
        : true
    )
  ) {

    blocks.push({
      id: nextId(),
      section: "skills",
      sectionStart: true,

      render: () => (
        <section>

          <SectionHeading>
            Technical Skills
          </SectionHeading>

          <SkillsBlock
            skills={data.skills}
          />

        </section>
      ),
    });

  }


  /* ================= ACHIEVEMENTS ================= */

  if (data.achievements) {

    blocks.push({
      id: nextId(),
      section: "achievements",
      sectionStart: true,

      render: () => (
        <section>

          <SectionHeading>
            Achievements
          </SectionHeading>

          <ul className="list-disc list-outside ml-4 text-[12px] leading-[1.4] text-[#333] space-y-0.5">

            {data.achievements
              .split("\n")
              .map(
                (achievement, index) =>
                  achievement.trim() && (
                    <li key={index}>
                      {achievement}
                    </li>
                  )
              )}

          </ul>

        </section>
      ),
    });

  }


  return blocks;
}


/* =========================================================
   A4 PAGE
========================================================= */

const PageShell = ({
  children,
  pageNumber,
  totalPages,
}) => (

  <div
    className="
      bg-white
      text-[#1a1a1a]
      mx-auto
      shadow-md
      border
      border-gray-200
      print:border-none
      print:shadow-none
      print:mx-0
      relative
    "
    style={{
      width: "210mm",
      height: "297mm",
      boxSizing: "border-box",
      fontFamily:
        "Inter, Poppins, system-ui, sans-serif",
      letterSpacing: "0.01em",
      breakAfter: "page",
      overflow: "hidden",
    }}
  >

    <div
      className="px-8 py-6 h-full flex flex-col"
      style={{
        boxSizing: "border-box",
      }}
    >

      <div className="flex-1 overflow-hidden">

        {children}

      </div>


      {/* PAGE NUMBER */}

      {totalPages > 1 && (

        <div className="text-[10px] text-[#999] text-right pt-1 print:hidden">

          Page {pageNumber} of {totalPages}

        </div>

      )}

    </div>

  </div>
);


/* =========================================================
   MAIN COMPONENT
========================================================= */

const MinimalTemplate = ({
  data = {},
}) => {

  /* CREATE CONTENT BLOCKS */

  const blocks = useMemo(
    () => buildBlocks(data),
    [data]
  );


  /* REFERENCES FOR MEASURING */

  const blockRefs = useRef({});

  const headerRef = useRef(null);


  /* PAGINATED PAGES */

  const [pages, setPages] = useState(null);


  /* =======================================================
     CALCULATE PAGE BREAKS
  ======================================================= */

  useLayoutEffect(() => {

    const calculatePages = () => {

      const headerHeight =
        headerRef.current
          ? headerRef.current.offsetHeight
          : 0;


      const blockHeights = blocks.map(
        (block) =>
          blockRefs.current[block.id]
            ? blockRefs.current[block.id].offsetHeight
            : 0
      );


      const result = [];

      let currentPage = [];

      let usedHeight = headerHeight;


      blocks.forEach((block, index) => {

        const blockHeight =
          blockHeights[index];


        /*
          First page contains the header.
          Other pages do not contain the header.
        */

        const pageLimit =
          result.length === 0
            ? PAGE_CONTENT_BUDGET_PX
            : PAGE_CONTENT_BUDGET_PX;


        /*
          Add the block to a new page
          when it does not fit.
        */

        if (
          currentPage.length > 0 &&
          usedHeight + blockHeight > pageLimit
        ) {

          result.push(currentPage);

          currentPage = [];

          usedHeight = 0;

        }


        currentPage.push(block);

        usedHeight += blockHeight;

      });


      /* Add final page */

      if (currentPage.length > 0) {

        result.push(currentPage);

      }


      setPages(
        result.length > 0
          ? result
          : [[]]
      );

    };


    /*
      Wait for browser to finish
      rendering hidden content.
    */

    requestAnimationFrame(
      calculatePages
    );


  }, [blocks]);


  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>

      {/* ===================================================
          HIDDEN MEASURING CONTENT
      =================================================== */}

      <div
        style={{
          position: "absolute",
          top: "-99999px",
          left: "-99999px",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >

        <div
          className="px-8"
          style={{
            width: "210mm",
            boxSizing: "border-box",
          }}
        >

          {/* HEADER */}

          <div ref={headerRef}>

            <Header data={data} />

          </div>


          {/* CONTENT BLOCKS */}

          {blocks.map((block) => (

            <div
              key={block.id}
              ref={(element) => {

                if (element) {

                  blockRefs.current[
                    block.id
                  ] = element;

                }

              }}
            >

              {/* IMPORTANT:
                  Use block.render()
                  NOT block.show()
              */}

              {block.render()}

            </div>

          ))}

        </div>

      </div>


      {/* ===================================================
          REAL PAGINATED RESUME
      =================================================== */}

      {pages &&
        pages.map(
          (pageBlocks, pageIndex) => (

            <div
              key={pageIndex}
              className={
                pageIndex > 0
                  ? "mt-4 print:mt-0"
                  : ""
              }
            >

              <PageShell
                pageNumber={
                  pageIndex + 1
                }
                totalPages={
                  pages.length
                }
              >

                {/* HEADER ONLY ON FIRST PAGE */}

                {pageIndex === 0 && (
                  <Header data={data} />
                )}


                {/* PAGE CONTENT */}

                <div className="space-y-3">

                  {pageBlocks.map(
                    (block, index) => (

                      <div
                        key={block.id}
                        style={{
                          marginTop:
                            index === 0
                              ? 0
                              : block.sectionStart
                              ? 14
                              : 0,
                        }}
                      >

                        {/* IMPORTANT:
                            Use block.render()
                            NOT block.show()
                        */}

                        {block.render()}

                      </div>

                    )
                  )}

                </div>

              </PageShell>

            </div>

          )
        )}


      {/* ===================================================
          PRINT SETTINGS
      =================================================== */}

      <style>
        {`

          @media print {

            @page {
              size: A4;
              margin: 0;
            }

            body {
              margin: 0;
              padding: 0;
              background: white;
            }

            a {
              color: inherit !important;
              text-decoration: none !important;
            }

            .resume-page {
              box-shadow: none;
              border: none;
            }

          }

        `}
      </style>

    </>
  );
};


export default MinimalTemplate;
