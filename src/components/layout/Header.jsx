import React from "react";
import NavLink from "../ui/NavLink";
import { SearchIcon, UserIcon, ShoppingBagIcon, MenuIcon } from "../icons";
import "./Header.css";

const Header = ({ onMenuOpen, isVisible }) => {
  return (
    <header className={`header ${isVisible ? "is-visible" : ""}`}>
      <div className="container header-container">
        {/* This NavLink now uses react-router-dom's Link */}
        <NavLink to="/" className="header-logo">
          Redx<span className="logo-highlight">ai</span>
        </NavLink>

        <nav className="header-nav-desktop">
          {/* UPDATED: Links now point to the correct routes */}
          <NavLink to="/category/men">Men</NavLink>
          <NavLink to="/category/women">Women</NavLink>
          <NavLink to="/category/kids">Kids</NavLink>
          <NavLink to="/category/new-arrivals">New Arrivals</NavLink>
          <NavLink to="/sale">Sale</NavLink>
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
