import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products, tshirtCategories } from "../data/mockData";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    product ? product.images[0] : null
  );

  if (!product) {
    return <div>Product not found!</div>;
  }

  const category = tshirtCategories.find(
    (c) => c.slug === product.categorySlug
  );

  const handleAddToCart = () => {
    alert(
      `${quantity} x ${product.name} (Size: ${selectedSize}) added to cart!`
    );
    // In a real app, you would dispatch an action to a state manager like Redux or Context API here.
  };

  return (
    <div className="product-detail-container section-padding">
      <div className="container">
        <div className="breadcrumbs">
          <Link to="/">Home</Link> /{" "}
          <Link to={`/category/${category.slug}`}>{category.name}</Link> /{" "}
          <span>{product.name}</span>
        </div>
        <div className="product-detail-layout">
          <div className="product-images">
            <div className="main-image-wrapper">
              <img src={mainImage} alt={product.name} className="main-image" />
            </div>
            <div className="thumbnail-wrapper">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className={`thumbnail-image ${
                    img === mainImage ? "active" : ""
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>

            <div className="product-options">
              <div className="option-group">
                <label>Size:</label>
                <div className="size-selector">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-btn ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="option-group">
                <label>Quantity:</label>
                <div className="quantity-selector">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)}>+</button>
                </div>
              </div>
            </div>

            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
