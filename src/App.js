import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />

      {/* Home / Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section (optional for now, placeholder) */}
      <section
        id="about"
        className="vh-100 d-flex align-items-center bg-light"
      >
        <div className="container text-center">
          <h1>About Us</h1>
          <p>Some information about the company goes here.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Contact Section (placeholder for now) */}
      <section
        id="contact"
        className="vh-100 d-flex align-items-center bg-dark text-white"
      >
        <div className="container text-center">
          <h1>Contact Us</h1>
          <p>Email: contact@example.com</p>
        </div>
      </section>
    </>
  );
}

export default App;





