import "./Professional.css";
import barbaraImg from "../../assets/barbara.jpeg";

function Professional() {
  return (
    <section id="professional" className="professional reveal">
      <div className="professional__container container">
        <div className="professional__image">
          <img src={barbaraImg} alt="Dra. Bárbara Borghi" />
        </div>
        <div className="professional__content">
          <h2 className="professional__title">Dra. Bárba Borhi</h2>
          <p className="professional__text">
            A Dra. Bárbara Borghi é fisioterapeuta formada, especializada em
            reabilitação funcional, com foco no cuidado ao movimento, no alívio
            da dor e na promoção da qualidade de vida. Possui experiência em
            atendimentos clínicos e esportivos, atuando principalmente nas áreas
            de fisioterapia ortopédica e pilates clínico. Seu trabalho é voltado
            para a criação de tratamentos personalizados, respeitando as
            necessidades individuais de cada paciente, com o objetivo de
            promover recuperação, bem-estar e maior autonomia no dia a dia.
          </p>
          <ul className="professional__list">
            <li className="professional__item">Fisioterapira Otopédica</li>
            <li className="professional__item">Fisioterapia Funcional</li>
            <li className="professional__item">Fisioterapia Esportiva</li>
            <li className="professional__item">Pilates Clínico</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Professional;
