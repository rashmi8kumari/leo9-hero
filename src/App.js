import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      {/* Hero / Home */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <About />

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Contact */}
      <Contact />
    </>
  );
}

export default App;







