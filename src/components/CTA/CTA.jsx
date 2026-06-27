import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta__container container">
        <h2 className="cta__title">Agende sua avaliação agora mesmo</h2>
        <a
          href="https://wa.me/5511910000570"
          className="cta__button"
          target="_blank"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}

export default CTA;
