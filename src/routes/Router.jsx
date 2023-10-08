import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Speaker from "../pages/Speaker/Speaker";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";

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
        path: "/login",
        element: <Login></Login>,
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
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: () => fetch('/services.json')
      },
    ],
  },
]);

export default router;
