export type SkillCategory = {
  title: string;
  slug: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    slug: "frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    title: "Backend",
    slug: "backend",
    skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL", "REST APIs"],
  },
  {
    title: "Tools & DevOps",
    slug: "devops",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
  },
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
    name: "SaaS Dashboard",
    description: "Analytics dashboard for tracking user engagement and revenue metrics.",
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
  },
  {
    name: "Auth Service",
    description: "Lightweight authentication microservice with OAuth and JWT support.",
    status: "Active",

    url: "#",
  },
  {
    name: "API Gateway",
    description: "Rate-limited API gateway with caching, logging, and request routing.",
    status: "Archived",

    url: "#",
  },
];
