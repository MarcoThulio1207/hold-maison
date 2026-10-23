import { Reveal, SectionSignature, ArrowLink, ParallaxImage, ThinRule } from "./shared";

/* ============================================================
   ChapterSection — a reusable "visual chapter" of the maison.
   Alternates image left/right, big serif title, meta line, CTA.
   ============================================================ */
export default function ChapterSection({
  id,
  number,
  title,
  text,
  meta,
  cta,
  ctaHref,
  image,
  flip = false,
  tint = false,
  children,
}: {
  id: string;
  number: string;
  title: string;
  text: string;
  meta: string;
  cta: string;
  ctaHref: string;
  image: string;
  flip?: boolean;
  tint?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden py-24 lg:py-32 ${tint ? "bg-cream/60" : ""}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionSignature number={number} />

        <div
          className={`mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-0`}
        >
          {/* Text column */}
          <div
            className={`lg:col-span-5 ${
              flip ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16"
            }`}
          >
            <ThinRule className="mb-8 w-16" />
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight text-cocoa sm:text-5xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md font-sans text-sm font-light leading-relaxed text-graphite">
                {text}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-6 font-sans text-[10px] uppercase tracking-[0.22em] text-gold">
                {meta}
              </p>
            </Reveal>
            {children && <Reveal delay={0.3}>{children}</Reveal>}
            <Reveal delay={0.35}>
              <div className="mt-10">
                <ArrowLink href={ctaHref}>{cta}</ArrowLink>
              </div>
            </Reveal>
          </div>

          {/* Image column */}
          <div className={`relative lg:col-span-7 ${flip ? "lg:order-1" : "lg:order-2"}`}>
            <ParallaxImage
              src={image}
              alt={title}
              curtain={flip ? "right" : "left"}
              className="aspect-[4/3] w-full sm:aspect-[16/10]"
            />
            {/* giant faded number */}
            <span
              aria-hidden
              className={`pointer-events-none absolute -top-10 hidden select-none font-serif text-[9rem] font-light leading-none text-champagne/30 lg:block ${
                flip ? "-right-6" : "-left-6"
              }`}
            >
              {number}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
