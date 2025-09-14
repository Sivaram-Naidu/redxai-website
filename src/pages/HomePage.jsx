import React from "react";

// Page Section Components
import Hero from "../sections/Hero";
import Categories from "../sections/Categories";
import FeaturedProducts from "../sections/FeaturedProducts";
import BrandStatement from "../sections/BrandStatement";
import Newsletter from "../sections/Newsletter";

// Import our new data
import { tshirtCategories } from "../data/mockData";

const HomePage = () => {
  return (
    <main>
      <Hero />
      {/* Pass the new categories data to the Categories component */}
      <Categories categories={tshirtCategories} />
      <FeaturedProducts />
      <BrandStatement />
      <Newsletter />
    </main>
  );
};

export default HomePage;
