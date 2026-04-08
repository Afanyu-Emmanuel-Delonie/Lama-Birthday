import { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import lamaImg from '../assets/lama-2.jpeg';
import Reveal from './Reveal.jsx';

const messages = [
  { name: 'Kaleb',         note: 'You are a good, intelligent and a chill person, and that combination is rarer than you think. The way you carry yourself with ease and still show up for the people around you says everything about your character. May Allah shower you with blessings, open doors for you that no one can shut, and give you a year filled with everything your heart quietly hopes for.' },
  { name: 'Afanyu',        note: 'Knowing Lama has been more than a blessing. In such a short time, you have impacted my life in ways I never expected. You carry a rare kind of energy, the kind that stays with you long after the moment has passed. I pray that every door you knock on opens, every dream you carry finds its ground, and every effort you pour out returns to you multiplied. May you succeed in all your endeavors, today and always.' },
  { name: 'Tabita',        note: 'Happy birthday Lama. You have this quiet but powerful way of making people feel comfortable just by being yourself. Your kindness is not performative, it is just who you are, and that is one of the most beautiful things about you. I pray this year brings you clarity, joy, and every good thing you have been working toward.' },
  { name: 'Uwase',         note: 'Happy birthday, Lama. You are such a kind and wonderful person. Even though you are not from here, you have become a very special part of our group, and I am so grateful to know you. The little things you do, like bringing us snacks, show your big and caring heart and make everyone happy. On your special day, I pray that your life is full of happiness, peace, and good health, and that all your silent prayers be granted. May the Lord bless you and keep you and make His face shine upon you and be gracious to you. I love you so much. Jeremiah 29:11' },
  { name: 'Berenice',      note: 'Happy Birthday to you. On this special day, the world was blessed with your beauty and the grace you carry in everything you do. Your heart is rare, given freely, never held back, and your presence is something truly unmatched. I pray your dreams come shining through, that your success finds you, and that joy always finds its way to your face. May you never feel empty, and may you always walk with your head held high, surrounded by love and guided with strength. Keep being the incredible person you are because you are truly appreciated.' },
  { name: 'Ruth',          note: 'You are genuinely one of the kindest and most genuine people I know. Your motivation, positive spirit, and the way you show up for others make a real difference. I hope this year brings you countless blessings, new opportunities, and all the happiness you so freely give to everyone else. You deserve nothing but the best today and always.' },
  { name: 'Kenia',         note: 'Happy birthday Lama, we are so blessed to have you. You are such a great and wonderful person that lights up every room. Your presence alone makes everything better, and the way you carry yourself with grace and warmth is something truly special. I wish you all the best this world has to offer, today and every day that follows.' },
  { name: 'Emery',         note: 'Happy birthday to the person who is all business when it counts but knows how to have fun without even trying. It is an amazing combination and one I respect a great deal. Most importantly, you are the kind of sister that I look up to. Wishing you a year full of laughter, growth, and everything you deserve.' },
  { name: 'Nuyu Ikerezi',  note: 'Lama, knowing you has been a genuine pleasure. You carry yourself with a grace and authenticity that is hard to find. On your special day I wish you peace, abundance, and the confidence to walk boldly into everything ahead of you. The world is better with you in it.' },
];

const PREVIEW_LENGTH = 100;

function MessageCard({ m }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = m.note.length > PREVIEW_LENGTH;
  const displayed = expanded || !isLong ? m.note : m.note.slice(0, PREVIEW_LENGTH).trimEnd() + '...';

  return (
    <div className="flex flex-col gap-4 p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#A855F7]/40 transition-all duration-300 h-full">
      <div className="flex-1">
        <p className="body-sm text-zinc-400 leading-relaxed">{displayed}</p>
        {isLong && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-2 text-xs font-semibold text-brand hover:text-[#C084FC] transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
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
                From the nine of us who get to call you a teammate, a friend, and one of the best people in the room — thank you for being exactly who you are. This one is for you.
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
