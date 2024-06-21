interface Coursework {
  name: string;
  description: string;
}

interface Education {
  school: string;
  time: string;
  degree: string;
  info: string;
  coursework: Coursework[];
}

interface Experience {
  name: string;
  company: string;
  time: string;
  bullets: string[];
}

interface Skill {
  name: string;
  description: string;
}

interface Project {
  name: string;
  description: string;
}

export default class ResumeModel {
  description: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  projects: Project[];

  constructor(data: any) {
    this.description = data.description;
    this.education = data.education;
    this.experience = data.experience;
    this.skills = data.skills;
    this.projects = data.projects;
  }
}
