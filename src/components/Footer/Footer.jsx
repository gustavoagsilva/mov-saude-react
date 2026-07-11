import "./Footer.css";

function Footer() {
  return (
    <footer id="contact" className="footer reveal">
      <div className="footer__container container">
        <div className="footer__info">
          {/* <h3 className="footer__brand">Mov Saúde</h3> */}
          <div className="footer__item">
            <i className="fab fa-whatsapp"></i>
            <span>(11) 91000-0570</span>
          </div>

          <div className="footer__item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <p>Rua Marina, 1325 - Campestre</p>
              <p>CEP 09070-510 - Santo André/SP</p>
            </div>
          </div>

          <div className="footer__item">
            <i className="fas fa-clock"></i>
            <div>
              <p>Horário de atendimento</p>
              <p>Segunda a Sexta: 9h às 17hrs</p>
            </div>
          </div>

          <div className="footer__item">
            <i className="fab fa-instagram"></i>
            <a href="https://www.instagram.com/_movsaude/" target="_blank">
              @_movsaude
            </a>
          </div>
        </div>
        <div className="footer__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654!2d-46.5388!3d-23.6234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUnVhIE1hcmluYSwgMTMyNSAtIENhbXBlc3RyZSAtIFNhbnRvIEFuZHLDqSAtIFNQ!5e0!3m2!1spt!2sbr!4v1"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Localização Mov Saúde"
          ></iframe>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          Mov Saúde – Todos os direitos reservados | Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/gustavo-augusto-garcia/"
            target="_blank"
          >
            Gustavo Augusto
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
