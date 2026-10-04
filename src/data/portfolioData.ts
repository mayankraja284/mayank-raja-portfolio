/**
 * Centralized Portfolio Data for Mayank Raja
 * Easily customizable and maintainable in a single place.
 */

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  status: string;
  statusBadge: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isComingSoon: boolean;
  themeColor: string;
  previewType: 'queueless' | 'datapulse' | 'virtualgreen';
}

export interface SkillItem {
  name: string;
  category: 'fundamentals' | 'web';
  isCurrentlyLearning?: boolean;
  description?: string;
}

export const EMAIL = ""; // If provided, shows "EMAIL ME → mailto:..."

export const portfolioData = {
  name: "MAYANK RAJA",
  fullName: "Mayank Raja",
  college: "Dayananda Sagar College of Engineering",
  degree: "Bachelor of Engineering — Computer Science & Engineering",
  year: "2nd Year",
  cgpa: "9.23",
  headline: "HI, I'M MAYANK",
  subheadline: "CSE STUDENT • DEVELOPER • BUILDER",
  supportingText: "I build software, explore AI, and turn real-world problems into working products.",
  avatarUrl: "/avatar.png",
  avatarFallback: "/avatar.svg",
  resumeUrl: "/Mayank_Raja_Resume.pdf",
  socials: {
    github: "https://github.com/mayankraja284",
    linkedin: "https://www.linkedin.com/in/mayank-raja-81568b36b",
    email: EMAIL,
  },
  marqueeWords: [
    "CODE",
    "BUILD",
    "AI",
    "SYSTEMS",
    "PROJECTS",
    "DSA",
    "WEB",
    "GITHUB",
    "ALGORITHMS",
    "SOFTWARE",
    "REACT",
    "TYPESCRIPT",
  ],
  about: {
    heading: "ABOUT ME",
    paragraphs: [
      "I'm Mayank Raja, a Computer Science and Engineering student at Dayananda Sagar College of Engineering. I'm currently in my second year, building my foundations in computer science while developing real-world software projects.",
      "I'm particularly interested in software development, problem solving, AI-assisted development, and building products that solve practical problems. Rather than only following tutorials, I want to understand how things work and turn ideas into working applications.",
      "My current journey includes strengthening my programming and DSA fundamentals, learning modern web development, exploring AI tools and workflows, and gradually moving toward building larger and more meaningful software systems.",
    ],
  },
  education: {
    college: "DAYANANDA SAGAR COLLEGE OF ENGINEERING",
    degree: "Bachelor of Engineering — Computer Science & Engineering",
    currentYear: "2nd Year",
    cgpa: "9.23",
    status: "In Progress",
  },
  skills: {
    fundamentals: [
      { name: "C", isCurrentlyLearning: false },
      { name: "C++", isCurrentlyLearning: false },
      { name: "Python", isCurrentlyLearning: false },
      { name: "Java", isCurrentlyLearning: false },
      { name: "Data Structures & Algorithms", isCurrentlyLearning: true },
      { name: "Object-Oriented Programming", isCurrentlyLearning: false },
      { name: "Git & GitHub", isCurrentlyLearning: false },
    ],
    webAndDev: [
      { name: "HTML", isCurrentlyLearning: false },
      { name: "CSS", isCurrentlyLearning: false },
      { name: "JavaScript", isCurrentlyLearning: false },
      { name: "React", isCurrentlyLearning: false },
      { name: "APIs", isCurrentlyLearning: true },
      { name: "Databases", isCurrentlyLearning: true },
      { name: "AI-assisted development", isCurrentlyLearning: true },
    ],
  },
  projects: [
    {
      id: "queueless",
      number: "01",
      title: "QUEUELESS",
      status: "CURRENTLY BUILDING",
      statusBadge: "IN DEVELOPMENT",
      description: "A project focused on improving the experience of managing queues and reducing unnecessary waiting through a digital workflow.",
      technologies: ["Digital Queue Workflow", "Real-Time Tracking", "Wait-Time Optimization", "System Design"],
      liveUrl: "",
      githubUrl: "",
      isComingSoon: true,
      themeColor: "#64748B",
      previewType: "queueless",
    },
    {
      id: "datapulse",
      number: "02",
      title: "DATA PULSE",
      status: "LIVE PROJECT",
      statusBadge: "LIVE",
      description: "An analytics and real-time telemetry pulse dashboard interface delivering visual clarity on data performance and streaming information.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Data Analytics", "Vercel"],
      liveUrl: "https://data-pulse-rust.vercel.app/",
      githubUrl: "https://github.com/mayankraja284",
      isComingSoon: false,
      themeColor: "#0EA5E9",
      previewType: "datapulse",
    },
    {
      id: "virtualgreen",
      number: "03",
      title: "VIRTUAL GREEN EDUCATION",
      status: "LIVE PROJECT",
      statusBadge: "LIVE",
      description: "An educational platform focused on sustainability and environmental learning, featuring virtual field trips, interactive learning modules, gamification, simulations, educational resources, and eco quizzes.",
      technologies: ["Virtual Field Trips", "Interactive Simulations", "Gamification", "Sustainability", "Vercel"],
      liveUrl: "https://idt-project-ten.vercel.app/",
      githubUrl: "https://github.com/mayankraja284",
      isComingSoon: false,
      themeColor: "#10B981",
      previewType: "virtualgreen",
    },
  ] as ProjectItem[],
  journey: [
    {
      badge: "CURRENT — 2ND YEAR",
      title: "B.E. Computer Science & Engineering",
      institution: "Dayananda Sagar College of Engineering",
      description: "Building strong computer science foundations, advancing core curriculum, and maintaining academic excellence (CGPA: 9.23).",
    },
    {
      badge: "BUILDING",
      title: "Real-World Projects & Systems",
      institution: "Active Development",
      description: "Developing real-world projects and strengthening software development fundamentals through hands-on architecture.",
    },
    {
      badge: "LEARNING",
      title: "Continuous Foundations Expansion",
      institution: "DSA, Web & AI Workflows",
      description: "DSA, programming, web development, Git/GitHub, AI-assisted development and computer science fundamentals.",
    },
  ],
};
