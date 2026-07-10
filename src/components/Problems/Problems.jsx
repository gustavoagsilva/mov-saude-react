import "./Problems.css";

function Problems() {
  return (
    <section className="problems reveal">
      <div className="container">
        <h2 className="problems__title">Você está passando por isso?</h2>
        <div className="problems__grid">
          <div className="problems__item">
            <i className="fas fa-person-circle-exclamation"></i>
            <div>
              <span>Dores nas costas</span>
              <p className="problems__item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                nobis omnis cumque molestiae ad tempora, ipsum corporis
                perferendis. Animi recusandae ullam aliquid doloribus nulla,
                praesentium repellat eius ducimus cumque fuga?
              </p>
            </div>
          </div>
          <div className="problems__item">
            <i className="fas fa-bandage"></i>
            <div>
              <span>Lesões musculares</span>
              <p className="problems__item-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
                eaque illum aperiam aut recusandae quas sequi non repellat,
                itaque consectetur dolores molestiae sint distinctio ex vel
                quasi deserunt ut necessitatibus.
              </p>
            </div>
          </div>
          <div className="problems__item">
            <i className="fas fa-person-walking"></i>
            <div>
              <span>Dificuldade de movimento</span>
              <p className="problems__item-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda veniam nemo ullam esse placeat possimus, officiis
                nihil voluptatum modi, enim libero expedita corporis, qui
                repellat. Doloribus odit mollitia incidunt dolores!
              </p>
            </div>
          </div>
          <div className="problems__item">
            <i className="fas fa-heart-pulse"></i>
            <div>
              <span>Pós-operatórios</span>
              <p className="problems__item-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora optio, voluptate perferendis adipisci explicabo soluta
                corrupti quis cum fugiat expedita in, iste cumque natus atque
                deleniti sint? Voluptate, totam ab!
              </p>
            </div>
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
