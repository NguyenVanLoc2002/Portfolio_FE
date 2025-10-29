import type React from "react";
import { useEffect, useRef, useState } from "react";
import { Code2, Database, Server, GitBranch, Zap } from "lucide-react";

export default function Home() {
  const sparkleHostRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const initAnime = async () => {
      const mod: any = await import("animejs");
      const anime = (mod.default ?? mod) as typeof import("animejs").default;

      if (heroRef.current) {
        const children = heroRef.current.querySelectorAll(".animate-item");
        anime({
          targets: children,
          opacity: [0, 1],
          translateY: [20, 0],
          delay: anime.stagger(100, { start: 200 }),
          duration: 800,
          easing: "easeOutCubic",
        });
      }

      if (profileCardRef.current) {
        anime({
          targets: profileCardRef.current,
          opacity: [0, 1],
          translateY: [40, 0],
          rotate: [-4, 0],
          delay: 300,
          duration: 1000,
          easing: "spring(1, 80, 10, 0)",
        });
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll(".fade-in-item");
              anime({
                targets: items,
                opacity: [0, 1],
                translateY: [20, 0],
                delay: anime.stagger(100),
                duration: 600,
                easing: "easeOutCubic",
              });
              observer.unobserve(entry.target as Element);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
      );

      sectionsRef.current.forEach(
        (section) => section && observer.observe(section)
      );
      return () => observer.disconnect();
    };

    initAnime();
  }, []);

  const makeSparkles = async () => {
    const host = sparkleHostRef.current;
    if (!host) return;
    const { default: animejs } = await import("animejs");
    const count = 16;
    const particles: HTMLSpanElement[] = [];

    for (let i = 0; i < count; i++) {
      const s = document.createElement("span");
      s.className =
        "absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300 will-change-transform";
      host.appendChild(s);
      particles.push(s);
    }

    animejs({
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
      delay: (_el, i) => i * 15,
      complete: () => particles.forEach((p) => p.remove()),
    });
  };

  const handleButtonHover = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { default: anime } = await import("animejs");
    anime({
      targets: e.currentTarget,
      scale: 1.05,
      translateY: -2,
      duration: 200,
      easing: "easeOutCubic",
    });
  };
  const handleButtonLeave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { default: anime } = await import("animejs");
    anime({
      targets: e.currentTarget,
      scale: 1,
      translateY: 0,
      duration: 200,
      easing: "easeOutCubic",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full blur-3xl opacity-40"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.4),transparent_70%)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 h-80 w-80 rounded-full blur-3xl opacity-50"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.35),transparent_70%)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-0 h-96 w-96 -translate-x-1/2 blur-3xl opacity-30"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.25),transparent_70%)]" />
      </div>

      {/* Hero */}
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:py-32 lg:grid-cols-2">
        <div ref={heroRef} className="z-10 space-y-6">
          <div className="animate-item">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-2 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-300">
                Welcome to my portfolio
              </span>
            </div>
          </div>

          <h1 className="animate-item text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="text-white">Experiences</span>
          </h1>

          <p className="animate-item max-w-xl text-lg text-slate-300 leading-relaxed">
            Java Backend Developer với 1 năm kinh nghiệm xây dựng các ứng dụng
            enterprise. Chuyên về Spring Boot, Microservices và kiến trúc phân
            tán.
          </p>

          <div className="animate-item flex flex-wrap gap-4 pt-4">
            <div className="relative" ref={sparkleHostRef}>
              <button
                onClick={makeSparkles}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-8 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50"
              >
                Get Started
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-slate-400/30 bg-slate-400/5 px-8 py-3 font-semibold text-white backdrop-blur hover:border-slate-300/50 hover:bg-slate-400/10 transition-all"
            >
              View My Work
            </a>
          </div>

          <div className="animate-item pt-8">
            <p className="text-sm text-slate-400 mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "Microservices",
                "PostgreSQL",
                "Docker",
                "Kafka",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs text-slate-300 hover:border-emerald-400/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Card */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-emerald-400/10 via-cyan-400/10 to-blue-400/10 blur-3xl" />
          <div
            ref={profileCardRef}
            className="relative rounded-2xl border border-slate-700/50 bg-slate-900/40 p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                  alt="Profile"
                  className="h-16 w-16 rounded-xl object-cover ring-2 ring-emerald-400/30"
                />
                <div>
                  <div className="text-sm text-slate-400">Java Developer</div>
                  <div className="text-xl font-bold text-white">Hi Ho</div>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Backend Development", status: "Expert" },
                  { label: "Microservices", status: "Advanced" },
                  { label: "System Design", status: "Focused" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-300">{item.label}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/30">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="relative mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="fade-in-item text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            1 năm kinh nghiệm phát triển backend với Java và Spring Boot
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Server,
              title: "Backend Development",
              description:
                "Xây dựng RESTful APIs với Spring Boot, JPA/Hibernate",
            },
            {
              icon: Database,
              title: "Database Design",
              description: "Thiết kế và tối ưu database với PostgreSQL, MySQL",
            },
            {
              icon: GitBranch,
              title: "Microservices",
              description:
                "Triển khai kiến trúc Microservices với Spring Cloud",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="fade-in-item group relative rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 backdrop-blur-xl hover:border-emerald-400/50 transition-all"
            >
              <div className="absolute inset-0 rounded-xl pointer-events-none [mask-image:radial-gradient(240px_120px_at_top_right,black,transparent)] ring-1 ring-emerald-400/10" />
              <div className="inline-flex p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/30 mb-4">
                <item.icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects — 3D Carousel */}
      <ProjectsSection register={(el) => (sectionsRef.current[1] = el)} />

      {/* Tech Stack — brighter surface */}
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="relative mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="fade-in-item text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-linear-to-r from-emerald-200 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Công nghệ và công cụ tôi sử dụng hàng ngày
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Java", icon: Code2, level: 90 },
            { name: "Spring Boot", icon: Zap, level: 85 },
            { name: "PostgreSQL", icon: Database, level: 80 },
            { name: "Docker", icon: Server, level: 75 },
            { name: "Microservices", icon: GitBranch, level: 70 },
            { name: "Kafka", icon: Zap, level: 65 },
            { name: "Redis", icon: Database, level: 70 },
            { name: "Git", icon: GitBranch, level: 85 },
          ].map((tech) => (
            <div
              key={tech.name}
              className="fade-in-item relative rounded-xl border border-slate-600/40 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-700/30 p-6 shadow-[0_0_0_1px_rgba(16,185,129,0.08)] hover:shadow-[0_0_0_1px_rgba(16,185,129,0.2)] transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <tech.icon className="h-5 w-5 text-emerald-300" />
                <span className="font-semibold text-white">{tech.name}</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full transition-all duration-1000"
                  style={{ width: `${tech.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — brighter with edge highlight */}
      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        className="relative mx-auto w-full max-w-4xl px-6 py-20"
      >
        <div className="fade-in-item relative rounded-2xl border border-slate-600/40 bg-gradient-to-br from-slate-800/40 via-slate-800/20 to-slate-700/30 p-12 text-center overflow-hidden shadow-[0_0_0_1px_rgba(59,130,246,0.08)]">
          <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(black,transparent_60%)] ring-1 ring-cyan-400/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Tôi luôn sẵn sàng cho các cơ hội mới và dự án thú vị. Hãy liên hệ
              để thảo luận!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-300 to-cyan-300 px-8 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/40"
              >
                Contact Me
              </button>
              <button
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300/30 bg-slate-200/10 px-8 py-3 font-semibold text-white backdrop-blur hover:border-slate-200/50 hover:bg-slate-200/20 transition-all"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1400px_circle_at_center,transparent,rgba(2,6,23,0.8))]" />
    </div>
  );
}

// ---------------- 3D Projects Section ----------------
function ProjectsSection({
  register,
}: {
  register: (el: HTMLDivElement | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0); // degrees
  const [autoPlay, setAutoPlay] = useState(true);
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const items = [
    {
      title: "E-Commerce Platform",
      description: "Hệ thống thương mại điện tử với kiến trúc Microservices",
      tech: ["Spring Boot", "Kafka", "Redis"],
      highlight: "Microservices",
    },
    {
      title: "Banking System",
      description: "Ứng dụng ngân hàng với tính năng giao dịch real-time",
      tech: ["Java", "PostgreSQL", "Docker"],
      highlight: "High Performance",
    },
    {
      title: "Inventory Management",
      description: "Quản lý kho hàng với dashboard analytics",
      tech: ["Spring MVC", "MySQL", "REST API"],
      highlight: "Enterprise",
    },
    {
      title: "Customer Loyalty",
      description: "Membership, points & promotion engine",
      tech: ["Spring", "PostgreSQL", "Redis"],
      highlight: "Loyalty",
    },
  ];

  // drag to rotate
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startAngle = 0;

    const onDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      startAngle = angle;
      setAutoPlay(false);
      (e.target as Element).setPointerCapture?.(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      setAngle(startAngle + dx * 0.25); // sensitivity
    };
    const onUp = (e: PointerEvent) => {
      isDown = false;
      setAutoPlay(true);
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    };
    const onWheel = (e: WheelEvent) => {
      setAutoPlay(false);
      setAngle((a) => a + e.deltaY * 0.2);
    };

    el.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, [angle]);

  // autoplay rotation
  useEffect(() => {
    if (prefersReduced) return;
    let raf = 0;
    const loop = () => {
      setAngle((a) => (autoPlay ? a + 0.05 : a));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [autoPlay, prefersReduced]);

  const radius = 380; // px translateZ

  return (
    <div
      id="projects"
      ref={register}
      className="relative mx-auto w-full max-w-6xl px-6 py-20"
    >
      <div className="fade-in-item text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Kéo hoặc cuộn để xoay băng chuyền 3D. Hover để nổi bật dự án.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative mx-auto h-[520px] w-full overflow-visible [perspective:1200px] select-none"
      >
        <ul
          className="relative mx-auto h-full w-full [transform-style:preserve-3d] transition-[transform] duration-300"
          style={{ transform: `translateZ(-${radius}px) rotateY(${angle}deg)` }}
        >
          {items.map((project, idx) => {
            const theta = (360 / items.length) * idx;
            return (
              <li
                key={project.title}
                className="group absolute left-1/2 top-1/2 w-[320px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
                style={{
                  transform: `rotateY(${theta}deg) translateZ(${radius}px)`,
                }}
              >
                <div className="relative rounded-xl border border-slate-700/60 bg-slate-900/60 p-6 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:border-emerald-400/60 hover:shadow-emerald-500/20">
                  <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-400/10 text-emerald-300 text-xs font-medium rounded-bl-lg border-l border-b border-emerald-400/30">
                    {project.highlight}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-xs text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile fallback: simple grid */}
      <div className="mt-8 text-center text-xs text-slate-500 md:hidden">
        Vuốt ngang danh sách ở trên để xoay.
      </div>
    </div>
  );
}
