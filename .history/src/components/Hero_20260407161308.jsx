import { useState } from 'react';
import { ArrowRight, Gift, X, Sparkles } from 'lucide-react';
import Reveal from './Reveal.jsx';

const codeLines = [
  { tokens: [{ t: 'comment', v: '// birthday.js — for Lama Seleman' }] },
  { tokens: [] },
  { tokens: [{ t: 'keyword', v: 'const' }, { t: 'plain', v: ' express = ' }, { t: 'fn', v: 'require' }, { t: 'plain', v: '(' }, { t: 'string', v: "'express'" }, { t: 'plain', v: ');' }] },
  { tokens: [{ t: 'keyword', v: 'const' }, { t: 'plain', v: ' app = ' }, { t: 'fn', v: 'express' }, { t: 'plain', v: '();' }] },
  { tokens: [] },
  { tokens: [{ t: 'plain', v: 'app.' }, { t: 'fn', v: 'get' }, { t: 'plain', v: '(' }, { t: 'string', v: "'/wish'" }, { t: 'plain', v: ', (req, res) => {' }] },
  { tokens: [{ t: 'plain', v: '  res.' }, { t: 'fn', v: 'json' }, { t: 'plain', v: '({' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'key', v: 'to' }, { t: 'plain', v: ':      ' }, { t: 'string', v: '"Lama Seleman"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'key', v: 'message' }, { t: 'plain', v: ': ' }, { t: 'string', v: '"Happy Birthday!"' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'key', v: 'age' }, { t: 'plain', v: ':    ' }, { t: 'number', v: 'Infinity' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '    ' }, { t: 'key', v: 'wishes' }, { t: 'plain', v: ':  ' }, { t: 'number', v: '1000' }, { t: 'plain', v: ',' }] },
  { tokens: [{ t: 'plain', v: '  });' }] },
  { tokens: [{ t: 'plain', v: '});' }] },
  { tokens: [] },
];

const colorMap = {
  comment: 'text-zinc-500 italic',
  keyword: 'text-[#C084FC]',
  fn:      'text-[#60A5FA]',
  string:  'text-[#86EFAC]',
  number:  'text-[#FB923C]',
  key:     'text-[#F9A8D4]',
  tag:     'text-[#F87171]',
  attr:    'text-[#FCD34D]',
  plain:   'text-zinc-300',
};

function WishModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flexCenter bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-zinc-900 border border-[#A855F7]/30 rounded-2xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-xl bg-[#A855F7]/10 border border-[#A855F7]/20 flexCenter mb-6">
          <Gift className="w-5 h-5 text-[#A855F7]" />
        </div>

        <h2 className="heading-md text-white mb-4">Happy Birthday, Lama</h2>
        <p className="body-md text-zinc-400 leading-relaxed">
          Wishing you a year filled with everything you deserve — joy, growth, and every dream
          you have been quietly working toward. You bring something rare to every room you walk
          into, and the world is better for it. Here is to you, today and always.
        </p>

        <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#A855F7]" />
          <span className="body-sm text-zinc-500">With love and good vibes</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [wishOpen, setWishOpen] = useState(false);

  return (
    <>
      <section className="bg-[#18181B] text-white relative overflow-hidden">
        <div className="max-container padding-container py-24 lg:py-28 xl:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left ── */}
            <Reveal className="space-y-8">
              <div className="space-y-4">
                <div className="section-badge w-fit">
                  <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
                  It's Her Birthday
                </div>
                <h1 className="text-6xl font-black text-white">
                  Happy Birthday,{' '}
                  Seleman 
                </h1>
                <p className="body-lg text-zinc-400 max-w-xl">
                  Today we celebrate you — your brilliance, your warmth, and the incredible
                  person you are. Wishing you a day as wonderful as you make every day for
                  those around you.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <button onClick={() => setWishOpen(true)} className="group btn-primary">
                  Read My Wish
                  <Gift className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </button>
                <a href="#about" className="btn-outline group">
                  About Lama
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </Reveal>

            {/* ── Right: macOS code editor ── */}
            <Reveal delay={150} className="relative group">
              {/* Ambient glow */}
              <div className="absolute -inset-4 bg-[#A855F7]/10 rounded-2xl blur-2xl group-hover:bg-[#A855F7]/20 transition-all duration-500" />

              <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-[#A855F7]/50 transition-all duration-500 shadow-2xl">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                  <span className="w-3 h-3 rounded-full bg-[#e22a21]" />
                  <span className="w-3 h-3 rounded-full bg-[#f0a911]" />
                  <span className="w-3 h-3 rounded-full bg-[#0ab624]" />
                  <span className="ml-3 text-xs text-zinc-500 font-mono">birthday.js</span>
                </div>

                {/* Code body */}
                <div className="bg-[#1C1C1F] px-5 py-5 overflow-x-auto hide-scrollbar">
                  <table className="w-full border-collapse">
                    <tbody>
                      {codeLines.map((line, i) => (
                        <tr key={i} className="leading-6 hover:bg-white/[0.02] transition-colors">
                          <td className="pr-5 text-right text-xs text-zinc-600 select-none w-6 font-mono">{i + 1}</td>
                          <td className="font-mono text-sm whitespace-pre">
                            {line.tokens.length === 0
                              ? <span>&nbsp;</span>
                              : line.tokens.map((tok, j) => (
                                  <span key={j} className={colorMap[tok.t]}>{tok.v}</span>
                                ))
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#A855F7] text-white text-xs font-mono">
                  <span>JavaScript · Node.js · React</span>
                  <span>Lama's Birthday Build</span>
                </div>
              </div>
            </Reveal>

          </div>
        </div>

        {/* Ambient blobs */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#A855F7]/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {wishOpen && <WishModal onClose={() => setWishOpen(false)} />}
    </>
  );
}
