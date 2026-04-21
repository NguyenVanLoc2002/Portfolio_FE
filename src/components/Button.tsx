import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

type ButtonProps =
  | (BaseProps & {
      href: string;
      to?: never;
      onClick?: never;
      type?: never;
    })
  | (BaseProps & {
      to: string;
      href?: never;
      onClick?: never;
      type?: never;
    })
  | (BaseProps & {
      onClick?: () => void;
      type?: "button" | "submit";
      href?: never;
      to?: never;
    });

const styles: Record<ButtonVariant, string> = {
  primary:
    "border border-emerald-200/10 bg-gradient-to-r from-emerald-300 to-cyan-300 text-slate-950 shadow-[0_12px_30px_rgba(52,211,153,0.16)] hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(52,211,153,0.22)]",
  secondary:
    "border border-white/10 bg-white/[0.04] text-slate-100 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.08]",
  ghost:
    "border border-transparent text-slate-300 hover:bg-white/[0.04] hover:text-white",
};

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300/30";

const MotionLink = motion.create(Link);

export default function Button(props: ButtonProps) {
  const prefersReducedMotion = useReducedMotion();
  const className = `${baseClassName} ${styles[props.variant ?? "primary"]} ${
    props.className ?? ""
  }`;
  const hoverMotion = prefersReducedMotion
    ? undefined
    : {
        y: -2,
        scale: 1.01,
      };
  const tapMotion = prefersReducedMotion ? undefined : { scale: 0.985 };

  if ("href" in props) {
    return (
      <motion.a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={className}
        whileHover={hoverMotion}
        whileTap={tapMotion}
      >
        {props.children}
      </motion.a>
    );
  }

  if ("to" in props && props.to) {
    return (
      <MotionLink
        to={props.to}
        className={className}
        whileHover={hoverMotion}
        whileTap={tapMotion}
      >
        {props.children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={className}
      whileHover={hoverMotion}
      whileTap={tapMotion}
    >
      {props.children}
    </motion.button>
  );
}
