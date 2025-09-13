import React from "react";

// Page Section Components
import Hero from "../sections/Hero";
import Categories from "../sections/Categories";
import FeaturedProducts from "../sections/FeaturedProducts";
import BrandStatement from "../sections/BrandStatement";
import Newsletter from "../sections/Newsletter";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <BrandStatement />
      <Newsletter />
    </main>
  );
};

export default HomePage;
