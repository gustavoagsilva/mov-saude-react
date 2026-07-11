import "./Services.css";

function Services() {
  return (
    <section id="services" className="services reveal">
      <div className="container">
        <h2 className="services__title">Nossos Serviços</h2>
        <div className="services__grid">
          <div className="services__card">
            <div className="services__card-header">
              <div className="services__icon">
                <i className="fas fa-hand-holding-medical"></i>
              </div>
              <h3 className="services__card-title">Fisioterapia Ortopédica</h3>
            </div>
            <p className="services__card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro et
              possimus beatae quaerat veniam dolore saepe error velit eveniet
              quos. Suscipit nisi itaque dignissimos sapiente, aliquam rerum
              aspernatur libero ducimus!
            </p>
          </div>
          <div className="services__card">
            <div className="services__card-header">
              <div className="services__icon">
                <i className="fas fa-person-walking"></i>
              </div>
              <h3 className="services__card-title">Reabilitação Física</h3>
            </div>
            <p className="services__card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
              excepturi pariatur nihil autem qui? Nisi ratione, quae corporis
              mollitia aliquam sint aut neque alias quo, at minus? Ipsam, quo
              maiores!
            </p>
          </div>
          <div className="services__card">
            <div className="services__card-header">
              <div className="services__icon">
                <i className="fas fa-dumbbell"></i>
              </div>
              <h3 className="services__card-title">Fisioterapia Esportiva</h3>
            </div>
            <p className="services__card-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              tempore molestiae corporis quaerat commodi enim culpa provident
              reiciendis laboriosam, ex natus tempora suscipit laudantium
              praesentium odio, voluptates consequuntur quibusdam nam.
            </p>
          </div>
          <div className="services__card">
            <div className="services__card-header">
              <div className="services__icon">
                <i className="fas fa-spa"></i>
              </div>
              <h3 className="services__card-title">Pilates Clínico</h3>
            </div>
            <p className="services__card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              officia exercitationem pariatur vel eveniet asperiores
              consequuntur nobis, modi minima praesentium tempore rerum. Nostrum
              sequi consectetur nihil ut impedit error totam!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
