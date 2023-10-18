import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import AddProduct from "./pages/AddProduct/AddProduct";
import Cart from "./pages/Cart/Cart";
import Details from "./pages/Details/Details";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import Register from "./pages/Register/Register";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
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
            element: <Details />,
          },
          {
            path: "/addProduct",
            element: <AddProduct />,
          },
          {
            path: "/updateProduct",
            element: <UpdateProduct />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        
      ],
    },
  ]);