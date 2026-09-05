// export const minimalTemplate = (resume) => {

//   // Education Section
//   const educationHTML = (resume.education || [])
//     .map(
//       (edu) => `
//         <div class="item">
//           <b>${edu.degree || ""}</b> - ${edu.college || ""} (${edu.year || ""})
//         </div>
//       `
//     )
//     .join("");

//   // Projects Section
//   const projectsHTML = (resume.projects || [])
//     .map(
//       (project) => `
//         <div class="item">
//           <b>${project.title || ""}</b>
//           <p>${project.description || ""}</p>
//           <p><i>Tech:</i> ${(project.techStack || []).join(", ")}</p>
//           ${
//             project.link
//               ? `<p><a href="${project.link}" target="_blank">${project.link}</a></p>`
//               : ""
//           }
//         </div>
//       `
//     )
//     .join("");

//   // Experience Section
//   const experienceHTML = (resume.workExperience || [])
//     .map(
//       (exp) => `
//         <div class="item">
//           <b>${exp.company || ""}</b> - ${exp.role || ""}
//           <p>${exp.duration || ""}</p>
//           <p>${exp.description || ""}</p>
//         </div>
//       `
//     )
//     .join("");

//   // Achievements Section
//   const achievementsHTML = (resume.achievements || [])
//     .map(
//       (ach) => `
//         <div class="item">
//           • ${ach.description || ""}
//         </div>
//       `
//     )
//     .join("");

//   // Skills Section
//   const skillsHTML = (resume.skills || [])
//     .map((skill) => `<span>${skill}</span>`)
//     .join("");

//   return `
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <meta charset="UTF-8"/>

//     <style>

//       body {
//         font-family: Arial, sans-serif;
//         padding: 40px;
//         color: #222;
//         line-height: 1.6;
//       }

//       h1 {
//         text-align: center;
//         margin-bottom: 5px;
//       }

//       .contact {
//         text-align: center;
//         font-size: 14px;
//         margin-bottom: 25px;
//       }

//       .section {
//         margin-top: 25px;
//       }

//       .section h2 {
//         border-bottom: 2px solid #333;
//         padding-bottom: 5px;
//         margin-bottom: 10px;
//         font-size: 18px;
//       }

//       .item {
//         margin-bottom: 10px;
//       }

//       .skills span {
//         display: inline-block;
//         background: #f2f2f2;
//         padding: 5px 10px;
//         margin: 3px;
//         border-radius: 4px;
//         font-size: 13px;
//       }

//       a {
//         color: #0066cc;
//         text-decoration: none;
//       }

//     </style>
//   </head>

//   <body>

//     <!-- Header -->
//     <h1>${resume.fullName || ""}</h1>

//     <div class="contact">
//       ${resume.email || ""} | ${resume.phone || ""} | ${resume.location || ""}
//       <br/>
//       LinkedIn: ${resume.linkedin || ""} |
//       GitHub: ${resume.github || ""}
//     </div>

//     <!-- Summary -->
//     <div class="section">
//       <h2>Summary</h2>
//       <p>${resume.summary || ""}</p>
//     </div>

//     <!-- Education -->
//     <div class="section">
//       <h2>Education</h2>
//       ${educationHTML}
//     </div>

//     <!-- Experience -->
//     <div class="section">
//       <h2>Work Experience</h2>
//       ${experienceHTML}
//     </div>

//     <!-- Skills -->
//     <div class="section">
//       <h2>Skills</h2>
//       <div class="skills">
//         ${skillsHTML}
//       </div>
//     </div>

//     <!-- Projects -->
//     <div class="section">
//       <h2>Projects</h2>
//       ${projectsHTML}
//     </div>

//     <!-- Achievements -->
//     <div class="section">
//       <h2>Achievements</h2>
//       ${achievementsHTML}
//     </div>

//   </body>
//   </html>
//   `;
// };






// export const minimalTemplate = (resume) => {

//   const educationHTML = resume.education
//     .map(
//       (edu) => `
//         <div class="item">
//           <b>${edu.degree}</b>, ${edu.college}
//           <div class="sub">${edu.year}</div>
//         </div>
//       `
//     )
//     .join("");

//   const projectsHTML = resume.projects
//     .map(
//       (project) => `
//         <div class="item">
//           <b>${project.title}</b>
//           <div class="sub">${project.description}</div>
//           <div class="tech">${project.techStack.join(", ")}</div>
//         </div>
//       `
//     )
//     .join("");

//   const experienceHTML = resume.workExperience
//     .map(
//       (exp) => `
//         <div class="item">
//           <b>${exp.role}</b> — ${exp.company}
//           <div class="sub">${exp.duration}</div>
//           <div class="sub">${exp.description}</div>
//         </div>
//       `
//     )
//     .join("");

//   const achievementsHTML = resume.achievements
//     .map(
//       (ach) => `
//         <div class="item">• ${ach.description}</div>
//       `
//     )
//     .join("");

//   return `
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <meta charset="UTF-8" />

//     <style>

//       body{
//         font-family: Helvetica, Arial, sans-serif;
//         padding:60px;
//         color:#111;
//         line-height:1.6;
//       }

//       h1{
//         font-size:32px;
//         margin-bottom:5px;
//       }

//       .contact{
//         font-size:14px;
//         color:#555;
//         margin-bottom:35px;
//       }

//       .section{
//         margin-bottom:30px;
//       }

//       .section h2{
//         font-size:13px;
//         letter-spacing:1px;
//         text-transform:uppercase;
//         color:#444;
//         margin-bottom:10px;
//       }

//       .item{
//         margin-bottom:12px;
//       }

//       .sub{
//         font-size:14px;
//         color:#555;
//       }

//       .tech{
//         font-size:13px;
//         color:#333;
//       }

//       .skills span{
//         margin-right:12px;
//         font-size:14px;
//       }

//       a{
//         color:#000;
//         text-decoration:none;
//       }

//     </style>
//   </head>

//   <body>

//     <h1>${resume.fullName}</h1>

//     <div class="contact">
//       ${resume.email} | ${resume.phone} | ${resume.location}
//       <br/>
//       ${resume.linkedin} | ${resume.github}
//     </div>

//     <div class="section">
//       <h2>Summary</h2>
//       <div class="sub">${resume.summary}</div>
//     </div>

//     <div class="section">
//       <h2>Experience</h2>
//       ${experienceHTML}
//     </div>

//     <div class="section">
//       <h2>Projects</h2>
//       ${projectsHTML}
//     </div>

//     <div class="section">
//       <h2>Education</h2>
//       ${educationHTML}
//     </div>

//     <div class="section">
//       <h2>Skills</h2>
//       <div class="skills">
//         ${resume.skills.map(skill => `<span>${skill}</span>`).join("")}
//       </div>
//     </div>

//     <div class="section">
//       <h2>Achievements</h2>
//       ${achievementsHTML}
//     </div>

//   </body>
//   </html>
//   `;
// };




export const minimalTemplate = (resume) => {
// =========================================
// SAFE DATA
// =========================================

const education = Array.isArray(resume.education)
? resume.education
: [];

const projects = Array.isArray(resume.projects)
? resume.projects
: [];

const experiences = Array.isArray(resume.experiences)
? resume.experiences
: [];

const achievements = Array.isArray(resume.achievements)
? resume.achievements
: [];

const skills = Array.isArray(resume.skills)
? resume.skills
: [];

// =========================================
// EDUCATION
// =========================================

const educationHTML = education
.filter((edu) => edu.degree || edu.college)
.map(
(edu) => ` <div class="item">


      ${
        edu.degree
          ? `<b>${edu.degree}</b>`
          : ""
      }

      ${
        edu.college
          ? `, ${edu.college}`
          : ""
      }

      ${
        edu.startDate || edu.endDate
          ? `
            <div class="sub">
              ${edu.startDate || ""} -
              ${edu.endDate || ""}
            </div>
          `
          : ""
      }

    </div>
  `
)
.join("");


// =========================================
// PROJECTS
// =========================================

const projectsHTML = projects
.filter((project) => project.title || project.description)
.map(
(project) => ` <div class="item">


      ${
        project.title
          ? `<b>${project.title}</b>`
          : ""
      }

      ${
        project.description
          ? `
            <div class="sub">
              ${project.description}
            </div>
          `
          : ""
      }

      ${
        Array.isArray(project.techStack) &&
        project.techStack.length > 0
          ? `
            <div class="tech">
              Tech: ${project.techStack.join(", ")}
            </div>
          `
          : ""
      }

      ${
        project.link
          ? `
            <div class="project-link">
              <a href="${project.link}" target="_blank">
                ${project.link}
              </a>
            </div>
          `
          : ""
      }

    </div>
  `
)
.join("");


// =========================================
// WORK EXPERIENCE
// =========================================

const experienceHTML = experiences
.filter(
(exp) =>
exp.company ||
exp.position ||
exp.desc
)
.map(
(exp) => ` <div class="item">


      ${
        exp.position
          ? `<b>${exp.position}</b>`
          : ""
      }

      ${
        exp.company
          ? ` — ${exp.company}`
          : ""
      }

      ${
        exp.startDate || exp.endDate
          ? `
            <div class="sub">
              ${exp.startDate || ""} -
              ${exp.endDate || "Present"}
            </div>
          `
          : ""
      }

      ${
        exp.desc
          ? `
            <div class="sub">
              ${exp.desc}
            </div>
          `
          : ""
      }

    </div>
  `
)
.join("");


// =========================================
// ACHIEVEMENTS
// =========================================

const achievementsHTML = achievements
.map((achievement) => {


  const description =
    typeof achievement === "string"
      ? achievement
      : achievement?.description || "";

  return description
    ? `
      <div class="item">
        • ${description}
      </div>
    `
    : "";

})
.join("");


// =========================================
// SKILLS
// =========================================

const skillsHTML = skills
.map((skill) => {


  // Handle object:
  // {
  //   category: "Frontend",
  //   items: ["React", "JavaScript"]
  // }

  if (
    skill &&
    typeof skill === "object"
  ) {

    const category =
      skill.category || "";

    const items =
      Array.isArray(skill.items)
        ? skill.items
        : [];

    if (
      !category &&
      items.length === 0
    ) {
      return "";
    }

    return `
      <div class="skill-group">

        ${
          category
            ? `
              <b>${category}:</b>
            `
            : ""
        }

        ${
          items.length > 0
            ? `
              <span>
                ${items.join(", ")}
              </span>
            `
            : ""
        }

      </div>
    `;
  }

  // Handle simple string
  if (typeof skill === "string") {
    return `
      <span>
        ${skill}
      </span>
    `;
  }

  return "";

})
.join("");


// =========================================
// MAIN HTML
// =========================================

return `

  <!DOCTYPE html>

  <html>

  <head>


<meta charset="UTF-8" />

<title>
  ${resume.fullName || "Resume"}
</title>

<style>

  * {
    box-sizing: border-box;
  }

  @page {
    size: A4;
    margin: 0;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    padding: 60px;
    color: #111;
    line-height: 1.6;
    margin: 0;
  }

  h1 {
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 5px;
  }

  .job-role {
    font-size: 15px;
    color: #444;
    margin-bottom: 5px;
  }

  .contact {
    font-size: 14px;
    color: #555;
    margin-bottom: 35px;
    word-break: break-word;
  }

  .contact a {
    color: #000;
    text-decoration: none;
  }

  .section {
    margin-bottom: 30px;
  }

  .section h2 {
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #444;
    margin-top: 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 4px;
  }

  .item {
    margin-bottom: 12px;
  }

  .item b {
    font-size: 14px;
  }

  .sub {
    font-size: 14px;
    color: #555;
  }

  .tech {
    font-size: 13px;
    color: #333;
  }

  .project-link {
    font-size: 13px;
    margin-top: 3px;
  }

  .skills {
    font-size: 14px;
  }

  .skill-group {
    margin-bottom: 6px;
  }

  .skill-group b {
    font-size: 14px;
  }

  .skills span {
    margin-right: 12px;
    font-size: 14px;
  }

  a {
    color: #000;
    text-decoration: none;
    word-break: break-word;
  }

</style>


  </head>

  <body>


<!-- =====================================
     HEADER
====================================== -->

<h1>
  ${resume.fullName || ""}
</h1>


${
  resume.jobRole
    ? `
      <div class="job-role">
        ${resume.jobRole}
      </div>
    `
    : ""
}


<!-- =====================================
     CONTACT
====================================== -->

<div class="contact">

  ${
    resume.email
      ? `${resume.email}`
      : ""
  }

  ${
    resume.phone
      ? ` | ${resume.phone}`
      : ""
  }

  ${
    resume.location
      ? ` | ${resume.location}`
      : ""
  }

  ${
    resume.linkedinUrl
      ? `
        <br/>
        <a
          href="${resume.linkedinUrl}"
          target="_blank"
        >
          LinkedIn
        </a>
      `
      : ""
  }

  ${
    resume.github
      ? `
        |
        <a
          href="${resume.github}"
          target="_blank"
        >
          GitHub
        </a>
      `
      : ""
  }

</div>


<!-- =====================================
     SUMMARY
====================================== -->

${
  resume.professionalSummary
    ? `
      <div class="section">

        <h2>
          Summary
        </h2>

        <div class="sub">
          ${resume.professionalSummary}
        </div>

      </div>
    `
    : ""
}


<!-- =====================================
     EXPERIENCE
====================================== -->

${
  experienceHTML
    ? `
      <div class="section">

        <h2>
          Experience
        </h2>

        ${experienceHTML}

      </div>
    `
    : ""
}


<!-- =====================================
     PROJECTS
====================================== -->

${
  projectsHTML
    ? `
      <div class="section">

        <h2>
          Projects
        </h2>

        ${projectsHTML}

      </div>
    `
    : ""
}


<!-- =====================================
     EDUCATION
====================================== -->

${
  educationHTML
    ? `
      <div class="section">

        <h2>
          Education
        </h2>

        ${educationHTML}

      </div>
    `
    : ""
}


<!-- =====================================
     SKILLS
====================================== -->

${
  skillsHTML
    ? `
      <div class="section">

        <h2>
          Skills
        </h2>

        <div class="skills">
          ${skillsHTML}
        </div>

      </div>
    `
    : ""
}


<!-- =====================================
     ACHIEVEMENTS
====================================== -->

${
  achievementsHTML
    ? `
      <div class="section">

        <h2>
          Achievements
        </h2>

        ${achievementsHTML}

      </div>
    `
    : ""
}


  </body>

  </html>
  `;
};

