import React from "react";
// 1. Import the Link component
import { Link } from "react-router-dom";
import "./CategoryCard.css";

// 2. Add a 'to' prop to receive the link destination
const CategoryCard = ({ image, title, subtitle, to }) => (
  // 3. Wrap the entire card content in the Link component
  <Link to={to} className="category-card">
    <img src={image} alt={title} className="category-card-image" />
    <div className="category-card-overlay">
      <h3 className="category-card-title">{title}</h3>
      <p className="category-card-subtitle">{subtitle}</p>
      <div className="category-card-line"></div>
    </div>
    {/* The old <a> tag is no longer needed */}
  </Link>
);

export default CategoryCard;
