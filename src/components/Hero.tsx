import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { isSet, portfolioData as d } from "../data/portfolio";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Hero() {
  const { personal: p, hero } = d;
  const chips = hero.chips;
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = isSet(p.photo) && !photoFailed;
  return (
    <section id="top" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.1fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p className="mb-4 font-mono text-xs uppercase tracking-[.25em] text-accent">Portfolio · 2026</p>
        <h1 className="text-gradient font-display text-5xl leading-[1.05] sm:text-7xl">{p.name}</h1>
        <p className="mt-5 text-lg text-fg/90">{p.title}</p>
        <p className="mt-3 max-w-md text-muted">{p.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href={p.resume} download className="btn"><Download size={16} />Download Resume</a>
        </div>
        <div className="mt-6 flex gap-2">
          {isSet(p.github) && <a className="btn !p-3" href={p.github} aria-label="GitHub" {...ext}><Github size={18} /></a>}
          {isSet(p.linkedin) && <a className="btn !p-3" href={p.linkedin} aria-label="LinkedIn" {...ext}><Linkedin size={18} /></a>}
          <a className="btn !p-3" href={`mailto:${p.email}`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mx-auto aspect-square w-full max-w-md">
        <motion.div aria-hidden className="absolute inset-0 rounded-full border border-dashed border-white/20"
          animate={{ rotate: 360 }} transition={{ duration: 90, repeat: Infinity, ease: "linear" }} />
        <div aria-hidden className="absolute inset-[8%] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-[14%] overflow-hidden rounded-full border border-white/15"
          style={{ background: "radial-gradient(circle at 50% 30%, rgb(var(--accent) / .35), rgba(20,20,26,.9) 70%)" }}>
          {showPhoto ? (
            <img src={p.photo} alt={`Portrait of ${p.name}`} onError={() => setPhotoFailed(true)}
              className="absolute bottom-0 left-1/2 h-[118%] max-w-none -translate-x-1/2 object-contain object-bottom" />
          ) : (
            <div className="grid h-full w-full place-items-center font-display text-4xl">SP</div>
          )}
        </div>
        {chips.map((c, i) => {
          const a = (i / chips.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <motion.span key={c} aria-hidden className="card absolute !rounded-full !px-4 !py-2 text-sm"
              style={{ left: `${50 + 47 * Math.cos(a)}%`, top: `${50 + 47 * Math.sin(a)}%`, translate: "-50% -50%" }}
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}>{c}</motion.span>
          );
        })}
      </motion.div>
    </section>
  );
}
