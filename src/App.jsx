import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Technologies from "./components/Technologies/Technologies";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
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
