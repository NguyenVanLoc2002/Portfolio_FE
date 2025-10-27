"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/project" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative bg-slate-950 px-3 py-1.5 rounded-lg">
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Hi.
              </span>
            </div>
          </div>
          <span className="hidden sm:inline text-sm font-semibold text-white">Portfolio</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-emerald-400" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white rounded-full" />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white rounded-full"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-white/5"
          >
            <nav className="flex flex-col gap-2 px-4 py-4">
              {navItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
