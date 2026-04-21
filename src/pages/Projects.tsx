import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import MotionReveal from "../components/MotionReveal";
import ProjectCard from "../components/ProjectCard";
import SectionWrapper from "../components/SectionWrapper";
import { allTechnologies, projects } from "../data/projects";

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>("All");
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    selectedTech === "All"
      ? projects
      : projects.filter((project) => project.technologies.includes(selectedTech));

  return (
    <div>
      <SectionWrapper
        eyebrow="Projects"
        title="Backend projects with a strong focus on clarity, stability, and maintainability."
        description="These case studies highlight the kinds of systems I enjoy building: practical, structured, and ready for real product needs."
        className="pt-10 sm:pt-14"
      >
        <MotionReveal y={20}>
          <div className="surface-card-strong p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  Filter by technology
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Use the filter to focus on projects that feature a specific part of
                  my backend stack.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["All", ...allTechnologies].map((tech) => (
                  <motion.button
                    key={tech}
                    type="button"
                    onClick={() => setSelectedTech(tech)}
                    whileHover={
                      prefersReducedMotion ? undefined : { y: -1, transition: { duration: 0.16 } }
                    }
                    whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                      selectedTech === tech
                        ? "border border-emerald-200/10 bg-emerald-300 text-slate-950 shadow-[0_10px_24px_rgba(52,211,153,0.14)]"
                        : "border border-white/8 bg-white/[0.035] text-slate-300 hover:border-white/14 hover:text-white"
                    }`}
                  >
                    {tech}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              key={selectedTech}
              className="mt-10 grid gap-6 lg:grid-cols-3"
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1 }}
              transition={{ staggerChildren: 0.07 }}
            >
              {filteredProjects.map((project) => (
                <MotionReveal key={project.id} y={18} once={false}>
                  <ProjectCard project={project} />
                </MotionReveal>
              ))}
            </motion.div>

            {filteredProjects.length === 0 ? (
              <p className="mt-8 text-sm text-slate-400">
                No projects match this filter yet.
              </p>
            ) : null}
          </div>
        </MotionReveal>
      </SectionWrapper>
    </div>
  );
}
