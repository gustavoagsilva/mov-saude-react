import "./Journey.css";

function Journey() {
  return (
    <section className="journey reveal">
      <div className="container">
        <h2 className="journey__title-main">Como será sua jornada na MOV</h2>
        <div className="journey__list">
          <div className="journey__item">
            <div className="journey__number">1</div>
            <div className="journey__content">
              <h3 className="journey__title">Acolhimento</h3>
              <p className="journey__text">
                Tudo começa com uma conversa. Queremos entender sua história,
                suas dificuldades, seus objetivos e como a dor interfere na sua
                rotina. Cada paciente é único e merece ser ouvido antes de
                iniciar qualquer atendimento.
              </p>
            </div>
          </div>

          <div className="journey__item">
            <div className="journey__number">2</div>
            <div className="journey__content">
              <h3 className="journey__title">Avaliação</h3>
              <p className="journey__text">
                O primeiro passo do seu acompanhamento é compreender suas
                necessidades, objetivos e a forma como seu corpo se movimenta.
                Por meio de uma avaliação criteriosa, identificamos os fatores
                relacionados às suas queixas e definimos a melhor estratégia
                para o seu tratamento.
              </p>
            </div>
          </div>

          <div className="journey__item">
            <div className="journey__number">3</div>
            <div className="journey__content">
              <h3 className="journey__title">
                Plano terapêutico individualizado
              </h3>
              <p className="journey__text">
                Com base nessa avaliação, elaboramos um plano terapêutico
                exclusivo para você. Dependendo da sua necessidade, o tratamento
                poderá envolver fisioterapia, Pilates Terapêutico ou a
                integração entre ambos, sempre respeitando seus objetivos, sua
                rotina e o seu momento.
              </p>
            </div>
          </div>

          <div className="journey__item">
            <div className="journey__number">4</div>
            <div className="journey__content">
              <h3 className="journey__title">Acompanhamento da evolução</h3>
              <p className="journey__text">
                Durante todo o processo acompanhamos sua evolução e ajustamos o
                tratamento sempre que necessário. Nosso objetivo é que cada dia
                represente um passo em direção à sua recuperação.
              </p>
            </div>
          </div>

          <div className="journey__item">
            <div className="journey__number">5</div>
            <div className="journey__content">
              <h3 className="journey__title">Alta e prevenção</h3>
              <p className="journey__text">
                Quando seus objetivos forem alcançados, orientamos estratégias
                para manter os resultados conquistados e prevenir novas lesões.
                Porque cuidar da saúde também significa evitar que o problema
                volte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
