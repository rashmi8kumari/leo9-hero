import React, { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
        <a className="navbar-brand fw-bold fs-3" href="#">
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
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="btn btn-dark px-4" href="#contact">
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

