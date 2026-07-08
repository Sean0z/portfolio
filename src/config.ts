export const siteConfig = {
  name: "Sean Ozinsky",
  title: "Software Engineer",
  description: "Portfolio website of Sean Ozinsky",
  accentColor: "#e01bbc",
  social: {
    email: "seanozinsky@gmail.com",
    linkedin: "https://www.linkedin.com/in/sean-ozinsky/",
    github: "https://github.com/Sean0z",
  },
  aboutMe: [
  "I’m a recent graduate from the University of Washington’s Paul G. Allen School of Computer Science & Engineering, where I received a B.S. in Computer Science. I’m interested in building unique applications that introduce new ways for people to interact with technology.",
  " My experience spans AI-powered tools, full-stack web apps, data visualization, computer graphics, game development, and human-computer interaction. Some recent projects include an AI-powered Chrome extension, a physically based ray tracer, and machine learning models for sports outcome prediction, all of which you can explore below.",
  " I’m especially interested in machine learning, game development, and full-stack software development. I’m always happy to chat about my work, new ideas, or whatever fantasy book I’m currently reading.",
],
  skills: ["Python", "TypeScript", "React", "Node.js", "Unity", "C#"],
projects: [
  {
    name: "Chain",
    description:
      "An AI-powered Chrome extension that identifies keywords on webpages and injects contextual hyperlinks and summary previews for knowledge exploration.",
    link: "projects/chain/",
    skills: ["JavaScript", "Gemini API", "Chrome Extensions"],
  },
  {
    name: "Sports Outcome Prediction Models",
    description:
      "A small-scale applied machine learning research project comparing match outcome prediction across soccer, baseball, and tennis using public historical sports datasets.",
    link: "projects/sports/",
    skills: ["Python", "XGBoost", "Machine Learning"],
  },
  {
    name: "Edge of Yvoire: A Physically Based Ray Tracer",
    description:
      "A physically based ray tracer in C++ that uses the Lightwave framework to implement core rendering features such as path tracing, ray-object intersections, and acceleration structures to render a custom Blender scene.",
    link: "projects/raytracer/",
    skills: ["C++", "Blender", "Computer Graphics"],
  },
  {
    name: "Visualizing Monte Carlo Simulations for Options Pricing",
    description:
      "An interactive article explaining how option prices are estimated using Monte Carlo simulations.",
    link: "projects/montecarlo/",
    skills: ["Python", "D3.js", "Data Visualization"],
  },
  {
    name: "Row-mageddon",
    description:
      "A 16-bit pixel art rowing game for the web where players manage rowing rhythm, power-ups, and customizable boats to race through four seasonal maps.",
    link: "projects/rowmageddon/",
    skills: ["C#", "Unity", "Game Development"],
  },
  {
    name: "PSH-Mini",
    description:
      "A miniature physical pumped storage hydropower model for SeaClimateHack 2025 with a SCADA-style dashboard controlled by a 24-hour simulation of the California power grid.",
    link: "projects/psh/",
    skills: ["React", "Node.js", "Data Visualization"],
  },
  {
    name: "Lazer Home",
    description:
      "An audio-visual VR experience made during Stanford's Immerse The Bay 2024 for the Meta Quest 3 that lets users customize their own concert experience.",
    link: "projects/lazer/",
    skills: ["C#", "Unity", "Virtual Reality"],
  },
],
  experience: [
    {
      company: "University of Washington, Department of Electrical & Computer Engineering",
      title: "Front Desk Student Worker - Lead",
      dateRange: "Aug 2023 - Jun 2026",
      bullets: [
        "Managed logistics and building operations for a department of 1,300+ students, faculty, and staff.",
        "Assisted with event support, department communications, lab deliveries, and the hiring and training of 11 ECE student workers.",
      ],
    },
    {
      company: "University of Washington, Interactive Data Lab",
      title: "Research Assistant",
      dateRange: "May 2025 - Sep 2025",
      bullets: [
          "Collaborated with two PhD students on exploratory research using large language models to develop a dashboard recommendation system from natural language input.",
          "Conducted a literature review of 20+ research papers on user intent prediction, query decomposition, and LLM-based visualization recommendations to inform future MVP design.",
      ],
    },
    {
      company: "OpenBrackets Coding",
      title: "Volunteer Python Teacher",
      dateRange: "Mar 2021 - May 2022",
      bullets: [
        "Taught introductory Python courses to 50+ K-8 students from underserved areas over Zoom.",
        "Developed and refined two course curricula and received the President’s Volunteer Service Award Bronze Medal for 100+ hours of volunteering.",
      ],
    },
  ],
  education: [
    {
      school: "University of Washington",
      degree: "B.S. in Computer Science",
      dateRange: "Sep 2022 - Jun 2026",
      achievements: [
        "Paul G. Allen School of Computer Science & Engineering",
      ],
    },
    {
      school: "Universität des Saarlandes",
      degree: "Departmental Exchange, Computer Science",
      dateRange: "Oct 2025 - Feb 2026",
      achievements: [
        "Studied computer science through a departmental exchange program in Saarbrücken, Germany.",
      ],
    },
  ],
};
