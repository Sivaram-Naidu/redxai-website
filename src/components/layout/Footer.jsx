import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h5 className="footer-heading">Shop</h5>
            <a href="#" className="footer-link">
              Men
            </a>
            <a href="#" className="footer-link">
              Women
            </a>
            <a href="#" className="footer-link">
              Kids
            </a>
          </div>
          <div className="footer-column">
            <h5 className="footer-heading">Support</h5>
            <a href="#" className="footer-link">
              Contact Us
            </a>
            <a href="#" className="footer-link">
              FAQs
            </a>
            <a href="#" className="footer-link">
              Shipping & Returns
            </a>
          </div>
          <div className="footer-column">
            <h5 className="footer-heading">Company</h5>
            <a href="#" className="footer-link">
              About Us
            </a>
            <a href="#" className="footer-link">
              Careers
            </a>
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
          </div>
          <div className="footer-column">
            <h5 className="footer-heading">Follow Us</h5>
            <div className="footer-socials">
              <a href="#" className="footer-link">
                IG
              </a>
              <a href="#" className="footer-link">
                FB
              </a>
              <a href="#" className="footer-link">
                TW
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Redxai. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
