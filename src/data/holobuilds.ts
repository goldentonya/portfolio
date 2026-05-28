export type Holobuild = {
  slug: string;
  title: string;
  tagline: string;
  url: string;
  role: string;
  stack: string[];
  year: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const holobuilds: Holobuild[] = [
  {
    slug: "project-one",
    title: "Project One",
    tagline: "Placeholder tagline for the first build.",
    url: "https://example.com",
    role: "Design + Build",
    stack: ["React", "Tailwind", "Framer Motion"],
    year: "2025",
    summary: "Placeholder summary describing what this site does and who it serves.",
    problem: "Placeholder problem statement — what challenge the client or project was facing.",
    approach: "Placeholder approach — how the site was designed, structured, and built.",
    outcome: "Placeholder outcome — measurable impact, launch results, or qualitative wins.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "Placeholder tagline for the second build.",
    url: "https://example.com",
    role: "Design + Build",
    stack: ["React", "Tailwind", "Framer Motion"],
    year: "2025",
    summary: "Placeholder summary describing what this site does and who it serves.",
    problem: "Placeholder problem statement — what challenge the client or project was facing.",
    approach: "Placeholder approach — how the site was designed, structured, and built.",
    outcome: "Placeholder outcome — measurable impact, launch results, or qualitative wins.",
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "Placeholder tagline for the third build.",
    url: "https://example.com",
    role: "Design + Build",
    stack: ["React", "Tailwind", "Framer Motion"],
    year: "2025",
    summary: "Placeholder summary describing what this site does and who it serves.",
    problem: "Placeholder problem statement — what challenge the client or project was facing.",
    approach: "Placeholder approach — how the site was designed, structured, and built.",
    outcome: "Placeholder outcome — measurable impact, launch results, or qualitative wins.",
  },
];