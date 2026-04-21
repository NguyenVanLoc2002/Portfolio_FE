import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import Button from "../components/Button";
import InteractiveSurface from "../components/InteractiveSurface";
import MotionReveal from "../components/MotionReveal";
import ProjectCard from "../components/ProjectCard";
import SectionWrapper from "../components/SectionWrapper";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

const featureItems = [
  "Java and Spring Boot service development",
  "API design with maintainability in mind",
  "Backend delivery for product-facing systems",
];

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <section className="section-spacing pt-8 sm:pt-12">
        <div className="page-shell grid items-start gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-12">
          <div className="max-w-3xl pt-4 sm:pt-8">
            <MotionReveal>
              <p className="inline-flex rounded-full border border-emerald-300/16 bg-emerald-300/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-200/90">
                Java Developer
              </p>
            </MotionReveal>

            <MotionReveal delay={0.05}>
              <h1 className="mt-7 max-w-[12ch] text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl sm:leading-[0.98] lg:text-[6rem]">
                Backend systems built for clarity, stability, and growth.
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <p className="mt-8 max-w-[40rem] text-lg leading-9 text-slate-300">
                {profile.description}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.14}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button to="/projects" className="px-6 py-3.5">
                  Review projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" variant="secondary" className="px-6 py-3.5">
                  Discuss an opportunity
                </Button>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-300">
                {[
                  {
                    href: profile.github,
                    icon: Github,
                    label: "GitHub",
                    external: true,
                  },
                  {
                    href: profile.linkedin,
                    icon: Linkedin,
                    label: "LinkedIn",
                    external: true,
                  },
                  {
                    href: `mailto:${profile.email}`,
                    icon: Mail,
                    label: profile.email,
                    external: false,
                  },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 hover:text-white"
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : { y: -1, transition: { duration: 0.18 } }
                    }
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.12} y={24}>
            <InteractiveSurface
              glare
              className="surface-card-strong group relative overflow-hidden p-7 sm:p-8"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-slate-500">
                    Profile
                  </p>
                  <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.04em] text-white">
                    {profile.name}
                  </h2>
                  <p className="mt-2 text-2xl text-slate-300">{profile.title}</p>
                </div>
                <motion.div
                  className="h-24 w-24 rounded-[2rem] border border-emerald-300/18 bg-emerald-300/8 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  animate={
                    prefersReducedMotion
                      ? undefined
                      : { y: [0, -3, 0], scale: [1, 1.015, 1] }
                  }
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <dl className="mt-10 grid gap-4 sm:grid-cols-2">
                <motion.div
                  className="rounded-[24px] border border-white/8 bg-slate-950/36 px-6 py-5"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -2, borderColor: "rgba(255,255,255,0.12)" }
                  }
                >
                  <dt className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Experience
                  </dt>
                  <dd className="mt-8 flex min-h-[52px] items-center text-[2rem] font-semibold tracking-[-0.04em] text-white">
                    {profile.experience}
                  </dd>
                </motion.div>
                <motion.div
                  className="rounded-[24px] border border-white/8 bg-slate-950/36 px-6 py-5"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -2, borderColor: "rgba(255,255,255,0.12)" }
                  }
                >
                  <dt className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Location
                  </dt>
                  <dd className="mt-8 min-h-[52px] max-w-[14ch] text-lg font-semibold leading-7 text-white">
                    {profile.location}
                  </dd>
                </motion.div>
              </dl>

              <motion.ul
                className="mt-10 space-y-4"
                initial={prefersReducedMotion ? false : { opacity: 0 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ staggerChildren: 0.06, delayChildren: 0.08 }}
              >
                {featureItems.map((item) => (
                  <motion.li
                    key={item}
                    className="flex items-start gap-4 text-slate-300"
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/8 text-emerald-300">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-base leading-7">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </InteractiveSurface>
          </MotionReveal>
        </div>
      </section>

      <div className="section-divider">
        <SectionWrapper
          eyebrow="Featured work"
          title="Backend projects shaped by maintainability, API quality, and practical architecture decisions."
          description="A selection of work that reflects how I approach backend engineering in real product environments."
        >
          <motion.div
            className="grid gap-6 lg:grid-cols-3"
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {projects.map((project) => (
              <MotionReveal key={project.id} y={20}>
                <ProjectCard project={project} />
              </MotionReveal>
            ))}
          </motion.div>
        </SectionWrapper>
      </div>

      <div className="section-divider">
        <SectionWrapper
          eyebrow="Approach"
          title="A practical engineering mindset focused on quality, delivery, and long-term maintainability."
          description="I value technical decisions that keep systems understandable, delivery steady, and collaboration effective as product demands grow."
        >
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Architecture with purpose",
                text: "I care about service boundaries, API contracts, and implementation choices that stay workable as systems evolve.",
              },
              {
                title: "Reliable execution",
                text: "I aim for stable backend delivery with sensible tradeoffs, clear structure, and code that teams can maintain confidently.",
              },
              {
                title: "Product-aware collaboration",
                text: "I work comfortably with frontend, QA, and product stakeholders to keep technical delivery aligned with real product needs.",
              },
            ].map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.04}>
                <motion.article
                  className="surface-card p-7"
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : { y: -4, transition: { duration: 0.2 } }
                  }
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
                </motion.article>
              </MotionReveal>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <div className="section-divider">
        <SectionWrapper
          eyebrow="Next step"
          title="Open to backend engineering roles and product-focused collaboration."
          description="If you are hiring for Java, Spring Boot, or API-focused backend work, I’d be glad to discuss how I can contribute."
        >
          <MotionReveal y={22}>
            <motion.div
              className="surface-card-strong flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10"
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -3,
                      transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
                    }
              }
            >
              <div className="max-w-2xl">
                <p className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  Available for Java backend roles, API-focused product teams, and
                  practical engineering collaboration.
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  I’m most effective in work that values maintainable systems, clear
                  APIs, and thoughtful backend delivery.
                </p>
              </div>
              <Button to="/contact" className="px-6 py-3.5">
                Get in touch
              </Button>
            </motion.div>
          </MotionReveal>
        </SectionWrapper>
      </div>
    </div>
  );
}
