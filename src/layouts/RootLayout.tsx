import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Project", to: "/project" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/*Header*/}
      <header className="sticky top-0 z-50 bg-white/70 border-b dark:bg-black/40 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <NavLink to="/" className="font-semibold tracking-tight">
            <span className="text-lg">
              Hi
              <span className="text-indigo-500">.</span>
              Portfolio
            </span>
          </NavLink>

          <nav className="flex items-center gap-1">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  [
                    "relative px-3 py-2 text-sm font-medium transition",
                    "hover:opacity-80",
                    isActive
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-200",
                    // underline hover effect
                    "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5",
                    "after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform",
                    "after:bg-indigo-500",
                    isActive ? "after:scale-x-100" : "",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/*Main Content*/}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Outlet />
        </div>
      </main>

      {/*Footer*/}
      <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-8">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Hi Ho — Built with React & Tailwind
        </div>
      </footer>
    </div>
  );
}
