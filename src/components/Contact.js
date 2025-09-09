import React, { useEffect } from "react";
import AOS from "aos";

function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5" data-aos="fade-down">
            <h2 className="fw-bold">Get in Touch</h2>
            <p className="text-muted">
              Have a project in mind? We'd love to hear from you. Fill out the
              form below and we’ll get back to you as soon as possible.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8" data-aos="fade-up">
            <form className="p-4 bg-white text-dark rounded shadow">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
