export const classicTemplate = (resume) => {

  // Education Section
  const educationHTML = resume.education
    .map(
      (edu) => `
        <div class="item">
          <b>${edu.degree}</b> - ${edu.college} (${edu.year})
        </div>
      `
    )
    .join("");

  // Projects Section
  const projectsHTML = resume.projects
    .map(
      (project) => `
        <div class="item">
          <b>${project.title}</b>
          <p>${project.description}</p>
          <p><i>Tech:</i> ${project.techStack.join(", ")}</p>
          ${
            project.link
              ? `<p><a href="${project.link}">${project.link}</a></p>`
              : ""
          }
        </div>
      `
    )
    .join("");

  // Experience Section
  const experienceHTML = resume.workExperience
    .map(
      (exp) => `
        <div class="item">
          <b>${exp.company}</b> - ${exp.role}
          <p>${exp.duration}</p>
          <p>${exp.description}</p>
        </div>
      `
    )
    .join("");

  // Achievements Section
  const achievementsHTML = resume.achievements
    .map(
      (ach) => `
        <div class="item">
          • ${ach.description}
        </div>
      `
    )
    .join("");

  // Main HTML Template
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />

    <style>

      body {
        font-family: Arial, sans-serif;
        padding: 40px;
        color: #222;
        line-height: 1.6;
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

      .skills span {
        display: inline-block;
        background: #f2f2f2;
        padding: 5px 10px;
        margin: 3px;
        border-radius: 4px;
        font-size: 13px;
      }

      a {
        color: #0066cc;
        text-decoration: none;
      }

    </style>
  </head>

  <body>

    <!-- Header -->
    <h1>${resume.fullName}</h1>

    <div class="contact">
      ${resume.email} | ${resume.phone} | ${resume.location}
      <br/>
      LinkedIn: ${resume.linkedin} |
      GitHub: ${resume.github}
    </div>

    <!-- Summary -->
    <div class="section">
      <h2>Summary</h2>
      <p>${resume.summary}</p>
    </div>

     <!-- Education -->
    <div class="section">
      <h2>Education</h2>
      ${educationHTML}
    </div>

     <!-- Experience -->
    <div class="section">
      <h2>Work Experience</h2>
      ${experienceHTML}
    </div>

    <!-- Skills -->
    <div class="section">
      <h2>Skills</h2>
      <div class="skills">
        ${resume.skills
          .map((skill) => `<span>${skill}</span>`)
          .join("")}
      </div>
    </div>


    <!-- Projects -->
    <div class="section">
      <h2>Projects</h2>
      ${projectsHTML}
    </div>


    <!-- Achievements -->
    <div class="section">
      <h2>Achievements</h2>
      ${achievementsHTML}
    </div>

  </body>
  </html>
  `;
};

