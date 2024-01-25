import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Information about your team or website.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Contact details or a contact form link.</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <p>Social media links or widgets.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Team-04</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
