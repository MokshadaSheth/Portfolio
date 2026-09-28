import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { isSet, type Project } from "../data/portfolio";

export function Cover({ p, className = "" }: { p: Project; className?: string }) {
  const [failed, setFailed] = useState(false);
  const hue = (p.id.length * 47) % 360;
  if (isSet(p.featuredImage) && !failed)
    return <img src={p.featuredImage} alt={`${p.title} cover`} loading="lazy" onError={() => setFailed(true)} className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${className}`} />;
  return (
    <div aria-hidden className="grid h-full w-full place-items-center transition duration-500 group-hover:scale-105"
      style={{ background: `radial-gradient(circle at 30% 20%, hsla(${hue},60%,55%,.45), transparent 60%), linear-gradient(135deg, #17171b, #0e0e11)` }}>
      <span className="font-display text-5xl text-white/25">{p.title.slice(0, 2)}</span>
    </div>
  );
}

export default function ProjectCard({ p, index, onOpen }: { p: Project; index: number; onOpen: () => void }) {
  return (
    <motion.button onClick={onOpen} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group card flex flex-col overflow-hidden p-0 text-left transition-colors hover:border-white/25 ${index === 0 ? "md:col-span-2" : ""}`}>
      <div className={`overflow-hidden ${index === 0 ? "h-56 md:h-72" : "h-44"}`}><Cover p={p} /></div>
      <div className="flex flex-1 flex-col p-6">
        <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")} · {p.date}</span>
        <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted">{p.shortDescription}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.technologies.slice(0, 5).map((t) => <span key={t} className="chip">{t}</span>)}</div>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium">View Project
          <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-1" /></span>
      </div>
    </motion.button>
  );
}
