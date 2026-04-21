import { motion, useReducedMotion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { profile } from "../data/profile";

export default function RootLayout() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="section-divider">
        <div className="page-shell py-10 sm:py-12">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="surface-card flex flex-col gap-8 px-6 py-8 sm:px-8 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Portfolio
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                {profile.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Java Developer building maintainable backend services, reliable APIs,
                and systems that can grow with real product needs.
              </p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-slate-300 sm:items-end">
              <div className="flex flex-wrap gap-5">
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Open to backend engineering opportunities
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
