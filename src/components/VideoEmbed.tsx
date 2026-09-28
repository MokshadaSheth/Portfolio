import type { Video } from "../data/portfolio";
import { isSet } from "../data/portfolio";

export const youtubeId = (u: string) => u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/)?.[1];
export const videoOk = (v: Video) => (v.type === "youtube" ? isSet(v.url) && !!youtubeId(v.url!) : isSet(v.src));

export default function VideoEmbed({ video }: { video: Video }) {
  if (!videoOk(video)) return null;
  const title = video.title ?? "Video";
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl border border-line bg-black">
      {video.type === "youtube" ? (
        <iframe className="h-full w-full" title={title} loading="lazy" allowFullScreen
          src={`https://www.youtube-nocookie.com/embed/${youtubeId(video.url!)}`}
          allow="accelerometer; encrypted-media; picture-in-picture" />
      ) : (
        <video className="h-full w-full" controls preload="metadata" poster={video.poster} src={video.src} aria-label={title} />
      )}
    </div>
  );
}
