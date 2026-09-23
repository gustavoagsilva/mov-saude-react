import { useEffect, useState } from "react";
import { heroPhotos } from "../../data/heroPhotos";

function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event) => setReducedMotion(event.matches);
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || heroPhotos.length < 2) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) {
        setActive((current) => (current + 1) % heroPhotos.length);
      }
    }, 3000);

    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  return (
    <div className="hero__image" role="region" aria-label="Fotos da clínica">
      {heroPhotos.map((photo, index) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          aria-hidden={index !== active}
          className={`hero__slide${index === active ? " hero__slide--active" : ""}`}
          style={{ objectPosition: photo.position }}
          fetchPriority={index === 0 ? "high" : "auto"}
        />
      ))}
      {heroPhotos.length > 1 && (
        <div className="hero__slideshow-controls">
          {!reducedMotion && (
            <button
              type="button"
              className="hero__slideshow-toggle"
              onClick={() => setPaused((current) => !current)}
              aria-label={paused ? "Retomar troca automática de fotos" : "Pausar troca automática de fotos"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                {paused ? (
                  <path d="M8 5v14l11-7z" />
                ) : (
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                )}
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default HeroSlideshow;
