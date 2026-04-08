import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Imagination from "./components/Imagination";
import Progress from "./components/Progress";
import Team from "./components/Team";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      
      <section id="imagination">
        <Imagination />
      </section>

      <Progress />

      <section id="Team">
      <Team />
      </section>
      
      
      <Features />
      <section id="contact">
        <Contact />
      </section>
      <Footer/>
    </>
  );
}

export default App;