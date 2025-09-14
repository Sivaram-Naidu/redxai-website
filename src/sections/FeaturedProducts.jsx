import React from "react";
import { Link } from "react-router-dom"; // 1. Import Link for navigation
import ProductCard from "../components/cards/ProductCard";
import PrimaryButton from "../components/ui/PrimaryButton";
// 2. Import the main 'products' array instead of 'featuredProducts'
import { products } from "../data/mockData";
import "./FeaturedProducts.css";

const FeaturedProducts = () => {
  // 3. Take the first 4 t-shirts from our main products list to feature them
  const featuredTshirts = products.slice(0, 4);

  return (
    <section className="featured-section section-padding">
      <div className="container">
        <h2 className="section-title">New Arrivals</h2>
        <p className="section-subtitle">
          The latest drops, straight from our design studio.
        </p>
        <div className="featured-grid">
          {/* 4. Map over the new 'featuredTshirts' array */}
          {featuredTshirts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product-link"
            >
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.images[0]} // Use the first image for the card
              />
            </Link>
          ))}
        </div>
        {/* This button can link to a "view all" page later */}
        <div className="featured-button-wrapper">
          <PrimaryButton>Shop All T-Shirts</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
