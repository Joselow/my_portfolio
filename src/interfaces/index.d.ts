interface Technology {
  name: string;
  color: string;
}

export interface ProjectImage {
  image: string;
  alt: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: ProjectImage[];
  demoLink?: string;
  codeLink: string;
  technologies: Technology[];
  features?: string[];
}