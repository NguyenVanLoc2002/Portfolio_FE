"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const sparkleHostRef = useRef<HTMLDivElement>(null)

  // Parallax effects
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -100])
  const ySlower = useTransform(scrollYProgress, [0, 1], [0, -150])

  const makeSparkles = async () => {
    const host = sparkleHostRef.current
    if (!host) return

    const mod: any = await import("animejs")
    const anime = (mod.default ?? mod) as (opts: any) => any

    const count = 16
    const particles: HTMLSpanElement[] = []
    for (let i = 0; i < count; i++) {
      const s = document.createElement("span")
      s.className =
        "absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 will-change-transform"
      host.appendChild(s)
      particles.push(s)
    }

    anime({
      targets: particles,
      translateX: () => Math.random() * 280 - 140,
      translateY: () => Math.random() * 200 - 100,
      scale: [
        { value: 1, duration: 100 },
        { value: 0, duration: 600 },
      ],
      opacity: [
        { value: 1, duration: 100 },
        { value: 0, duration: 600 },
      ],
      easing: "easeOutCubic",
      duration: 700,
      delay: (el: Element, i: number) => i * 15,
      complete: () => particles.forEach((p) => p.remove()),
    })
  }

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

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Animated Background Blobs */}
      <motion.div
        style={{ y: ySlower }}
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full blur-3xl opacity-40"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.4),transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{ y: ySlow }}
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full blur-3xl opacity-50"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.35),transparent_70%)]" />
      </motion.div>

      <motion.div
        style={{ y: ySlow }}
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 h-96 w-96 -translate-x-1/2 blur-3xl opacity-30"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.25),transparent_70%)]" />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:py-32 lg:grid-cols-2">
        {/* Left: Hero Text */}
        <motion.div variants={container} initial="hidden" animate="visible" className="z-10 space-y-6">
          <motion.div variants={itemUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-300">Welcome to my portfolio</span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="text-white">Experiences</span>
          </motion.h1>

          <motion.p variants={itemUp} className="max-w-xl text-lg text-slate-300 leading-relaxed">
            I build beautiful, performant web applications with React, TypeScript, and modern web technologies.
            Passionate about clean code and exceptional user experiences.
          </motion.p>

          <motion.div variants={itemUp} className="flex flex-wrap gap-4 pt-4">
            <div className="relative" ref={sparkleHostRef}>
              <motion.button
                onClick={makeSparkles}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50"
              >
                Get Started
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </motion.button>
            </div>

            <motion.a
              href="#projects"
              whileHover={{ x: 4 }}
              className="inline-flex items-center justify-center rounded-xl border border-slate-400/30 bg-slate-400/5 px-8 py-3 font-semibold text-white backdrop-blur hover:border-slate-300/50 hover:bg-slate-400/10 transition-all"
            >
              View My Work
            </motion.a>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemUp} className="pt-8">
            <p className="text-sm text-slate-400 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "Framer Motion"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 hover:border-emerald-400/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Visual Element */}
        <div className="relative z-10 flex items-center justify-center">
          {/* Glow Background */}
          <motion.div
            style={{ y: ySlow }}
            className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-emerald-400/10 via-cyan-400/10 to-blue-400/10 blur-3xl"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.3 }}
            className="relative rounded-2xl border border-slate-700/50 bg-slate-900/40 p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <motion.img
                  style={{ y: ySlower }}
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Profile"
                  className="h-16 w-16 rounded-xl object-cover ring-2 ring-emerald-400/30"
                />
                <div>
                  <div className="text-sm text-slate-400">Developer</div>
                  <div className="text-xl font-bold text-white">Hi Ho</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Frontend Development", status: "Expert" },
                  { label: "UI/UX Design", status: "Advanced" },
                  { label: "Performance", status: "Focused" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm text-slate-300">{item.label}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1400px_circle_at_center,transparent,rgba(2,6,23,0.8))]" />
    </div>
  )
}
