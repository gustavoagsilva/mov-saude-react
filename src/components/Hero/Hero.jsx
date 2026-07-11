import "./Hero.css";
import fisioImg from "../../assets/fisio.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <span className="hero__badge">✦ Clínica de Fisioterapia</span>
          <h1 className="hero__title">
            Movimento que gera <span>qualidade de vida</span>
          </h1>
          <p className="hero__description">
            Fisioterapia e Pilates com atendimento personalizado em Santo André
          </p>
          <div className="hero__buttons">
            <a
              href="https://wa.me/5511910000570"
              className="btn btn--primary"
              target="_blank"
            >
              Agendar pelo WhatsApp
            </a>
            <a href="#services" className="btn btn--secondary">
              Ver serviços
            </a>
          </div>
          <span className="hero__info">
            Dra. Bárbara Borghi • Campestre - Santo André
          </span>

          <div className="hero__stats">
            <div className="hero__stat">
              <strong>500+</strong>
              <span>Pacientes Atendidos</span>
            </div>
            <div className="hero__stat">
              <strong>5+</strong>
              <span>Anos de experiência</span>
            </div>
            <div className="hero__stat">
              <strong>100%</strong>
              <span>Atendimento personalizado</span>
            </div>
          </div>
        </div>
        <div className="hero__image">
          <img src={fisioImg} alt="Atendimento de fisioterapia" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
