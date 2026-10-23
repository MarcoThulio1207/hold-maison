import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { IMAGES, LINKS, type Dictionary } from "../data/content";
import { ArrowLink, Reveal, SectionSignature, ThinRule } from "./shared";

/* ============================================================
   Design Research — panoramic strip with lateral scroll motion
   and clickable places (Milano · Paris · Dubai · Miami · Portugal)
   that pan across the panorama.
   ============================================================ */
export default function ResearchSection({ t }: { t: Dictionary }) {
  const ref = useRef<HTMLDivElement>(null);
  const [place, setPlace] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  const places = t.research.places;
  // pan position across the panorama for each place
  const pan = `${(place / (places.length - 1)) * 100}%`;

  return (
    <section id="research" ref={ref} className="bg-cream/60 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionSignature number="05" />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ThinRule className="mb-8 w-16" />
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight text-cocoa sm:text-5xl">
                {t.research.title}
              </h2>
            </Reveal>
          </div>
          <div className="flex flex-col justify-end lg:col-span-6">
            <Reveal delay={0.15}>
              <p className="max-w-lg font-sans text-sm font-light leading-relaxed text-graphite">
                {t.research.text}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                {t.research.meta}
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Panoramic strip — full bleed */}
      <div className="relative mt-14 overflow-hidden">
        <motion.div style={{ x: drift }} className="relative h-[46vh] min-h-[320px] w-[112%]">
          <motion.img
            src={IMAGES.research}
            alt="Design research — international immersions"
            animate={{ objectPosition: `${pan} center` }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover"
            style={{ objectPosition: "0% center" }}
          />
        </motion.div>
        <motion.div
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 origin-right bg-cream"
        />
      </div>

      {/* Place switcher */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          {places.map((p, i) => (
            <button
              key={p}
              onClick={() => setPlace(i)}
              className="group flex flex-col items-start"
            >
              <span
                className={`font-serif text-xl transition-colors duration-500 sm:text-2xl ${
                  place === i ? "text-cocoa" : "text-taupe/60 hover:text-taupe"
                }`}
              >
                {p}
              </span>
              <span
                className={`mt-1.5 h-px bg-gold transition-all duration-700 ${
                  place === i ? "w-full" : "w-0 group-hover:w-1/2"
                }`}
              />
            </button>
          ))}
          <div className="ml-auto hidden sm:block">
            <ArrowLink href={LINKS.instagram}>{t.research.cta}</ArrowLink>
          </div>
        </div>
        <div className="mt-8 sm:hidden">
          <ArrowLink href={LINKS.instagram}>{t.research.cta}</ArrowLink>
        </div>
      </div>
    </section>
  );
}
