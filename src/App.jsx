import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Technologies from "./components/Technologies/Technologies";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

/**
 * Componente que renderiza la inicialización de la aplicación
 */
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Technologies />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
