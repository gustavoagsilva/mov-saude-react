import "./Services.css";

function Services() {
  return (
    <section id="services" className="services reveal">
      <div className="container">
        <h2 className="services__title">Nossos Serviços</h2>
        <div className="services__grid">
          <div className="services__card">
            <div className="services__icon">
              <i className="fas fa-hand-holding-medical"></i>
            </div>
            <h3 className="services__card-title">Fisioterapia Ortopédica</h3>
            <p className="services__card-text">
              Tratamento de dores e lesões musculoesqueléticas
            </p>
          </div>
          <div className="services__card">
            <div className="services__icon">
              <i className="fas fa-person-walking"></i>
            </div>
            <h3 className="services__card-title">Reabilitação Física</h3>
            <p className="services__card-text">
              Recuperação de movimentos e funções
            </p>
          </div>
          <div className="services__card">
            <div className="services__icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3 className="services__card-title">Fisioterapia Esportiva</h3>
            <p className="services__card-text">
              Prevenção e tratamento de lesões esportivas
            </p>
          </div>
          <div className="services__card">
            <div className="services__icon">
              <i className="fas fa-spa"></i>
            </div>
            <h3 className="services__card-title">Pilates Clínico</h3>
            <p className="services__card-text">
              Fortalecimento, postura e qualidade de vida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
