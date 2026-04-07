import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Reveal from './Reveal.jsx';
import lamaImg from '../assets/lama-2.jpeg';

const tracks = [
  { title: 'Lovely',                    artist: 'Billie Eilish & Khalid',   spotifyId: '0u2P5u6lvoDfwTYjAADbn4' },
  { title: 'Levitating',                artist: 'Dua Lipa',                 spotifyId: '463CkQjx2Zfoiqr0ESX2mN' },
  { title: 'Adore You',                 artist: 'Harry Styles',             spotifyId: '3jjujdWJ72nww5eGnfs2E7' },
  { title: 'As It Was',                 artist: 'Harry Styles',             spotifyId: '4LRPiXqCikLlN15c3yImP7' },
  { title: 'Blinding Lights',           artist: 'The Weeknd',               spotifyId: '0VjIjW4GlUZAMYd2vXMi3b' },
  { title: 'Stay',                      artist: 'The Kid LAROI & Justin Bieber', spotifyId: '5HCyWlXZPP0y6Gqq8TgA20' },
  { title: 'Watermelon Sugar',          artist: 'Harry Styles',             spotifyId: '6UelLqGlWMcVH1E5c4H7lY' },
];

function TrackCard({ track }) {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800 hover:border-[#A855F7]/40 transition-all duration-300">
      <iframe
        title={`${track.title} by ${track.artist}`}
        src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}

export default function Playlist() {
  const [expanded, setExpanded] = useState(false);

  const visible   = expanded ? tracks : tracks.slice(0, 4);

  return (
    <section id="playlist" className="relative border-t border-zinc-800 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={lamaImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#18181B]/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] via-transparent to-[#18181B]" />
      </div>

      <div className="relative max-container padding-container py-20 lg:py-28">
        <Reveal className="space-y-10">

          {/* Header */}
          <div className="space-y-3 max-w-2xl">
            <span className="section-badge w-fit">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              Birthday Playlist
            </span>
            <h2 className="section-title">
              Songs picked <span className="text-brand">for your soul</span>
            </h2>
            <p className="section-subtitle body-md">
              A little R&B, a little warmth — music that matches your energy.
            </p>
          </div>

          {/* Grid — always 2 cols, mobile shows 4 then expand */}
          <div className="space-y-4">

            {/* Desktop: always show all 8 in 2-col grid */}
            <div className="hidden md:grid grid-cols-2 gap-3">
              {tracks.map((track) => (
                <TrackCard key={track.spotifyId} track={track} />
              ))}
            </div>

            {/* Mobile: show 4, expand to show all 8 */}
            <div className="md:hidden space-y-3">
              {visible.map((track) => (
                <TrackCard key={track.spotifyId} track={track} />
              ))}

              <button
                onClick={() => setExpanded((e) => !e)}
                className="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl border border-zinc-700 hover:border-[#A855F7]/50 text-sm font-semibold text-zinc-400 hover:text-white transition-all duration-300"
              >
                {expanded ? (
                  <><ChevronUp className="w-4 h-4" /> Show less</>
                ) : (
                  <><ChevronDown className="w-4 h-4" /> {tracks.length - 4} more songs</>
                )}
              </button>
            </div>

          </div>

        </Reveal>
      </div>

      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
