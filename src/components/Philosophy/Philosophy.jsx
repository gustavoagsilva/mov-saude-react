import "./Philosophy.css";

function Philosophy() {
  return (
    <section className="philosophy reveal">
      <div className="container">
        <h2 className="philosophy__title-main">Mais do que tratar a dor.</h2>
        <div className="philosophy__grid">
          <div className="philosophy__item">
            <h2 className="philosophy__title">
              💚 Nós ouvimos antes de tratar
            </h2>
            <p className="philosophy__description">
              Cada pessoa possui uma história. Antes de qualquer exercício,
              queremos entender você.
            </p>
          </div>
          <div className="philosophy__item">
            <h2 className="philosophy__title">
              💚 Tratamos a causa, não apenas os sintomas.
            </h2>
            <p className="philosophy__description">
              Nosso foco é encontrar a origem do problema para promover
              resultados duradouros.
            </p>
          </div>
          <div className="philosophy__item">
            <h2 className="philosophy__title">
              💚 Você acompanha sua evolução
            </h2>
            <p className="philosophy__description">
              Seu tratamento é construído junto com você, com objetivos claros e
              acompanhamento constante. Temos seu prontuário onde você solicita
              a qualquer momento.
            </p>
          </div>
          <div className="philosophy__item">
            <h2 className="philosophy__title">💚 Movimento é liberdade</h2>
            <p className="philosophy__description">
              Nosso maior propósito é devolver autonomia, confiança e qualidade
              de vida para que você possa viver com mais leveza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosophy;
