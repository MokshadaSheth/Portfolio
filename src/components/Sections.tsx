import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Trophy, Users } from "lucide-react";
import { isSet, portfolioData as d } from "../data/portfolio";
import VideoEmbed from "./VideoEmbed";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
const fade = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.6 } };

export function Section({ id, title, kicker, children }: { id: string; title: string; kicker?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <motion.div {...fade} className="mb-10">
        {kicker && <p className="mb-2 font-mono text-xs uppercase tracking-[.25em] text-accent">{kicker}</p>}
        <h2 className="font-display text-3xl sm:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About Me" kicker="01">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <motion.div {...fade} className="max-w-prose space-y-4 text-muted">{d.about.text.map((t) => <p key={t}>{t}</p>)}</motion.div>
        <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
          {d.about.stats.map((s, i) => (
            <motion.div key={s.label} {...fade} transition={{ duration: 0.6, delay: i * 0.1 }} className="card">
              <div className="font-display text-3xl text-accent sm:text-4xl">{s.value}</div><div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience" kicker="02">
      <ol className="relative ml-2 border-l border-line">
        {d.experience.map((e, i) => (
          <motion.li key={e.role + e.period} {...fade} transition={{ duration: 0.6, delay: i * 0.08 }} className="relative pb-10 pl-8 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="font-mono text-xs text-muted">{e.period}</p>
            <h3 className="mt-1 text-xl font-semibold">{e.role} <span className="text-accent">· {e.company}</span></h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted marker:text-accent">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills" kicker="04">
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(d.skills).map(([cat, items], i) => (
          <motion.div key={cat} {...fade} transition={{ duration: 0.5, delay: (i % 2) * 0.08 }} className="card">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted">{cat}</h3>
            <div className="flex flex-wrap gap-2">{items.map((s) => <span key={s} tabIndex={0} className="chip">{s}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function AISection() {
  const steps = d.aiPipeline;
  return (
    <Section id="ai" title="Building with AI" kicker="05">
      <div className="mx-auto flex max-w-sm flex-col items-center md:max-w-none md:flex-row md:flex-wrap md:justify-center">
        {steps.map((s, i) => (
          <motion.div key={s} {...fade} transition={{ duration: 0.5, delay: i * 0.12 }} className="flex flex-col items-center md:flex-row">
            <div className="card !rounded-xl !px-5 !py-3 text-center text-sm font-medium">{s}</div>
            {i < steps.length - 1 && <ArrowDown size={18} className="my-2 text-accent md:-rotate-90 md:mx-2 md:my-0" aria-hidden />}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  return (
    <>
      <Section id="achievements" title="Achievements" kicker="06">
        <div className="grid gap-4 md:grid-cols-3">
          {d.achievements.map((a, i) => (
            <motion.div key={a.title} {...fade} transition={{ duration: 0.5, delay: i * 0.1 }} className="card">
              <Trophy className="text-accent" size={22} /><h3 className="mt-4 font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-muted">{a.result}, {a.year}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      <Section id="leadership" title="Leadership" kicker="07">
        <div className="grid gap-4 md:grid-cols-2">
          {d.leadership.map((l) => (
            <motion.div key={l.role} {...fade} className="card flex gap-4"><Users className="mt-1 shrink-0 text-accent" size={22} />
              <div><h3 className="font-semibold">{l.role}</h3><p className="text-sm text-muted">{l.org} · {l.period}</p></div></motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export function BeyondCode() {
  const b = d.beyondCode;
  const items = b.danceMedia.filter((m) => (m.type === "image" ? isSet(m.src) : m.type === "mp4" ? isSet(m.src) : isSet(m.url)));
  return (
    <Section id="beyond-code" title="Beyond Code" kicker="08">
      <motion.div {...fade} className="mb-8 max-w-prose">
        <p className="font-display text-2xl italic text-fg/90">{b.subtitle}</p>
        <p className="mt-3 text-sm text-muted">{b.credential}</p>
      </motion.div>
      {items.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m, i) => (
            <motion.figure key={i} {...fade} className="overflow-hidden rounded-2xl border border-line">
              {m.type === "image" && <img src={m.src} alt={m.title ?? "Bharatanatyam"} loading="lazy" className="aspect-[4/5] w-full object-cover" />}
              {(m.type === "youtube" || m.type === "mp4") && <VideoEmbed video={{ type: m.type, url: m.url, src: m.src, title: m.title }} />}
              {m.type === "link" && <a className="btn m-4" href={m.url} {...ext}>{m.title ?? "View"}</a>}
              {(m.title || m.details) && <figcaption className="p-3 text-sm text-muted">{m.title} {m.details}</figcaption>}
            </motion.figure>
          ))}
        </div>
      ) : <div className="card text-sm text-muted">Add dance photos and videos in <code>portfolio.ts → beyondCode.danceMedia</code>.</div>}
    </Section>
  );
}

export function Contact() {
  const p = d.personal;
  return (
    <Section id="contact" title="Let's build something meaningful." kicker="09">
      <motion.div {...fade} className="flex flex-wrap gap-3">
        <a className="btn btn-primary" href={`mailto:${p.email}`}><Mail size={16} />Email Me</a>
        {isSet(p.github) && <a className="btn" href={p.github} {...ext}><Github size={16} />GitHub</a>}
        {isSet(p.linkedin) && <a className="btn" href={p.linkedin} {...ext}><Linkedin size={16} />LinkedIn</a>}
      </motion.div>
      <p className="mt-6 text-sm text-muted">{p.email} · {p.phone}</p>
    </Section>
  );
}

export function Footer() {
  const p = d.personal;
  return (
    <footer className="border-t border-line px-5 py-10 text-center text-sm text-muted">
      <p className="font-display text-lg text-fg">{p.name}</p><p>Software Developer · AI Enthusiast</p>
      <p className="mt-3 flex justify-center gap-4">
        {isSet(p.github) && <a href={p.github} {...ext}>GitHub</a>}
        {isSet(p.linkedin) && <a href={p.linkedin} {...ext}>LinkedIn</a>}
        <a href={`mailto:${p.email}`}>Email</a>
      </p>
      <p className="mt-4">Copyright © 2026 {p.name}</p>
    </footer>
  );
}
