import { motion } from "framer-motion";
import { IMAGES, LINKS, type Dictionary } from "../data/content";
import { ArrowLink, Monogram, Reveal, SectionSignature } from "./shared";

/* ============================================================
   About Holdlianh Beiró — editorial black & white portrait,
   text in layered blocks, monogram as final signature.
   ============================================================ */
export default function AboutSection({ t }: { t: Dictionary }) {
  return (
    <section id="about" className="overflow-hidden py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionSignature number="08" />

        <div className="mt-14 grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          {/* Portrait */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              className="relative mx-auto max-w-md overflow-hidden lg:mx-0"
            >
              <motion.img
                src={IMAGES.portrait}
                alt="Holdlianh Beiró"
                initial={{ scale: 1.1, filter: "grayscale(1) brightness(1.05)" }}
                whileInView={{ scale: 1.02 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[3/4] w-full object-cover grayscale"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="pointer-events-none absolute -right-2 -top-6 hidden lg:block"
            >
              <Monogram className="h-24 w-20 text-champagne/50" />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="mx-auto mt-6 h-px w-2/3 origin-left bg-champagne lg:mx-0"
            />
            <Reveal delay={0.6}>
              <p className="mt-4 text-center font-sans text-[10px] uppercase tracking-editorial text-taupe lg:text-left">
                Architect · Interior Designer · Brasil — Portugal
              </p>
            </Reveal>
          </div>

          {/* Text blocks */}
          <div className="lg:col-span-7 lg:pl-16">
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight text-cocoa sm:text-5xl">
                {t.about.title}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl font-sans text-[15px] font-light leading-[1.9] text-graphite">
                {t.about.p1}
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl font-sans text-[15px] font-light leading-[1.9] text-graphite">
                {t.about.p2}
              </p>
            </Reveal>
            <Reveal delay={0.45}>
              <blockquote className="mt-10 border-l border-champagne pl-6 font-serif text-xl italic leading-relaxed text-taupe">
                “Beauty, memory, matter, experience.”
              </blockquote>
            </Reveal>
            <Reveal delay={0.55}>
              <div className="mt-10">
                <ArrowLink href={LINKS.instagram}>{t.about.cta}</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
