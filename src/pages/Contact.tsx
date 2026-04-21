import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../components/Button";
import MotionReveal from "../components/MotionReveal";
import SectionWrapper from "../components/SectionWrapper";
import { profile } from "../data/profile";
import { contactSchema, type ContactFormData } from "../schemas/contact";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (values: ContactFormData) => {
    const subject = encodeURIComponent(values.subject);
    const body = encodeURIComponent(
      `Hi Lộc Nguyễn,\n\n${values.message}\n\nFrom:\n${values.name}\n${values.email}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setIsSent(true);
    reset();
  };

  return (
    <div>
      <SectionWrapper
        eyebrow="Contact"
        title="Let’s discuss backend roles, product engineering work, or collaboration."
        description="If you’re hiring for Java, Spring Boot, or API-focused backend work, email is the fastest way to reach me. You can also use the form below to prepare a message."
        className="pt-10 sm:pt-14"
      >
        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="space-y-6">
            <MotionReveal>
              <motion.div
                className="surface-card p-6 sm:p-7"
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              >
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  Contact details
                </h2>
                <ul className="mt-6 space-y-5 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                    <a href={`mailto:${profile.email}`} className="hover:text-white">
                      {profile.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 flex-none text-emerald-300" />
                    <span>{profile.location}</span>
                  </li>
                </ul>
              </motion.div>
            </MotionReveal>

            <MotionReveal delay={0.05}>
              <motion.div
                className="surface-card p-6 sm:p-7"
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              >
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  Profiles
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={profile.github} variant="secondary">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Button>
                  <Button href={profile.linkedin} variant="secondary">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Button>
                </div>
              </motion.div>
            </MotionReveal>

            <MotionReveal delay={0.1}>
              <motion.div
                className="surface-card p-6 sm:p-7"
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              >
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  Helpful context
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  <li>Role, project scope, or team context</li>
                  <li>Expected timeline or delivery priorities</li>
                  <li>Relevant backend stack, API, or system constraints</li>
                </ul>
              </motion.div>
            </MotionReveal>
          </aside>

          <MotionReveal delay={0.08} y={22}>
            <motion.div
              className="surface-card-strong p-6 sm:p-8"
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                Prepare a message
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Submitting this form opens your email app with a drafted message to{" "}
                {profile.email}.
              </p>

              {isSent ? (
                <div className="mt-6 rounded-[22px] border border-emerald-300/18 bg-emerald-300/8 px-4 py-3 text-sm text-emerald-100">
                  Your email draft is ready. If no email app opened, you can contact
                  me directly at {profile.email}.
                </div>
              ) : null}

              <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name")}
                    className="w-full rounded-[20px] border border-white/8 bg-slate-950/48 px-4 py-3 text-white outline-none transition focus:border-emerald-300/32"
                    placeholder="Your name"
                  />
                  {errors.name ? (
                    <p className="mt-2 text-sm text-rose-300">{errors.name.message}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full rounded-[20px] border border-white/8 bg-slate-950/48 px-4 py-3 text-white outline-none transition focus:border-emerald-300/32"
                    placeholder="nguyenvanloc6756@gmail.com"
                  />
                  {errors.email ? (
                    <p className="mt-2 text-sm text-rose-300">{errors.email.message}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    {...register("subject")}
                    className="w-full rounded-[20px] border border-white/8 bg-slate-950/48 px-4 py-3 text-white outline-none transition focus:border-emerald-300/32"
                    placeholder="How can we work together?"
                  />
                  {errors.subject ? (
                    <p className="mt-2 text-sm text-rose-300">
                      {errors.subject.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register("message")}
                    className="w-full rounded-[20px] border border-white/8 bg-slate-950/48 px-4 py-3 text-white outline-none transition focus:border-emerald-300/32"
                    placeholder="Share the role, project, or context."
                  />
                  {errors.message ? (
                    <p className="mt-2 text-sm text-rose-300">
                      {errors.message.message}
                    </p>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200/10 bg-gradient-to-r from-emerald-300 to-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(52,211,153,0.16)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(52,211,153,0.22)] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Preparing..." : "Open email draft"}
                </button>
              </form>
            </motion.div>
          </MotionReveal>
        </div>
      </SectionWrapper>
    </div>
  );
}
