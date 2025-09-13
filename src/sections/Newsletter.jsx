import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter-section section-padding">
      <div className="container newsletter-content">
        <h2 className="section-title">Join The Rebellion</h2>
        <p className="section-subtitle">
          Be the first to know about exclusive drops, events, and get 10% off
          your first order.
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
