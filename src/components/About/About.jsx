import "./About.css";
import aboutImg from "../../assets/about.jpg";

function About() {
  return (
    <section id="about" className="about reveal">
      <div className="container">
        <div className="about__container">
          <div className="about__image">
            <img src={aboutImg} alt="Foto da clínica" />
          </div>
          <div className="about__content">
            <h2 className="about__title">
              Cuidar do movimento é cuidar da qualidade de vida.
            </h2>
            <p className="about__text">
              Na MOV Saúde acreditamos que cada pessoa possui uma história,
              objetivos e necessidades únicas. Por isso, nosso atendimento é
              individualizado, baseado em uma avaliação detalhada e em um plano
              terapêutico pensado exclusivamente para você.
            </p>
            <p className="about__text">
              Mais do que tratar dores, buscamos devolver segurança para se
              movimentar, autonomia para as atividades do dia a dia e confiança
              para viver com mais qualidade.
            </p>
            <p className="about__text">
              Aqui, cada evolução é acompanhada de perto, respeitando seu ritmo
              e seus objetivos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
