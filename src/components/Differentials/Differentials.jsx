import "./Differentials.css";

function Differentials() {
  return (
    <section className="differentials reveal">
      <div className="container">
        <h2 className="differentials__title">Diferenciais</h2>
        <div className="differentials__grid">
          <div className="differentials__item">
            <i className="fas fa-check"></i>
            <span>Atendimento personalizado</span>
          </div>
          <div className="differentials__item">
            <i className="fas fa-check"></i>
            <span>Profissionais qualificados</span>
          </div>
          <div className="differentials__item">
            <i className="fas fa-check"></i>
            <span>Ambiente acolhedor</span>
          </div>
          <div className="differentials__item">
            <i className="fas fa-check"></i>
            <span>Foco em resultados</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Differentials;
