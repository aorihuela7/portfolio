/**
 * Site-wide constants (kept separate from portfolio.ts so client
 * components like the navbar don't bundle all case-study content).
 */

export const site = {
  name: "Alejandro Orihuela",
  title: "Alejandro Orihuela — Software Engineer & HCI Researcher",
  description:
    "M.S. in Computer Science candidate at the University of Chicago specializing in Software Engineering and Human-Computer Interaction. Portfolio showcasing full-stack systems, PKI security tooling, physical computing prototypes, and comparative HCI transit accessibility research across Lima, Bogotá, and Santiago.",
  email: "aorihuela@uchicago.edu",
  location: "Chicago, IL",
  timeZone: "America/Chicago",
  resume: "/resume.pdf",
  github: "https://github.com/aorihuela7",
  linkedin: "https://www.linkedin.com/in/alejandro-orihuela-8157ba294",
  availability: "Seeking Summer 2027 Internships · SWE, Full-Stack & HCI",
  copyrightYear: 2026,
} as const;

export const nav = [
  { label: "Research", href: "/#research" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Leadership", href: "/#leadership" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;
