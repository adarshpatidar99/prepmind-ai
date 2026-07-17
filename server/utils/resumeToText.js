export const convertResumeToText = (resume) => {

    const skills = resume.skills?.join(", ") || "";
    
    const education = resume.education?.map((edu) => `${edu.degree} - ${edu.collage} - ${edu.year}`).join("\n" || "");

    const workExperience = resume.workExperience?.map((exp) => `${exp.company} - ${exp.role} - ${exp.duration} - ${exp.description}`).join("\n" || "");
    
    const projects = resume.projects?.map((pro) => `${pro.title} - ${pro.description} - Tech used: ${pro.techStack}`).join("\n" || "");

    const achievements = resume.achievements?.map((ach) => ach.description).join("\n") || "";

    const profileImg = resume.profileImg || "";

    const resumeText = `
     Name: ${resume.fullname}
     Email: ${resume.email}
     PhoneNo: ${resume.phone}
     Location: ${resume.location}
     Linkedin: ${resume.linkedin}   
     Github: ${resume.github} 
     Summary: ${resume.summary}
     JobRole: ${resume.jobRole}
     Experience: ${resume.experience}
     Education: ${education}
     Skills: ${skills}
     WorkExperience: ${workExperience}
     Projects: ${projects}
     Achievements: ${achievements}
     ProfileImg: ${profileImg}
    `
    
    return resumeText;                          

}