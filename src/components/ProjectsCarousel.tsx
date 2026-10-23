import { useCallback, useEffect, useRef, useState } from "react";
import { LINKS, PROJECT_IMAGES, type Dictionary } from "../data/content";
import { Reveal, SectionSignature } from "./shared";

/* ============================================================
   Selected Projects — elegant horizontal carousel with thin
   arrows, small indicators and soft-hover cards.
   ============================================================ */
export default function ProjectsCarousel({ t }: { t: Dictionary }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const items = t.projects.items;

  const cardWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return 0;
    const card = el.firstElementChild as HTMLElement;
    const gap = 32;
    return card.offsetWidth + gap;
  }, []);

  const scrollTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    el.scrollTo({ left: clamped * cardWidth(), behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const w = cardWidth();
      if (w > 0) setIndex(Math.round(el.scrollLeft / w));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [cardWidth]);

  return (
    <section id="projects" className="bg-cream/60 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionSignature number="09" />
        <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight text-cocoa sm:text-5xl">
                {t.projects.title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-lg font-sans text-sm font-light leading-relaxed text-graphite">
                {t.projects.text}
              </p>
            </Reveal>
          </div>
          {/* Thin arrows */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo(index - 1)}
              aria-label="Previous"
              className="group flex h-11 w-16 items-center justify-center border border-champagne transition-colors duration-500 hover:border-gold"
            >
              <svg viewBox="0 0 24 10" className="h-2.5 w-7 text-taupe transition-all duration-500 group-hover:-translate-x-1 group-hover:text-cocoa" fill="none">
                <path d="M24 5 H1 M6 1 L1 5 L6 9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo(index + 1)}
              aria-label="Next"
              className="group flex h-11 w-16 items-center justify-center border border-champagne transition-colors duration-500 hover:border-gold"
            >
              <svg viewBox="0 0 24 10" className="h-2.5 w-7 text-taupe transition-all duration-500 group-hover:translate-x-1 group-hover:text-cocoa" fill="none">
                <path d="M0 5 H23 M18 1 L23 5 L18 9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-8 overflow-x-auto scroll-smooth px-6 lg:px-12"
        style={{ scrollPaddingLeft: "3rem" }}
      >
        {items.map((p, i) => (
          <article
            key={p.title}
            className="group w-[80vw] flex-shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] xl:w-[26vw]"
          >
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="block">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={PROJECT_IMAGES[i]}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                {/* soft darkening + title on hover */}
                <div className="absolute inset-0 bg-cocoa/0 transition-colors duration-700 group-hover:bg-cocoa/35" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif text-2xl font-light text-ivory">{p.title}</p>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.24em] text-champagne">
                    {p.category}
                  </p>
                </div>
                <span className="absolute left-0 top-6 bg-ivory px-3 py-1 font-sans text-[10px] tracking-[0.24em] text-taupe">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </a>
            <div className="mt-5">
              <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-gold">
                {p.category}
                {p.location ? ` · ${p.location}` : ""}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-light text-cocoa">{p.title}</h3>
              <p className="mt-2 max-w-sm font-sans text-[13px] font-light leading-relaxed text-graphite">
                {p.text}
              </p>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="group/link mt-4 inline-flex items-center gap-3 border-b border-champagne pb-1.5 font-sans text-[10px] uppercase tracking-[0.24em] text-cocoa transition-colors duration-500 hover:border-gold"
              >
                {t.projects.view}
                <svg viewBox="0 0 10 10" className="h-2 w-2 text-gold transition-transform duration-500 group-hover/link:translate-x-1" fill="none">
                  <path d="M2 1 L8 5 L2 9" stroke="currentColor" strokeWidth="1" />
                </svg>
              </a>
            </div>
          </article>
        ))}
        <div className="w-px flex-shrink-0" />
      </div>

      {/* Indicators */}
      <div className="mt-10 flex items-center justify-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Project ${i + 1}`}
            className={`h-px transition-all duration-500 ${
              index === i ? "w-10 bg-gold" : "w-5 bg-champagne/60 hover:bg-champagne"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
