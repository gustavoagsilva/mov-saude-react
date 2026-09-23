import { appointmentFormUrl } from "../../config/contact";
import "./AppointmentButton.css";

function AppointmentButton({ className = "" }) {
  const classes = `btn btn--primary appointment-button ${className}`;

  if (!appointmentFormUrl) {
    return (
      <button type="button" className={classes} disabled>
        Formulário em breve
      </button>
    );
  }

  return (
    <a
      href={appointmentFormUrl}
      className={classes}
      target="_blank"
      rel="noopener noreferrer"
    >
      Agendar aula experimental
    </a>
  );
}

export default AppointmentButton;
