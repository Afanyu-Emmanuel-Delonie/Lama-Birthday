import { useState } from 'react';
import { Menu, X, Cake } from 'lucide-react';

const links = [
  { name: 'About',    href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills',   href: '#skills' },
  { name: 'Journey',  href: '#journey' },
  { name: 'Contact',  href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#18181B]/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-container padding-container">
        <div className="flexBetween h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="heading-sm text-white group-hover:text-brand transition-colors duration-300">
              Lama Seleman
            </span>
            <Cake className="w-5 h-5 text-brand animate-bounce" />
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
          <a href="#contact" className="hidden xl:inline-flex btn-sm-primary">
            Let's Talk
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-white hover:text-brand transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="xl:hidden py-6 border-t border-zinc-800/50 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="body-sm text-zinc-400 hover:text-white transition-colors py-2"
              >
                {l.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-sm-primary justify-center mt-2"
            >
              Let's Talk
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
