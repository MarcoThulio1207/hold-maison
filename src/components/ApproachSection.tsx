import { IMAGES, LINKS, type Dictionary } from "../data/content";
import { ArrowLink, ParallaxImage, Reveal, SectionSignature } from "./shared";

const BLOCK_IMAGES = [IMAGES.architecture, IMAGES.interiors, IMAGES.objets];

/* ============================================================
   Architecture · Interiors · Objets — three editorial pillars
   in an asymmetric, staggered grid.
   ============================================================ */
export default function ApproachSection({ t }: { t: Dictionary }) {
  return (
    <section id="approach" className="py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionSignature number="06" />
        <Reveal>
          <h2 className="mt-10 max-w-3xl font-serif text-4xl font-light leading-tight text-cocoa sm:text-5xl lg:text-6xl">
            {t.approach.title}
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-3">
          {t.approach.blocks.map((block, i) => (
            <Reveal
              key={block.title}
              delay={i * 0.15}
              className={i === 1 ? "md:translate-y-14" : ""}
            >
              <div className="group">
                <div className="overflow-hidden">
                  <ParallaxImage
                    src={BLOCK_IMAGES[i]}
                    alt={block.title}
                    curtain="up"
                    strength={14}
                    className="aspect-[3/4] w-full"
                    imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="font-sans text-[10px] tracking-[0.3em] text-champagne">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-light text-cocoa lg:text-3xl">
                    {block.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-xs font-sans text-sm font-light leading-relaxed text-graphite">
                  {block.text}
                </p>
                <div className="mt-6">
                  <ArrowLink href={LINKS.instagram}>{block.cta}</ArrowLink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
