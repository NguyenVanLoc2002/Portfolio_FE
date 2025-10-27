import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Hi Ho — Built with React, Vite & Tailwind
        </div>
      </footer>
    </div>
  )
}
