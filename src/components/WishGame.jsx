import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react';
import lamaImg from '../assets/lama-2.jpeg';
import Reveal from './Reveal.jsx';

const members = ['Kaleb', 'Afanyu', 'Tabita', 'Uwase', 'Berenice', 'Ruth', 'Kenia', 'Emery', 'Nuyu'];

const wishes = [
  {
    id: 1,
    author: 'Kaleb',
    text: 'You have this rare ability to make everyone around you feel seen and valued. That is a gift not many people have. Wishing you a birthday as warm and full as the energy you give to others.',
  },
  {
    id: 2,
    author: 'Afanyu',
    text: 'Knowing Lama has been more than a blessing. In such a short time, you have impacted my life in ways I never expected. You carry a rare kind of energy, the kind that stays with you long after the moment has passed. On this special day, I pray that every door you knock on opens, every dream you carry finds its ground, and every effort you pour out returns to you multiplied. May you succeed in all your endeavors, today and always.',
  },
  {
    id: 3,
    author: 'Tabita',
    text: 'You are one of those people who just gets it  life, people, the little things that matter. I am so glad to know you. Wishing you joy today and every day that follows.',
  },
  {
    id: 4,
    author: 'Uwase',
    text: 'Your kindness is not loud, but it is felt by everyone around you. Thank you for being the kind of person who shows up. Happy birthday, Lama — you deserve the world.',
  },
  {
    id: 5,
    author: 'Berenice',
    text: 'There is something about the way you approach things  thoughtful, intentional, real. It makes being around you feel easy. Wishing you a year full of moments that match your energy.',
  },
  {
    id: 6,
    author: 'Ruth',
    text: 'Lama, you are genuinely one of the kindest and most genuine people I know. Your motivation, positive spirit, and the way you show up for others make a real difference in the lives around you. I hope this year brings you countless blessings, new opportunities, and all the happiness you so freely give to everyone else. You deserve nothing but the best today and always. Happy birthday — to another trip around the sun.',
  },
  {
    id: 7,
    author: 'Kenia',
    text: 'Watching you grow and show up for yourself and others has been something truly beautiful. Happy birthday — keep going, keep glowing, keep being exactly who you are.',
  },
  {
    id: 8,
    author: 'Emery',
    text: 'You lead with your heart and that is something the world needs more of. Wishing you a birthday filled with laughter, love, and all the good things you quietly put out into the world.',
  },
  {
    id: 9,
    author: 'Nuyu',
    text: 'You have a quiet strength that speaks louder than words. Being on this team with you is a privilege. Wishing you a birthday as beautiful as the person you are.',
  },
];

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

const MAX_TRIES = 3;

export default function WishGame() {
  const [shuffled,  setShuffled]  = useState(() => shuffle(wishes));
  const [current,  setCurrent]  = useState(0);
  const [selected, setSelected] = useState('');
  const [tries,    setTries]    = useState([]);
  const [revealed, setRevealed] = useState(false);
  const [score,    setScore]    = useState(0);
  const [done,     setDone]     = useState(false);

  const wish         = shuffled[current];
  const correctGuess = tries.includes(wish.author);
  const locked       = revealed || correctGuess;
  const triesLeft    = MAX_TRIES - tries.length;
  const wrongTries   = tries.filter((t) => t !== wish.author);

  const handleGuess = () => {
    if (!selected || locked) return;
    const next = [...tries, selected];
    setTries(next);
    setSelected('');
    if (selected === wish.author) {
      setScore((s) => s + 1);
      setRevealed(true);
    } else if (next.length >= MAX_TRIES) {
      setRevealed(true);
    }
  };

  const handleNext = () => {
    if (current + 1 >= wishes.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setTries([]);
      setSelected('');
      setRevealed(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0); setTries([]); setSelected('');
    setRevealed(false); setScore(0); setDone(false);
    setShuffled(shuffle(wishes));
  };

  /* ── Final screen ── */
  if (done) {
    return (
      <section id="wishes" className="relative bg-[#18181B] border-t border-zinc-800 overflow-hidden">
        <div className="relative max-container padding-container py-20 lg:py-28 flexCenter min-h-[60vh]">
          <Reveal className="text-center space-y-6 max-w-lg">
            <div className="w-16 h-16 rounded-2xl bg-[#A855F7]/10 border border-[#A855F7]/20 flexCenter mx-auto">
              <Trophy className="w-7 h-7 text-[#A855F7]" />
            </div>
            <h2 className="section-title">
              You scored <span className="text-brand">{score} / {wishes.length}</span>
            </h2>
            <p className="body-md text-zinc-400">
              {score === wishes.length
                ? 'Perfect! You know exactly who loves you and how.'
                : score >= 5
                ? 'Great job — you really know your people.'
                : 'Tricky, right? Everyone loves you in their own unique way.'}
            </p>
            <button onClick={handleRestart} className="btn-primary mx-auto">
              Play Again <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
      </section>
    );
  }

  /* ── Game screen ── */
  return (
    <section id="wishes" className="relative bg-[#18181B] border-t border-zinc-800 overflow-hidden">
      <div className="relative max-container padding-container py-20 lg:py-28">
        <Reveal className="space-y-10">

          {/* Header */}
          <div className="space-y-3">
            <span className="section-badge w-fit">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              The Wish Game
            </span>
            <h2 className="section-title">
              Guess who wrote <span className="text-brand">each wish</span>
            </h2>
            <p className="section-subtitle body-md">
              Read the wish and pick who you think wrote it. You have 3 tries per wish.
            </p>
          </div>

          {/* Main layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* ── Left: image ── */}
            <div className="relative hidden lg:block self-stretch">
              <div className="absolute -inset-4 bg-[#A855F7]/10 rounded-2xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 h-full">
                <img
                  src={lamaImg}
                  alt="Lama Seleman"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 px-4 py-3 bg-[#18181B]/80 backdrop-blur-sm border border-zinc-800 rounded-xl">
                  <p className="label-xs text-zinc-500">Wish</p>
                  <p className="heading-sm text-white">#{current + 1} of {wishes.length}</p>
                </div>
                <div className="absolute top-5 right-5 px-4 py-2 bg-[#18181B]/80 backdrop-blur-sm border border-zinc-800 rounded-xl">
                  <p className="label-xs text-zinc-500">Score</p>
                  <p className="heading-sm text-brand">{score} pts</p>
                </div>
              </div>
            </div>

            {/* ── Right: wish + guessing ── */}
            <div className="space-y-6">

              {/* Wish card */}
              <div className={`p-7 rounded-2xl border transition-all duration-300
                ${correctGuess
                  ? 'border-emerald-500/50 bg-emerald-500/5'
                  : revealed
                  ? 'border-red-500/40 bg-red-500/5'
                  : 'border-zinc-800 bg-zinc-900'}`}
              >
                <p className="body-lg text-zinc-200 leading-relaxed">{wish.text}</p>

                {revealed && (
                  <div className={`flex items-center gap-2 mt-5 pt-5 border-t
                    ${correctGuess ? 'border-emerald-500/20' : 'border-red-500/20'}`}
                  >
                    {correctGuess
                      ? <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                      : <XCircle    className="w-5 h-5 text-red-400 shrink-0" />}
                    <span className={`body-sm font-semibold ${correctGuess ? 'text-emerald-400' : 'text-red-400'}`}>
                      {correctGuess
                        ? `Correct! This was from ${wish.author}.`
                        : `This was from ${wish.author}.`}
                    </span>
                  </div>
                )}
              </div>

              {/* Wrong tries */}
              {wrongTries.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="body-sm text-zinc-600">Wrong:</span>
                  {wrongTries.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-lg text-xs font-medium bg-red-500/10 border border-red-500/20 text-red-400">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Tries dots */}
              {!locked && (
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: MAX_TRIES }).map((_, i) => (
                    <span key={i} className={`w-2 h-2 rounded-full transition-all ${i < tries.length ? 'bg-red-500' : 'bg-zinc-700'}`} />
                  ))}
                  <span className="body-sm text-zinc-500 ml-1">{triesLeft} {triesLeft === 1 ? 'try' : 'tries'} left</span>
                </div>
              )}

              {/* Name buttons or Next */}
              {!locked ? (
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {members.map((m) => {
                      const isWrong = tries.includes(m);
                      return (
                        <button
                          key={m}
                          disabled={isWrong}
                          onClick={() => setSelected(m)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200
                            ${isWrong
                              ? 'border-zinc-800 text-zinc-700 cursor-not-allowed'
                              : selected === m
                              ? 'bg-[#A855F7] border-[#A855F7] text-white scale-105'
                              : 'border-zinc-700 text-zinc-400 hover:border-[#A855F7]/60 hover:text-white'}`}
                        >
                          {m}
                        </button>
                      );
                    })}
                  </div>
                  <button
                    onClick={handleGuess}
                    disabled={!selected}
                    className="btn-sm-primary disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Submit Guess
                  </button>
                </div>
              ) : (
                <button onClick={handleNext} className="btn-primary group">
                  {current + 1 < wishes.length ? 'Next Wish' : 'See Results'}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}

            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
