import "./Services.css";
import { useState } from "react";

function Services() {
  const [open, setOpen] = useState(null);

  function handleOpen(id) {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  }

  return (
    <section id="services" className="services reveal">
      <div className="container">
        <h2 className="services__title">Como podemos te ajudar?</h2>
        <div className="services__options">
          <div className="services__option" onClick={() => handleOpen(1)}>
            <span>🦴 Estou com dor na coluna</span>
            {open === 1 && (
              <div className="services__option-content">
                <p>
                  A dor nas costas nem sempre significa que existe um problema
                  grave. Muitas vezes ela está relacionada à forma como nos
                  movimentamos, à rotina, ao fortalecimento muscular ou a
                  sobrecargas do dia a dia.
                </p>
                <p>
                  Na MOV, buscamos entender a causa da sua dor para construir um
                  tratamento personalizado, ajudando você a recuperar o
                  movimento e voltar às suas atividades com mais conforto e
                  segurança.
                </p>
                <a
                  href="https://wa.me/5511910000570"
                  target="_blank"
                  className="btn btn--primary"
                >
                  Quero agendar uma avaliação
                </a>
              </div>
            )}
          </div>

          <div className="services__option" onClick={() => handleOpen(2)}>
            <span>🧘 Quero começar Pilates.</span>
            {open === 2 && (
              <div className="services__option-content">
                <p>O Pilates vai muito além do fortalecimento.</p>
                <p>
                  As aulas são planejadas de acordo com suas necessidades,
                  respeitando seu nível de condicionamento, suas limitações e
                  seus objetivos. Durante o acompanhamento, trabalhamos
                  mobilidade, equilíbrio, postura, força e consciência corporal
                  para que você se movimente com mais confiança e qualidade de
                  vida.
                </p>
                <a
                  href="https://wa.me/5511910000570"
                  target="_blank"
                  className="btn btn--primary"
                >
                  Quero conhecer o Pilates da MOV.
                </a>
              </div>
            )}
          </div>

          <div className="services__option" onClick={() => handleOpen(3)}>
            <span>🚶 Tenho artrose.</span>
            {open === 3 && (
              <div className="services__option-content">
                <p>
                  Receber o diagnóstico de artrose não significa que você
                  precisa conviver com a dor ou deixar de fazer o que gosta.
                </p>
                <p>
                  Com exercícios adequados e acompanhamento fisioterapêutico, é
                  possível melhorar a mobilidade, fortalecer a musculatura e
                  recuperar a confiança para realizar suas atividades do dia a
                  dia.
                </p>
                <p>
                  Nosso objetivo é ajudar você a continuar em movimento com mais
                  conforto e autonomia.
                </p>
                <a
                  href="https://wa.me/5511910000570"
                  target="_blank"
                  className="btn btn--primary"
                >
                  Quero saber como podemos ajudar.
                </a>
              </div>
            )}
          </div>

          <div className="services__option" onClick={() => handleOpen(4)}>
            <span>🧍 Quero melhorar minha postura.</span>
            {open === 4 && (
              <div className="services__option-content">
                <p>
                  A postura é consequência da forma como o corpo se movimenta.
                </p>
                <p>
                  Por isso, nosso foco não é apenas "corrigir" a posição do
                  corpo, mas melhorar força, mobilidade, equilíbrio e
                  consciência corporal para que uma postura mais saudável
                  aconteça naturalmente.
                </p>
                <a
                  href="https://wa.me/5511910000570"
                  target="_blank"
                  className="btn btn--primary"
                >
                  Quero melhorar minha postura.
                </a>
              </div>
            )}
          </div>

          <div className="services__option" onClick={() => handleOpen(5)}>
            <span>💪 Sofri uma lesão.</span>
            {open === 5 && (
              <div className="services__option-content">
                <p>
                  Cada lesão tem seu tempo de recuperação, mas permanecer em
                  movimento da maneira correta faz toda a diferença.
                </p>
                <p>
                  Na MOV, elaboramos um plano terapêutico individualizado para
                  controlar a dor, recuperar a função e ajudar você a retornar
                  às suas atividades com segurança e confiança.
                </p>
                <a
                  href="https://wa.me/5511910000570"
                  target="_blank"
                  className="btn btn--primary"
                >
                  Quero iniciar minha recuperação.
                </a>
              </div>
            )}
          </div>

          <div className="services__option" onClick={() => handleOpen(6)}>
            <span>🌿 Quero envelhecer com mais autonomia.</span>
            {open === 6 && (
              <div className="services__option-content">
                <p>
                  Envelhecer bem é continuar fazendo aquilo que faz sentido para
                  você.
                </p>
                <p>
                  É caminhar com segurança, brincar com os netos, viajar, subir
                  escadas, carregar suas compras e manter sua independência pelo
                  maior tempo possível. Na MOV, trabalhamos para que o movimento
                  continue sendo um aliado da sua qualidade de vida em todas as
                  fases do envelhecimento.
                </p>
                <a
                  href="https://wa.me/5511910000570"
                  target="_blank"
                  className="btn btn--primary"
                >
                  Quero envelhecer com mais qualidade de vida.
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
