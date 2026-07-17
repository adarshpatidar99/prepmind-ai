export const modernTemplate = (resume) => {

const educationHTML = resume.education
.map(edu => `
<div class="item">
<b>${edu.degree}</b>
<p>${edu.college}</p>
<span>${edu.year}</span>
</div>
`).join("");

const projectsHTML = resume.projects
.map(project => `
<div class="item">
<b>${project.title}</b>
<p>${project.description}</p>
<p class="tech">${project.techStack.join(", ")}</p>
</div>
`).join("");

const experienceHTML = resume.workExperience
.map(exp => `
<div class="item">
<b>${exp.role}</b>
<p>${exp.company}</p>
<span>${exp.duration}</span>
<p>${exp.description}</p>
</div>
`).join("");

const achievementsHTML = resume.achievements
.map(a => `<li>${a.description}</li>`).join("");

return `
<!DOCTYPE html>
<html>
<head>

<style>

body{
  margin:0;
  font-family: "Segoe UI", Arial;
  background:#f5f6fa;
}

.container{
  width:900px;
  margin:auto;
  background:white;
  display:flex;
  box-shadow:0 10px 30px rgba(0,0,0,0.1);
}

/* LEFT SIDEBAR */

.sidebar{
  width:30%;
  background:#2f3640;
  color:white;
  padding:30px;
}

.sidebar h1{
  font-size:22px;
  margin-bottom:5px;
}

.sidebar p{
  font-size:13px;
  color:#dcdde1;
}

.sidebar h3{
  margin-top:30px;
  font-size:16px;
  border-bottom:1px solid rgba(255,255,255,0.2);
  padding-bottom:5px;
}

.skills span{
  display:inline-block;
  background:#40739e;
  padding:5px 8px;
  margin:3px;
  border-radius:4px;
  font-size:12px;
}

/* RIGHT CONTENT */

.content{
  width:70%;
  padding:40px;
}

.section{
  margin-bottom:25px;
}

.section h2{
  font-size:18px;
  border-left:4px solid #0984e3;
  padding-left:10px;
  margin-bottom:10px;
}

.item{
  margin-bottom:12px;
}

.item b{
  font-size:15px;
}

.item span{
  font-size:12px;
  color:#636e72;
}

.tech{
  font-size:12px;
  color:#0984e3;
}

ul{
  padding-left:18px;
}

</style>
</head>

<body>

<div class="container">

<div class="sidebar">

<h1>${resume.fullName}</h1>
<p>${resume.jobRole}</p>

<p>${resume.email}</p>
<p>${resume.phone}</p>
<p>${resume.location}</p>

<h3>Skills</h3>
<div class="skills">
${resume.skills.map(skill => `<span>${skill}</span>`).join("")}
</div>

<h3>Education</h3>
${educationHTML}

<h3>Links</h3>
<p>${resume.linkedin}</p>
<p>${resume.github}</p>

</div>


<div class="content">

<div class="section">
<h2>Summary</h2>
<p>${resume.summary}</p>
</div>

<div class="section">
<h2>Work Experience</h2>
${experienceHTML}
</div>

<div class="section">
<h2>Projects</h2>
${projectsHTML}
</div>

<div class="section">
<h2>Achievements</h2>
<ul>
${achievementsHTML}
</ul>
</div>

</div>

</div>

</body>
</html>
`;
};