import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Layout Components
import Header from "./components/layout/Header";
import MobileMenu from "./components/layout/MobileMenu";
import Footer from "./components/layout/Footer";

// 1. Import our new ScrollToTop component
import ScrollToTop from "./components/utils/ScrollToTop";

// Import our data
import { tshirtCategories } from "./data/mockData";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
    };

    if (location.pathname === "/") {
      handleScroll();
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsHeaderVisible(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <>
      {/* 2. Add the component here. It will automatically handle scrolling. */}
      <ScrollToTop />

      <Header
        categories={tshirtCategories}
        onMenuOpen={() => setIsMenuOpen(true)}
        isVisible={isHeaderVisible}
      />
      <MobileMenu
        categories={tshirtCategories}
        isMenuOpen={isMenuOpen}
        onMenuClose={() => setIsMenuOpen(false)}
      />

      <Outlet />

      <Footer />
    </>
  );
}
