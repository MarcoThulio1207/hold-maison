import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES, type Dictionary } from "../data/content";
import { ArrowLink } from "./shared";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ t }: { t: Dictionary }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} id="hero" className="relative overflow-hidden pt-24 lg:pt-28">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pb-16 lg:grid-cols-12 lg:gap-0 lg:px-12 lg:pb-24">
        {/* Left — text */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 flex flex-col justify-center pt-10 lg:col-span-6 lg:pr-16 lg:pt-0"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, delay: 1.1, ease }}
            className="mb-8 h-px w-24 origin-left bg-champagne"
          />
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.7, ease }}
            className="font-serif text-4xl font-light leading-[1.12] text-cocoa sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0, ease }}
            className="mt-6 max-w-md font-serif text-base italic leading-relaxed text-taupe"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease }}
            className="mt-8 max-w-sm font-sans text-[13px] font-light leading-relaxed text-graphite"
          >
            {t.hero.complement}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.45 }}
            className="mt-10 font-sans text-[10px] uppercase tracking-[0.26em] text-taupe"
          >
            {t.hero.cities}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 1.6, ease }}
            className="mt-10"
          >
            <ArrowLink href="#presence">{t.hero.cta}</ArrowLink>
          </motion.div>
        </motion.div>

        {/* Right — image with curtain-of-light reveal */}
        <div className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/3.4] lg:h-[78vh] lg:min-h-[540px]">
            <motion.img
              src={IMAGES.hero}
              alt="HOLD Maison — sensory interior"
              style={{ y: imgY }}
              initial={{ scale: 1.18 }}
              animate={{ scale: 1.06 }}
              transition={{ duration: 2.4, delay: 0.4, ease }}
              className="h-[112%] w-full object-cover"
            />
            {/* curtain of light — two panels opening */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-y-0 left-0 w-1/2 origin-left bg-ivory"
            />
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-y-0 right-0 w-1/2 origin-right bg-ivory"
            />
            {/* soft light sweep */}
            <motion.div
              initial={{ x: "-120%" }}
              animate={{ x: "140%" }}
              transition={{ duration: 1.8, delay: 1.5, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent"
            />
          </div>
          {/* thin frame offset */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 1.9 }}
            className="pointer-events-none absolute -bottom-4 -left-4 hidden h-full w-full border border-champagne/60 lg:block"
          />
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-champagne"
        />
      </motion.div>
    </section>
  );
}
