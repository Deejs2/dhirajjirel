export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
    details: {
      challenge: string;
      solution: string;
      features: string[];
      screenshots: string[];
    };
  }