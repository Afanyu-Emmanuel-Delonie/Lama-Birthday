import { useState, useEffect, useRef } from 'react';

const lines = [
  { text: '> npm install @lama/birthday@1.0.0',          delay: 0,    color: 'text-zinc-400' },
  { text: 'npm warn deprecated joy@0.0.1',               delay: 600,  color: 'text-yellow-600' },
  { text: 'npm warn deprecated worries@2.3.1',           delay: 1100, color: 'text-yellow-600' },
  { text: 'npm warn deprecated bad-days@9.9.9',          delay: 1600, color: 'text-yellow-600' },
  { text: '',                                             delay: 2000, color: '' },
  { text: 'added 9 packages, audited 9 humans',          delay: 2300, color: 'text-zinc-500' },
  { text: '',                                             delay: 2600, color: '' },
  { text: '> installing: happiness...',                  delay: 2900, color: 'text-zinc-400' },
  { text: '> installing: good-vibes...',                 delay: 3300, color: 'text-zinc-400' },
  { text: '> installing: birthday-cake...',              delay: 3700, color: 'text-zinc-400' },
  { text: '> installing: love-from-finpulse...',         delay: 4100, color: 'text-zinc-400' },
  { text: '',                                             delay: 4500, color: '' },
  { text: 'wish: may this year be your best one yet.',   delay: 4800, color: 'text-[#A855F7]' },
  { text: '',                                             delay: 5400, color: '' },
  { text: 'ERROR  unexpected feelings detected',         delay: 5700, color: 'text-red-500 font-semibold' },
  { text: 'ERR!   too much love to handle',              delay: 6100, color: 'text-red-400' },
  { text: '',                                             delay: 6500, color: '' },
  { text: '> fixing...',                                 delay: 6800, color: 'text-zinc-500' },
  { text: '> patching heart.js',                         delay: 7300, color: 'text-zinc-500' },
  { text: '',                                             delay: 7800, color: '' },
  { text: '✓ fixed. Happy Birthday, Lama.',              delay: 8200, color: 'text-[#28C840] font-semibold' },
];

const DONE_DELAY = 10000;
const FADE_DELAY = 9500;

export default function Splash({ onDone }) {
  const [visible, setVisible] = useState([]);
  const [fading,  setFading]  = useState(false);
  const [cursor,  setCursor]  = useState(true);
  const bodyRef = useRef(null);

  useEffect(() => {
    const timers = lines.map((line) =>
      setTimeout(() => {
        setVisible((v) => [...v, line]);
        if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
      }, line.delay)
    );

    const fadeTimer = setTimeout(() => setFading(true), FADE_DELAY);
    const doneTimer = setTimeout(() => onDone(), DONE_DELAY);
    const cursorTimer = setInterval(() => setCursor((c) => !c), 500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      clearInterval(cursorTimer);
    };
  }, [onDone]);

  return (
    <div className={`fixed inset-0 z-[100] bg-[#18181B] flex items-center justify-center px-6 transition-opacity duration-500 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full max-w-lg rounded-xl overflow-hidden border border-zinc-800 shadow-2xl">

        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-xs text-zinc-500 font-mono">bash — lama@finpulse</span>
        </div>

        {/* Terminal body */}
        <div
          ref={bodyRef}
          className="bg-[#1C1C1F] px-5 py-5 font-mono text-sm space-y-0.5 overflow-hidden hide-scrollbar"
          style={{ height: '340px' }}
        >
          {visible.map((line, i) => (
            <div key={i} className={`leading-6 ${line.color}`}>
              {line.text || <span>&nbsp;</span>}
            </div>
          ))}
          <div className="leading-6">
            <span className={`inline-block w-2 h-4 bg-[#A855F7] align-middle transition-opacity duration-100 ${cursor ? 'opacity-100' : 'opacity-0'}`} />
          </div>
        </div>

      </div>
    </div>
  );
}
