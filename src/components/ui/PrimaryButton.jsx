import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ children, className = "" }) => (
  <button className={`primary-button ${className}`}>{children}</button>
);

export default PrimaryButton;
