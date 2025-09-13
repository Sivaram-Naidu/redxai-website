import React, { useState, useEffect } from "react";
// 1. Import Outlet from react-router-dom. This is where the pages will be rendered.
import { Outlet } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    // This effect makes the header appear on scroll. It's good to keep.
    const handleScroll = () => {
      // We'll make it appear sooner for a better feel on all pages
      if (window.scrollY > 50) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header
        onMenuOpen={() => setIsMenuOpen(true)}
        isVisible={isHeaderVisible}
      />
      <MobileMenu
        navItems={[
          { name: "Men", to: "/category/men" },
          { name: "Women", to: "/category/women" },
          { name: "Kids", to: "/category/kids" },
          { name: "New Arrivals", to: "/category/new-arrivals" },
          { name: "Sale", to: "/sale" },
        ]}
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />

      {/* 2. The <Outlet> component renders the current page (HomePage, CategoryPage, etc.) */}
      <Outlet />

      <Footer />
    </>
  );
}
