import "../styles/FooterSection.scss";
import logo from "../assets/logo.png";

export default function FooterSection() {
  return (
    <>
      <footer className="footer-section">

        {/* LEFT */}
        <div className="footer-left">

          <img
            src={logo}
            alt="Industry Iceberg"
            className="footer-logo"
          />

          <p className="footer-text">
            Powering intelligent & compliant decisions across pharma and life sciences
          </p>

          <h3 className="footer-connect home-contact-btn">
            Connect
          </h3>

        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h3>Company</h3>
          <p>Who We Are</p>
          <p>Our Products & Services</p>
          <p>Contact Us</p>
        </div>

        {/* PRODUCTS */}
        <div className="footer-column">
          <h3>Products</h3>
          <p>Compliance Loop</p>
          <p>CompliSense</p>
          <p>VeritaScribe</p>
          <p>Live LMS-Videobased</p>
          <p>ECTD AI</p>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>Services</h3>
          <p>Complaint Site Selection</p>
          <p>Video Creation Service</p>
          <p>AI Technologies & Solutions</p>
          <p>Enterprise LLM Solutions</p>
        </div>

      </footer>

      {/* ✅ BOTTOM BAR (NOW INSIDE JSX) */}
      <div className="footer-bottom">

        {/* LEFT SIDE */}
        <div className="footer-bottom-left">

          <p>
            Copyright © 2026 IndustryIceberg. All Rights Reserved.
          </p>

          <div className="footer-links">
            <span>Privacy Policy</span>
            <span className="divider">|</span>
            <span>Terms of Use</span>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="footer-bottom-right">

          <div className="contact-item">
            <span>📧</span>
            <p>info@industryiceberg.com</p>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <p>+91 91541 69469</p>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <p>
              5th floor, Rama Enclave, Miyapur <br />
              Hyderabad, Telangana, India 500049
            </p>
          </div>

        </div>

      </div>
    </>
  );
}