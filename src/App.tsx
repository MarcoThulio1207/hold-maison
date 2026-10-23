import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PresenceSection from "./components/PresenceSection";
import ChapterSection from "./components/ChapterSection";
import ResearchSection from "./components/ResearchSection";
import ApproachSection from "./components/ApproachSection";
import ReferencesSection from "./components/ReferencesSection";
import AboutSection from "./components/AboutSection";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { DICTIONARIES, IMAGES, LINKS, type Lang } from "./data/content";

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("hold-maison-lang");
    return (saved as Lang) || "en";
  });

  useEffect(() => {
    localStorage.setItem("hold-maison-lang", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  const t = DICTIONARIES[lang];

  return (
    <div className="min-h-screen bg-ivory text-cocoa">
      <Header lang={lang} setLang={setLang} t={t} />

      {/* Cover */}
      <Hero t={t} />

      {/* 01 — International Presence (editorial image switcher) */}
      <PresenceSection t={t} />

      {/* 02 — Exhibitions */}
      <ChapterSection
        id="exhibitions"
        number="02"
        title={t.exhibitions.title}
        text={t.exhibitions.text}
        meta={t.exhibitions.meta}
        cta={t.exhibitions.cta}
        ctaHref={LINKS.instagram}
        image={IMAGES.exhibitions}
      />

      {/* 03 — Press & Publications */}
      <ChapterSection
        id="press"
        number="03"
        title={t.press.title}
        text={t.press.text}
        meta={t.press.meta}
        cta={t.press.cta}
        ctaHref={LINKS.instagram}
        image={IMAGES.press}
        flip
        tint
      />

      {/* 04 — Luxury Education */}
      <ChapterSection
        id="education"
        number="04"
        title={t.education.title}
        text={t.education.text}
        meta={t.education.meta}
        cta={t.education.cta}
        ctaHref={LINKS.instagram}
        image={IMAGES.education}
      />

      {/* 05 — Design Research (panoramic strip + place switcher) */}
      <ResearchSection t={t} />

      {/* 06 — Architecture · Interiors · Objets */}
      <ApproachSection t={t} />

      {/* 07 — Selected Names & References */}
      <ReferencesSection t={t} />

      {/* 08 — About Holdlianh Beiró */}
      <AboutSection t={t} />

      {/* 09 — Selected Projects */}
      <ProjectsCarousel t={t} />

      {/* 10 — Contact / Footer */}
      <Footer t={t} />

      <BackToTop label={t.footer.backTop} />
    </div>
  );
}
