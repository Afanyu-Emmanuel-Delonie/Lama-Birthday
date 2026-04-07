import { useState, useEffect } from 'react';
import { Menu, X, Cake } from 'lucide-react';

const links = [
  { name: 'Playlist',     href: '#playlist' },
  { name: 'Wishes',       href: '#wishes' },
  { name: 'Poem',         href: '#poem' },
  { name: 'Movies',       href: '#movies' },
  { name: 'This or That', href: '#this-or-that' },
  { name: 'From Us',      href: '#closing' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1280) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#18181B]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-container padding-container">
          <div className="flexBetween h-16 lg:h-20">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-base lg:text-xl font-bold text-white group-hover:text-brand transition-colors duration-300" style={{ fontFamily: 'var(--font-heading)' }}>
                Lama Seleman
              </span>
              <Cake className="w-4 h-4 lg:w-5 lg:h-5 text-brand animate-bounce" />
            </a>

            {/* Desktop links */}
            <div className="hidden xl:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="body-sm text-zinc-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {l.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <a href="#wishes" className="btn-sm-primary !hidden xl:!flex">
              Play A Game
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden text-white hover:text-brand transition-colors p-1 z-[60] relative"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 xl:hidden bg-[#18181B]/95 backdrop-blur-lg flex flex-col transition-all duration-300
          ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col justify-center items-center gap-2 h-full pb-20">
          {links.map((l, i) => (
            <a
              key={l.name}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-semibold text-zinc-400 hover:text-white transition-all duration-200 px-6 py-3 rounded-xl hover:bg-white/5 w-full text-center"
              style={{
                transitionDelay: open ? `${i * 40}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(16px)',
                opacity: open ? 1 : 0,
                transition: `opacity 0.3s ease ${i * 40}ms, transform 0.3s ease ${i * 40}ms, color 0.2s`,
              }}
            >
              {l.name}
            </a>
          ))}
          <a
            href="#wishes"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6"
            style={{
              transitionDelay: open ? `${links.length * 40}ms` : '0ms',
              transform: open ? 'translateY(0)' : 'translateY(16px)',
              opacity: open ? 1 : 0,
              transition: `opacity 0.3s ease ${links.length * 40}ms, transform 0.3s ease ${links.length * 40}ms`,
            }}
          >
            Play A Game
          </a>
        </div>
      </div>
    </>
  );
}
