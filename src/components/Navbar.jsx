import "./Navbar.scss";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {

  /* =========================
     THEME STATE
  ========================= */

  const [darkMode, setDarkMode] = useState(false);

  /* =========================
     APPLY THEME
  ========================= */

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

  }, [darkMode]);

  /* =========================
     SCROLL FUNCTION
  ========================= */

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (

    <nav className="navbar">

      {/* LOGO */}

      <div className="logo">
        <img src={logo} alt="Iceberg Logo" />
      </div>

      {/* SEARCH */}

      <div className="nav-search">
        <input type="text" placeholder="Search..." />
      </div>

      {/* =========================
          NAV LINKS
      ========================= */}

      {/*
      <div className="nav-links">

        <a onClick={() => scrollTo("who-we-are")}>
          Who we are
        </a>

        <div className="nav-item dropdown">

          <a>Products</a>

          <div className="dropdown-menu">
            <div>Compliance Loop</div>
            <div>CompliSense</div>
            <div>VeritaScribe</div>
            <div>Live LMS-Videobased</div>
            <div>ECTD AI</div>
          </div>

        </div>

        <div className="nav-item dropdown">

          <a>Services</a>

          <div className="dropdown-menu">
            <div>Complaint Site Selection</div>
            <div>Video Creation Service</div>
            <div>AI Technologies & Solutions</div>
            <div>Enterprise LLM Solutions</div>
          </div>

        </div>

        <a onClick={() => scrollTo("blogs")}>
          Blogs
        </a>

      </div>
      */}

      {/* RIGHT SIDE */}

      <div className="nav-right">

        {/*
        <button
          className="btn secondary"
          onClick={() => scrollTo("contact")}
        >
          <span>Contact Us</span>
        </button>
        */}

      </div>

    </nav>
  );
}