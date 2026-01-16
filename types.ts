
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
