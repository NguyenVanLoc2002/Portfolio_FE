import { Award, BriefcaseBusiness, MapPin, Sparkles } from "lucide-react";
import Button from "../components/Button";
import SectionWrapper from "../components/SectionWrapper";
import { profile } from "../data/profile";
import { skillsByCategory } from "../data/skills";

const categoryAccent: Record<string, string> = {
  Language: "text-orange-200 border-orange-300/18 bg-orange-300/8",
  Framework: "text-emerald-200 border-emerald-300/18 bg-emerald-300/8",
  Database: "text-blue-200 border-blue-300/18 bg-blue-300/8",
  Tools: "text-cyan-200 border-cyan-300/18 bg-cyan-300/8",
  Architecture: "text-violet-200 border-violet-300/18 bg-violet-300/8",
};

export default function About() {
  return (
    <div>
      <SectionWrapper
        eyebrow="About"
        title="Backend-focused engineering with an emphasis on maintainability, API quality, and practical delivery."
        description="I’m interested in work where backend systems need to stay clear, reliable, and adaptable as product requirements become more demanding."
        className="pt-10 sm:pt-14"
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface-card-strong p-8 sm:p-9">
            <div className="space-y-6 text-slate-300">
              {profile.bio.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-8 sm:text-base">
                  {paragraph}
                </p>
              ))}
              <p className="text-[15px] leading-8 sm:text-base">
                My core strengths are in{" "}
                <span className="font-semibold text-white">Java</span>,{" "}
                <span className="font-semibold text-white">Spring Boot</span>,{" "}
                <span className="font-semibold text-white">API design</span>, and{" "}
                <span className="font-semibold text-white">backend architecture</span>.
                I value codebases that are straightforward to review, extend, and
                operate over time.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface-card p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="h-5 w-5 text-emerald-300" />
                <h2 className="text-lg font-semibold text-white">Profile summary</h2>
              </div>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <li className="flex items-start gap-3">
                  <Award className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                  <span>{profile.experience} building backend systems in product-oriented environments</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                  <span>{profile.projects} featured projects focused on backend architecture and API delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                  <span>{profile.location}</span>
                </li>
              </ul>
            </div>

            <div className="surface-card p-6 sm:p-7">
              <h2 className="text-lg font-semibold text-white">What I bring</h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {profile.strengths.map((strength) => (
                  <li key={strength} className="rounded-[20px] border border-white/8 bg-slate-950/38 px-4 py-3">
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <div className="section-divider">
        <SectionWrapper
          eyebrow="Highlights"
          title="How I approach backend work"
          description="The parts of engineering I pay the most attention to are usually the ones that matter most as systems and teams grow."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {profile.highlights.map((highlight) => (
              <article key={highlight} className="surface-card p-6">
                <p className="text-sm leading-7 text-slate-300">{highlight}</p>
              </article>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <div className="section-divider">
        <SectionWrapper
          eyebrow="Skills"
          title="Technical toolbox"
          description="A focused view of the technologies and backend capabilities I work with most often."
        >
          <div className="space-y-10">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <section key={category}>
                <div
                  className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${categoryAccent[category]}`}
                >
                  {category}
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {categorySkills.map((skill) => (
                    <article key={skill.name} className="surface-card p-5">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-5 w-5 text-emerald-300" />
                        <h3 className="font-medium text-white">{skill.name}</h3>
                      </div>
                      <div className="mt-5">
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-slate-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </SectionWrapper>
      </div>

      <div className="section-divider">
        <SectionWrapper
          eyebrow="Contact"
          title="Interested in working together?"
          description="If you’re hiring for backend engineering work or want to discuss a product-focused project, I’d be glad to connect."
        >
          <div className="surface-card-strong flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
            <div className="max-w-2xl">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-white">
                Open to Java backend roles, API-focused product teams, and practical
                collaboration on real systems.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                I’m especially interested in work that values maintainable services,
                clean APIs, and clear engineering communication.
              </p>
            </div>
            <Button to="/contact" className="px-6 py-3.5">
              Contact me
            </Button>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
