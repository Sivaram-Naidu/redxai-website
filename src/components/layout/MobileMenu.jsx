import React from "react";
// 1. Import Link from react-router-dom
import { Link } from "react-router-dom";
import { XIcon } from "../icons";
import "./MobileMenu.css";

const MobileMenu = ({ navItems, isMenuOpen, onMenuClose }) => {
  return (
    <div className={`mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
      <div className="mobile-menu-header">
        <button onClick={onMenuClose} className="mobile-menu-close-btn">
          <XIcon />
        </button>
      </div>
      <nav className="mobile-menu-nav">
        {navItems.map((item) => (
          // 2. Use the <Link> component and the object properties
          <Link
            key={item.name}
            to={item.to}
            className="mobile-menu-link"
            onClick={onMenuClose}
          >
            {item.name} {/* <-- Display item.name, not the whole item object */}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
