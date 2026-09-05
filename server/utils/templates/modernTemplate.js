// export const modernTemplate = (resume) => {

// const educationHTML = resume.education
// .map(edu => `
// <div class="item">
// <b>${edu.degree}</b>
// <p>${edu.college}</p>
// <span>${edu.year}</span>
// </div>
// `).join("");

// const projectsHTML = resume.projects
// .map(project => `
// <div class="item">
// <b>${project.title}</b>
// <p>${project.description}</p>
// <p class="tech">${project.techStack.join(", ")}</p>
// </div>
// `).join("");

// const experienceHTML = resume.workExperience
// .map(exp => `
// <div class="item">
// <b>${exp.role}</b>
// <p>${exp.company}</p>
// <span>${exp.duration}</span>
// <p>${exp.description}</p>
// </div>
// `).join("");

// const achievementsHTML = resume.achievements
// .map(a => `<li>${a.description}</li>`).join("");

// return `
// <!DOCTYPE html>
// <html>
// <head>

// <style>

// body{
//   margin:0;
//   font-family: "Segoe UI", Arial;
//   background:#f5f6fa;
// }

// .container{
//   width:900px;
//   margin:auto;
//   background:white;
//   display:flex;
//   box-shadow:0 10px 30px rgba(0,0,0,0.1);
// }

// /* LEFT SIDEBAR */

// .sidebar{
//   width:30%;
//   background:#2f3640;
//   color:white;
//   padding:30px;
// }

// .sidebar h1{
//   font-size:22px;
//   margin-bottom:5px;
// }

// .sidebar p{
//   font-size:13px;
//   color:#dcdde1;
// }

// .sidebar h3{
//   margin-top:30px;
//   font-size:16px;
//   border-bottom:1px solid rgba(255,255,255,0.2);
//   padding-bottom:5px;
// }

// .skills span{
//   display:inline-block;
//   background:#40739e;
//   padding:5px 8px;
//   margin:3px;
//   border-radius:4px;
//   font-size:12px;
// }

// /* RIGHT CONTENT */

// .content{
//   width:70%;
//   padding:40px;
// }

// .section{
//   margin-bottom:25px;
// }

// .section h2{
//   font-size:18px;
//   border-left:4px solid #0984e3;
//   padding-left:10px;
//   margin-bottom:10px;
// }

// .item{
//   margin-bottom:12px;
// }

// .item b{
//   font-size:15px;
// }

// .item span{
//   font-size:12px;
//   color:#636e72;
// }

// .tech{
//   font-size:12px;
//   color:#0984e3;
// }

// ul{
//   padding-left:18px;
// }

// </style>
// </head>

// <body>

// <div class="container">

// <div class="sidebar">

// <h1>${resume.fullName}</h1>
// <p>${resume.jobRole}</p>

// <p>${resume.email}</p>
// <p>${resume.phone}</p>
// <p>${resume.location}</p>

// <h3>Skills</h3>
// <div class="skills">
// ${resume.skills.map(skill => `<span>${skill}</span>`).join("")}
// </div>

// <h3>Education</h3>
// ${educationHTML}

// <h3>Links</h3>
// <p>${resume.linkedin}</p>
// <p>${resume.github}</p>

// </div>


// <div class="content">

// <div class="section">
// <h2>Summary</h2>
// <p>${resume.summary}</p>
// </div>

// <div class="section">
// <h2>Work Experience</h2>
// ${experienceHTML}
// </div>

// <div class="section">
// <h2>Projects</h2>
// ${projectsHTML}
// </div>

// <div class="section">
// <h2>Achievements</h2>
// <ul>
// ${achievementsHTML}
// </ul>
// </div>

// </div>

// </div>

// </body>
// </html>
// `;
// };







export const modernTemplate = (resume) => {
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
(edu) => `        <div class="item">           <b>${edu.degree || ""}</b>           <p>${edu.college || ""}</p>
          ${
            edu.startDate || edu.endDate
              ?`<span>${edu.startDate || ""} - ${edu.endDate || ""}</span>`               : ""
          }         </div>
      `
)
.join("");

// =========================================
// PROJECTS
// =========================================

const projectsHTML = projects
.filter((project) => project.title || project.description)
.map(
(project) => ` <div class="item"> <b>${project.title || ""}</b>


      ${
        project.description
          ? `<p>${project.description}</p>`
          : ""
      }

      ${
        Array.isArray(project.techStack) &&
        project.techStack.length > 0
          ? `<p class="tech">${project.techStack.join(", ")}</p>`
          : ""
      }

      ${
        project.link
          ? `<p>
              <a href="${project.link}" target="_blank">
                ${project.link}
              </a>
            </p>`
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
.filter((exp) => exp.company || exp.position || exp.desc)
.map(
(exp) => ` <div class="item"> <b>${exp.position || ""}</b>


      <p>${exp.company || ""}</p>

      ${
        exp.startDate || exp.endDate
          ? `<span>
              ${exp.startDate || ""} -
              ${exp.endDate || "Present"}
            </span>`
          : ""
      }

      ${
        exp.desc
          ? `<p>${exp.desc}</p>`
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
// Supports:
// { description: "..." }
// and simple strings
const description =
typeof achievement === "string"
? achievement
: achievement?.description || "";


  return description
    ? `<li>${description}</li>`
    : "";
})
.join("");


// =========================================
// SKILLS
// =========================================

const skillsHTML = skills
.map((skill) => {
// If skill is an object:
// { category: "Frontend", items: ["React", "JavaScript"] }


  if (skill && typeof skill === "object") {
    const category = skill.category || "";

    const items = Array.isArray(skill.items)
      ? skill.items
      : [];

    if (!category && items.length === 0) {
      return "";
    }

    return `
      <div class="skill-group">
        ${
          category
            ? `<strong>${category}</strong>`
            : ""
        }

        <div class="skill-items">
          ${items
            .map(
              (item) =>
                `<span>${item}</span>`
            )
            .join("")}
        </div>
      </div>
    `;
  }

  // If skill is a simple string
  if (typeof skill === "string") {
    return `<span>${skill}</span>`;
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

<title>${resume.fullName || "Resume"}</title>

<style>

* {
  box-sizing: border-box;
}

@page {
  size: A4;
  margin: 0;
}

body {
  margin: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  background: #f5f6fa;
  color: #222;
}

.container {
  width: 210mm;
  min-height: 297mm;
  margin: auto;
  background: white;
  display: flex;
}

/* =========================================
   LEFT SIDEBAR
========================================= */

.sidebar {
  width: 30%;
  background: #2f3640;
  color: white;
  padding: 30px;
  min-height: 297mm;
  word-wrap: break-word;
}

.sidebar h1 {
  font-size: 22px;
  margin: 0 0 5px 0;
  word-break: break-word;
}

.sidebar p {
  font-size: 13px;
  color: #dcdde1;
  margin: 5px 0;
  word-break: break-word;
}

.sidebar h3 {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  padding-bottom: 5px;
}

.skills {
  margin-top: 5px;
}

.skills span {
  display: inline-block;
  background: #40739e;
  color: white;
  padding: 5px 8px;
  margin: 3px 3px 3px 0;
  border-radius: 4px;
  font-size: 12px;
}

.skill-group {
  margin-bottom: 10px;
}

.skill-group strong {
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
  color: white;
}

.skill-items span {
  display: inline-block;
  background: #40739e;
  color: white;
  padding: 5px 8px;
  margin: 3px 3px 3px 0;
  border-radius: 4px;
  font-size: 12px;
}

.sidebar a {
  color: #dcdde1;
  text-decoration: none;
  word-break: break-word;
}

/* =========================================
   RIGHT CONTENT
========================================= */

.content {
  width: 70%;
  padding: 40px;
  word-wrap: break-word;
}

.section {
  margin-bottom: 25px;
}

.section h2 {
  font-size: 18px;
  border-left: 4px solid #0984e3;
  padding-left: 10px;
  margin-top: 0;
  margin-bottom: 10px;
}

.item {
  margin-bottom: 12px;
}

.item b {
  font-size: 15px;
}

.item p {
  margin: 4px 0;
  font-size: 13px;
  line-height: 1.5;
}

.item span {
  font-size: 12px;
  color: #636e72;
}

.tech {
  font-size: 12px !important;
  color: #0984e3;
}

ul {
  padding-left: 18px;
}

li {
  font-size: 13px;
  margin-bottom: 6px;
  line-height: 1.5;
}

a {
  color: #0984e3;
  text-decoration: none;
  word-break: break-word;
}

/* =========================================
   PRINT
========================================= */

@media print {

  body {
    background: white;
  }

  .container {
    width: 210mm;
    min-height: 297mm;
    box-shadow: none;
  }

  .sidebar {
    min-height: 297mm;
  }

}

</style>

</head>

<body>

<div class="container">

  <!-- =====================================
       LEFT SIDEBAR
  ====================================== -->

  <div class="sidebar">


<h1>
  ${resume.fullName || ""}
</h1>

${
  resume.jobRole
    ? `<p>${resume.jobRole}</p>`
    : ""
}

${
  resume.email
    ? `<p>${resume.email}</p>`
    : ""
}

${
  resume.phone
    ? `<p>${resume.phone}</p>`
    : ""
}

${
  resume.location
    ? `<p>${resume.location}</p>`
    : ""
}


<!-- SKILLS -->

${
  skills.length > 0
    ? `
      <h3>Skills</h3>

      <div class="skills">
        ${skillsHTML}
      </div>
    `
    : ""
}


<!-- EDUCATION -->

${
  educationHTML
    ? `
      <h3>Education</h3>

      ${educationHTML}
    `
    : ""
}


<!-- LINKS -->

${
  resume.linkedinUrl || resume.github
    ? `
      <h3>Links</h3>

      ${
        resume.linkedinUrl
          ? `
            <p>
              <a href="${resume.linkedinUrl}" target="_blank">
                LinkedIn
              </a>
            </p>
          `
          : ""
      }

      ${
        resume.github
          ? `
            <p>
              <a href="${resume.github}" target="_blank">
                GitHub
              </a>
            </p>
          `
          : ""
      }
    `
    : ""
}


  </div>

  <!-- =====================================
       RIGHT CONTENT
  ====================================== -->

  <div class="content">


<!-- SUMMARY -->

${
  resume.professionalSummary
    ? `
      <div class="section">

        <h2>Summary</h2>

        <p>
          ${resume.professionalSummary}
        </p>

      </div>
    `
    : ""
}


<!-- WORK EXPERIENCE -->

${
  experienceHTML
    ? `
      <div class="section">

        <h2>Work Experience</h2>

        ${experienceHTML}

      </div>
    `
    : ""
}


<!-- PROJECTS -->

${
  projectsHTML
    ? `
      <div class="section">

        <h2>Projects</h2>

        ${projectsHTML}

      </div>
    `
    : ""
}


<!-- ACHIEVEMENTS -->

${
  achievementsHTML
    ? `
      <div class="section">

        <h2>Achievements</h2>

        <ul>
          ${achievementsHTML}
        </ul>

      </div>
    `
    : ""
}


  </div>

</div>

</body>
</html>
`;
};
