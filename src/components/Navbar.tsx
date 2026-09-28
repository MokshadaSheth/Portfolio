import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const links = [["About", "about"], ["Experience", "experience"], ["Projects", "projects"], ["Skills", "skills"], ["Achievements", "achievements"], ["Contact", "contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(scrollY > 20); f(); addEventListener("scroll", f, { passive: true }); return () => removeEventListener("scroll", f); }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? "border-b border-line bg-bg/70 backdrop-blur-xl" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-lg">{portfolioData.personal.name}</a>
        <ul className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {links.map(([l, id]) => <li key={id}><a className="nav-link" href={`#${id}`}>{l}</a></li>)}
        </ul>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <ul className="border-t border-line bg-bg/95 px-5 py-3 lg:hidden">
        {links.map(([l, id]) => <li key={id}><a className="block py-3 text-muted" href={`#${id}`} onClick={() => setOpen(false)}>{l}</a></li>)}</ul>}
    </header>
  );
}
