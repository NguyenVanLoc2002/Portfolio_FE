import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-spacing ${className ?? ""}`}>
      <div className="page-shell">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 inline-flex rounded-full border border-emerald-300/16 bg-emerald-300/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-200/90">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl sm:leading-[1.08]">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-slate-300 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10 sm:mt-12">{children}</div>
      </div>
    </section>
  );
}
