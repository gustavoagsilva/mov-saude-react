import "./CTA.css";

function CTA() {
  return (
    <section className="cta reveal">
      <div className="cta__container container">
        <h2 className="cta__title">Agende sua avaliação agora mesmo</h2>
        <p className="cta__subtitle">DEPOIS EU PENSO NO QUE ESCREVER AQUI</p>
        <div className="cta__buttons">
          <a
            href="https://wa.me/5511910000570"
            className="cta__button"
            target="_blank"
          >
            Falar no WhatsApp
          </a>
          <a href="#services" className="cta__button--secondary">
            Ver serviços
          </a>
        </div>

        <div className="cta__trust">
          <span>
            <i className="fas fa-check-circle"></i> Sem compromisso
          </span>
          <span>
            <i className="fas fa-heart"></i> Atendimento humanizado
          </span>
          <span>
            <i className="fas fa-clock"></i> Resposta rápida
          </span>
        </div>
      </div>
    </section>
  );
}

export default CTA;
