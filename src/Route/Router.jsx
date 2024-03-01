import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import Login from "../Components/Login/Login";
import Singup from "../Components/SIngup/Singup";
import AddProduct from "../Components/AddProduct/AddProduct";
import Products from "../Components/Products/Products";
import Details from "../Components/Details/Details";
import MyCart from "../Components/MyCart/MyCart";
import Update from "../Components/Update/Update";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Components/ErrorPage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <Singup></Singup>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/products/:brand',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://nex-tech-marvels-server-ae3iinbfs-jakirulislamhakim.vercel.app/products/${params.brand}`)
            },
            {
                path: '/product/:id',
                element:<PrivateRoute> <Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://nex-tech-marvels-server-ae3iinbfs-jakirulislamhakim.vercel.app/product/${params.id}`)
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
            },
            {
                path:'/update/:id',
                element:<PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({ params }) => fetch(`https://nex-tech-marvels-server-ae3iinbfs-jakirulislamhakim.vercel.app/product/${params.id}`)
            }
        ]
    }
])

export default Router;