import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511910000570"
      target="_blank"
      className="whats__button"
      aria-label="Falar com a MOV Saúde pelo WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
    </a>
  );
}

export default WhatsAppButton;
