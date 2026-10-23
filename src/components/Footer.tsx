import { motion } from "framer-motion";
import { LINKS, type Dictionary } from "../data/content";
import { Monogram, Reveal } from "./shared";

/* ============================================================
   Contact / Footer — final chapter of the maison.
   ============================================================ */
export default function Footer({ t }: { t: Dictionary }) {
  const buttons = [
    { label: t.contact.whatsapp, href: LINKS.whatsapp },
    { label: t.contact.instagram, href: LINKS.instagram },
    { label: t.contact.email, href: LINKS.email },
  ];

  return (
    <footer id="contact" className="relative overflow-hidden pt-28 lg:pt-40">
      <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-12">
        {/* final monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <Monogram className="h-20 w-16 text-gold" />
        </motion.div>

        <Reveal delay={0.15}>
          <h2 className="mx-auto mt-8 max-w-3xl font-serif text-4xl font-light leading-tight text-cocoa sm:text-5xl lg:text-6xl">
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-6 font-sans text-sm font-light text-graphite">{t.contact.sub}</p>
        </Reveal>

        {/* contact buttons */}
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            {buttons.map((b) => (
              <a
                key={b.label}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="group relative w-56 border border-champagne px-8 py-4 font-sans text-[11px] uppercase tracking-[0.26em] text-cocoa transition-colors duration-700 hover:border-gold"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-cream transition-transform duration-700 ease-out group-hover:scale-y-100" />
                <span className="relative flex items-center justify-center gap-3">
                  {b.label}
                  <svg viewBox="0 0 10 10" className="h-2 w-2 text-gold transition-transform duration-500 group-hover:translate-x-1" fill="none">
                    <path d="M2 1 L8 5 L2 9" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="mt-14 font-sans text-[10px] uppercase tracking-editorial text-taupe">
            Brasil · Portugal · Madrid · Milano · Paris · Dubai · Miami
          </p>
        </Reveal>
      </div>

      {/* final line drawing edge to edge */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-20 h-px w-full origin-left bg-champagne"
      />

      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row lg:px-12">
        <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-taupe">
          {t.footer.rights}
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {[
            { label: t.footer.privacy, href: "#" },
            { label: "Instagram", href: LINKS.instagram },
            { label: "LinkedIn", href: LINKS.linkedin },
            { label: t.footer.contact, href: LINKS.email },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("#") ? undefined : "_blank"}
              rel="noreferrer"
              className="group relative font-sans text-[10px] uppercase tracking-[0.2em] text-graphite transition-colors hover:text-cocoa"
            >
              {l.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
