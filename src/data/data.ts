export type SkillCategory = {
  title: string;
  slug: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    slug: "frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML/CSS", "StreamLit"],
  },
  {
    title: "Backend",
    slug: "backend",
    skills: ["Node.js","Express", "FastAPI",  "Python", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    slug: "devops",
    skills: ["Git", "Docker","Vercel", "CI/CD", "Linux"],
  },
  {
    title: "Generative AI",
    slug: "generative-ai",
    skills: ["LangChain", "Hugging Face"]
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
    name: "Avni Recruitmet Agent ",
    description: " Helps candidates prepare better for the interviews and helps recuiters find the best candidates for their open positions.",
    status: "Active",

    url: "#",
  },
  {
    name: "E-Commerce Platform",
    description: "Full-featured online store with payments, inventory, and order management.",
    status: "Archived",
    url: "#",
  },
  {
    name: "DevTools CLI",
    description: "Command-line toolkit for automating common development workflows.",
    status: "Archived",

    url: "#",
  },
  {
    name: "Chat Application",
    description: "Real-time messaging app with end-to-end encryption and file sharing.",
    status: "InDevelopment",

    url: "#",
  }
];
