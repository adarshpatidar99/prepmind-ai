// export const classicTemplate = (resume) => {

//   // Education Section
//   const educationHTML = resume.education
//     .map(
//       (edu) => `
//         <div class="item">
//           <b>${edu.degree}</b> - ${edu.college} (${edu.year})
//         </div>
//       `
//     )
//     .join("");

//   // Projects Section
//   const projectsHTML = resume.projects
//     .map(
//       (project) => `
//         <div class="item">
//           <b>${project.title}</b>
//           <p>${project.description}</p>
//           <p><i>Tech:</i> ${project.techStack.join(", ")}</p>
//           ${
//             project.link
//               ? `<p><a href="${project.link}">${project.link}</a></p>`
//               : ""
//           }
//         </div>                     
//       `
//     )
//     .join("");

//   // Experience Section
//   const experienceHTML = resume.workExperience
//     .map(
//       (exp) => `
//         <div class="item">
//           <b>${exp.company}</b> - ${exp.role}
//           <p>${exp.duration}</p>
//           <p>${exp.description}</p>
//         </div>
//       `
//     )
//     .join("");

//   // Achievements Section
//   const achievementsHTML = resume.achievements
//     .map(
//       (ach) => `
//         <div class="item">
//           • ${ach.description}
//         </div>
//       `
//     )
//     .join("");

//   // Main HTML Template
//   return `
//   <!DOCTYPE html>
//   <html>
//   <head>
//     <meta charset="UTF-8" />

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
//     <h1>${resume.fullName}</h1>

//     <div class="contact">
//       ${resume.email} | ${resume.phone} | ${resume.location}
//       <br/>
//       LinkedIn: ${resume.linkedin} |
//       GitHub: ${resume.github}
//     </div>

//     <!-- Summary -->
//     <div class="section">
//       <h2>Summary</h2>
//       <p>${resume.summary}</p>
//     </div>

//      <!-- Education -->
//     <div class="section">
//       <h2>Education</h2>
//       ${educationHTML}
//     </div>

//      <!-- Experience -->
//     <div class="section">
//       <h2>Work Experience</h2>
//       ${experienceHTML}
//     </div>

//     <!-- Skills -->
//     <div class="section">
//       <h2>Skills</h2>
//       <div class="skills">
//         ${resume.skills
//           .map((skill) => `<span>${skill}</span>`)
//           .join("")}
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




export const classicTemplate = (resume = {}) => {

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

  const skills = Array.isArray(resume.skills)
    ? resume.skills
    : [];

  const achievements = Array.isArray(resume.achievements)
    ? resume.achievements
    : [];


  // =========================================
  // EDUCATION
  // =========================================

  const educationHTML = education
    .filter(
      (edu) =>
        edu.degree ||
        edu.college ||
        edu.startDate ||
        edu.endDate
    )
    .map(
      (edu) => `
        <div class="item">
          ${
            edu.degree
              ? `<b>${edu.degree}</b>`
              : ""
          }

          ${
            edu.college
              ? `<span> - ${edu.college}</span>`
              : ""
          }

          ${
            edu.startDate || edu.endDate
              ? `<span> (${edu.startDate || ""} - ${
                  edu.endDate || ""
                })</span>`
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
    .filter(
      (project) =>
        project.title ||
        project.description ||
        project.techStack?.length ||
        project.link
    )
    .map(
      (project) => `
        <div class="item">

          ${
            project.title
              ? `<b>${project.title}</b>`
              : ""
          }

          ${
            project.startDate || project.endDate
              ? `
                <span class="date">
                  ${project.startDate || ""} - ${
                    project.endDate || ""
                  }
                </span>
              `
              : ""
          }

          ${
            project.description
              ? `<p>${project.description}</p>`
              : ""
          }

          ${
            Array.isArray(project.techStack) &&
            project.techStack.length > 0
              ? `
                <p>
                  <i>Tech:</i>
                  ${project.techStack.join(", ")}
                </p>
              `
              : ""
          }

          ${
            project.link
              ? `
                <p>
                  <a
                    href="${project.link}"
                    target="_blank"
                  >
                    ${project.link}
                  </a>
                </p>
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
        exp.desc ||
        exp.startDate ||
        exp.endDate
    )
    .map(
      (exp) => `
        <div class="item">

          <div class="experience-header">

            ${
              exp.position
                ? `<b>${exp.position}</b>`
                : ""
            }

            ${
              exp.startDate || exp.endDate
                ? `
                  <span class="date">
                    ${exp.startDate || ""} - ${
                      exp.endDate || "Present"
                    }
                  </span>
                `
                : ""
            }

          </div>

          ${
            exp.company
              ? `<p class="company">${exp.company}</p>`
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
  // SKILLS
  // =========================================

  const skillsHTML = skills
    .map((skill) => {

      // If skill is an object:
      // { category: "Frontend", items: ["React", "HTML"] }

      if (
        skill &&
        typeof skill === "object" &&
        !Array.isArray(skill)
      ) {

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
                ? `<b>${category}:</b>`
                : ""
            }

            ${
              items.length > 0
                ? ` ${items.join(", ")}`
                : ""
            }

          </div>
        `;
      }

      // If skill is a simple string
      if (typeof skill === "string") {
        return `
          <span>${skill}</span>
        `;
      }

      return "";
    })
    .join("");


  // =========================================
  // ACHIEVEMENTS
  // =========================================

  const achievementsHTML = achievements
    .map((achievement) => {

      // Current structure:
      // { description: "..." }

      if (
        achievement &&
        typeof achievement === "object"
      ) {
        return achievement.description
          ? `
            <div class="item">
              • ${achievement.description}
            </div>
          `
          : "";
      }

      // Also support simple strings
      if (typeof achievement === "string") {
        return `
          <div class="item">
            • ${achievement}
          </div>
        `;
      }

      return "";
    })
    .join("");


  // =========================================
  // CONTACT INFORMATION
  // =========================================

  const contactParts = [
    resume.email,
    resume.phone,
    resume.location,
  ].filter(Boolean);


  // =========================================
  // SOCIAL LINKS
  // =========================================

  const socialLinks = [];

  if (resume.linkedinUrl) {
    socialLinks.push(
      `<a href="${resume.linkedinUrl}" target="_blank">
        LinkedIn
      </a>`
    );
  }

  if (resume.github) {
    socialLinks.push(
      `<a href="${resume.github}" target="_blank">
        GitHub
      </a>`
    );
  }


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

      body {
        font-family: Arial, sans-serif;
        padding: 40px;
        color: #222;
        line-height: 1.6;
        margin: 0;
      }

      h1 {
        text-align: center;
        margin-bottom: 5px;
      }

      .contact {
        text-align: center;
        font-size: 14px;
        margin-bottom: 25px;
      }

      .social {
        margin-top: 5px;
      }

      .section {
        margin-top: 25px;
      }

      .section h2 {
        border-bottom: 2px solid #333;
        padding-bottom: 5px;
        margin-bottom: 10px;
        font-size: 18px;
      }

      .item {
        margin-bottom: 10px;
      }

      .experience-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
      }

      .company {
        margin: 2px 0;
        color: #555;
      }

      .date {
        font-size: 13px;
        color: #666;
        white-space: nowrap;
      }

      .skills {
        font-size: 13px;
      }

      .skill-group {
        margin-bottom: 6px;
      }

      a {
        color: #0066cc;
        text-decoration: none;
      }

      p {
        margin-top: 5px;
        margin-bottom: 5px;
      }

    </style>

  </head>


  <body>


    <!-- ========================================= -->
    <!-- HEADER -->
    <!-- ========================================= -->

    <h1>
      ${resume.fullName || ""}
    </h1>


    <div class="contact">

      ${
        contactParts.length > 0
          ? contactParts.join(" | ")
          : ""
      }

      ${
        socialLinks.length > 0
          ? `
            <div class="social">
              ${socialLinks.join(" | ")}
            </div>
          `
          : ""
      }

    </div>


    <!-- ========================================= -->
    <!-- SUMMARY -->
    <!-- ========================================= -->

    ${
      resume.professionalSummary
        ? `
          <div class="section">

            <h2>
              Summary
            </h2>

            <p>
              ${resume.professionalSummary}
            </p>

          </div>
        `
        : ""
    }


    <!-- ========================================= -->
    <!-- EDUCATION -->
    <!-- ========================================= -->

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


    <!-- ========================================= -->
    <!-- WORK EXPERIENCE -->
    <!-- ========================================= -->

    ${
      experienceHTML
        ? `
          <div class="section">

            <h2>
              Work Experience
            </h2>

            ${experienceHTML}

          </div>
        `
        : ""
    }


    <!-- ========================================= -->
    <!-- SKILLS -->
    <!-- ========================================= -->

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


    <!-- ========================================= -->
    <!-- PROJECTS -->
    <!-- ========================================= -->

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


    <!-- ========================================= -->
    <!-- ACHIEVEMENTS -->
    <!-- ========================================= -->

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
