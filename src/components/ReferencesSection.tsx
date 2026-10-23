import { motion } from "framer-motion";
import type { Dictionary } from "../data/content";
import { Reveal, SectionSignature } from "./shared";

/* ============================================================
   Selected Names & References — three columns separated by
   thin vertical lines that draw themselves. Names appear
   in sequence, treated by category (never mixed as "clients").
   ============================================================ */
export default function ReferencesSection({ t }: { t: Dictionary }) {
  return (
    <section id="references" className="bg-cream/60 py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionSignature number="07" />
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 className="font-serif text-4xl font-light leading-tight text-cocoa sm:text-5xl">
              {t.references.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-sm font-sans text-xs font-light leading-relaxed text-taupe">
              {t.references.note}
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {t.references.columns.map((col, ci) => (
            <div key={col.title} className="relative md:px-10 first:md:pl-0 last:md:pr-0">
              {/* vertical separator that draws down */}
              {ci > 0 && (
                <motion.span
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.3 + ci * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0 hidden h-full w-px origin-top bg-champagne/70 md:block"
                />
              )}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: ci * 0.2 }}
                className="font-sans text-[10px] uppercase tracking-editorial text-gold"
              >
                {col.title}
              </motion.p>
              <ul className="mt-8 space-y-4">
                {col.names.split("·").map((name, ni) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + ci * 0.15 + ni * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-serif text-xl font-light text-graphite transition-colors duration-500 hover:text-cocoa sm:text-2xl"
                  >
                    {name.trim()}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
