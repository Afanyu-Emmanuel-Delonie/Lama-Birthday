import { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import lamaImg from '../assets/lama-2.png';
import Reveal from './Reveal.jsx';

const messages = [
  { name: 'Kaleb',         note: 'You make every room warmer just by being in it. Cheers to you.' },
  { name: 'Afanyu',        note: 'Watching you grow has been one of the best things about this team. Happy birthday.' },
  { name: 'Tabita',        note: 'Your laugh is contagious and your heart is gold. So glad to know you.' },
  { name: 'Uwase',         note: 'You show up for people in ways they never forget. Today we show up for you.' },
  { name: 'Bernice',       note: 'The world needs more people like you — thoughtful, real, and full of light.' },
  { name: 'Ruth',          note: 'Every day with you on the team is a better day. Wishing you the best birthday.' },
  { name: 'Kenia',         note: 'Keep glowing, keep growing. We are all rooting for you always.' },
  { name: 'Emery',         note: 'You lead with love and that is the rarest thing. Happy birthday, Lama.' },
  { name: 'Nuyu Ikerezi',  note: 'You have a quiet strength that speaks louder than words. So happy to celebrate you today.' },
];

function MessageCard({ m }) {
  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#A855F7]/40 transition-all duration-300 h-full">
      <p className="body-sm text-zinc-400 leading-relaxed flex-1">"{m.note}"</p>
      <div className="flex items-center gap-2 pt-3 border-t border-zinc-800">
        <div className="w-7 h-7 rounded-full bg-[#A855F7]/20 border border-[#A855F7]/30 flexCenter">
          <span className="text-xs font-bold text-brand">{m.name[0]}</span>
        </div>
        <span className="text-sm font-semibold text-white">{m.name}</span>
      </div>
    </div>
  );
}

export default function Closing() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(messages.length / perPage);
  const visible = messages.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="closing" className="relative bg-[#18181B] border-t border-zinc-800 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
        <img
          src={lamaImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] via-transparent to-[#18181B]" />
      </div>

      <div className="relative max-container padding-container py-20 lg:py-28 space-y-16">

        {/* Header */}
        <Reveal className="space-y-3 max-w-2xl">
          <span className="section-badge w-fit">
            <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            From the Team
          </span>
          <h2 className="section-title">
            Signed with <span className="text-brand">love</span>
          </h2>
          <p className="section-subtitle body-md">
            Every person on this team has something to say to you today.
          </p>
        </Reveal>

        {/* Message cards */}
        <Reveal delay={100}>

          {/* Desktop: full grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {messages.map((m) => <MessageCard key={m.name} m={m} />)}
          </div>

          {/* Mobile: paginated 3 at a time */}
          <div className="sm:hidden space-y-4">
            <div className="space-y-3">
              {visible.map((m) => <MessageCard key={m.name} m={m} />)}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="w-9 h-9 rounded-full border border-zinc-700 flexCenter text-zinc-400 hover:border-[#A855F7]/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`rounded-full transition-all duration-300 ${i === page ? 'w-5 h-2 bg-brand' : 'w-2 h-2 bg-zinc-700'}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={page === totalPages - 1}
                className="w-9 h-9 rounded-full border border-zinc-700 flexCenter text-zinc-400 hover:border-[#A855F7]/50 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </Reveal>

        {/* Final seal */}
        <Reveal delay={200}>
          <div className="flex flex-col items-center text-center gap-6 pt-8 border-t border-zinc-800">
            <div className="w-14 h-14 rounded-2xl bg-[#A855F7]/10 border border-[#A855F7]/20 flexCenter">
              <Heart className="w-6 h-6 text-brand fill-brand" />
            </div>

            <div className="space-y-2">
              <p className="heading-md text-white">Happy Birthday, Lama Seleman</p>
              <p className="body-md text-zinc-400 max-w-md">
                May this year be your best one yet — full of joy, growth, and everything you deserve.
              </p>
            </div>

            <div className="flex flex-col items-center gap-1 mt-2">
              <p className="body-sm text-zinc-500">With love from</p>
              <p className="text-2xl font-bold text-brand tracking-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                FinPulse
              </p>
              <p className="label-xs text-zinc-600">Fintech Team A</p>
            </div>

            <p className="label-xs text-zinc-700 mt-4">
              {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </Reveal>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/20 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
