import "./Professional.css";
import barbaraImg from "../../assets/barbara.jpeg";

function Professional() {
  return (
    <section id="professional" className="professional reveal">
      <div className="professional__container container">
        <div className="professional__image">
          <img src={barbaraImg} alt="Dra. Bárbara Borghi" />
          <p className="professional__quote">
            "Meu propósito é ajudar você a se movimentar com mais liberdade,
            viver com menos dor e recuperar a confiança no seu corpo"
          </p>
        </div>
        <div className="professional__content">
          <h2 className="professional__title">Olá, eu sou Bárbara Borghi.</h2>
          <p className="professional__text">
            Sou fisioterapeuta apaixonada pelo movimento humano e por
            transformar a vida das pessoas por meio de um atendimento
            humanizado, baseado em evidências científicas e no movimento como
            ferramenta de cuidado.
          </p>
          <p className="professional__text">
            Minha atuação é voltada para a reabilitação ortopédica, prevenção de
            lesões, melhora da qualidade de vida e envelhecimento com autonomia,
            utilizando recursos da fisioterapia e do Pilates Terapêutico de
            forma integrada. Sou certificada internacionalmente no Método
            Ehrenfried – Ginástica Holística, abordagem que valoriza a
            consciência corporal, a qualidade do movimento e o tratamento
            individualizado, respeitando as necessidades e os objetivos de cada
            pessoa.
          </p>
          <p className="professional__text">
            Acredito que cada paciente merece um olhar atento e um tratamento
            construído de forma única. Por isso, meu trabalho é pautado em
            evidências, avaliação criteriosa e planos terapêuticos
            personalizados, buscando não apenas aliviar a dor, mas devolver
            movimento, funcionalidade e autonomia.
          </p>
          <p className="professional__text">
            Mais do que tratar sintomas, meu objetivo é identificar a causa do
            problema e caminhar ao lado de cada paciente durante todo o processo
            de reabilitação, promovendo confiança, segurança e qualidade de
            vida. Na MOV Saúde, você encontrará um atendimento próximo,
            acolhedor e individualizado, porque acredito que cuidar da saúde
            também é cuidar das pessoas.
          </p>
          <ul className="professional__list">
            <li className="professional__item">
              <i className="fas fa-check-circle"></i>
              Fisioterapira Ortopédica
            </li>
            <li className="professional__item">
              <i className="fas fa-check-circle"></i>
              Fisioterapia Funcional
            </li>
            <li className="professional__item">
              <i className="fas fa-check-circle"></i>
              Fisioterapia Esportiva
            </li>
            <li className="professional__item">
              <i className="fas fa-check-circle"></i>
              Pilates Clínico
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Professional;
