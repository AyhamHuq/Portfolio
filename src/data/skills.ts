export interface Skill {
  name: string;
  icon: string; // react-icons identifier
}

export interface SkillCategory {
  label: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    skills: [
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "SiJava" },
      { name: "C/C++", icon: "SiCplusplus" },
      { name: "SQL", icon: "SiPostgresql" },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Material UI", icon: "SiMui" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Vite", icon: "SiVite" },
      { name: "React Native", icon: "SiReact" },
    ],
  },
  {
    label: "Backend & Data",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express", icon: "SiExpress" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Spring", icon: "SiSpring" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "SQLite", icon: "SiSqlite" },
    ],
  },
  {
    label: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: "SiAmazonwebservices" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Linux", icon: "SiLinux" },
      { name: "Git", icon: "SiGit" },
      { name: "Ansible", icon: "SiAnsible" },
      { name: "LangChain", icon: "SiLangchain" },
    ],
  },
];
