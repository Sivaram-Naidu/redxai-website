import React from "react";
import NavLink from "../ui/NavLink";
import { SearchIcon, UserIcon, ShoppingBagIcon, MenuIcon } from "../icons";
import "./Header.css";

const Header = ({ categories, onMenuOpen, isVisible }) => {
  return (
    <header className={`header ${isVisible ? "is-visible" : ""}`}>
      <div className="container header-container">
        {/* THIS is the link that makes the logo clickable */}
        <NavLink to="/" className="header-logo">
          Redx<span className="logo-highlight">ai</span>
        </NavLink>

        <nav className="header-nav-desktop">
          {categories.map((category) => (
            <NavLink key={category.slug} to={`/category/${category.slug}`}>
              {category.name}
            </NavLink>
          ))}
        </nav>

        <div className="header-icons">
          <button className="header-icon-btn search-icon">
            <SearchIcon />
          </button>
          <button className="header-icon-btn user-icon">
            <UserIcon />
          </button>
          <button className="header-icon-btn">
            <ShoppingBagIcon />
          </button>
          <button
            className="header-icon-btn mobile-menu-toggle"
            onClick={onMenuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
