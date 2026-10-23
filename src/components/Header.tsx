import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LANGS, type Dictionary, type Lang } from "../data/content";
import headerLogo from "../assets/5.png";

export default function Header({
  lang,
  setLang,
  t,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dictionary;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: t.nav.architecture, href: "#approach" },
    { label: t.nav.interiors, href: "#approach" },
    { label: t.nav.objets, href: "#approach" },
    { label: t.nav.exhibitions, href: "#exhibitions" },
    { label: t.nav.press, href: "#press" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-ivory/90 shadow-[0_1px_0_0_rgba(216,197,164,0.4)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex min-h-24 max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
          {/* Language selector */}
          <div className="flex items-center gap-1 font-sans text-[10px] tracking-[0.2em] text-taupe">
            {LANGS.map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="mx-1.5 text-champagne">·</span>}
                <button
                  onClick={() => setLang(l)}
                  className={`group relative pb-0.5 uppercase transition-colors duration-300 hover:text-cocoa ${
                    lang === l ? "text-cocoa" : ""
                  }`}
                >
                  {l}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-px origin-left bg-champagne transition-transform duration-500 ${
                      lang === l ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              </span>
            ))}
          </div>

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute left-1/2 flex -translate-x-1/2 flex-col items-center text-cocoa"
            aria-label="HOLD Maison — top"
          >
            <img
              src={headerLogo}
              alt="HOLD Maison"
              className={`object-contain transition-all duration-700 ${
                scrolled ? "h-20 w-36" : "h-24 w-40 sm:w-44"
              }`}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 xl:flex">
            {nav.slice(0, 4).map((n) => (
              <button
                key={n.label}
                onClick={() => go(n.href)}
                className="group relative font-sans text-[10px] uppercase tracking-[0.2em] text-graphite transition-colors hover:text-cocoa"
              >
                {n.label}
                <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100" />
              </button>
            ))}
            <button
              onClick={() => setOpen(true)}
              aria-label="Menu"
              className="group ml-2 flex h-8 w-8 flex-col items-end justify-center gap-1.5"
            >
              <span className="h-px w-6 bg-cocoa transition-all duration-500 group-hover:w-4" />
              <span className="h-px w-4 bg-gold transition-all duration-500 group-hover:w-6" />
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Menu"
            className="group flex h-9 w-9 flex-col items-end justify-center gap-1.5 xl:hidden"
          >
            <span className="h-px w-6 bg-cocoa transition-all duration-500 group-hover:w-4" />
            <span className="h-px w-4 bg-gold transition-all duration-500 group-hover:w-6" />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ivory"
          >
            <div className="flex items-center justify-between px-6 py-5 lg:px-12">
              <span className="font-serif text-sm tracking-[0.42em] text-cocoa">
                HOLD&nbsp;MAISON
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="relative h-9 w-9"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 rotate-45 bg-cocoa" />
                <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -rotate-45 bg-gold" />
              </button>
            </div>
            <div className="flex flex-1 flex-col items-center justify-center gap-1 px-6">
              {nav.map((n, i) => (
                <motion.button
                  key={n.label + i}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => go(n.href)}
                  className="group py-2 font-serif text-3xl font-light text-cocoa transition-colors hover:text-gold sm:text-4xl"
                >
                  <span className="mr-4 font-sans text-[10px] tracking-[0.3em] text-champagne">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {n.label}
                </motion.button>
              ))}
            </div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="mx-6 mb-8 h-px origin-left bg-champagne lg:mx-12"
            />
            <div className="pb-10 text-center font-sans text-[10px] uppercase tracking-editorial text-taupe">
              Brasil · Portugal
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
