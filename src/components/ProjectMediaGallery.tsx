import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isSet } from "../data/portfolio";

export default function ProjectMediaGallery({ images, title }: { images: string[]; title: string }) {
  const [bad, setBad] = useState<string[]>([]);
  const [i, setI] = useState(0);
  const list = images.filter((s) => isSet(s) && !bad.includes(s));
  if (!list.length) return null;
  const cur = list[Math.min(i, list.length - 1)];
  return (
    <div>
      <div className="aspect-video overflow-hidden rounded-xl border border-line bg-black/40">
        <AnimatePresence mode="wait">
          <motion.img key={cur} src={cur} alt={`${title} screenshot ${i + 1}`} className="h-full w-full object-contain"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            onError={() => setBad((b) => [...b, cur])} />
        </AnimatePresence>
      </div>
      {list.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {list.map((s, n) => (
            <button key={s} onClick={() => setI(n)} aria-label={`Show image ${n + 1}`} aria-current={n === i}
              className={`h-14 w-24 shrink-0 overflow-hidden rounded-lg border ${n === i ? "border-accent" : "border-line opacity-70"}`}>
              <img src={s} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
