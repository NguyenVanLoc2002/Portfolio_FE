import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { opacity: 0, y: -14 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        isScrolled
          ? "border-white/8 bg-slate-950/84 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="page-shell flex h-24 items-center justify-between gap-4">
        <motion.div
          whileHover={
            prefersReducedMotion ? undefined : { y: -1, transition: { duration: 0.18 } }
          }
        >
          <NavLink to="/" className="flex items-center gap-4">
            <span className="flex h-16 w-16 items-center justify-center rounded-[22px] border border-emerald-300/20 bg-emerald-300/8 text-2xl font-semibold text-emerald-200 shadow-[0_12px_32px_rgba(16,185,129,0.08)]">
              H
            </span>
            <div>
              <p className="text-[15px] font-semibold text-white">Lộc Nguyễn</p>
              <p className="mt-1 text-xs uppercase tracking-[0.34em] text-slate-400">
                Java Developer
              </p>
            </div>
          </NavLink>
        </motion.div>

        <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.035] px-2 py-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-200 md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/8 bg-slate-950/96 md:hidden">
          <nav className="page-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </motion.header>
  );
}
