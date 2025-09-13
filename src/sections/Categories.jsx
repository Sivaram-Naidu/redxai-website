import React from "react";
import CategoryCard from "../components/cards/CategoryCard";
import { categoryData } from "../data/mockData";
import "./Categories.css";

const Categories = () => {
  return (
    <section className="categories-section section-padding">
      <div className="container">
        <div className="categories-grid">
          {categoryData.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
