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
    const birthDate = new Date("2000-01-03");
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birth date hasn't occurred yet this year
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    this.description = data.description.replace("{age}", age.toString());
    this.education = data.education;
    this.experience = data.experience;
    this.skills = data.skills;
    this.projects = data.projects;
  }
}
