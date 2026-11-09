import { embedUrl } from '@/data/apex-explained';

// Plays a YouTube lesson inside the page (web). The caller mounts it only when the
// student taps play, so nothing from YouTube loads until then.
export function YoutubePlayer({ id, title, start = 0 }: { id: string; title: string; start?: number }) {
  return (
    <iframe
      key={`${id}-${start}`}
      src={embedUrl(id, start)}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
      referrerPolicy="strict-origin-when-cross-origin"
      style={{ width: '100%', aspectRatio: '16 / 9', border: 0, borderRadius: 14, backgroundColor: '#000', display: 'block' }}
    />
  );
}
