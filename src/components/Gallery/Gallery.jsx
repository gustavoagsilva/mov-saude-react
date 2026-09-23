import { useEffect, useState } from "react";
import { galleryPhotos } from "../../data/gallery";
import "./Gallery.css";

function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const photos = galleryPhotos.filter((photo) => photo.src);
  const total = photos.length;
  const illustrative = photos.some((photo) => photo.illustrative);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = (event) => setReducedMotion(event.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || total < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % total);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, total]);

  function navigate(direction) {
    setPaused(true);
    setActive((current) => (current + direction + total) % total);
  }

  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title" className="gallery__title">Conheça nosso espaço</h2>
        <p className="gallery__intro">Um espaço dedicado ao movimento, ao cuidado e ao seu bem-estar.</p>
        {illustrative && (
          <p className="gallery__notice">Fotos ilustrativas de outros espaços. Em breve, imagens da MOV Saúde.</p>
        )}
        {!total ? (
          <p className="gallery__notice">Em breve, fotos da nossa clínica.</p>
        ) : (
          <div className="gallery__carousel" aria-roledescription="carrossel" aria-label="Fotos dos ambientes" role="group">
            <div className="gallery__viewport" aria-live="off">
              {photos.map((photo, start) => (
                <div
                  key={photo.id}
                  className={`gallery__grid${start === active % total ? " gallery__grid--active" : ""}`}
                  aria-hidden={start !== active % total}
                  style={{ "--gallery-columns": Math.min(3, total) }}
                >
                  {Array.from({ length: Math.min(3, total) }, (_, offset) => {
                    const item = photos[(start + offset) % total];
                    return (
                      <figure className="gallery__item" key={item.id}>
                        <img src={item.src} alt={item.alt} loading="lazy" width="720" height="540" />
                        <figcaption>{item.caption}</figcaption>
                      </figure>
                    );
                  })}
                </div>
              ))}
            </div>
            {total > 1 && (
              <div className="gallery__controls">
                <button type="button" onClick={() => navigate(-1)} aria-label="Fotos anteriores">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6" /></svg>
                </button>
                {!reducedMotion && (
                  <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Retomar galeria automática" : "Pausar galeria automática"}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="gallery__play-icon">
                      <path d={paused ? "M8 5v14l11-7z" : "M6 5h4v14H6zm8 0h4v14h-4z"} />
                    </svg>
                  </button>
                )}
                <button type="button" onClick={() => navigate(1)} aria-label="Próximas fotos">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m10 6 6 6-6 6" /></svg>
                </button>
              </div>
            )}
          </div>
        )}
        {illustrative && <p className="gallery__notice">Imagens de demonstração: <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a>.</p>}
      </div>
    </section>
  );
}

export default Gallery;
