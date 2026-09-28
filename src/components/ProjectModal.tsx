import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, BookOpen, X } from "lucide-react";
import { isSet, type Project } from "../data/portfolio";
import ProjectMediaGallery from "./ProjectMediaGallery";
import VideoEmbed, { videoOk } from "./VideoEmbed";
import { Cover } from "./ProjectCard";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && ref.current) {
        const f = ref.current.querySelectorAll<HTMLElement>("a[href],button,video,iframe");
        if (!f.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    ref.current?.querySelector<HTMLElement>("button")?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; prev?.focus(); };
  }, [onClose]);
  const videos = (p.videos ?? []).filter(videoOk);
  return (
    <motion.div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div ref={ref} role="dialog" aria-modal="true" aria-labelledby="pm-title" onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.25 }}
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-line bg-[#101013] sm:rounded-3xl">
        <div className="relative h-40 sm:h-56"><Cover p={p} />
          <button onClick={onClose} aria-label="Close project details" className="absolute right-3 top-3 rounded-full bg-black/60 p-2 hover:bg-black"><X size={18} /></button></div>
        <div className="space-y-6 p-5 sm:p-8">
          <div><p className="font-mono text-xs text-accent">{p.date}</p><h3 id="pm-title" className="mt-1 text-2xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-muted">{p.description}</p></div>
          <div className="flex flex-wrap gap-2">{p.technologies.map((t) => <span key={t} className="chip">{t}</span>)}</div>
          {!!p.highlights?.length && <ul className="list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>}
          <div className="flex flex-wrap gap-3">
            {isSet(p.github) && <a className="btn" href={p.github} {...ext}><Github size={16} />GitHub</a>}
            {isSet(p.liveDemo) && <a className="btn btn-primary" href={p.liveDemo} {...ext}><ExternalLink size={16} />Live Demo</a>}
            {isSet(p.caseStudy) && <a className="btn" href={p.caseStudy} {...ext}><BookOpen size={16} />Case Study</a>}
          </div>
          <ProjectMediaGallery images={p.images ?? []} title={p.title} />
          {videos.length > 0 && <div className="space-y-4"><h4 className="text-sm font-semibold uppercase tracking-widest text-muted">Demo</h4>{videos.map((v, i) => <VideoEmbed key={i} video={v} />)}</div>}
        </div>
      </motion.div>
    </motion.div>
  );
}
