import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

// Import your page components
import HomePage from "./pages/HomePage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import SalePage from "./pages/SalePage.jsx";

// Define the website's routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // The App component is the main layout
    children: [
      {
        path: "/", // When the URL is '/', show the HomePage
        element: <HomePage />,
      },
      {
        // When the URL is '/category/something', show the CategoryPage
        // The ':categoryName' part is a dynamic parameter
        path: "category/:categoryName",
        element: <CategoryPage />,
      },
      {
        path: "sale", // When the URL is '/sale', show the SalePage
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
