import type { Project } from "../Models/Project";

export const github = "https://github.com/Sand82";

export const navigationItems = [
  ["about", "About"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
] as const;

export const skills = {
  Backend: [
    ".NET",
    "ASP.NET Core",
    "C#",
    "RESTful APIs",
    "Microservices",
    "Entity Framework Core",
  ],
  Frontend: [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "SCSS",
    "Bootstrap",
    "RxJS",
  ],
  Database: ["Microsoft SQL Server (MSSQL)"],
  "Cloud / DevOps": ["Azure", "Azure Pipelines", "CI/CD", "Firebase"],
  "Microsoft Platform": [
    "Power Apps",
    "Power Automate",
    "SharePoint",
    "Power BI",
  ],
  Engineering: [
    "Git / GitHub",
    "Swagger",
    "Agile / Scrum",
    "Component-based development",
    "Testing & debugging",
  ],
};

export const projects: Project[] = [
  [
    "Portfolio Management System",
    "Apr 2025 — Present",
    "Ministero della Giustizia, Italy · Team 5–8",
    "Power Apps · Power Automate · MSSQL · SharePoint · Power BI",
    [
      "Develop the application UI in Power Apps for project and contractual activity management.",
      "Implement and maintain integration between the user interface and MSSQL through Power Automate.",
      "Collaborate with backend developers and business stakeholders to deliver functional enhancements.",
    ],
  ],
  [
    "Audi / CARIAD Internal Portal",
    "Sep 2024 — Jun 2025",
    "Volkswagen Group · Sofia · Team 1",
    "Power Apps · Power Automate · SharePoint",
    [
      "Develop and maintain an internal portal for access requests and administration.",
      "Build Power Automate workflows for approvals, notifications, and data synchronization.",
      "Administer SharePoint sites, lists, libraries, permissions, and data structures while improving usability and maintainability.",
    ],
  ],
  [
    "DXC BG Badge Platform",
    "Jun 2024 — Dec 2025",
    "Internal DXC project · Sofia · Team 12",
    "Angular 18 · TypeScript · CSS · Bootstrap · Firebase · RxJS",
    [
      "Developed a modern Angular enterprise application for deals and vendor management.",
      "Implemented standalone component architecture with lazy loading and reusable components.",
      "Built advanced filtering, pagination, search, and administration interfaces for multiple workflows.",
    ],
  ],
  [
    "Velonetic Financial Task Planner",
    "Jun 2023 — Mar 2025",
    "Velonetic (London Markets) · London, England · Team 1",
    "Power Apps · Power Automate · SharePoint",
    [
      "Delivered an end-to-end business application from design through implementation and deployment.",
      "Developed features and automated workflows for approvals, notifications, and data synchronization.",
      "Optimized SharePoint lists and data structures for application performance and maintainability.",
    ],
  ],
  [
    "Cyril and Methodius Secondary School Website",
    "Jul 2023 — Dec 2023",
    "Pro-bono educational project · Sofia · Team 5–8",
    "Angular · TypeScript · Firebase · Bootstrap · RxJS",
    [
      "Contributed to a full-stack web application built from the ground up for a Bulgarian secondary school.",
      "Designed and implemented Angular frontend components and integrated Firebase authentication and data storage.",
      "Contributed to the initial application architecture and frontend/backend integration.",
    ],
  ],
  [
    "CKEONE",
    "Feb 2023 — Jul 2023",
    "Polish Ministry of Culture · Poland · Team 10",
    "ASP.NET Core Web API · React · TypeScript · MSSQL · Swagger · Azure · Azure Blob",
    [
      "Developed features within an existing microservices-based web application.",
      "Created and extended RESTful ASP.NET Core API endpoints to support frontend requirements.",
      "Implemented CRUD functionality for PDF and multimedia files and participated in testing and debugging.",
    ],
  ],
];

export const personalProjects = [
  [
    "My Bakery Place",
    "Online bakery ordering website.",
    "https://github.com/Sand82/BakeryProject",
  ],
  [
    "Mini Football Statistic",
    "Application for recording results from a mini football tournament.",
    "https://github.com/Sand82/MiniFootballStatistic",
  ],
  [
    "Movie Gallery",
    "A simplified IMDb-style movie gallery application.",
    "https://github.com/Sand82/MovieGaller",
  ],
] as const;

export const certificates = [
  "React (2022)",
  "ASP.NET Core (2022)",
  "C# Web Basics (2022)",
  "Entity Framework Core (2021)",
  "MS SQL (2021)",
  "C# OOP (2021)",
  "C# Advanced (2021)",
  "JavaScript Applications (2021)",
  "Containers & Cloud (2023)",
  "Software Engineering & DevOps (2023)",
];
