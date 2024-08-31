import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Books from "./pages/Books.tsx";
import Index from "./pages/Index.tsx";
import Search from "./pages/Search.tsx";
import { NewBook } from "./pages/NewBook.tsx";
import { News } from "./pages/News.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    // element: <App />,
  },
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/add",
    element: <NewBook />,
  },
  {
    path: "/news",
    element: <News />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
