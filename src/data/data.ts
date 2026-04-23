export type SkillCategory = {
  title: string;
  slug: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    slug: "frontend",
    skills: ["React", "TypeScript", "Next.js", "HTML/CSS", "StreamLit"],
  },
  {
    title: "Backend",
    slug: "backend",
    skills: ["NodeJs","Express", "FastAPI",  "Python", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Database",
    slug: "database",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis"],
  },
  {
    title: "Tools & DevOps",
    slug: "devops",
    skills: ["Git", "Docker","Vercel", "CI/CD", "Linux"],
  },
  {
    title: "Generative AI",
    slug: "generative-ai",
    skills: ["LangChain", "RAG", "Hugging Face"]
  }
];

export type ProjectStatus = "Active" | "InDevelopment" | "Archived";

export type Project = {
  name: string;
  description: string;
  status: ProjectStatus;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "CollabxDraw",
    description: "A real-time collaborative drawing whiteboard featuring secure room authentication, fast WebSocket sync, and inline editing.",
    status: "Active",
    url: "https://collabxdraw.vercel.app",
  },
  {
    name: "Avni - Recruitment Agent",
    description: "Helps candidates prepare better for the interviews and helps recruiters find the best candidates for their open positions.",
    status: "Active",
    url: "https://github.com/ezAakash/Recuritment_agent",
  },
  {
    name: "OwnShell",
    description: "A custom command-line shell building from scratch in TypeScript to deeply understand operating system internals and process execution.",
    status: "InDevelopment",
    url: "https://github.com/ezAakash/OwnShell",
  },
  {
    name: "Equity - Research Tool",
    description: "Solves the tedious copy-pasting and 3000-word limit of older, pre-agent LLMs by parsing URLs directly for financial research.",
    status: "Archived",
    url: "https://github.com/ezAakash/Equity---Financial-News-Research-Model",
  }
];
