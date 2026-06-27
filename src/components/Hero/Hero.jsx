import "./Hero.css";
import fisioImg from "../../assets/fisio.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container container">
        <div className="hero__content">
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
        </div>
        <div className="hero__image">
          <img src={fisioImg} alt="Atendimento de fisioterapia" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
