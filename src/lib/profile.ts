import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Sevanth A G",
  handle: "sevanth",
  role: "Full Stack · Backend · AI",
  lede: "I build real-time and AI-powered web applications — from WebSocket backends to React interfaces.",
  status: true,
  email: "mrsevanthag@gmail.com",
  resume: "/Sevanth_A_G_Resume.pdf",
  about:
    "I build real-time and AI-powered web applications with React, TypeScript, Node.js, Express and PostgreSQL/MongoDB — including WebSocket collaboration and LangChain + Gemini integrations. BCA graduate with a 9.08 CGPA, combining strong fundamentals with project-driven experience.",
  facts: [
    { key: "based", value: "Mangaluru, India" },
    { key: "education", value: "BCA · Alva's Degree College · CGPA 9.08" },
    { key: "focus", value: "Full-stack · real-time · AI" },
    { key: "learning", value: "100xDevs Web Dev + DevOps bootcamp" },
    { key: "looking for", value: "Full-stack or backend engineering roles" },
  ],
  socials: [
    {
      label: "github",
      href: "https://github.com/SevanthAG",
      icon: "github",
    },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/sevanth-a-g-57aa472b0/",
      icon: "linkedin",
    },
    {
      label: "leetcode",
      href: "https://leetcode.com/u/zvCr4RFMjz/",
      icon: "leetcode",
    },
    {
      label: "mail",
      href: "mailto:mrsevanthag@gmail.com",
      icon: "mail",
    },
  ],
  now: [
    {
      spans: [
        { text: "Advancing through the " },
        {
          text: "100xDevs Web Dev + DevOps bootcamp",
          href: "https://100xdevs.com",
        },
      ],
    },
    {
      spans: [
        { text: "Building " },
        {
          text: "BlockBoard",
          href: "https://github.com/SevanthAG",
        },
        { text: " — real-time project management" },
      ],
    },
    {
      spans: [
        { text: "Based in " },
        { text: "Mangaluru, India", hl: true },
        { text: " · open to full-stack roles" },
      ],
    },
  ],
  skills: [
    { name: "TypeScript", color: "#3178C6" },
    { name: "React", color: "#61DAFB", light: true },
    { name: "Node.js", color: "#5FA04E" },
    { name: "Express", color: "#FFFFFF" },
    { name: "PostgreSQL", color: "#4169E1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "Prisma", color: "#5A67D8" },
    { name: "LangChain", color: "#1C3C3C", light: true },
    { name: "Python", color: "#3776AB" },
    { name: "WebSockets", color: "#D4BE98" },
    { name: "Tailwind CSS", color: "#06B6D4" },
    { name: "Linux", color: "#FCC624", light: true },
  ],
  work: [
    {
      org: "Grudhra Solutions Pvt Ltd",
      role: "Guidance & Project Support",
      type: "Intern",
      period: "Sep 2026 — present",
      summary:
        "Review the product codebase to find and fix bugs, run manual and unit tests across platforms, and define the feature roadmap for a product in active development while guiding teammates day to day.",
      tech: ["Bug fixing", "Manual testing", "Unit testing", "Feature planning"],
    },
    {
      org: "Zephyr Technologies & Solutions",
      role: "Full Stack Web Development",
      type: "Intern",
      period: "Jun 2025 · 30 days",
      summary:
        "Built responsive pages with HTML, CSS and JavaScript, added DOM-driven interactivity, connected Node and Express APIs, and shipped reusable React components for easier maintenance.",
      tech: ["React.js", "JavaScript", "Node.js", "Express.js"],
    },
  ],
  projects: [
    {
      title: "BlockBoard",
      stack: "React 19 · Express 5 · Prisma · PostgreSQL",
      description:
        "Trello-style collaboration with role-based organizations, JWT auth and a raw WebSocket server where every board is a room. A TypeScript Turborepo split into web, API and a shared Prisma package.",
      live: null,
      repo: "https://github.com/SevanthAG",
      status: "In Progress",
    },
    {
      title: "Interlix AI",
      stack: "React · Node · MongoDB · LangChain · Gemini",
      description:
        "Session-driven interview prep that scores a resume against a job description, surfaces skill gaps, generates AI aptitude and technical tests, and exports an AI-refined PDF resume.",
      live: null,
      repo: "https://github.com/SevanthAG",
      status: "completed",
    },
    {
      title: "Huddle",
      stack: "React · TypeScript · Bun · WebSockets",
      description:
        "Room-based real-time chat on a Bun WebSocket server, with room-scoped broadcasting, join/leave notices and automatic cleanup. The room id lives in the URL so a refresh keeps the session.",
      live: null,
      repo: "https://github.com/SevanthAG",
      status: "completed",
    },
  ],
  education: [
    {
      institution: "Alva's Degree College, Moodbidre",
      degree: "Bachelor of Computer Applications (BCA)",
      year: "2026",
      score: "CGPA 9.08",
    },
    {
      institution: "EBAC – NMPUC Aranthodu, Sullia",
      degree: "Higher Secondary (Class XII)",
      year: "2023",
      score: "85.67%",
    },
    {
      institution: "NMPU Aranthodu, Sullia",
      degree: "Secondary Education (Class X)",
      year: "2021",
      score: "64.96%",
    },
  ],
  stack: [
    {
      title: "Languages",
      items: ["Python", "JavaScript", "TypeScript", "C", "Java", "SQL"],
    },
    {
      title: "Frontend",
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
    },
    {
      title: "Data & AI",
      items: [
        "PostgreSQL",
        "Prisma",
        "MongoDB",
        "SQLite",
        "LangChain",
        "Gemini API",
      ],
    },
    {
      title: "Testing & practice",
      items: [
        "Manual testing",
        "Unit testing",
        "Bug fixing",
        "Feature planning",
      ],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman", "Linux"],
    },
    {
      title: "Core CS",
      items: [
        "DBMS",
        "Operating Systems",
        "Networking",
        "OOP",
        "DSA",
        "Cybersecurity",
      ],
    },
  ],
  credentials: [
    {
      title: "Web Dev + DevOps Bootcamp",
      issuer: "100xDevs",
      date: "in progress",
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera",
      date: "Jul 2025",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "Aug 2024",
    },
    {
      title: "The Complete Python Bootcamp: From Zero to Hero",
      issuer: "Udemy",
      date: "Feb 2024",
    },
  ],
  leadership: [
    {
      title: "IT Manager Coordinator",
      meta: "College IT Fest",
      description:
        "Coordinated technical events, managed logistics, and kept communication flowing across teams for seamless execution.",
    },
    {
      title: "Core Committee Head",
      meta: "Techotsav · College Technical Fest",
      description:
        "Led planning and execution of the flagship technical fest, managing cross-functional teams and end-to-end operations.",
    },
    {
      title: "Farewell Coordinator",
      meta: "Alva's Degree College · 2024–2025",
      description:
        "Organized and executed the college farewell, keeping the team coordinated and deliveries on time.",
    },
  ],
  achievements: [
    {
      title: "Runner-Up",
      meta: "Prompt Engineering Competition · NITTE University",
      description:
        "Placed second by applying effective prompt design and problem solving in AI-based tasks.",
    },
    {
      title: "Hackathon Participant",
      meta: "4+ events",
      description:
        "Collaborated in teams to design and ship solutions under strict deadlines across multiple hackathons.",
    },
    {
      title: "Intercollege Technical Fest Participant",
      meta: "Various colleges",
      description:
        "Took part in intercollege technical events to broaden exposure and competitive skills.",
    },
  ],
};

export const mailHref = `mailto:${profile.email}`;
