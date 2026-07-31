import "./Professional.css";
import { useState } from "react";
import barbaraImg from "../../assets/barbara.jpeg";

function Professional() {
  const [open, setOpen] = useState(null);

  function handleOpen(id) {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  }
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
            <li className="professional__item" onClick={() => handleOpen(1)}>
              <i className="fas fa-check-circle"></i>
              Fisioterapira Ortopédica
              {open === 1 && (
                <div className="professional__popup">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Recusandae similique vitae animi sit debitis molestias
                    obcaecati ullam aut suscipit, amet, at possimus doloribus
                    molestiae. Consectetur qui nulla ullam quo tempora.
                  </p>
                </div>
              )}
            </li>
            <li className="professional__item" onClick={() => handleOpen(2)}>
              <i className="fas fa-check-circle"></i>
              Pilates Clínico
              {open === 2 && (
                <div className="professional__popup">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus tempora totam aut sed laborum tempore minus.
                    Eveniet minima molestias tenetur numquam omnis. Vitae, amet
                    nemo nostrum sint unde facere sunt.
                  </p>
                </div>
              )}
            </li>
            <li className="professional__item" onClick={() => handleOpen(3)}>
              <i className="fas fa-check-circle"></i>
              Fisioterapira Geriátrica
              {open === 3 && (
                <div className="professional__popup">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis, culpa obcaecati! Itaque corporis saepe illum,
                    aliquam numquam similique error cum sunt dolores nulla,
                    facilis commodi voluptate dolore. Molestiae, a suscipit.
                  </p>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Professional;
