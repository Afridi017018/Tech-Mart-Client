import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import AddProduct from "./pages/AddProduct/AddProduct";
import Details from "./pages/Details/Details";
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
          {
            path: "/addProduct",
            element: <AddProduct/>,
          },
        
      ],
    },
  ]);