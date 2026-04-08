import { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight, Trophy } from 'lucide-react';
import lamaImg from '../assets/lama-2.jpeg';
import Reveal from './Reveal.jsx';

const members = ['Kaleb', 'Afanyu', 'Tabita', 'Uwase', 'Berenice', 'Ruth', 'Kenia', 'Emery', 'Nuyu'];

const wishes = [
  {
    id: 1,
    author: 'Kaleb',
    text: 'You are a good, intelligent and a chill person, and that combination is rarer than you think. The way you carry yourself with ease and still show up for the people around you says everything about your character. May Allah shower you with blessings, open doors for you that no one can shut, and give you a year filled with everything your heart quietly hopes for.',
  },
  {
    id: 2,
    author: 'Afanyu',
    text: 'Knowing Lama has been more than a blessing. In such a short time, you have impacted my life in ways I never expected. You carry a rare kind of energy, the kind that stays with you long after the moment has passed. On this special day, I pray that every door you knock on opens, every dream you carry finds its ground, and every effort you pour out returns to you multiplied. May you succeed in all your endeavors, today and always.',
  },
  {
    id: 3,
    author: 'Tabita',
    text: 'Happy birthday Lama. You have this quiet but powerful way of making people feel comfortable just by being yourself. Your kindness is not performative, it is just who you are, and that is one of the most beautiful things about you. I pray this year brings you clarity, joy, and every good thing you have been working toward.',
  },
  {
    id: 4,
    author: 'Uwase',
    text: 'Happy birthday, Lama. You are such a kind and wonderful person. Even though you are not from here, you have become a very special part of our group, and I am so grateful to know you. The little things you do, like bringing us snacks, show your big and caring heart and make everyone happy. On your special day, I pray that your life is full of happiness, peace, and good health, and that all your silent prayers be granted. May the Lord bless you and keep you and make His face shine upon you and be gracious to you. I love you so much. Jeremiah 29:11',
  },
  {
    id: 5,
    author: 'Berenice',
    text: 'Happy Birthday to you. On this special day, the world was blessed with your beauty and the grace you carry in everything you do. Your heart is rare, given freely, never held back, and your presence is something truly unmatched. I pray your dreams come shining through, that your success finds you, and that joy always finds its way to your face. May you never feel empty, and may you always walk with your head held high, surrounded by love and guided with strength. Keep being the incredible person you are because you are truly appreciated.',
  },
  {
    id: 6,
    author: 'Ruth',
    text: 'Lama, you are genuinely one of the kindest and most genuine people I know. Your motivation, positive spirit, and the way you show up for others make a real difference in the lives around you. I hope this year brings you countless blessings, new opportunities, and all the happiness you so freely give to everyone else. You deserve nothing but the best today and always. Happy birthday — to another trip around the sun.',
  },
  {
    id: 7,
    author: 'Kenia',
    text: 'Happy birthday Lama, we are so blessed to have you. You are such a great and wonderful person that lights up every room. Your presence alone makes everything better, and the way you carry yourself with grace and warmth is something truly special. I wish you all the best this world has to offer, today and every day that follows.',
  },
  {
    id: 8,
    author: 'Emery',
    text: 'Happy birthday to the person who is all business when it counts but knows how to have fun without even trying. It is an amazing combination and one I respect a great deal. Most importantly, you are the kind of sister that I look up to. Wishing you a year full of laughter, growth, and everything you deserve.',
  },
  {
    id: 9,
    author: 'Nuyu',
    text: 'Lama, knowing you has been a genuine pleasure. You carry yourself with a grace and authenticity that is hard to find. On your special day I wish you peace, abundance, and the confidence to walk boldly into everything ahead of you. The world is better with you in it.',
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
