import React, { useEffect } from "react";
import AOS from "aos";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5" data-aos="fade-up">
          What We Do
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <i className="bi bi-brush display-4 text-primary mb-3"></i>
                <h5 className="card-title">UI/UX Design</h5>
                <p className="card-text">
                  Crafting modern, intuitive and engaging digital experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <i className="bi bi-laptop display-4 text-success mb-3"></i>
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Building scalable, responsive and innovative web solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card shadow border-0 h-100">
              <div className="card-body">
                <i className="bi bi-lightning-charge display-4 text-warning mb-3"></i>
                <h5 className="card-title">Brand Strategy</h5>
                <p className="card-text">
                  Enhancing brand presence with impactful design strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
