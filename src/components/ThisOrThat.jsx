import { useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import Reveal from './Reveal.jsx';

const rounds = [
  {
    question: 'When you need to recharge...',
    a: { label: 'Quiet time alone', message: 'Your solitude is sacred. The way you protect your peace says everything about how deeply you know yourself.' },
    b: { label: 'Time with people you love', message: 'You come alive around the right people. Your warmth is one of the most beautiful things about you.' },
  },
  {
    question: 'Your kind of perfect day...',
    a: { label: 'Cosy indoors with a good movie', message: 'You know how to slow down and savour the moment. That is a rare and beautiful gift.' },
    b: { label: 'Out exploring somewhere new', message: 'Your curiosity about the world is one of the things that makes you so magnetic.' },
  },
  {
    question: 'When facing a challenge you...',
    a: { label: 'Think it through carefully', message: 'Your thoughtfulness is your superpower. You never rush — you move with intention.' },
    b: { label: 'Trust your gut and go', message: 'Your instincts are sharp and your courage is real. You were built to leap.' },
  },
  {
    question: 'The thing that drives you most...',
    a: { label: 'Making the people around you proud', message: 'The love you carry for the people in your life is one of your greatest strengths.' },
    b: { label: 'Becoming the best version of yourself', message: 'That hunger to grow is exactly why your future is so bright. Keep going.' },
  },
  {
    question: 'Your happy place is...',
    a: { label: 'Somewhere peaceful and still', message: 'You carry a stillness inside you that the world needs more of. Never lose that.' },
    b: { label: 'Somewhere full of life and energy', message: 'You were made for the fullness of life. Your energy lights up every space you enter.' },
  },
  {
    question: 'The way you show love...',
    a: { label: 'Through actions and showing up', message: 'The people in your life are lucky. You are the kind of person who actually shows up.' },
    b: { label: 'Through words and deep conversations', message: 'The way you connect with people through words is a gift. You make people feel truly heard.' },
  },
];

export default function ThisOrThat() {
  const [current, setCurrent] = useState(0);
  const [picked,  setPicked]  = useState(null);
  const [done,    setDone]    = useState(false);

  const round    = rounds[current];
  const revealed = picked !== null;

  const handlePick = (choice) => {
    if (revealed) return;
    setPicked(choice);
  };

  const handleNext = () => {
    if (current + 1 >= rounds.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0); setPicked(null); setDone(false);
  };

  if (done) {
    return (
      <section id="this-or-that" className="relative bg-[#18181B] border-t border-zinc-800 overflow-hidden">
        <div className="max-container padding-container py-20 lg:py-28 flexCenter min-h-[50vh]">
          <Reveal className="text-center space-y-6 max-w-lg">
            <div className="w-14 h-14 rounded-2xl bg-[#A855F7]/10 border border-[#A855F7]/20 flexCenter mx-auto">
              <Heart className="w-6 h-6 text-brand fill-brand" />
            </div>
            <h2 className="section-title">
              That's <span className="text-brand">so you, Lama.</span>
            </h2>
            <p className="body-md text-zinc-400">
              Every choice you made today is a reflection of the incredible person you are.
              Never stop being exactly this.
            </p>
            <button onClick={handleRestart} className="btn-outline mx-auto">
              Play Again <ArrowRight className="w-4 h-4" />
            </button>
          </Reveal>
        </div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
      </section>
    );
  }

  return (
    <section id="this-or-that" className="relative bg-[#18181B] border-t border-zinc-800 overflow-hidden">
      <div className="max-container padding-container py-20 lg:py-28">
        <Reveal className="space-y-10 flex flex-col items-center text-center max-w-2xl mx-auto">

          {/* Header */}
          <div className="space-y-3">
            <span className="section-badge">
              <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
              This or That
            </span>
            <h2 className="section-title">
              Pick your <span className="text-brand">favourite, Lama</span>
            </h2>
            <p className="section-subtitle body-md">
              No right or wrong — just you, being you.
            </p>
          </div>

          {/* Question */}
          <p className="heading-md text-white">{round.question}</p>

          {/* Choice cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {(['a', 'b']).map((key) => {
              const option    = round[key];
              const isSelected = picked === key;
              const isDimmed   = revealed && !isSelected;

              return (
                <button
                  key={key}
                  onClick={() => handlePick(key)}
                  disabled={revealed}
                  className={`flex flex-col items-center gap-3 p-7 rounded-2xl border text-center transition-all duration-300
                    ${!revealed
                      ? 'border-zinc-800 bg-zinc-900 hover:border-[#A855F7]/60 hover:bg-[#A855F7]/5 hover:scale-[1.02] cursor-pointer'
                      : isSelected
                      ? 'border-[#A855F7]/60 bg-[#A855F7]/10 scale-[1.02]'
                      : 'border-zinc-800/50 bg-zinc-900/30 opacity-40'}`}
                >
                  <span className="heading-sm text-white">{option.label}</span>
                  {isSelected && (
                    <p className="body-sm text-zinc-300 leading-relaxed">{option.message}</p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Next button */}
          {revealed && (
            <button onClick={handleNext} className="btn-primary group">
              {current + 1 < rounds.length ? 'Next' : 'Finish'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}

          {/* Pagination */}
          <div className="flex items-center gap-2">
            {rounds.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i <= current ? 'w-6 bg-brand' : 'w-3 bg-zinc-700'}`}
              />
            ))}
          </div>

        </Reveal>
      </div>

      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
