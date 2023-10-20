import { createBrowserRouter } from "react-router-dom";
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
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                loader: () => fetch('/fakeData.json'),
                element: <Home />,
            },
            {
                path: "/products/:brand",
                loader: ({ params }) => fetch(`https://brand-shop-server-a10.vercel.app/get-products?brand=${params.brand}`),
                element: <Products />,
            },
            {
                path: "/details/:productId",
                loader: ({ params }) => fetch(`https://brand-shop-server-a10.vercel.app/get-single-product/${params.productId}`),
                element: <PrivateRoute><Details /></PrivateRoute>,
            },
            {
                path: "/addProduct",
                element: <PrivateRoute><AddProduct /></PrivateRoute>,
            },
            {
                path: "/updateProduct/:productId",
                loader: ({ params }) => fetch(`https://brand-shop-server-a10.vercel.app/get-single-product/${params.productId}`),
                element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
            },
            {
                path: "/cart",
                element: <PrivateRoute><Cart /></PrivateRoute>,
            },
            {
                path: "/login",
                element: <PublicRoute><Login /></PublicRoute>,
            },
            {
                path: "/register",
                element: <PublicRoute><Register /></PublicRoute>,
            },

        ],
    },
]);