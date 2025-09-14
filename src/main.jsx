import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// Import your page components
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import SalePage from "./pages/SalePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx"; // 1. Import the new page

// Define the website's routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "category/:categoryName",
        element: <CategoryPage />,
      },
      {
        // 2. Add the new route for a single product
        // The ':productId' will be the unique ID like 'rdx-ogt-01'
        path: "product/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "sale",
        element: <SalePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
