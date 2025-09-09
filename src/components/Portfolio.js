import React, { useEffect } from "react";
import AOS from "aos";

function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="portfolio" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-5" data-aos="fade-up">
          Our Work
        </h2>
        <div className="row g-4">
          <div className="col-md-4" data-aos="zoom-in">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://picsum.photos/400/250?random=1"
                className="card-img-top"
                alt="project"
              />
              <div className="card-body">
                <h5 className="card-title">Project One</h5>
                <p className="card-text">Creative web design solution.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="150">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://picsum.photos/400/250?random=2"
                className="card-img-top"
                alt="project"
              />
              <div className="card-body">
                <h5 className="card-title">Project Two</h5>
                <p className="card-text">Branding and design strategy.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://picsum.photos/400/250?random=3"
                className="card-img-top"
                alt="project"
              />
              <div className="card-body">
                <h5 className="card-title">Project Three</h5>
                <p className="card-text">Responsive web application.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
