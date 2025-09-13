import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, name, price }) => (
  <div className="product-card">
    <div className="product-card-image-wrapper">
      <img src={image} alt={name} className="product-card-image" />
    </div>
    <h4 className="product-card-name">{name}</h4>
    <p className="product-card-price">{price}</p>
  </div>
);

export default ProductCard;
