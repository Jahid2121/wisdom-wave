import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Speaker from "../pages/Speaker/Speaker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/services.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/speaker",
        element: <Speaker></Speaker>
      },
    ],
  },
]);

export default router;
