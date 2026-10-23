import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import logoscg from '../assets/logosvg.svg'

/* ============================================================
   Monogram — shared brand image from public/images/logo-mark.png
   ============================================================ */
export function Monogram({
  className = "",
}: {
  className?: string;
}) {
  return (
    <img
      src={logoscg}
      alt=""
      className={`object-contain ${className}`}
      aria-hidden="true"
    />
  );
}

/* ============================================================
   SectionSignature — small monogram + "HOLD Maison" + drawn line
   ============================================================ */
export function SectionSignature({
  number,
  light = false,
}: {
  number?: string;
  light?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="flex items-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Monogram
          className={`h-7 w-6 ${light ? "text-champagne" : "text-gold"}`}
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`font-sans text-[10px] uppercase tracking-editorial ${
          light ? "text-champagne" : "text-taupe"
        }`}
      >
        HOLD Maison
      </motion.span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-16 origin-left bg-champagne sm:w-28"
      />
      {number && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif text-sm italic text-gold"
        >
          {number}
        </motion.span>
      )}
    </div>
  );
}

/* ============================================================
   ArrowLink — thin editorial button with animated arrow
   ============================================================ */
export function ArrowLink({
  children,
  href,
  onClick,
  light = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  light?: boolean;
  className?: string;
}) {
  const base = light
    ? "text-ivory border-champagne/50 hover:border-champagne"
    : "text-cocoa border-champagne hover:border-gold";
  const inner = (
    <>
      <span className="font-sans text-[11px] uppercase tracking-[0.24em]">
        {children}
      </span>
      <span className="relative inline-flex w-8 items-center overflow-hidden">
        <span
          className={`h-px w-full transition-all duration-500 group-hover:translate-x-1 ${
            light ? "bg-ivory" : "bg-gold"
          }`}
        />
        <svg
          viewBox="0 0 10 10"
          className={`absolute right-0 h-2.5 w-2.5 transition-transform duration-500 group-hover:translate-x-1 ${
            light ? "text-ivory" : "text-gold"
          }`}
          fill="none"
        >
          <path d="M2 1 L8 5 L2 9" stroke="currentColor" strokeWidth="1" />
        </svg>
      </span>
    </>
  );
  const cls = `group inline-flex items-center gap-3 border-b pb-2 transition-colors duration-500 ${base} ${className}`;
  if (href) {
    return (
      <a href={href} target={href.startsWith("#") ? undefined : "_blank"} rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

/* ============================================================
   Reveal — fade + subtle vertical displacement on scroll
   ============================================================ */
export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   ParallaxImage — editorial curtain reveal + subtle parallax
   ============================================================ */
export function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  curtain = "left",
  strength = 24,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  curtain?: "left" | "right" | "up";
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yMove = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  const origin =
    curtain === "left" ? "origin-left" : curtain === "right" ? "origin-right" : "origin-top";

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y: yMove }}
        initial={{ scale: 1.12 }}
        animate={inView ? { scale: 1.04 } : {}}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className={`h-[110%] w-full object-cover ${imgClassName}`}
      />
      {/* curtain of light */}
      <motion.div
        initial={{ scaleX: curtain === "up" ? 1 : 1, scaleY: 1 }}
        animate={
          inView
            ? curtain === "up"
              ? { scaleY: 0 }
              : { scaleX: 0 }
            : {}
        }
        transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        className={`absolute inset-0 bg-ivory ${origin}`}
        style={curtain === "up" ? { transformOrigin: "top" } : undefined}
      />
    </div>
  );
}

/* ============================================================
   ThinRule — a horizontal line that draws itself
   ============================================================ */
export function ThinRule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className={`h-px origin-left bg-champagne/70 ${className}`}
    />
  );
}
