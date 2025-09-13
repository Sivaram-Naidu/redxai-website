import React from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
// This line connects the CSS file to this component
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Define Your
          <br />
          <span>Rebellion</span>
        </h1>
        <p className="hero-subtitle">
          Redxai is not just clothing. It's a statement. Crafted for the bold,
          the fearless, and the ones who write their own rules.
        </p>
        <div className="hero-button-container">
          <PrimaryButton>Explore The Collection</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
