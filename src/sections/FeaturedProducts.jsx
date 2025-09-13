import React from "react";
import ProductCard from "../components/cards/ProductCard";
import PrimaryButton from "../components/ui/PrimaryButton";
import { featuredProducts } from "../data/mockData";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  return (
    <section className="featured-section section-padding">
      <div className="container">
        <h2 className="section-title">New Arrivals</h2>
        <p className="section-subtitle">
          The latest drops, straight from our design studio.
        </p>
        <div className="featured-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
        <div className="featured-button-wrapper">
          <PrimaryButton>Shop All New</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
