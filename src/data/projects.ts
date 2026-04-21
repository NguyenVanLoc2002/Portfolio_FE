import bankingImage from "../assets/project-banking.svg";
import commerceImage from "../assets/project-commerce.svg";
import inventoryImage from "../assets/project-inventory.svg";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  highlights: string[];
  repo?: string;
  demo?: string;
  image: string;
  status: "completed" | "ongoing";
  year: number;
}

export const projects: Project[] = [
  {
    id: "commerce-core",
    title: "Commerce Core",
    description:
      "A modular backend platform for catalog, checkout, and order workflows, designed to keep service boundaries clear as product scope expands.",
    longDescription:
      "Built a backend commerce platform with separate services for catalog, cart, and order processing. The implementation emphasized clear domain boundaries, maintainable APIs, and event-driven communication so the system could evolve without coupling core workflows too tightly.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "Kafka",
      "PostgreSQL",
      "Docker",
    ],
    highlights: [
      "Clear service boundaries across core commerce flows",
      "Event-driven communication for order processing",
      "Container-ready delivery workflow",
    ],
    repo: "https://github.com/NguyenVanLoc2002",
    demo: "https://example.com/",
    image: commerceImage,
    status: "completed",
    year: 2024,
  },
  {
    id: "banking-api",
    title: "Banking API Suite",
    description:
      "A backend API layer for account and transaction workflows, built with a strong focus on data integrity, validation, and operational reliability.",
    longDescription:
      "Designed backend APIs for account, balance, and transfer flows in a domain where correctness and stability are critical. The work focused on validation-first request handling, predictable persistence patterns, and service behavior suited to business-sensitive transaction processing.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Jenkins",
    ],
    highlights: [
      "Validation-focused request processing",
      "Reliable transaction-oriented service design",
      "Deployment support through automation tooling",
    ],
    repo: "https://github.com/NguyenVanLoc2002",
    image: bankingImage,
    status: "completed",
    year: 2023,
  },
  {
    id: "inventory-ops",
    title: "Inventory Ops Dashboard",
    description:
      "An internal backend platform supporting inventory visibility, reporting, and day-to-day warehouse operations through structured APIs and operational data flows.",
    longDescription:
      "Developed backend capabilities for an internal inventory platform used for reporting and operational workflows. The implementation centered on practical data modeling, efficient query design, and service endpoints that support dashboards, alerts, and routine warehouse processes.",
    technologies: [
      "Java",
      "Spring MVC",
      "MySQL",
      "REST API",
      "Thymeleaf",
      "Docker",
    ],
    highlights: [
      "Backend support for reporting and inventory workflows",
      "Practical data modeling for operational use cases",
      "Extensible service structure for internal tooling",
    ],
    repo: "https://github.com/NguyenVanLoc2002",
    demo: "https://example.com/",
    image: inventoryImage,
    status: "ongoing",
    year: 2024,
  },
];

export const allTechnologies = Array.from(
  new Set(projects.flatMap((project) => project.technologies)),
).sort();
