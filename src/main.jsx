import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import {Login} from "./views/Login/Login"
import {Home} from "./views/Home/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  // {
  // path: "/",
  //   element: <App />,
  // },
  // {
  //   path: "/",
  //   element: <App />,
  // },
  // {
  //   path: "/",
  //   element: <App />,
  //  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      {" "}
      <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
