import { Home } from "../views/Home";
import { Login } from "../views/Login";

const configRoutes = [
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
];

export { configRoutes };