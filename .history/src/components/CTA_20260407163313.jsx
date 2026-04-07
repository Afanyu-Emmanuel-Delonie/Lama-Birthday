import lamaImg from '../assets/lama-1.png';
import Reveal from './Reveal.jsx';

export default function CTA() {
  return (
    <section className="relative bg-[#18181B] border-t border-zinc-800 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-y-0 right-0 w-full md:w-2/3 lg:w-2/3">
        <img
          src={lamaImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-right opacity-25 scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#18181B] via-[#18181B]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] via-transparent to-[#18181B]" />
      </div>

      <div className="relative max-container padding-container py-20 lg:py-28">
        <Reveal className="max-w-2xl space-y-8">

          <span className="label-xs text-brand border border-[#A855F7]/30 px-3 py-1 rounded-full">
            A Birthday Poem
          </span>

          <h2
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            For You<span className="text-brand">Lama Seleman</span>
          </h2>

          {/* Poem */}
          <div className="border-l-2 border-[#A855F7]/40 pl-6">
            <p className="body-lg text-zinc-300 leading-loose whitespace-pre-line">
              {`In the rush of the world, a steady light,
A mind of depth, a vision bright.
Where others speak, she chooses to see,
The grace of thought and clarity.
To Lama, whose wisdom is her own,
The finest seeds of peace are sown.`}
            </p>
          </div>

          <p className="body-sm text-zinc-500 italic">— With love, on your special day</p>

        </Reveal>
      </div>
    </section>
  );
}
