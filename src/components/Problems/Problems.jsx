import "./Problems.css";

function Problems() {
  return (
    <section className="problems">
      <div className="container">
        <h2 className="problems__title">Você está passando por isso?</h2>
        <div className="problems__grid">
          <div className="problems__item">
            <i className="fas fa-person-circle-exclamation"></i>
            <span>Dores nas costas</span>
          </div>
          <div className="problems__item">
            <i className="fas fa-bandage"></i>
            <span>Lesões musculares</span>
          </div>
          <div className="problems__item">
            <i className="fas fa-person-walking"></i>
            <span>Dificuldade de movimento</span>
          </div>
          <div className="problems__item">
            <i className="fas fa-heart-pulse"></i>
            <span>Pós-operatórios</span>
          </div>
        </div>
        <p className="problems__text">
          Tratamentos personalizados para aliviar dores e recuperar sua{" "}
          <strong>qualidade de vida</strong>.
        </p>
      </div>
    </section>
  );
}

export default Problems;
