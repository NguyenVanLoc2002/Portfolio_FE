# 🧠 AGENTS.md — Portfolio (React + Vite)

## 🎯 Project Goal
This is a personal portfolio website.

Primary goals:
- Modern, clean, professional UI
- Strong visual hierarchy
- Fully responsive (mobile-first)
- Smooth but subtle animations
- High code quality and maintainability

---

## ⚙️ Tech Stack
- React (functional components + hooks)
- Vite
- JavaScript or TypeScript
- Styling: (detect from project — CSS / SCSS / Tailwind)

---

## 📁 Project Structure Rules

- Keep a clean and scalable structure
- Prefer:

src/
  components/
  pages/
  hooks/
  assets/
  styles/
  utils/

Rules:
- Avoid deeply nested folders
- Group by feature when possible
- Keep components small and reusable

---

## 🧱 Component Rules

- Use functional components only
- Extract reusable components:
  - Button
  - SectionWrapper
  - ProjectCard
- Avoid duplication
- Keep components focused (single responsibility)

---

## 🎨 UI / Design Principles

- Modern, minimal design
- Consistent spacing system (8px grid recommended)
- Strong typography hierarchy:
  - clear headings
  - readable body text
- Limit color palette (primary + neutral)
- Avoid visual clutter

---

## 📐 Layout Rules

- Use consistent container width
- Align content properly
- Maintain vertical rhythm (spacing between sections)
- Use section-based layout:
  - Hero
  - About
  - Projects
  - Contact

---

## 📱 Responsive Rules

- Mobile-first approach
- Support:
  - mobile
  - tablet
  - desktop
- Avoid overflow and horizontal scroll
- Ensure readability on small screens

---

## ✨ Animation Guidelines

- Use animations sparingly
- Keep transitions smooth and fast
- Avoid heavy or distracting effects
- Prefer subtle hover / fade / slide

---

## ♿ Accessibility Rules

- Use semantic HTML
- Add alt text for images
- Ensure sufficient color contrast
- Use proper button / link elements
- Avoid div-only clickable elements

---

## ⚡ Performance Rules

- Lazy load images when possible
- Avoid unnecessary re-renders
- Keep bundle size small
- Avoid heavy dependencies

---

## 🧼 Code Quality Rules

- Clean, readable code
- Avoid hardcoded values (reuse constants)
- Avoid inline styles unless necessary
- Prefer reusable styles / classes
- Keep logic separated from UI

---

## 🚫 DO NOT

- Do NOT rewrite entire project unless required
- Do NOT introduce unnecessary libraries
- Do NOT overengineer
- Do NOT break existing working features
- Do NOT mix multiple styling systems

---

## ✅ ALWAYS

- Make incremental improvements
- Preserve working behavior
- Refactor only when necessary
- Keep UI consistent across pages
- Think like a senior frontend engineer

---

## 📦 When Modifying Code

Always:
1. Explain what was changed
2. List affected files
3. Keep changes minimal and safe
4. Follow existing patterns unless they are clearly bad

---

## 🎯 Priority Order

1. Fix broken / unfinished parts
2. Improve layout and UI consistency
3. Improve responsiveness
4. Improve code quality
5. Improve performance & accessibility