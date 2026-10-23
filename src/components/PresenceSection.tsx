import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PRESENCE_IMAGES, type Dictionary } from "../data/content";
import { Reveal, SectionSignature } from "./shared";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PresenceSection({ t }: { t: Dictionary }) {
  const [active, setActive] = useState(0);
  const items = t.presence.items;
  const current = items[active];

  return (
    <section id="presence" className="relative bg-cream/60 py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionSignature number="01" />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight text-cocoa sm:text-5xl lg:text-6xl">
                {t.presence.title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 font-sans text-[10px] uppercase tracking-[0.26em] text-gold">
                {t.presence.cities}
              </p>
            </Reveal>
          </div>
          <div className="flex items-end lg:col-span-5">
            <Reveal delay={0.25}>
              <p className="max-w-md font-sans text-sm font-light leading-relaxed text-graphite">
                {t.presence.text}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Main editorial image */}
        <div className="relative mt-14 lg:mt-20">
          <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[21/10]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.key}
                src={PRESENCE_IMAGES[current.key]}
                alt={current.title}
                initial={{ opacity: 0, x: 40, scale: 1.06 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -40, scale: 1.02 }}
                transition={{ duration: 0.9, ease }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            {/* counter */}
            <div className="absolute bottom-0 left-0 bg-ivory px-5 py-3 font-serif text-lg italic text-cocoa">
              {String(active + 1).padStart(2, "0")}
              <span className="mx-2 text-champagne">/</span>
              <span className="text-taupe">{String(items.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Floating text card */}
          <div className="relative z-10 -mt-10 ml-auto w-full max-w-xl bg-ivory p-8 shadow-[0_20px_50px_-30px_rgba(68,58,48,0.35)] sm:-mt-16 sm:mr-6 lg:mr-16 lg:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.key}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease }}
              >
                <h3 className="font-serif text-2xl font-light text-cocoa lg:text-3xl">
                  {current.title}
                </h3>
                <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                  {current.meta}
                </p>
                <p className="mt-4 font-sans text-sm font-light leading-relaxed text-graphite">
                  {current.text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Switcher — editorial thumbnail bar */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-champagne/50 pt-8 md:grid-cols-4">
          {items.map((item, i) => (
            <button
              key={item.key}
              onClick={() => setActive(i)}
              className="group flex flex-col items-start text-left"
            >
              <div className="relative mb-4 h-20 w-full overflow-hidden sm:h-24">
                <img
                  src={PRESENCE_IMAGES[item.key]}
                  alt=""
                  loading="lazy"
                  className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    active === i ? "opacity-100" : "opacity-55 group-hover:opacity-85"
                  }`}
                />
              </div>
              <span className="font-sans text-[10px] tracking-[0.24em] text-champagne">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`mt-1 font-serif text-lg leading-snug transition-colors duration-500 ${
                  active === i ? "text-cocoa" : "text-taupe group-hover:text-cocoa"
                }`}
              >
                {item.title}
              </span>
              <span className="mt-1 line-clamp-2 font-sans text-[10px] uppercase tracking-[0.14em] text-taupe/70">
                {item.meta}
              </span>
              <span
                className={`mt-3 h-px bg-gold transition-all duration-700 ${
                  active === i ? "w-full" : "w-0 group-hover:w-1/3"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
