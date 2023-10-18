import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Details from "./components/Details/Details";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
            path: "/products",
            element: <Products />,
          },
          {
            path: "/details",
            element: <Details/>,
          },
        
      ],
    },
  ]);