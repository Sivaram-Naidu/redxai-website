import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ image, title, subtitle }) => (
  <div className="category-card">
    <img src={image} alt={title} className="category-card-image" />
    <div className="category-card-overlay">
      <h3 className="category-card-title">{title}</h3>
      <p className="category-card-subtitle">{subtitle}</p>
      <div className="category-card-line"></div>
    </div>
    <a href="#" className="category-card-link" aria-label={`Shop ${title}`}></a>
  </div>
);

export default CategoryCard;
