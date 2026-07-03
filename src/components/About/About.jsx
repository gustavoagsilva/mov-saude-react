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
              Um espaço pensado para sua saúde e bem-estar
            </h2>
            <p className="about__text">
              A Mov Saúde é uma clínica especializada em fisioterapia e pilates,
              focada em promover saúde, movimento e qualidade de vida. Com um
              ambiente acolhedor e atendimento humanizado, oferecemos
              tratamentos personalizados para atender as necessidades de cada
              paciente com cuidado, atenção e excelência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
