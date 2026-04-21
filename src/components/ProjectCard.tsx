import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import InteractiveSurface from "./InteractiveSurface";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <InteractiveSurface
      glare
      className="group surface-card relative flex h-full flex-col overflow-hidden transition duration-300 hover:border-emerald-300/18"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-white/8 bg-slate-950/60">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
        />
      </div>

      <div className="flex flex-1 flex-col space-y-5 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-slate-500">
              {project.year}
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
              {project.title}
            </h3>
          </div>
          <span className="rounded-full border border-emerald-300/18 bg-emerald-300/8 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-200">
            {project.status}
          </span>
        </div>

        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/8 bg-slate-950/48 px-3 py-1.5 text-xs text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-4 pt-2">
          {project.repo ? (
            <motion.a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-emerald-200"
              whileHover={
                prefersReducedMotion ? undefined : { x: 2, transition: { duration: 0.18 } }
              }
            >
              <Github className="h-4 w-4" />
              GitHub
            </motion.a>
          ) : null}
          {project.demo ? (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-200 transition hover:text-emerald-200"
              whileHover={
                prefersReducedMotion ? undefined : { x: 2, transition: { duration: 0.18 } }
              }
            >
              <ExternalLink className="h-4 w-4" />
              Live preview
            </motion.a>
          ) : null}
        </div>
      </div>
    </InteractiveSurface>
  );
}
