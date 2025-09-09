import React, { useEffect } from "react";
import AOS from "aos";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side image */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
              src="https://picsum.photos/500/400?random=10"
              alt="About us"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Right side content */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="fw-bold mb-3">About Us</h2>
            <p className="lead text-muted">
              We are a creative digital studio focused on delivering impactful
              design and innovative solutions. Our team blends strategy,
              creativity, and technology to transform ideas into meaningful
              experiences.
            </p>
            <p>
              With a strong passion for design and technology, we help brands
              build their presence in the digital world. From UI/UX design to
              web development, we create solutions that inspire and engage.
            </p>
            <a href="#services" className="btn btn-dark mt-3">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
