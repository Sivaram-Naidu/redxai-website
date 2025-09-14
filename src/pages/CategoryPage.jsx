import React from "react";
import { useParams, Link } from "react-router-dom";
import { products, tshirtCategories } from "../data/mockData";
import ProductCard from "../components/cards/ProductCard";
import "./CategoryPage.css"; // We'll add some styles

const CategoryPage = () => {
  const { categoryName } = useParams();
  const category = tshirtCategories.find((c) => c.slug === categoryName);

  // Filter products that belong to the current category
  const categoryProducts = products.filter(
    (p) => p.categorySlug === categoryName
  );

  if (!category) {
    return <div>Category not found!</div>;
  }

  return (
    <div className="category-page section-padding">
      <div className="container">
        <h1 className="category-title">{category.name}</h1>

        <div className="product-grid">
          {categoryProducts.length > 0 ? (
            categoryProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="product-link"
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.images[0]} // Show the first image
                />
              </Link>
            ))
          ) : (
            <p>No products found in this category yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
