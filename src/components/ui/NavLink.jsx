import React from "react";
// 1. Import Link from react-router-dom
import { Link } from "react-router-dom";
import "./NavLink.css";

// 2. Change 'href' prop to 'to'
const NavLink = ({ children, to = "/" }) => (
  // 3. Use the Link component instead of an <a> tag
  <Link to={to} className="nav-link">
    {children}
  </Link>
);

export default NavLink;
