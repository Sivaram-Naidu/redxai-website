import React from "react";
import { Link } from "react-router-dom";
import { XIcon } from "../icons";
import "./MobileMenu.css";

// Receive 'categories' prop
const MobileMenu = ({ categories, isMenuOpen, onMenuClose }) => {
  return (
    <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
      <div className="mobile-menu-header">
        <button onClick={onMenuClose} className="mobile-menu-close-btn">
          <XIcon />
        </button>
      </div>
      <nav className="mobile-menu-nav">
        {/* Map over the new categories */}
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            className="mobile-menu-link"
            onClick={onMenuClose}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
