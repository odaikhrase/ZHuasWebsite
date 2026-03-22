import { useState, useCallback, useEffect } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { GALLERY_IMAGES } from "@/data/images";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const close = () => setLightboxIdx(null);
  const prev = useCallback(() => setLightboxIdx((i) => (i !== null ? (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null)), []);
  const next = useCallback(() => setLightboxIdx((i) => (i !== null ? (i + 1) % GALLERY_IMAGES.length : null)), []);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIdx, prev, next]);

  return (
    <>
      <section className="py-24 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Portfolio</p>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-foreground mb-6">
                Gallery
              </h1>
              <p className="text-muted-foreground">
                Browse our collection of premium marble PVC wall panel installations across Boston, Massachusetts.
              </p>
            </div>
          </ScrollReveal>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {GALLERY_IMAGES.map((img, i) => (
              <ScrollReveal key={i} delay={(i % 6) * 80}>
                <button
                  onClick={() => setLightboxIdx(i)}
                  className="w-full overflow-hidden rounded-lg group block"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-secondary/95 flex items-center justify-center animate-fade-in" onClick={close}>
          <button onClick={close} className="absolute top-6 right-6 text-secondary-foreground/70 hover:text-secondary-foreground z-10">
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-foreground/70 hover:text-secondary-foreground"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-foreground/70 hover:text-secondary-foreground"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={GALLERY_IMAGES[lightboxIdx].src}
            alt={GALLERY_IMAGES[lightboxIdx].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
