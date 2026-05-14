import "../styles/Home.scss";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Moon, Sun } from "lucide-react";

import { useNavigate } from "react-router-dom";

import pharma from "../assets/pharma.png";

import { products, services } from "../data/cardsData";

import FooterSection from "../components/FooterSection";

export default function Home() {

  /* =========================
     ACTIVE TAB
  ========================= */

  const [activeTab, setActiveTab] = useState("all");

  /* =========================
     NAVIGATION
  ========================= */

  const navigate = useNavigate();

  /* =========================
     DARK MODE
  ========================= */

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }

  }, [darkMode]);

  /* =========================
     FILTER LOGIC
  ========================= */

  const getCards = () => {

    if (activeTab === "products") {
      return products;
    }

    if (activeTab === "services") {
      return services;
    }

    return [...products, ...services];
  };

  return (

    <div className="home">

      {/* =========================
          THEME TOGGLE
      ========================= */}

      <div
        className="theme-toggle-home"
        onClick={() => setDarkMode(!darkMode)}
      >

        {darkMode ? (
          <Sun className="theme-icon sun-icon" />
        ) : (
          <Moon className="theme-icon moon-icon" />
        )}

      </div>

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          {/* HERO TITLE */}

          <h3 className="hero-title">
            Built on Pharma. Powered by AI.
          </h3>

          {/* FIRST PARAGRAPH */}

          <p className="hero-subtitle">
            IndustryIceberg builds AI-driven platforms that
            help organizations improve compliance,
            automate complex workflows, and make
            confident, data-backed decisions across
            regulated industries.
          </p>

          {/* SECOND PARAGRAPH */}

          <p className="hero-desc">
            IndustryIceberg is a Life Sciences technology
            company building advanced AI-powered solutions
            for the pharmaceutical industry.
          </p>

          {/* THIRD PARAGRAPH */}

          <p className="hero-descc">
            We use AI to automate, analyze, and accelerate
            pharma operations, ensuring compliance,
            accuracy, domain expertise, and measurable impact.
          </p>

          <button className="home-contact-btn">
            Contact Us
          </button>

        </div>

        {/* HERO IMAGE */}

        <div className="hero-image">

          <img
            src={pharma}
            alt="Pharma AI"
            className="pharma-image"
          />

        </div>

      </section>

      {/* =========================
          FEATURES SECTION
      ========================= */}

      <section className="features-section">

        {/* FILTER LINKS */}

        <div className="feature-tabs">

          <span
            className={`feature-link ${
              activeTab === "all" ? "active" : ""
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </span>

          <span
            className={`feature-link ${
              activeTab === "products" ? "active" : ""
            }`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </span>

          <span
            className={`feature-link ${
              activeTab === "services" ? "active" : ""
            }`}
            onClick={() => setActiveTab("services")}
          >
            Services
          </span>

        </div>

        {/* CONTENT BELOW TABS */}

        <div className="features-content">

          <h2 className="features-title">
            Intelligent Pharma Solutions
          </h2>

          <p className="features-text">
            IndustryIceberg delivers comprehensive
            AI-driven solutions designed for
            enterprise needs.
          </p>

        </div>

        {/* FEATURE CARDS */}

        <motion.div
          layout
          className="features"
        >

          <AnimatePresence mode="popLayout">

            {getCards().map((item, index) => (

              <motion.div
                layout

                initial={{
                  opacity: 0,
                  x: 80,
                  scale: 0.96,
                }}

                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}

                exit={{
                  opacity: 0,
                  x: -80,
                  scale: 0.96,
                }}

                transition={{
                  layout: {
                    type: "spring",
                    stiffness: 95,
                    damping: 20,
                    mass: 0.8,
                  },

                  x: {
                    type: "spring",
                    stiffness: 90,
                    damping: 18,
                  },

                  opacity: {
                    duration: 0.22,
                  },

                  scale: {
                    duration: 0.25,
                  },

                  delay: index * 0.05,
                }}

                className="feature-card"

                key={item.title}
              >

                {/* SIDE LABEL */}

                <div className="card-side">
                  {item.side}
                </div>

                {/* CARD CONTENT */}

                <div className="card-content">

  <h3 className="card-title">
    {item.title}
  </h3>

  <p className="card-desc">
    {item.desc}
  </p>

  <button
    className="explore-btn"
    onClick={(e) => {

      e.stopPropagation();

      navigate(
        `/details/${item.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`
      );

    }}
  >
    Explore
  </button>

</div>

              </motion.div>

            ))}

          </AnimatePresence>

        </motion.div>

      </section>

      <FooterSection />

    </div>
  );
}

