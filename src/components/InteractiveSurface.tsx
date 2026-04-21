import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import type { PointerEventHandler, ReactNode } from "react";

interface InteractiveSurfaceProps {
  children: ReactNode;
  className?: string;
  glare?: boolean;
  onPointerMove?: PointerEventHandler<HTMLDivElement>;
  onPointerLeave?: PointerEventHandler<HTMLDivElement>;
}

export default function InteractiveSurface({
  children,
  className,
  glare = false,
  onPointerMove,
  onPointerLeave,
}: InteractiveSurfaceProps) {
  const reducedMotion = useReducedMotion();
  const rotateX = useSpring(0, { stiffness: 220, damping: 26, mass: 0.8 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 26, mass: 0.8 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const background = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.08), transparent 32%)`;

  const handlePointerMove: PointerEventHandler<HTMLDivElement> = (event) => {
    onPointerMove?.(event);
    if (reducedMotion || window.innerWidth < 1024) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    rotateX.set((0.5 - py) * 5);
    rotateY.set((px - 0.5) * 6);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const resetTilt: PointerEventHandler<HTMLDivElement> = (event) => {
    onPointerLeave?.(event);
    rotateX.set(0);
    rotateY.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.div
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={
        reducedMotion
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }
      }
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -4,
              transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
            }
      }
    >
      {glare && !reducedMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-inherit opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      ) : null}
      {children}
    </motion.div>
  );
}
