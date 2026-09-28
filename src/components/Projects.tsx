import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Section } from "./Sections";

export default function Projects() {
  const [open, setOpen] = useState<string | null>(null);
  const sel = portfolioData.projects.find((p) => p.id === open);
  return (
    <Section id="projects" title="Featured Projects" kicker="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} onOpen={() => setOpen(p.id)} />)}
      </div>
      <AnimatePresence>{sel && <ProjectModal key={sel.id} p={sel} onClose={() => setOpen(null)} />}</AnimatePresence>
    </Section>
  );
}
