
import { motion } from "framer-motion"
import { skillsByCategory } from "../data/skills"
import { profile } from "../data/profile"
import { Award, Target, Lightbulb } from "lucide-react"
import type { skills } from "../data/skills" // Import the skills variable

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  }

  const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
    Language: { bg: "bg-orange-400/10", border: "border-orange-400/30", text: "text-orange-300" },
    Framework: { bg: "bg-emerald-400/10", border: "border-emerald-400/30", text: "text-emerald-300" },
    Database: { bg: "bg-blue-400/10", border: "border-blue-400/30", text: "text-blue-300" },
    Tools: { bg: "bg-cyan-400/10", border: "border-cyan-400/30", text: "text-cyan-300" },
    Architecture: { bg: "bg-purple-400/10", border: "border-purple-400/30", text: "text-purple-300" },
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full blur-3xl opacity-40"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.4),transparent_70%)]" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full blur-3xl opacity-50"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.35),transparent_70%)]" />
      </motion.div>

      {/* Header Section */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div variants={container} initial="hidden" animate="visible" className="space-y-6">
          <motion.div variants={itemUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-300">About Me</span>
            </div>
          </motion.div>

          <motion.h1 variants={itemUp} className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              {profile.name}
            </span>
            <br />
            <span className="text-white">{profile.title}</span>
          </motion.h1>

          <motion.p variants={itemUp} className="max-w-3xl text-lg text-gray-100 leading-relaxed">
            {profile.description}
          </motion.p>

          {/* Stats */}
          <motion.div variants={itemUp} className="grid grid-cols-3 gap-4 pt-8">
            {[
              { icon: Award, label: "Experience", value: profile.experience },
              { icon: Target, label: "Projects", value: profile.projects },
              { icon: Lightbulb, label: "Focus", value: "Backend" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-4 backdrop-blur-xl"
              >
                <stat.icon className="h-5 w-5 text-emerald-400 mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Highlights Section */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-900/60 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Key Achievements</h2>
          <ul className="space-y-4">
            {profile.highlights.map((highlight, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span className="text-gray-100">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Skills Section by Category */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-200 max-w-2xl mx-auto">
            Proficiency levels in technologies and tools I work with daily
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {Object.entries(skillsByCategory).map((entry, categoryIdx) => {
            const [category, categorySkills] = entry as [string, typeof skills]
            const colors = categoryColors[category as keyof typeof categoryColors]

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
              >
                <h3
                  className={`text-lg font-semibold mb-6 px-4 py-2 rounded-lg inline-block ${colors.bg} ${colors.border} border ${colors.text}`}
                >
                  {category}
                </h3>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {categorySkills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="group relative rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-xl hover:border-emerald-400/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg bg-${skill.color}-400/10 border border-${skill.color}-400/30`}>
                          <skill.icon className={`h-5 w-5 text-${skill.color}-400`} />
                        </div>
                        <span className="font-semibold text-white">{skill.name}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-300">Proficiency</span>
                          <span className="text-xs font-semibold text-emerald-300">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.05 + 0.2 }}
                            className={`h-full bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-300 rounded-full`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative mx-auto w-full max-w-4xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-blue-500/10 p-12 backdrop-blur-xl text-center overflow-hidden shadow-lg shadow-emerald-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-cyan-400/5 to-blue-400/10" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-200 to-cyan-200 bg-clip-text text-transparent mb-4">
              Ready to Collaborate?
            </h2>
            <p className="text-slate-100 text-lg mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="mailto:contact@example.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50"
              >
                Get In Touch
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300/50 bg-slate-400/10 px-8 py-3 font-semibold text-white backdrop-blur hover:border-slate-200/70 hover:bg-slate-400/20 transition-all"
              >
                View Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1400px_circle_at_center,transparent,rgba(2,6,23,0.8))]" />
    </div>
  )
}
