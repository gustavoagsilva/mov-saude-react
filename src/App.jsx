import About from "./components/About/About";
import CTA from "./components/CTA/CTA";
import Differentials from "./components/Differentials/Differentials";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Problems from "./components/Problems/Problems";
import Professional from "./components/Professional/Professional";
import Services from "./components/Services/Services";
import Journey from "./components/Journey/Journey";
import Footer from "./components/Footer/Footer";
import useReveal from "./hooks/useReveal";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  useReveal();

  return (
    <div>
      <Header />
      <Hero />
      <Professional />
      <Problems />
      <Services />
      <Journey />
      <About />
      <Differentials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
