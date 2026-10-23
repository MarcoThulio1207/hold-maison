import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/* Discreet editorial back-to-top button */
export default function BackToTop({ label }: { label: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={label}
          className="group fixed bottom-8 right-6 z-40 flex h-12 w-12 items-center justify-center border border-champagne bg-ivory/90 backdrop-blur transition-colors duration-500 hover:border-gold lg:right-10"
        >
          <svg
            viewBox="0 0 10 24"
            className="h-6 w-2.5 text-taupe transition-all duration-500 group-hover:-translate-y-1 group-hover:text-cocoa"
            fill="none"
          >
            <path d="M5 24 V1 M1 6 L5 1 L9 6" stroke="currentColor" strokeWidth="1" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
