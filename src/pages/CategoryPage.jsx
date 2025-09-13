import React from "react";
import { useParams } from "react-router-dom";

// A simple placeholder style
const pageStyles = {
  padding: "120px 2rem 2rem",
  minHeight: "80vh",
  textAlign: "center",
};

const titleStyles = {
  textTransform: "capitalize",
  fontSize: "2.5rem",
};

const CategoryPage = () => {
  // This hook from react-router-dom gets the category name from the URL
  const { categoryName } = useParams();

  return (
    <div style={pageStyles}>
      <h1 style={titleStyles}>{categoryName}</h1>
      <p>Products for the {categoryName} category will be displayed here.</p>
    </div>
  );
};

export default CategoryPage;
