import { Code2, Database, Server, GitBranch, Zap, Package, Shield, Cpu, type LucideIcon } from "lucide-react"

export interface Skill {
  name: string
  icon: LucideIcon
  level: number
  category: "Language" | "Framework" | "Database" | "Tools" | "Architecture"
  color: "emerald" | "cyan" | "blue" | "purple" | "orange"
}

export const skills: Skill[] = [
  // Languages
  {
    name: "Java",
    icon: Code2,
    level: 90,
    category: "Language",
    color: "orange",
  },
  {
    name: "SQL",
    icon: Database,
    level: 85,
    category: "Language",
    color: "blue",
  },

  // Frameworks & Libraries
  {
    name: "Spring Boot",
    icon: Zap,
    level: 85,
    category: "Framework",
    color: "emerald",
  },
  {
    name: "Spring Cloud",
    icon: Server,
    level: 75,
    category: "Framework",
    color: "emerald",
  },
  {
    name: "Spring Data JPA",
    icon: Database,
    level: 80,
    category: "Framework",
    color: "emerald",
  },

  // Databases
  {
    name: "PostgreSQL",
    icon: Database,
    level: 80,
    category: "Database",
    color: "blue",
  },
  {
    name: "MySQL / MariaDB",
    icon: Database,
    level: 80,
    category: "Database",
    color: "blue",
  },
  {
    name: "Redis",
    icon: Cpu,
    level: 70,
    category: "Database",
    color: "cyan",
  },

  // Tools & DevOps
  {
    name: "Docker",
    icon: Package,
    level: 75,
    category: "Tools",
    color: "cyan",
  },
  {
    name: "Git / GitHub",
    icon: GitBranch,
    level: 85,
    category: "Tools",
    color: "purple",
  },
  {
    name: "Jenkins",
    icon: Zap,
    level: 70,
    category: "Tools",
    color: "orange",
  },
  {
    name: "Maven",
    icon: Package,
    level: 80,
    category: "Tools",
    color: "orange",
  },

  // Architecture & Concepts
  {
    name: "Microservices",
    icon: Server,
    level: 75,
    category: "Architecture",
    color: "emerald",
  },
  {
    name: "REST APIs",
    icon: Zap,
    level: 85,
    category: "Architecture",
    color: "cyan",
  },
  {
    name: "Message Queues (Kafka)",
    icon: Zap,
    level: 70,
    category: "Architecture",
    color: "orange",
  },
  {
    name: "System Design",
    icon: Shield,
    level: 75,
    category: "Architecture",
    color: "blue",
  },
]

export const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  },
  {} as Record<string, Skill[]>,
)
