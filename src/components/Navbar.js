import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // detect active section
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // offset for navbar height
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#home">
          YourLogo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <a
                className={`nav-link ${activeSection === "home" ? "active fw-bold" : ""}`}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={`nav-link ${activeSection === "about" ? "active fw-bold" : ""}`}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={`nav-link ${activeSection === "services" ? "active fw-bold" : ""}`}
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item mx-2">
              <a
                className={`nav-link ${activeSection === "contact" ? "active fw-bold" : ""}`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


