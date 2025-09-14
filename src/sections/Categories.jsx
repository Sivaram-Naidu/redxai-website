import React from "react";
import CategoryCard from "../components/cards/CategoryCard";
import "./Categories.css";

const Categories = ({ categories }) => {
  return (
    <section className="categories-section section-padding">
      <div className="container">
        <div className="categories-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              title={category.name}
              subtitle={category.subtitle}
              image={category.image}
              // ADDED: Pass the correct URL to the card's 'to' prop
              to={`/category/${category.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
