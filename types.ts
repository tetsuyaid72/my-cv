export interface EducationItem {
  school: string;
  level: string;
  year: string;
  description?: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
  description: string[];
}

export interface SkillItem {
  name: string;
  level: number; // Percentage 0-100
}

export interface SoftSkillItem {
  name: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  repoLink: string;
  detailLink: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}