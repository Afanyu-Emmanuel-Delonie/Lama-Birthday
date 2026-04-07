import { Play } from 'lucide-react';
import Reveal from './Reveal.jsx';

import imgFantasticBeasts  from '../assets/movies/Fantastic Beasts.png';
import imgDune             from '../assets/movies/dune.png';
import imgInsideOut        from '../assets/movies/inside-out.png';
import imgMoana2           from '../assets/movies/moana-2.png';
import imgMufasa           from '../assets/movies/mofasa.png';
import imgMulan            from '../assets/movies/mulan.png';
import imgOrion            from '../assets/movies/orion.png';
import imgSpiritedAway     from '../assets/movies/spirited-away.png';
import imgBoyHeron         from '../assets/movies/the boy and the heron.png';
import imgWicked           from '../assets/movies/wicked.png';
import imgWildRobot        from '../assets/movies/wild-robot.png';
import imgWomanKing        from '../assets/movies/woman-king.png';

const movies = [
  {
    name: "Miss Peregrine's Home for Peculiar Children",
    year: 2016, genre: 'Fantasy · Adventure',
    thumb: imgFantasticBeasts,
    netflix: 'miss+peregrines+home+for+peculiar+children',
    prime:   'Miss+Peregrines+Home+for+Peculiar+Children',
    youtube: 'Miss+Peregrine+Home+for+Peculiar+Children+full+movie',
  },
  {
    name: 'Fantastic Beasts',
    year: 2016, genre: 'Fantasy · Adventure',
    thumb: imgFantasticBeasts,
    netflix: 'fantastic+beasts+and+where+to+find+them',
    prime:   'Fantastic+Beasts+and+Where+to+Find+Them',
    youtube: 'Fantastic+Beasts+full+movie',
  },
  {
    name: 'Dune: Part Two',
    year: 2024, genre: 'Sci-Fi · Adventure',
    thumb: imgDune,
    netflix: 'dune+part+two',
    prime:   'Dune+Part+Two',
    youtube: 'Dune+Part+Two+full+movie',
  },
  {
    name: 'Inside Out 2',
    year: 2024, genre: 'Animation · Adventure',
    thumb: imgInsideOut,
    netflix: 'inside+out+2',
    prime:   'Inside+Out+2',
    youtube: 'Inside+Out+2+full+movie',
  },
  {
    name: 'Moana 2',
    year: 2024, genre: 'Animation · Musical',
    thumb: imgMoana2,
    netflix: 'moana+2',
    prime:   'Moana+2',
    youtube: 'Moana+2+full+movie',
  },
  {
    name: 'Mufasa: The Lion King',
    year: 2024, genre: 'Animation · Adventure',
    thumb: imgMufasa,
    netflix: 'mufasa+the+lion+king',
    prime:   'Mufasa+The+Lion+King',
    youtube: 'Mufasa+The+Lion+King+full+movie',
  },
  {
    name: 'Mulan',
    year: 1998, genre: 'Animation · Action',
    thumb: imgMulan,
    netflix: 'mulan+1998',
    prime:   'Mulan+1998',
    youtube: 'Mulan+1998+full+movie',
  },
  {
    name: 'Orion and the Dark',
    year: 2024, genre: 'Animation · Comedy',
    thumb: imgOrion,
    netflix: 'orion+and+the+dark',
    prime:   'Orion+and+the+Dark',
    youtube: 'Orion+and+the+Dark+full+movie',
  },
  {
    name: 'Spirited Away',
    year: 2001, genre: 'Animation · Fantasy',
    thumb: imgSpiritedAway,
    netflix: 'spirited+away',
    prime:   'Spirited+Away',
    youtube: 'Spirited+Away+full+movie',
  },
  {
    name: 'The Boy and the Heron',
    year: 2023, genre: 'Animation · Fantasy',
    thumb: imgBoyHeron,
    netflix: 'the+boy+and+the+heron',
    prime:   'The+Boy+and+the+Heron',
    youtube: 'The+Boy+and+the+Heron+full+movie',
  },
  {
    name: 'Wicked',
    year: 2024, genre: 'Musical · Fantasy',
    thumb: imgWicked,
    netflix: 'wicked+2024',
    prime:   'Wicked+2024',
    youtube: 'Wicked+2024+full+movie',
  },
  {
    name: 'The Wild Robot',
    year: 2024, genre: 'Animation · Adventure',
    thumb: imgWildRobot,
    netflix: 'the+wild+robot',
    prime:   'The+Wild+Robot',
    youtube: 'The+Wild+Robot+full+movie',
  },
  {
    name: 'The Woman King',
    year: 2022, genre: 'Action · History',
    thumb: imgWomanKing,
    netflix: 'the+woman+king',
    prime:   'The+Woman+King',
    youtube: 'The+Woman+King+full+movie',
  },
];

const track = [...movies, ...movies];

const platforms = [
  {
    label: 'Netflix',
    color: 'bg-[#E50914] hover:bg-[#E50914]/90',
    url: (q) => `https://www.netflix.com/search?q=${q}`,
    key: 'netflix',
  },
  {
    label: 'Prime',
    color: 'bg-[#00A8E0] hover:bg-[#00A8E0]/90',
    url: (q) => `https://www.amazon.com/s?k=${q}&i=instant-video`,
    key: 'prime',
  },
  {
    label: 'YouTube',
    color: 'bg-zinc-800 hover:bg-zinc-700 border border-zinc-700',
    url: (q) => `https://www.youtube.com/results?search_query=${q}`,
    key: 'youtube',
  },
];

function MovieCard({ movie }) {
  return (
    <div className="group relative flex-shrink-0 w-52 flex flex-col gap-3">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 group-hover:border-[#A855F7]/60 transition-all duration-300 aspect-[2/3] shadow-xl bg-zinc-900">
        <img
          src={movie.thumb}
          alt={movie.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 gap-2">
          {platforms.map((p) => (
            <a
              key={p.key}
              href={p.url(movie[p.key])}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg text-white text-xs font-semibold transition-all duration-200 ${p.color}`}
            >
              <Play className="w-3 h-3 fill-white" />
              {p.label}
            </a>
          ))}
        </div>
      </div>

      <div className="px-0.5 space-y-0.5">
        <p className="text-sm font-semibold text-white leading-tight line-clamp-1">{movie.name}</p>
        <p className="text-xs text-zinc-500">{movie.genre} · {movie.year}</p>
      </div>
    </div>
  );
}

export default function Movies() {
  return (
    <section id="movies" className="relative border-t border-zinc-800 overflow-hidden">

      <div className="absolute inset-0 bg-[#18181B]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(168,85,247,0.15),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#A855F7]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#6366F1]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-container padding-container pt-20 lg:pt-28 pb-10">
        <Reveal className="space-y-3 mb-12">
          <span className="section-badge w-fit">
            <div className="w-2 h-2 bg-brand rounded-full animate-pulse" />
            Birthday Picks
          </span>
          <h2 className="section-title">
            Movies picked <span className="text-brand">just for you</span>
          </h2>
          <p className="section-subtitle body-md max-w-xl">
            Magical, bold, and unforgettable — hover a poster to watch on your platform of choice.
          </p>
        </Reveal>
      </div>

      <div className="relative pb-20 lg:pb-28">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#18181B] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#18181B] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-5 animate-marquee w-max px-6 hover:[animation-play-state:paused]">
          {track.map((movie, i) => (
            <MovieCard key={`${movie.name}-${i}`} movie={movie} />
          ))}
        </div>
      </div>

    </section>
  );
}
