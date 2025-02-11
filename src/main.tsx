import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main_Layout from "./Layout/Main_Layout";
import Hero from "./Components/Home/Hero";
import Developer from "./Components/Home/Developer";

// Define the router with the correct types
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/developer",
        element: <Developer />,
      },
    ],
  },
]);

// Use the correct type for the root element
const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
