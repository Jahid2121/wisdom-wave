import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./Private/PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Events from "../pages/Events/Events";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
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
        path: "/register",
        element: <Register></Register>,
        loader: () => fetch('/services.json')
      },
      {
        path: "/events",
        element: <Events></Events>,
        loader: () => fetch('/events.json')
      },

      {
        path: "/service/:id",
        element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
        loader: () => fetch('/services.json')
      },
    ],
  },
]);

export default router;
