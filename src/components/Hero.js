import React, { useEffect } from "react";
import AOS from "aos";

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      id="home"
      className="d-flex align-items-center text-center text-light"
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        minHeight: "100vh",
        paddingTop: "80px",
        boxSizing: "border-box",
      }}
    >
      <div className="container">
        <div data-aos="fade-up">
          <h1 className="display-3 fw-bold">
            We Create <span className="text-warning">Impactful</span> Designs
          </h1>
          <p className="lead mt-3">
            Transforming ideas into digital experiences with creativity &
            innovation.
          </p>
          <a href="#services" className="btn btn-outline-light mt-4 px-4 py-2">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;


